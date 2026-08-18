# Footer and Scorecard Updates Specification

**Date**: 2026-08-18  
**Status**: Planning

## Overview

Two separate updates to improve the site's footer and homepage mission statement section.

---

## 1. Footer Updates

### Add GitHub Link

**Location**: Footer component (`/components/Footer.tsx`)

**Current state**:
- Footer displays social links: Email, Instagram, LinkedIn, Slack
- Icons are pulled from `socialLinks` array in `/data/site.ts`
- Icon mapping exists in `Footer.tsx` with fallback to Github icon

**Changes needed**:

1. **Add GitHub to social links** (`/data/site.ts`):
   ```typescript
   export const socialLinks = [
     { label: "Email", href: "mailto:bruinsportsanalytics@gmail.com" },
     { label: "Instagram", href: "https://www.instagram.com/bruinsportsanalytics/" },
     { label: "LinkedIn", href: "https://www.linkedin.com/company/bruin-sports-analytics/" },
     { label: "GitHub", href: "https://github.com/BruinSportsAnalytics" }, // ADD THIS
     { label: "Slack", href: "https://slack.com/" }
   ];
   ```

2. **Update icon mapping** (`/components/Footer.tsx`):
   - Add `GitHub: Github` to the `iconMap` object
   - Current iconMap already has `Github` imported but only uses it as fallback
   - Explicit mapping ensures correct icon appears

**Notes**:
- GitHub URL needs to be confirmed: `https://github.com/BruinSportsAnalytics` (verify this is correct)
- Icon already imported from lucide-react, just needs explicit mapping

### Adjust "Stay Connected" Sidebar

**Location**: Sidebar component

**Current state**:
- has socials and stay connected
- Layout is vertical

**Changes needed**:

1. **Add new button** for github

---

## 2. Scorecard Section Update

### Change Section Title

**Location**: Homepage (`/app/page.tsx`) - Mission statement section from about page

**Current context**:
- The about page has a mission statement: "We build models, tools, dashboards, and writing that help people understand games more deeply and make better decisions from sports data."
- This section should be retained in the merged home page (per SPEC-home-page-redesign.md)

**Changes needed**:

1. **Add section header** above mission statement:
   - Text: "At a Glance" (not "Bruin Sports Analytics")
   - Could also be: "Who are we?" or similar alternative
   - Should use consistent section styling (eyebrow or section-title class)

2. **Update home page structure**:
   ```tsx
   <section className="section">
     <div className="container">
       <span className="eyebrow">At a Glance</span>
       {/* OR */}
       <h2 className="section-title">At a Glance</h2>
       
       <p className={styles.missionStatement}>
         We build models, tools, dashboards, and writing that...
       </p>
       
       {/* Stats display */}
     </div>
   </section>
   ```

**Visual hierarchy**:
- "At a Glance" should be visually smaller/lighter than the main hero title
- Consistent with other section headers on the page
- Could use the existing "eyebrow" treatment (small caps, muted color)

**Related to**:
- SPEC-home-page-redesign.md - this section is being moved from about page to home page
- Implementation of this change depends on the home page redesign being completed first

---

## Implementation Order

1. **Footer updates** (GitHub + Stay Connected) - can be done immediately, independent of home page redesign
2. **Scorecard title update** - should be done as part of the home page redesign implementation

## Success Criteria

- [ ] GitHub icon appears in footer and links to BSA GitHub organization
- [ ] "Stay Connected" button/link appears in footer with appropriate destination
- [ ] Footer layout remains clean and doesn't feel overcrowded
- [ ] Mission statement section has "At a Glance" header when moved to home page
- [ ] Section hierarchy is clear and consistent with other page sections

## Technical Notes

**Files to modify**:
1. `/data/site.ts` - add GitHub to socialLinks array
2. `/components/Footer.tsx` - add GitHub to iconMap, add Stay Connected button
3. `/components/Footer.module.css` - add styles for Stay Connected button
4. `/app/page.tsx` - add "At a Glance" header (during home page redesign)

**Dependencies**:
- Scorecard title change depends on home page redesign being completed
- Footer changes are independent and can be implemented immediately
