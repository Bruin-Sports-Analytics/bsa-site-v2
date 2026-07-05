# Bruin Sports Analytics — Liquid Glass Implementation Specification

**Document purpose:** Codex implementation guide  
**Companion document:** `bsa_website_design_spec.md`  
**Project:** Bruin Sports Analytics website redesign  
**Version:** 1.0 — July 2026  
**Primary implementation target:** Next.js + TypeScript + Tailwind CSS or CSS Modules

---

## 0. Codex Assignment

Add a polished **liquid-glass visual layer** to the Bruin Sports Analytics website described in the companion design specification.

Do not redesign the site’s information architecture, rewrite its content model, or replace the established UCLA-inspired color system. Treat this document as a visual and interaction-system extension.

Implement the glass system as reusable design primitives first, then apply those primitives to the approved components listed below.

### Required outcome

The finished website should feel:

- Translucent, dimensional, and responsive to surrounding color
- Premium and technically sophisticated
- Clearly tied to Bruin Sports Analytics
- Readable in every state
- Smooth without feeling distracting
- Functional on browsers that do not render the full effect
- Accessible to users who reduce motion, transparency, or contrast ambiguity

### Do not imitate Apple UI literally

“Liquid glass” describes the intended material behavior: blur, translucency, reflected color, edge highlights, depth, and responsive interaction. Do not copy Apple icons, layouts, operating-system controls, proprietary assets, or exact component geometry.

---

## 1. Design Intent

The existing BSA visual direction is **The Analytics Arena**: a dark navy environment with UCLA blue, electric blue, and gold data accents.

The liquid-glass layer should make interface controls appear to float over this environment while allowing data visualizations, gradients, court lines, and photography to softly influence the material.

The glass must support content hierarchy, not compete with it.

### Core visual rule

> Content is the field. Glass is the control layer floating above it.

Use glass most strongly for navigation, filters, compact controls, overlays, and high-value interactive cards. Use solid or nearly solid surfaces for long-form text, dense tables, and content that must remain maximally readable.

---

## 2. Non-Negotiable Rules

1. **Never apply glass to every section.**  
   A page full of translucent panels becomes visually muddy and expensive to render.

2. **Do not stack glass panels directly inside glass panels.**  
   Nested blur creates unclear boundaries and unnecessary GPU work. Inner content should normally use a transparent or solid surface.

3. **Text must not depend on blur for contrast.**  
   Every component requires a background opacity strong enough to remain readable over its worst-case backdrop.

4. **Gold tint is reserved for emphasis.**  
   Use gold-tinted glass for primary CTAs, active recruitment states, selected filters, or featured metrics—not generic decoration.

5. **Large scrolling content surfaces should not use continuous backdrop blur.**  
   Use glass mainly for fixed, sticky, floating, or compact interactive elements.

6. **Motion must be subtle and optional.**  
   No wobbling text, constant shimmer loops, or aggressive cursor-following distortion.

7. **The experience must degrade gracefully.**  
   Without `backdrop-filter`, the interface should become a polished opaque navy design rather than look broken.

---

## 3. Material Hierarchy

Implement three core glass materials and two tint modifiers.

### 3.1 Clear Glass

Use only where the background is predictable and text is minimal.

**Approved uses:**

- Icon buttons over the hero
- Compact social buttons
- Decorative stat chips
- Small media controls
- Hover-revealed card actions

**Characteristics:**

- Lowest opacity
- Highest visible background influence
- 12–16px blur
- Thin bright edge
- Minimal shadow
- Never used behind body copy

### 3.2 Regular Glass

This is the default material.

**Approved uses:**

- Sticky navigation
- Project filter bar
- Member profile cards
- Event cards
- Sport cards with short copy
- Dashboard controls
- FAQ accordion headers
- Timeline milestones

**Characteristics:**

- Medium opacity
- 18–24px blur
- Moderate saturation
- Visible top/left highlight
- Soft navy shadow
- Clear readable border

### 3.3 Strong Glass

Use where content must remain readable over complex backgrounds.

**Approved uses:**

- Mobile navigation drawer
- Mega-menu
- Modal and bottom-sheet surfaces
- Recruitment application panel
- Partner inquiry form shell
- Dense dropdowns
- Sticky tables or dashboard sidebars

**Characteristics:**

- Highest opacity
- 24–32px blur
- Stronger border
- Reduced background detail
- Deeper shadow
- Visually close to frosted navy acrylic

### 3.4 Blue Tint

Use to communicate brand emphasis, selection, active navigation, or technical interactivity.

### 3.5 Gold Tint

Use only for primary actions, selected recruitment milestones, featured project states, and important success metrics.

---

## 4. Design Tokens

Create the following tokens in the global theme. Values may be tuned by no more than approximately 10% during visual QA, but the hierarchy must remain intact.

```css
:root {
  /* Existing BSA foundation */
  --bsa-bg-primary: #061426;
  --bsa-bg-secondary: #0b1f38;
  --bsa-surface: #102a49;
  --bsa-ucla-blue: #2774ae;
  --bsa-electric-blue: #4aa8ff;
  --bsa-sky-blue: #8bcbff;
  --bsa-ucla-gold: #ffd100;
  --bsa-warm-gold: #ffb81c;
  --bsa-text-primary: #f7fbff;
  --bsa-text-secondary: #b8c8d9;

  /* Glass fills */
  --glass-clear-fill: rgba(12, 34, 58, 0.30);
  --glass-regular-fill: rgba(10, 31, 54, 0.56);
  --glass-strong-fill: rgba(7, 24, 43, 0.82);
  --glass-fallback-fill: rgba(10, 31, 54, 0.96);

  /* Glass tint layers */
  --glass-blue-tint: rgba(74, 168, 255, 0.13);
  --glass-gold-tint: rgba(255, 209, 0, 0.12);

  /* Blur and optical response */
  --glass-clear-blur: 14px;
  --glass-regular-blur: 22px;
  --glass-strong-blur: 30px;
  --glass-saturation: 145%;
  --glass-brightness: 108%;

  /* Borders */
  --glass-border: rgba(190, 224, 255, 0.20);
  --glass-border-hover: rgba(206, 234, 255, 0.38);
  --glass-border-strong: rgba(218, 237, 255, 0.30);
  --glass-border-gold: rgba(255, 209, 0, 0.46);

  /* Highlights */
  --glass-highlight: rgba(255, 255, 255, 0.20);
  --glass-highlight-soft: rgba(255, 255, 255, 0.08);
  --glass-specular-blue: rgba(139, 203, 255, 0.20);
  --glass-specular-gold: rgba(255, 209, 0, 0.14);

  /* Shadows */
  --glass-shadow-sm:
    0 8px 24px rgba(0, 5, 15, 0.20),
    0 1px 0 rgba(255, 255, 255, 0.07) inset;
  --glass-shadow-md:
    0 18px 50px rgba(0, 5, 15, 0.32),
    0 1px 0 rgba(255, 255, 255, 0.09) inset;
  --glass-shadow-lg:
    0 28px 80px rgba(0, 5, 15, 0.45),
    0 1px 0 rgba(255, 255, 255, 0.11) inset;

  /* Geometry */
  --glass-radius-sm: 12px;
  --glass-radius-md: 18px;
  --glass-radius-lg: 26px;
  --glass-radius-pill: 999px;

  /* Interaction */
  --glass-hover-lift: -3px;
  --glass-active-scale: 0.985;
  --glass-transition:
    transform 180ms cubic-bezier(.2, .8, .2, 1),
    border-color 180ms ease,
    background-color 180ms ease,
    box-shadow 180ms ease;
}
```

---

## 5. Ambient Background Requirements

Backdrop blur is only visually meaningful when there is subtle content behind it.

Each major page should have a restrained ambient background layer containing some combination of:

- Low-opacity UCLA blue radial glow
- Smaller gold radial glow
- Fine coordinate grid
- Court or field line abstraction
- Static noise texture
- Project screenshot, photography, or chart content where appropriate

### Background constraints

- Ambient color opacity should generally remain below 24%.
- Decorative grid opacity should remain below 8%.
- Gold glows should occupy less visual area than blue glows.
- Do not place high-frequency patterns directly behind body text.
- Do not animate the entire page background continuously.
- Use one or two slow-moving hero elements only, and disable them under reduced motion.

Example:

```css
.page-ambient {
  background:
    radial-gradient(
      circle at 78% 18%,
      rgba(74, 168, 255, 0.20),
      transparent 34rem
    ),
    radial-gradient(
      circle at 18% 48%,
      rgba(255, 209, 0, 0.08),
      transparent 25rem
    ),
    linear-gradient(180deg, #061426 0%, #081a2f 55%, #061426 100%);
}
```

---

## 6. Base CSS Primitive

Create a shared base class or equivalent CSS Module implementation.

```css
.glass {
  position: relative;
  isolation: isolate;
  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.015) 42%,
      rgba(74, 168, 255, 0.035)
    ),
    var(--glass-regular-fill);

  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow-md);

  -webkit-backdrop-filter:
    blur(var(--glass-regular-blur))
    saturate(var(--glass-saturation))
    brightness(var(--glass-brightness));
  backdrop-filter:
    blur(var(--glass-regular-blur))
    saturate(var(--glass-saturation))
    brightness(var(--glass-brightness));
}

.glass::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  background:
    linear-gradient(
      115deg,
      var(--glass-highlight) 0%,
      transparent 22%,
      transparent 72%,
      var(--glass-highlight-soft) 100%
    );
  opacity: 0.55;
}

.glass::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  background:
    radial-gradient(
      260px circle at var(--glass-pointer-x, 75%)
      var(--glass-pointer-y, 10%),
      rgba(255, 255, 255, 0.16),
      transparent 42%
    );
  opacity: 0;
  transition: opacity 180ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .glass[data-interactive="true"]:hover::after {
    opacity: 1;
  }
}
```

### Variant classes

```css
.glass--clear {
  background-color: var(--glass-clear-fill);
  box-shadow: var(--glass-shadow-sm);
  -webkit-backdrop-filter:
    blur(var(--glass-clear-blur))
    saturate(135%);
  backdrop-filter:
    blur(var(--glass-clear-blur))
    saturate(135%);
}

.glass--regular {
  background-color: var(--glass-regular-fill);
}

.glass--strong {
  background-color: var(--glass-strong-fill);
  border-color: var(--glass-border-strong);
  box-shadow: var(--glass-shadow-lg);
  -webkit-backdrop-filter:
    blur(var(--glass-strong-blur))
    saturate(125%);
  backdrop-filter:
    blur(var(--glass-strong-blur))
    saturate(125%);
}

.glass--blue {
  background:
    linear-gradient(135deg, var(--glass-blue-tint), transparent 58%),
    var(--glass-regular-fill);
}

.glass--gold {
  background:
    linear-gradient(135deg, var(--glass-gold-tint), transparent 58%),
    var(--glass-regular-fill);
  border-color: var(--glass-border-gold);
}
```

### Interaction class

```css
.glass--interactive {
  transition: var(--glass-transition);
  will-change: transform;
}

@media (hover: hover) and (pointer: fine) {
  .glass--interactive:hover {
    transform: translateY(var(--glass-hover-lift));
    border-color: var(--glass-border-hover);
    box-shadow:
      0 24px 66px rgba(0, 5, 15, 0.40),
      0 1px 0 rgba(255, 255, 255, 0.13) inset;
  }
}

.glass--interactive:active {
  transform: scale(var(--glass-active-scale));
}
```

Do not add `will-change` to every static glass element. Only interactive elements should receive it.

---

## 7. React Component API

Create a reusable component instead of duplicating class strings.

Suggested file:

```text
components/ui/GlassSurface.tsx
```

Suggested API:

```tsx
type GlassVariant = "clear" | "regular" | "strong";
type GlassTint = "none" | "blue" | "gold";

type GlassSurfaceProps<T extends React.ElementType = "div"> = {
  as?: T;
  variant?: GlassVariant;
  tint?: GlassTint;
  interactive?: boolean;
  radius?: "sm" | "md" | "lg" | "pill";
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;
```

Example usage:

```tsx
<GlassSurface
  as="article"
  variant="regular"
  tint="blue"
  interactive
  radius="lg"
  className="project-card"
>
  ...
</GlassSurface>
```

### Component requirements

- Merge class names predictably.
- Forward refs.
- Preserve native props for the selected element.
- Do not add click handlers to non-interactive semantic elements.
- `interactive` controls visuals only; actual interactivity must use a link, button, or other correct semantic element.
- Add `data-interactive="true"` only when pointer response is enabled.
- Do not render decorative pseudo-elements as additional DOM nodes unless required.

---

## 8. Pointer-Responsive Highlight

Interactive glass may softly reflect the pointer position.

### Implementation constraints

- Desktop fine-pointer devices only
- No response on touch devices
- Throttle updates with `requestAnimationFrame`
- Set CSS variables on the active element:
  - `--glass-pointer-x`
  - `--glass-pointer-y`
- Do not trigger React state updates on every pointer event
- Disable under reduced motion
- Remove or reset values on pointer leave

Suggested implementation:

```tsx
function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();

  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  element.style.setProperty("--glass-pointer-x", `${x}%`);
  element.style.setProperty("--glass-pointer-y", `${y}%`);
}
```

Use this only for high-value interactive surfaces such as sport cards, project cards, and primary CTA controls. Do not add it to every timeline item or table row.

---

## 9. Component Application Matrix

### 9.1 Sticky Navigation

**Material:** Regular Glass  
**After scrolling 24px:** Stronger fill and shadow  
**Radius:** Pill or large rounded rectangle on desktop; edge-to-edge top bar on small mobile  
**Tint:** None by default; blue on active indicator only

Requirements:

- Navbar floats 12–20px from viewport edges on desktop.
- It becomes more opaque after scrolling.
- Use a soft scroll-edge fade beneath it.
- Mega-menu uses Strong Glass.
- “Partner With Us” uses restrained Gold Glass or a solid gold button.
- Avoid blurring the logo itself.

### 9.2 Hero

The hero background remains the primary content layer.

Use Clear or Regular Glass for:

- Floating impact metrics
- Sport selector tabs
- “Currently recruiting” status
- Secondary CTA
- Optional dashboard preview controls

The main headline must remain outside glass.

### 9.3 Primary CTA

Recommended behavior:

- Gold Glass or solid gold, depending on local contrast
- Minimum 48px height
- Dark navy text for solid gold
- White text for translucent gold only when contrast passes
- Slight specular sweep on hover, not a looping animation
- Visible 2px focus ring

### 9.4 Sport Cards

**Material:** Regular Glass  
**Tint:** Sport-specific accent may use blue; gold only for selected card  
**Interactive:** Yes

Each card should include:

- Strong readable title
- One short description
- Data visualization or field-line motif
- Project count chip
- Arrow or view-work action

Do not place long paragraphs inside transparent sport cards.

### 9.5 Project Cards

Use one of two modes:

1. **Media-first card:** Solid image area with Regular Glass metadata tray.
2. **Data-first card:** Regular Glass shell over a quiet gradient.

The project title, sport, and status must remain readable before hover. Hover may reveal links, but must not reveal essential content for the first time.

### 9.6 Project Filter Bar

**Material:** Strong Glass  
**Behavior:** Sticky below navigation on project listing pages  
**Geometry:** Large rounded container with grouped pill controls

Selected filter:

- Blue tint by default
- Gold tint only for a featured or recruitment-specific filter
- Use icon/checkmark plus color
- Keep keyboard focus distinct from selection state

On mobile, filters open a Strong Glass bottom sheet.

### 9.7 Member Cards

Use Regular Glass only when the headshot is placed above or beside the text.

Preferred layout:

- Headshot remains crisp and unblurred
- Glass information tray overlaps the lower 20–30% of the image
- Name, role, team, and LinkedIn icon remain visible
- LinkedIn icon receives a Clear Glass circular button

Do not place a translucent layer across the member’s face.

### 9.8 Recruitment Timeline

Milestone squares should look like compact glass tiles.

States:

- Past: muted Regular Glass
- Current: Gold Glass with visible label and pulse once on entrance
- Upcoming: Clear/Regular Glass with lower contrast
- Disabled or unavailable: nearly opaque muted surface

Do not use infinite pulsing.

### 9.9 Events

Use Regular Glass for event cards and Strong Glass for event-detail drawers.

Calendar dates can use a blue-tinted Clear Glass tile. Members-only events must use an icon and text label, not color alone.

### 9.10 Dashboard and GitHub Projects

Use glass for:

- Toolbar
- Filter chips
- Search
- Repository metadata chips
- Floating chart legends
- Side panels

Do not use glass directly behind dense data tables. Tables should use a solid dark surface with glass controls above them.

### 9.11 FAQ

Use Regular Glass for accordion groups.

- Closed items may use a lighter material.
- Open items increase opacity rather than blur.
- The expand icon rotates no more than 90 degrees.
- Maintain a stable layout during expansion.

### 9.12 Forms

Use Strong Glass for the overall form shell.

Inputs should be mostly opaque:

```css
.form-input {
  background: rgba(4, 18, 34, 0.78);
  border: 1px solid rgba(190, 224, 255, 0.18);
}
```

Do not use highly transparent form fields. Error text and focus states must remain unambiguous.

### 9.13 Footer

The footer should remain primarily solid navy.

Use Clear Glass only for:

- Social icon buttons
- Newsletter/signup field group
- Small status or contact chips

---

## 10. Motion and Morphing

The web implementation should suggest fluidity without attempting expensive real-time physical refraction.

### Approved effects

- 2–3px lift on hover
- 0.985 active compression
- Pointer-position highlight
- Border brightness transition
- Navbar opacity transition on scroll
- CTA highlight sweep on deliberate hover
- Shared-layout animation for selected filters
- Bottom sheet or mega-menu emerging from its trigger
- Hero stat cards drifting no more than 4–6px over several seconds

### Avoid

- Full-page distortion shaders
- Continuous blur animation
- Constant shimmering borders
- Excessive spring bounce
- Parallax tied to every cursor movement
- Animated text blur
- Large translucent layers moving while the user scrolls
- Motion that changes content order or causes layout shift

### Timing

```text
Micro state:      120–180ms
Hover transition: 160–220ms
Menu/sheet:       220–320ms
Page entrance:    350–500ms
Hero ambient:     8–16s, subtle, optional
```

Use ease-out or a restrained spring. No overshoot for menus containing text.

---

## 11. Scroll Behavior

### Navigation transition

When the page is at the top:

- Lower opacity
- Softer shadow
- More background visible

After 24px of scroll:

- Increase fill opacity
- Increase border visibility
- Add shadow
- Keep blur value stable to avoid visual flicker

Use a small scroll threshold or sentinel with `IntersectionObserver`; do not attach expensive unthrottled scroll calculations.

### Sticky controls

Only one dominant sticky glass layer should occupy a given vertical region. If the navigation and project filter bar are both sticky, they should visually group or maintain at least 8px separation.

---

## 12. Accessibility and User Preferences

Target WCAG 2.2 AA.

### Contrast

- Body text: minimum 4.5:1
- Large text: minimum 3:1
- UI boundaries and focus indicators: minimum 3:1 against adjacent colors
- Test glass over the brightest and busiest valid background, not only over plain navy
- Add a local dark scrim behind text when required

### Reduced transparency

Support the media query where available, but do not rely on it as the only fallback because browser availability is incomplete.

```css
@media (prefers-reduced-transparency: reduce) {
  .glass,
  .glass--clear,
  .glass--regular,
  .glass--strong {
    background: var(--glass-fallback-fill);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }

  .glass::before,
  .glass::after {
    display: none;
  }
}
```

Also provide an optional app-level class that can be toggled manually:

```css
html.reduce-transparency .glass {
  background: var(--glass-fallback-fill);
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
}
```

### Increased contrast

```css
@media (prefers-contrast: more) {
  .glass {
    background: rgba(4, 17, 32, 0.96);
    border-color: rgba(255, 255, 255, 0.58);
    box-shadow: none;
  }

  .glass--gold {
    border-color: var(--bsa-ucla-gold);
  }
}
```

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  .glass,
  .glass::before,
  .glass::after {
    animation: none !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .glass--interactive:hover,
  .glass--interactive:active {
    transform: none;
  }
}
```

### Focus

Every interactive glass component must have a focus state that does not depend on translucency.

```css
:where(a, button, input, select, textarea):focus-visible {
  outline: 2px solid var(--bsa-ucla-gold);
  outline-offset: 3px;
}
```

---

## 13. Browser and CSS Fallbacks

Use `@supports` to guarantee an opaque fallback.

```css
.glass {
  background: var(--glass-fallback-fill);
}

@supports (
  (-webkit-backdrop-filter: blur(1px)) or
  (backdrop-filter: blur(1px))
) {
  .glass {
    background:
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.06),
        rgba(255, 255, 255, 0.015) 42%,
        rgba(74, 168, 255, 0.035)
      ),
      var(--glass-regular-fill);
  }
}
```

### Required browser behavior

- Modern Chromium: full effect
- Modern Safari: full effect using prefixed property where needed
- Modern Firefox: full or near-full effect
- Unsupported/embedded browsers: opaque dark surface
- Print styles: no blur or transparency
- High-contrast mode: solid surfaces and visible borders

Do not block rendering or show browser-specific warnings.

---

## 14. Performance Budget

Backdrop blur can be expensive, especially over animated content.

### Rules

- No more than three large blurred surfaces visible at once on a typical desktop viewport.
- Prefer compact glass controls over full-section glass backgrounds.
- Avoid blur radii above 32px.
- Avoid animating `backdrop-filter`.
- Avoid animating large box shadows continuously.
- Do not apply CSS filters to video.
- Use static raster noise instead of generated animated noise.
- Do not set `will-change` globally.
- Disable pointer reflection on touch and low-power layouts.
- Use transform and opacity for transitions.
- Lazy-load offscreen media and expensive visualizations.

### Target outcomes

- Lighthouse performance score: 85+ on production mobile
- No visible scrolling jank on a mid-range laptop
- Cumulative Layout Shift below 0.1
- Largest Contentful Paint below 2.5 seconds under the project’s normal test profile
- No sustained decorative animation consuming significant CPU while idle

If visual complexity jeopardizes performance, preserve legibility and responsiveness before preserving optical effects.

---

## 15. Responsive Rules

### Desktop

- Floating pill navigation
- Pointer-reactive highlights allowed
- Larger blur and shadow values
- Multiple glass cards may be visible if they do not overlap

### Tablet

- Reduce ambient visual density
- Keep regular blur
- Remove secondary floating hero panels if crowded
- Use fewer overlapping cards

### Mobile

- Use stronger, more opaque glass
- Disable pointer effects
- Reduce blur by approximately 20%
- Remove nonessential background grids
- Avoid detached floating panels near screen edges
- Use edge-to-edge Strong Glass for navigation and bottom sheets
- Keep text and controls stable while the mobile browser chrome expands or collapses

Suggested mobile override:

```css
@media (max-width: 639px) {
  :root {
    --glass-clear-blur: 10px;
    --glass-regular-blur: 16px;
    --glass-strong-blur: 22px;
    --glass-regular-fill: rgba(10, 31, 54, 0.68);
    --glass-strong-fill: rgba(7, 24, 43, 0.90);
  }
}
```

---

## 16. File and Code Organization

Recommended structure:

```text
components/
  ui/
    GlassSurface.tsx
    GlassButton.tsx
    GlassIconButton.tsx
    GlassToolbar.tsx
    GlassSheet.tsx

hooks/
  useGlassPointer.ts
  useScrolledState.ts

styles/
  tokens.css
  glass.css
  motion.css

lib/
  cn.ts

tests/
  glass-surface.test.tsx
  navigation-glass.spec.ts
  accessibility.spec.ts
```

If Tailwind is used, keep the optical implementation in CSS rather than encoding every gradient, shadow, and pseudo-element as long utility strings.

Use Tailwind for layout and spacing. Use semantic component classes or CSS Modules for the glass material.

---

## 17. Suggested Implementation Sequence for Codex

### Step 1: Audit

- Identify the framework and styling system.
- Locate global design tokens.
- Find all navigation, card, toolbar, sheet, modal, and form components.
- Confirm whether an existing animation library is installed.
- Do not install a new animation dependency unless necessary.

### Step 2: Tokens

- Add the glass tokens.
- Preserve current BSA colors.
- Add browser and accessibility fallbacks.

### Step 3: Primitive

- Build `GlassSurface`.
- Add variant, tint, radius, and interactive props.
- Add unit tests for class selection and semantic rendering.

### Step 4: Navigation pilot

- Apply Regular Glass to the desktop navigation.
- Add the scrolled opacity state.
- Apply Strong Glass to mobile navigation and mega-menu.
- Validate contrast and keyboard behavior.

### Step 5: High-value controls

Apply glass to:

- Hero stat chips
- Primary/secondary CTAs
- Project filter toolbar
- Sport cards
- Recruitment timeline
- Dashboard controls

### Step 6: Supporting components

Apply glass to:

- Member info trays
- Event cards
- FAQ accordions
- Social buttons
- Form shell

### Step 7: Accessibility

- Test keyboard navigation.
- Test reduced motion.
- Test reduced transparency fallback.
- Test increased contrast.
- Test 200% zoom.
- Confirm no essential information is hover-only.

### Step 8: Performance

- Profile scroll performance.
- Remove unnecessary large blur layers.
- Disable pointer effects on mobile.
- Confirm no blur value is animated.
- Run production Lighthouse.

### Step 9: Visual QA

Test at minimum:

```text
375 × 812
430 × 932
768 × 1024
1024 × 768
1440 × 900
1728 × 1117
```

Test each major page over both quiet and visually busy backgrounds.

---

## 18. Acceptance Criteria

The liquid-glass task is complete only when all of the following are true:

### System

- [ ] A reusable `GlassSurface` primitive exists.
- [ ] Clear, Regular, and Strong variants are implemented.
- [ ] Blue and Gold tint modifiers are implemented.
- [ ] Components use shared tokens rather than arbitrary per-card values.
- [ ] No unnecessary glass-on-glass nesting remains.

### Visual quality

- [ ] Glass shows background influence without harming readability.
- [ ] Edge highlights and shadows create visible depth.
- [ ] Gold is used selectively.
- [ ] The design still reads clearly as Bruin Sports Analytics.
- [ ] Long-form content is not placed on low-opacity glass.
- [ ] Hover treatments are subtle and consistent.

### Interaction

- [ ] Navigation changes material state after scrolling.
- [ ] Interactive cards have keyboard-equivalent behavior.
- [ ] Pointer response is disabled on touch.
- [ ] No essential content appears only on hover.
- [ ] Menus and sheets open without layout shift.

### Accessibility

- [ ] WCAG 2.2 AA contrast targets pass.
- [ ] Reduced-motion mode removes nonessential movement.
- [ ] Reduced-transparency mode becomes opaque.
- [ ] Increased-contrast mode has strong boundaries.
- [ ] Focus states remain visible on every glass surface.
- [ ] Zoom at 200% does not clip controls or text.

### Compatibility and performance

- [ ] Unsupported blur falls back to opaque navy.
- [ ] Safari prefix is included where required.
- [ ] Print output removes transparency and blur.
- [ ] No continuous animation of `backdrop-filter`.
- [ ] Scrolling is smooth on desktop and mobile.
- [ ] Lighthouse and layout-shift targets are met or documented with a justified exception.

---

## 19. Visual QA Checklist by Page

### Landing

- Navigation remains legible over the hero.
- Hero headline is not enclosed in glass.
- Stat chips feel dimensional but secondary.
- Sport cards do not visually merge into one blurred wall.
- CTA hierarchy remains obvious.

### Our Work / Sport Pages

- Filter and navigation glass layers do not collide.
- Project screenshots remain crisp.
- Metadata trays have enough opacity.
- Sport-specific visuals softly color the glass.

### Projects Dashboard

- Dense data remains on solid surfaces.
- Search, filters, legends, and side panels use glass.
- GitHub metadata is readable at a glance.
- Sticky controls do not consume excessive viewport height.

### People

- Faces remain unblurred.
- Text trays do not obscure important image content.
- LinkedIn buttons have accessible labels.
- Card motion does not shift the overall grid.

### Join

- Current recruitment state is unmistakable.
- Gold Glass highlights only current or primary actions.
- Timeline labels remain visible without interaction.
- Application form areas use Strong Glass.

### Partner

- Technical capability content remains professional and restrained.
- Inquiry form fields are opaque enough for easy completion.
- Glass supports credibility rather than looking playful or ornamental.

---

## 20. Final Creative Rule

The desired effect is not “put blur everywhere.”

The desired effect is:

> A deep UCLA-blue sports analytics environment where navigation, controls, and selected interactive surfaces appear to be made from responsive, illuminated glass.

When in doubt, use less glass, more opacity, clearer hierarchy, and stronger content.
