import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Handshake,
  Newspaper
} from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { LogoCategories } from "@/components/LogoCategories";
import { ScrollCountStats } from "@/components/ScrollCountStats";
import { events, impactStats, outcomes, sports } from "@/data/site";
import styles from "./page.module.css";

export default function Home() {
  const publicEvents = events.filter((event) => !event.isMembersOnly).slice(0, 3);
  const displayedOutcomes = outcomes.filter((outcome) => outcome.approvedForDisplay);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.flowTitle}>Bruin Sports Analytics</h1>
            <p className={styles.flowText}>
              UCLA&apos;s student-run sports analytics organization. Research, tools,
              and analysis across five sports.
            </p>
            <div className={`${styles.heroCta} ${styles.flowCta}`}>
              <div className="button-row">
                <Link className="btn btn-primary" href="/teams" data-analytics="hero_work_click">
                  Explore our teams <ArrowRight size={18} aria-hidden />
                </Link>
                <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join BSA</Link>
              </div>
              <Link className={styles.partnerLink} href="/partner">
                Work with us <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollCountStats stats={impactStats} />

      <section className={`section ${styles.introSection}`}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <h2 className="section-title">What we do</h2>
          </div>
          <p className={styles.introCopy}>
            Members join a sport team, learn from one another, and work on projects
            throughout the year. No sports analytics experience is required.
          </p>
          <div className={styles.practiceGrid}>
            <Link href="/projects">
              <ChartNoAxesColumnIncreasing className={styles.practiceIcon} size={26} aria-hidden />
              <strong>Team projects</strong>
              <p>Build models, dashboards, and research with one of our five sports teams.</p>
            </Link>
            <Link href="/journalism">
              <Newspaper className={styles.practiceIcon} size={26} aria-hidden />
              <strong>Data journalism</strong>
              <p>Tell clear, interesting sports stories through data and writing.</p>
            </Link>
            <Link href="/partner">
              <Handshake className={styles.practiceIcon} size={26} aria-hidden />
              <strong>Partnerships</strong>
              <p>Work with teams and organizations on practical sports questions.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className={`section ${styles.teamsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title">Explore our teams</h2>
            </div>
            <p className={styles.headerNote}>Each team welcomes students with different interests and levels of experience.</p>
          </div>
          <div className={styles.sportList}>
            {sports.map((sport) => {
              const SportIcon = sport.icon;
              return (
                <Link
                  key={sport.slug}
                  href={`/teams/${sport.slug}`}
                  className={styles.sportRow}
                  style={{ borderTopColor: sport.accent }}
                >
                  <span className={styles.sportIcon} style={{ color: sport.accent }}><SportIcon size={28} /></span>
                  <strong>{sport.name}</strong>
                  <p>{sport.description}</p>
                  <ArrowUpRight className={styles.sportArrow} size={22} aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.eventsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title">Upcoming events</h2>
            </div>
            <Link className={styles.sectionLink} href="/events"><CalendarDays size={17} aria-hidden /> View calendar</Link>
          </div>
          <div className="grid three">
            {publicEvents.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        </div>
      </section>

      <section className={`section ${styles.outcomesSection}`}>
        <div className="container">
          <h2 className="section-title">Where our members go</h2>
          <p className="section-lede">Our members have continued their work across sports, technology, consulting, and graduate school.</p>
          <LogoCategories logos={displayedOutcomes} />
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className={styles.finalCta}>
            <Link href="/join">
              <div className={styles.ctaText}>
                <span>For UCLA students</span>
                <b>Find your team.</b>
              </div>
              <ArrowRight className={styles.ctaArrow} aria-hidden />
            </Link>
            <Link href="/partner">
              <div className={styles.ctaText}>
                <span>For organizations</span>
                <b>Work with BSA.</b>
              </div>
              <ArrowRight className={styles.ctaArrow} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
