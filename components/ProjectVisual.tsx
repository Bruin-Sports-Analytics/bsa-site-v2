"use client";

import type { CSSProperties } from "react";
import { ImageOff } from "lucide-react";
import { sports, type Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import { projectThumbnailSrc } from "@/lib/projectThumbnails";
import { LazyImage } from "@/components/LazyImage";
import styles from "./ProjectVisual.module.css";

export function ProjectVisual({ project }: { project: Project }) {
  const accent = sports.find((sport) => sport.slug === project.sport)?.accent ?? "#4aa8ff";
  const hasPaper = Boolean(project.links.paper);

  return (
    <div className={styles.media}>
      {hasPaper ? (
        <LazyImage
          src={projectThumbnailSrc(project.slug)}
          alt=""
          fill
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1180px) 31vw, 360px"
          className={styles.image}
          loading="lazy"
          fetchPriority="low"
          rootMargin="450px"
        />
      ) : (
        <div className={styles.fallback} style={{ "--accent": accent } as CSSProperties}>
          <ImageOff size={32} aria-hidden />
          <span>{project.projectType}</span>
          <strong>{sportName(project.sport)}</strong>
        </div>
      )}
      <div className={styles.overlay} aria-hidden />
    </div>
  );
}
