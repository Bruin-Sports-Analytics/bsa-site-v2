"use client";

import { useState, useRef } from "react";
import { HomeProjectCard } from "@/components/HomeProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectCardGroup.module.css";

export function ProjectCardGroup({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleActivate = (slug: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveSlug(slug);
  };

  const handleDeactivate = () => {
    closeTimer.current = setTimeout(() => setActiveSlug(null), 120);
  };

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <HomeProjectCard
          key={project.slug}
          project={project}
          active={activeSlug === project.slug}
          onActivate={() => handleActivate(project.slug)}
          onDeactivate={handleDeactivate}
        />
      ))}
    </div>
  );
}
