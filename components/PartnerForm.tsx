"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/emailjs";

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check consent checkbox
    const consent = formData.get("consent");
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please consent to being contacted.");
      return;
    }

    // Format all fields into a single message
    const message = `
NEW PARTNERSHIP INQUIRY

Contact Information:
-------------------
Name: ${formData.get("name")}
Organization: ${formData.get("organization")}
Email: ${formData.get("email")}
Sport/Industry: ${formData.get("sport")}

Inquiry Details:
----------------
Problem to solve:
${formData.get("problem")}

Available data:
${formData.get("data") || "Not specified"}

Desired timeline:
${formData.get("timeline") || "Not specified"}

Files/Links:
${formData.get("link") || "None provided"}

---
Sent via BSA Website Partner Inquiry Form
    `.trim();

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateIds.partner,
        {
          message,
          from_name: formData.get("name"),
          from_email: formData.get("email"),
        },
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage("Failed to send inquiry. Please try emailing directly.");
    }
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="organization">Organization</label>
        <input id="organization" name="organization" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="sport">Sport / industry</label>
        <input id="sport" name="sport" required />
      </div>
      <div className="field full">
        <label htmlFor="problem">Problem to solve</label>
        <textarea id="problem" name="problem" required />
      </div>
      <div className="field">
        <label htmlFor="data">Available data</label>
        <input id="data" name="data" />
      </div>
      <div className="field">
        <label htmlFor="timeline">Desired timeline</label>
        <input id="timeline" name="timeline" />
      </div>
      <div className="field full">
        <label htmlFor="link">File upload or link</label>
        <input id="link" name="link" />
      </div>
      <label className="field full" style={{ display: "flex", gridTemplateColumns: "auto 1fr", alignItems: "center", color: "var(--text-secondary)" }}>
        <input type="checkbox" name="consent" required style={{ width: 18, minHeight: 18 }} />
        I consent to Bruin Sports Analytics contacting me about this inquiry.
      </label>

      {status === "success" && (
        <div className="field full" style={{ padding: "12px 16px", background: "rgba(64, 211, 156, 0.1)", border: "1px solid rgba(64, 211, 156, 0.3)", color: "var(--success)" }}>
          ✓ Inquiry sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="field full" style={{ padding: "12px 16px", background: "rgba(255, 107, 114, 0.1)", border: "1px solid rgba(255, 107, 114, 0.3)", color: "var(--error)" }}>
          {errorMessage || "Failed to send. Please try again."}
        </div>
      )}

      <button
        className="btn btn-primary"
        type="submit"
        data-analytics="partner_form_submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Submit inquiry"}
      </button>
    </form>
  );
}
