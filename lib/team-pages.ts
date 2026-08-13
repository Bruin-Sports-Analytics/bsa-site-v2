import { isActiveProject, members, projects, sports } from "@/data/site";
import type { Member, Project, Sport, SportSlug } from "@/data/site";

export type TeamSportSlug = Exclude<SportSlug, "other">;

/** A Sport without its icon component so it can cross the server->client boundary. */
export type SerializableSport = Omit<Sport, "icon">;

export type SportOverview = {
  sport: SerializableSport;
  projects: Project[];
  activeProjects: Project[];
  archivedProjects: Project[];
  featuredProject?: Project;
  chairs: Member[];
  analysts: Member[];
  teamSize: number;
};

export const teamSportSlugs: TeamSportSlug[] = ["baseball", "volleyball", "basketball", "football", "tennis"];

function bySortOrder(a: Member, b: Member) {
  return a.sortOrder - b.sortOrder;
}

export function getSportOverview(sport: Sport): SportOverview {
  const sportProjects = projects.filter((project) => project.sport === sport.slug && project.visibility !== "hidden");
  const activeProjects = sportProjects.filter(isActiveProject);
  const archivedProjects = sportProjects.filter((project) => !isActiveProject(project));
  const featuredProject = activeProjects.find((project) => project.featured) ?? activeProjects[0] ?? archivedProjects.find((project) => project.featured) ?? archivedProjects[0];
  const chairs = members
    .filter((member) => member.group === "board" && member.team.toLowerCase().includes(sport.slug) && member.isPublished)
    .sort(bySortOrder);
  const chairNames = new Set(chairs.map((member) => member.name));
  const analysts = members
    .filter((member) => member.group === "member" && member.team.toLowerCase() === sport.slug && member.isPublished && !chairNames.has(member.name))
    .sort(bySortOrder);

  const { icon: _icon, ...serializableSport } = sport;

  return {
    sport: serializableSport,
    projects: sportProjects,
    activeProjects,
    archivedProjects,
    featuredProject,
    chairs,
    analysts,
    teamSize: chairs.length + analysts.length
  };
}

export function getSportOverviewBySlug(slug: TeamSportSlug) {
  const sport = sports.find((item) => item.slug === slug);
  if (!sport) return null;
  return getSportOverview(sport);
}

export function getTeamSportOverviews() {
  return sports
    .filter((sport): sport is Sport & { slug: TeamSportSlug } => teamSportSlugs.includes(sport.slug as TeamSportSlug))
    .map(getSportOverview);
}

