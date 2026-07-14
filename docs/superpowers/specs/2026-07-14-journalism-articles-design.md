# Journalism Articles — Design Spec
Date: 2026-07-14

## Goal

Add 3 journalism article cards to the currently-empty journalism page (`/journalism`), using a Medium-style light card aesthetic that contrasts against the site's dark background.

## Data Layer

**New file:** `data/journalism.ts`

```ts
export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;       // display string, e.g. "Mar 27"
  readTime: number;   // minutes
  views: number;
  likes: number;
  thumbnail?: string; // path under /public, omit for placeholder
  href?: string;      // link target, wired up later
};

export const articles: JournalismArticle[] = [ /* 3 articles below */ ];
```

**Articles to seed:**

| # | Title | Authors | Date | Read | Views | Likes |
|---|-------|---------|------|------|-------|-------|
| 1 | Are the "Uncs" Holding Back the NBA? | Yuri Jung, Evana Sharma, Chloe Lee | Mar 27 | 7 | 74 | 1 |
| 2 | Which Quarterbacks have been Historically Great against the Blitz? | Devon Yu, Nathan Yee, Ethan Chan, Evan Mock | Mar 27 | 12 | 27 | 0 |
| 3 | The Credit Goes to the Wrong People | Van Avanesian, Ricky Cai, Jayden Kim, Justin Herr | Mar 27 | 10 | 85 | 3 |

`thumbnail` and `href` are omitted for now on all three.

## Component: `ArticleCard`

**Files:** `components/ArticleCard.tsx` + `components/ArticleCard.module.css`

### Layout (horizontal, Medium-style)

```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────┐   Mar 27  ·  7 min read              ···  │
│  │              │                                            │
│  │  thumbnail   │   Are the "Uncs" Holding Back             │
│  │  placeholder │   the NBA?                                 │
│  │              │                                            │
│  └──────────────┘   By Yuri Jung, Evana Sharma, and Chloe Lee│
│                     ─────────────────────────────────────────│
│                     74 views                          ♡ 1   │
└─────────────────────────────────────────────────────────────┘
```

### Styling

- **Card background:** warm off-white (`#f5f3f0`), rounded corners (`14px`), subtle drop shadow
- **Thumbnail:** fixed `180×130px`, gray placeholder (`#ddd`), rounded corners, left-aligned, vertically centered
- **Title:** large bold dark text, 2-line clamp, serif or heavy sans weight
- **Authors:** `"By ..."` formatted from `authors` array, small muted gray
- **Meta row (top):** date + read time on the left (small muted), `···` MoreHorizontal icon on the right
- **Footer:** views count left, Heart icon + likes count right (both small muted)
- Card is not interactive for now (no hover state, no link wrapping) — `href` wiring deferred

### Author formatting

- 1 author: `"By Alice"`
- 2 authors: `"By Alice and Bob"`
- 3+ authors: `"By Alice, Bob, and Carol"`

## Page: `app/journalism/page.tsx`

Keeps the existing `<section className="page-hero">` hero intact. Adds below it:

```tsx
<section className={styles.articles}>
  <div className="container">
    {articles.map((article, i) => (
      <ArticleCard key={i} article={article} />
    ))}
  </div>
</section>
```

A dedicated `app/journalism/page.module.css` handles the section padding and card gap (`flex-direction: column`, `gap: 24px`).

No "Articles" section label — keep it clean.

## Out of Scope

- Article links / routing (deferred)
- Real thumbnail images (placeholders used now)
- Interactive like/view counts
- Three-dot menu functionality
