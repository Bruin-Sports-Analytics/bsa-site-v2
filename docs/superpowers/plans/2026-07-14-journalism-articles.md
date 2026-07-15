# Journalism Articles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 Medium-style article cards to the journalism page using a data-driven approach.

**Architecture:** New `data/journalism.ts` holds the `JournalismArticle` type and article data. A new `ArticleCard` component renders individual cards in a light/warm card style. The journalism page renders the list below the existing hero section.

**Tech Stack:** Next.js (App Router), React, CSS Modules, TypeScript, lucide-react

## Global Constraints

- No dependencies beyond what's already installed (lucide-react, next, react)
- Follow existing file naming: `ComponentName.tsx` + `ComponentName.module.css`
- Use `"use client"` only if client-side interactivity is needed (not needed here)
- All paths are relative to `/Users/sampath/Coding/bsa-site-v2`

---

### Task 1: Data layer

**Files:**
- Create: `data/journalism.ts`
- Modify: `lib/utils.ts` (add `formatAuthors` helper)

**Interfaces:**
- Produces: `JournalismArticle` type, `articles` array exported from `data/journalism.ts`
- Produces: `formatAuthors(authors: string[]): string` exported from `lib/utils.ts`

- [ ] **Step 1: Create `data/journalism.ts`**

```ts
export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;
  readTime: number;
  views: number;
  likes: number;
  thumbnail?: string;
  href?: string;
};

export const articles: JournalismArticle[] = [
  {
    title: 'Are the "Uncs" Holding Back the NBA?',
    authors: ["Yuri Jung", "Evana Sharma", "Chloe Lee"],
    date: "Mar 27",
    readTime: 7,
    views: 74,
    likes: 1,
  },
  {
    title: "Which Quarterbacks have been Historically Great against the Blitz?",
    authors: ["Devon Yu", "Nathan Yee", "Ethan Chan", "Evan Mock"],
    date: "Mar 27",
    readTime: 12,
    views: 27,
    likes: 0,
  },
  {
    title: "The Credit Goes to the Wrong People",
    authors: ["Van Avanesian", "Ricky Cai", "Jayden Kim", "Justin Herr"],
    date: "Mar 27",
    readTime: 10,
    views: 85,
    likes: 3,
  },
];
```

- [ ] **Step 2: Add `formatAuthors` to `lib/utils.ts`**

Append to the end of `lib/utils.ts`:

```ts
export function formatAuthors(authors: string[]): string {
  if (authors.length === 1) return `By ${authors[0]}`;
  if (authors.length === 2) return `By ${authors[0]} and ${authors[1]}`;
  const last = authors[authors.length - 1];
  return `By ${authors.slice(0, -1).join(", ")}, and ${last}`;
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add data/journalism.ts lib/utils.ts
git commit -m "feat: add journalism article data and formatAuthors utility"
```

---

### Task 2: ArticleCard component

**Files:**
- Create: `components/ArticleCard.tsx`
- Create: `components/ArticleCard.module.css`

**Interfaces:**
- Consumes: `JournalismArticle` from `data/journalism.ts`, `formatAuthors` from `lib/utils.ts`
- Produces: `ArticleCard` React component, props `{ article: JournalismArticle }`

- [ ] **Step 1: Create `components/ArticleCard.module.css`**

```css
.card {
  display: flex;
  gap: 20px;
  align-items: center;
  background: #f5f3f0;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.22);
  padding: 20px;
}

.thumbnail {
  flex-shrink: 0;
  width: 180px;
  height: 130px;
  background: #d9d6d2;
  border-radius: 8px;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b6b6b;
  font-size: 13px;
}

.metaLeft {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #6b6b6b;
  display: inline-block;
}

.menuBtn {
  background: none;
  border: none;
  cursor: pointer;
  color: #6b6b6b;
  padding: 2px;
  display: flex;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #111;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.authors {
  margin: 0;
  font-size: 13px;
  color: #6b6b6b;
}

.divider {
  border: none;
  border-top: 1px solid #e0ddd9;
  margin: 4px 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #6b6b6b;
}

.footerRight {
  display: flex;
  align-items: center;
  gap: 4px;
}
```

- [ ] **Step 2: Create `components/ArticleCard.tsx`**

```tsx
import { MoreHorizontal, Heart } from "lucide-react";
import type { JournalismArticle } from "@/data/journalism";
import { formatAuthors } from "@/lib/utils";
import styles from "./ArticleCard.module.css";

export function ArticleCard({ article }: { article: JournalismArticle }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumbnail} aria-hidden />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.metaLeft}>
            <span>{article.date}</span>
            <span className={styles.dot} aria-hidden />
            <span>{article.readTime} min read</span>
          </span>
          <button className={styles.menuBtn} aria-label="More options">
            <MoreHorizontal size={18} />
          </button>
        </div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.authors}>{formatAuthors(article.authors)}</p>
        <hr className={styles.divider} />
        <div className={styles.footer}>
          <span>{article.views} views</span>
          {article.likes > 0 && (
            <span className={styles.footerRight}>
              <Heart size={14} />
              {article.likes}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/ArticleCard.tsx components/ArticleCard.module.css
git commit -m "feat: add ArticleCard component with Medium-style layout"
```

---

### Task 3: Wire up the journalism page

**Files:**
- Modify: `app/journalism/page.tsx`
- Create: `app/journalism/page.module.css`

**Interfaces:**
- Consumes: `articles` from `data/journalism.ts`, `ArticleCard` from `components/ArticleCard.tsx`

- [ ] **Step 1: Create `app/journalism/page.module.css`**

```css
.articles {
  padding: 48px 0 80px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 760px;
}
```

- [ ] **Step 2: Update `app/journalism/page.tsx`**

Replace the full file content with:

```tsx
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/journalism";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journalism"
};

export default function JournalismPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Journalism</h1>
        </div>
      </section>
      <section className={styles.articles}>
        <div className="container">
          <div className={styles.list}>
            {articles.map((article, i) => (
              <ArticleCard key={i} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Start dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:3000/journalism` and confirm:
- Hero "Journalism" heading renders
- 3 article cards appear below the hero
- Each card has a gray thumbnail placeholder on the left
- Title, authors, date, read time, views, and likes render correctly
- Cards have warm off-white background contrasting against the dark site

- [ ] **Step 5: Commit**

```bash
git add app/journalism/page.tsx app/journalism/page.module.css
git commit -m "feat: render journalism article cards on journalism page"
```
