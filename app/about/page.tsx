import type { Metadata } from "next";
import Link from "next/link";
import { impactStats, outcomes } from "@/data/site";

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

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Bruin Sports Analytics</span>
          <h1>Technical work. Real games. UCLA community.</h1>
          <p>Bruin Sports Analytics gives students a place to learn rigorous analytics through sports problems that demand context, collaboration, and clear communication.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <article className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Mission</span>
            <h2 className="section-title" style={{ fontSize: 42 }}>Where sports meet data.</h2>
            <p className="section-lede">We build models, tools, dashboards, and writing that help people understand games more deeply and make better decisions from sports data.</p>
          </article>
          <article className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Structure</span>
            <p className="section-lede">Bruin Sports Analytics is organized around sport groups and shared functions: data engineering, research, design, journalism, dashboards, and partner communication.</p>
          </article>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Timeline</span>
          <h2 className="section-title">Founded at UCLA</h2>
          <div className="grid two">
            {milestones.map(([title, text]) => (
              <article className="card" style={{ padding: 24 }} key={title}>
                <span className="tag">Milestone</span>
                <h3 style={{ fontFamily: "var(--font-sora)", fontSize: 26 }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Values</span>
          <h2 className="section-title">How we work</h2>
          <div className="grid three">
            {["Rigor", "Curiosity", "Collaboration", "Practical impact", "Accessibility"].map((value) => (
              <article className="card" style={{ padding: 24 }} key={value}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-sora)", fontSize: 26 }}>{value}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>A shared standard for building sports analysis that is useful, readable, and defensible.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container grid two">
          <article className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Impact metrics</span>
            <div className="grid two">
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <b style={{ color: "var(--ucla-gold)", fontFamily: "var(--font-sora)", fontSize: 34 }}>{stat.value}</b>
                  <p style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Outcomes</span>
            <p className="section-lede">{outcomes.filter((outcome) => outcome.approvedForDisplay).map((outcome) => outcome.name).join(", ")}</p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/people/board">Board</Link>
              <Link className="btn btn-secondary" href="/people/members">Current members</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
