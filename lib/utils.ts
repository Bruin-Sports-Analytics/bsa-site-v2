import { projects, sports, type Project, type SportSlug } from "@/data/site";

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

export function formatEventDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(value));
}

export function sportName(slug: SportSlug) {
  return sports.find((sport) => sport.slug === slug)?.name ?? slug;
}

export function publicProjects(items: Project[] = projects) {
  return items.filter((project) => project.visibility !== "hidden");
}

export function visibleProjectDetail(slug: string) {
  return publicProjects().find((project) => project.slug === slug);
}

export function currentlyFeatured(now = new Date()) {
  return publicProjects()
    .filter((project) => project.featured)
    .filter((project) => !project.featuredUntil || new Date(project.featuredUntil) >= now)
    .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated));
}

export function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
