import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <main>
      <section style={{ padding: "120px 0 32px" }}>
        <div className="container">
          <span className="eyebrow">Project dashboard</span>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <ProjectExplorer />
        </div>
      </section>
    </main>
  );
}
