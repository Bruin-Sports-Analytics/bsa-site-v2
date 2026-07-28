# Bruin Sports Analytics — Human-Led Design Revision Spec

Reference site: https://bsa-site-v2.vercel.app/  
Prepared: July 26, 2026

## Purpose

Revise the existing BSA website so it feels intentionally art-directed by a UCLA student organization—not assembled from familiar AI-generated landing-page patterns.

This is an evolution of the current site, not a brand reset. Keep the UCLA blue-and-gold identity, the breadth of content, the project dashboard, and the real club imagery. Replace the generic “dark SaaS + glass cards” treatment with a sharper editorial and sports-research identity.

The target impression is:

> UCLA athletics media guide meets student-run data lab.

The site should feel specific, credible, energetic, and slightly imperfect in a deliberate way.

---

## 1. Current-Site Audit

### What already works

- The UCLA color palette makes the organization identifiable immediately.
- The homepage Instagram collage feels real and club-specific.
- Projects, teams, journalism, events, recruiting, and partnerships are all represented.
- The project filtering interface communicates that BSA produces substantial work.
- Project titles, dates, tools, members, and sport labels provide useful evidence.
- The site has a consistent navigation and a clear set of calls to action.

### What currently feels template-generated

The problem is not any single component. It is the accumulation of common AI-design defaults:

- Dark navy background on nearly every page.
- Grid texture across almost every surface.
- Large blue/yellow radial glow in every hero.
- Glass-pill navigation with a full capsule outline.
- Floating vertical social rail.
- Rounded translucent cards used for people, projects, filters, statistics, and calls to action.
- Repeated 26 px card radii and 999 px pills.
- White inset highlights and deep shadows on most containers.
- Large uppercase page titles followed by generic explanatory copy.
- Repeated section formula: eyebrow label → large heading → paragraph → card grid.
- Nearly every section visually receives equal weight.
- Placeholder initials used as profile imagery.
- Generic phrases such as “Current analysis in motion” and “Where Bruins take analytics.”
- Decorative metrics without context, sources, or dates.
- Several typefaces competing without a clear editorial purpose.
- “Projects,” “Teams,” and “Our Work” describe overlapping concepts.

The result looks polished, but the design system is doing more talking than the organization.

---

## 2. Core Design Principles

### 2.1 Let BSA content create the visual identity

Use real project charts, article figures, event photography, team portraits, dashboard screenshots, and social graphics as the primary visual material.

Do not manufacture visual interest with more gradients, glows, or glass.

### 2.2 Design pages by content type

People, projects, journalism, events, and recruiting should not all be rendered as the same rounded card component.

- Projects should feel like a research index.
- Journalism should feel like an editorial publication.
- People should feel like a club roster.
- Events should feel like a calendar or bulletin.
- Recruiting should feel like a clear application guide.

### 2.3 Prefer editorial hierarchy over container hierarchy

Use typography, spacing, rules, alignment, and image scale to establish hierarchy. Do not place every unit of content inside a floating panel.

### 2.4 Use asymmetry intentionally

Avoid perfectly centered, evenly spaced, equal-sized component grids everywhere. Prefer:

- One lead item with smaller supporting items.
- Offset images.
- Uneven editorial columns.
- Alternating image and text alignment.
- Dense index views beside spacious feature sections.

### 2.5 Make proof more prominent than claims

Replace broad marketing language with named work, real collaborators, concrete outcomes, and member voices.

Bad:

> We build cutting-edge insights at the intersection of sports and data.

Better:

> Our football team developed a tracking-data metric for downfield blocking. Our tennis team classified NCAA playstyles with match data.

---

## 3. Visual Direction

### 3.1 Color system

Move from an always-dark interface to a paper-and-ink system with selective dark sections.

```css
:root {
  --bsa-ink: #071a2b;
  --bsa-ink-soft: #17324a;
  --bsa-paper: #f7f5ef;
  --bsa-paper-blue: #eef5fa;
  --bsa-blue: #2774ae;
  --bsa-blue-dark: #14517c;
  --bsa-gold: #ffd100;
  --bsa-gold-dark: #d8a900;
  --bsa-rule: #c9d4dc;
  --bsa-muted: #5f7180;
  --bsa-white: #ffffff;
}
```

Rules:

- Use `--bsa-paper` as the default page background.
- Use dark navy for the homepage hero, footer, selected feature bands, and project detail headers.
- Use blue for links and active states.
- Use gold as an accent, not as a large text color.
- Do not put low-contrast gray or blue text over gradients.
- Do not add unrelated purples, cyans, or neon colors.

### 3.2 Typography

Use a deliberate two-family editorial system:

- Sans: `Archivo` for navigation, body, labels, filters, and interface text.
- Serif: `Source Serif 4` for article titles, selected feature headlines, pull quotes, and historical storytelling.

If loading both families is not practical, use one variable sans family and create contrast through width, weight, and scale. Do not retain Inter, Plus Jakarta Sans, and IBM Plex Mono simultaneously simply to create variety.

Type rules:

- Use sentence case for section headings.
- Reserve uppercase for small functional labels, sport codes, seasons, and table headers.
- Do not render every page title in uppercase.
- Keep body copy between 17–19 px on desktop and at least 16 px on mobile.
- Target 55–70 characters per line for prose.
- Use mono typography only for actual code, data values, or statistical notation.
- Use tabular numerals for dates and metrics.

Suggested desktop scale:

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-body: 1.0625rem;
--text-lead: clamp(1.25rem, 1.8vw, 1.6rem);
--text-h3: clamp(1.45rem, 2.3vw, 2rem);
--text-h2: clamp(2.3rem, 4.4vw, 4rem);
--text-h1: clamp(3.6rem, 7vw, 7.2rem);
```

### 3.3 Corners, borders, and shadows

Current rounded-glass styling should be substantially reduced.

Use:

- 0 px radius for editorial images, tables, large sections, and project rows.
- 4 px radius for inputs and small interface controls.
- 8 px radius for cards that genuinely need containment.
- 12 px radius only for featured media blocks.
- 999 px radius only for compact tags or status chips.

Rules:

- Default containers use a 1 px solid rule instead of a shadow.
- Shadows appear only when an element truly sits above another surface, such as a menu or modal.
- Do not use inset white highlights.
- Do not combine blur, gradient, border, radius, and shadow on one ordinary card.
- Allow no more than one glass-like surface in a viewport. The default target is zero.

### 3.4 Texture

- Remove the global full-site grid texture.
- A subtle technical grid may appear inside the Projects dashboard or behind a specific data visualization.
- Use real paper grain or halftone very sparingly for posters and editorial features.
- Do not place the same texture behind every page hero.

### 3.5 Imagery

Prioritize:

1. Member and team photography.
2. Charts or figures taken from BSA projects.
3. Event and workshop photography.
4. Screenshots of dashboards or models.
5. Existing BSA social graphics.

Avoid generic stock photography and abstract AI-generated sports imagery.

Image treatment:

- Use direct rectangular crops instead of floating rounded tiles.
- Do not add a gradient overlay unless required for text contrast.
- Keep source aspect ratios consistent within a content type.
- Add descriptive alt text.
- Include project/chart captions where useful.

---

## 4. Layout System

Use a 12-column desktop grid with a maximum content width of 1240 px.

```css
.page-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: clamp(16px, 2vw, 28px);
  width: min(1240px, calc(100% - 40px));
  margin-inline: auto;
}
```

Spacing should use an 8 px base, but not every section needs identical vertical padding.

Suggested section spacing:

- Hero: 96–144 px top and 72–112 px bottom.
- Major editorial feature: 88–128 px.
- Dense index/dashboard: 40–64 px.
- Small supporting band: 48–72 px.

Breakpoints:

- Small: below 640 px.
- Medium: 640–959 px.
- Large: 960 px and above.

Mobile rules:

- Collapse to one content column.
- Preserve intentional image order; do not blindly stack DOM order.
- Replace tables with labeled rows.
- Keep controls at least 44 px tall.
- Use a simple full-width navigation drawer.
- Remove all fixed side rails.
- Avoid oversized headlines that leave only one word per line.

---

## 5. Global Component Revisions

### 5.1 Header

Replace the current floating capsule with a flat editorial header.

Desktop:

- Full-width header with a thin bottom rule.
- Logo and “Bruin Sports Analytics” aligned left.
- Navigation aligned right.
- “Partner” may be a solid blue or gold rectangular button.
- Active link uses an underline or bottom rule, not a glow.
- Header may be sticky, but should not float inside a rounded container.

Mobile:

- Logo, short wordmark, and menu button.
- Drawer uses a plain paper or navy background.
- Each link occupies its own row with a rule.

Navigation labels must be consistent:

- Work
- Journalism
- People
- Events
- About
- Join
- Partner

“Projects,” “Teams,” and “Our Work” should not compete as separate labels unless their difference is made explicit.

### 5.2 Social links

Remove the fixed vertical “Stay connected” rail.

Place social links in:

- The footer.
- The About or Contact area.
- Contextual recruitment/contact sections where relevant.

Use text labels with icons rather than icon-only navigation.

### 5.3 Buttons and links

Define only three interaction styles:

1. Primary button: solid blue or gold rectangle, 4–6 px radius.
2. Secondary button: transparent with a 1 px ink border.
3. Inline link: text with underline or arrow.

Rules:

- Avoid pill-shaped primary buttons.
- Avoid multiple button treatments in one cluster.
- Use one primary CTA per section.
- “Explore,” “Learn more,” and “View all” should be replaced with specific labels when possible.

Examples:

- “See football projects”
- “Read the blocking study”
- “Meet the 2026 board”
- “View application dates”

### 5.4 Section headers

Do not repeat one universal section-header component.

Use at least three patterns:

- Editorial: serif headline with a short deck.
- Index: compact sans label with result count.
- Feature: large image plus overlaid or adjacent headline.

Remove decorative eyebrow text when it merely repeats the heading.

### 5.5 Cards

Do not create one universal `GlassCard`.

Create content-specific components:

- `ProjectRow`
- `FeaturedProject`
- `ArticleStory`
- `PersonEntry`
- `EventListing`
- `SportIndexItem`
- `PartnerMark`

Each component should expose the structure of its content instead of hiding it inside a decorative shell.

---

## 6. Homepage Revision

### 6.1 Hero

Keep the homepage’s real BSA social collage. It is the most specific visual element currently on the site.

Change:

- Remove the generic radial glow and full-background grid.
- Keep the hero navy, but make it a clean color field.
- Use an editorial split layout: 5 columns of text, 7 columns of imagery.
- Let one or two collage items break the grid slightly; avoid a perfectly scattered AI-collage arrangement.
- Reduce the CTA cluster to two actions.

Suggested content structure:

```text
Bruin Sports Analytics

UCLA students researching the games we watch—and building tools
for the teams that play them.

[See our work]  [Join BSA]
```

Place the partner link below or in the navigation instead of presenting three competing hero actions.

### 6.2 Proof strip

Replace the five equal statistic boxes with three sourced proof points.

Example:

- 11 active projects — 2025–26 academic year
- 5 sport teams — baseball through tennis
- 3 UCLA Athletics collaborations — update with verified names if public

Each figure must have:

- A date or academic-year context.
- A source in the content data.
- A clear owner responsible for updates.

If the figures cannot be maintained, remove the strip.

### 6.3 Latest work

Replace the repeated three-card feature section with an editorial composition:

- One lead project with a real chart, figure, or dashboard screenshot.
- Two supporting project rows.
- Show sport, work type, year, and contributor names.
- Use project-specific links such as “Read the tennis study.”

Do not use “Current analysis in motion.”

Suggested heading:

> Recently published

### 6.4 Sport teams

Treat the sport list as an index, not a group of interchangeable glass buttons.

Each sport item should include:

- Sport name.
- Number of active projects.
- Current chair or team lead.
- One representative project title.
- Optional small project figure or team photo.

Use rules, bold type, and hover color shifts. Avoid rounded tiles.

### 6.5 Where members go

Replace the generic logo cloud/cards with a concise alumni outcomes section.

Requirements:

- Use verified employer or graduate-school logos only when brand-use permission permits.
- Remove every `href="#"`.
- If destinations are not clickable, render them as non-interactive marks.
- Add context such as “Recent member destinations,” not an implied formal partnership.
- Include a short alumni quote or profile to make the section human.

Suggested heading:

> From BSA to the field

### 6.6 Events

Use a compact campus-bulletin layout:

- Date block on the left.
- Event name and one-sentence description in the center.
- Location and action on the right.
- One rule between events.

Do not put each event in a floating card.

Use local date formatting and verify that event times are not shifted by UTC conversion.

### 6.7 Join and partner calls to action

Do not finish with two visually identical cards.

Instead:

- Use a full-width gold recruitment band when applications are open.
- Use a small navy partner panel beneath it or inside the footer.
- Outside recruitment periods, show the next expected cycle and an interest-list action.

---

## 7. Projects Dashboard Revision

The dashboard should feel like a functional research archive rather than a masonry gallery.

Desktop layout:

- Page title and one-sentence purpose.
- Search field.
- Sport, type, year, and status filters.
- Result count and clear-filters action.
- List or table of projects.

Recommended columns:

| Project | Sport | Type | Season | Status |
| --- | --- | --- | --- | --- |
| Machine Learning Based Playstyle Classification… | Tennis | Research | 2025–26 | Published |

Project title is the primary link. “Read paper” does not need to repeat on every row.

Requirements:

- Remove masonry heights.
- Remove decorative glass backgrounds.
- Show filters on paper with standard borders.
- Keep selected filters visible.
- Make the full project row clickable only if keyboard and screen-reader behavior remains correct.
- Support URL query parameters for filters.
- Show meaningful empty states.
- Add a “Featured only” toggle only if featured status is editorially maintained.
- Use “Published,” “In progress,” and “Archived” consistently.

Mobile:

- Filters open in a dedicated sheet or accordion.
- Projects become stacked labeled rows, not squeezed tables.

---

## 8. People Pages Revision

Placeholder initials inside glossy cards are one of the strongest template signals.

Preferred treatment:

- Use real, consistently cropped portraits from a board/member photoshoot.
- Group people by role: Executive Board, Sport Chairs, Operations, Advisors.
- Use one restrained roster grid with names and titles visible.
- Show major/year as secondary text.
- Put longer biographies on detail views or expandable rows.
- Use a visible “LinkedIn ↗” text link rather than a small floating icon.

If portraits are unavailable:

- Use a typography-first roster.
- Do not generate fake avatars.
- Do not put initials inside portrait-shaped gradients.
- Use names, roles, team labels, and horizontal rules.

Photography direction:

- Consistent natural light and neutral UCLA-campus background.
- Similar crop and camera height.
- Avoid over-smoothed headshots or AI backgrounds.
- Allow one group photo to lead the page.

---

## 9. Work and Sport Pages Revision

Each sport page should have its own content hierarchy while remaining inside the shared system.

Shared structure:

- Sport name and current team leads.
- Active work.
- Published research.
- Tools or dashboards.
- Selected past work.
- Recruitment/contact path.

Sport-specific identity should come from:

- Real project figures.
- Relevant statistical vocabulary.
- Team photography.
- A restrained secondary accent derived from real equipment or field/court colors.

Do not recolor the same generic card template five times.

For tennis, make its three subdivisions visible as actual subsections or tabs with descriptive labels, not unexplained chips.

---

## 10. Journalism Revision

Journalism should visually separate itself from the project database.

Use:

- A publication-style masthead.
- One lead story.
- A two-column story index on desktop.
- Serif story titles.
- Author, date, sport, and reading time.
- Inline charts and captions.
- Strong article typography with a readable text measure.

Do not present journalism as project cards with “Read paper” links.

---

## 11. About Page Revision

Tell an organization-specific story.

Recommended sections:

1. What BSA does, in concrete language.
2. How consulting, research, and journalism differ.
3. A short timeline with actual years and milestones.
4. How teams collaborate.
5. Faculty, UCLA Athletics, or partner relationships with accurate labels.
6. A real meeting, workshop, or team photo.

Replace generalized mission copy with names, dates, and examples.

---

## 12. Join Page Revision

The page must have two explicit states controlled by content data.

### Recruitment open

- “Fall 2026 applications are open.”
- Application deadline with timezone.
- Timeline of info session, coffee chats, application, interviews, and decisions.
- Eligibility and expected commitment.
- Clear application button.
- Named recruitment contact.
- FAQ specific to the current cycle.

### Recruitment closed

- “Applications are currently closed.”
- Next expected cycle.
- Interest-list or follow action.
- What applicants can do before the next cycle.
- Previous cycle information clearly marked as archived.

Avoid vague urgency, generic motivational copy, and countdown timers.

---

## 13. Content Voice

The voice should sound like informed UCLA students:

- Direct.
- Curious.
- Technically credible.
- Proud without sounding corporate.
- Specific about work.

Avoid:

- “Unlock the power of data.”
- “Where passion meets innovation.”
- “Cutting-edge solutions.”
- “In motion.”
- “Elevate your game.”
- “We’re redefining the future.”
- “Built for impact.”
- Unnecessary em dashes in every paragraph.

Prefer:

- Short sentences.
- Named methods and datasets.
- Concrete project outcomes.
- Member and partner quotes.
- Visible authorship.
- Dates and academic years.

Every major page should contain at least one detail that could only belong to BSA.

---

## 14. Motion and Interaction

Motion should explain state, not announce that the page loaded.

Use:

- 120–180 ms color and underline transitions.
- 180–240 ms menu or filter transitions.
- Subtle image movement only on a single homepage feature, if any.
- Clear hover and focus states.

Remove:

- Repeated scroll-reveal animations.
- Animations that begin with headings or core copy invisible.
- Floating blobs.
- Endless shimmer or glow.
- Parallax on ordinary content.
- Large scale-up effects on cards.

Requirements:

- Respect `prefers-reduced-motion`.
- No essential information may depend on animation.
- Layout must remain stable as images and fonts load.

---

## 15. Accessibility and Quality Requirements

- Meet WCAG 2.2 AA contrast for text and interactive states.
- Provide visible keyboard focus.
- Use semantic headings in order.
- Use actual buttons for actions and anchors for navigation.
- Do not use color alone to communicate sport, status, or selection.
- Ensure every control has an accessible name.
- Use alt text for meaningful images and empty alt text for decoration.
- Minimum touch target: 44 × 44 px.
- Project search and filters must be keyboard usable.
- Preserve page title, meta description, Open Graph image, and canonical URL.
- Verify dates and times in `America/Los_Angeles` for UCLA events.
- Test at 360, 768, 1024, and 1440 px widths.
- Test Safari and Chrome on macOS and iOS Safari.

---

## 16. Explicit Anti-Template Rules

Codex must treat these as hard constraints:

1. Do not add new glassmorphism.
2. Do not add a global radial gradient or glow.
3. Do not use a grid texture outside a data-specific section.
4. Do not create a universal rounded-card component for unrelated content.
5. Do not use 999 px radius except for small tags/status chips.
6. Do not use all-caps for primary page or section headings.
7. Do not add floating social navigation.
8. Do not add decorative metric counters without source and date context.
9. Do not use placeholder initials as faux portraits.
10. Do not hide core page content behind entrance animation.
11. Do not use generic AI-marketing copy.
12. Do not make every section the same height, width, or rhythm.
13. Do not add new dependencies solely for visual effects.
14. Do not use `href="#"`.
15. Do not fabricate partners, outcomes, quotes, member details, or project metrics.

---

## 17. Implementation Sequence

### Phase 1 — Foundation

- Audit and consolidate typography.
- Add the new color, spacing, border, and radius tokens.
- Replace the page background and remove the global grid/glow.
- Rebuild the header and footer.
- Remove the floating social rail.
- Define the three interaction styles.

### Phase 2 — Homepage

- Recompose the hero around the existing real BSA collage.
- Replace the statistic strip.
- Build the editorial latest-work section.
- Convert sport cards into an index.
- Rework outcomes, events, and final calls to action.

### Phase 3 — High-signal internal pages

- Convert Projects to a research index/table.
- Replace People cards with portraits or a typography-first roster.
- Give Journalism a publication layout.
- Make Join state-aware.

### Phase 4 — Remaining pages

- Update sport pages.
- Rewrite About with history and concrete proof.
- Standardize Events and Partner content.
- Resolve inconsistent navigation labels.

### Phase 5 — QA

- Accessibility audit.
- Responsive review at required widths.
- Cross-browser review.
- Content and link verification.
- Performance check.
- Remove unused styles and obsolete glass components.

---

## 18. Definition of Done

The redesign is complete when:

- A screenshot is recognizable as BSA without relying only on its logo.
- The homepage contains real work or club imagery above the fold.
- Fewer than 25% of visible content groups use rounded card containers.
- The global grid, glow, capsule header, and social rail are gone.
- People use real portraits or a deliberate text roster.
- Projects scan like a useful archive.
- Journalism reads like a publication.
- Copy names actual projects, people, methods, dates, or outcomes.
- Navigation labels match page language.
- No placeholder links remain.
- Core content appears without waiting for animation.
- Keyboard, reduced-motion, contrast, and responsive checks pass.

The final site should feel designed around Bruin Sports Analytics—not as though BSA content was poured into a fashionable website template.
