# Instagram Collage Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the BSA logo in the home page hero's right column with a scattered 9-tile collage of recent Instagram posts, falling back to the logo if the API is unavailable.

**Architecture:** A server-side `getInstagramPosts()` utility fetches posts from the Instagram Basic Display API at build time (ISR 24h). `page.tsx` becomes async, calls that utility, and renders either `<InstagramCollage posts={posts} />` or the logo fallback. The component is purely presentational — all data flows in as props.

**Tech Stack:** Next.js 14 App Router (async server components, ISR via `fetch` `revalidate`), TypeScript, CSS Modules

## Global Constraints

- No test framework present — use `npx tsc --noEmit` for type verification and dev server for visual verification
- `images: { unoptimized: true }` is already set in `next.config.mjs` — no domain config needed for external Instagram CDN URLs
- All CSS uses existing design tokens: `--glass-border`, `--glass-radius-lg`, `--glass-shadow-md`, `--ucla-gold`
- Path alias `@/*` maps to repo root
- Instagram Basic Display API token is a long-lived token (60-day TTL), stored in `INSTAGRAM_ACCESS_TOKEN` env var

---

### Task 1: API utility — `lib/instagram.ts`

**Files:**
- Create: `lib/instagram.ts`
- Modify: `.env.local` (create if absent)

**Interfaces:**
- Produces:
  ```ts
  type InstagramPost = {
    id: string;
    media_url: string;
    permalink: string;
    timestamp: string;
  };
  async function getInstagramPosts(count: number): Promise<InstagramPost[]>
  ```

- [ ] **Step 1: Add env var placeholder to `.env.local`**

  Check if `.env.local` exists; create or append:

  ```bash
  # Instagram Basic Display API — long-lived token (60-day TTL)
  INSTAGRAM_ACCESS_TOKEN=
  ```

  Leave the value empty for now; the fallback handles the missing-token case.

- [ ] **Step 2: Create `lib/instagram.ts`**

  ```ts
  export type InstagramPost = {
    id: string;
    media_url: string;
    permalink: string;
    timestamp: string;
  };

  type RawPost = InstagramPost & { media_type: string };

  export async function getInstagramPosts(count: number): Promise<InstagramPost[]> {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (!token) return [];

    try {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,timestamp&access_token=${token}`,
        { next: { revalidate: 86400 } }
      );
      if (!res.ok) {
        console.error(`Instagram API error: ${res.status}`);
        return [];
      }
      const data = (await res.json()) as { data: RawPost[] };
      return data.data
        .filter((p) => p.media_type === "IMAGE")
        .slice(0, count)
        .map(({ id, media_url, permalink, timestamp }) => ({
          id,
          media_url,
          permalink,
          timestamp,
        }));
    } catch (err) {
      console.error("Instagram fetch failed:", err);
      return [];
    }
  }
  ```

- [ ] **Step 3: Verify types compile**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors related to `lib/instagram.ts`.

- [ ] **Step 4: Commit**

  ```bash
  git add lib/instagram.ts .env.local
  git commit -m "feat: add Instagram Basic Display API utility"
  ```

---

### Task 2: `InstagramCollage` component

**Files:**
- Create: `components/InstagramCollage.tsx`
- Create: `components/InstagramCollage.module.css`

**Interfaces:**
- Consumes:
  ```ts
  import { InstagramPost } from "@/lib/instagram";
  type Props = { posts: InstagramPost[] };
  ```
- Produces: `<InstagramCollage posts={posts} />` — renders 9 tiles or fewer if `posts.length < 9`

- [ ] **Step 1: Create `components/InstagramCollage.module.css`**

  ```css
  .collage {
    position: relative;
    width: 100%;
    height: 520px;
  }

  .tile {
    position: absolute;
    top: var(--t);
    left: var(--l);
    width: 190px;
    height: 190px;
    border: 1px solid var(--glass-border);
    border-radius: var(--glass-radius-lg);
    box-shadow: var(--glass-shadow-md);
    overflow: hidden;
    transform: rotate(var(--r));
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: block;
    text-decoration: none;
  }

  .tile:hover {
    transform: rotate(0deg) scale(1.08) translateY(-6px);
    box-shadow: 0 12px 40px rgba(255, 209, 0, 0.35);
    z-index: 10;
  }

  .imageWrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1100px) {
    .collage {
      height: 380px;
      max-width: 580px;
    }

    .tile {
      top: var(--mt);
      left: var(--ml);
      width: 150px;
      height: 150px;
    }
  }
  ```

- [ ] **Step 2: Create `components/InstagramCollage.tsx`**

  ```tsx
  import Image from "next/image";
  import type { InstagramPost } from "@/lib/instagram";
  import styles from "./InstagramCollage.module.css";

  type Props = {
    posts: InstagramPost[];
  };

  // [top, left, rotate] for desktop (190px tiles, 520px container)
  const DESKTOP_LAYOUT = [
    [10, 20, -6],
    [20, 210, 3],
    [20, 400, -3],
    [175, 50, 5],
    [185, 240, -5],
    [170, 420, 4],
    [340, 15, -4],
    [355, 220, 6],
    [345, 410, -2],
  ] as const;

  // [top, left] for mobile (150px tiles, 380px container) — rotate values same as desktop
  const MOBILE_LAYOUT = [
    [7, 16],
    [15, 166],
    [15, 316],
    [128, 39],
    [135, 189],
    [124, 331],
    [249, 12],
    [260, 174],
    [252, 323],
  ] as const;

  function formatDate(timestamp: string) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  export function InstagramCollage({ posts }: Props) {
    const tiles = posts.slice(0, 9);

    return (
      <div className={styles.collage} aria-label="Bruin Sports Analytics Instagram posts">
        {tiles.map((post, i) => {
          const [top, left, rotate] = DESKTOP_LAYOUT[i];
          const [mobileTop, mobileLeft] = MOBILE_LAYOUT[i];

          return (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tile}
              aria-label={`View Instagram post from ${formatDate(post.timestamp)}`}
              style={
                {
                  "--t": `${top}px`,
                  "--l": `${left}px`,
                  "--mt": `${mobileTop}px`,
                  "--ml": `${mobileLeft}px`,
                  "--r": `${rotate}deg`,
                } as React.CSSProperties
              }
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={post.media_url}
                  alt=""
                  fill
                  sizes="190px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </a>
          );
        })}
      </div>
    );
  }
  ```

  > **Note:** All five per-tile values (`--t`, `--l`, `--mt`, `--ml`, `--r`) are CSS custom properties set via `style`. The CSS reads `var(--t)`/`var(--l)` by default and switches to `var(--mt)`/`var(--ml)` inside the media query — no `!important` needed.

- [ ] **Step 3: Verify types compile**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 5: Commit**

  ```bash
  git add components/InstagramCollage.tsx components/InstagramCollage.module.css
  git commit -m "feat: add InstagramCollage component"
  ```

---

### Task 3: Wire up `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes:
  - `getInstagramPosts(count: number): Promise<InstagramPost[]>` from `@/lib/instagram`
  - `InstagramCollage` from `@/components/InstagramCollage`

- [ ] **Step 1: Update `app/page.tsx`**

  Replace the entire file with:

  ```tsx
  import Image from "next/image";
  import Link from "next/link";
  import { ArrowRight, CalendarDays } from "lucide-react";
  import { EventCard } from "@/components/EventCard";
  import { InstagramCollage } from "@/components/InstagramCollage";
  import { ProjectCard } from "@/components/ProjectCard";
  import { getInstagramPosts } from "@/lib/instagram";
  import { events, impactStats, outcomes, sports } from "@/data/site";
  import { currentlyFeatured } from "@/lib/utils";
  import styles from "./page.module.css";

  export default async function Home() {
    const featured = currentlyFeatured().slice(0, 5);
    const publicEvents = events.filter((event) => !event.isMembersOnly).slice(0, 3);
    const instagramPosts = await getInstagramPosts(9);

    return (
      <main>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h1>Bruin Sports Analytics</h1>
              <p>Bruin Sports Analytics is UCLA&apos;s student-run sports analytics organization, building research, tools, and competitive insights.</p>
              <div className="button-row">
                <Link className="btn btn-primary" href="/work" data-analytics="hero_work_click">Explore Our Work <ArrowRight size={18} aria-hidden /></Link>
                <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join the Team</Link>
                <Link className="text-link" href="/partner">Partner With Us →</Link>
              </div>
            </div>
            {instagramPosts.length > 0 ? (
              <InstagramCollage posts={instagramPosts} />
            ) : (
              <div className={styles.heroLogo}>
                <Image
                  src="/assets/bruin_sports_analytics_logo_high_quality.jpg"
                  alt="Bruin Sports Analytics logo"
                  width={420}
                  height={420}
                  priority
                />
              </div>
            )}
          </div>
        </section>

        <section className={styles.impact} aria-label="Bruin Sports Analytics impact metrics">
          <div className="container">
            <div className={styles.rail}>
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Our Work</span>
            <h2 className="section-title">Explore by sport</h2>
            <p className="section-lede">Consulting projects, research, dashboards, tools, and articles live together under the sport where the question starts.</p>
            <div className={styles.sportPills}>
              {sports.map((sport) => (
                <Link key={sport.slug} href={`/work/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <span className="eyebrow">Featured work</span>
                <h2 className="section-title">Current analysis in motion</h2>
              </div>
              <Link className="btn btn-secondary" href="/projects">Open dashboard</Link>
            </div>
            <div className="grid three">
              {featured.slice(0, 3).map((project) => <ProjectCard project={project} key={project.slug} />)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">Outcomes</span>
            <h2 className="section-title">Where Bruins take analytics</h2>
            <div className={styles.logoWall}>
              {outcomes.filter((outcome) => outcome.approvedForDisplay).map((outcome) => (
                <a href="#" aria-label={`${outcome.name}, ${outcome.category}`} key={outcome.name}>
                  <span>{outcome.name}</span>
                  <small>{outcome.category}</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div>
                <span className="eyebrow">Upcoming events</span>
                <h2 className="section-title">Workshops, speakers, and recruitment</h2>
              </div>
              <Link className="btn btn-secondary" href="/events"><CalendarDays size={18} aria-hidden /> View all</Link>
            </div>
            <div className="grid three">
              {publicEvents.map((event) => <EventCard event={event} key={event.slug} />)}
            </div>
          </div>
        </section>

        <section className="section tight">
          <div className="container">
            <div className={styles.finalCta}>
              <Link href="/join">
                <span>Students</span>
                <b>Build the next play.</b>
              </Link>
              <Link href="/partner">
                <span>Organizations</span>
                <b>Bring us the problem.</b>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
  ```

- [ ] **Step 2: Verify types compile**

  ```bash
  npx tsc --noEmit
  ```

  Expected: no errors.

- [ ] **Step 3: Start dev server and verify fallback (no token)**

  ```bash
  npm run dev
  ```

  Open `http://localhost:3000`. With `INSTAGRAM_ACCESS_TOKEN` empty in `.env.local`, the hero should render the BSA logo — same as before. Confirm no layout shift or console errors.

- [ ] **Step 4: Verify collage with a real token**

  Add your long-lived Instagram access token to `.env.local`:
  ```
  INSTAGRAM_ACCESS_TOKEN=your_token_here
  ```

  Restart the dev server (`Ctrl+C`, then `npm run dev`). The hero should now show the 9-tile scattered collage. Verify:
  - Tiles are rotated and overlapping
  - Hovering a tile straightens it, scales it up, and shows a gold glow
  - Clicking a tile opens the Instagram post in a new tab
  - On a narrow viewport (< 1100px), tiles reposition to the smaller layout

- [ ] **Step 5: Commit**

  ```bash
  git add app/page.tsx
  git commit -m "feat: wire InstagramCollage into home page hero with logo fallback"
  ```

---

## ⚠️ Instagram API Note

The Instagram Basic Display API was deprecated by Meta on **December 4, 2024** for new app registrations. If you don't already have an existing app with this permission, you'll need to use the **Instagram Graph API** instead (requires a Facebook Business account and Instagram Professional account). The `getInstagramPosts` function would need the endpoint updated to `https://graph.facebook.com/v21.0/me/media?...` with a Graph API token — the response shape and filter logic remain identical.
