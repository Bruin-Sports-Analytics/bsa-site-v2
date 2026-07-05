import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { SportCard } from "@/components/SportCard";
import { sports } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work"
};

export default function WorkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h1>Sports first. Every format together.</h1>
          <p>Explore consulting, research, journalism, dashboards, and tools through the sports questions that drive them.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid three">
            {sports.map((sport) => <SportCard sport={sport} key={sport.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Project index</span>
          <h2 className="section-title">Filter the work</h2>
          <ProjectExplorer />
        </div>
      </section>
    </main>
  );
}
