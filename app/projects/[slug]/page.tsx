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
            <span className="tag">{projectLifecycleStatus(project)}</span>
            <span className="tag">{project.academicYear}</span>
            <span className="tag">Updated {formatDate(project.lastUpdated)}</span>
            {redacted ? <span className="tag"><LockKeyhole size={14} aria-hidden /> Redacted</span> : null}
          </div>
        </div>
      </section>

      {/* TODO: project details accordion hidden until content is verified against source papers — see GitHub issue #1 */}

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
