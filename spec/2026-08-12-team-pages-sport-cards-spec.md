# Team Pages and Sport Cards Rework Spec

Prepared: August 12, 2026  
Branch: `team-page-sport-cards`  
Scope: Rework `/teams` and individual sport homepages so each sport feels specific, while removing separate consulting/research pages until there is enough content to justify them.

## Goal

Make the BSA team experience easier to scan and more credible by consolidating each sport's work onto its homepage. The team index should show sport-specific cards with real signals: focus areas, project counts, representative work, and member/team context. Individual sport pages should act as the complete destination for that sport rather than sending users into thin consulting/research subpages.

## Research Notes

- Sports Analytics Group at Berkeley presents projects around collaborators and concrete summaries. Their projects page frames work as collaborations with sports teams/organizations and independent research, then names specific efforts like Cal Men's Tennis x Swingvision, NFL Big Data Bowl, NFLPA, and SABR Baseball Analytics. This supports giving each BSA sport card representative work, not just a generic description. Source: https://sportsanalytics.studentorg.berkeley.edu/projects.html
- Samford's sports analytics case studies are organized around client/problem/result narratives, such as Nike, Chick-fil-A Peach Bowl, Miami Dolphins, NBA, and Bayern Munich examples. This supports showing "problem type" and "deliverable/result" language on sport pages instead of separating content by internal labels like consulting vs. research. Source: https://www.samford.edu/sports-analytics/case-studies
- Notre Dame's Sports Analytics Club program pages describe each sport with sport-specific workstreams, tools, staff relationships, and outputs. Examples include volleyball using Data Volley/Tableau/R/Excel/Python, hockey dividing work into recruiting analytics, postgame reports, and special projects, and basketball using play-by-play/box-score data for pregame reports and March Madness modeling. This supports a sport-page structure based on focus areas and outputs. Source: https://sites.nd.edu/sports-analytics-club/programs/
- UCLA Athletics navigation groups each sport around concrete destinations like schedule, roster, news, and tickets. BSA does not need those exact modules, but the pattern supports making each sport homepage the canonical destination rather than scattering content across thin subroutes. Source: https://uclabruins.com/
- The current public BSA Wix-era site separates Data Journalism, Research, and Consulting, including a Baseball Consulting subpage. The new site can preserve those concepts as project types and sections while avoiding underfilled standalone pages. Source: https://www.bruinsportsanalytics.com/

## Current Repo Findings

Routes currently present:
- `/teams`
- `/teams/baseball`
- `/teams/baseball/consulting`
- `/teams/baseball/research`
- `/teams/basketball`
- `/teams/basketball/consulting`
- `/teams/basketball/research`
- `/teams/football`
- `/teams/tennis`
- `/teams/tennis/consulting`
- `/teams/tennis/research`
- `/teams/tennis/[subdivision]`
- `/teams/volleyball`
- `/teams/volleyball/consulting`

Observed issues:
- Sport homepages already contain most useful content: hero, chairs, focus areas, active projects, archive, and team roster.
- Consulting/research routes exist for several sports, but they reuse generic `SportSectorPage` content and do not add enough unique material.
- `SportCard` currently shows icon, sport name, description, and a CTA only. It does not expose project count, focus areas, featured metric, team size, or representative projects.
- Several team pages duplicate nearly identical section markup with small differences. This creates drift and makes it harder to improve all sport pages consistently.
- Football has a more custom project-summary grid than the other sports, suggesting the direction is useful but should be systematized.

## Content Model Direction

Use existing data first:
- `sports`: name, slug, icon, description, focusAreas, activeProjects, archivedProjects, featuredMetric, lead, accent, subdivisions.
- `projects`: sport, subdivision, projectType, status, academicYear, summary, problem, approach, result, techStack, links, featured.
- `members`: board chairs and current members by team.

Add only if needed:
- `sportPageIntro?: string`
- `workstreams?: { title: string; text: string; tags?: string[] }[]`
- `featuredProjectSlug?: string`
- `deliverables?: string[]`

Avoid adding invented claims. Any new copy should be derived from existing project/member/sport data or phrased generically as "current focus" rather than a factual external commitment.

## Proposed UX

### `/teams`

Keep a simple team index, but make each card denser and more useful.

Each sport card should include:
- Sport icon and sport name.
- Short sport-specific description.
- Featured metric from `sport.featuredMetric`.
- 2-3 focus chips from `sport.focusAreas`.
- Active and archived project counts, calculated from `projects` rather than trusting stale stored counts.
- Representative project link when available, preferring featured active projects.
- Team-size signal when available, calculated from members.
- Single primary CTA: `Open team`.

Card layout:
- Desktop: 2-column or asymmetric grid if cards become large; avoid tiny five-card row if content is dense.
- Tablet: 2-column.
- Mobile: single-column, fixed action area, no nested cards.

### Individual Sport Homepage

Each sport homepage should become the complete destination:

1. Hero
   - Eyebrow: `{Sport} analytics`
   - H1: sport name
   - Description from sport data
   - Feature stat/module using `featuredMetric`
   - Chair/member preview in a compact, non-dominant treatment
   - CTA: `Partner with this team`; secondary CTA: `View projects`

2. Workstreams / Focus Areas
   - Replace generic "Priority" cards with sport-specific module labels.
   - Use `focusAreas` as primary chips/cards.
   - Include short text derived from project themes:
     - Baseball: pitch design, defensive positioning, opponent scouting.
     - Basketball: shot quality, lineup effects, player role similarity, women's basketball transfer/recruiting work.
     - Football: fourth-down decisions, pocket/clutch ratings, pass-rush gravity, tracking-data models.
     - Tennis: playstyle classification, point patterns, serve plus-one value, scouting/tagging/strategy roles.
     - Volleyball: rotation efficiency, serve target maps, rally transition value, UCLA volleyball consulting context.

3. Featured Work
   - Show one featured project if available.
   - Include problem, approach, and result when populated.
   - Link to demo/paper/project page as available.

4. Project Sections
   - Active work.
   - Past work/archive.
   - Do not split into separate research/consulting pages. Use project type labels inside cards.

5. Team
   - Chairs first, then analysts.
   - Keep roster visible but avoid letting it overpower the project content.

6. Tennis-specific Roles
   - Keep `/teams/tennis/[subdivision]` for now if role pages are still desired.
   - On tennis homepage, present the three role labels as internal role cards.
   - Do not add consulting/research routes for tennis.

## Route Changes

Remove these public pages:
- `app/teams/baseball/consulting/page.tsx`
- `app/teams/baseball/research/page.tsx`
- `app/teams/basketball/consulting/page.tsx`
- `app/teams/basketball/research/page.tsx`
- `app/teams/tennis/consulting/page.tsx`
- `app/teams/tennis/research/page.tsx`
- `app/teams/volleyball/consulting/page.tsx`

No football consulting/research pages currently exist.

Redirect policy:
- Preferred: add redirects in `next.config.mjs` from removed routes to the sport homepage.
- Example: `/teams/baseball/research` -> `/teams/baseball`.
- This is better than hard 404s because old links may exist in search, bookmarks, or prior site drafts.

## Implementation Tasks

1. Build sport-page data helpers
   - Create helper functions for sport projects, active/archive grouping, chairs, analysts, counts, and featured project selection.
   - Location option: `lib/team-pages.ts` or local helper module under `app/teams/`.

2. Redesign `SportCard`
   - Add project counts, focus chips, featured metric, representative project CTA.
   - Calculate display data from props or pass a richer view model from `/teams`.
   - Update `SportCard.module.css` for dense responsive cards.

3. Refactor sport homepages
   - Consolidate repeated logic into a shared `SportHomePage` component if it reduces duplication.
   - Preserve sport-specific differences via data/config, not copy-pasted page files.
   - Keep page files thin: select slug, pass config.

4. Remove consulting/research routes
   - Delete the route page files listed above.
   - Remove `SportSectorPage` if no longer referenced.
   - Search for links to `/consulting` and `/research`; remove or redirect them.

5. Add redirects
   - Add redirects in `next.config.mjs` if the file exists and supports it.
   - If no config file exists, create one only if consistent with the repo.

6. Validate
   - `npm run lint`
   - `npm run build`
   - Manual route check:
     - `/teams`
     - `/teams/baseball`
     - `/teams/basketball`
     - `/teams/football`
     - `/teams/tennis`
     - `/teams/tennis/scouting-role`
     - `/teams/volleyball`
   - Confirm removed paths redirect or no longer build as standalone pages.
   - Check mobile layout for cards and team pages.

## Acceptance Criteria

- `/teams` cards show sport-specific detail beyond generic descriptions.
- Every sport homepage contains all meaningful sport content in one place.
- Removed consulting/research pages are no longer linked anywhere.
- Removed consulting/research URLs redirect to the relevant sport homepage or otherwise do not appear as generated static routes.
- Project cards retain project type labels, so research/consulting distinctions still exist at the content level.
- Team pages are responsive and do not rely on inline style-heavy card markup where a reusable module is appropriate.
- `npm run lint` and `npm run build` pass.

## Risks and Constraints

- Content is uneven by sport. The design should handle empty active/archive lists without looking broken.
- Some project counts in `sports` may be stale; computed counts should be preferred.
- Tennis role labels are still not fully confirmed. Keep the current labels but isolate them so they are easy to change.
- Volleyball has the clearest official consulting context; avoid implying similar partner depth for every sport unless existing data supports it.
- Deleting routes without redirects may break old links, so redirects are recommended.

