# Autonomous Customer Support Agent for Contoso Coffee

> An intelligent customer support solution built with Microsoft Copilot Studio, Power Automate, Outlook, and Generative AI.
>
> This project demonstrates how AI agents can automate customer service workflows by combining conversational AI, knowledge-grounded responses, order management processes, and autonomous email automation.

---

## Executive Summary

The **Contoso Coffee AI Customer Support Agent** was developed using Microsoft Copilot Studio as part of Microsoft's AI Agent and Copilot Studio training programme.

The solution enables customers and support teams to interact with an intelligent conversational agent capable of:

- Answering customer questions using organisational knowledge
- Retrieving order status information
- Supporting order-related enquiries
- Providing product information
- Monitoring incoming customer emails
- Automatically generating personalised email responses
- Executing autonomous workflows using event-driven triggers

The project showcases modern AI agent capabilities by integrating conversational AI, business data, Outlook, and Power Automate into a unified customer support experience.

---

# Project Overview

## Business Scenario

Contoso Coffee sells coffee machines and related products.

Customers frequently contact support teams to:

- Check the status of existing orders
- Request product information
- Ask questions about returns and policies
- Submit support enquiries
- Cancel orders

Traditionally these requests require customer service personnel to manually review emails, search for information, and draft responses.

This AI-powered solution automates these tasks and improves response times while maintaining a professional customer experience.

---

# Solution Capabilities

## Conversational AI

The agent understands natural language and can engage in multi-turn conversations with customers.

### Examples

- "What's the status of my order?"
- "Tell me about coffee machine maintenance."
- "Can I cancel my order?"
- "What is your return policy?"

---

## Knowledge-Grounded Responses

The agent uses configured knowledge sources to provide accurate responses based on approved business information.

### Knowledge Sources

- Internal business content
- Product information
- Return policies
- Customer support documentation
- Public websites
- Uploaded documents

---

## Order Support Automation

The solution can:

- Retrieve order information
- Check order status
- Provide customer-specific responses
- Generate personalised communications
- Assist support workflows

---

## Autonomous Email Processing

The agent extends beyond traditional chat capabilities.

Using autonomous triggers and Power Automate, it can:

- Monitor incoming emails
- Detect order enquiries
- Extract order identifiers
- Retrieve relevant information
- Generate customer responses
- Automatically send email replies

This demonstrates an event-driven AI architecture where the agent proactively performs work without waiting for a user conversation.

---

# Technologies Used

| Technology | Purpose |
|------------|----------|
| Microsoft Copilot Studio | AI Agent Development |
| Microsoft Power Automate | Workflow Automation |
| Microsoft Outlook | Email Integration |
| Office 365 Outlook Connector | Email Triggering |
| Microsoft Dataverse | Data Platform |
| Generative AI | Response Generation |
| Knowledge Sources | Grounded AI Responses |
| Autonomous Triggers | Event-Driven Automation |

---

# Solution Architecture

```text
Customer Email
       │
       ▼
Microsoft Outlook
       │
       ▼
Autonomous Trigger
       │
       ▼
Extract Order Information
       │
       ▼
Retrieve Order Data
       │
       ▼
Generate AI Response
       │
       ▼
Send Automated Reply
       │
       ▼
Customer Receives Response
```

---

# Solution Walkthrough

## Figure 1 – Agent Configuration

**File:** `images/Figure01_AgentConfiguration.png`

![Agent Configuration](images/Figure01_AgentConfiguration.png)

### Description

The agent was configured in Microsoft Copilot Studio using custom instructions, conversational guidance, and business support policies.

Key configuration areas include:

- Agent identity and purpose
- AI instructions
- Behavioural guidelines
- Knowledge configuration
- Model selection
- Customer support workflows

This configuration ensures that customer interactions remain professional, accurate, and aligned with approved business information.

---

## Figure 2 – Customer Request Processing

**File:** `images/Figure02_CustomerRequestProcessing.png`

![Customer Request Processing](images/Figure02_CustomerRequestProcessing.png)

### Description

The testing environment demonstrates how the agent responds to customer requests using natural language understanding and contextual reasoning.

Example workflow:

1. Customer requests order status.
2. Agent identifies the order reference.
3. Agent retrieves order information.
4. Agent generates a personalised response.
5. Agent confirms successful communication.

### Example Customer Query

> "What is the status of Order ID 1009?"

### Example Outcome

The agent returns:

- Order identifier
- Product details
- Current order status
- Pricing information
- Confirmation of generated response

---

## Figure 3 – Automated Email Response

**File:** `images/Figure03_AutomaticEmailResponse.png`

![Automated Email Response](images/Figure03_AutomaticEmailResponse.png)

### Description

The Outlook mailbox shows an email automatically generated by the AI agent.

### Automated Workflow

1. Customer sends an email enquiry.
2. Outlook detects incoming mail.
3. Autonomous trigger activates.
4. Order details are extracted.
5. Order information is retrieved.
6. AI generates a personalised response.
7. Outlook sends the email automatically.

### Business Value

- Reduced manual effort
- Faster customer response times
- Consistent communication
- Improved customer experience
- Scalable support operations

---

# Key Outcomes

This project demonstrates:

✅ Conversational AI development

✅ Prompt engineering and instruction design

✅ Microsoft Copilot Studio development

✅ Knowledge-grounded AI responses

✅ Customer support automation

✅ Outlook integration

✅ Power Automate workflow orchestration

✅ Autonomous AI agent capabilities

✅ Event-driven business process automation

✅ End-to-end AI solution implementation

---

# Design
- Generative AI
- Prompt Engineering
- Knowledge Grounding
- Autonomous Workflows

### Microsoft Technologies

- Microsoft Copilot Studio
- Power Automate
- Microsoft Outlook
- Office 365 Connectors
- Dataverse

### Solution Design

- Customer Service Automation
- Workflow Automation
- Event-Driven Architecture
- Business Process Optimisation

---

# Microsoft Learn Training

This project was developed while completing Microsoft Learn training modules related to AI agents and Microsoft Copilot Studio.

Completed modules include:

- Introduction to Developing AI Agents
- Build Agents in Copilot Chat
- Build Intelligent Agents in Microsoft Copilot Studio
- Build a Conversational Agent in Copilot Studio
- Use Tools in Copilot Studio
- Make Your Agent Autonomous in Copilot Studio

### Microsoft Learn Achievement Links

- Introduction to Developing AI Agents
- Build Agents in Copilot Chat
- Build Intelligent Agents in Microsoft Copilot Studio
- Build a Conversational Agent in Copilot Studio
- Use Tools in Copilot Studio
- Make Your Agent Autonomous in Copilot Studio

---

# Project Status

**Status:** ✅ Completed

**Environment:** Microsoft Copilot Studio Developer Environment

**Publication:** Private

**Demo URL:** Private

---

# Author

## Ben Tran

AI Agent Developer | Microsoft Copilot Studio | Power Platform

### Focus Areas

- AI Agents
- Copilot Studio
- Power Automate
- Intelligent Automation
- Conversational AI
- Generative AI Solutions

---

## Repository Structure

```text
AI-Contoso-Agent-Helper/
│
├── README.md
│
├── images/
│   ├── Figure01_AgentConfiguration.png
│   ├── Figure02_CustomerRequestProcessing.png
│   └── Figure03_AutomaticEmailResponse.png
│
└── docs/
    ├── Architecture.md
    └── TrainingEvidence.md
```

---

*"Demonstrating how Microsoft Copilot Studio can evolve from a conversational assistant into an autonomous business agent capable of understanding requests, retrieving information, and taking action on behalf of users."*