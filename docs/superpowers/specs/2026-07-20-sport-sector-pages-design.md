# Sport Sector Pages — Research & Consulting

**Date:** 2026-07-20  
**Status:** Approved

## Overview

Add per-sport Research and Consulting sub-pages for all 5 sports, accessible at `/work/[sport]/research` and `/work/[sport]/consulting`. Existing sport pages remain unchanged.

## Context

BSA organizes work into 5 sport teams (baseball, volleyball, basketball, football, tennis). Each team has two internal sectors: Research and Consulting. These sectors have no dedicated pages today — all projects appear together on the sport page. This spec adds dedicated pages for each sector.

## Architecture

### Shared component

**`components/SportSectorPage.tsx`**  
Accepts `sport: SportSlug` and `sector: "Research" | "Consulting"` as props.  
Responsible for all filtering and layout. No data model changes — projects already have `projectType: WorkType` which includes `"Research"` and `"Consulting"`.

### Entry files (10 total)

Thin wrappers, ~5 lines each, one per sport/sector combination:

```
app/work/baseball/research/page.tsx
app/work/baseball/consulting/page.tsx
app/work/volleyball/research/page.tsx
app/work/volleyball/consulting/page.tsx
app/work/basketball/research/page.tsx
app/work/basketball/consulting/page.tsx
app/work/football/research/page.tsx
app/work/football/consulting/page.tsx
app/work/tennis/research/page.tsx
app/work/tennis/consulting/page.tsx
```

## Page Layout

Each sector page follows the existing sport page structure:

1. **Hero** — eyebrow: "[Sport] [Sector]", h1: "[Sport] — [Sector]", body: sport description from `data/site.ts`
2. **Stats strip** — sport icon (accent-colored) + focus area cards, same card grid as sport pages
3. **Active projects** — `ProjectCard` grid filtered by `sport === slug && projectType === sector && status Active/Ongoing`
4. **Archive** — same filter, Completed/Archived status
5. **Team card** — members list identical to the parent sport page

## Data filtering

```ts
const sectorProjects = projects.filter(
  (p) => p.sport === sport.slug && p.projectType === sector && p.visibility !== "hidden"
);
const active = sectorProjects.filter((p) => p.status === "Active" || p.status === "Ongoing");
const archived = sectorProjects.filter((p) => p.status === "Completed" || p.status === "Archived");
```

## Metadata

Each entry file exports a `Metadata` object with `title: "[Sport] [Sector]"` — e.g., `"Basketball Research"`.

## Out of scope

- No changes to existing sport pages
- No navigation links to sector pages (can be added separately)
- Tennis subdivisions (`/work/tennis/[subdivision]`) are unaffected
- No new data model types or fields
