const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const orders = [];

const CATEGORY = {
  envelopes: [
    'FedEx Envelope'
  ],
  paks: [
    'FedEx Reusable Padded Pak',
    'FedEx Reusable Large Pak',
    'FedEx Reusable Extra Large Pak'
  ],
  boxes: [
    'FedEx Small Box',
    'FedEx Medium Box',
    'FedEx Large Box',
    'FedEx 10kg Box',
    'FedEx 25kg Box',
    'FedEx Large Brown Box',
    'FedEx Small Brown Box',
    'FedEx Medium Brown Box',
    'FedEx Jumbo Brown Box',
    'FedEx Extra Large Brown Box'
  ]
};

const ITEM_LIMITS = {
  'FedEx International Pouches': 50,
  'Thermal Label 154250': 2,
  'Thermal Label 156148': 2
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function categorizeItem(itemName) {
  // Clean up item name by removing labels like "(Box A)", "(Box B)", etc.
  const cleanedName = itemName.replace(/\s*\(Box [A-Z]\)\s*Box\s*$/i, '').trim();
  
  if (CATEGORY.envelopes.includes(cleanedName) || CATEGORY.envelopes.includes(itemName)) {
    return 'envelope';
  }
  if (CATEGORY.paks.includes(cleanedName) || CATEGORY.paks.includes(itemName)) {
    return 'pak';
  }
  if (CATEGORY.boxes.includes(cleanedName) || CATEGORY.boxes.includes(itemName)) {
    return 'box';
  }
  return 'other';
}

function allocateProportions(items, totalLimit) {
  const requestedTotal = items.reduce((sum, item) => sum + item.requestedQty, 0);
  if (requestedTotal <= totalLimit) {
    return items.map(item => ({ ...item, approvedQty: item.requestedQty }));
  }

  const baseAllocations = items.map(item => {
    const rawShare = item.requestedQty * totalLimit / requestedTotal;
    return {
      item,
      base: Math.floor(rawShare),
      remainder: rawShare - Math.floor(rawShare)
    };
  });

  let assigned = baseAllocations.reduce((sum, row) => sum + row.base, 0);
  const remaining = totalLimit - assigned;

  const sorted = [...baseAllocations].sort((a, b) => b.remainder - a.remainder || b.item.requestedQty - a.item.requestedQty);
  for (let i = 0; i < remaining; i += 1) {
    sorted[i].base += 1;
  }

  return baseAllocations.map(row => ({ ...row.item, approvedQty: row.base }));
}



function processOrder(items, accountNo, customer) {
  const normalizedItems = items.map(item => {
    const itemLimit = ITEM_LIMITS[item.itemName] || Number.MAX_SAFE_INTEGER;
    return {
      itemName: item.itemName,
      requestedQty: clamp(Number(item.requestedQty) || 0, 0, Number.MAX_SAFE_INTEGER),
      qtyLimit: clamp(Number(item.qtyLimit) || 0, 0, Number.MAX_SAFE_INTEGER),
      itemSpecificLimit: itemLimit,
      approvedQty: 0,
      category: categorizeItem(item.itemName)
    };
  });

  // Apply both qty limit and item-specific limit
  normalizedItems.forEach(item => {
    const effectiveLimit = Math.min(item.qtyLimit, item.itemSpecificLimit);
    item.requestedQty = Math.min(item.requestedQty, effectiveLimit);
  });

  const envelopeItems = normalizedItems.filter(item => item.category === 'envelope');
  const pakItems = normalizedItems.filter(item => item.category === 'pak');
  const boxItems = normalizedItems.filter(item => item.category === 'box');
  const otherItems = normalizedItems.filter(item => item.category === 'other');

  const allocatedEnvelopes = allocateProportions(envelopeItems, 10);
  const allocatedPaks = allocateProportions(pakItems, 30);
  const allocatedBoxes = allocateProportions(boxItems, 10);

  const finalItems = [
    ...allocatedEnvelopes,
    ...allocatedPaks,
    ...allocatedBoxes,
    ...otherItems.map(item => ({ ...item, approvedQty: item.requestedQty }))
  ];

  return finalItems;
}

function buildSummary(order) {
  const lines = order.approvedItems
    .filter(item => item.approvedQty > 0)
    .map(item => `${item.approvedQty} x ${item.itemName}`);
  return lines.length ? lines.join('\n') : 'No items approved.';
}

app.post('/orders', (req, res) => {
  const { items, customer } = req.body;
  if (!Array.isArray(items) || !customer || !customer.accountno) {
    return res.status(400).json({ error: 'Invalid order payload; items and customer.accountno are required.' });
  }

  const accountNo = String(customer.accountno).trim();
  const pending = orders.find(order => order.customer.accountno === accountNo && order.status === 'pending');
  if (pending) {
    return res.status(409).json({ error: 'Duplicate order – please wait for the pending order to get your current items.' });
  }

  const approvedItems = processOrder(items, accountNo, customer);
  const orderId = `ORD-${Date.now()}`;
  const order = {
    orderId,
    customer,
    approvedItems,
    requestedItems: items,
    status: 'pending',
    createdAt: new Date().toISOString(),
    summary: ''
  };
  order.summary = `Order ${order.orderId} is on the way with:\n${buildSummary(order)}`;

  orders.push(order);
  return res.status(201).json(order);
});

app.get('/orders/:accountNo', (req, res) => {
  const accountNo = String(req.params.accountNo).trim();
  const results = orders.filter(order => order.customer.accountno === accountNo);
  return res.json(results);
});

app.get('/orders', (req, res) => {
  return res.json(orders);
});

app.get('/order/:orderId', (req, res) => {
  const order = orders.find(o => o.orderId === req.params.orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found.' });
  }
  return res.json(order);
});

app.listen(port, () => {
  console.log(`Order automation server listening on http://localhost:${port}`);
});
