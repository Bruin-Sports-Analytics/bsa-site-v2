import { HomeProjectCard } from "@/components/HomeProjectCard";
import type { Project } from "@/data/site";
import styles from "./ProjectCardGroup.module.css";

export function ProjectCardGroup({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <HomeProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
