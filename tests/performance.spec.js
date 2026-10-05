const { test, expect } = require('@playwright/test');

const TARGET_URL = process.env.TEST_URL || 'https://radit024.github.io/my-portofolio/';

test.describe('Web Portfolio Performance & Health Audit', () => {

  test('Page loads and captures Core Web Vitals', async ({ page }) => {
    // Inject PerformanceObserver
    await page.addInitScript(() => {
      window.__webVitals = { fcp: 0, lcp: 0, cls: 0, tbt: 0 };
      new PerformanceObserver(l => {
        for (const e of l.getEntries()) {
          if (e.name === 'first-contentful-paint') window.__webVitals.fcp = e.startTime;
        }
      }).observe({ type: 'paint', buffered: true });

      new PerformanceObserver(l => {
        const entries = l.getEntries();
        if (entries.length) window.__webVitals.lcp = entries[entries.length - 1].startTime;
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      new PerformanceObserver(l => {
        for (const e of l.getEntries()) {
          if (!e.hadRecentInput) window.__webVitals.cls += e.value;
        }
      }).observe({ type: 'layout-shift', buffered: true });

      new PerformanceObserver(l => {
        for (const e of l.getEntries()) {
          const b = e.duration - 50;
          if (b > 0) window.__webVitals.tbt += b;
        }
      }).observe({ type: 'longtask', buffered: true });
    });

    const start = Date.now();
    const response = await page.goto(TARGET_URL, { waitUntil: 'load', timeout: 40000 });
    expect(response.status()).toBe(200);

    // Wait for splash screen duration
    await page.waitForTimeout(3500);

    const vitals = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0] || {};
      return {
        ttfb: Math.round(nav.responseStart - nav.requestStart),
        domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
        ...window.__webVitals
      };
    });

    console.log(`[Vitals Audit] TTFB: ${vitals.ttfb}ms | FCP: ${Math.round(vitals.fcp)}ms | LCP: ${Math.round(vitals.lcp)}ms | CLS: ${vitals.cls.toFixed(4)} | TBT: ${Math.round(vitals.tbt)}ms`);

    expect(vitals.ttfb).toBeLessThan(1200);
    expect(vitals.cls).toBeLessThan(0.25);
  });

  test('Interactive elements respond smoothly without blocking main thread', async ({ page }) => {
    await page.goto(TARGET_URL, { waitUntil: 'load', timeout: 40000 });

    // Wait for main content
    await page.waitForTimeout(3500);

    // Test Theme Switch responsiveness
    const themeSwitch = page.locator('label.switch, .slider.round').first();
    if (await themeSwitch.isVisible()) {
      const t0 = Date.now();
      await themeSwitch.click({ force: true });
      const clickDuration = Date.now() - t0;
      console.log(`[Interaction] Theme switch responded in ${clickDuration}ms`);
      expect(clickDuration).toBeLessThan(1000);
    }

    // Test smooth scroll through page
    const scrollStart = Date.now();
    await page.evaluate(async () => {
      await new Promise(r => {
        let y = 0;
        const id = setInterval(() => {
          window.scrollBy(0, 500);
          y += 500;
          if (y >= document.body.scrollHeight) {
            clearInterval(id);
            r();
          }
        }, 50);
      });
    });
    const scrollDuration = Date.now() - scrollStart;
    console.log(`[Scroll Benchmark] Completed full page traversal in ${scrollDuration}ms`);
  });

  test('Inspect network requests for broken resources and heavy payloads', async ({ page }) => {
    const failedRequests = [];
    const heavyAssets = [];

    page.on('response', async res => {
      if (res.status() >= 400) {
        failedRequests.push({ url: res.url(), status: res.status() });
      }
      try {
        const headers = res.headers();
        const len = parseInt(headers['content-length'] || '0', 10);
        if (len > 500 * 1024) { // > 500 KB
          heavyAssets.push({ url: res.url(), sizeKB: Math.round(len / 1024) });
        }
      } catch (_) {}
    });

    await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 40000 });
    await page.waitForTimeout(2000);

    console.log(`[Network Diagnostics] Failed requests count: ${failedRequests.length}`);
    if (failedRequests.length > 0) {
      console.log('Detected failed URLs:', failedRequests);
    }
    if (heavyAssets.length > 0) {
      console.log('Heavy assets (>500KB):', heavyAssets);
    }
  });

});
