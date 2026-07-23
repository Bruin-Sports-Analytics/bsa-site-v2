"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  active?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
};

export function ProjectCard({ project, active, onActivate, onDeactivate }: Props) {
  const controlled = active !== undefined;
  const [internalActive, setInternalActive] = useState(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPrivate = project.visibility === "private" || project.visibility === "redacted";

  const expanded = controlled ? active : internalActive;

  const handleEnter = () => {
    if (collapseTimer.current) { clearTimeout(collapseTimer.current); collapseTimer.current = null; }
    if (controlled) { onActivate?.(); } else { setInternalActive(true); }
  };

  const handleLeave = () => {
    if (controlled) {
      onDeactivate?.();
    } else {
      collapseTimer.current = setTimeout(() => setInternalActive(false), 80);
    }
  };

  const handlers = {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    onFocus: handleEnter,
    onBlur: (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) handleLeave();
    },
  };

  return (
    <div className={`${styles.wrapper} ${expanded ? styles.wrapperExpanded : ""}`} {...handlers}>
      <GlassSurface
        as="article"
        variant="regular"
        tint="none"
        radius="lg"
        className={`${styles.card} ${expanded ? styles.cardExpanded : ""}`}
      >
        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.date}>{new Date(project.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
      </GlassSurface>

      <div className={`${styles.reveal} ${expanded ? styles.revealOpen : ""}`} aria-hidden={!expanded}>
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
          ) : project.links.paper ? (
            <Link href={`/projects/${project.slug}`} className={styles.link}>
              Read paper <ArrowUpRight size={15} aria-hidden />
            </Link>
          ) : (
            <Link href={`/projects/${project.slug}`} className={styles.link}>
              Open project <ArrowUpRight size={15} aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
