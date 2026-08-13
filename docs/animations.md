# Animation Patterns

This project uses Framer Motion for animations. All patterns respect `prefers-reduced-motion` via the top-level `MotionConfig reducedMotion="user"` in `app/template.tsx`.

## Page Transitions

- Defined in `app/template.tsx` (wraps every route)
- Duration: 350ms
- Enter: Fade in + slide up 12px
- Exit: Fade out + scale down to 0.98

Note: `components/RouteTransitions.tsx` also intercepts link clicks to fade out before navigation and force scroll-to-top. Both coexist — `template.tsx` handles the enter/exit of content, `RouteTransitions` handles the exit-before-navigate + scroll reset.

## Scroll Reveals

Standard pattern for sections:

```tsx
<motion.section
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "0px 0px -18% 0px" }}
  transition={{ duration: 0.5 }}
>
```

For grids with stagger, add `delay: index * 0.1` to the transition and pass an `index` prop.

## Interactive Animations

### Card Hover
```tsx
whileHover={{ y: -4 }}
transition={{ y: { duration: 0.4 }, scale: { type: "spring", stiffness: 400, damping: 17 } }}
```

### Button Tap
```tsx
whileTap={{ scale: 0.97 }}
```

Wrap a solitary `<Link>`/`<button>`:
```tsx
<motion.div whileTap={{ scale: 0.97 }}>
  <Link className="btn btn-primary" href="...">...</Link>
</motion.div>
```

### Bouncy Elements (sport pills, small interactions)
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 500, damping: 15 }}
```

## Icon resolution in client components

Sport icons are React components (functions) in `data/site.ts`, so they cannot be passed across the server→client boundary. `lib/team-pages.ts` strips `icon` from `SportOverview.sport` (see `SerializableSport`), and `SportCard.tsx` resolves the icon client-side by slug via `SPORT_ICONS`. Keep any new data you pass to a client component free of functions.

## Spring Settings

- **Default**: `stiffness: 400, damping: 17` (snappy but smooth)
- **Gentle**: `stiffness: 300, damping: 20` (softer, large elements)
- **Bouncy**: `stiffness: 500, damping: 15` (playful, small elements)

## Accessibility

Framer Motion automatically respects `prefers-reduced-motion` when configured with `reducedMotion="user"`. No additional configuration needed.