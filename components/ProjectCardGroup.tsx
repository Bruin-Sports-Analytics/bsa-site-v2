import { HomeProjectCard } from "@/components/HomeProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectCardGroup.module.css";

export function ProjectCardGroup({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <HomeProjectCard key={project.slug} project={project} priority={index < 3} />
      ))}
    </div>
  );
}
