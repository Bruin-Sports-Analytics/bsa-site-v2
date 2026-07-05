# Bruin Sports Analytics Website Redesign — Design Specification

**Project:** Bruin Sports Analytics public website  
**Design direction:** High-energy sports analytics, inspired by BruinAI’s dark, geometric, gradient-led presentation without copying its brand  
**Primary audience:** UCLA students, prospective members, athletics partners, alumni, recruiters, and sports analytics readers  
**Version:** 1.0 — July 2026

---

## 1. Product Vision

Create a modern, credible, high-impact website that makes Bruin Sports Analytics feel like the central home for sports analytics at UCLA.

The site should immediately communicate three things:

1. **BSA produces technically serious work.**
2. **BSA works across multiple sports and project formats.**
3. **BSA is a strong community and career-launching organization.**

The redesign should replace the current separation between consulting, research, and journalism with a sport-first **Our Work** system. Every sport page can contain consulting projects, research, articles, dashboards, and tools in one place.

### Core brand statement

> **Where sports meet data.**  
> UCLA’s student-run sports analytics organization.

### Brand personality

- Analytical, competitive, and ambitious
- Technical but approachable
- Polished enough for professional partners
- Energetic enough for student recruitment
- Clearly UCLA-aligned without looking like a generic university template

---

## 2. Success Metrics

The redesign succeeds when it improves:

- Project discovery and engagement
- Recruitment application conversion
- Partner inquiry conversion
- Visibility of current members and leadership
- Traffic from project pages to GitHub, research papers, dashboards, and articles
- Freshness of highlighted content
- Ease of maintaining content without editing source code

Recommended analytics events:

- `hero_work_click`
- `hero_join_click`
- `project_card_open`
- `project_external_link_click`
- `member_linkedin_click`
- `recruitment_apply_click`
- `event_rsvp_click`
- `partner_form_submit`
- `social_link_click`

---

## 3. Information Architecture

### Primary navigation

Keep the desktop navigation to six visible destinations plus one CTA:

- **Our Work**
- **Projects**
- **People**
- **Events**
- **About**
- **Join**
- **Partner With Us** — emphasized button

### Suggested route map

```text
/
/about
/work
/work/baseball
/work/volleyball
/work/basketball
/work/football
/work/tennis
/work/tennis/[subdivision]
/projects
/projects/[project-slug]
/people/board
/people/members
/people/alumni          # hidden behind feature flag for launch
/events
/join
/partner
/faq                    # may also be rendered as sections on Join and Partner pages
```

### Navigation behavior

- Sticky on scroll with a translucent navy background and backdrop blur
- “Our Work” opens a mega-menu containing the five sports and featured projects
- “People” opens Board, Current Members, and eventually Alumni
- Active page receives a gold underline or small square indicator
- Mobile navigation becomes a full-screen overlay with large tap targets

---

## 4. Visual Direction

### Overall concept: “The Analytics Arena”

Use a dark navy canvas with luminous UCLA-blue and gold data elements. The design should feel like a live sports broadcast package crossed with a modern technical portfolio.

Avoid simply recoloring BruinAI. Borrow its strengths—large type, strong contrast, geometric visual anchors, minimal navigation, gradient accents—and reinterpret them using sports data, court diagrams, trajectories, grids, and live metrics.

### Color tokens

```css
--bg-primary: #061426;
--bg-secondary: #0B1F38;
--surface: #102A49;
--surface-elevated: #153556;
--ucla-blue: #2774AE;
--electric-blue: #4AA8FF;
--sky-blue: #8BCBFF;
--ucla-gold: #FFD100;
--warm-gold: #FFB81C;
--text-primary: #F7FBFF;
--text-secondary: #B8C8D9;
--text-muted: #7F95AA;
--border: rgba(151, 193, 226, 0.18);
--success: #40D39C;
--error: #FF6B72;
```

### Gradients

Use gradients as lighting, not as full-page decoration.

```css
--gradient-hero: radial-gradient(circle at 78% 35%, rgba(39,116,174,.50), transparent 38%),
                 radial-gradient(circle at 88% 52%, rgba(255,209,0,.22), transparent 26%);

--gradient-accent: linear-gradient(100deg, #4AA8FF 0%, #2774AE 50%, #FFD100 115%);

--gradient-card: linear-gradient(145deg, rgba(74,168,255,.12), rgba(255,209,0,.04));
```

Gold should be used sparingly for focus, active states, important metrics, and calls to action. Blue remains the dominant brand color.

### Typography

Recommended open-source stack:

- **Headings:** Sora, 600–800
- **Body/UI:** Inter, 400–600
- **Data labels and tags:** IBM Plex Mono, 500

Desktop scale:

- Display: 72–88px / 0.95 line-height
- H1: 56–64px
- H2: 40–48px
- H3: 24–30px
- Body large: 20px
- Body: 16–18px
- Label: 12–14px uppercase with tracking

Mobile display should scale to 44–52px and never force awkward one-word line breaks.

### Graphic language

Use:

- Shot charts and heatmaps
- Court and field line abstractions
- Ball trajectories and motion paths
- Dot matrices and coordinate grids
- Number tickers and stat chips
- Geometric 3D objects built from sports-data points
- Thin line icons rather than filled cartoon icons

Do not overuse literal stock photos of athletes. Prioritize original team photography, screenshots of work, charts, and technical visuals.

### Texture

- 2–3% monochromatic noise overlay
- Fine data-grid background at low opacity
- Soft blue edge lighting
- Rounded cards, but not excessively pill-shaped layouts

Recommended radius scale:

```css
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
```

---

## 5. Landing Page Specification

### Section 1: Hero

**Goal:** Establish identity and direct users toward work, recruitment, or partnerships.

Suggested copy:

> **WHERE SPORTS MEET DATA.**  
> Bruin Sports Analytics is UCLA’s student-run sports analytics organization, building research, tools, and competitive insights across the games we love.

Primary CTA: **Explore Our Work**  
Secondary CTA: **Join BSA**  
Tertiary text link: **Partner With Us →**

Hero visual:

- A large animated 3D “data ball” or abstract sphere made from trajectory lines and data points
- The visual subtly changes between baseball, volleyball, basketball, football, and tennis motifs
- Nearby floating cards show real metrics such as active projects, sports covered, members, and years operating
- Motion must pause under `prefers-reduced-motion`

### Section 2: Impact strip

A thin horizontal stat rail:

- Active projects
- Sports groups
- Current members
- Years at UCLA
- Partners or organizations served

All numbers must be CMS-controlled and should not be hardcoded into the interface.

### Section 3: Sports selector

Five large cards:

- Baseball
- Volleyball
- Basketball
- Football
- Tennis

Each card contains:

- Sport icon or line illustration
- One-sentence description
- Number of active and archived projects
- Featured metric or screenshot
- Hover state that animates the field/court lines

Tennis receives a subtle “3 programs” marker and expands to reveal its subdivisions.

### Section 4: Featured work

Show 3–5 editorially selected projects. Each card should support:

- Cover image or chart
- Sport
- Work type: Consulting, Research, Journalism, Dashboard, or Tool
- Project status
- One-line result or impact statement
- Contributors
- GitHub, paper, article, or live-demo links

Featured projects should support an expiration date so older work does not remain pinned unintentionally.

### Section 5: How BSA works

A three-step horizontal sequence:

1. **Ask the right question**
2. **Build the analysis**
3. **Deliver an actionable result**

Use animated square nodes connected by a line, echoing the recruitment timeline component.

### Section 6: Where our members go

Title options:

- **Where Bruins Take Analytics**
- **Built at UCLA. Proven Everywhere.**
- **Where Our Members Work**

Use a monochrome logo wall of employers, graduate programs, sports organizations, and technical companies. Logos become full-color on hover.

Requirements:

- Every logo includes accessible text
- Logos must be based on verified member outcomes
- Avoid suggesting formal sponsorship or endorsement
- Obtain member permission before associating individual names with outcomes

### Section 7: Upcoming events

Show the next three public events:

- Event name
- Date and time
- Type: workshop, speaker, meeting, info session, or social
- Location
- RSVP button

### Section 8: Final CTA

Split CTA:

- **Students:** “Build the next play.” → Join
- **Organizations:** “Bring us the problem.” → Partner

---

## 6. Our Work

### Work overview page

This page replaces the old top-level separation between consulting, research, and journalism.

Top controls:

- Sport filter
- Work-type filter
- Year filter
- Search
- Active/Archived toggle

Each sport section shows:

- Sport overview
- Current focus areas
- Featured project
- Recent work
- Team lead or contact

### Sport page template

Each of the five sport pages should use the same template:

1. Sport-specific hero
2. Current priorities
3. Active projects
4. Past consulting projects
5. Research and journalism
6. Dashboards and tools
7. Team members
8. Partner CTA

Example routes:

```text
/work/baseball
/work/volleyball
/work/basketball
/work/football
/work/tennis
```

### Tennis subdivisions

The three subdivision names should be CMS-configurable. Do not hardcode them until organizational leadership confirms the actual labels.

Recommended provisional structure:

1. **Match Strategy**
2. **Player Development**
3. **Scouting & Recruitment**

Each subdivision can have its own landing page, lead, active projects, dashboards, and archived work.

---

## 7. Project Dashboard

### Purpose

Create a public, filterable index of BSA’s work and external deliverables.

### Primary interface

- Search bar
- Filter chips
- Sort by newest, featured, or most recently updated
- Responsive card grid
- Optional compact table mode for desktop

### Filters

- Sport
- Project type
- Status
- Academic year
- Technology
- Public deliverable availability

### Project card fields

- Title
- Sport
- Type
- Status: Active, Completed, Ongoing, or Archived
- Short summary
- Cover image
- Project members
- Academic quarter/year
- Last updated date
- Technology tags
- Links: GitHub, live dashboard, paper, article, presentation, case study

### Project detail page

Recommended order:

1. Problem
2. Context
3. Approach
4. Data
5. Methods and technology
6. Results
7. Visuals
8. Team
9. External links
10. Related projects

### Privacy behavior

Many athletics projects may include confidential data. The CMS must support:

- Public project
- Public summary with redacted methods/results
- Private project with only a title and approved description
- Completely hidden project

Never expose private repositories, credentials, athlete-level sensitive information, or protected partner data.

### GitHub integration

Recommended approach:

- Store repository URL in the CMS
- Fetch metadata during build or scheduled revalidation
- Display language, last update, and repository visibility where appropriate
- Cache results to avoid API rate-limit problems
- Use manually authored summaries instead of relying on repository README text

---

## 8. People Pages

### Photography direction

Use a consistent LinkedIn-quality photoshoot for board and members:

- 4:5 portrait crop
- Dark navy or warm neutral background
- Consistent key light and framing
- Optional subtle blue/gold rim lighting
- Board members photographed individually and in one group shot
- Current members can use the same setup or a simplified batch setup

### Board page

Structure:

- Board group photo and short leadership statement
- Executive board grid
- Directors and sport leads grid
- Optional organization chart

Member card behavior:

- Entire card is clickable when a profile URL exists
- Name, title, major/year, and team are always visible
- LinkedIn icon appears in the corner
- Hover reveals a one-sentence bio or responsibility
- External links open in a new tab with an accessible label

### Current members page

Controls:

- Filter by sport
- Filter by team/function
- Search by name
- Optional class-year filter

Group members by sport or team. Avoid a single unstructured wall of headshots.

### Alumni page

Backburner for launch, but prepare the data structure now.

Launch options:

- Hide the route entirely
- Show a simple “Alumni network coming soon” page
- Feature only verified alumni outcomes with permission

Recommended feature flag:

```text
ENABLE_ALUMNI_PAGE=false
```

---

## 9. About Page

### Sections

1. Mission and origin story
2. Founded-at-UCLA timeline
3. How the organization is structured today
4. Values
5. Member and project impact metrics
6. Where members work or study
7. Link to Board and Current Members

### Suggested values

- Rigor
- Curiosity
- Collaboration
- Practical impact
- Accessibility

### Timeline style

Use a vertical or horizontal line with square markers. Each marker represents a major milestone, sport-team launch, partnership, publication, or organizational change.

---

## 10. Join Page and Recruitment State Logic

The Join page must be state-driven instead of manually redesigned each cycle.

### Recruitment states

```text
UPCOMING
OPEN
CLOSED
```

### Upcoming state

Show:

- “Our next recruitment cycle is Fall 2026” or the configured next cycle
- Expected opening month
- Email reminder or mailing-list form
- What members do
- Teams that expect to recruit
- FAQ

### Open state

Show:

- Strong “Applications are open” banner
- Primary application CTA
- Interactive recruitment timeline
- Role/team descriptions
- Eligibility and expectations
- Info-session and coffee-chat events
- FAQ

### Closed state

Show:

- “Applications are currently closed”
- Next-cycle name and expected timing
- Mailing-list signup
- Public events people can attend in the meantime

### Interactive timeline

Inspired by Bruinwalk’s compact square milestones:

- Horizontal on desktop
- Vertical on mobile
- Square nodes rather than circles
- States: completed, current, upcoming
- Every node includes date, title, location/link, and status
- Current milestone pulses once on load, then becomes static
- Clicking a node opens an event detail panel

Possible timeline entries:

- Applications open
- Info session
- Coffee chats
- Application deadline
- Interviews
- Decisions released
- New-member kickoff

### Content rule

The redesign should follow the new organizational requirement that the Join page is actively recruitment-focused during Fall and Winter cycles. Do not copy older cycle rules from the current website unless leadership reconfirms them.

---

## 11. Events and Meetings Page

### Public view

- Upcoming events list
- Calendar view
- Filters by workshop, speaker, recruitment, meeting, social, and conference
- RSVP button
- Add-to-calendar action
- Event archive with recaps and photos

### Member meeting behavior

Do not publicly expose private meeting details. Provide one of these patterns:

- Public listing with “Members only” and no sensitive location/link
- Authenticated member calendar
- Button redirecting members to Slack or a protected Google Calendar

### Event detail page

- Title
- Date/time
- Location
- Registration link
- Description
- Speaker information
- Agenda
- Related resources

---

## 12. Partner With Us

### Goal

Convert teams, companies, researchers, and sports organizations into qualified project conversations.

### Hero copy

> **Turn your sports data into decisions.**  
> BSA combines analytics, engineering, visualization, and domain knowledge to solve real competitive and operational problems.

### Capabilities grid

- Data collection and web scraping
- Data cleaning and pipelines
- Statistical modeling
- Machine learning and forecasting
- Interactive dashboards
- Data visualization
- Experiment design
- Scouting and performance analysis
- Research and technical communication

Only display capabilities BSA can reliably deliver.

### Engagement process

1. Discovery
2. Scope and data review
3. Build and iterate
4. Present and hand off

### Proof section

Use approved case studies rather than generic claims. Each case study should show:

- Partner problem
- BSA approach
- Deliverable
- Outcome or impact
- Technology used

### Inquiry form

Fields:

- Name
- Organization
- Email
- Sport/industry
- Problem to solve
- Available data
- Desired timeline
- File upload or link
- Consent checkbox

### Technical credibility section

Show a compact technology strip, such as:

- Python
- R
- SQL
- Tableau or Power BI
- React/Next.js
- GitHub
- scikit-learn
- PyTorch
- Shiny

Do not present a tool unless active members can support it.

---

## 13. FAQ

FAQs should be stored once and reused on Join, Partner, and the standalone FAQ page.

Suggested categories:

- Membership
- Recruitment
- Technical background
- Time commitment
- Project assignment
- Events
- Partnerships
- Data privacy

Use accessible accordion controls with full keyboard operation and URL-addressable question anchors.

---

## 14. Footer and Social Links

Footer columns:

- Explore
- Our Work
- People
- Connect

Social actions:

- Email
- Instagram
- LinkedIn
- Slack

Requirements:

- Use recognizable official icons
- Include visible text labels on mobile
- Provide `aria-label` text on icon-only desktop buttons
- Slack should redirect to the approved general channel or workspace invitation flow
- External links open in a new tab

Footer signature:

> Built by Bruins who believe every game leaves a dataset.

---

## 15. Component Library

### Core components

- Sticky navigation
- Mega-menu
- Hero with visual canvas
- Stat ticker
- Sport card
- Project card
- Project filter bar
- Member card
- Employer logo wall
- Timeline
- Event card
- Capability card
- Case-study block
- FAQ accordion
- Social icon row
- Newsletter/signup form
- Footer

### Button variants

- Primary: gold fill, navy text
- Secondary: transparent with blue border
- Tertiary: text arrow link
- Icon: square, 44px minimum touch target

### Card motion

On hover:

- Translate upward by no more than 4px
- Increase border opacity
- Reveal contextual action
- Apply subtle light sweep or data-line movement

Avoid exaggerated parallax or constant looping animations.

---

## 16. Responsive Behavior

### Breakpoints

```css
--mobile: 0–639px;
--tablet: 640–1023px;
--desktop: 1024–1439px;
--wide: 1440px+;
```

### Mobile priorities

- Hero CTA visible without scrolling past the first screen
- Sport cards become a horizontal snap carousel or one-column stack
- Filter bars collapse into a bottom sheet
- Recruitment timeline becomes vertical
- Member cards remain at least two columns only when readable; otherwise one column
- Logo wall becomes a compact wrapping grid
- Footer social labels become visible

---

## 17. Accessibility Requirements

Target WCAG 2.2 AA.

- Minimum 4.5:1 text contrast
- Full keyboard navigation
- Visible focus states using gold and white outlines
- Semantic heading structure
- Alt text for meaningful visuals
- Decorative data visuals hidden from screen readers
- Reduced-motion mode
- No information conveyed by color alone
- Accessible form labels and error messaging
- Minimum 44×44px interactive targets
- Captions or transcripts for video

---

## 18. Content Management and Technical Recommendation

### Suggested stack

- Next.js with TypeScript
- Tailwind CSS or CSS Modules with design tokens
- Sanity, Contentful, or Strapi for CMS
- Vercel deployment
- GitHub integration for repository metadata
- Resend, Formspree, or a server action for forms
- Plausible or GA4 for analytics

### CMS collections

#### Member

```text
name
slug
role
group: board | member | alum
sport/team
major
gradYear
headshot
bio
linkedinUrl
currentOrganization
pastOrganizations
sortOrder
isPublished
```

#### Project

```text
title
slug
sport
subdivision
projectType
status
academicYear
summary
problem
approach
result
coverImage
gallery
members
techStack
githubUrl
demoUrl
paperUrl
articleUrl
visibility
featured
featuredUntil
lastUpdated
```

#### Recruitment cycle

```text
name
status
openDate
closeDate
nextCycleLabel
applicationUrl
timelineEvents
roles
faqItems
```

#### Event

```text
title
slug
type
startTime
endTime
location
isMembersOnly
rsvpUrl
description
speaker
coverImage
```

#### Organization outcome

```text
name
logo
category
url
approvedForDisplay
```

### Freshness safeguards

- Automatically sort current projects and recent publications
- Add a “featured until” field
- Warn editors when homepage content is older than a configured threshold
- Show `lastUpdated` on project detail pages
- Maintain drafts and preview environments before publishing

---

## 19. Motion Specification

Use motion to reinforce data and competition.

Recommended effects:

- Hero data points drift slowly and react subtly to pointer movement
- Count-up animation for impact metrics
- Court lines draw on scroll once
- Timeline fills as the user scrolls
- Project filters animate between layouts
- Sport cards reveal trajectories or heatmaps

Rules:

- No essential information depends on animation
- Hero animation should remain below 20–25% CPU usage on typical laptops
- Disable complex effects on low-power/mobile devices
- Respect reduced-motion settings
- Avoid autoplay audio and background video by default

---

## 20. Content Tone

Use confident, active language.

Prefer:

- “We build models that turn play-by-play data into decisions.”
- “Explore the work.”
- “Build the next play.”
- “Bring us the problem.”

Avoid:

- Excessive corporate buzzwords
- Unverified impact claims
- Long paragraphs above the fold
- Repeating “student-run” in every section
- Calling every project “cutting-edge”

---

## 21. Launch Scope

### Phase 1 — Launch MVP

- Landing page
- About
- Our Work overview
- Five sport pages
- Projects dashboard and detail pages
- Board
- Current members
- Join with recruitment states
- Events
- Partner With Us
- FAQ
- Footer/socials
- CMS

### Phase 2

- Alumni section
- Authenticated member calendar
- Advanced GitHub sync
- Partner case-study library
- Search across all articles and projects
- Member profile detail pages

### Phase 3

- Personalized sport feeds
- Interactive public analytics demos
- Alumni map and outcomes explorer
- Automated publication ingest

---

## 22. Acceptance Criteria

The launch is ready when:

- All primary routes work on desktop and mobile
- Every member profile link is valid or intentionally omitted
- Recruitment state can be changed in the CMS without code changes
- Project cards can link to GitHub, papers, articles, and demos
- Confidential projects respect visibility settings
- Sports and work-type filters function correctly
- Timeline is keyboard accessible
- Footer social links are verified
- Pages meet WCAG 2.2 AA checks
- Lighthouse performance, accessibility, best-practices, and SEO scores target 90+
- No homepage feature is dependent on manually editing source code

---

## 23. Recommended Homepage Wireframe

```text
[Sticky Nav + Partner CTA]

[Hero: Where Sports Meet Data]
[Explore Work] [Join BSA] [Partner With Us]
[Animated sports-data object]

[Impact Stats Rail]

[Five Sport Cards]

[Featured Projects]

[How BSA Works: Question → Analysis → Result]

[Where Our Members Work — Logo Wall]

[Upcoming Events]

[Student CTA | Partner CTA]

[Footer + Email / Instagram / LinkedIn / Slack]
```

---

## Final Creative Rule

Every page should contain at least one element that could only belong to a sports analytics organization: a chart, court line, trajectory, metric, project result, dashboard preview, or data-driven interaction. The site should never feel like a generic student-club template with new colors applied.
