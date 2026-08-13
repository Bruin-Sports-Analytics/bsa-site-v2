# Framer Motion Animations Design

Prepared: August 13, 2026  
Branch: `framer-motion-animations`  
Scope: Integrate Framer Motion for smoother page transitions, scroll reveals, and interactive animations throughout the site.

## Goal

Replace the custom scroll reveal system with Framer Motion to achieve smoother animations across three key areas:
1. Page transitions between routes
2. Scroll-triggered reveals
3. Interactive element animations (hover, tap, gestures)

The current custom IntersectionObserver-based system works but lacks the fluidity and polish that Framer Motion's spring physics and gesture support provide.

## Current State

**Existing animation system:**
- Custom `ScrollReveal` component using IntersectionObserver
- CSS-based transitions with `data-reveal` attributes
- Respects `prefers-reduced-motion`
- Center-out grid animations with staggered delays
- Manual CSS transitions in component files

**Pain points:**
- No page transition animations (routes switch instantly)
- Scroll reveals use CSS easing (less natural than spring physics)
- Interactive animations require manual CSS per component
- IntersectionObserver management adds complexity

## Design

### Architecture

**Package:** `framer-motion` (~60KB, tree-shakeable)

**Core layers:**
1. **Page Transitions** — `AnimatePresence` wrapper in layout, `template.tsx` for route animations
2. **Scroll Reveals** — Replace `ScrollReveal.tsx` with `motion` components using `whileInView`
3. **Interactive Components** — Add motion variants to cards, buttons, navigation

**Configuration:**
- Respect `prefers-reduced-motion` automatically (Framer Motion handles this)
- Use spring animations by default for natural feel
- Keep existing CSS for simple states that don't need JS

### Page Transitions

**Implementation:**
Create `app/template.tsx` to wrap page content. Next.js remounts templates on navigation, enabling exit/enter animations.

**Animation pattern:**
- **Exit:** Current page fades out and scales down slightly (0.98)
- **Enter:** New page fades in and slides up subtly (12px from below)
- **Duration:** ~350ms with custom cubic-bezier easing
- **Overlap:** Exit and enter happen simultaneously (no awkward pause)

**Code structure:**
```tsx
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
```

**Impact:** Eliminates jarring instant route switches, provides continuity between pages.

### Scroll Reveals

**Migration strategy:**
Replace the entire `ScrollReveal` component and remove all `data-reveal` CSS. Use Framer Motion's `whileInView` prop on animated elements instead.

**Pattern:**
- Wrap animated elements with `motion.div` or convert existing elements to motion variants
- Use `whileInView` prop to trigger animations when scrolling into view
- Maintain staggered reveals for grids via `custom` prop and delay calculation
- Preserve center-out pattern for grid items (calculate delay based on distance from center)
- Remove all `data-reveal` attributes and associated CSS

**Viewport configuration:**
- `once: true` — Animate only the first time (matches current behavior)
- `margin: "0px 0px -18% 0px"` — Trigger slightly before element enters viewport (matches current root margin)

**Benefits over current system:**
- No manual IntersectionObserver lifecycle management
- Smoother motion curves (spring physics instead of CSS cubic-bezier)
- Better performance (Framer Motion optimizes transforms and opacity)
- Simpler code (declarative animations in components, no separate reveal system)
- Easier to customize per-component (no global selector logic)

**Example conversion:**
```tsx
// Before:
<div className="card">Content</div>

// After:
<motion.div 
  className="card"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "0px 0px -18% 0px" }}
  transition={{ duration: 0.5, delay: index * 0.08 }}
>
  Content
</motion.div>
```

**Grid stagger logic:**
Keep the existing center-out delay calculation pattern but apply it via Framer Motion's `custom` prop instead of CSS variables. For grids, pass row/column index to calculate distance from center and apply appropriate delay.

### Interactive Animations

**Components to enhance:**
1. **Cards** (`ProjectCard`, `MemberCard`, `SportCard`, `EventCard`) — Lift and scale on hover
2. **Buttons** — Scale feedback on tap
3. **Navigation** — Smooth mobile menu open/close
4. **Sport pills** — Spring hover effects
5. **Links** — Subtle scale on hover

**Hover pattern:**
```tsx
<motion.div
  whileHover={{ y: -4, scale: 1.01 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

**Strategy:**
- Start with high-impact components (cards, buttons)
- Use spring physics for natural, bouncy feel
- Keep existing CSS transitions for simple color/opacity changes
- Add `layoutId` for shared element transitions where appropriate (optional future enhancement)

**Spring settings:**
- **Default:** `stiffness: 400, damping: 17` (snappy but smooth)
- **Gentle:** `stiffness: 300, damping: 20` (softer, for larger elements)
- **Bouncy:** `stiffness: 500, damping: 15` (playful, for small interactions)

### Migration Plan

**Phase 1: Page transitions**
- Install `framer-motion`
- Create `app/template.tsx` with page transition wrapper
- Test navigation between routes
- Verify no layout shift or flicker

**Phase 2: Scroll reveals**
- Convert homepage sections first (biggest visual impact)
- Replace `ScrollReveal.tsx` usage in `app/layout.tsx`
- Convert grid components (sport cards, project cards, member cards)
- Remove `data-reveal` CSS from `globals.css`
- Delete `components/ScrollReveal.tsx`

**Phase 3: Interactive animations**
- Add motion variants to card components
- Enhance buttons with tap feedback
- Polish navigation menu transitions
- Add spring effects to sport pills and links

**Phase 4: Cleanup**
- Remove unused CSS transition code where replaced by motion
- Verify `prefers-reduced-motion` respected everywhere
- Test performance on lower-end devices
- Document motion patterns for future component additions

## File Changes

**New files:**
- `app/template.tsx` — Page transition wrapper

**Modified files:**
- `package.json` — Add `framer-motion` dependency
- `app/layout.tsx` — Remove `ScrollReveal` import
- `components/SportCard.tsx` — Convert to motion component
- `components/ProjectCard.tsx` — Add motion variants
- `components/MemberCard.tsx` — Add motion variants
- `components/EventCard.tsx` — Add motion variants
- `app/page.tsx` — Convert sections to motion
- `app/teams/page.tsx` — Convert sport cards grid
- Individual page components — Add scroll reveals as needed

**Deleted files:**
- `components/ScrollReveal.tsx` — Replaced by Framer Motion

**Modified CSS:**
- `app/globals.css` — Remove `.scroll-reveal-enabled` rules and `data-reveal` styles

## Acceptance Criteria

- Page transitions animate smoothly between all routes
- No jarring instant switches or layout shifts during navigation
- Scroll reveals animate when scrolling into view (once per element)
- Grid items stagger with center-out pattern preserved
- Cards lift smoothly on hover with spring physics
- Buttons provide tap feedback
- All animations respect `prefers-reduced-motion: reduce`
- No animation-related console errors
- Performance remains smooth on mobile devices
- Build size increase stays under 65KB (framer-motion is ~60KB gzipped)

## Technical Constraints

**Browser support:**
Framer Motion supports all modern browsers. The site already requires JavaScript, so this doesn't change the baseline.

**Bundle size:**
Framer Motion adds ~60KB gzipped. This is acceptable for the quality improvement. The library is tree-shakeable, so we only pay for features used.

**Performance:**
Framer Motion uses GPU-accelerated transforms and optimizes repaints. Should be equal or better than current CSS transitions. Test on mobile to verify.

**Accessibility:**
Framer Motion respects `prefers-reduced-motion` automatically. All animations disable for users who prefer reduced motion.

## Testing Strategy

**Manual testing:**
1. Navigate between routes — verify smooth transitions, no flicker
2. Scroll through pages — verify elements reveal smoothly
3. Hover/tap cards and buttons — verify spring animations feel natural
4. Enable "Reduce motion" in OS settings — verify animations disable
5. Test on mobile — verify performance is acceptable

**Build verification:**
- `npm run build` succeeds
- Bundle size increase is acceptable
- No Framer Motion console warnings

**Browser testing:**
- Chrome/Edge
- Safari
- Firefox
- Mobile Safari
- Mobile Chrome

## Risks

**Bundle size:** 60KB is non-trivial, but acceptable for the UX improvement. If this becomes a concern later, we can lazy-load Framer Motion for non-critical animations.

**Over-animation:** Easy to add too much motion and make the site feel busy. Use restraint: subtle lifts, short durations, respect existing visual hierarchy.

**Performance on low-end devices:** Framer Motion is well-optimized, but test on older phones. If needed, we can disable non-critical animations on low-power devices.

**Migration effort:** Converting all components takes time. Phase the work and prioritize high-impact areas first (page transitions, homepage, team pages).

## Future Enhancements (Out of Scope)

- Shared element transitions (morph card from grid to detail page)
- Drag-to-reorder interactions
- Advanced gesture controls
- Path animations for SVG elements
- Scroll-linked animations (parallax effects)

These can be added later if desired, but are not part of this initial integration.
