import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <main>
      <section style={{ padding: "120px 0 16px" }}>
        <div className="container">
          <h1 className="section-title" style={{ margin: 0 }}>Project dashboard</h1>
        </div>
      </section>
      <section style={{ padding: "0 0 48px" }}>
        <div className="container">
          <ProjectExplorer />
        </div>
      </section>
    </main>
  );
}
