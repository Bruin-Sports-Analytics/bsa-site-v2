# Instagram Collage Hero — Design Spec

**Date:** 2026-07-17
**Status:** Approved

---

## Overview

Replace the current BSA logo image in the home page hero's right column with an `InstagramCollage` component — a scattered photo-stack of 9 recent Instagram posts. Tiles link to their Instagram permalink, animate on hover, and fall back to the BSA logo if the API is unavailable.

---

## Data Layer

### API utility — `lib/instagram.ts`

Exports a single async function:

```ts
getInstagramPosts(count: number): Promise<InstagramPost[]>
```

**`InstagramPost` type:**
```ts
type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};
```

**Fetch behavior:**
- Calls the Instagram Basic Display API: `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,timestamp&access_token=...`
- Filters to `media_type === "IMAGE"` only (excludes video/carousel covers)
- Returns the first `count` results
- On any fetch error or non-200 response, logs the error and returns `[]`

**Auth:**
- Token read from `process.env.INSTAGRAM_ACCESS_TOKEN`
- If the env var is missing, returns `[]` immediately (no throw)

**Caching / ISR:**
- Called in `app/page.tsx` with `{ next: { revalidate: 86400 } }` on the fetch, so Next.js revalidates once per 24 hours

### Environment variable

| Variable | Where set |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | `.env.local` (local), Vercel environment (production) |

The token must be a long-lived token (valid 60 days). Rotation is manual for now.

---

## Component — `InstagramCollage`

**File:** `components/InstagramCollage.tsx` + `components/InstagramCollage.module.css`

**Props:**
```ts
type Props = {
  posts: InstagramPost[];
};
```

### Layout

- Container: `position: relative`, height `520px` (matches current hero column), width `100%`
- 9 tiles, each `position: absolute` with hardcoded `top`/`left` values
- Tile size: `190px × 190px`
- Tiles overlap neighboring tiles by ~25px — the cluster fills the container without leaving large empty regions

**Hardcoded tile positions and rotations (index → [top, left, rotate]):**

| # | top | left | rotate |
|---|-----|------|--------|
| 0 | 10px | 20px | -6deg |
| 1 | 20px | 210px | 3deg |
| 2 | 20px | 400px | -3deg |
| 3 | 175px | 50px | 5deg |
| 4 | 185px | 240px | -5deg |
| 5 | 170px | 420px | 4deg |
| 6 | 340px | 15px | -4deg |
| 7 | 355px | 220px | 6deg |
| 8 | 345px | 410px | -2deg |

Positions are chosen so the overall cluster is roughly centered in the column and tiles overlap naturally at the edges.

### Each tile

- Element: `<a>` wrapping a `<div>` (the image wrapper)
- `href`: `post.permalink`, `target="_blank"`, `rel="noopener noreferrer"`
- Image: Next.js `<Image>` with `fill`, `objectFit="cover"`, `sizes="190px"`
- Image wrapper: `position: relative`, `width: 190px`, `height: 190px`
- Border: `1px solid var(--glass-border)`
- Border radius: `var(--glass-radius-lg)`
- Box shadow: `var(--glass-shadow-md)` (default state)
- `overflow: hidden` on the wrapper to clip the image to rounded corners

### Hover

Defined in CSS (no JS):

```css
.tile:hover {
  transform: rotate(0deg) scale(1.08) translateY(-6px);
  box-shadow: 0 12px 40px rgba(255, 209, 0, 0.35);
  z-index: 10;
}
```

Transition: `transform 0.25s ease, box-shadow 0.25s ease, z-index 0s`

Each tile carries its rotation via an inline CSS custom property `--r` set from the positions table above:

```css
.tile {
  transform: rotate(var(--r));
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
```

### Accessibility

- Container: `aria-label="Bruin Sports Analytics Instagram posts"`
- Each `<a>`: `aria-label="View Instagram post from {formatted date}"`

---

## Integration — `app/page.tsx`

```tsx
// Server component — fetch at build time / ISR
const posts = await getInstagramPosts(9);

// In JSX, replace current <div className={styles.heroLogo}>:
{posts.length > 0 ? (
  <InstagramCollage posts={posts} />
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
```

`page.tsx` must be an async server component (already is in Next.js App Router by default).

---

## Fallback

If `getInstagramPosts` returns `[]` (missing token, API error, rate limit), the hero renders the existing BSA logo image — same slot, no layout shift, no visible error state.

---

## Responsive behavior

At `max-width: 1100px` the `heroGrid` collapses to a single column (existing CSS). At that breakpoint, `InstagramCollage` should constrain to `max-width: 580px` and `height: 380px`, with tile sizes scaled to `150px × 150px` and positions scaled proportionally.

---

## Out of scope

- Video posts (filtered out)
- Caption overlays on tiles
- Lightbox / expanded post view
- Token auto-refresh (manual rotation for now)
- Analytics events on tile clicks
