#!/usr/bin/env node

import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

const DEFAULT_BASE_URL = "http://127.0.0.1:4173";
const DEFAULT_CODEX_NODE_MODULES =
  "/Users/thanhtruong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules";

const baseUrl = process.env.RESPONSIVE_BASE_URL || process.argv[2] || DEFAULT_BASE_URL;
const browserExecutable =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ||
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ].find((candidate) => existsSync(candidate));

const viewports = [
  { name: "mobile-320", width: 320, height: 720 },
  { name: "mobile-375", width: 375, height: 812 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "laptop-1024", width: 1024, height: 768 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

async function loadPlaywright() {
  const searchPaths = [process.cwd()];
  if (process.env.NODE_PATH) searchPaths.push(...process.env.NODE_PATH.split(":"));
  searchPaths.push(DEFAULT_CODEX_NODE_MODULES);

  try {
    const resolved = require.resolve("playwright", { paths: searchPaths });
    return import(pathToFileURL(resolved).href);
  } catch (error) {
    throw new Error(
      `Playwright is required for responsive checks. Install it locally or set NODE_PATH. ${error.message}`,
    );
  }
}

function isMaterialConsoleError(message) {
  return !/cdn\.tailwindcss|Tailwind CSS|cdn\.tailwind/u.test(message);
}

function isIgnoredRequestFailure(message) {
  return /fonts\.googleapis|fonts\.gstatic/u.test(message);
}

async function discoverPaths(page) {
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle", timeout: 45000 });

  const projectIds = await page.evaluate(() =>
    [...(window.portfolioContent?.featuredProjects || []), ...(window.portfolioContent?.otherProjects || [])]
      .filter((project) => project && project.id && project.isAvailable !== false)
      .map((project) => project.id),
  );

  return ["/", ...projectIds.map((id) => `/project.html?id=${encodeURIComponent(id)}`)];
}

async function collectPageMetrics(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const overflow = Math.max(document.body.scrollWidth, doc.scrollWidth) - viewportWidth;

    function hasOverflowContainer(element) {
      for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
        const style = getComputedStyle(parent);
        if (/(auto|scroll|hidden|clip)/u.test(style.overflowX)) return true;
      }

      return false;
    }

    const outOfViewportElements = [...document.body.querySelectorAll("*")]
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);

        return {
          tag: element.tagName.toLowerCase(),
          className: String(element.className || "").slice(0, 160),
          text: (element.innerText || element.alt || "").trim().replace(/\s+/gu, " ").slice(0, 100),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          top: Math.round(rect.top),
          bottom: Math.round(rect.bottom),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          isClipped: hasOverflowContainer(element),
          display: style.display,
        };
      })
      .filter(
        (element) =>
          element.display !== "none" &&
          !element.isClipped &&
          element.width > 1 &&
          element.height > 1 &&
          (element.left < -2 || element.right > viewportWidth + 2),
      )
      .slice(0, 12);

    const brokenImages = [...document.images]
      .filter((image) => image.getAttribute("src") && image.complete && image.naturalWidth === 0)
      .map((image) => ({
        src: image.getAttribute("src"),
        alt: image.alt,
      }))
      .slice(0, 12);

    return {
      bodyHeight: document.body.scrollHeight,
      brokenImages,
      overflow: Math.round(overflow),
      outOfViewportElements,
      title: document.title,
    };
  });
}

async function checkMobileMenu(page) {
  return page.evaluate(async () => {
    const button = document.querySelector("[data-menu-toggle]");
    if (!button) return { ok: false, reason: "No mobile menu toggle found." };

    button.click();
    await new Promise((resolve) => setTimeout(resolve, 150));

    const menu = document.querySelector("[data-menu]");
    const menuStyle = menu ? getComputedStyle(menu) : null;

    return {
      ok: button.getAttribute("aria-expanded") === "true" && menu && menuStyle.display !== "none",
      ariaExpanded: button.getAttribute("aria-expanded"),
      bodyMenuOpen: document.body.classList.contains("menu-open"),
      menuDisplay: menuStyle?.display || null,
    };
  });
}

async function run() {
  const playwrightModule = await loadPlaywright();
  const playwright = playwrightModule.chromium ? playwrightModule : playwrightModule.default;
  const launchOptions = { headless: true };
  if (browserExecutable) launchOptions.executablePath = browserExecutable;

  const browser = await playwright.chromium.launch(launchOptions);
  const discoveryPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const paths = await discoverPaths(discoveryPage);
  await discoveryPage.close();

  const results = [];

  for (const viewport of viewports) {
    for (const path of paths) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
      });

      const consoleErrors = [];
      const pageErrors = [];
      const requestFailures = [];

      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => pageErrors.push(error.message));
      page.on("requestfailed", (request) => {
        requestFailures.push(`${request.url()} :: ${request.failure()?.errorText || "failed"}`);
      });

      let status = null;

      try {
        const response = await page.goto(`${baseUrl}${path}`, {
          waitUntil: "networkidle",
          timeout: 45000,
        });
        status = response?.status() || null;
        await page.waitForTimeout(500);

        const metrics = await collectPageMetrics(page);
        const menu = viewport.width < 1024 && path === "/" ? await checkMobileMenu(page) : null;

        results.push({
          viewport: viewport.name,
          path,
          status,
          ...metrics,
          consoleErrors,
          pageErrors,
          requestFailures: requestFailures.filter((message) => !isIgnoredRequestFailure(message)).slice(0, 10),
          menu,
        });
      } catch (error) {
        results.push({
          viewport: viewport.name,
          path,
          status,
          fatal: error.message,
          consoleErrors,
          pageErrors,
          requestFailures: requestFailures.slice(0, 10),
        });
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();

  const failures = results.filter(
    (result) =>
      result.fatal ||
      result.status >= 400 ||
      result.overflow > 2 ||
      (result.overflow > 2 && result.outOfViewportElements?.length) ||
      result.brokenImages?.length ||
      result.pageErrors?.length ||
      result.consoleErrors?.some(isMaterialConsoleError) ||
      result.requestFailures?.length ||
      (result.menu && !result.menu.ok),
  );

  const summary = {
    baseUrl,
    tested: results.length,
    paths,
    viewports: viewports.map((viewport) => viewport.name),
    failureCount: failures.length,
    failures,
  };

  console.log(JSON.stringify(summary, null, 2));

  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
