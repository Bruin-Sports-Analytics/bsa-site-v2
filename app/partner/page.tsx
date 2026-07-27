import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { capabilities, technology } from "@/data/site";

export const metadata: Metadata = {
  title: "Partner With Us"
};

export default function PartnerPage() {
  return (
    <main>
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
        <div className="container grid two">
          <article className="card glass glass--strong glass--radius-lg" style={{ padding: 28 }}>
            <span className="eyebrow">Inquiry form</span>
            <h2 className="section-title" style={{ fontSize: 34 }}>Send us your project</h2>
            <p style={{ color: "var(--text-secondary)", margin: "0 0 24px", lineHeight: 1.6 }}>
              Your inquiry goes directly to{" "}
              <a className="text-link" href="https://www.linkedin.com/in/vardaan-sinha-234663272/" target="_blank" rel="noreferrer">Vardaan Sinha</a>, our External Vice President.
            </p>
            <form className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="organization">Organization</label>
                <input id="organization" name="organization" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="sport">Sport / industry</label>
                <input id="sport" name="sport" />
              </div>
              <div className="field full">
                <label htmlFor="problem">Problem to solve</label>
                <textarea id="problem" name="problem" />
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
                <input type="checkbox" required style={{ width: 18, minHeight: 18 }} />
                I consent to Bruin Sports Analytics contacting me about this inquiry.
              </label>
              <button className="btn btn-primary" type="submit" data-analytics="partner_form_submit">Submit inquiry</button>
            </form>
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
