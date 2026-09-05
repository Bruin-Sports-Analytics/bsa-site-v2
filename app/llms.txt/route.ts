import { projects, sports, events, recruitment, isActiveProject } from "@/data/site";

const BASE = "https://www.bruinsportsanalytics.org";

function sportLabel(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export async function GET() {
  const activeProjects = projects.filter(
    (p) => p.visibility === "public" && isActiveProject(p)
  );
  const archivedProjects = projects.filter(
    (p) => p.visibility === "public" && !isActiveProject(p)
  );
  const publicEvents = events.filter((e) => !e.isMembersOnly);

  const lines: string[] = [
    // ── Title & blurb (required by llmstxt.org spec) ──────────────────
    `# Bruin Sports Analytics`,
    ``,
    `> UCLA's premier student-run sports analytics organization. We provide data-science consulting for UCLA athletic teams, publish original research and journalism, and recruit top students in analytics, software engineering, and data journalism.`,
    ``,
    `- Website: ${BASE}`,
    `- GitHub: https://github.com/Bruin-Sports-Analytics`,
    `- Founded: 2015 | Members: ~70 | Sports: ${sports.map((s) => s.name).join(", ")}`,
    ``,

    // ── Active projects ────────────────────────────────────────────────
    `## Active Projects`,
    ``,
    ...activeProjects.flatMap((p) => {
      const header = `- [${p.title}](${BASE}/projects/${p.slug}) (${sportLabel(p.sport)}, ${p.projectType}, ${p.academicYear}): ${p.summary}`;
      const extras = [
        p.links.demo ? `  - Live tool: ${p.links.demo}` : null,
        p.links.github ? `  - Repo: ${p.links.github}` : null,
        p.links.paper ? `  - Paper: ${p.links.paper}` : null,
      ].filter(Boolean) as string[];
      return [header, ...extras];
    }),
    ``,

    // ── Sport teams ────────────────────────────────────────────────────
    `## Sport Teams`,
    ``,
    ...sports.map(
      (s) =>
        `- [${s.name}](${BASE}/teams/${s.slug}): ${s.description} Focus: ${s.focusAreas.join(", ")}.`
    ),
    ``,

    // ── Upcoming public events ─────────────────────────────────────────
    ...(publicEvents.length
      ? [
          `## Upcoming Events`,
          ``,
          ...publicEvents.map((e) => {
            return `- **${e.title}** (${e.date}, ${e.time}${e.location ? `, ${e.location}` : ""}): ${e.description}`;
          }),
          ``,
        ]
      : []),

    // ── Recruitment ────────────────────────────────────────────────────
    `## Recruitment`,
    ``,
    `- Status: ${recruitment.status}`,
    `- Cycle: ${recruitment.name}`,
    `- Roles: ${recruitment.roles.join(", ")}`,
    `- Teams recruiting: ${recruitment.teamsRecruiting.join(", ")}`,
    `- Apply / join mailing list: ${recruitment.applicationUrl || recruitment.mailingListUrl}`,
    ``,
    `### Recruitment Timeline`,
    ``,
    ...recruitment.timelineEvents.map(
      (t) =>
        `- ${t.date} — **${t.title}**${(t as { location?: string }).location ? ` @ ${(t as { location?: string }).location}` : ""}: ${t.detail}`
    ),
    ``,

    // ── Archived projects (compact list) ──────────────────────────────
    `## Archived Projects`,
    ``,
    ...archivedProjects.map(
      (p) =>
        `- [${p.title}](${BASE}/projects/${p.slug}) (${sportLabel(p.sport)}, ${p.academicYear}): ${p.summary}`
    ),
    ``,

    // ── Key pages ──────────────────────────────────────────────────────
    `## Key Pages`,
    ``,
    `- [Home](${BASE})`,
    `- [Projects](${BASE}/projects)`,
    `- [Teams](${BASE}/teams)`,
    `- [Journalism](${BASE}/journalism)`,
    `- [People & Board](${BASE}/people/board)`,
    `- [Events](${BASE}/events)`,
    `- [Join / Recruit](${BASE}/join)`,
    `- [Partner with us](${BASE}/partner)`,
    `- [FAQ](${BASE}/faq)`,
    `- [About](${BASE}/about)`,
    `- [Full detail (llms-full.txt)](${BASE}/llms-full.txt)`,
    ``,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
