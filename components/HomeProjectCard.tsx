"use client";

import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import styles from "./HomeProjectCard.module.css";

type Props = {
  project: Project;
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

export function HomeProjectCard({ project, active, onActivate, onDeactivate }: Props) {
  const isPrivate = project.visibility === "private" || project.visibility === "redacted";
  const date = new Date(project.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div
      className={`${styles.wrapper} ${active ? styles.active : ""}`}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      {/* Ghost: invisible, determines grid row height */}
      <div className={styles.ghost} aria-hidden>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.date}>{date}</span>
      </div>

      {/* Float: absolutely covers ghost, expands freely downward */}
      <div className={`${styles.float} ${active ? styles.floatOpen : ""}`}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.date}>{date}</span>

        {active && (
          <div className={styles.reveal}>
            <div className={styles.divider} aria-hidden />
            <span className={styles.eyebrow}>{sportName(project.sport)} · {project.academicYear}</span>
            <p className={styles.summary}>{project.summary}</p>
            <div className="tag-row">
              {project.techStack.slice(0, 3).map((tech) => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>
            <div className={styles.action}>
              {isPrivate ? (
                <span className={styles.private}><LockKeyhole size={14} aria-hidden /> Approved summary only</span>
              ) : (
                <Link href={`/projects/${project.slug}`} className={styles.link}>
                  {project.links.paper ? "Read paper" : "Open project"} <ArrowUpRight size={15} aria-hidden />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
