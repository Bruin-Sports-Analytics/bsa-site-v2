import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { projects } from "@/data/site";
import { formatDate, sportName, visibleProjectDetail } from "@/lib/utils";
import styles from "./page.module.css";

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
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">{sportName(project.sport)} · {project.projectType}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <div className="tag-row" style={{ marginTop: 10 }}>
            <span className="tag">{project.status}</span>
            <span className="tag">{project.academicYear}</span>
            <span className="tag">Updated {formatDate(project.lastUpdated)}</span>
            {redacted ? <span className="tag"><LockKeyhole size={14} aria-hidden /> Redacted</span> : null}
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className="container">
          <details className={styles.details}>
            <summary className={styles.summary}>Project details</summary>
            <div className="grid two" style={{ marginTop: 16 }}>
              {[
                ["Problem", project.problem],
                ["Context", `This ${project.projectType.toLowerCase()} project sits inside Bruin Sports Analytics' ${sportName(project.sport)} workstream.`],
                ["Approach", redacted ? "Detailed methods are redacted because this work may involve protected partner context." : project.approach],
                ["Results", redacted ? "Results are summarized at a high level for public viewing." : project.result],
                ["Methods and technology", project.techStack.join(", ")],
                ["Team", project.members.join(", ") || "Team details not listed."],
              ].map(([title, text]) => (
                <article className="card" style={{ padding: 20 }} key={title}>
                  <span className="eyebrow">{title}</span>
                  <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{text}</p>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>

      {project.links.paper && (
        <section className={styles.paperSection}>
          <div className="container">
            <div className={styles.paperHeader}>
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
              className={styles.iframe}
            />
          </div>
        </section>
      )}
    </main>
  );
}
