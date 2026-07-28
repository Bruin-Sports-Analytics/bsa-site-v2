# Color Pops — Design Spec
Date: 2026-07-28

## Summary
Add decorative geometric color rectangles site-wide, inspired by the BSA slide template. Sharp, flat rectangles in brand colors partially cropped at page edges, distributed across the page length, re-randomized on each navigation.

## Component
`components/ColorPops.tsx` — client component, mounted once in `app/layout.tsx` alongside the existing `<ScrollReveal>` component.

## Visual Design
- **Colors**: UCLA gold `#FFD100`, sky blue `#4AA8FF`, dark navy accent `#162d47`
- **Shapes**: Sharp rectangles (no border-radius), 60–220px wide, 80–280px tall
- **Placement**: Left or right edge only, offset 30–60% of their own width off-screen so they're partially cropped. Top positions distributed across 0–500vh so pops appear throughout the full page.
- **Count**: 6–8 rectangles per page load
- **Z-index**: Below content (z-index: 0), above existing section gradient blobs

## Behavior
- Randomized on mount and on `usePathname()` change (each route navigation generates a new set)
- `pointer-events: none` — purely decorative, never blocks clicks
- `prefers-reduced-motion` has no effect (static rectangles, no animation)

## Layout
- Wrapper div in `app/layout.tsx`: `position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: 0`
- Fixed positioning means pops stay in the viewport as you scroll — same aesthetic as the slide reference where the whole canvas is one composition. This avoids needing to know document height.

## Constraints
- Never placed within 0–10vh from the top (avoids overlapping the nav)
- Colors chosen randomly but no two adjacent pops share the same color
- Opacity: 1.0 for gold and navy-dark, 0.9 for sky blue (matches the slide reference)
