import { expect, test } from '@playwright/test';

const viewports = { phone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } };
const colorSchemes = ['dark', 'light'] as const;

for (const [device, viewport] of Object.entries(viewports)) {
  for (const colorScheme of colorSchemes) {
    test(`${device} ${colorScheme}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ colorScheme });
      await page.goto('/');
      await page.evaluate(() => document.fonts.ready);
      await expect(page).toHaveScreenshot(`${device}-${colorScheme}.png`, { fullPage: true });
    });
  }
}
