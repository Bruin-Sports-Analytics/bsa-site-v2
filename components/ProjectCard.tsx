"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPrivate = project.visibility === "private" || project.visibility === "redacted";

  const handleEnter = () => {
    if (collapseTimer.current) {
      clearTimeout(collapseTimer.current);
      collapseTimer.current = null;
    }
    setExpanded(true);
    setContentVisible(true);
  };

  const handleLeave = () => {
    setContentVisible(false);
    collapseTimer.current = setTimeout(() => setExpanded(false), 80);
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
    <GlassSurface
      as="article"
      variant="regular"
      tint="none"
      radius="lg"
      className={`${styles.card} ${expanded ? styles.expanded : ""}`}
      style={{
        height: expanded ? "420px" : "200px",
        transition: `height ${expanded ? ".55s" : ".38s"} cubic-bezier(.4, 0, .2, 1)`,
      }}
      {...handlers}
    >
      <div className={styles.visual} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={`${styles.reveal} ${contentVisible ? styles.revealOpen : ""}`}>
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
