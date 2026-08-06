import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { isActiveProject, members, projects, sports } from "@/data/site";
import type { SportSlug, WorkType } from "@/data/site";

type Props = {
  sport: SportSlug;
  sector: Extract<WorkType, "Research" | "Consulting">;
};

export default function SportSectorPage({ sport: sportSlug, sector }: Props) {
  const sport = sports.find((s) => s.slug === sportSlug)!;
  const Icon = sport.icon;

  const sectorProjects = projects.filter(
    (p) => p.sport === sportSlug && p.projectType === sector && p.visibility !== "hidden"
  );
  const active = sectorProjects.filter(isActiveProject);
  const archived = sectorProjects.filter((p) => !isActiveProject(p));
  const team = members.filter((m) => m.team.toLowerCase().includes(sportSlug) && m.isPublished);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>{sport.name} — {sector}</h1>
          <p>{sport.description}</p>
          <div className="button-row">
            <Link className="btn btn-primary" href="/partner">Partner with this team</Link>
            <Link className="btn btn-secondary" href={`/teams/${sportSlug}`}>All {sport.name} work</Link>
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
              <h2 style={{ margin: "10px 0", fontFamily: "var(--font-sora)" }}>{area}</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>Current questions, tools, and research are organized around this focus area.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Current {sector.toLowerCase()} work</h2>
          <div className="grid three">
            {active.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <h2 className="section-title">Archived {sector.toLowerCase()}</h2>
          <div className="grid three">
            {archived.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="card" style={{ padding: 28 }}>
            <h2 style={{ fontFamily: "var(--font-sora)", fontSize: 32, margin: "10px 0" }}>{sport.lead}</h2>
            <p className="section-lede">
              {team.length ? team.map((m) => m.name).join(", ") : "Team members will be published after roster confirmation."}
            </p>
            <Link className="btn btn-primary" href="/partner" style={{ width: "fit-content" }}>
              Bring us a {sportSlug} problem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
