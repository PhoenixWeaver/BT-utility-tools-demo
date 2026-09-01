# Order Automation System

A web-based order automation system for FedEx supply management, built as a module inside PhoenixFlix. It handles customer supply order processing with intelligent allocation algorithms and duplicate prevention.

## 🚀 Features

### Core Functionality
- **Intelligent Order Parsing**: Parses structured text input containing customer details and supply items
- **Smart Allocation System**: Applies category limits with proportional distribution (largest remainder method)
- **Duplicate Order Protection**: Prevents multiple pending orders for the same account, items, and address
- **Order History Tracking**: Complete audit trail with order status and approval details
- **VIP & Modified Orders**: Override workflows with required reason logging

### Supply Management
- **Category-Based Limits**:
  - Envelopes: Maximum 10 units total
  - Boxes: Maximum 10 units with proportional allocation
  - Paks: Maximum 30 units total
- **Item-Specific Limits**: Individual caps for special items (thermal labels, international pouches)
- **Brown Box Cleanup**: Automatic normalization of `(Box A/B/C/D/E) Box` suffixes before categorization

### User Interface
- **Clean Web Interface**: Intuitive browser-based application
- **Three Submission Modes**: Regular, Modified (with reason), and VIP (approved full-quantity override)
- **Order History Viewer**: Account-based order retrieval and status tracking
- **Tracking Management**: Add or update tracking numbers; status auto-updates to "Shipped"
- **Email Composer**: Client-side `mailto:` receipt generation

## 📸 Screenshots

### Main Application Interface
![Order Automation GUI](./images/orders_GUI.png)

*Main dashboard showing order input, parsing controls, and submission interface*

### Order Processing Output
![Regular Order Output](./images/orders_RegOutput.png)

*Example of parsed order output with approval details and allocation breakdown*

## 🔧 Technical Architecture

### Backend (Go)
- **Language**: Go — part of the PhoenixFlix monolith (`handlers/order_handler.go`)
- **Data Management**: In-memory order storage (`[]Order` slice — cleared on server restart)
- **Validation**: JSON decoding, required-field checks, and duplicate detection
- **Allocation Engine**: Proportional distribution (largest remainder method) per category

### Frontend (Vanilla JavaScript)
- **Source**: `public/orders.js` (readable) → `public/min/orders.min.js` (generated)
- **API Integration**: `fetch` with async/await; reads `response.text()` before `JSON.parse` to handle plain-text errors
- **Data Parsing**: Flexible tab/space/digit-suffix text parser
- **State Management**: Module-level `parsedOrder`, `lastOrderId`, `lastAccountNo`

## 📋 API Endpoints

All routes are registered under the `/FedEx/` namespace in `main.go`.

### Order Management
- `POST /FedEx/orders` — Submit new order (regular, modified, or VIP)
- `GET /FedEx/orders/{accountNo}` — Retrieve order history by account
- `GET /FedEx/orders` — Get all orders (admin dump, no auth in demo)
- `GET /FedEx/order/{orderId}` — Get specific order details
- `PUT /FedEx/order/{orderId}/tracking` — Add or update tracking number

### Request/Response Examples

#### Submit Regular Order
```json
POST /FedEx/orders
{
  "items": [
    { "itemName": "FedEx Envelope", "requestedQty": 5, "qtyLimit": 30 }
  ],
  "customer": {
    "accountno": "698583622",
    "company": "Example Company",
    "alt-address1": "123 Main St"
  }
}
```

#### Submit VIP Order
```json
POST /FedEx/orders
{
  "items": [...],
  "customer": { "accountno": "698583622" },
  "isVip": true,
  "vipReason": "Manager approved full quantity"
}
```

#### Submit Modified Order
```json
POST /FedEx/orders
{
  "items": [...],
  "customer": { "accountno": "698583622" },
  "isModified": true,
  "modifyReason": "Customer requested address change"
}
```

#### Order Response
```json
{
  "orderId": "ORD-1640995200000",
  "customer": { "accountno": "698583622", "company": "Example Company" },
  "requestedItems": [
    { "itemName": "FedEx Envelope", "requestedQty": 5, "qtyLimit": 30 }
  ],
  "approvedItems": [
    { "itemName": "FedEx Envelope", "requestedQty": 5, "qtyLimit": 30, "approvedQty": 5, "category": "envelope" }
  ],
  "status": "pending",
  "createdAt": "2025-01-01T14:10:06Z",
  "summary": "Order ORD-1640995200000 is on the way with:\n5 x FedEx Envelope"
}
```

#### Duplicate Response (409 Conflict)
```json
{
  "error": "Duplicate order – same account, same items & quantities, same address. Change any item, quantity, or address — or use Modify / VIP to override.",
  "duplicateOfId": "ORD-1640995200000",
  "duplicateItems": [...]
}
```

## 🛠 Installation & Setup

This module runs as part of the PhoenixFlix Go server. No separate installation is needed.

```bash
# From the project root
go run .

# Open in browser
# http://localhost:8080/orders
```

## 📖 Usage Guide

### 1. Order Input
Paste structured order text in the textarea (tab-separated or space-separated):
```
FedEx Envelope (Qty. limit 30)	5
FedEx Small Box (Qty. limit 10)	3
accountno	698583622
company	Example Company
alt-address1	123 Main St
```

### 2. Parse Order
Click **Request** to parse and preview. The system extracts customer fields and item rows.

### 3. Submit Order
- **Regular**: Click **Submit Regular Order** — applies category limits and duplicate check
- **Modified**: Enable **Check and Modify**, edit quantities/address, enter a reason, click **Submit Modified Order**
- **VIP**: Use the VIP panel, check **Approved**, enter a reason, click **Submit VIP Order**

### 4. View History
Enter an account number and click **Fetch History** to view all orders for that account.

## 🔍 Key Functions

### Allocation Logic (`allocateProportions`)
Uses the **largest remainder method**:
1. Calculate each item's fractional share of the category limit
2. Assign floor values first
3. Distribute remaining units to items with the largest fractional remainders
4. Ties broken by larger requested quantity

### Duplicate Detection (`sameItems`)
A regular order is rejected only when all match an existing `pending` order:
- Same `accountno`
- Same non-zero item name + quantity pairs (order-insensitive)
- Same `alt-address1`

VIP and modified orders skip this check entirely.

### Item Categorization (`categorizeItem`)
Strips `(Box A/B/C/D/E) Box` suffixes before matching against `CATEGORY` map entries. Returns `envelope`, `pak`, `box`, or `other`.

## 🔒 Security & Validation

- **Required Fields**: `items` array and `customer.accountno` are required for all submissions
- **Quantity Bounds**: Clamped to `[0, effectiveLimit]` where `effectiveLimit = min(qtyLimit, itemSpecificLimit)`
- **Duplicate Protection**: Prevents conflicting pending orders for the same account
- **Storage Limitation**: In-memory only — all orders are lost on server restart

## 📊 Order Categories

### Envelopes (Limit: 10 total)
- FedEx Envelope

### Paks (Limit: 30 total)
- FedEx Reusable Padded Pak
- FedEx Reusable Large Pak
- FedEx Reusable Extra Large Pak

### Boxes (Limit: 10 total)
- FedEx Small Box, Medium Box, Large Box
- FedEx 10kg Box, 25kg Box
- FedEx Large/Small/Medium/Jumbo/Extra Large Brown Box

### Special Items (Item-Specific Limits, No Category Cap)
- FedEx International Pouches (Limit: 50)
- Thermal Label 154250 (Limit: 2)
- Thermal Label 156148 (Limit: 2)

## 👤 Author

© 2025 ThePhoenixFlix - Ben Tran
- GitHub: https://github.com/ThePhoenixFlix
- Email: ThePhoenixFlix@gmail.com
- Website: https://bit.ly/ThePhoenixFlix

## 🚀 Deployment

Deployed as part of the PhoenixFlix backend on Render. The frontend static files are served by the same Go server.

```dockerfile
FROM golang:1.25-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
CMD ["./main"]
```

## 📄 License

This project is licensed under the BSD 3-Clause License.

---

*Built with Go, vanilla JavaScript, and in-memory storage for reliable supply order automation.*
