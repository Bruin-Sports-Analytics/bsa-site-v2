import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { members, projects, sports } from "@/data/site";

type Props = {
  params: { sport: string };
};

export function generateStaticParams() {
  return sports.map((sport) => ({ sport: sport.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const sport = sports.find((item) => item.slug === params.sport);
  return { title: sport ? `${sport.name} Work` : "Sport Work" };
}

export default function SportPage({ params }: Props) {
  const sport = sports.find((item) => item.slug === params.sport);
  if (!sport) notFound();

  const sportProjects = projects.filter((project) => project.sport === sport.slug && project.visibility !== "hidden");
  const active = sportProjects.filter((project) => project.status === "Active" || project.status === "Ongoing");
  const archived = sportProjects.filter((project) => project.status === "Completed" || project.status === "Archived");
  const team = members.filter((member) => member.team.toLowerCase().includes(sport.name.toLowerCase()) && member.isPublished);
  const Icon = sport.icon;

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{sport.name} analytics</span>
          <h1>{sport.name}</h1>
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
            <h2 className="section-title" style={{ fontSize: 32 }}>{sport.featuredMetric}</h2>
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
      {sport.subdivisions ? (
        <section className="section tight">
          <div className="container">
            <span className="eyebrow">Tennis programs</span>
            <h2 className="section-title">Configurable subdivisions</h2>
            <div className="grid three">
              {sport.subdivisions.map((name) => (
                <Link className="card" style={{ padding: 22 }} href={`/work/tennis/${name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} key={name}>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-sora)" }}>{name}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>Landing page with leads, projects, dashboards, and archives.</p>
                  <span className="text-link">Open program <ArrowRight size={16} aria-hidden /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
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
          <h2 className="section-title">Research, journalism, dashboards, and consulting</h2>
          <div className="grid three">
            {archived.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Team</span>
            <h2 style={{ fontFamily: "var(--font-sora)", fontSize: 36, margin: "10px 0" }}>{sport.lead}</h2>
            <p className="section-lede">{team.length ? team.map((member) => member.name).join(", ") : "Team members will be published after roster confirmation."}</p>
            <Link className="btn btn-primary" href="/partner" style={{ width: "fit-content" }}>Bring us a {sport.name.toLowerCase()} problem</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
