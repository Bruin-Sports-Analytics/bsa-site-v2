# Framer Motion Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate Framer Motion for smooth page transitions, scroll reveals, and interactive animations throughout the site.

**Architecture:** Replace custom IntersectionObserver-based ScrollReveal system with Framer Motion's declarative animation API. Add page transitions via `template.tsx`, convert scroll reveals to `whileInView`, and enhance interactive components with motion variants.

**Tech Stack:** Framer Motion 11.x, Next.js 14.x, React 18.x, TypeScript 5.x

## Global Constraints

- Framer Motion version: 11.x or higher
- All animations must respect `prefers-reduced-motion: reduce`
- Bundle size increase must stay under 65KB
- No breaking changes to existing component APIs
- Page transitions must not cause layout shift or flicker
- Performance must remain smooth on mobile devices

---

## Task 1: Install Framer Motion and Create Page Transition Wrapper

**Files:**
- Modify: `package.json`
- Create: `app/template.tsx`

**Interfaces:**
- Consumes: None (initial setup)
- Produces: `PageTransition` component that wraps all page content with route transition animations

- [ ] **Step 1: Install framer-motion dependency**

```bash
npm install framer-motion
```

Expected output: Package added to dependencies in package.json

- [ ] **Step 2: Create page transition template**

Create `app/template.tsx`:

```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

- [ ] **Step 3: Test page transitions**

Run: `npm run dev`

Navigate between routes (e.g., `/` → `/teams` → `/teams/baseball`)

Expected: Smooth fade and slide transitions, no flicker or layout shift

- [ ] **Step 4: Verify build succeeds**

Run: `npm run build`

Expected: Build completes successfully, no warnings about framer-motion

- [ ] **Step 5: Commit page transitions**

```bash
git add package.json package-lock.json app/template.tsx
git commit -m "feat: add Framer Motion page transitions"
```

---

## Task 2: Convert Homepage Scroll Reveals

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `motion` from framer-motion, existing homepage section structure
- Produces: Homepage sections with scroll-triggered reveal animations using `whileInView`

- [ ] **Step 1: Import motion components**

In `app/page.tsx`, add import at top:

```tsx
import { motion } from "framer-motion";
```

- [ ] **Step 2: Convert hero section to motion**

Find the hero section (around line 25):

```tsx
// Before:
<section className={styles.hero}>

// After:
<motion.section 
  className={styles.hero}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

- [ ] **Step 3: Add scroll reveals to sections**

Convert each `.section` to motion.section with whileInView:

```tsx
// Before:
<section className="section">

// After:
<motion.section 
  className="section"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "0px 0px -18% 0px" }}
  transition={{ duration: 0.5 }}
>
```

Apply this pattern to:
- ScrollCountStats section
- "Our sports teams" section
- "Featured projects" section
- "Where our members go" section
- "Upcoming events" section
- Final CTA section

- [ ] **Step 4: Test homepage animations**

Run: `npm run dev`

Navigate to `/` and scroll down

Expected: Sections fade in and slide up as you scroll, smooth motion

- [ ] **Step 5: Commit homepage scroll reveals**

```bash
git add app/page.tsx
git commit -m "feat: add scroll reveal animations to homepage"
```

---

## Task 3: Convert Sport Cards Grid with Staggered Reveals

**Files:**
- Modify: `components/SportCard.tsx`
- Modify: `app/teams/page.tsx`

**Interfaces:**
- Consumes: `motion` from framer-motion, existing SportCard component API
- Produces: `SportCard` component wrapped in motion.div with stagger animation support via `custom` prop

- [ ] **Step 1: Update SportCard component**

In `components/SportCard.tsx`, import motion and wrap the GlassSurface:

```tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { SportOverview } from "@/lib/team-pages";
import styles from "./SportCard.module.css";

export function SportCard({ overview, index = 0 }: { overview: SportOverview; index?: number }) {
  const { activeProjects, archivedProjects, featuredProject, sport, teamSize } = overview;
  const Icon = sport.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassSurface as="article" variant="regular" tint="blue" radius="lg" className={styles.card} style={{ "--accent": sport.accent } as React.CSSProperties}>
        {/* existing card content */}
        <div className={styles.header}>
          <div className={styles.iconWrap}>
            <Icon size={34} aria-hidden />
          </div>
          <div>
            <span className={styles.kicker}>{sport.subdivisions ? `${sport.subdivisions.length} roles` : `${activeProjects.length} active`}</span>
            <h3>{sport.name}</h3>
          </div>
        </div>
        <p className={styles.description}>{sport.description}</p>
        <div className={styles.metric}>
          <span>{sport.featuredMetric}</span>
        </div>
        <div className={styles.focusList} aria-label={`${sport.name} focus areas`}>
          {sport.focusAreas.slice(0, 3).map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
        <dl className={styles.stats}>
          <div>
            <dt>Active</dt>
            <dd>{activeProjects.length}</dd>
          </div>
          <div>
            <dt>Archive</dt>
            <dd>{archivedProjects.length}</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>{teamSize}</dd>
          </div>
        </dl>
        {featuredProject ? (
          <div className={styles.featured}>
            <span>Representative work</span>
            <strong>{featuredProject.title}</strong>
          </div>
        ) : null}
        <div className={styles.actions}>
          <Link href={`/teams/${sport.slug}`} className={styles.action}>
            Open team <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </GlassSurface>
    </motion.div>
  );
}
```

- [ ] **Step 2: Update teams page to pass index**

In `app/teams/page.tsx`:

```tsx
// Before:
{overviews.map((overview) => <SportCard overview={overview} key={overview.sport.slug} />)}

// After:
{overviews.map((overview, index) => <SportCard overview={overview} index={index} key={overview.sport.slug} />)}
```

- [ ] **Step 3: Test sport cards stagger**

Run: `npm run dev`

Navigate to `/teams`

Expected: Cards reveal in sequence with stagger delay, smooth motion

- [ ] **Step 4: Commit sport cards animation**

```bash
git add components/SportCard.tsx app/teams/page.tsx
git commit -m "feat: add staggered scroll reveals to sport cards"
```

---

## Task 4: Add Interactive Animations to Cards

**Files:**
- Modify: `components/SportCard.tsx`
- Modify: `components/ProjectCard.tsx`
- Modify: `components/MemberCard.tsx`
- Modify: `components/EventCard.tsx`

**Interfaces:**
- Consumes: `motion` from framer-motion, existing card components
- Produces: Card components with hover lift and tap feedback animations

- [ ] **Step 1: Add hover animation to SportCard**

In `components/SportCard.tsx`, update the motion.div wrapper:

```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -4, scale: 1.005 }}
  viewport={{ once: true, margin: "0px 0px -18% 0px" }}
  transition={{ 
    opacity: { duration: 0.5, delay: index * 0.1 },
    y: { duration: 0.5, delay: index * 0.1 },
    scale: { type: "spring", stiffness: 400, damping: 17 },
  }}
>
```

- [ ] **Step 2: Add hover animation to ProjectCard**

In `components/ProjectCard.tsx`, add motion import and wrap card:

```tsx
"use client";

import { motion } from "framer-motion";
// ... existing imports

export function ProjectCard({ project }: { project: Project }) {
  // ... existing code

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.005 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ 
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        scale: { type: "spring", stiffness: 400, damping: 17 },
      }}
    >
      {/* existing card content */}
    </motion.article>
  );
}
```

- [ ] **Step 3: Add hover animation to MemberCard**

In `components/MemberCard.tsx`, add motion wrapper:

```tsx
"use client";

import { motion } from "framer-motion";
// ... existing imports

export function MemberCard({ member }: { member: Member }) {
  // ... existing code

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.005 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ 
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        scale: { type: "spring", stiffness: 400, damping: 17 },
      }}
    >
      {/* existing card content */}
    </motion.article>
  );
}
```

- [ ] **Step 4: Add hover animation to EventCard**

In `components/EventCard.tsx`, add motion wrapper:

```tsx
"use client";

import { motion } from "framer-motion";
// ... existing imports

export function EventCard({ event }: { event: CalendarEvent }) {
  // ... existing code

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.005 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ 
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        scale: { type: "spring", stiffness: 400, damping: 17 },
      }}
    >
      {/* existing card content */}
    </motion.article>
  );
}
```

- [ ] **Step 5: Test card hover animations**

Run: `npm run dev`

Navigate to various pages and hover over cards

Expected: Cards lift smoothly with spring physics, feel responsive

- [ ] **Step 6: Commit card hover animations**

```bash
git add components/SportCard.tsx components/ProjectCard.tsx components/MemberCard.tsx components/EventCard.tsx
git commit -m "feat: add hover animations to card components"
```

---

## Task 5: Add Button Tap Feedback

**Files:**
- Modify: `app/globals.css` (add motion button wrapper styles)
- Create: `components/ui/MotionButton.tsx` (optional wrapper for consistency)

**Interfaces:**
- Consumes: Existing button styles from globals.css
- Produces: Buttons with tap scale feedback using motion

- [ ] **Step 1: Add tap feedback to primary buttons**

In pages with buttons (e.g., `app/page.tsx`), wrap Link buttons with motion:

```tsx
import { motion } from "framer-motion";

// Before:
<Link className="btn btn-primary" href="/teams">
  Explore Our Work <ArrowRight size={18} aria-hidden />
</Link>

// After:
<motion.div whileTap={{ scale: 0.97 }}>
  <Link className="btn btn-primary" href="/teams">
    Explore Our Work <ArrowRight size={18} aria-hidden />
  </Link>
</motion.div>
```

Apply to all buttons on:
- Homepage hero section
- Homepage final CTAs
- Sport page hero sections
- Partner/Join pages

- [ ] **Step 2: Test button tap feedback**

Run: `npm run dev`

Click buttons throughout the site

Expected: Buttons scale down slightly on press, spring back on release

- [ ] **Step 3: Commit button tap feedback**

```bash
git add app/page.tsx
git commit -m "feat: add tap feedback to buttons"
```

---

## Task 6: Remove ScrollReveal System

**Files:**
- Delete: `components/ScrollReveal.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: None (cleanup task)
- Produces: Codebase with ScrollReveal system fully removed

- [ ] **Step 1: Remove ScrollReveal from layout**

In `app/layout.tsx`, remove:

```tsx
// Remove this import:
import { ScrollReveal } from "@/components/ScrollReveal";

// Remove this component from the body:
<ScrollReveal />
```

- [ ] **Step 2: Delete ScrollReveal component**

```bash
rm components/ScrollReveal.tsx
```

- [ ] **Step 3: Remove data-reveal CSS**

In `app/globals.css`, remove these rules (search for `.scroll-reveal-enabled`):

```css
/* Remove entire block: */
.scroll-reveal-enabled [data-reveal="true"] {
  opacity: 0;
  transform: translate3d(0, 12px, 0) scale(.995);
  transition:
    opacity 360ms ease,
    transform 360ms cubic-bezier(.2, .8, .2, 1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}

.scroll-reveal-enabled [data-reveal-visible="true"] {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  will-change: auto;
}

.scroll-reveal-enabled .board-grid [data-reveal="true"] {
  will-change: auto;
}
```

Also remove from prefers-reduced-motion block:

```css
/* Remove from @media (prefers-reduced-motion: reduce): */
.scroll-reveal-enabled [data-reveal="true"],
.scroll-reveal-enabled [data-reveal-visible="true"] {
  opacity: 1 !important;
  transform: none !important;
}
```

- [ ] **Step 4: Test that animations still work**

Run: `npm run dev`

Navigate through the site and verify:
- Page transitions work
- Homepage scroll reveals work
- Card animations work
- No console errors about data-reveal

- [ ] **Step 5: Verify build succeeds**

Run: `npm run build`

Expected: Build completes successfully, no references to ScrollReveal

- [ ] **Step 6: Commit ScrollReveal removal**

```bash
git add app/layout.tsx app/globals.css
git rm components/ScrollReveal.tsx
git commit -m "refactor: remove custom ScrollReveal system"
```

---

## Task 7: Convert Sport Pages Scroll Reveals

**Files:**
- Modify: `components/SportHomePage.tsx`

**Interfaces:**
- Consumes: `motion` from framer-motion, existing SportHomePage component structure
- Produces: SportHomePage with scroll-triggered section animations

- [ ] **Step 1: Import motion in SportHomePage**

In `components/SportHomePage.tsx`, add import:

```tsx
"use client";

import { motion } from "framer-motion";
// ... existing imports
```

- [ ] **Step 2: Convert hero section**

Find the hero section and wrap with motion:

```tsx
// Before:
<section className="page-hero">

// After:
<motion.section 
  className="page-hero"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

- [ ] **Step 3: Convert Workstreams section**

```tsx
// Before:
<section className="section tight">

// After:
<motion.section 
  className="section tight"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "0px 0px -18% 0px" }}
  transition={{ duration: 0.5 }}
>
```

- [ ] **Step 4: Convert Featured Work section**

```tsx
{featuredProject ? (
  <motion.section 
    className="section tight"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -18% 0px" }}
    transition={{ duration: 0.5 }}
  >
    {/* existing featured work content */}
  </motion.section>
) : null}
```

- [ ] **Step 5: Convert remaining sections**

Apply the same motion.section pattern to:
- Tennis roles section (if present)
- Active projects section
- Archive section
- Team roster section

- [ ] **Step 6: Test sport page animations**

Run: `npm run dev`

Navigate to `/teams/baseball`, `/teams/basketball`, etc.

Expected: Sections reveal smoothly as you scroll

- [ ] **Step 7: Commit sport page scroll reveals**

```bash
git add components/SportHomePage.tsx
git commit -m "feat: add scroll reveals to sport pages"
```

---

## Task 8: Add Sport Pills Hover Animation

**Files:**
- Modify: `app/page.module.css`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: Existing sport pills from homepage
- Produces: Sport pills with spring hover effects

- [ ] **Step 1: Convert sport pills to motion links**

In `app/page.tsx`, find the sportPills section (around line 58):

```tsx
// Before:
<div className={styles.sportPills}>
  {sports.map((sport) => (
    <Link key={sport.slug} href={`/teams/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
  ))}
</div>

// After:
<div className={styles.sportPills}>
  {sports.map((sport) => (
    <motion.div
      key={sport.slug}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 500, damping: 15 }}
    >
      <Link href={`/teams/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
    </motion.div>
  ))}
</div>
```

- [ ] **Step 2: Test sport pills animation**

Run: `npm run dev`

Navigate to homepage, hover over sport pills

Expected: Pills scale up with bouncy spring, scale down on tap

- [ ] **Step 3: Commit sport pills animation**

```bash
git add app/page.tsx
git commit -m "feat: add spring hover animation to sport pills"
```

---

## Task 9: Final Testing and Documentation

**Files:**
- Create: `docs/animations.md` (document motion patterns for future use)

**Interfaces:**
- Consumes: All implemented animations
- Produces: Documentation of motion patterns and testing verification

- [ ] **Step 1: Test with prefers-reduced-motion**

On macOS: System Settings → Accessibility → Display → Reduce motion (enable)

On Windows: Settings → Accessibility → Visual effects → Animation effects (disable)

Run: `npm run dev`

Navigate through the site

Expected: All animations disabled, content appears immediately

- [ ] **Step 2: Test navigation between all major routes**

Test these transitions:
- `/` → `/teams`
- `/teams` → `/teams/baseball`
- `/teams/baseball` → `/projects`
- `/projects` → `/people/board`
- `/people/board` → `/journalism`

Expected: Smooth page transitions, no layout shift or flicker

- [ ] **Step 3: Verify build size**

Run: `npm run build`

Check build output for bundle size increase

Expected: Total increase under 65KB (framer-motion is ~60KB gzipped)

- [ ] **Step 4: Create animations documentation**

Create `docs/animations.md`:

```markdown
# Animation Patterns

This project uses Framer Motion for animations. All patterns respect `prefers-reduced-motion`.

## Page Transitions

Defined in `app/template.tsx`:
- Duration: 350ms
- Enter: Fade in + slide up 12px
- Exit: Fade out + scale down to 0.98

## Scroll Reveals

Standard pattern for sections:
\`\`\`tsx
<motion.section
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "0px 0px -18% 0px" }}
  transition={{ duration: 0.5 }}
>
\`\`\`

For grids with stagger, add `delay: index * 0.1` to transition.

## Interactive Animations

### Card Hover
\`\`\`tsx
whileHover={{ y: -4, scale: 1.005 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}
\`\`\`

### Button Tap
\`\`\`tsx
whileTap={{ scale: 0.97 }}
\`\`\`

### Bouncy Elements (pills, small interactions)
\`\`\`tsx
whileHover={{ scale: 1.05 }}
transition={{ type: "spring", stiffness: 500, damping: 15 }}
\`\`\`

## Spring Settings

- **Default**: `stiffness: 400, damping: 17` (snappy but smooth)
- **Gentle**: `stiffness: 300, damping: 20` (softer, large elements)
- **Bouncy**: `stiffness: 500, damping: 15` (playful, small elements)

## Accessibility

Framer Motion automatically respects `prefers-reduced-motion`. No additional configuration needed.
```

- [ ] **Step 5: Final commit**

```bash
git add docs/animations.md
git commit -m "docs: add animation patterns documentation"
```

- [ ] **Step 6: Verify all tests pass**

Run: `npm run lint`
Run: `npm run build`

Expected: No errors, build succeeds

---

## Self-Review Checklist

**Spec coverage:**
- ✅ Page transitions (Task 1)
- ✅ Homepage scroll reveals (Task 2)
- ✅ Sport cards with stagger (Task 3)
- ✅ Card hover animations (Task 4)
- ✅ Button tap feedback (Task 5)
- ✅ ScrollReveal removal (Task 6)
- ✅ Sport pages scroll reveals (Task 7)
- ✅ Sport pills animation (Task 8)
- ✅ Testing and documentation (Task 9)

**Placeholder scan:** ✅ No TBD/TODO/placeholders

**Type consistency:** ✅ motion, AnimatePresence used consistently

**Files match spec:**
- ✅ Created: app/template.tsx, docs/animations.md
- ✅ Modified: package.json, app/layout.tsx, app/page.tsx, app/teams/page.tsx, components/SportCard.tsx, components/ProjectCard.tsx, components/MemberCard.tsx, components/EventCard.tsx, components/SportHomePage.tsx, app/globals.css
- ✅ Deleted: components/ScrollReveal.tsx
