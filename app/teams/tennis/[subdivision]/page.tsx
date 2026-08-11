import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, sports } from "@/data/site";
import { slugify } from "@/lib/utils";

type Props = {
  params: { subdivision: string };
};

const legacyTennisSubdivisionSlugs: Record<string, string> = {
  "match-strategy": "Strategy - role",
  "player-development": "Tagging - role",
  "scouting-and-recruitment": "Scouting - role"
};

function tennisSubdivisions() {
  const tennis = sports.find((sport) => sport.slug === "tennis");
  return tennis?.subdivisions ?? [];
}

function resolveSubdivision(slug: string) {
  return tennisSubdivisions().find((item) => slugify(item) === slug) ?? legacyTennisSubdivisionSlugs[slug];
}

export function generateStaticParams() {
  return [
    ...tennisSubdivisions().map((subdivision) => ({ subdivision: slugify(subdivision) })),
    ...Object.keys(legacyTennisSubdivisionSlugs).map((subdivision) => ({ subdivision }))
  ];
}

export function generateMetadata({ params }: Props): Metadata {
  const name = resolveSubdivision(params.subdivision);
  return { title: name ? `Tennis: ${name}` : "Tennis Program" };
}

export default function TennisSubdivisionPage({ params }: Props) {
  const tennis = sports.find((sport) => sport.slug === "tennis");
  const name = resolveSubdivision(params.subdivision);
  if (!tennis || !name) notFound();

  const subdivisionProjects = projects.filter((project) => project.subdivision === name || (project.subdivision && legacyTennisSubdivisionSlugs[slugify(project.subdivision)] === name));

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Tennis program</span>
          <h1>{name}</h1>
          <p>This role area can publish active projects, dashboards, lead contacts, and archived work without breaking older tennis program links.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Program work</span>
          <h2 className="section-title">Projects and dashboards</h2>
          <div className="grid three">
            {subdivisionProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
