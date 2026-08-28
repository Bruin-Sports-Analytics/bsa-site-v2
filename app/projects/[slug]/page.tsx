import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { projectLifecycleStatus, projects } from "@/data/site";
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
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.summary
  };
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
            <span className="tag">{projectLifecycleStatus(project)}</span>
            <span className="tag">{project.academicYear}</span>
            <span className="tag">Updated {formatDate(project.lastUpdated)}</span>
            {redacted ? <span className="tag"><LockKeyhole size={14} aria-hidden /> Redacted</span> : null}
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.overviewCard}>
            <span className="eyebrow">Project Overview</span>
            <p className={styles.summaryText}>{project.summary}</p>
          </div>

          <div className={styles.gridThree}>
            <div className={styles.gridCard}>
              <span className={styles.cardHeader}>Problem & Objective</span>
              <p className={styles.cardBody}>{project.problem}</p>
            </div>
            <div className={styles.gridCard}>
              <span className={styles.cardHeader}>Analytical Approach</span>
              <p className={styles.cardBody}>{project.approach}</p>
            </div>
            <div className={styles.gridCard}>
              <span className={styles.cardHeader}>Key Result & Impact</span>
              <p className={styles.cardBody}>{project.result}</p>
            </div>
          </div>

          {project.techStack.length > 0 && (
            <div className={styles.techStackBlock}>
              <span className="eyebrow">Tech Stack & Tools</span>
              <div className="tag-row" style={{ marginTop: 8 }}>
                {project.techStack.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.links.demo && (
            <div style={{ marginTop: 24 }}>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open Live Tool <ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          )}
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
