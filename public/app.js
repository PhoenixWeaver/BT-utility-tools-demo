const parseButton = document.getElementById('parseButton');
const submitButton = document.getElementById('submitOrderButton');
const orderText = document.getElementById('orderText');
const parsedOutput = document.getElementById('parsedOutput');
const submitResponse = document.getElementById('submitResponse');
const fetchHistoryButton = document.getElementById('fetchHistoryButton');
const historyAccount = document.getElementById('historyAccount');
const historyResponse = document.getElementById('historyResponse');

let parsedOrder = null;

function parseOrderText(text) {
  const lines = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const items = [];
  const customer = {};

  for (const line of lines) {
    // Try tab-separated first, then fall back to space-separated
    let parts = line.split(/\t+/).map(part => part.trim());
    if (parts.length !== 2) {
      parts = line.split(/\s{2,}/).map(part => part.trim());
    }
    // If still not 2 parts, try splitting from the right to find the last number
    if (parts.length !== 2) {
      const match = line.match(/^(.+?)\s+(\d+)\s*$/);
      if (match) {
        parts = [match[1].trim(), match[2]];
      }
    }

    if (parts.length === 2) {
      const [key, value] = parts;
      if (/accountno|firstname|lastname|company|alt-address1|alt-address2|alt-city|alt-postalcode|phoneno/i.test(key)) {
        customer[key] = value;
      } else {
        const qtyMatch = key.match(/^(.*?)\s*\(Qty\. limit\s*(\d+)/i);
        if (qtyMatch) {
          items.push({ itemName: qtyMatch[1].trim(), qtyLimit: Number(qtyMatch[2]), requestedQty: Number(value) });
        }
      }
    }
  }

  return { items, customer };
}

function formatParsed(parsed) {
  if (!parsed || !parsed.customer.accountno) {
    return 'Regular order is incomplete. Make sure accountno and item rows are present.';
  }
  const lines = ['Customer account: ' + parsed.customer.accountno];
  if (parsed.items.length === 0) {
    lines.push('No items found.');
  } else {
    lines.push('Items:');
    parsed.items.forEach(item => {
      lines.push(`- ${item.itemName}: ${item.requestedQty}`);
    });
  }
  return lines.join('\n');
}

parseButton.addEventListener('click', () => {
  parsedOrder = parseOrderText(orderText.value);
  parsedOutput.textContent = formatParsed(parsedOrder);
  submitResponse.textContent = '';
});

submitButton.addEventListener('click', async () => {
  if (!parsedOrder || !parsedOrder.customer.accountno) {
    submitResponse.textContent = 'Please process a valid regular order before submitting.';
    return;
  }
  try {
    const response = await fetch('/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsedOrder)
    });
    const data = await response.json();
    if (!response.ok) {
      submitResponse.textContent = `Error: ${data.error || 'Unknown problem'}`;
      return;
    }
    submitResponse.textContent = `Order created: ${data.orderId}\nStatus: ${data.status}\n${data.summary}`;
  } catch (error) {
    submitResponse.textContent = `Network error: ${error.message}`;
  }
});

fetchHistoryButton.addEventListener('click', async () => {
  const accountNo = historyAccount.value.trim();
  if (!accountNo) {
    historyResponse.textContent = 'Please enter an account number.';
    return;
  }
  try {
    const response = await fetch(`/orders/${encodeURIComponent(accountNo)}`);
    const data = await response.json();
    if (!response.ok) {
      historyResponse.textContent = `Error: ${data.error || 'Could not load history'}`;
      return;
    }
    if (data.length === 0) {
      historyResponse.textContent = 'No orders found for that account.';
      return;
    }
    historyResponse.textContent = data.map(order => {
      return `${order.orderId} (${order.status}) - ${order.summary}`;
    }).join('\n');
  } catch (error) {
    historyResponse.textContent = `Network error: ${error.message}`;
  }
});
