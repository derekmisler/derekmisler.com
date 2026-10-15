const { expect, test } = require('@playwright/test');

const viewports = { phone: { width: 390, height: 844 }, desktop: { width: 1280, height: 800 } };

for (const [device, viewport] of Object.entries(viewports)) {
  for (const colorScheme of ['dark', 'light']) {
    test(`${device} ${colorScheme}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ colorScheme });
      await page.goto('/');
      await page.evaluate(() => document.fonts.ready);
      await expect(page).toHaveScreenshot(`${device}-${colorScheme}.png`, { fullPage: true });
    });
  }
}
