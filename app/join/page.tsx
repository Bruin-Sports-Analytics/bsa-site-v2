import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Timeline } from "@/components/Timeline";
import { Countdown } from "@/components/Countdown";
import { RecruitmentForm } from "@/components/RecruitmentForm";
import { recruitment } from "@/data/site";
import styles from "./join.module.css";

export const metadata: Metadata = {
  title: "Join",
  description: "Join Bruin Sports Analytics. Apply for our fall recruitment cycle as an analyst, engineer, writer, or designer."
};

export default function JoinPage() {
  const stateCopy = {
    UPCOMING: {
      title: `Our next recruitment cycle is ${recruitment.nextCycleLabel}`,
      // text: "Join the mailing list, attend public events, and review the roles that expect to recruit.",
      cta: "Get notified"
    },
    OPEN: {
      title: "Applications are open",
      text: "Apply, attend info sessions, and use the timeline below to track each step.",
      cta: "Apply now"
    },
    CLOSED: {
      title: "Applications are currently closed",
      text: "The next cycle will be posted here when dates are confirmed.",
      cta: "Join mailing list"
    }
  }[recruitment.status];

  return (
    <main>
      <section className="page-hero">
        <div className={`container ${recruitment.status === "UPCOMING" ? styles.heroLayout : ""}`}>
          <div className={recruitment.status === "UPCOMING" ? styles.heroContent : ""}>
            <span className="eyebrow">{recruitment.name}</span>
            <h1>{stateCopy.title}</h1>
            <p>{stateCopy.text}</p>
            <div className="button-row">
              <a className="btn btn-primary" href={recruitment.status === "OPEN" ? recruitment.applicationUrl : "mailto:bruinsportsanalytics@gmail.com"} data-analytics="recruitment_apply_click">{stateCopy.cta}</a>
              <Link className="btn btn-secondary" href="/events">Public events</Link>
            </div>
          </div>
          {recruitment.status === "UPCOMING" && <Countdown />}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Recruitment timeline</span>
          <h2 className="section-title">Fall Events</h2>
          <Timeline events={recruitment.timelineEvents} />
        </div>
      </section>
      <section className="section tight">
        <div className="container grid two">
          <article className={`card ${styles.recruitmentCard}`}>
            <span className="eyebrow">What members do</span>
            <h2 className="section-title" style={{ fontSize: 36 }}>Work on real project teams</h2>
            <p className="section-lede">Members clean data, write models, build dashboards, publish analysis, and communicate results to teammates, readers, and partners.</p>
          </article>
          <article className={`card ${styles.tagPanel}`}>
            <div className={styles.tagGroup}>
              <span className="eyebrow">Roles recruiting</span>
              <div className={styles.tags}>
                {recruitment.roles.map((role) => <span className="tag" key={role}>{role}</span>)}
              </div>
            </div>
            <div className={styles.tagGroup}>
              <span className="eyebrow">Teams</span>
              <div className={styles.tags}>
                {recruitment.teamsRecruiting.map((team) => <span className="tag" key={team}>{team}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container grid two" style={{ alignItems: "start" }}>
          <article className="card glass glass--strong glass--radius-lg" style={{ padding: 28 }}>
            <span className="eyebrow">Reach out</span>
            <h2 className="section-title" style={{ fontSize: 34 }}>Questions about joining?</h2>
            <p style={{ color: "var(--text-secondary)", margin: "0 0 16px", lineHeight: 1.6 }}>
              Your message goes directly to our Recruitment Chair.
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
                <Image src="/assets/linkedin_headshots/mateo-shelton.png" alt="Mateo Shelton" fill sizes="48px" style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>Mateo Shelton</p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--text-secondary)" }}>Recruitment Chair</p>
                <a href="mailto:mateoshelton@ucla.edu" style={{ fontSize: 12, color: "var(--electric-blue)" }}>mateoshelton@ucla.edu</a>
              </div>
            </div>
            <RecruitmentForm />
          </article>
          <aside className="card" style={{ padding: 28 }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title" style={{ fontSize: 34 }}>Recruitment questions</h2>
            <FAQAccordion excludeCategory="Partnerships" />
          </aside>
        </div>
      </section>
    </main>
  );
}
