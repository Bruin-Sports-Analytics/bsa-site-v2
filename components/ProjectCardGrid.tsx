"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectExplorer.module.css";

export function ProjectCardGrid({ projects, cols = 3 }: { projects: Project[]; cols?: number }) {
  const columns = Array.from({ length: cols }, (_, i) =>
    projects.filter((_, j) => j % cols === i)
  );

  return (
    <div className={styles.grid}>
      {columns.map((col, i) => (
        <div key={i} className={styles.column}>
          {col.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      ))}
    </div>
  );
}
