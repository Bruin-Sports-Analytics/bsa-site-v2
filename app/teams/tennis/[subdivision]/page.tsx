import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, sports } from "@/data/site";
import { slugify } from "@/lib/utils";

type Props = {
  params: { subdivision: string };
};

export function generateStaticParams() {
  const tennis = sports.find((sport) => sport.slug === "tennis");
  return (tennis?.subdivisions ?? []).map((subdivision) => ({ subdivision: slugify(subdivision) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tennis = sports.find((sport) => sport.slug === "tennis");
  const name = tennis?.subdivisions?.find((item) => slugify(item) === params.subdivision);
  return { title: name ? `Tennis: ${name}` : "Tennis Program" };
}

export default function TennisSubdivisionPage({ params }: Props) {
  const tennis = sports.find((sport) => sport.slug === "tennis");
  const name = tennis?.subdivisions?.find((item) => slugify(item) === params.subdivision);
  if (!tennis || !name) notFound();

  const subdivisionProjects = projects.filter((project) => project.subdivision === name);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>{name}</h1>
          <p>This CMS-configurable subdivision can publish its own active projects, dashboards, lead contacts, and archived work.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Projects and dashboards</h2>
          <div className="grid three">
            {subdivisionProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
