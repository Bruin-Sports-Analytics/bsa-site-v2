"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectExplorer.module.css";

export function ProjectCardGrid({ projects, cols = 3 }: { projects: Project[]; cols?: number }) {
  const columns = Array.from({ length: cols }, (_, i) =>
    projects.filter((_, j) => j % cols === i)
  );
  const imageSizes = "(max-width: 600px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 54px) / 2), (max-width: 1280px) calc((100vw - 82px) / 3), 380px";

  return (
    <div className={styles.grid}>
      {columns.map((col, i) => (
        <div key={i} className={styles.column}>
          {col.map((project, projectIndex) => (
            <ProjectCard project={project} key={project.slug} priority={projectIndex === 0} imageSizes={imageSizes} />
          ))}
        </div>
      ))}
    </div>
  );
}
