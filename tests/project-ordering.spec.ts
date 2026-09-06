import { expect, test } from "@playwright/test";

test("projects are displayed chronologically by default", async ({ page }) => {
  await page.goto("/projects");

  await expect(page.locator("article h3").first()).toBeVisible();

  const visibleTitles = await page.locator("article h3").evaluateAll((titles) =>
    titles
      .map((title) => {
        const box = title.getBoundingClientRect();
        return {
          text: title.textContent?.trim(),
          top: Math.round(box.top),
          left: Math.round(box.left)
        };
      })
      .sort((a, b) => a.top - b.top || a.left - b.left)
      .slice(0, 4)
      .map((title) => title.text)
  );

  expect(visibleTitles).toEqual([
    "NFL Gravity Metric",
    "NFL OT 4th Down Decision Engine",
    "QB Pocket Clutch Ratings",
    "NBA Win Probability & What-If Analyzer"
  ]);
});

test("projects can be sorted oldest first", async ({ page }) => {
  await page.goto("/projects");

  await page.getByLabel("Sort projects").selectOption("oldest");

  const projectTitles = page.locator("article h3");
  await expect(projectTitles.first()).toHaveText("NBA Team Synergy Analysis");
});

test("expanding one project only moves cards in the same column", async ({ page }) => {
  await page.goto("/projects");

  const positions = await page.locator("article").evaluateAll((cards) =>
    cards
      .map((card, index) => {
        const box = card.getBoundingClientRect();
        return { index, x: box.x, y: box.y };
      })
      .sort((a, b) => a.y - b.y || a.x - b.x)
  );

  const firstPosition = positions[0];
  const neighborPosition = positions.find((position) => position.y === firstPosition.y && position.x > firstPosition.x);
  const lowerSameColumnPosition = positions.find((position) => Math.abs(position.x - firstPosition.x) < 2 && position.y > firstPosition.y);

  expect(neighborPosition).toBeDefined();
  expect(lowerSameColumnPosition).toBeDefined();

  const cards = page.locator("article");
  const firstCard = cards.nth(firstPosition.index);
  const neighborCard = cards.nth(neighborPosition!.index);
  const lowerSameColumnCard = cards.nth(lowerSameColumnPosition!.index);
  const initialNeighborBox = await neighborCard.boundingBox();
  const initialLowerSameColumnBox = await lowerSameColumnCard.boundingBox();

  await firstCard.hover();
  await expect(firstCard.getByText("Python", { exact: true })).toBeVisible();

  const expandedNeighborBox = await neighborCard.boundingBox();
  await expect.poll(async () => (await lowerSameColumnCard.boundingBox())?.y ?? 0).toBeGreaterThan(initialLowerSameColumnBox!.y + 20);
  const expandedLowerSameColumnBox = await lowerSameColumnCard.boundingBox();

  expect(initialNeighborBox).not.toBeNull();
  expect(initialLowerSameColumnBox).not.toBeNull();
  expect(expandedNeighborBox).not.toBeNull();
  expect(expandedLowerSameColumnBox).not.toBeNull();
  expect(Math.abs(expandedNeighborBox!.y - initialNeighborBox!.y)).toBeLessThan(2);
  expect(expandedLowerSameColumnBox!.y).toBeGreaterThan(initialLowerSameColumnBox!.y + 20);
});
