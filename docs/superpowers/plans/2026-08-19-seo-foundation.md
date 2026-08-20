# SEO Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add technical SEO basics (sitemap, robots.txt, metadata, JSON-LD) to improve search visibility for Bruin Sports Analytics website.

**Architecture:** Use Next.js built-in APIs for sitemap generation, add static files for robots.txt, enhance existing metadata exports, add JSON-LD schema to layout. All changes are invisible to website visitors.

**Tech Stack:** Next.js 14, TypeScript, Next.js Sitemap API

## Global Constraints

- All changes must be invisible to website visitors
- Meta descriptions only appear in search results/social previews
- No user-facing content modifications
- Use existing project data from `data/site.ts`
- Support both static and dynamic pages

---

## File Structure

### New Files
- `app/sitemap.ts` - Dynamic sitemap generation
- `public/robots.txt` - Robots.txt file

### Modified Files
- `app/layout.tsx` - Add canonical URL, robots metadata, JSON-LD schema
- `app/teams/page.tsx` - Add metadata description
- `app/projects/page.tsx` - Add metadata description  
- `app/journalism/page.tsx` - Add metadata description
- `app/join/page.tsx` - Add metadata description
- `app/partner/page.tsx` - Add metadata description
- `app/events/page.tsx` - Add metadata description
- `app/faq/page.tsx` - Add metadata description
- `app/people/board/page.tsx` - Add metadata description
- `app/people/members/page.tsx` - Add metadata description
- `app/about/page.tsx` - Add metadata description
- `app/teams/[sport]/page.tsx` - Update `generateMetadata()` to include description
- `app/projects/[slug]/page.tsx` - Update `generateMetadata()` to include description
- `app/journalism/[slug]/page.tsx` - Update `generateMetadata()` to include description

---

### Task 1: Create sitemap generator

**Files:**
- Create: `app/sitemap.ts`

**Interfaces:**
- Consumes: `data/site.ts` for projects and sports data
- Produces: Sitemap.xml accessible at `/sitemap.xml`

- [ ] **Step 1: Create sitemap.ts file structure**

```typescript
import { MetadataRoute } from 'next';
import { projects, sports } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bruinsportsanalytics.org';
  
  const staticPages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/teams', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/people/board', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/people/members', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/events', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/journalism', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/join', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/partner', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const projectPages = projects
    .filter(project => project.visibility !== 'hidden' && project.visibility !== 'private')
    .map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: project.lastUpdated,
    }));

  const teamPages = sports.map(sport => ({
    url: `${baseUrl}/teams/${sport.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const allUrls = [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    ...projectPages,
    ...teamPages,
  ];

  return allUrls;
}
```

- [ ] **Step 2: Add static URLs**

```typescript
const staticPages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/teams', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/projects', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/people/board', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/people/members', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/events', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/journalism', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/join', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/partner', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
];
```

- [ ] **Step 3: Add dynamic project pages**

```typescript
const projectPages = projects
  .filter(project => project.visibility !== 'hidden' && project.visibility !== 'private')
  .map(project => ({
    url: `/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: project.lastUpdated,
  }));
```

- [ ] **Step 4: Add dynamic team pages**

```typescript
const teamPages = sports.map(sport => ({
  url: `/teams/${sport.slug}`,
  priority: 0.8,
  changeFrequency: 'monthly' as const,
}));
```

- [ ] **Step 5: Combine all URLs and verify**

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bruinsportsanalytics.org';
  
  const staticPages = [
    // ... static pages from Step 2
  ];
  
  const projectPages = projects
    .filter(project => project.visibility !== 'hidden' && project.visibility !== 'private')
    .map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: project.lastUpdated,
    }));

  const teamPages = sports.map(sport => ({
    url: `${baseUrl}/teams/${sport.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const allUrls = [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    ...projectPages,
    ...teamPages,
  ];

  return allUrls;
}
```

- [ ] **Step 6: Test sitemap generation**

Run: `npx next build`
Expected: Build succeeds with sitemap generation

- [ ] **Step 7: Commit**

```bash
git add app/sitemap.ts
git commit -m "feat: add dynamic sitemap generation"
```

---

### Task 2: Create robots.txt

**Files:**
- Create: `public/robots.txt`

**Interfaces:**
- Produces: Robots.txt accessible at `/robots.txt`

- [ ] **Step 1: Create robots.txt file**

```txt
User-agent: *
Allow: /

Sitemap: https://bruinsportsanalytics.org/sitemap.xml
```

- [ ] **Step 2: Verify robots.txt is accessible**

Check: File should be at `/Users/sampath/Coding/bsa-site-v2/public/robots.txt`

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt
git commit -m "feat: add robots.txt"
```

---

### Task 3: Update root layout with global metadata

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: Canonical URL, robots metadata, JSON-LD schema in all page `<head>`

- [ ] **Step 1: Update metadata object in layout.tsx**

Current: Line 39-51 in layout.tsx
Target: Add robots and canonical

```typescript
export const metadata: Metadata = {
  title: {
    default: "Bruin Sports Analytics",
    template: "%s | Bruin Sports Analytics"
  },
  description: "UCLA's student-run sports analytics organization. Where sports meet data.",
  icons: { icon: "/assets/bsa_logo.ico" },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bruinsportsanalytics.org",
  },
  openGraph: {
    title: "Bruin Sports Analytics",
    description: "Where sports meet data.",
    type: "website"
  }
};
```

- [ ] **Step 2: Add JSON-LD schema script after theme script**

After line 72 (the `<script dangerouslySetInnerHTML={{ __html: themeScript }} />`):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bruin Sports Analytics",
      "url": "https://bruinsportsanalytics.org",
      "logo": "https://bruinsportsanalytics.org/assets/bsa_logo.jpeg",
      "description": "UCLA's student-run sports analytics organization",
      "location": {
        "@type": "Place",
        "name": "UCLA",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA"
        }
      },
      "sameAs": [
        "https://www.instagram.com/bruinsportsanalytics/",
        "https://www.linkedin.com/company/bruin-sports-analytics/",
        "https://github.com/Bruin-Sports-Analytics"
      ]
    })
  }}
/>
```

- [ ] **Step 3: Verify changes compile**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add canonical URL, robots metadata, and JSON-LD schema"
```

---

### Task 4: Add metadata descriptions to main pages

**Files:**
- Modify: `app/teams/page.tsx`
- Modify: `app/projects/page.tsx`
- Modify: `app/journalism/page.tsx`
- Modify: `app/join/page.tsx`
- Modify: `app/partner/page.tsx`
- Modify: `app/events/page.tsx`
- Modify: `app/faq/page.tsx`
- Modify: `app/people/board/page.tsx`
- Modify: `app/people/members/page.tsx`
- Modify: `app/about/page.tsx`

**Interfaces:**
- Consumes: Page metadata from spec
- Produces: Enhanced metadata with descriptions

- [ ] **Step 1: Update teams page metadata**

```typescript
export const metadata: Metadata = {
  title: "Teams",
  description: "UCLA's sports analytics teams. Research, consulting, and dashboards across baseball, basketball, volleyball, football, and tennis."
};
```

- [ ] **Step 2: Update projects page metadata**

```typescript
export const metadata: Metadata = {
  title: "Projects",
  description: "Sports analytics projects from Bruin Sports Analytics. Research papers, consulting reports, and interactive dashboards."
};
```

- [ ] **Step 3: Update journalism page metadata**

```typescript
export const metadata: Metadata = {
  title: "Journalism",
  description: "Data-driven sports journalism by Bruin Sports Analytics. Analysis, visualizations, and storytelling across major sports."
};
```

- [ ] **Step 4: Update join page metadata**

```typescript
export const metadata: Metadata = {
  title: "Join",
  description: "Join Bruin Sports Analytics. Apply for our fall recruitment cycle as an analyst, engineer, writer, or designer."
};
```

- [ ] **Step 5: Update partner page metadata**

```typescript
export const metadata: Metadata = {
  title: "Partner",
  description: "Partner with Bruin Sports Analytics for sports analytics consulting, research, and data-driven insights. UCLA students."
};
```

- [ ] **Step 6: Update events page metadata**

```typescript
export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from Bruin Sports Analytics. Workshops, info sessions, and recruitment events."
};
```

- [ ] **Step 7: Update FAQ page metadata**

```typescript
export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Bruin Sports Analytics. Membership, recruitment, partnerships, and events."
};
```

- [ ] **Step 8: Update people/board page metadata**

```typescript
export const metadata: Metadata = {
  title: "Board",
  description: "Meet the leadership of Bruin Sports Analytics. President, vice presidents, and team chairs."
};
```

- [ ] **Step 9: Update people/members page metadata**

```typescript
export const metadata: Metadata = {
  title: "Members",
  description: "Current members of Bruin Sports Analytics. Analysts, engineers, and writers across all sports teams."
};
```

- [ ] **Step 10: Update about page metadata**

```typescript
export const metadata: Metadata = {
  title: "About",
  description: "About Bruin Sports Analytics. UCLA's student-run sports analytics organization bridging sports and data."
};
```

- [ ] **Step 11: Verify all pages compile**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 12: Commit**

```bash
git add app/teams/page.tsx app/projects/page.tsx app/journalism/page.tsx app/join/page.tsx app/partner/page.tsx app/events/page.tsx app/faq/page.tsx app/people/board/page.tsx app/people/members/page.tsx app/about/page.tsx
git commit -m "feat: add metadata descriptions to main pages"
```

---

### Task 5: Update dynamic page metadata functions

**Files:**
- Modify: `app/projects/[slug]/page.tsx`
- Modify: `app/teams/[sport]/page.tsx`
- Modify: `app/journalism/[slug]/page.tsx`

**Interfaces:**
- Consumes: `generateMetadata` function in each dynamic page
- Produces: Enhanced metadata with descriptions from data

- [ ] **Step 1: Update project detail page metadata**

Current `generateMetadata` (lines 16-19):

```typescript
export function generateMetadata({ params }: Props): Metadata {
  const project = visibleProjectDetail(params.slug);
  return { title: project?.title ?? "Project" };
}
```

Target:

```typescript
export function generateMetadata({ params }: Props): Metadata {
  const project = visibleProjectDetail(params.slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.title,
    description: project.summary
  };
}
```

- [ ] **Step 2: Update team detail page metadata**

First, check if `app/teams/[sport]/page.tsx` exists - if not, we need to create it. Let me check current structure:

```bash
find /Users/sampath/Coding/bsa-site-v2/app/teams -name "page.tsx"
```

There are individual sport pages (`/teams/baseball/page.tsx`, etc), not a dynamic route. We'll need to update each sport page individually or create a dynamic route. For now, update each sport page individually.

- [ ] **Step 3: Update journalism detail page metadata**

Check `app/journalism/[slug]/page.tsx` exists, then update its `generateMetadata` function similar to projects.

- [ ] **Step 4: Verify dynamic pages compile**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 5: Commit**

```bash
git add app/projects/[slug]/page.tsx
# Add sport pages once updated
# Add journalism page once updated
git commit -m "feat: add descriptions to dynamic page metadata"
```

---

### Task 6: Final verification

**Files:**
- All modified files

**Interfaces:**
- All previous tasks

- [ ] **Step 1: Run full build**

```bash
npx next build
```

Expected: Build succeeds with sitemap generation

- [ ] **Step 2: Check sitemap output**

```bash
npm run dev &
sleep 3
curl -s http://localhost:3000/sitemap.xml | head -50
```

Expected: XML sitemap with URLs

- [ ] **Step 3: Check robots.txt**

```bash
curl -s http://localhost:3000/robots.txt
```

Expected: Robots.txt content

- [ ] **Step 4: Check a page's metadata**

```bash
curl -s http://localhost:3000/teams | grep -A 5 "<title>" | head -10
```

Expected: Contains title and meta description

- [ ] **Step 5: Final commit with all changes**

```bash
git add -A
git commit -m "feat: complete SEO foundation implementation"
```

---

**Plan complete and saved to `docs/superpowers/plans/2026-08-19-seo-foundation.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**