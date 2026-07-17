# Instagram Collage — Static Posts Design Spec

**Date:** 2026-07-17
**Status:** Approved
**Supersedes:** `2026-07-17-instagram-collage-hero-design.md`

---

## Overview

Replace the live Instagram Basic Display API data layer with a static data file. The `InstagramCollage` component and its visual design remain unchanged. The only things that change are where the data comes from and the shape of the type passed to the component.

**Why:** The Instagram Basic Display API was deprecated by Meta in December 2024 for new app registrations. Rather than migrate to the Graph API (requires a Facebook Business account), the simpler and more reliable solution is to manually curate a set of post images committed directly to the repo.

---

## Data Layer

### Delete `lib/instagram.ts`

The API utility is removed entirely. No async fetch, no env var, no token management.

### Create `data/instagram-posts.ts`

```ts
export type InstagramPost = {
  src: string;       // path to image in public/, e.g. "/assets/instagram/post-01.jpg"
  permalink: string; // full Instagram post URL
  date: string;      // ISO 8601 date string, e.g. "2026-06-15"
};

export const instagramPosts: InstagramPost[] = [
  // populate with up to 9 entries
];
```

- `src` is a path under `public/` — served as a static asset by Next.js
- `permalink` is the Instagram post URL used for the tile's `<a href>`
- `date` is an ISO date string used in the `aria-label` (feeds the existing `formatDate` helper unchanged)
- An empty array is valid — the page falls back to the BSA logo

### Image storage

Downloaded Instagram images go in `public/assets/instagram/`. Naming convention: `post-01.jpg`, `post-02.jpg`, etc. Up to 9 images for the collage.

---

## Component — `InstagramCollage`

**File:** `components/InstagramCollage.tsx`

Two changes only:

1. Import `InstagramPost` from `@/data/instagram-posts` instead of `@/lib/instagram`
2. `post.media_url` → `post.src`, `post.timestamp` → `post.date`

Everything else — `DESKTOP_LAYOUT`, `MOBILE_LAYOUT`, CSS, hover animation, accessibility labels, responsive breakpoints — is unchanged.

---

## Integration — `app/page.tsx`

```tsx
import { instagramPosts } from "@/data/instagram-posts";
import { InstagramCollage } from "@/components/InstagramCollage";

// No longer async (Instagram no longer requires await)
export default function Home() {
  // ...
  return (
    // ...
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
  );
}
```

- Remove `import { getInstagramPosts } from "@/lib/instagram"`
- Remove `const instagramPosts = await getInstagramPosts(9)`
- Remove `async` from the component function signature
- `INSTAGRAM_ACCESS_TOKEN` env var can be removed from `.env.local`

---

## Updating Posts

To add or rotate posts:

1. Download image from Instagram (save as JPG)
2. Add to `public/assets/instagram/` (e.g. `post-01.jpg`)
3. Add an entry to `instagramPosts` in `data/instagram-posts.ts`
4. Commit and deploy

---

## Out of Scope

- Caption overlays
- Lightbox / expanded view
- Any CDN or asset optimization beyond Next.js static serving
- Instagram Graph API migration
