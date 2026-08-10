# BSA Site Notes — Implementation Task Spec

Source: `/Users/sampath/Downloads/BSA Site Notes.pdf`  
Prepared: August 10, 2026  
Scope: Convert handwritten/design-review notes into concrete website implementation tasks for `bsa-site-v2`.

## Goal

Apply the latest review notes across the BSA website while preserving the current UCLA sports analytics identity. The work should make the homepage more visual, the About page less minimal, team/member data more accurate, Data Journalism articles more native to the site, and mobile layouts more deliberate.

## Priority Order

1. Homepage hero, slideshow, logo treatment, stats layout, and nav CTA.
2. About page cleanup and richer content.
3. Team card/content corrections.
4. People page alumni integration.
5. Data Journalism panel animation and native paper rendering.

## Tasks

### 1. Replace Homepage Instagram Grid With Image Slideshow

Current likely targets:
- `app/page.tsx`
- `app/page.module.css`
- `components/InstagramCollage.tsx`
- `components/InstagramCollage.module.css`
- `public/assets/instagram/*`

Implementation:
- Replace the homepage Instagram post grid/collage with a slideshow of BSA images.
- Use existing Instagram/social image assets as the first source unless better site imagery is added.
- Position the slideshow as a visual layer directly underneath or behind the homepage logo section.
- On laptop/desktop, let the slideshow span the full page width.
- On mobile, stack the slideshow vertically with stable image sizing and no horizontal overflow.
- Make the slideshow visually larger than the existing static grid treatment.
- Add reduced-motion handling: if `prefers-reduced-motion` is enabled, show a static selected frame or non-animated list.

Acceptance criteria:
- Homepage no longer presents the Instagram section as a static post grid.
- Slideshow is visible in the first viewport or immediately below the hero content.
- Desktop layout spans across the page width.
- Mobile layout becomes a clean vertical stack.
- No layout shift from loading images.
- Images have useful alt text.

### 2. Enhance Homepage Logo With Background Glow

Current likely targets:
- `app/page.tsx`
- `app/page.module.css`
- `public/assets/bsa_logo_high_res.jpeg`
- `public/assets/bsa_logo.jpeg`

Implementation:
- Keep the BSA logo in the hero now.
- Use the higher-resolution logo asset where possible.
- Add a restrained background glow around the logo using BSA blue/gold.
- If the source logo needs better quality, run it through an image-enhancement workflow and save the improved asset under `public/assets/` with a clear filename.
- Avoid making the glow a generic orb decoration; it should read as lighting from the logo/slideshow composition.

Acceptance criteria:
- Logo remains a primary homepage visual.
- Logo image is sharp on desktop retina screens.
- Glow is visible in dark and light modes, but does not reduce logo contrast.

### 3. Rework Homepage Counting Stats Layout

Current likely targets:
- `components/ScrollCountStats.tsx`
- `components/ScrollCountStats.module.css`
- `app/page.module.css`
- `data/site.ts` `impactStats`

Implementation:
- Space out the stat text and numbers so the stats span the screen more confidently on desktop.
- Center-align stat numbers and labels.
- On mobile, switch counting stats into square statistic tiles inspired by Bruin AI.
- Mobile layout should use a `2-2-1` formation for five stats.
- Use stable square dimensions or aspect ratios so numbers changing during count animation do not resize the layout.
- Keep `prefers-reduced-motion` behavior intact.

Acceptance criteria:
- Desktop stats read as a broad full-width impact band.
- Mobile stats display as two tiles, two tiles, then one centered tile.
- Count animation remains smooth and does not cause visible layout jitter.
- Long labels wrap cleanly inside their tile.

### 4. Add Phrase-Specific Glow on About Statement

Current likely target:
- `app/about/page.tsx`

Implementation:
- In the About page statement, visually emphasize:
  - `help people understand` with BSA blue glow.
  - `make better decisions` with BSA yellow/gold glow.
- Keep the full sentence readable and natural.
- Use inline spans/classes rather than hard-coded inline styles where practical.

Acceptance criteria:
- Both phrases are visually emphasized exactly as requested.
- Glow remains accessible and readable in light/dark themes.
- The sentence does not wrap awkwardly on mobile.

### 5. Remove Board Title From About Page

Current likely target:
- `app/about/page.tsx`

Implementation:
- Remove the standalone `Board` title from the About page.
- Keep board member sections if they still belong on the page, but avoid a redundant large title.
- If a board heading remains necessary for context, use the requested naming in the board route task below.

Acceptance criteria:
- About page no longer shows a generic standalone `Board` title.

### 6. Enrich About Milestone Cards

Current likely target:
- `app/about/page.tsx`

Implementation:
- Make milestone cards larger with more padding.
- Add richer milestone copy beyond the current single-sentence minimalist text.
- Consider using a timeline/card hybrid with dates/eras if content is available.
- Keep the content factual; do not invent specific dates unless verified.

Acceptance criteria:
- Milestones feel intentionally designed, not sparse.
- Each milestone has enough copy to explain why it matters.
- Cards remain readable in a four-column desktop grid and stacked mobile layout.

### 7. Rework "How We're Organized"

Current likely target:
- `app/about/page.tsx`

Implementation:
- Replace the minimalist sport/function text list with a more designed organization section.
- Show how sport teams, Data Journalism, shared functions, and board/advisors relate.
- Use a layout that feels like a club operating model rather than plain prose.
- Potential treatments: role matrix, org map, split columns, or sport/function bands.

Acceptance criteria:
- The section communicates structure at a glance.
- Sports and shared functions are visually distinct.
- The design has more depth than two text lists.

### 8. Remove "Where Our Members Go" From About Page

Current likely target:
- `app/about/page.tsx`

Implementation:
- Remove the `Where our members go` logo/outcomes section from the About page.
- Keep outcomes/logos where they already appear on the homepage unless separately changed.
- Remove now-unused imports/data from the About page after deleting the section.

Acceptance criteria:
- About page no longer includes the member outcomes logo wall.
- No unused imports remain in `app/about/page.tsx`.

### 9. Change Cards for Every Team

Current likely targets:
- `app/teams/page.tsx`
- `app/teams/*/page.tsx`
- `app/teams/*/consulting/page.tsx`
- `app/teams/*/research/page.tsx`
- `app/teams/tennis/[subdivision]/page.tsx`
- `components/SportCard.tsx`
- `components/SportCard.module.css`
- `components/SportSectorPage.tsx`
- `data/site.ts` `sports`

Implementation:
- Redesign team cards across all team routes so each sport has a more tailored card/content treatment.
- Do not rely on the same generic card shape and copy for every sport.
- Use sport-specific iconography, focus areas, active work, and representative project links.
- Ensure volleyball, tennis, baseball, basketball, and football all receive the updated treatment.

Acceptance criteria:
- Every team page/card reflects sport-specific content.
- Team cards are visually consistent as a system but not identical in substance.
- Mobile cards stack cleanly and keep tap targets large.

### 10. Correct Volleyball Name

Current likely targets:
- `data/site.ts`

Implementation:
- Replace volleyball reference `Anika Soitkar` with `Anika Malapati` where the note applies.
- Audit all occurrences of `Anika Soitkar` before changing:
  - If the person is incorrectly listed on volleyball, change only that assignment.
  - If `Anika Soitkar` is correct elsewhere, do not globally replace.
- Update any related slug/photo/link data only if verified.

Acceptance criteria:
- Volleyball displays `Anika Malapati`, not `Anika Soitkar`.
- No unrelated football/Data Journalism records are accidentally changed.

### 11. Smooth Data Journalism Resources Panel Animation

Current likely targets:
- `components/ViewResourcesButton.tsx`
- `components/ViewResourcesButton.module.css`
- `app/journalism/page.tsx`

Implementation:
- Make the DJ resources dropdown/panel animation smoother.
- Add enter/exit states if needed instead of instantly unmounting on close.
- Preserve keyboard accessibility: Escape closes, focus states are visible, and menu items remain reachable.
- Respect `prefers-reduced-motion`.

Acceptance criteria:
- Opening/closing feels smooth and responsive.
- No flicker, sudden position jump, or focus trap issue.
- Reduced-motion users do not receive unnecessary animation.

### 12. Render Data Journalism Papers Natively Instead of PDF Iframes

Current likely targets:
- `app/journalism/[slug]/page.tsx`
- `app/journalism/[slug]/page.module.css`
- `data/journalism.ts`
- `scripts/upload-dj-archive.mjs`
- Possible new content pipeline under `data/` or `content/`

Implementation:
- Replace iframe PDF embedding on Data Journalism article pages with native on-site article rendering.
- Keep the external PDF link as a secondary `Open original PDF` action.
- Decide on a content source format for native articles:
  - Preferred: structured Markdown/MDX or serialized article content in repo.
  - Acceptable interim: article metadata plus manually transcribed article body for priority papers.
- Support common article elements: heading hierarchy, paragraphs, figures/images, captions, tables, callouts, author/date/sport metadata, and links.
- Avoid rendering entire PDFs via iframe as the primary reading experience.

Acceptance criteria:
- Data Journalism article pages show readable native HTML content.
- PDF iframe is removed or no longer primary.
- Original PDF remains available via link.
- Article pages are responsive, accessible, and indexable.

### 13. Rename Board Page Heading

Current likely targets:
- `app/people/board/page.tsx`
- Possibly `app/about/page.tsx`

Implementation:
- Change the board page title to `Our Board, '26-27`.
- Use the exact apostrophe style consistently with the site's existing typography. If curly quotes are already used in this file, `Our Board, ’26-27` is acceptable; otherwise keep ASCII: `Our Board, '26-27`.

Acceptance criteria:
- Board page displays the requested title.
- Navigation labels can remain `Board` unless product direction says otherwise.

### 14. Rename Tennis Subdivision Roles

Current likely targets:
- `data/site.ts` `sports` tennis subdivisions
- `app/teams/tennis/page.tsx`
- `app/teams/tennis/[subdivision]/page.tsx`

Implementation:
- Update tennis subdivisions/roles to use labels like:
  - `Scouting - role`
  - `Tagging - role`
  - Additional tennis roles as confirmed by content owner.
- If these labels are meant as visible cards, adjust UI copy to show role descriptions.
- Avoid breaking existing route slugs. If display labels change, keep backward-compatible slug mapping or redirects.

Acceptance criteria:
- Tennis page shows role-based labels for scouting/tagging.
- Existing tennis subdivision links do not 404.

Open content question:
- Confirm the full set of tennis role labels beyond `Scouting` and `Tagging`.

### 15. Move Alumni to Bottom of Current Members Page

Current likely targets:
- `app/people/members/page.tsx`
- `app/people/alumni/page.tsx`
- `components/PeopleSections.tsx`
- `data/site.ts` member/alumni data
- `components/Navigation.tsx`

Implementation:
- Add an Alumni section at the bottom of the Current Members page.
- Link alumni names to their LinkedIn profiles when available.
- Prefer moving alumni into shared typed data instead of keeping a hard-coded list inside `app/people/alumni/page.tsx`.
- Decide whether `/people/alumni` remains as a standalone route:
  - Option A: Keep it as a direct alumni page using the same data.
  - Option B: Redirect it to `/people/members#alumni`.
- Update People nav/menu only if the standalone alumni page is removed.

Acceptance criteria:
- Current Members page ends with an alumni section.
- Alumni names with LinkedIn URLs are clickable.
- Alumni links open safely with `target="_blank"` and `rel="noopener noreferrer"` when external.
- Alumni without verified LinkedIn URLs render as plain names.

Open content question:
- Collect LinkedIn URLs for alumni before linking names.

### 16. Replace Desktop Dark Mode Toggle With Partner CTA

Current likely targets:
- `components/Navigation.tsx`
- `components/Navigation.module.css`
- `components/ThemeToggle.tsx`

Implementation:
- Remove the desktop dark/light mode toggle from the primary nav area.
- Put `Partner With Us` in its place as the visible CTA.
- Keep theme switching available only if still required, such as in the mobile menu, footer, or hidden settings affordance.
- Ensure there is not a duplicate `Partner With Us` CTA in the same desktop nav cluster after the swap.

Acceptance criteria:
- Desktop nav shows `Partner With Us` where the theme toggle currently appears.
- Desktop nav does not show both the old theme toggle and duplicate CTA crowding the right side.
- Mobile navigation remains usable and includes the partner link.

### 17. Add More Content to Sparse Sections

Current likely targets:
- `app/about/page.tsx`
- `app/join/page.tsx`
- `app/teams/*/page.tsx`
- `data/site.ts`

Implementation:
- Audit sections that read sparse or underwritten after the visual changes.
- Add more concrete BSA-specific content where the notes imply “Add some more to these.”
- Prioritize factual details: project examples, team responsibilities, workflows, deliverables, and member outcomes.
- Avoid generic filler copy.

Acceptance criteria:
- Sparse sections have enough detail to stand on their own.
- New copy names specific teams, work types, or processes.
- No fabricated claims, partners, dates, or metrics.

## Validation Checklist

- Run `npm run lint` or the repo's available static check.
- Run the build command if available and practical.
- Manually verify responsive behavior at desktop, tablet, and mobile widths.
- Check homepage stats mobile `2-2-1` layout.
- Check About page after removals for awkward empty spacing.
- Check all team pages and tennis subdivision links.
- Check Data Journalism article route keyboard/focus behavior after native rendering.
- Verify no unused imports remain.

## Content Dependencies

- Enhanced BSA logo asset, if the current high-res logo is not sufficient.
- Preferred slideshow image set and ordering.
- Correct volleyball member/person data for `Anika Malapati`.
- Full tennis role taxonomy beyond scouting/tagging.
- Alumni LinkedIn URLs.
- Native article content source for Data Journalism papers.

