import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MemberCard } from "@/components/MemberCard";
import { ProjectCard } from "@/components/ProjectCard";
import { members, projects, sports } from "@/data/site";
import styles from "../sport-hero.module.css";

const sport = sports.find((s) => s.slug === "tennis")!;

export const metadata: Metadata = { title: "Tennis Work" };

export default function TennisPage() {
  const sportProjects = projects.filter((p) => p.sport === "tennis" && p.visibility !== "hidden");
  const active = sportProjects.filter((p) => p.status === "Active" || p.status === "Ongoing");
  const archived = sportProjects.filter((p) => p.status === "Completed" || p.status === "Archived");
  const chairs = members.filter((m) => m.group === "board" && m.team.toLowerCase().includes("tennis") && m.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);
  const chairNames = new Set(chairs.map((m) => m.name));
  const analysts = members.filter((m) => m.group === "member" && m.team.toLowerCase() === "tennis" && m.isPublished && !chairNames.has(m.name)).sort((a, b) => a.sortOrder - b.sortOrder);
  const Icon = sport.icon;

  return (
    <main>
      <section className="page-hero">
        <div className={`container ${styles.heroRow}`}>
          <div className={styles.heroText}>
            <span className="eyebrow">Tennis analytics</span>
            <h1>Tennis</h1>
            <p>{sport.description}</p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/partner">Partner with this team</Link>
              <Link className="btn btn-secondary" href="/projects">All projects</Link>
            </div>
          </div>
          {chairs.length > 0 && (
            <div className={`${styles.chairGrid} ${styles.chairGridCentered}`}>
              {chairs.map((m) => <MemberCard member={m} key={m.slug} />)}
            </div>
          )}
        </div>
      </section>
      <section className="section tight">
        <div className="container grid three">
          <div className="card" style={{ padding: 22 }}>
            <Icon size={34} color={sport.accent} aria-hidden />
            <h2 className="section-title" style={{ fontSize: 29 }}>{sport.featuredMetric}</h2>
            <p className="section-lede">Featured metric controlled from the sport content collection.</p>
          </div>
          {sport.focusAreas.map((area) => (
            <div className="card" style={{ padding: 22 }} key={area}>
              <span className="eyebrow">Priority</span>
              <h2 style={{ margin: "10px 0", fontFamily: "var(--font-sora)" }}>{area}</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>Current questions, tools, and research are organized around this focus area.</p>
            </div>
          ))}
        </div>
      </section>
      {sport.subdivisions && (
        <section className="section tight">
          <div className="container">
            <span className="eyebrow">Tennis programs</span>
            <h2 className="section-title">Configurable subdivisions</h2>
            <div className="grid three">
              {sport.subdivisions.map((name) => (
                <Link
                  className="card"
                  style={{ padding: 22 }}
                  href={`/teams/tennis/${name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                  key={name}
                >
                  <h3 style={{ margin: 0, fontFamily: "var(--font-sora)" }}>{name}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>Landing page with leads, projects, dashboards, and archives.</p>
                  <span className="text-link">Open program <ArrowRight size={16} aria-hidden /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Active projects</span>
          <h2 className="section-title">Current work</h2>
          <div className="grid three">
            {active.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Archive</span>
          <h2 className="section-title">Past work</h2>
          <div className="grid three">
            {archived.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className={`container ${styles.teamSection}`}>
          <h2 className={`section-title ${styles.teamTitle}`}>Team</h2>
          <div className="board-grid" style={{ marginTop: "18px" }}>
            {[...chairs, ...analysts].map((m) => <MemberCard member={m} key={m.slug} />)}
          </div>
          <div className={`button-row ${styles.teamButtonRow}`}>
            <Link className="btn btn-primary" href="/partner">Bring us a tennis problem</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
