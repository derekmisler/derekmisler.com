import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  snapshotPathTemplate: '{testDir}/screenshots/{arg}-{platform}{ext}',
  expect: { toHaveScreenshot: { threshold: 0, maxDiffPixels: 0, animations: 'disabled' } },
  use: { baseURL: 'http://localhost:4321' },
  webServer: {
    command: 'pnpm preview --port 4321',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
  },
});
