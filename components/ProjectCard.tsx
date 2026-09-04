"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import { ProjectVisual } from "@/components/ProjectVisual";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  active?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
};

export function ProjectCard({ project, active, onActivate, onDeactivate }: Props) {
  const router = useRouter();
  const controlled = active !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [internalVisible, setInternalVisible] = useState(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPrivate = project.visibility === "private" || project.visibility === "redacted";

  const expanded = controlled ? active : internalExpanded;
  const contentVisible = controlled ? active : internalVisible;

  const handleEnter = () => {
    if (controlled) { onActivate?.(); return; }
    if (collapseTimer.current) { clearTimeout(collapseTimer.current); collapseTimer.current = null; }
    setInternalExpanded(true);
    setInternalVisible(true);
  };

  const handleLeave = () => {
    if (controlled) { onDeactivate?.(); return; }
    setInternalVisible(false);
    collapseTimer.current = setTimeout(() => setInternalExpanded(false), 80);
  };

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;

    // Navigate to project page if not private
    if (!isPrivate) {
      router.push(`/projects/${project.slug}`);
      return;
    }

    // For private projects, toggle expansion
    if (controlled) { onActivate?.(); return; }
    if (internalExpanded) {
      setInternalVisible(false);
      collapseTimer.current = setTimeout(() => setInternalExpanded(false), 80);
    } else {
      if (collapseTimer.current) { clearTimeout(collapseTimer.current); collapseTimer.current = null; }
      setInternalExpanded(true);
      setInternalVisible(true);
    }
  };

  const handlers = {
    onClick: handleClick,
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
      {...handlers}
    >
      <ProjectVisual project={project} />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.date}>{new Date(project.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        <div className={`${styles.reveal} ${contentVisible ? styles.revealOpen : ""}`}>
          <div className={styles.revealInner}>
            <div className={styles.divider} aria-hidden />
            <span className={styles.eyebrow}>{project.subdivision ?? sportName(project.sport)} · {project.academicYear}</span>
            <p className={styles.summary}>{project.summary}</p>
            <div className="tag-row">
              {project.techStack.slice(0, 3).map((tech) => (
                <span className="tag" key={tech}>{tech}</span>
              ))}
            </div>
            <div className={styles.classificationRow}>
              <span className={styles.classificationBadge}>{project.projectType}</span>
              {project.academicYear <= "2024-25" && (
                <span className={styles.classificationBadge}>Archived</span>
              )}
            </div>
            <div className={styles.action}>
              {isPrivate ? (
                <span className={styles.private}><LockKeyhole size={14} aria-hidden /> Approved summary only</span>
              ) : (
                <>
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      Open tool <ArrowUpRight size={15} aria-hidden />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <Github size={14} aria-hidden /> Repo
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </GlassSurface>
  );
}
