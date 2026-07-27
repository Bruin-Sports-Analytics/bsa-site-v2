import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { EventCard } from "@/components/EventCard";
import { InstagramCollage } from "@/components/InstagramCollage";
import { ProjectCardGroup } from "@/components/ProjectCardGroup";
import { instagramPosts } from "@/data/instagram-posts";
import { events, impactStats, outcomes, sports } from "@/data/site";
import { currentlyFeatured, publicProjects } from "@/lib/utils";
import styles from "./page.module.css";

export default function Home() {
  const featuredProjects = currentlyFeatured();
  const featured = (featuredProjects.length > 0
    ? featuredProjects
    : [...publicProjects()].sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
  ).slice(0, 3);
  const publicEvents = events.filter((event) => !event.isMembersOnly).slice(0, 3);
  const displayedOutcomes = outcomes.filter((outcome) => outcome.approvedForDisplay);
  const marqueeMidpoint = Math.ceil(displayedOutcomes.length / 2);
  const marqueeRows = [displayedOutcomes.slice(0, marqueeMidpoint), displayedOutcomes.slice(marqueeMidpoint)];

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.flowTitle}>Bruin Sports Analytics</h1>
            <p className={styles.flowText}>UCLA&apos;s student-run sports analytics organization. Research, tools, and analysis across five sports.</p>
            <div className={`${styles.heroCta} ${styles.flowCta}`}>
              <div className="button-row">
                <Link className="btn btn-primary" href="/work" data-analytics="hero_work_click">Explore Our Work <ArrowRight size={18} aria-hidden /></Link>
                <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join the Team</Link>
              </div>
              <Link className={`text-link ${styles.partnerLink}`} href="/partner">Partner With Us →</Link>
            </div>
          </div>
          {instagramPosts.length > 0 ? (
            <div className={styles.flowVisual}>
              <InstagramCollage posts={instagramPosts} />
            </div>
          ) : (
            <div className={`${styles.heroLogo} ${styles.flowVisual}`}>
              <Image
                src="/assets/bruin_sports_analytics_logo_high_quality.jpg"
                alt="Bruin Sports Analytics logo"
                width={420}
                height={420}
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className={styles.impact} aria-label="Bruin Sports Analytics impact metrics">
        <div className="container">
          <div className={styles.rail}>
            {impactStats.map((stat, index) => (
              <div key={stat.label} data-load-reveal style={{ "--flow-delay": `${520 + index * 70}ms` } as CSSProperties}>
                <b><CountUp value={stat.value} /></b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Our sports teams</h2>
          <p className="section-lede">Each team focuses on one sport, from baseball to tennis.</p>
          <div className={styles.sportPills}>
            {sports.map((sport) => (
              <Link key={sport.slug} href={`/work/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
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

      <section className="section">
        <div className="container">
          <span className="eyebrow">Outcomes</span>
          <h2 className="section-title">Where our members go</h2>
        </div>
        <div className={styles.logoMarquee}>
          {marqueeRows.map((row, rowIndex) => (
            <div className={styles.marqueeRow} key={rowIndex}>
              <div className={styles.marqueeTrack}>
                {[...row, ...row].map((outcome, index) => (
                  <div
                    className={styles.logoTile}
                    title={`${outcome.name} — ${outcome.category}`}
                    aria-hidden={index >= row.length}
                    key={`${outcome.name}-${index}`}
                  >
                    {outcome.logo ? (
                      <span className={styles.logoImgWrap}>
                        <Image src={outcome.logo} alt={outcome.name} fill sizes="180px" className={styles.logoImg} />
                      </span>
                    ) : (
                      <span className={styles.logoText}>{outcome.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
            {publicEvents.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        </div>
      </section>

      <section className="section tight">
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
