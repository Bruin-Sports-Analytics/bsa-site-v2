# Home Page Redesign Specification

**Date**: 2026-08-18  
**Status**: Planning

## Problem Statement

The current site structure has two separate pages:
- **Landing page** (`/`): Currently only accessible via logo click in the top-left
- **About page** (`/about`): Contains board member profiles, organizational structure, and milestone history

This creates navigation confusion for users who expect the logo to take them to a "home page" that serves as the main landing experience.

## Proposed Solution

Merge the about page and landing page into a unified home page at `/`.

### What Gets Merged

**Keep from current landing page (`/`)**:
- Hero section with BSA logo and call-to-action buttons
- Impact statistics (ScrollCountStats)
- Sports teams pills/links
- Featured projects section
- Outcomes marquee ("Where our members go")
- Upcoming events section
- Final CTA section (Students/Organizations)

**Bring from about page (`/about`)** - to be selected:
- Selected content from the about section that provides context about the organization
- Content needs to be curated to retain key information while removing board-heavy content

**Remove**:
- Board member profiles and cards (Executive Board, Operations, Division Chairs, Advisors)
- Detailed organizational structure diagram
- Numbers/statistics that are redundant with the landing page stats

### What Gets Retired

The `/about` route will be deprecated or removed entirely after the merge.

## Navigation Changes

**Logo behavior**:
- Logo click routes to `/` (the new merged home page)
- This should already be the default behavior, but ensure it's explicit

**Navigation bar**:
- Add "Home" as the first button in the navigation bar
- "Home" links to `/` 
- Position: First item in the nav bar (leftmost after the logo)

## Content Selection from About Page

**Confirmed for retention**:

1. **Mission statement** with blue/gold glow styling
   - Keep as-is from about page
   - Add section header: "At a Glance" or "Who are we?"

2. **Shared Functions section** (modified)
   - Position: Below sports teams section
   - Header: "Cross-team support" (or similar)
   - Keep only: Data Journalism, Research and Consulting, Data Products
   - **Remove**: Club operations entry
   - Optimize layout to fill website width laterally
   - This section provides context about how BSA works beyond just sport-specific projects

**Not included**:
- UCLA campus aerial photo (removed to keep page focused)
- Milestones section (too detailed for landing page)
- Full organizational structure diagram (too detailed)
- Board member profiles (removed entirely)
- Club operations description (internal-facing, not visitor-relevant)

## Page Flow (Final)

The merged home page will follow this structure:

1. **Hero** - BSA branding + primary CTAs
2. **Impact stats** - Quick metrics showing scale/reach (ScrollCountStats)
3. **Mission/Context** - "At a Glance" section with mission statement and blue/gold glow styling
4. **Sports teams** - Overview of the five sport divisions (pills/links)
5. **Shared Functions** - Cross-team support section (Data Journalism, Research and Consulting, Data Products only)
6. **Featured projects** - Recent/notable work
7. **Outcomes** - "Where our members go" marquee with alumni/partner logos
8. **Events** - Upcoming activities
9. **Final CTAs** - Students/Organizations action blocks

## Technical Implementation Notes

- Route: `/` becomes the merged home page
- Component: Modify `/app/page.tsx` to incorporate selected about content
- Styles: Reuse styles from both `app/page.module.css` and `app/about/page.module.css` as needed
- Remove: `/app/about/page.tsx` after migration is complete
- Metadata: Update page title/description if needed

## Implementation Details

### Shared Functions Section

**Source**: `/app/about/page.tsx` lines 53-70 (`sharedFunctions` array)

**Changes to make**:
1. Extract only 3 functions (remove "Club operations"):
   - Data Journalism
   - Research and consulting
   - Data products

2. **Layout optimization**: 
   - Current about page uses vertical list (`styles.functionList`)
   - New home page version should use horizontal/grid layout to fill width
   - Consider 3-column grid on desktop, stack on mobile
   - Adjust card styling to be more compact than about page version

3. **Section header**:
   - Use "Cross-team support" or similar
   - Add eyebrow: "Shared Functions"
   - Brief description: "Shared groups make the work publishable, reusable, and coordinated across the whole club."

**Positioning**:
- Insert after sports teams section (currently line 50-63 in page.tsx)
- Before featured projects section (currently line 65-76)

### Mission Statement Section

**Source**: `/app/about/page.tsx` lines 91-93 (mission statement paragraph)

**Changes to make**:
1. Add section header above the mission statement:
   - Text: "At a Glance" (preferred) or "Who are we?"
   - Use eyebrow styling for consistency
   
2. Keep the mission statement styling with blue/gold glow effects

3. Keep the stats display below it (reuse existing impactStats logic)

**Positioning**:
- After impact stats ScrollCountStats section
- Before sports teams section

## Success Criteria

- [ ] Logo click takes users to a comprehensive home page (not a minimal landing page)
- [ ] "Home" button appears as the first navigation item
- [ ] New home page provides sufficient context about BSA without overwhelming visitors
- [ ] Key about page content is preserved in an accessible location
- [ ] Navigation is intuitive for first-time visitors
- [ ] Page load performance remains acceptable with the additional content
