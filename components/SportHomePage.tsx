import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MemberCard } from "@/components/MemberCard";
import { ProjectCardGrid } from "@/components/ProjectCardGrid";
import { getSportOverviewBySlug, type TeamSportSlug } from "@/lib/team-pages";
import { slugify } from "@/lib/utils";
import styles from "./SportHomePage.module.css";
import heroStyles from "@/app/teams/sport-hero.module.css";

const focusDescriptions: Record<TeamSportSlug, Record<string, string>> = {
  baseball: {
    "Pitch shape clustering": "Group pitch movement profiles, usage patterns, and outcomes into cleaner scouting and development views.",
    "Defensive positioning": "Evaluate batted-ball tendencies, alignment choices, and run-prevention tradeoffs.",
    "Opponent scouting": "Turn public and internal data into matchup plans, tendencies, and pre-series context."
  },
  basketball: {
    "Shot charts": "Translate location and efficiency data into clearer shot-quality and player tendency views.",
    "Lineup interaction effects": "Compare combinations, role fit, and possession outcomes across different groups.",
    "Player role similarity": "Use statistical profiles to find comparable players, team needs, and development paths."
  },
  football: {
    "Fourth-down decisions": "Model down, distance, score, field position, and overtime rules for decision support.",
    "Explosive play prevention": "Study coverage, spacing, and drive context behind high-leverage defensive outcomes.",
    "Recruiting evaluation": "Build repeatable frameworks for roster, prospect, and skill-position evaluation."
  },
  tennis: {
    "Point patterns": "Chart point construction, rally shape, and player tendencies across match contexts.",
    "Serve plus-one value": "Connect serve placement and next-shot advantage to tactical match planning.",
    "Opponent scouting": "Package match data into scouting notes, player profiles, and role-specific workflows."
  },
  volleyball: {
    "Rotation efficiency": "Compare lineup rotations, sideout patterns, and rally outcomes across match states.",
    "Serve target maps": "Identify serve-receive pressure points and target tendencies for match preparation.",
    "Rally transition value": "Track how first contact, transition choices, and attack quality shape point outcomes."
  }
};

function projectAction(project: NonNullable<ReturnType<typeof getSportOverviewBySlug>>["featuredProject"]) {
  if (!project) return null;
  if (project.links.demo) return { href: project.links.demo, label: "Open tool", external: true };
  return { href: `/projects/${project.slug}`, label: project.links.paper ? "Read paper" : "Open project", external: false };
}

export function SportHomePage({ slug }: { slug: TeamSportSlug }) {
  const overview = getSportOverviewBySlug(slug);
  if (!overview) return null;

  const { activeProjects, archivedProjects, chairs, featuredProject, sport } = overview;
  const action = projectAction(featuredProject);

  return (
    <main>
      <section className="page-hero">
        <div className={`container ${heroStyles.heroRow}`}>
          <div className={heroStyles.heroText}>
            <span className="eyebrow">{sport.name} analytics</span>
            <h1>{sport.name}</h1>
            <p>{sport.description}</p>
            {sport.slug === "volleyball" ? (
              <p>For two years, BSA has partnered with UCLA men&apos;s and women&apos;s volleyball on work that supports coaching decisions with clearer, faster information.</p>
            ) : null}
            <div className="button-row">
              <Link className="btn btn-primary" href="/partner">Partner with this team</Link>
              <Link className="btn btn-secondary" href="#projects">View projects</Link>
            </div>
          </div>

          {chairs.length > 0 && (
            <div className={chairs.length === 1 ? `${heroStyles.chairGrid} ${heroStyles.chairGridCentered}` : heroStyles.chairGrid}>
              {chairs.map((chair) => <MemberCard member={chair} key={chair.slug} />)}
            </div>
          )}
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Workstreams</span>
            <h2 className="section-title">What this team studies</h2>
          </div>
          <div className={styles.focusGrid}>
            {sport.focusAreas.map((area) => (
              <article className={styles.focusCard} key={area} style={{ "--accent": sport.accent } as React.CSSProperties}>
                <span>{area}</span>
                <p>{focusDescriptions[slug][area] ?? "Current questions, tools, and deliverables are organized around this focus area."}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredProject ? (
        <section className="section tight">
          <div className="container">
            <article className={styles.featuredWork}>
              <div>
                <span className="eyebrow">Featured work</span>
                <h2>{featuredProject.title}</h2>
                <p>{featuredProject.summary}</p>
              </div>
              <div className={styles.featuredDetails}>
                <div>
                  <span>Problem</span>
                  <p>{featuredProject.problem}</p>
                </div>
                <div>
                  <span>Approach</span>
                  <p>{featuredProject.approach}</p>
                </div>
                <div>
                  <span>Result</span>
                  <p>{featuredProject.result}</p>
                </div>
                {action ? (
                  action.external ? (
                    <a className="text-link" href={action.href} target="_blank" rel="noopener noreferrer">
                      {action.label} <ArrowUpRight size={15} aria-hidden />
                    </a>
                  ) : (
                    <Link className="text-link" href={action.href}>
                      {action.label} <ArrowUpRight size={15} aria-hidden />
                    </Link>
                  )
                ) : null}
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {sport.subdivisions ? (
        <section className="section tight">
          <div className="container">
            <span className="eyebrow">Tennis roles</span>
            <h2 className="section-title">Role-based programs</h2>
            <div className={styles.roleGrid}>
              {sport.subdivisions.map((name) => (
                <Link className={styles.roleCard} href={`/teams/tennis/${slugify(name)}`} key={name}>
                  <h3>{name}</h3>
                  <p>Projects, dashboards, lead contacts, and archived work for this tennis role area.</p>
                  <span>Open role <ArrowRight size={16} aria-hidden /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section" id="projects">
        <div className="container">
          <span className="eyebrow">Active projects</span>
          <h2 className="section-title">Current work</h2>
          {activeProjects.length ? <ProjectCardGrid projects={activeProjects} /> : <p className="section-lede">Active work will be published after project approval.</p>}
        </div>
      </section>

      {slug !== "volleyball" && (
        <section className="section tight">
          <div className="container">
            <span className="eyebrow">Archive</span>
            <h2 className="section-title">Past work</h2>
            {archivedProjects.length ? <ProjectCardGrid projects={archivedProjects} /> : <p className="section-lede">Past work will appear here as the archive is filled out.</p>}
          </div>
        </section>
      )}
    </main>
  );
}

