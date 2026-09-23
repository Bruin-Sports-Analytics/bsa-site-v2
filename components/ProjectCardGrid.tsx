"use client";

import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/site";
import { useEffect, useState, type CSSProperties } from "react";
import styles from "./ProjectExplorer.module.css";

function useColumnCount(maxColumns: number) {
  const [columnCount, setColumnCount] = useState(maxColumns);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 600px)");
    const tablet = window.matchMedia("(max-width: 1050px)");
    const updateColumnCount = () => {
      setColumnCount(mobile.matches ? 1 : tablet.matches ? Math.min(2, maxColumns) : maxColumns);
    };

    updateColumnCount();
    mobile.addEventListener("change", updateColumnCount);
    tablet.addEventListener("change", updateColumnCount);

    return () => {
      mobile.removeEventListener("change", updateColumnCount);
      tablet.removeEventListener("change", updateColumnCount);
    };
  }, [maxColumns]);

  return columnCount;
}

export function ProjectCardGrid({ projects, cols = 3, reserveHoverSpace = false }: { projects: Project[]; cols?: number; reserveHoverSpace?: boolean }) {
  const columnCount = useColumnCount(cols);
  const imageSizes = "(max-width: 600px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 54px) / 2), (max-width: 1280px) calc((100vw - 82px) / 3), 380px";
  const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
    projects.filter((_, projectIndex) => projectIndex % columnCount === columnIndex)
  );

  return (
    <div
      className={`${styles.grid} ${reserveHoverSpace ? styles.gridWithHoverReserve : ""}`}
      style={{ "--project-cols": columnCount } as CSSProperties}
    >
      {columns.map((column, columnIndex) => (
        <div className={styles.column} key={columnIndex}>
          {column.map((project, projectIndex) => (
            <ProjectCard project={project} key={project.slug} priority={projectIndex === 0} imageSizes={imageSizes} />
          ))}
        </div>
      ))}
    </div>
  );
}
