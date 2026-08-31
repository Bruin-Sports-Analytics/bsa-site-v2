import type { Metadata } from "next";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PartnerForm } from "@/components/PartnerForm";
import { capabilities, technology } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Partner with Bruin Sports Analytics for data-driven consulting, predictive modeling, opponent scouting, and custom dashboards. Work with top UCLA sports data science talent.",
  keywords: [
    "sports analytics consulting",
    "partner with sports analytics club",
    "athletic department analytics consulting",
    "sports data science consulting",
    "sports performance analytics partner",
    "college sports analytics consulting",
    "pro sports analytics research partner",
    "sports scouting dashboards",
    "hire student sports analysts",
    "UCLA sports consulting"
  ],
  openGraph: {
    title: "Partner With Bruin Sports Analytics | Sports Analytics Consulting",
    description: "Data-driven sports analytics consulting, predictive modeling, and scouting dashboards from top UCLA data science students.",
    url: "https://www.bruinsportsanalytics.org/partner"
  }
};

export default function PartnerPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bruin Sports Analytics Consulting Services",
    "provider": {
      "@type": "Organization",
      "name": "Bruin Sports Analytics",
      "url": "https://www.bruinsportsanalytics.org"
    },
    "serviceType": "Sports Analytics Consulting",
    "description": "Custom sports data analysis, opponent scouting reports, predictive performance modeling, and interactive visualization dashboards for athletic teams and sports organizations.",
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sports Analytics Capabilities",
      "itemListElement": capabilities.map((cap) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": cap.title,
          "description": cap.text
        }
      }))
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Partner with us</span>
          <h1>Consulting for sports organizations</h1>
          <p>Bruin Sports Analytics combines analytics, engineering, visualization, and domain knowledge to solve competitive and operational problems.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-title">What we deliver</h2>
          <div className="grid three">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article className="card" style={{ padding: 24 }} key={capability.title}>
                  <Icon color="var(--ucla-gold)" size={30} aria-hidden />
                  <h3 style={{ fontFamily: "var(--font-sora)", fontSize: 23 }}>{capability.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{capability.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Engagement process</span>
          <h2 className="section-title">How a project works</h2>
          <div className="grid four">
            {["Discovery", "Scope and data review", "Build and iterate", "Present and hand off"].map((step, index) => (
              <article className="card" style={{ padding: 22 }} key={step}>
                <span className="tag">{String(index + 1).padStart(2, "0")}</span>
                <h3 style={{ fontFamily: "var(--font-sora)" }}>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid two" style={{ alignItems: "start" }}>
          <article className="card glass glass--strong glass--radius-lg" style={{ padding: 28 }}>
            <span className="eyebrow">Inquiry form</span>
            <h2 className="section-title" style={{ fontSize: 34 }}>Send us your project</h2>
            <p style={{ color: "var(--text-secondary)", margin: "0 0 16px", lineHeight: 1.6 }}>
              Your inquiry goes directly to our External Vice President.
            </p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 16px",
              marginBottom: 24,
              borderRadius: "var(--glass-radius-md)",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-regular-fill)",
            }}>
              <div style={{ position: "relative", width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/assets/linkedin_headshots/vardaan-sinha.png" alt="Vardaan Sinha" fill sizes="48px" style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>Vardaan Sinha</p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--text-secondary)" }}>External Vice President</p>
                <a href="mailto:vardaansinha28@g.ucla.edu" style={{ fontSize: 12, color: "var(--electric-blue)" }}>vardaansinha28@g.ucla.edu</a>
              </div>
            </div>
            <PartnerForm />
          </article>
          <aside className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Technical credibility</span>
            <h2 className="section-title" style={{ fontSize: 34 }}>Supported tools</h2>
            <div className="tag-row">
              {technology.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
            </div>
            <div style={{ marginTop: 30 }}>
              <span className="eyebrow">FAQ</span>
              <FAQAccordion category="Partnerships" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
