import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Bruin Sports Analytics at UCLA: student recruitment and applications, sports analytics consulting partnerships, and club projects.",
  keywords: [
    "Bruin Sports Analytics FAQ",
    "how to join BSA UCLA",
    "sports analytics recruitment requirements",
    "sports analytics consulting partner FAQ",
    "UCLA sports analytics club questions",
    "UCLA sports club application"
  ],
  openGraph: {
    title: "FAQ | Bruin Sports Analytics",
    description: "Answers about student recruitment, membership requirements, and consulting partnerships at UCLA.",
    url: "https://www.bruinsportsanalytics.org/faq"
  }
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h1>Frequently asked questions</h1>
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
