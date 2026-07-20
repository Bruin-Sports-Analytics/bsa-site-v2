# Sport Sector Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/work/[sport]/research` and `/work/[sport]/consulting` pages for all 5 sports, each showing only that sport's projects of that type.

**Architecture:** A single shared `SportSectorPage` component handles filtering and layout; 10 thin entry files call it with the correct `sport` and `sector` props. No existing files are modified. No data model changes needed — `projectType: "Research" | "Consulting"` already exists on projects.

**Tech Stack:** Next.js 14 (App Router), TypeScript, React

## Global Constraints

- Follow existing sport page layout patterns exactly (see `app/work/basketball/page.tsx`)
- Use `@/` path aliases, not relative imports
- No new dependencies
- Entry files export a `Metadata` object with `title: "[Sport] [Sector]"` — e.g. `"Basketball Research"`
- Existing sport pages (`/work/basketball`, etc.) must remain untouched

---

### Task 1: Create SportSectorPage shared component

**Files:**
- Create: `components/SportSectorPage.tsx`

**Interfaces:**
- Consumes: `sports`, `projects`, `members` from `@/data/site`; `ProjectCard` from `@/components/ProjectCard`; types `SportSlug`, `WorkType` from `@/data/site`
- Produces: `default export function SportSectorPage({ sport, sector }: Props)` — used by all 10 entry files in Task 2

- [ ] **Step 1: Create the component**

Create `components/SportSectorPage.tsx` with this exact content:

```tsx
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { members, projects, sports } from "@/data/site";
import type { SportSlug, WorkType } from "@/data/site";

type Props = {
  sport: SportSlug;
  sector: Extract<WorkType, "Research" | "Consulting">;
};

export default function SportSectorPage({ sport: sportSlug, sector }: Props) {
  const sport = sports.find((s) => s.slug === sportSlug)!;
  const Icon = sport.icon;

  const sectorProjects = projects.filter(
    (p) => p.sport === sportSlug && p.projectType === sector && p.visibility !== "hidden"
  );
  const active = sectorProjects.filter((p) => p.status === "Active" || p.status === "Ongoing");
  const archived = sectorProjects.filter((p) => p.status === "Completed" || p.status === "Archived");
  const team = members.filter((m) => m.team.toLowerCase().includes(sportSlug) && m.isPublished);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{sport.name} {sector}</span>
          <h1>{sport.name} — {sector}</h1>
          <p>{sport.description}</p>
          <div className="button-row">
            <Link className="btn btn-primary" href="/partner">Partner with this team</Link>
            <Link className="btn btn-secondary" href={`/work/${sportSlug}`}>All {sport.name} work</Link>
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container grid three">
          <div className="card" style={{ padding: 22 }}>
            <Icon size={34} color={sport.accent} aria-hidden />
            <h2 className="section-title" style={{ fontSize: 29 }}>{sport.featuredMetric}</h2>
            <p className="section-lede">Featured metric controlled from the sport content collection.</p>
          </div>
          {sport.focusAreas.map((area) => (
            <div className="card" style={{ padding: 22 }} key={area}>
              <span className="eyebrow">Priority</span>
              <h2 style={{ margin: "10px 0", fontFamily: "var(--font-sora)" }}>{area}</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>Current questions, tools, and research are organized around this focus area.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Active projects</span>
          <h2 className="section-title">Current {sector.toLowerCase()} work</h2>
          <div className="grid three">
            {active.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Archive</span>
          <h2 className="section-title">Completed {sector.toLowerCase()}</h2>
          <div className="grid three">
            {archived.map((project) => <ProjectCard project={project} key={project.slug} />)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="card" style={{ padding: 28 }}>
            <span className="eyebrow">Team</span>
            <h2 style={{ fontFamily: "var(--font-sora)", fontSize: 32, margin: "10px 0" }}>{sport.lead}</h2>
            <p className="section-lede">
              {team.length ? team.map((m) => m.name).join(", ") : "Team members will be published after roster confirmation."}
            </p>
            <Link className="btn btn-primary" href="/partner" style={{ width: "fit-content" }}>
              Bring us a {sportSlug} problem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`  
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add components/SportSectorPage.tsx
git commit -m "feat: add SportSectorPage shared component"
```

---

### Task 2: Create all 10 entry files

**Files:**
- Create: `app/work/baseball/research/page.tsx`
- Create: `app/work/baseball/consulting/page.tsx`
- Create: `app/work/volleyball/research/page.tsx`
- Create: `app/work/volleyball/consulting/page.tsx`
- Create: `app/work/basketball/research/page.tsx`
- Create: `app/work/basketball/consulting/page.tsx`
- Create: `app/work/football/research/page.tsx`
- Create: `app/work/football/consulting/page.tsx`
- Create: `app/work/tennis/research/page.tsx`
- Create: `app/work/tennis/consulting/page.tsx`

**Interfaces:**
- Consumes: `default export SportSectorPage` from `@/components/SportSectorPage` (defined in Task 1)
- Produces: 10 Next.js route pages, each with a `Metadata` export and a default export

- [ ] **Step 1: Create baseball pages**

`app/work/baseball/research/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Baseball Research" };

export default function BaseballResearchPage() {
  return <SportSectorPage sport="baseball" sector="Research" />;
}
```

`app/work/baseball/consulting/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Baseball Consulting" };

export default function BaseballConsultingPage() {
  return <SportSectorPage sport="baseball" sector="Consulting" />;
}
```

- [ ] **Step 2: Create volleyball pages**

`app/work/volleyball/research/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Volleyball Research" };

export default function VolleyballResearchPage() {
  return <SportSectorPage sport="volleyball" sector="Research" />;
}
```

`app/work/volleyball/consulting/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Volleyball Consulting" };

export default function VolleyballConsultingPage() {
  return <SportSectorPage sport="volleyball" sector="Consulting" />;
}
```

- [ ] **Step 3: Create basketball pages**

`app/work/basketball/research/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Basketball Research" };

export default function BasketballResearchPage() {
  return <SportSectorPage sport="basketball" sector="Research" />;
}
```

`app/work/basketball/consulting/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Basketball Consulting" };

export default function BasketballConsultingPage() {
  return <SportSectorPage sport="basketball" sector="Consulting" />;
}
```

- [ ] **Step 4: Create football pages**

`app/work/football/research/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Football Research" };

export default function FootballResearchPage() {
  return <SportSectorPage sport="football" sector="Research" />;
}
```

`app/work/football/consulting/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Football Consulting" };

export default function FootballConsultingPage() {
  return <SportSectorPage sport="football" sector="Consulting" />;
}
```

- [ ] **Step 5: Create tennis pages**

`app/work/tennis/research/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Tennis Research" };

export default function TennisResearchPage() {
  return <SportSectorPage sport="tennis" sector="Research" />;
}
```

`app/work/tennis/consulting/page.tsx`:
```tsx
import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Tennis Consulting" };

export default function TennisConsultingPage() {
  return <SportSectorPage sport="tennis" sector="Consulting" />;
}
```

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npx tsc --noEmit`  
Expected: no errors

- [ ] **Step 7: Start dev server and verify pages load**

Run: `npm run dev`

Visit each of these URLs and confirm the page renders with the correct title and layout:
- `http://localhost:3000/work/baseball/research`
- `http://localhost:3000/work/baseball/consulting`
- `http://localhost:3000/work/volleyball/research`
- `http://localhost:3000/work/volleyball/consulting`
- `http://localhost:3000/work/basketball/research`
- `http://localhost:3000/work/basketball/consulting`
- `http://localhost:3000/work/football/research`
- `http://localhost:3000/work/football/consulting`
- `http://localhost:3000/work/tennis/research`
- `http://localhost:3000/work/tennis/consulting`

Also confirm existing sport pages still load:
- `http://localhost:3000/work/basketball`
- `http://localhost:3000/work/baseball`

- [ ] **Step 8: Commit**

```bash
git add app/work/baseball/research/page.tsx app/work/baseball/consulting/page.tsx \
        app/work/volleyball/research/page.tsx app/work/volleyball/consulting/page.tsx \
        app/work/basketball/research/page.tsx app/work/basketball/consulting/page.tsx \
        app/work/football/research/page.tsx app/work/football/consulting/page.tsx \
        app/work/tennis/research/page.tsx app/work/tennis/consulting/page.tsx
git commit -m "feat: add research and consulting sector pages for all 5 sports"
```
