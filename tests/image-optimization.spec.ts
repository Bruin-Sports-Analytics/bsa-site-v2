import { expect, type Locator, test } from "@playwright/test";

async function expectLoadedImages(locator: Locator) {
  const count = await locator.count();
  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index++) {
    await expect(locator.nth(index)).toHaveJSProperty("complete", true);
    const naturalWidth = await locator.nth(index).evaluate((img: HTMLImageElement) => img.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  }
}

test("journalism index loads source thumbnails without Vercel transformations", async ({ page }) => {
  const optimizerRequests: string[] = [];
  page.on("request", (request) => {
    if (new URL(request.url()).pathname === "/_next/image") optimizerRequests.push(request.url());
  });
  await page.goto("/journalism");

  const articleImages = page.locator('article img');
  await expect(articleImages).toHaveCount(24);
  await expect(articleImages.first()).toBeVisible();

  const rawSupabaseImages = page.locator('article img[src^="https://hfpruaivskrkweobtvcf.supabase.co"]');
  await expect(rawSupabaseImages).toHaveCount(24);

  const eagerImages = page.locator('article img[fetchpriority="high"]');
  await expect(eagerImages).toHaveCount(2);
  await expectLoadedImages(eagerImages);
  expect(optimizerRequests).toEqual([]);
});

test("journalism article figures load directly without Vercel transformations", async ({ page }) => {
  await page.goto("/journalism/are-the-uncs-holding-back-the-nba");

  await expect(page.locator('img[src^="/_next/image"], img[srcset*="/_next/image"]')).toHaveCount(0);
  const figureImages = page.locator('figure img');
  await expect(figureImages.first()).toBeVisible();
  await expectLoadedImages(figureImages.first());
});
