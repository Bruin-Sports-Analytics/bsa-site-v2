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
          <span className="eyebrow" style={{ fontSize: 15 }}>Project dashboard</span>
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
