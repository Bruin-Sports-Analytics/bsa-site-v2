"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectCardGroup.module.css";

export function ProjectCardGroup({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          active={activeSlug === project.slug}
          onActivate={() => setActiveSlug(project.slug)}
          onDeactivate={() => setActiveSlug(null)}
        />
      ))}
    </div>
  );
}
