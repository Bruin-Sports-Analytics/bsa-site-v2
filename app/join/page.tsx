import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Timeline } from "@/components/Timeline";
import { Countdown } from "@/components/Countdown";
import { recruitment } from "@/data/site";
import styles from "./join.module.css";

export const metadata: Metadata = {
  title: "Join"
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
          <h2 className="section-title">Fall Events</h2>
          <Timeline events={recruitment.timelineEvents} />
        </div>
      </section>
      <section className="section tight">
        <div className="container grid two">
          <article className={`card ${styles.recruitmentCard}`}>
            <h2 className="section-title" style={{ fontSize: 36 }}>Work on real project teams</h2>
            <p className="section-lede">Members clean data, write models, build dashboards, publish analysis, and communicate results to teammates, readers, and partners.</p>
          </article>
          <article className={`card ${styles.tagPanel}`}>
            <div className={styles.tagGroup}>
              <h3 style={{ margin: "0 0 12px", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)" }}>Roles recruiting</h3>
              <div className={styles.tags}>
                {recruitment.roles.map((role) => <span className="tag" key={role}>{role}</span>)}
              </div>
            </div>
            <div className={styles.tagGroup}>
              <h3 style={{ margin: "0 0 12px", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)" }}>Teams</h3>
              <div className={styles.tags}>
                {recruitment.teamsRecruiting.map((team) => <span className="tag" key={team}>{team}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          <article className="card glass glass--strong glass--radius-lg" style={{ padding: 28 }}>
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
            <form className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="major">Major</label>
                <input id="major" name="major" />
              </div>
              <div className="field">
                <label htmlFor="sport">Sport interest</label>
                <input id="sport" name="sport" />
              </div>
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>
              <label className="field full" style={{ display: "flex", gridTemplateColumns: "auto 1fr", alignItems: "center", color: "var(--text-secondary)" }}>
                <input type="checkbox" required style={{ width: 18, minHeight: 18 }} />
                I consent to Bruin Sports Analytics contacting me about this inquiry.
              </label>
              <button className="btn btn-primary" type="submit">Send message</button>
            </form>
          </article>
          <aside className="card" style={{ padding: 28 }}>
            <h2 className="section-title" style={{ fontSize: 34 }}>Recruitment questions</h2>
            <FAQAccordion excludeCategory="Partnerships" />
          </aside>
        </div>
      </section>
    </main>
  );
}
