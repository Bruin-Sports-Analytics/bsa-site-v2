import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Project dashboard</span>
          <h1>Search the deliverables</h1>
          <p>Filter by sport, project type, status, technology, and availability. Private work only exposes approved public summaries.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ProjectExplorer />
        </div>
      </section>
    </main>
  );
}
