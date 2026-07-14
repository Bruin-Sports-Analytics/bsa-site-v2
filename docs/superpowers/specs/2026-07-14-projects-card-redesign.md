# Projects Page Card Redesign

**Date:** 2026-07-14
**Status:** Approved

## Goal

Replace the current tall project cards (430px fixed height with decorative visual header + full content body) with compact hover-reveal cards matching a reference design. Default state shows only the project title; hover expands the card to two grid rows and reveals context + a link.

## Reference

User-provided screenshot: 4-column grid where the hovered card spans 2 rows showing image/visual, a divider, date/context, summary text, and a link.

## Grid Layout

- **Columns:** 4 (up from 3)
- **Row height:** Fixed via `grid-auto-rows: ~200px`
- **Gap:** 12–16px
- **Expanded card:** `grid-row: span 2` (~400px tall)
- Filter bar stays sticky at top; no changes to `ProjectExplorer` controls

## Card — Default State (1 row, ~200px)

- Dark glass surface (`GlassSurface` with `variant="regular"`, `tint="none"`)
- Abstract decorative visual fills the upper ~65% (existing grid + gold lines pattern from current `ProjectCard`, adapted to fill the top portion)
- Project title pinned to bottom, centered, white, ~18px, Plus Jakarta Sans ExtraBold
- Subtle border, no hover underline or arrow at this state

## Card — Expanded State (2 rows, ~400px)

Triggered by `onMouseEnter`, closed by `onMouseLeave` / `onBlur` (same React state pattern used on nav and member cards — no CSS `:focus-within` bleed).

Expanded content from top to bottom:
1. Abstract visual — top ~35% of the expanded card (same pattern, slightly taller)
2. Thin gold/blue divider line
3. Eyebrow: `SPORT · ACADEMIC YEAR` — monospace caps, muted color, small
4. Project title — larger (22px), Plus Jakarta Sans ExtraBold
5. Summary paragraph — secondary text color, line-height 1.55, capped at ~4 lines
6. Action row:
   - **Public project:** "Open project →" gold link (`/projects/[slug]`)
   - **Private project:** lock badge ("Approved summary only") — no link
7. Tech stack tags — first 3, always shown

Content below the visual fades in with `opacity` + slight upward `translateY` transition on expand.

## State Management

```
const [expanded, setExpanded] = useState(false);

onMouseEnter → setExpanded(true)
onMouseLeave → setExpanded(false)
onFocus      → setExpanded(true)
onBlur(e)    → if (!currentTarget.contains(relatedTarget)) setExpanded(false)
```

The expanded class adds `grid-row: span 2` to the card via CSS module.

## Files Changed

| File | Change |
|------|--------|
| `components/ProjectCard.tsx` | Full rewrite — new layout, React state expand |
| `components/ProjectCard.module.css` | Full rewrite — new default + expanded styles |
| `components/ProjectExplorer.module.css` | Grid: 4 cols, `grid-auto-rows`, remove `compactGrid` or leave as-is |

`ProjectExplorer.tsx` and `app/projects/page.tsx` need no changes.

## Out of Scope

- Real project images/photos (placeholder for now — abstract visual used)
- `compactGrid` variant used on sport pages — not changed in this pass
- Mobile responsive breakpoint — keep existing `grid-template-columns: 1fr` at ≤1050px

## Open Questions (resolved)

- **Images:** Abstract visual placeholder; real photos added later
- **Filter bar:** Kept as-is
- **Private projects:** Lock badge, no link (same as current behavior)
