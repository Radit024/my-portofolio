const { chromium, devices } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Simple static server for local build
function startStaticServer(buildPath, port = 4173) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
  };

  const server = http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0];
    if (cleanUrl.startsWith('/my-portofolio')) {
      cleanUrl = cleanUrl.replace(/^\/my-portofolio/, '');
    }
    if (cleanUrl === '' || cleanUrl === '/') {
      cleanUrl = '/index.html';
    }

    let filePath = path.join(buildPath, cleanUrl);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(buildPath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve, reject) => {
    server.listen(port, () => resolve(server));
    server.on('error', reject);
  });
}

async function auditScenario({ name, url, deviceConfig = {}, throttle = false, waitForMainContent = true }) {
  console.log(`\n⏳ Running Scenario: [${name}]`);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    ...deviceConfig,
    bypassCSP: true
  });

  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);

  await cdp.send('Performance.enable');
  await cdp.send('Network.enable');

  if (throttle) {
    await cdp.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 150,
      downloadThroughput: (1.6 * 1024 * 1024) / 8, // 1.6 Mbps
      uploadThroughput: (750 * 1024) / 8
    });
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  }

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(`[Uncaught] ${err.message}`));

  const networkRequests = [];
  page.on('requestfinished', async (req) => {
    try {
      const res = await req.response();
      const sizes = await req.sizes();
      networkRequests.push({
        url: req.url(),
        resourceType: req.resourceType(),
        status: res ? res.status() : null,
        duration: req.timing() ? Math.round(req.timing().responseEnd) : null,
        transferSize: sizes.responseBodySize + sizes.responseHeadersSize,
        bodySize: sizes.responseBodySize
      });
    } catch (_) {}
  });

  page.on('requestfailed', req => {
    networkRequests.push({
      url: req.url(),
      resourceType: req.resourceType(),
      status: 'FAILED',
      failure: req.failure() ? req.failure().errorText : 'Unknown'
    });
  });

  // Inject Web Vitals observer
  await page.addInitScript(() => {
    window.__perf = {
      fcp: null,
      lcp: null,
      lcpElement: null,
      cls: 0,
      tbt: 0,
      longTasks: [],
      renderTimeline: []
    };

    try {
      new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            window.__perf.fcp = entry.startTime;
            window.__perf.renderTimeline.push({ event: 'FCP', time: Math.round(entry.startTime) });
          }
        }
      }).observe({ type: 'paint', buffered: true });

      new PerformanceObserver(list => {
        const entries = list.getEntries();
        if (entries.length) {
          const last = entries[entries.length - 1];
          window.__perf.lcp = last.startTime;
          window.__perf.lcpElement = last.element ? `${last.element.tagName}${last.element.className ? '.' + last.element.className.toString().split(' ').join('.') : ''}` : null;
          window.__perf.renderTimeline.push({ event: 'LCP', time: Math.round(last.startTime), element: window.__perf.lcpElement });
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__perf.cls += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });

      new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          const blocking = entry.duration - 50;
          if (blocking > 0) window.__perf.tbt += blocking;
          window.__perf.longTasks.push({
            duration: Math.round(entry.duration),
            startTime: Math.round(entry.startTime)
          });
        }
      }).observe({ type: 'longtask', buffered: true });
    } catch (e) {}
  });

  const navStart = Date.now();
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });

  let mainContentLoadedTime = null;
  if (waitForMainContent) {
    // Wait for splash screen to disappear and actual portfolio to mount
    try {
      await page.waitForSelector('.greet-heading, .greeting-main, .main-title, .skills-main', { timeout: 10000 });
      mainContentLoadedTime = Date.now() - navStart;
    } catch (_) {
      // If selector not found, continue
    }
  }

  // Interactive Test: Theme toggle responsiveness
  let themeToggleDuration = null;
  try {
    const toggleButton = await page.$('.dark-mode-toggle, input[type="checkbox"], .theme-switch');
    if (toggleButton) {
      const t0 = Date.now();
      await toggleButton.click();
      await page.waitForTimeout(100);
      themeToggleDuration = Date.now() - t0 - 100;
    }
  } catch (_) {}

  // Interactive Test: Mode switch responsiveness (Tech to Finance)
  let modeSwitchDuration = null;
  try {
    const modeSwitchBtn = await page.$('.floating-mode-switch, .curtains-doors-emblem, button:has-text("Finance"), button:has-text("Mode")');
    if (modeSwitchBtn) {
      const t0 = Date.now();
      await modeSwitchBtn.click();
      await page.waitForTimeout(600); // allow transition animation
      modeSwitchDuration = Date.now() - t0 - 600;
    }
  } catch (_) {}

  // Smooth scroll through entire page
  const scrollStart = Date.now();
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let current = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        current += distance;
        if (current >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
  const scrollTotalTime = Date.now() - scrollStart;

  await page.waitForTimeout(1000);

  // Take screenshot
  const screenshotDir = path.join(__dirname, '..', 'perf-results');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
  const sanitizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const screenshotPath = path.join(screenshotDir, `${sanitizedName}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });

  // Get metrics
  const cdpMetricsRes = await cdp.send('Performance.getMetrics');
  const cdpMetrics = {};
  for (const m of cdpMetricsRes.metrics) cdpMetrics[m.name] = m.value;

  const inPage = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] || {};
    const mem = performance.memory || {};
    const resources = performance.getEntriesByType('resource').map(r => ({
      name: r.name,
      initiatorType: r.initiatorType,
      duration: Math.round(r.duration),
      transferSize: r.transferSize || 0,
      encodedBodySize: r.encodedBodySize || 0,
      decodedBodySize: r.decodedBodySize || 0,
      startTime: Math.round(r.startTime),
      responseEnd: Math.round(r.responseEnd)
    }));

    return {
      navigation: {
        dns: Math.round(nav.domainLookupEnd - nav.domainLookupStart),
        tcp: Math.round(nav.connectEnd - nav.connectStart),
        ttfb: Math.round(nav.responseStart - nav.requestStart),
        download: Math.round(nav.responseEnd - nav.responseStart),
        domInteractive: Math.round(nav.domInteractive),
        domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
        loadComplete: Math.round(nav.loadEventEnd),
        transferSize: nav.transferSize || 0
      },
      perf: window.__perf,
      memory: {
        usedJSHeapMB: mem.usedJSHeapSize ? Math.round(mem.usedJSHeapSize / (1024 * 1024)) : null,
        totalJSHeapMB: mem.totalJSHeapSize ? Math.round(mem.totalJSHeapSize / (1024 * 1024)) : null
      },
      resources,
      domNodes: document.querySelectorAll('*').length
    };
  });

  await browser.close();

  return {
    scenario: name,
    url,
    screenshotPath,
    mainContentLoadedTime,
    themeToggleDuration,
    modeSwitchDuration,
    scrollTotalTime,
    consoleErrors,
    networkRequests,
    cdpMetrics,
    ...inPage
  };
}

async function main() {
  const LOCAL_PORT = 4173;
  const buildDir = path.join(__dirname, '..', 'build');
  let localServer = null;

  try {
    if (fs.existsSync(buildDir)) {
      localServer = await startStaticServer(buildDir, LOCAL_PORT);
      console.log(`✅ Static local server running at http://localhost:${LOCAL_PORT}/my-portofolio/`);
    }

    const testSuite = [
      {
        name: 'Live Site - Desktop (Fast)',
        url: 'https://radit024.github.io/my-portofolio/',
        deviceConfig: { viewport: { width: 1440, height: 900 } },
        throttle: false,
        waitForMainContent: true
      },
      {
        name: 'Live Site - Mobile Pixel 7 (Simulated 4G & 4x CPU)',
        url: 'https://radit024.github.io/my-portofolio/',
        deviceConfig: { ...devices['Pixel 7'] },
        throttle: true,
        waitForMainContent: true
      },
      {
        name: 'Local Build - Desktop (Post-Splash Content)',
        url: `http://localhost:${LOCAL_PORT}/my-portofolio/`,
        deviceConfig: { viewport: { width: 1440, height: 900 } },
        throttle: false,
        waitForMainContent: true
      }
    ];

    const results = [];
    for (const test of testSuite) {
      const res = await auditScenario(test);
      results.push(res);
    }

    const outPath = path.join(__dirname, '..', 'perf-results', 'playwright-perf-report.json');
    fs.writeFileSync(outPath, JSON.stringify(results, null, 2));

    console.log(`\n======================================================`);
    console.log(`🏁 PLAYWRIGHT AUDIT COMPLETE - FULL RESULTS IN JSON`);
    console.log(`File: ${outPath}`);
    console.log(`======================================================\n`);

    results.forEach((r, i) => {
      console.log(`[${i+1}] ${r.scenario}`);
      console.log(`    • TTFB: ${r.navigation.ttfb} ms`);
      console.log(`    • FCP: ${r.perf.fcp ? Math.round(r.perf.fcp) + ' ms' : 'N/A'}`);
      console.log(`    • LCP: ${r.perf.lcp ? Math.round(r.perf.lcp) + ' ms' : 'N/A'} (Element: ${r.perf.lcpElement || 'none'})`);
      console.log(`    • CLS: ${r.perf.cls.toFixed(4)}`);
      console.log(`    • TBT: ${Math.round(r.perf.tbt)} ms (${r.perf.longTasks.length} long tasks)`);
      console.log(`    • Main Content Visible: ${r.mainContentLoadedTime ? r.mainContentLoadedTime + ' ms' : 'N/A'}`);
      console.log(`    • DOM Nodes: ${r.domNodes}`);
      console.log(`    • JS Heap: ${r.memory.usedJSHeapMB || Math.round((r.cdpMetrics.JSHeapUsedSize || 0) / (1024 * 1024))} MB`);
      console.log(`    • Failed Requests / 404s: ${r.networkRequests.filter(req => req.status === 'FAILED' || req.status >= 400).length}`);
      console.log(`    • Console Errors: ${r.consoleErrors.length}`);
    });

  } catch (err) {
    console.error('Audit failed:', err);
  } finally {
    if (localServer) localServer.close();
  }
}

main();
