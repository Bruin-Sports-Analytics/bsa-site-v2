import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  const isPrivate = project.visibility === "private";

  return (
    <GlassSurface as="article" variant="regular" tint={project.featured ? "blue" : "none"} interactive radius="lg" className={styles.card}>
      <div className={styles.visual} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{sportName(project.sport)}</span>
          <span>{project.projectType}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.techStack.slice(0, 4).map((tech) => (
            <span className="tag" key={tech}>{tech}</span>
          ))}
        </div>
        <div className={styles.footer}>
          <span>{project.academicYear}</span>
          {isPrivate ? (
            <span className={styles.private}><LockKeyhole size={15} aria-hidden /> Approved summary only</span>
          ) : (
            <Link href={`/projects/${project.slug}`}>
              Open project <ArrowUpRight size={16} aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </GlassSurface>
  );
}
