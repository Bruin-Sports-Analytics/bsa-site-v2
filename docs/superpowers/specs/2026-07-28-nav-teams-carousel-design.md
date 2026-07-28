# Nav Teams Carousel — Design Spec

**Date:** 2026-07-28  
**Status:** Approved

## Problem

The Teams dropdown in the nav bar lists all 5 sports as a flat vertical list. This produces a wall of text and sub-links that feels dense and doesn't give any visual identity to each team.

## Goal

Replace the flat list with a carousel that shows one team at a time, rotatable via scroll wheel, arrow buttons, or dot indicators. Each team displays a visual card (large sport icon on accent-colored background) alongside its name, description, and sub-links.

---

## Design

### Layout

The mega-menu stays glass-styled. Width increases from 460px to ~520px. Internal layout splits into two columns:

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  ┌────────────┐  [Name]                   [N/5]   │
│  │            │  ───────────────────────────────  │
│  │  [icon]    │  [sport.description]              │
│  │            │                                   │
│  │  accent bg │  [Consulting]  [Research]         │
│  └────────────┘                                   │
│                                                   │
│  ◀   ● ○ ○ ○ ○   ▶                               │
└────────────────────────────────────────────────────┘
```

- **Left panel** (~130px): Rounded card with `sport.accent` as background color, `sport.icon` (Lucide) rendered large. Icon color: `rgba(0,0,0,0.65)` — works across all accent hues including the bright yellows (Volleyball #FFD100, Football #FFB81C). Clicking the card navigates to `/work/${sport.slug}`.
- **Right panel**: Sport `name` as a heading, `sport.description` as body text, then pill links for Consulting and Research (and Match Manager for Tennis).
- **Counter**: "N/5" text top-right of the right panel.
- **Footer row**: `◀` chevron left, 5 dot indicators (filled = active), `▶` chevron right.

### Interaction

- **Mouse scroll wheel** (`onWheel`) on the dropdown: scroll down = next team, scroll up = prev team. Wrap around (Tennis → Baseball and vice versa).
- **◀ / ▶ buttons**: cycle prev/next with wrap-around.
- **Dot click**: jump directly to that team index.
- **Keyboard**: left/right arrow keys when the dropdown is focused.
- **Reset**: `activeTeamIndex` resets to 0 when `openMenu` is set to anything other than `"Teams"` (i.e., in `onMouseLeave` and `onBlur` handlers for the Teams nav group).

### Animation

CSS `transition: opacity 0.15s, transform 0.15s` on the right panel content. On team change: briefly fade/slide out, swap content, fade/slide in. The image card transitions its background color.

---

## Data

No data changes required. All needed fields already exist on the `Sport` type:
- `sport.name` — heading
- `sport.slug` — href for links
- `sport.icon` — Lucide icon component for the visual card
- `sport.description` — body text
- `sport.accent` — card background color

---

## Component Changes

### `Navigation.tsx`
- Add `activeTeamIndex` state (number, default 0).
- Replace the `sports.map(...)` loop inside the Teams menu with `TeamsCarousel` component (or inline JSX using `sports[activeTeamIndex]`).
- Pass `activeTeamIndex`, `setActiveTeamIndex`, and `sports` down.
- Reset index to 0 in `onMouseLeave` / `onBlur` for the Teams nav group.

### `TeamsCarousel` (new component or inline)
Renders:
1. Icon card: `<div>` with inline `background: sport.accent` style, renders `<SportIcon />` at ~40px.
2. Info column: name heading, description paragraph, sub-link pills.
3. Nav row: prev/next chevron buttons + dot indicators.

Handles `onWheel` with `e.preventDefault()` to prevent page scroll while inside dropdown.

### `Navigation.module.css`
- `.teamsMenu`: width → 520px, layout stays `flex-direction: column`.
- `.teamsCarouselBody`: new class, `display: grid; grid-template-columns: 130px 1fr; gap: 16px; align-items: start`.
- `.teamsCarouselCard`: the accent-bg icon card, `border-radius: var(--radius-md); aspect-ratio: 1; display: flex; align-items: center; justify-content: center`.
- `.teamsCarouselNav`: the dots/arrows row, `display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 12px`.
- `.teamsCarouselDot`: small dot, filled vs outlined via modifier class.

---

## Out of Scope

- Mobile nav (currently a flat link list — no carousel needed there).
- Real sport photography (icon card is the visual approach).
- `focusAreas` or `featuredMetric` display — description only, keep it concise.
