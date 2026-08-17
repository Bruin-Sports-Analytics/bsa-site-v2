# EmailJS Template Configuration

This document lists all form fields that are sent to EmailJS. Configure your EmailJS templates to include these variables.

## Partner Inquiry Form Template

Template ID: `template_mruwo4m`

### Available Variables:

Use these variables in your EmailJS template by wrapping them in double curly braces, e.g., `{{name}}`

- `{{name}}` - Contact's name (required)
- `{{organization}}` - Organization name (required)
- `{{email}}` - Contact email address (required)
- `{{sport}}` - Sport or industry focus (required)
- `{{problem}}` - Problem to solve (required)
- `{{data}}` - Available data description (optional)
- `{{timeline}}` - Desired timeline (optional)
- `{{link}}` - File upload or link (optional)

### Suggested Email Template:

```
Subject: New Partnership Inquiry from {{name}}

New partnership inquiry received:

From: {{name}}
Organization: {{organization}}
Email: {{email}}
Sport/Industry: {{sport}}

Problem to solve:
{{problem}}

Available data:
{{data}}

Desired timeline:
{{timeline}}

Files/Links:
{{link}}

---
Sent via BSA Website Contact Form
```

---

## Recruitment Form Template

Template ID: `template_mruwo4m` (using same template currently)

### Available Variables:

- `{{name}}` - Student's name (required)
- `{{email}}` - Student email address (required)
- `{{major}}` - Academic major (required)
- `{{sport}}` - Sport interest (optional)
- `{{message}}` - Message content (required)

### Suggested Email Template:

```
Subject: Recruitment Question from {{name}}

New recruitment inquiry received:

From: {{name}}
Email: {{email}}
Major: {{major}}
Sport Interest: {{sport}}

Message:
{{message}}

---
Sent via BSA Website Recruitment Form
```

---

## How to Configure in EmailJS:

1. Go to https://dashboard.emailjs.com/admin/templates
2. Open your template (or create a new one)
3. Edit the template content
4. Use the variable names above with `{{variable_name}}` syntax
5. Configure the "To Email" field to send to the appropriate recipient:
   - Partner template → `vardaansinha28@g.ucla.edu` (External VP)
   - Recruitment template → `mateoshelton@ucla.edu` (Recruitment Chair)
6. Test the template with the "Test It" button
7. Save the template

## Testing

After configuring the templates, test both forms on your website to ensure:
- All fields appear in the received emails
- Email formatting looks correct
- Emails arrive at the correct recipient addresses
