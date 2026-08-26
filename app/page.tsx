import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { LogoCategories } from "@/components/LogoCategories";
import { ProjectCardGroup } from "@/components/ProjectCardGroup";
import { ScrollCountStats } from "@/components/ScrollCountStats";
import { events, impactStats, outcomes, sports } from "@/data/site";
import { currentlyFeatured, publicProjects } from "@/lib/utils";
import styles from "./page.module.css";

export default function Home() {
  const featuredProjects = currentlyFeatured();
  const featured = (featuredProjects.length > 0
    ? featuredProjects
    : [...publicProjects()].sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
  ).slice(0, 3);
  const publicEvents = events.filter((event) => !event.isMembersOnly).slice(0, 2);
  const displayedOutcomes = outcomes.filter((outcome) => outcome.approvedForDisplay);
  const marqueeMidpoint = Math.ceil(displayedOutcomes.length / 2);
  const marqueeRows = [displayedOutcomes.slice(0, marqueeMidpoint), displayedOutcomes.slice(marqueeMidpoint)];
  const yardNumberSequence = ["10", "20", "30", "40", "50", "40", "30", "20"];
  const yardMarkers = Array.from({ length: 32 }, (_, index) => yardNumberSequence[index % yardNumberSequence.length]);

  return (
    <main className={styles.home}>
      <div className={styles.fieldBackdrop} aria-hidden>
        {yardMarkers.map((number, index) => (
          <span key={`${number}-${index}`}>
            <i>{number}</i>
            <i>{number}</i>
          </span>
        ))}
      </div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.flowTitle}>Bruin Sports Analytics</h1>
            <p className={styles.flowText}>Winning runs on analysis.</p>
            <div className={`${styles.heroCta} ${styles.flowCta}`}>
              <div className="button-row">
                <Link className="btn btn-primary" href="/teams" data-analytics="hero_work_click">Explore Our Work <ArrowRight size={18} aria-hidden /></Link>
                <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join the Team</Link>
              </div>
              <Link className={`text-link ${styles.partnerLink}`} href="/partner">Partner With Us →</Link>
            </div>
          </div>
          <div className={`${styles.heroLogo} ${styles.flowVisual}`}>
            <Image
              src="/assets/bsa-logo-800.webp"
              alt="Bruin Sports Analytics logo"
              width={800}
              height={800}
              priority
              sizes="(max-width: 640px) 280px, 420px"
            />
          </div>
        </div>
      </section>

      <ScrollCountStats stats={impactStats} />

      <section className="section">
        <div className="container">
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>WHO WE ARE</span>
          <p className={styles.missionStatement} style={{ textAlign: "center", marginTop: "18px" }}>
            We build models, tools, dashboards, and publications that <span className={styles.blueGlow}>help people understand</span> games more deeply and <span className={styles.goldGlow}>make better decisions</span> from sports data.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Our sports teams</h2>
          <p className="section-lede">Each team focuses on one sport, from baseball to tennis.</p>
          <div className={styles.sportPills}>
            {sports.map((sport) => (
              <Link key={sport.slug} href={`/teams/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Featured work</span>
              <h2 className="section-title">Featured projects</h2>
            </div>
            <Link className="btn btn-secondary" href="/projects">Open dashboard</Link>
          </div>
          <ProjectCardGroup projects={featured} />
        </div>
      </section>

      <section className={`section ${styles.outcomesSection}`}>
        <div className="container">
          <span className="eyebrow">Outcomes</span>
          <h2 className="section-title">Where our members go</h2>
          <p className="section-lede">Our members have continued their work across sports, technology, consulting, and graduate school.</p>
          <LogoCategories logos={displayedOutcomes} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">What&apos;s next</span>
              <h2 className="section-title">Upcoming events</h2>
            </div>
            <Link className="btn btn-secondary" href="/events"><CalendarDays size={18} aria-hidden /> View all</Link>
          </div>
          <div className="grid three">
            {publicEvents.map((event, index) => (
              <EventCard event={event} key={event.slug} isSoonest={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section tight ${styles.finalCtaSection}`}>
        <div className="container">
          <div className={styles.finalCta}>
            <Link href="/join">
              <div className={styles.ctaText}>
                <span>Students</span>
                <b>Build with us.</b>
              </div>
              <ArrowRight className={styles.ctaArrow} aria-hidden />
            </Link>
            <Link href="/partner">
              <div className={styles.ctaText}>
                <span>Organizations</span>
                <b>Bring us the problem.</b>
              </div>
              <ArrowRight className={styles.ctaArrow} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
