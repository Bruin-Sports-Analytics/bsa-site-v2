import type { Metadata } from "next";
import { MemberCard } from "@/components/MemberCard";
import { impactStats, members, sports } from "@/data/site";
import styles from "./page.module.css";

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
    {
      era: "Origin",
      title: "Founded at UCLA",
      text: "Students formed Bruin Sports Analytics to give people across campus a practical entry point into sports analytics. The club gave members a place to learn methods, test ideas, and translate data work into questions coaches, fans, and analysts could actually use."
    },
    {
      era: "Expansion",
      title: "Sport teams launched",
      text: "Project groups grew into sport-specific workstreams so members could build domain knowledge alongside technical skill. Baseball, basketball, football, tennis, and volleyball groups now support deeper analysis within each sport instead of treating every project the same way."
    },
    {
      era: "Applied work",
      title: "Partner projects",
      text: "Members began scoping approved projects with athletics and sports organizations, moving the club from exploratory analysis into applied deliverables. Those projects help students practice stakeholder communication, responsible data handling, and decision-focused presentation."
    },
    {
      era: "Today",
      title: "Unified work system",
      text: "Research, consulting, journalism, tools, and dashboards now live together by sport. That structure helps members move from open-ended questions to published analysis, reusable workflows, and clearer handoffs across teams."
    }
  ];
  const stats = impactStats.filter((stat) => !/athletics partner/i.test(stat.label));
  const sharedFunctions = [
    {
      title: "Data Journalism",
      text: "Turns club research into published explainers, visual stories, and public-facing analysis."
    },
    {
      title: "Research and consulting",
      text: "Scopes sport questions, designs analysis plans, and converts findings into usable recommendations."
    },
    {
      title: "Data products",
      text: "Builds reusable pipelines, dashboards, and tools that teams can keep improving across projects."
    },
    {
      title: "Club operations",
      text: "Coordinates recruiting, marketing, finance, web, partner communication, and cross-team handoffs."
    }
  ];

  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: 28 }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--text-primary)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>About Bruin Sports Analytics</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className={styles.missionStatement}>
            We build models, tools, dashboards, and writing that <span className={styles.blueGlow}>help people understand</span> games more deeply and <span className={styles.goldGlow}>make better decisions</span> from sports data.
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
          {boardSections.map((section, index) => (
            <div key={section.title} style={index === 0 ? undefined : { marginTop: "48px" }}>
              <span className="eyebrow" data-scroll-reveal style={{ display: "block", marginBottom: "16px", fontSize: "16px", textAlign: "center" }}>{section.title}</span>
              <div className="board-grid">
                {section.people.map((member) => <MemberCard member={member} key={member.slug} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className={styles.milestoneHeader}>
            <span className="eyebrow">Milestones</span>
          </div>
          <ol className={styles.milestoneGrid}>
            {milestones.map((milestone, index) => (
              <li key={milestone.title} className={styles.milestoneCard}>
                <div className={styles.milestoneMeta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{milestone.era}</span>
                </div>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className={styles.orgIntro}>
            <span className="eyebrow">How we&apos;re organized</span>
            <p className="section-lede">Bruin Sports Analytics runs as sport teams supported by shared publishing, product, and operations functions.</p>
          </div>

          <div className={styles.orgMap} aria-label="Bruin Sports Analytics operating model">
            <div className={`${styles.orgBand} ${styles.governanceBand}`}>
              <div>
                <span className={styles.orgKicker}>Guidance</span>
                <h3>Board and advisors</h3>
                <p>Set priorities, support division chairs, review partnerships, and keep club work aligned across teams.</p>
              </div>
              <div className={styles.orgChips} aria-label="Board and advisor groups">
                <span>Executive Board</span>
                <span>Division Chairs</span>
                <span>Operations</span>
                <span>Advisors</span>
              </div>
            </div>

            <div className={styles.orgMiddle}>
              <div className={`${styles.orgPanel} ${styles.sportPanel}`}>
                <div className={styles.orgPanelHeader}>
                  <span className={styles.orgKicker}>Sport teams</span>
                  <h3>Domain workstreams</h3>
                  <p>Each sport group owns its project backlog, context gathering, modeling choices, and sport-specific review.</p>
                </div>
                <div className={styles.sportOrgGrid}>
                  {sports.map((sport) => {
                    const Icon = sport.icon;
                    return (
                      <div
                        key={sport.slug}
                        className={styles.sportOrgItem}
                      >
                        <Icon size={22} aria-hidden="true" />
                        <span>{sport.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`${styles.orgPanel} ${styles.functionPanel}`}>
                <div className={styles.orgPanelHeader}>
                  <span className={styles.orgKicker}>Shared functions</span>
                  <h3>Cross-team support</h3>
                  <p>Shared groups make the work publishable, reusable, and coordinated across the whole club.</p>
                </div>
                <div className={styles.functionList}>
                  {sharedFunctions.map((item) => (
                    <div key={item.title} className={styles.functionItem}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${styles.orgBand} ${styles.deliveryBand}`}>
              <span className={styles.orgKicker}>Outputs</span>
              <p>Sport teams and shared functions come together in research projects, consulting deliverables, public articles, dashboards, and internal tools.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
