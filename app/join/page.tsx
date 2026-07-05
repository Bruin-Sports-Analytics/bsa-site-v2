import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Timeline } from "@/components/Timeline";
import { recruitment } from "@/data/site";
import styles from "./join.module.css";

export const metadata: Metadata = {
  title: "Join"
};

export default function JoinPage() {
  const stateCopy = {
    UPCOMING: {
      title: `Our next recruitment cycle is ${recruitment.nextCycleLabel}.`,
      text: "Join the mailing list, attend public events, and review the roles that expect to recruit.",
      cta: "Get notified"
    },
    OPEN: {
      title: "Applications are open.",
      text: "Apply, attend info sessions, and use the timeline below to track each step.",
      cta: "Apply now"
    },
    CLOSED: {
      title: "Applications are currently closed.",
      text: "The next cycle will be posted here when dates are confirmed.",
      cta: "Join mailing list"
    }
  }[recruitment.status];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{recruitment.name}</span>
          <h1>{stateCopy.title}</h1>
          <p>{stateCopy.text}</p>
          <div className="button-row">
            <a className="btn btn-primary" href={recruitment.status === "OPEN" ? recruitment.applicationUrl : "mailto:bruinsportsanalytics@gmail.com"} data-analytics="recruitment_apply_click">{stateCopy.cta}</a>
            <Link className="btn btn-secondary" href="/events">Public events</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Recruitment timeline</span>
          <h2 className="section-title">Fall milestones</h2>
          <Timeline events={recruitment.timelineEvents} />
        </div>
      </section>
      <section className="section tight">
        <div className="container grid two">
          <article className={`card ${styles.recruitmentCard}`}>
            <span className="eyebrow">What members do</span>
            <h2 className="section-title" style={{ fontSize: 40 }}>Build in real project teams.</h2>
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
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Recruitment questions</h2>
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
