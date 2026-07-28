# Nav Teams Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat teams list in the nav dropdown with a single-team carousel showing an accent-colored icon card, description, and nav controls.

**Architecture:** Extract a `TeamsCarousel` component that reads from the existing `sports` array. Navigation.tsx tracks `activeTeamIndex` state and passes it down. CSS classes in `Navigation.module.css` define the two-column carousel layout and nav row. No new data or assets required.

**Tech Stack:** React, Next.js (App Router), CSS Modules, Lucide React icons.

## Global Constraints

- Follow existing CSS Module conventions in `Navigation.module.css` — no inline styles except `background` for dynamic accent color.
- No new dependencies.
- Mobile panel (`mobilePanel`) is out of scope — leave the flat link list untouched.
- No `--text-tertiary` CSS variable exists; use `var(--text-secondary)` for subdued text/icons.

---

### Task 1: Implement TeamsCarousel component + CSS + Navigation wiring

**Files:**
- Create: `components/TeamsCarousel.tsx`
- Modify: `components/Navigation.module.css`
- Modify: `components/Navigation.tsx`

**Interfaces:**
- Produces: `<TeamsCarousel activeIndex={number} setActiveIndex={(i: number) => void} />` consumed by Navigation.tsx

---

- [ ] **Step 1: Add carousel CSS classes to `Navigation.module.css`**

Find the block starting at `.navGroup .teamsMenu` (line ~221) and **replace** the entire teams section (`.teamsMenu`, `.teamsMenu.menuOpen`, `.teamsRow`, `.teamsRow > a`, `.teamsRow > a:hover`, `.teamsSubLinks`, `.teamsSubLinks a`, `.teamsSubLinks a:hover`) with the following:

```css
.navGroup .teamsMenu {
  width: 520px;
  grid-template-columns: 1fr;
  gap: 0;
}

.navGroup .teamsMenu.menuOpen {
  display: flex;
  flex-direction: column;
}

.teamsCarousel {
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.teamsCarouselBody {
  display: grid;
  grid-template-columns: 116px 1fr;
  gap: 16px;
  align-items: start;
}

.teamsCarouselCard {
  border-radius: var(--radius-md);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.12s;
  text-decoration: none;
}

.teamsCarouselCard:hover {
  opacity: 0.85;
}

.teamsCarouselInfo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.teamsCarouselHeader {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.teamsCarouselName {
  font-size: 15px;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
}

.teamsCarouselName:hover {
  color: var(--text-primary);
}

.teamsCarouselCount {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  opacity: 0.6;
  white-space: nowrap;
}

.teamsCarouselDesc {
  font-size: 12px;
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}

.teamsCarouselNav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.teamsCarouselChevron {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
}

.teamsCarouselChevron:hover {
  color: var(--text-primary);
  border-color: var(--menu-item-hover-border);
  background: var(--menu-item-hover-fill);
}

.teamsCarouselDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: var(--text-secondary);
  opacity: 0.3;
  padding: 0;
  transition: opacity 0.15s, transform 0.15s;
}

.teamsCarouselDotActive {
  opacity: 1;
  transform: scale(1.25);
}

.teamsSubLinks {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.teamsSubLinks a {
  border: 1px solid var(--glass-border);
  border-radius: var(--glass-radius-pill);
  padding: 4px 11px;
  color: var(--text-secondary);
  font-size: 11px;
  font-weight: 700;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  text-decoration: none;
}

.teamsSubLinks a:hover {
  color: var(--text-primary);
  border-color: var(--menu-item-hover-border);
  background: var(--control-hover-fill);
}
```

- [ ] **Step 2: Create `components/TeamsCarousel.tsx`**

```tsx
"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sports } from "@/data/site";
import styles from "./Navigation.module.css";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function TeamsCarousel({ activeIndex, setActiveIndex }: Props) {
  const total = sports.length;
  const sport = sports[activeIndex];
  const SportIcon = sport.icon;

  function prev() {
    setActiveIndex((activeIndex - 1 + total) % total);
  }

  function next() {
    setActiveIndex((activeIndex + 1) % total);
  }

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    if (e.deltaY > 0) next();
    else prev();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  }

  return (
    <div
      className={styles.teamsCarousel}
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.teamsCarouselBody}>
        <Link
          href={`/work/${sport.slug}`}
          className={styles.teamsCarouselCard}
          style={{ background: sport.accent }}
          aria-label={`${sport.name} team page`}
        >
          <SportIcon size={44} color="rgba(0,0,0,0.65)" aria-hidden />
        </Link>
        <div className={styles.teamsCarouselInfo}>
          <div className={styles.teamsCarouselHeader}>
            <Link href={`/work/${sport.slug}`} className={styles.teamsCarouselName}>
              {sport.name}
            </Link>
            <span className={styles.teamsCarouselCount}>{activeIndex + 1}/{total}</span>
          </div>
          <p className={styles.teamsCarouselDesc}>{sport.description}</p>
          <div className={styles.teamsSubLinks}>
            <Link href={`/work/${sport.slug}/consulting`}>Consulting</Link>
            <Link href={`/work/${sport.slug}/research`}>Research</Link>
            {sport.slug === "tennis" && (
              <a
                href="https://match-manager-umber.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Match Manager ↗
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.teamsCarouselNav}>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous team"
          className={styles.teamsCarouselChevron}
        >
          <ChevronLeft size={14} />
        </button>
        {sports.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to ${s.name}`}
            className={`${styles.teamsCarouselDot}${i === activeIndex ? ` ${styles.teamsCarouselDotActive}` : ""}`}
          />
        ))}
        <button
          type="button"
          onClick={next}
          aria-label="Next team"
          className={styles.teamsCarouselChevron}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Update `Navigation.tsx` — add state + wire TeamsCarousel**

**3a.** Add import at the top (alongside existing imports):
```tsx
import { TeamsCarousel } from "@/components/TeamsCarousel";
```

**3b.** Inside the `Navigation` function, add a new state line directly after `const [openMenu, setOpenMenu] = useState<string | null>(null);`:
```tsx
const [activeTeamIndex, setActiveTeamIndex] = useState(0);
```

**3c.** In the `.map((item) => ...)` block, find the `onMouseLeave` handler on the `navGroup` div and update it to reset the index when leaving the Teams group:
```tsx
onMouseLeave={() => {
  setOpenMenu(null);
  if (item.label === "Teams") setActiveTeamIndex(0);
}}
```

**3d.** Replace the `item.label === "Teams"` branch (the `sports.map(...)` block) with:
```tsx
item.label === "Teams" ? (
  <TeamsCarousel
    activeIndex={activeTeamIndex}
    setActiveIndex={setActiveTeamIndex}
  />
) :
```

The full conditional becomes:
```tsx
{item.label === "Teams" ? (
  <TeamsCarousel
    activeIndex={activeTeamIndex}
    setActiveIndex={setActiveTeamIndex}
  />
) : item.label === "Projects" ? (
  /* ... existing Projects JSX unchanged ... */
) : (
  /* ... existing People JSX unchanged ... */
)}
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add components/TeamsCarousel.tsx components/Navigation.tsx components/Navigation.module.css
git commit -m "feat(nav): replace teams list with single-team carousel"
```

---

### Task 2: Visual verification

- [ ] **Step 1: Run dev server**

```bash
npm run dev
```

Open `http://localhost:3000` in a browser.

- [ ] **Step 2: Hover "Teams" in the nav bar**

Verify:
- Dropdown shows one sport at a time (Baseball first)
- Left panel: rounded card with `#40D39C` background and baseball icon
- Right panel: "Baseball" heading, description text, counter "1/5", Consulting + Research pills

- [ ] **Step 3: Test navigation controls**

- Click `▶` — advances to Volleyball (2/5), accent color transitions to `#FFD100`
- Click `◀` from Baseball — wraps to Tennis (5/5)
- Click a dot — jumps directly to that sport
- Scroll mouse wheel while hovering the dropdown — cycles through teams
- Press left/right arrow keys while dropdown is focused — cycles through teams

- [ ] **Step 4: Test Tennis**

Navigate to Tennis (5/5). Verify the "Match Manager ↗" pill appears alongside Consulting and Research.

- [ ] **Step 5: Test reset**

Hover Teams (landing on e.g. Basketball via prev/next), then mouse away and re-hover. Verify it resets to Baseball (1/5).

- [ ] **Step 6: Test both themes**

Toggle dark/light mode. Verify icon card, description text, and pill links are legible in both.
