import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
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
  const sportLabel = sportName(project.sport);
  const keywords = [
    project.title,
    sportLabel,
    `${sportLabel} analytics`,
    project.projectType,
    "sports analytics consulting",
    "sports data science",
    "Bruin Sports Analytics",
    "UCLA sports analytics",
    ...(project.techStack ?? []),
    ...(project.subdivision ? [project.subdivision] : [])
  ];

  return {
    title: project.title,
    description: project.summary,
    keywords,
    openGraph: {
      title: `${project.title} | Bruin Sports Analytics`,
      description: project.summary,
      url: `https://www.bruinsportsanalytics.org/projects/${params.slug}`,
      type: "article"
    }
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = visibleProjectDetail(params.slug);
  if (!project || project.visibility === "private") notFound();

  const redacted = project.visibility === "redacted";
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.summary,
    "genre": `${sportName(project.sport)} Analytics`,
    "keywords": [sportName(project.sport), project.projectType, ...(project.techStack ?? [])].join(", "),
    "author": {
      "@type": "Organization",
      "name": "Bruin Sports Analytics",
      "url": "https://www.bruinsportsanalytics.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bruin Sports Analytics",
      "url": "https://www.bruinsportsanalytics.org"
    },
    "dateModified": project.lastUpdated ? new Date(project.lastUpdated).toISOString() : undefined,
    "url": `https://www.bruinsportsanalytics.org/projects/${project.slug}`
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">{sportName(project.sport)} · {project.projectType}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <div className="tag-row" style={{ marginTop: 10 }}>
            <span className="tag">{projectLifecycleStatus(project)}</span>
            <span className="tag">{project.academicYear}</span>
            <span className="tag">Updated {formatDate(project.lastUpdated)}</span>
            {redacted ? <span className="tag"><LockKeyhole size={14} aria-hidden /> Redacted</span> : null}
            {project.academicYear <= "2024-25" ? <span className="tag">Archived</span> : null}
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

          {(project.links.demo || project.links.github) && (
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open Live Tool <ArrowUpRight size={16} aria-hidden />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={16} aria-hidden /> View on GitHub
                </a>
              )}
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
