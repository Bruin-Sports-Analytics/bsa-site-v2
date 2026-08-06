import type { Metadata } from "next";
import Link from "next/link";
import { LogoWall } from "@/components/LogoWall";
import { MemberCard } from "@/components/MemberCard";
import { impactStats, members, outcomes, sports } from "@/data/site";

export const metadata: Metadata = {
  title: "About"
};

const boardGroups: { title: string; teams: string[] }[] = [
  { title: "Executive Board", teams: ["president", "executive board"] },
  { title: "Division Chairs", teams: ["baseball", "football", "basketball", "tennis", "volleyball", "data journalism"] },
  { title: "Operations", teams: ["webmaster", "marketing", "recruitment", "finance"] },
  { title: "Advisors", teams: ["advisors"] },
];

export default function AboutPage() {
  const board = members.filter((m) => m.group === "board" && m.isPublished);
  const boardSections = boardGroups
    .map((group) => ({
      title: group.title,
      people: board
        .filter((m) => group.teams.includes(m.team.trim().toLowerCase()))
        .sort((a, b) => a.sortOrder - b.sortOrder),
    }))
    .filter((s) => s.people.length > 0);

  const milestones = [
    ["Founded at UCLA", "Students formed Bruin Sports Analytics to make sports analytics more accessible across campus."],
    ["Sport teams launched", "Project groups expanded from public research into sport-specific workstreams."],
    ["Partner projects", "Members began scoping approved projects with athletics and sports organizations."],
    ["Unified work system", "Research, consulting, journalism, tools, and dashboards now live together by sport."]
  ];
  const stats = impactStats.filter((stat) => !/athletics partner/i.test(stat.label));
  const functions = ["Data engineering", "Research", "Design", "Journalism", "Dashboards", "Partner communication"];
  const prestigeLogos = outcomes.filter((outcome) => outcome.approvedForDisplay && "prestige" in outcome && outcome.prestige);

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
          <h1 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", margin: 0 }}>About Bruin Sports Analytics</h1>
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

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", textAlign: "center", margin: 0 }}>Board</h2>
          {boardSections.map((section, index) => (
            <div key={section.title} style={index === 0 ? { marginTop: "18px" } : { marginTop: "48px" }}>
              <h3 data-scroll-reveal style={{ display: "block", marginBottom: "16px", fontSize: "16px", textAlign: "center", fontFamily: "var(--font-sora), system-ui, sans-serif", fontWeight: 700 }}>{section.title}</h3>
              <div className="board-grid">
                {section.people.map((member) => <MemberCard member={member} key={member.slug} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <h2 className="section-title">Milestones</h2>
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
            <h2 className="section-title">How we&apos;re organized</h2>
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
          <h2 className="section-title">Where We Go</h2>
          <p className="section-lede">
            Our members have gone on to teams, labs, and firms across sports, tech, finance, and academia, including:
          </p>
          <LogoWall logos={prestigeLogos} />
          <div className="button-row" style={{ marginTop: 28 }}>
            <Link className="btn btn-primary" href="/people">Our Members</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
