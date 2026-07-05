"use client";

import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";
import { slugify } from "@/lib/utils";
import styles from "./FAQAccordion.module.css";

export function FAQAccordion({ category }: { category?: string }) {
  const items = category ? faqs.filter((faq) => faq.category === category) : faqs;

  return (
    <div className={styles.accordion}>
      {items.map((faq) => (
        <details className={styles.item} id={slugify(faq.question)} key={faq.question}>
          <summary>
            <span>{faq.question}</span>
            <ChevronDown size={20} aria-hidden />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
