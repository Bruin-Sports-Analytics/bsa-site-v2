import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
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

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1>Bruin Sports Analytics</h1>
            <p>Bruin Sports Analytics is UCLA&apos;s student-run sports analytics organization, building research, tools, and competitive insights.</p>
            <div className={styles.heroCta}>
              <div className="button-row">
                <Link className="btn btn-primary" href="/work" data-analytics="hero_work_click">Explore Our Work <ArrowRight size={18} aria-hidden /></Link>
                <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join the Team</Link>
              </div>
              <Link className={`text-link ${styles.partnerLink}`} href="/partner">Partner With Us →</Link>
            </div>
          </div>
          {instagramPosts.length > 0 ? (
            <InstagramCollage posts={instagramPosts} />
          ) : (
            <div className={styles.heroLogo}>
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
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Explore by sport</h2>
          <p className="section-lede">Consulting projects, research, dashboards, tools, and articles live together under the sport where the question starts.</p>
          <div className={styles.sportPills}>
            {sports.map((sport) => (
              <Link key={sport.slug} href={`/work/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.featured}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Featured work</span>
              <h2 className="section-title">Current analysis in motion</h2>
            </div>
            <Link className="btn btn-secondary" href="/projects">Open dashboard</Link>
          </div>
          <ProjectCardGroup projects={featured} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Outcomes</span>
          <h2 className="section-title">Where Bruins take analytics</h2>
          <div className={styles.logoWall}>
            {outcomes.filter((outcome) => outcome.approvedForDisplay).map((outcome) => (
              <a href="#" aria-label={`${outcome.name}, ${outcome.category}`} key={outcome.name}>
                <span>{outcome.name}</span>
                <small>{outcome.category}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Upcoming events</span>
              <h2 className="section-title">Workshops, speakers, and recruitment</h2>
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
              <span>Students</span>
              <b>Build with us.</b>
            </Link>
            <Link href="/partner">
              <span>Organizations</span>
              <b>Bring us the problem.</b>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
