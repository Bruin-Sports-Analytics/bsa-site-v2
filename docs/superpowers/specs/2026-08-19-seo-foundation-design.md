---
name: seo-foundation
description: SEO foundation improvements - sitemap, robots.txt, metadata, JSON-LD
metadata:
  type: project
  status: approved
  prereqs: []
---

# SEO Foundation Implementation

## Overview
Add technical SEO basics to improve search visibility for Bruin Sports Analytics website, targeting UCLA students (recruitment) and West Coast sports organizations (partnerships).

## Scope
- Sitemap.xml generation
- robots.txt
- Enhanced page metadata (descriptions)
- JSON-LD Organization schema

---

## 1. Sitemap Generation

**File**: `app/sitemap.ts`

Use Next.js built-in sitemap API to generate dynamic sitemap including:
- Static pages: `/`, `/teams`, `/projects`, `/people/board`, `/people/members`, `/events`, `/journalism`, `/join`, `/partner`, `/faq`
- Dynamic project pages: All visible projects from `data/site.ts`
- Dynamic team pages: All sports (baseball, basketball, volleyball, football, tennis)
- Exclude: `/people/alumni`, hidden/private projects

**Priority tiers**:
- Homepage: 1.0
- Main sections: 0.9
- Team pages: 0.8
- Project/journalism detail: 0.7

**Change frequency**:
- Static pages: weekly
- Dynamic content: monthly

---

## 2. Robots.txt

**File**: `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://bruinsportsanalytics.org/sitemap.xml
```

---

## 3. Enhanced Metadata

**Root layout** (`app/layout.tsx`):
- Add canonical URL: `https://bruinsportsanalytics.org`
- Add robots metadata: `index, follow`

**Main pages**: Add unique descriptions (150-160 chars):
| Page | Description |
|------|-------------|
| `/teams` | UCLA's sports analytics teams. Research, consulting, and dashboards across baseball, basketball, volleyball, football, and tennis. |
| `/projects` | Sports analytics projects from Bruin Sports Analytics. Research papers, consulting reports, and interactive dashboards. |
| `/join` | Join Bruin Sports Analytics. Apply for our fall recruitment cycle as an analyst, engineer, writer, or designer. |
| `/journalism` | Data-driven sports journalism by Bruin Sports Analytics. Analysis, visualizations, and storytelling across major sports. |
| `/partner` | Partner with Bruin Sports Analytics for sports analytics consulting, research, and data-driven insights. UCLA students. |
| `/events` | Upcoming events from Bruin Sports Analytics. Workshops, info sessions, and recruitment events. |
| `/people/board` | Meet the leadership of Bruin Sports Analytics. President, vice presidents, and team chairs. |
| `/people/members` | Current members of Bruin Sports Analytics. Analysts, engineers, and writers across all sports teams. |

**Dynamic pages**: Expand `generateMetadata()` to include descriptions from data:
- Project pages: Use `project.summary`
- Team pages: Use `sport.description`

---

## 4. JSON-LD Organization Schema

**File**: `app/layout.tsx`

Add to `<head>`:

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

---

## Verification

1. Deploy to Vercel
2. Check Search Console:
   - Verify sitemap.xml is found
   - Run URL inspection on key pages
   - Confirm structured data is valid
3. Vercel Analytics: Monitor organic search traffic after 2-4 weeks

---

## Files to Modify

- `app/sitemap.ts` (new)
- `public/robots.txt` (new)
- `app/layout.tsx` (modify)
- `app/teams/page.tsx` (modify)
- `app/projects/page.tsx` (modify)
- `app/journalism/page.tsx` (modify)
- `app/join/page.tsx` (modify)
- `app/partner/page.tsx` (modify)
- `app/events/page.tsx` (modify)
- `app/people/board/page.tsx` (modify)
- `app/people/members/page.tsx` (new or modify)
- `app/teams/[sport]/page.tsx` (modify - dynamic pages)
- `app/projects/[slug]/page.tsx` (modify - dynamic pages)
- `app/journalism/[slug]/page.tsx` (modify - dynamic pages)