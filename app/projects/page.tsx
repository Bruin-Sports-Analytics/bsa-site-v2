import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore sports analytics consulting reports, predictive models, and research projects by Bruin Sports Analytics students across baseball, basketball, football, volleyball, and tennis.",
  keywords: [
    "sports analytics projects",
    "sports data science research",
    "sports predictive models",
    "baseball analytics projects",
    "basketball shot quality models",
    "football analytics research",
    "sabermetrics portfolio",
    "sports analytics dashboards",
    "UCLA sports analytics work",
    "student sports consulting reports"
  ],
  openGraph: {
    title: "Projects & Research | Bruin Sports Analytics",
    description: "Sports analytics consulting reports, predictive models, and student research projects across collegiate and professional sports.",
    url: "https://www.bruinsportsanalytics.org/projects"
  }
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
