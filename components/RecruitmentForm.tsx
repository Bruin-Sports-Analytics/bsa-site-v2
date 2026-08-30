"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { saveContactSubmission } from "@/lib/contactSubmissions";
import { emailjsConfig } from "@/lib/emailjs";

export function RecruitmentForm() {
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
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const major = String(formData.get("major") || "");
    const sport = String(formData.get("sport") || "");
    const recruitmentMessage = String(formData.get("message") || "");

    const message = `
NEW RECRUITMENT INQUIRY

Contact Information:
-------------------
Name: ${name}
Email: ${email}
Major: ${major}
Sport Interest: ${sport || "Not specified"}

Message:
--------
${recruitmentMessage}

---
Sent via BSA Website Recruitment Form
    `.trim();

    try {
      await saveContactSubmission({
        formType: "recruitment",
        name,
        email,
        major,
        sport,
        message: recruitmentMessage,
        consent: true
      });

      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateIds.recruitment,
        {
          message,
          from_name: name,
          from_email: email,
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
      console.error("Recruitment form error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try emailing directly.");
    }
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="major">Major</label>
        <input id="major" name="major" required />
      </div>
      <div className="field">
        <label htmlFor="sport">Sport interest</label>
        <input id="sport" name="sport" />
      </div>
      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <label className="field full" style={{ display: "flex", gridTemplateColumns: "auto 1fr", alignItems: "center", color: "var(--text-secondary)" }}>
        <input type="checkbox" name="consent" required style={{ width: 18, minHeight: 18 }} />
        I consent to Bruin Sports Analytics contacting me about this inquiry.
      </label>

      {status === "success" && (
        <div className="field full" style={{ padding: "12px 16px", background: "rgba(64, 211, 156, 0.1)", border: "1px solid rgba(64, 211, 156, 0.3)", color: "var(--success)" }}>
          ✓ Message sent successfully! We&apos;ll get back to you soon.
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
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
