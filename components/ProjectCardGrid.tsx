"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/site";
import type { CSSProperties } from "react";
import styles from "./ProjectExplorer.module.css";

export function ProjectCardGrid({ projects, cols = 3, reserveHoverSpace = false }: { projects: Project[]; cols?: number; reserveHoverSpace?: boolean }) {
  const imageSizes = "(max-width: 600px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 54px) / 2), (max-width: 1280px) calc((100vw - 82px) / 3), 380px";

  return (
    <div
      className={`${styles.grid} ${reserveHoverSpace ? styles.gridWithHoverReserve : ""}`}
      style={{ "--project-cols": cols } as CSSProperties}
    >
      {projects.map((project, projectIndex) => (
        <ProjectCard project={project} key={project.slug} priority={projectIndex < cols} imageSizes={imageSizes} />
      ))}
    </div>
  );
}
