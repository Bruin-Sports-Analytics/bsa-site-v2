import { projects, sports, events, recruitment, isActiveProject } from "@/data/site";
import { getJournalismArticles } from "@/lib/journalism";

const BASE = "https://www.bruinsportsanalytics.org";

function sportLabel(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export async function GET() {
  const publicProjects = projects.filter((p) => p.visibility === "public");
  const activeProjects = publicProjects.filter(isActiveProject);
  const archivedProjects = publicProjects.filter((p) => !isActiveProject(p));
  const publicEvents = events.filter((e) => !e.isMembersOnly);
  const articles = await getJournalismArticles();

  // Sample of recent journalism articles (most recent 60 by date desc)
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 60);

  const lines: string[] = [
    `# Bruin Sports Analytics — Full Index`,
    ``,
    `> Complete structured index for LLM ingestion. See /llms.txt for the concise version.`,
    ``,
    `- Website: ${BASE}`,
    `- GitHub: https://github.com/Bruin-Sports-Analytics`,
    `- Founded: 2015 | Members: ~70`,
    ``,

    // ── Organisation overview ──────────────────────────────────────────
    `## Organisation`,
    ``,
    `Bruin Sports Analytics (BSA) is a UCLA student-run organisation founded in 2015. Members work in sport-specific groups — baseball, basketball, football, tennis, and volleyball — producing analytics consulting reports, predictive models, research papers, interactive dashboards, and data journalism articles. BSA partners directly with UCLA Athletic teams to deliver actionable analysis. Membership is selective and recruitment runs each academic quarter.`,
    ``,

    // ── Active projects (full detail) ─────────────────────────────────
    `## Active Projects (Full Detail)`,
    ``,
    ...activeProjects.flatMap((p) => [
      `### ${p.title}`,
      `- URL: ${BASE}/projects/${p.slug}`,
      `- Sport: ${sportLabel(p.sport)}${p.subdivision ? ` (${p.subdivision})` : ""}`,
      `- Type: ${p.projectType} | Year: ${p.academicYear} | Status: Active`,
      `- Tech: ${p.techStack.join(", ")}`,
      ...(p.links.demo ? [`- Live tool: ${p.links.demo}`] : []),
      ...(p.links.github ? [`- Repo: ${p.links.github}`] : []),
      ...(p.links.paper ? [`- Paper: ${p.links.paper}`] : []),
      ``,
      `**Summary:** ${p.summary}`,
      ``,
      `**Problem:** ${p.problem}`,
      ``,
      `**Approach:** ${p.approach}`,
      ``,
      `**Result:** ${p.result}`,
      ``,
      `---`,
      ``,
    ]),

    // ── Sport teams (full detail) ─────────────────────────────────────
    `## Sport Teams`,
    ``,
    ...sports.flatMap((s) => [
      `### ${s.name}`,
      `- URL: ${BASE}/teams/${s.slug}`,
      `- ${s.description}`,
      `- Focus areas: ${s.focusAreas.join(", ")}`,
      ``,
    ]),

    // ── Events ────────────────────────────────────────────────────────
    ...(publicEvents.length
      ? [
          `## Upcoming Events`,
          ``,
          ...publicEvents.flatMap((e) => {
            return [
              `### ${e.title}`,
              `- Date: ${e.date}`,
              `- Time: ${e.time}`,
              e.location ? `- Location: ${e.location}` : null,
              e.rsvpUrl ? `- RSVP: ${e.rsvpUrl}` : null,
              `- ${e.description}`,
              ``,
            ].filter(Boolean) as string[];
          }),
        ]
      : []),

    // ── Recruitment ───────────────────────────────────────────────────
    `## Recruitment`,
    ``,
    `- Cycle: ${recruitment.name}`,
    `- Status: ${recruitment.status}`,
    `- Application opens: ${recruitment.openDate}`,
    `- Application closes: ${recruitment.closeDate}`,
    `- Roles: ${recruitment.roles.join(", ")}`,
    `- Teams recruiting: ${recruitment.teamsRecruiting.join(", ")}`,
    `- Apply / mailing list: ${recruitment.applicationUrl || recruitment.mailingListUrl}`,
    ``,
    `### Recruitment Timeline`,
    ``,
    ...recruitment.timelineEvents.map((t) => {
      const loc = (t as { location?: string }).location;
      return `- **${t.date} — ${t.title}**${loc ? ` @ ${loc}` : ""} [${t.status}]: ${t.detail}`;
    }),
    ``,

    // ── Archived projects (compact) ───────────────────────────────────
    `## Archived Projects`,
    ``,
    ...archivedProjects.map(
      (p) =>
        `- [${p.title}](${BASE}/projects/${p.slug}) (${sportLabel(p.sport)}, ${p.academicYear}): ${p.summary}`
    ),
    ``,

    // ── Journalism (recent 60) ────────────────────────────────────────
    `## Data Journalism Articles (most recent 60)`,
    ``,
    ...recentArticles.map((a) => {
      const slug = a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const authors = Array.isArray(a.authors) ? a.authors.join(", ") : a.authors;
      return `- [${a.title}](${BASE}/journalism/${encodeURIComponent(slug)}) — ${a.sport} | ${a.date} | by ${authors}`;
    }),
    ``,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
