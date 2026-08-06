import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MemberCard } from "@/components/MemberCard";
import { ProjectCardGroup } from "@/components/ProjectCardGroup";
import { isActiveProject, members, projectLifecycleStatus, projects, sports } from "@/data/site";
import styles from "../sport-hero.module.css";

const sport = sports.find((s) => s.slug === "football")!;

export const metadata: Metadata = { title: "Football Work" };

export default function FootballPage() {
  const sportProjects = projects.filter((p) => p.sport === "football" && p.visibility !== "hidden");
  const active = sportProjects.filter(isActiveProject);
  const archived = sportProjects.filter((p) => !isActiveProject(p));
  const chairs = members.filter((m) => m.group === "board" && m.team.toLowerCase().includes("football") && m.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);
  const chairNames = new Set(chairs.map((m) => m.name));
  const analysts = members.filter((m) => m.group === "member" && m.team.toLowerCase() === "football" && m.isPublished && !chairNames.has(m.name)).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <main>
      <section className="page-hero">
        <div className={`container ${styles.heroRow}`}>
          <div className={styles.heroText}>
            <span className="eyebrow">Football analytics</span>
            <h1>Football</h1>
            <p>{sport.description}</p>
            <div className="button-row">
              <Link className="btn btn-primary" href="/partner">Partner with this team</Link>
              <Link className="btn btn-secondary" href="/projects">All projects</Link>
            </div>
          </div>
          {chairs.length > 0 && (
            <div className={styles.chairGrid}>
              {chairs.map((m) => <MemberCard member={m} key={m.slug} />)}
            </div>
          )}
        </div>
      </section>
      <section className="section tight">
        <div className="container grid three">
          {sportProjects.map((project) => (
            <div className="card" style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10 }} key={project.slug}>
              <span className="eyebrow">{project.projectType} · {projectLifecycleStatus(project)}</span>
              <h2 style={{ margin: 0, fontFamily: "var(--font-sora)", fontSize: 18, lineHeight: 1.3 }}>{project.title}</h2>
              <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.6, fontSize: 14, flex: 1 }}>{project.summary}</p>
              {(project.links.demo || project.links.paper) && (
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: "auto" }}>
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 4 }}>
                      Open tool <ArrowUpRight size={13} aria-hidden />
                    </a>
                  )}
                  {project.links.paper && (
                    <a href={project.links.paper} className="text-link" style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 4 }}>
                      Read paper <ArrowUpRight size={13} aria-hidden />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Active projects</span>
          <h2 className="section-title">Current work</h2>
          <ProjectCardGroup projects={active} />
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Archive</span>
          <h2 className="section-title">Past work</h2>
          <ProjectCardGroup projects={archived} />
        </div>
      </section>
      <section className="section tight">
        <div className={`container ${styles.teamSection}`}>
          <h2 className={`section-title ${styles.teamTitle}`}>Team</h2>
          <div className="board-grid" style={{ marginTop: "18px" }}>
            {[...chairs, ...analysts].map((m) => <MemberCard member={m} key={m.slug} />)}
          </div>
          <div className={`button-row ${styles.teamButtonRow}`}>
            <Link className="btn btn-primary" href="/partner">Bring us a football problem</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
