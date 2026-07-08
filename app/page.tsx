import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { HeroVisual } from "@/components/HeroVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { SportCard } from "@/components/SportCard";
import { events, impactStats, outcomes, sports } from "@/data/site";
import { currentlyFeatured } from "@/lib/utils";
import styles from "./page.module.css";

const pipelineSteps: [string, string][] = [
  ["Ask the right question", "Turn a coaching, product, or editorial problem into measurable hypotheses."],
  ["Build the analysis", "Clean data, model uncertainty, and make the workflow repeatable."],
  ["Deliver an actionable result", "Ship reports, dashboards, tools, and clear recommendations."]
];

export default function Home() {
  const featured = currentlyFeatured().slice(0, 5);
  const publicEvents = events.filter((event) => !event.isMembersOnly).slice(0, 3);

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">UCLA sports analytics</span>
            <h1>Where sports meet <em>data.</em></h1>
            <p>Bruin Sports Analytics is UCLA&apos;s student-run sports analytics organization, building research, tools, and competitive insights across the games we love.</p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/work" data-analytics="hero_work_click">Explore Our Work <ArrowRight size={18} aria-hidden /></Link>
              <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join the Team</Link>
              <Link className="text-link" href="/partner">Partner With Us →</Link>
            </div>
          </div>
          <HeroVisual />
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
          <div className="sport-card-grid">
            {sports.map((sport) => <SportCard sport={sport} key={sport.slug} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Featured work</span>
              <h2 className="section-title">Current analysis in motion</h2>
            </div>
            <Link className="btn btn-secondary" href="/projects">Open dashboard</Link>
          </div>
          <div className="grid three">
            {featured.slice(0, 3).map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className={styles.pipeline}>
            {pipelineSteps.flatMap(([title, text], index) => {
              const node = (
                <div key={title} className={styles.pipeNode}>
                  <span className={styles.pipeIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              );
              return index < pipelineSteps.length - 1
                ? [node, <div key={`pipe-${index}`} className={styles.pipeArrow} aria-hidden="true" />]
                : [node];
            })}
          </div>
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
              <b>Build the next play.</b>
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
