"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { isActiveProject, projectLifecycleStatus, projects, sports, type WorkType } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "./ProjectExplorer.module.css";

const types: Array<WorkType | "All"> = ["All", "Consulting", "Research", "Journalism", "Dashboard", "Tool"];
const statuses = ["Active", "Archived"] as const;

export function ProjectExplorer({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [sport, setSport] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [showArchived, setShowArchived] = useState(true);
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    return projects
      .filter((project) => project.visibility !== "hidden")
      .filter((project) => showArchived || isActiveProject(project))
      .filter((project) => !sport || project.sport === sport)
      .filter((project) => !type || project.projectType === type)
      .filter((project) => !status || projectLifecycleStatus(project) === status)
      .filter((project) => {
        const haystack = [project.title, project.summary, project.techStack.join(" "), project.members.join(" ")].join(" ").toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
      .sort((a, b) => {
        if (sort === "featured") return Number(b.featured) - Number(a.featured);
        return Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated);
      });
  }, [query, sport, status, type, showArchived, sort]);

  const numCols = compact ? 2 : 4;
  const columns = Array.from({ length: numCols }, (_, i) =>
    filtered.filter((_, j) => j % numCols === i)
  );

  return (
    <div className={styles.explorer}>
      <div className={`${styles.controls} glass glass--strong glass--radius-lg`}>
        <label className={styles.search}>
          <Search size={18} aria-hidden />
          <span className="sr-only">Search projects</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, tech, members" />
        </label>
        <select value={sport} onChange={(event) => setSport(event.target.value)} aria-label="Filter by sport">
          <option value="">Sport</option>
          {sports.map((item) => (
            <option value={item.slug} key={item.slug}>{item.name}</option>
          ))}
        </select>
        <select value={type} onChange={(event) => setType(event.target.value)} aria-label="Filter by work type">
          <option value="">Type</option>
          {types.slice(1).map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={status} onChange={(event) => setStatus(event.target.value)} aria-label="Filter by project status">
          <option value="">Status</option>
          {statuses.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort projects">
          <option value="" disabled hidden>Sort</option>
          <option value="newest">Newest</option>
          <option value="featured">Featured</option>
        </select>
        <label className={styles.toggle}>
          <input type="checkbox" checked={showArchived} onChange={(event) => setShowArchived(event.target.checked)} />
          Active and archived
        </label>
      </div>
      {filtered.length === 0 ? (
        <p className={styles.empty}>No projects match those filters.</p>
      ) : (
        <div className={compact ? styles.compactGrid : styles.grid}>
          {columns.map((col, i) => (
            <div key={i} className={styles.column}>
              {col.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
