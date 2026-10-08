const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 45000,
  expect: {
    timeout: 10000
  },
  fullyParallel: false,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'perf-results/playwright-report', open: 'never' }]
  ],
  use: {
    colorScheme: 'light',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    bypassCSP: true
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Mobile Pixel',
      use: { ...devices['Pixel 7'] }
    }
  ],
  webServer: {
    command: 'node scripts/serve-build.js',
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 30000
  }
});
