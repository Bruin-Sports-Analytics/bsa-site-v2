"use client";

import type { CSSProperties } from "react";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { sports, type Project } from "@/data/site";
import { sportName } from "@/lib/utils";
import { projectThumbnailSrc } from "@/lib/projectThumbnails";
import styles from "./ProjectVisual.module.css";

type Props = {
  project: Project;
  priority?: boolean;
  sizes?: string;
};

const defaultSizes = "(max-width: 600px) calc(100vw - 40px), (max-width: 1050px) calc((100vw - 54px) / 2), (max-width: 1280px) calc((100vw - 82px) / 3), 380px";

export function ProjectVisual({ project, priority = false, sizes = defaultSizes }: Props) {
  const accent = sports.find((sport) => sport.slug === project.sport)?.accent ?? "#4aa8ff";
  const hasThumbnail = Boolean(project.links.paper || project.hasThumbnail);

  return (
    <div className={styles.media}>
      {hasThumbnail ? (
        <Image
          src={projectThumbnailSrc(project.slug)}
          alt=""
          fill
          sizes={sizes}
          className={styles.image}
          priority={priority}
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
