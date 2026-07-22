import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { projects } from "@/data/site";
import { formatDate, sportName, visibleProjectDetail } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.filter((project) => project.visibility !== "hidden" && project.visibility !== "private").map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = visibleProjectDetail(params.slug);
  return { title: project?.title ?? "Project" };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = visibleProjectDetail(params.slug);
  if (!project || project.visibility === "private") notFound();

  const redacted = project.visibility === "redacted";

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{sportName(project.sport)} · {project.projectType}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="tag-row">
            <span className="tag">{project.status}</span>
            <span className="tag">{project.academicYear}</span>
            <span className="tag">Updated {formatDate(project.lastUpdated)}</span>
            {redacted ? <span className="tag"><LockKeyhole size={14} aria-hidden /> Redacted methods/results</span> : null}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid two">
          {[
            ["Problem", project.problem],
            ["Context", `This ${project.projectType.toLowerCase()} project sits inside Bruin Sports Analytics' ${sportName(project.sport)} workstream.`],
            ["Approach", redacted ? "Detailed methods are redacted because this work may involve protected partner context." : project.approach],
            ["Data", redacted ? "Public page only describes approved data categories." : "Play-level, event-level, and contextual sports data prepared by the project team."],
            ["Methods and technology", project.techStack.join(", ")],
            ["Results", redacted ? "Results are summarized at a high level for public viewing." : project.result],
            ["Team", project.members.join(", ") || "Team details not listed."],
          ].map(([title, text]) => (
            <article className="card" style={{ padding: 24 }} key={title}>
              <span className="eyebrow">{title}</span>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>
      {project.links.paper && (
        <section className="section tight">
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
              <span className="eyebrow">Full paper</span>
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--ucla-gold)", fontSize: 13, fontWeight: 800 }}
              >
                Open in new tab <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
            <iframe
              src={project.links.paper}
              title={`${project.title} — full paper`}
              style={{ width: "100%", height: "80vh", border: "none", borderRadius: 12 }}
            />
          </div>
        </section>
      )}
    </main>
  );
}
