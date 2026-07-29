import type { Metadata } from "next";
import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import { ProjectCard } from "@/components/ProjectCard";
import { members, projects, sports } from "@/data/site";

const sport = sports.find((s) => s.slug === "baseball")!;

export const metadata: Metadata = { title: "Baseball Work" };

export default function BaseballPage() {
  const sportProjects = projects.filter((p) => p.sport === "baseball" && p.visibility !== "hidden");
  const active = sportProjects.filter((p) => p.status === "Active" || p.status === "Ongoing");
  const archived = sportProjects.filter((p) => p.status === "Completed" || p.status === "Archived");
  const chairs = members.filter((m) => m.group === "board" && m.team.toLowerCase().includes("baseball") && m.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);
  const chairNames = new Set(chairs.map((m) => m.name));
  const analysts = members.filter((m) => m.group === "member" && m.team.toLowerCase() === "baseball" && m.isPublished && !chairNames.has(m.name)).sort((a, b) => a.sortOrder - b.sortOrder);
  const Icon = sport.icon;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Baseball analytics</span>
          <h1>Baseball</h1>
          <p>{sport.description}</p>
          <div className="button-row">
            <Link className="btn btn-primary" href="/partner">Partner with this team</Link>
            <Link className="btn btn-secondary" href="/projects">All projects</Link>
          </div>
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
        <div className="container">
          <span className="eyebrow">Team</span>
          <div className="board-grid" style={{ marginTop: "18px" }}>
            {[...chairs, ...analysts].map((m) => <MemberCard member={m} key={m.slug} />)}
          </div>
          <div className="button-row" style={{ marginTop: "28px" }}>
            <Link className="btn btn-primary" href="/partner">Bring us a baseball problem</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
