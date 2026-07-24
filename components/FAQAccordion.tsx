"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";
import { slugify } from "@/lib/utils";
import styles from "./FAQAccordion.module.css";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = slugify(question);
  const panelId = `${id}-panel`;

  return (
    <div className={`${styles.item} ${open ? styles.open : ""}`} id={id}>
      <button
        type="button"
        className={styles.summary}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{question}</span>
        <ChevronDown size={20} aria-hidden className={styles.icon} />
      </button>
      <div className={styles.panel} id={panelId} role="region" aria-labelledby={id}>
        <div className={styles.panelInner}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ category }: { category?: string }) {
  const items = category ? faqs.filter((faq) => faq.category === category) : faqs;

  return (
    <div className={styles.accordion}>
      {items.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
