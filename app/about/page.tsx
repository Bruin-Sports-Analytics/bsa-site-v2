import type { Metadata } from "next";
import Link from "next/link";
import { impactStats, outcomes, sports } from "@/data/site";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  const milestones = [
    ["Founded at UCLA", "Students formed Bruin Sports Analytics to make sports analytics more accessible across campus."],
    ["Sport teams launched", "Project groups expanded from public research into sport-specific workstreams."],
    ["Partner projects", "Members began scoping approved projects with athletics and sports organizations."],
    ["Unified work system", "Research, consulting, journalism, tools, and dashboards now live together by sport."]
  ];
  const stats = impactStats.filter((stat) => !/athletics partner/i.test(stat.label));
  const functions = ["Data engineering", "Research", "Design", "Journalism", "Dashboards", "Partner communication"];
  const destinations = outcomes.filter((outcome) => outcome.approvedForDisplay).map((outcome) => outcome.name);

  const label: React.CSSProperties = {
    fontFamily: "var(--font-mono), monospace",
    fontSize: 12,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "var(--text-muted)"
  };

  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: 28 }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--text-primary)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>About Bruin Sports Analytics</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p style={{ maxWidth: 780, fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.3, margin: 0 }}>
            We build models, tools, dashboards, and writing that help people understand games more deeply and make better decisions from sports data.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px 52px", marginTop: 44 }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <b style={{ display: "block", color: "var(--ucla-gold)", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: 34, fontVariantNumeric: "tabular-nums" }}>{stat.value}</b>
                <span style={{ color: "var(--text-secondary)" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Milestones</span>
          <ol className="grid four" style={{ listStyle: "none", padding: 0, margin: "18px 0 0" }}>
            {milestones.map(([title, text], index) => (
              <li key={title} style={{ borderTop: "2px solid var(--ucla-gold)", paddingTop: 14 }}>
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-muted)" }}>{String(index + 1).padStart(2, "0")}</span>
                <h3 style={{ margin: "6px 0 8px", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: 20 }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.55, fontSize: 15, margin: 0 }}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tight">
        <div className="container grid two">
          <div>
            <span className="eyebrow">How we&apos;re organized</span>
            <p className="section-lede">Bruin Sports Analytics is built around sport groups and shared functions.</p>
          </div>
          <div>
            <p style={label}>Sport groups</p>
            <p style={{ margin: "6px 0 22px", lineHeight: 1.7 }}>{sports.map((sport) => sport.name).join(" · ")}</p>
            <p style={label}>Shared functions</p>
            <p style={{ margin: "6px 0 0", lineHeight: 1.7 }}>{functions.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Where our members go</span>
          <p className="section-lede">{destinations.join(", ")}.</p>
          <div className="button-row">
            <Link className="btn btn-primary" href="/people/board">Board</Link>
            <Link className="btn btn-secondary" href="/people/members">Current members</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
