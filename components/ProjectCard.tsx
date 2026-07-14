"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const isPrivate = project.visibility === "private" || project.visibility === "redacted";

  const handlers = {
    onMouseEnter: () => setExpanded(true),
    onMouseLeave: () => setExpanded(false),
    onFocus: () => setExpanded(true),
    onBlur: (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) setExpanded(false);
    },
  };

  return (
    <GlassSurface
      as="article"
      variant="regular"
      tint="none"
      radius="lg"
      className={`${styles.card} ${expanded ? styles.expanded : ""}`}
      {...handlers}
    >
      <div className={styles.visual} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={`${styles.reveal} ${expanded ? styles.revealOpen : ""}`}>
          <div className={styles.revealInner}>
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
                  Open project <ArrowUpRight size={15} aria-hidden />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlassSurface>
  );
}
