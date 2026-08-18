import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import { ProjectVisual } from "@/components/ProjectVisual";
import styles from "./HomeProjectCard.module.css";

export function HomeProjectCard({ project }: { project: Project }) {
  const isPrivate = project.visibility === "private" || project.visibility === "redacted";
  const date = new Date(project.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const cardContent = (
    <>
      <ProjectVisual project={project} />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.date}>{date}</span>

        <div className={styles.divider} aria-hidden />
        <span className={styles.eyebrow}>{sportName(project.sport)} · {project.academicYear}</span>
        <p className={styles.summary}>{project.summary}</p>
        <div className="tag-row">
          {project.techStack.slice(0, 3).map((tech) => (
            <span className="tag" key={tech}>{tech}</span>
          ))}
        </div>

        {isPrivate && (
          <div className={styles.action}>
            <span className={styles.private}><LockKeyhole size={14} aria-hidden /> Approved summary only</span>
          </div>
        )}
      </div>
    </>
  );

  if (isPrivate) {
    return <div className={styles.card}>{cardContent}</div>;
  }

  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      {cardContent}
    </Link>
  );
}
