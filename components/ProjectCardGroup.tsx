"use client";

import { useState } from "react";
import { HomeProjectCard } from "@/components/HomeProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectCardGroup.module.css";

export function ProjectCardGroup({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <HomeProjectCard
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
