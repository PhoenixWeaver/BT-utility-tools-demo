# ✈️ Booking Generator

A web-based utility to automatically generate FedEx booking request emails by parsing shipment data from CED and eOPS, checking it against configurable rules, and creating a ready-to-send email body.

## 🚀 Features

-   **Dual-Input Parsing**: Extracts shipment details from both raw **CED** and **eOPS** text formats simultaneously.
-   **Automated Rule Checking**: Validates the shipment against configurable rules for weight and dimensions.
-   **Freight Service Validation**: Automatically flags if a shipment must be sent as Freight based on per-piece weight (e.g., > 68kg).
-   **Space Booking Logic**: Determines if space booking is required by comparing the shipment's total weight and dimensions against service thresholds (IP, IE, IPF, IEF).
-   **Dynamic Output Generation**:
    -   Creates a pre-filled, editable booking table with all necessary shipment details.
    -   Generates a complete HTML-formatted email body ready to be copied and pasted directly into Outlook.
    -   Provides clear visual indicators (✅, ⚠️, 🚨) for the status of freight and space booking requirements.
-   **Configurable Rules**: Allows real-time adjustment of weight and dimension thresholds via a `⚙️ Rules` panel for maximum flexibility.

## 🔧 Technical Architecture

## 📸 Screenshots

### 1. Configurable Rules Panel
![Rules Panel](images/bookings_rules.png)
*The slide-out panel where users can adjust weight and dimension thresholds in real-time.*

### 2. Generated Booking Output
![Booking Output](images/bookings_output.png)
*Example of a complete booking output, including validation badges and an editable data table.*

### 3. Final Email Template
![Email Template](images/bookings_emailTemplate.png)
*The final HTML email template, ready to be copied and pasted into an email client like Outlook.*

-   **Frontend**: Built with pure Vanilla JavaScript, HTML5, and CSS3. All logic is processed client-side for speed and privacy.
-   **Data Parsing**: Uses a series of regular expressions to reliably extract key data points (AWB, dimensions, weight, service type, etc.) from unstructured text inputs.
-   **Business Logic**: Implements a rules engine in JavaScript to evaluate booking requirements against the user-defined thresholds.

## 📖 Usage Guide

### Step 1 — Input Data

-   Paste the **CED (Customs Entry Document)** information into the left textarea.
-   Paste the **eOPS (electronic Operations Processing System)** details into the right textarea.
-   You can use the `📋 Load Example` buttons in each panel to see the expected text format. The tool can extract data from one or both inputs.

### Step 2 — (Optional) Adjust Rules

-   Click the `⚙️ Rules` button at the top of the page to expand the rules panel.
-   Modify the weight (kg) and dimension (cm) thresholds for different services as needed. Changes are applied instantly.

### Step 3 — Generate Booking

-   Click the `⚡ Generate Booking` button.
-   The system will parse the inputs, run the validation checks, and display the complete booking output.

### Step 4 — Review Output

-   **Check Badges**: Quickly see if Freight service or Space Booking is required.
    -   `✅ Freight: OK`: The per-piece weight is within parcel limits.
    -   `⚠️ Freight Required`: A piece exceeds the 68kg limit and must be sent as freight.
    -   `✅ Space Booking: Not Required`: The shipment is within all dimension and weight limits.
    -   `🚨 Book Space!`: The shipment exceeds one or more rules and requires a space booking. The specific reason is listed in the email body.
-   **Booking Table**: Verify that all extracted data in the table is correct. You can click on any cell to edit it directly.
-   **Email Body**: Review the generated reasons for space booking (if any).

### Step 5 — Copy Email

-   Click the `📋 Copy Email` button.
-   This copies the entire HTML-formatted email (Subject, "Dear Ramp team," message, booking table, and space booking reasons) to your clipboard.
-   Paste it directly into a new email in Microsoft Outlook.

## 📐 Business Rules Explained

The tool checks for two main conditions:

1.  **Freight Requirement**:
    -   A shipment is flagged as `⚠️ Freight Required` if any single piece weighs more than **68 kg**. This is a standard carrier rule for distinguishing between parcel and freight services.

2.  **Space Booking Requirement**:
    -   A shipment is flagged as `🚨 Book Space!` if it violates any of the rules defined in the `⚙️ Rules` panel. This can include:
        -   **Total Weight**: Exceeding the threshold for the specified service (e.g., > 100 kg for IPF).
        -   **Dimensions**: Exceeding the max length, width, or height.
        -   **Length & Girth**: Exceeding the combined `Length + 2*(Width + Height)` limit.

---
*This tool is designed for internal use to streamline the booking process and ensure compliance with shipping regulations.*
