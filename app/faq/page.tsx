import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ"
};

export default function FAQPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>Questions, answered once.</h1>
          <p>Membership, recruitment, technical background, events, partnerships, and data privacy answers are stored in one reusable collection.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
