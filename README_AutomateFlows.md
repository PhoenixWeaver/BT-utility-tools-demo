# ⚡ Customer Experience Request Management Automation Platform

**Microsoft Power Automate | Power Apps | Microsoft Lists | Outlook | Microsoft 365**

A comprehensive case management and workflow automation solution built to streamline customer service operations across multiple request types, countries, languages, and processing teams. Replaces manual email-based triage with a centralized, automated workflow platform.

---

## 💡 Why This Was Built

Customer service operations at a logistics company involve dozens of daily request types — each with different routing rules, language requirements, SLA timelines, and responsible teams. Managing these manually through shared inboxes and spreadsheets created:

- Duplicate or missed case assignments
- Inconsistent customer notifications
- No real-time visibility into queue status or SLA risk
- Heavy manual effort consolidating AWB data before sending emails

This platform automates the entire lifecycle: intake → classification → routing → tracking → notification.

---

## 🗂️ Platform Overview

| Component | Tool | Purpose |
|---|---|---|
| Request Intake | Microsoft Forms | Structured data collection per request type |
| Workflow Engine | Power Automate | Routing, validation, notifications, status updates |
| Case Tracking | Microsoft Lists | Centralized ownership, status, SLA, follow-up |
| Notifications | Outlook / Shared Mailbox | Automated customer and internal emails |
| Management UI | Power Apps | Dashboard for request monitoring and ops management |

---

## ✨ Key Features

### 1. Multi-Scenario Workflow Engine

Handles a wide range of operational request types through a single unified platform:

- AWB Label Requests
- Unwanted Shipment
- Unreached Shipment
- Clearance Requests
- Picked / Closed Cases
- Other operational exceptions

![Multi-Case Workflow](images/Automate_multiCases.png)
*Switch/Condition routing — each request type follows its own processing path.*

### 2. Dynamic Case Routing

Uses Power Automate **Switch** and **Condition** controls to automatically assign cases based on:

- Request category / type
- Language requirement (Vietnamese or English)
- Business rules and team assignment logic

No manual triage needed — cases land with the right agent or team immediately.

### 3. Multi-Agent Workload Distribution

![Multi-Agent Assignment](images/Automate_multiAgents.png)
*Automated workload distribution — cases routed to agents, specialists, or ops teams based on predefined rules.*

- Assigns cases to the appropriate agent, specialist, or operational team
- Supports round-robin or rule-based distribution
- Prevents duplicate ownership through centralized tracking

### 4. Multilingual Processing

Supports both **Vietnamese** and **English** service requests within the same workflow:

- Language detection at intake
- Bilingual email templates for customer notifications
- Routing to language-appropriate agents

### 5. Centralized Case Tracking (Microsoft Lists)

All cases are tracked in a single Microsoft Lists repository with:

| Field | Purpose |
|---|---|
| Case Owner | Agent / team responsible |
| Status | Created → Follow-Up → Clearance → Picked → Closed |
| SLA Timestamp | Pickup-within-SLA tracking |
| Follow-Up Date | Next action due |
| Request Type | AWB / Unreached / Clearance / etc. |
| Language | VN / EN |
| Completion Outcome | Resolution notes |

Real-time visibility for managers and agents — no more status-check emails.

### 6. Shared Mailbox Integration

Automatically generates and sends standardized communications via shared mailbox:

- Customer-facing status updates (VN + EN)
- Internal team notifications and handoff alerts
- Escalation triggers per SLA matrix

### 7. AWB Consolidation Flow

A dedicated sub-flow solving a specific high-volume pain point:

**Problem:** Multiple AWB rows in SharePoint for the same consignee → agents manually consolidating before emailing.

**Solution:** Cloud flow that:
1. Reads all SharePoint rows for the current batch
2. Normalizes multi-recipient fields (split / trim / toLower)
3. Groups AWBs by recipient using union/join expressions
4. Sends **one consolidated HTML email per customer** via O365 Outlook connector

**Techniques used:** `split()`, `trim()`, `toLower()`, `union()`, `join()`, Filter Array, Create HTML Table, O365 Outlook connector.

![Multi-Flow Architecture](images/Automate_multiFlows.png)
*Flow architecture — multiple sub-flows handling different stages of the case lifecycle.*

---

## 🔄 Case Lifecycle

```
Request Submitted (Microsoft Forms)
        ↓
Power Automate — Intake & Validation
        ↓
Switch / Condition — Route by Type + Language
        ↓
Assign to Agent / Team (Microsoft Lists updated)
        ↓
Automated Customer Notification (Shared Mailbox)
        ↓
Agent Works Case → Updates Status in Lists
        ↓
Follow-Up / Escalation Triggers (if SLA at risk)
        ↓
Case Closed → Completion Record Updated
```

---

## 📊 Business Impact

| Before | After |
|---|---|
| Manual email triage per request type | Automated routing on submission |
| Separate spreadsheets per team | Single Microsoft Lists repository |
| Manual AWB consolidation before emailing | AWB Consolidation Flow — one email per customer |
| No SLA visibility until escalation | Real-time queue and SLA tracking |
| Inconsistent customer messaging | Standardized bilingual templates |
| Heavy manual handoff notes | Automated status updates and notifications |

---

## 🛠️ Technical Stack

- **Microsoft Power Automate** — Cloud flows, Switch/Condition routing, array expressions
- **Microsoft Power Apps** — Request management dashboard
- **Microsoft Forms** — Structured intake per request type
- **Microsoft Lists** — Case tracking and status management
- **Microsoft Outlook / Shared Mailboxes** — Automated email generation
- **Microsoft 365** — Platform backbone
- **SharePoint** — Data repository for AWB and case records
- **Expressions:** `split`, `trim`, `toLower`, `union`, `join`, `filter`, `createHtml`

---

## 📋 ATS-Friendly Summary

> Designed and deployed a Power Automate case management solution supporting multiple customer service scenarios and operational workflows. Built automated case-routing logic assigning requests to appropriate agents and teams based on request type, language, and business rules. Developed centralized tracking dashboards using Microsoft Lists to manage case ownership, status updates, and SLA follow-up. Automated customer and internal stakeholder communications through shared mailbox integrations and bilingual email templates. Implemented multilingual workflows supporting English and Vietnamese requests. Reduced manual effort by automating request intake, classification, assignment, tracking, and notification processes end-to-end.

---

*Built for FedEx Vietnam customer experience operations — designed to scale across request types, teams, and languages.*
