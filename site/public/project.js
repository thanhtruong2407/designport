if (!window.portfolioContent) {
  console.error("Portfolio content not loaded. Ensure content.js is included before project.js.");
}

if (!window.portfolioProjectData) {
  console.error("Project helpers not loaded. Ensure project-data.js is included before project.js.");
}

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const projectHero = document.querySelector("[data-project-hero]");
const projectTitleBar = document.querySelector("[data-project-title-bar]");
const projectTitleBarText = document.querySelector("[data-project-title-bar-text]");
const pageDescriptionMeta = document.querySelector('meta[name="description"]');

const breadcrumbRoot = document.querySelector("[data-project-breadcrumb]");
const tagsRoot = document.querySelector("[data-project-tags]");
const titleRoot = document.querySelector("[data-project-title]");
const roleRoot = document.querySelector("[data-project-role]");
const summaryRoot = document.querySelector("[data-project-summary]");
const metaRoot = document.querySelector("[data-project-meta]");
const showcaseSectionRoot = document.querySelector("[data-project-showcase-section]");
const showcaseRoot = document.querySelector("[data-project-showcase]");
const navigationSectionRoot = document.querySelector("[data-project-navigation-section]");
const detailSectionsRoot = document.querySelector("[data-project-detail-sections]");
const outcomesSectionRoot = document.querySelector("[data-project-outcomes-section]");
const outcomesLabelRoot = document.querySelector("[data-project-outcomes-label]");
const outcomesRoot = document.querySelector("[data-project-outcomes]");
const endImageSectionRoot = document.querySelector("[data-project-end-image-section]");
const endImageRoot = document.querySelector("[data-project-end-image]");
const endImageCaptionRoot = document.querySelector("[data-project-end-image-caption]");
const paginationRoot = document.querySelector("[data-project-pagination]");
const foundRoot = document.querySelector("[data-project-found]");
const notFoundRoot = document.querySelector("[data-project-not-found]");
const imageLightboxRoot = document.querySelector("[data-image-lightbox]");
const imageLightboxImage = document.querySelector("[data-image-lightbox-image]");
const imageLightboxCaption = document.querySelector("[data-image-lightbox-caption]");
const imageLightboxCloseButtons = document.querySelectorAll("[data-image-lightbox-close]");

const { getProjectById, getProjectSections, getAdjacentProjects, loadProjectDetail } = window.portfolioProjectData || {};

const MOON = "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z";
const SUN = "M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-9h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM3 11H2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm14.66-5.07.71-.71a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41-1.41zM5.63 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41zm11.32 1.41-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41zM5.63 6.34 4.92 5.63a1 1 0 0 1 1.41-1.41l.71.71A1 1 0 0 1 5.63 6.34z";
const SCROLLED_THRESHOLD = 12;

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  if (themeIcon) themeIcon.setAttribute("d", theme === "light" ? SUN : MOON);
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  }
  try { localStorage.setItem("theme", theme); } catch (_) {}
}

function slugify(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getSectionId(section, index) {
  return section.label ? "section-" + slugify(section.label) : "section-" + index;
}

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInlineText(str) {
  return escapeHtml(str).replace(/\*\*([^*]+)\*\*/gu, '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>');
}

function usesScopedProjectAsset(src = "") {
  return /\/0[1-3]-[^/]+\.png$/u.test(src);
}

function getScopedProjectImage(target) {
  if (!(target instanceof HTMLImageElement)) return null;
  const src = target.getAttribute("src") || "";
  return usesScopedProjectAsset(src) ? target : null;
}

function openImageLightbox(image) {
  if (!imageLightboxRoot || !imageLightboxImage) return;
  imageLightboxImage.src = image.currentSrc || image.src;
  imageLightboxImage.alt = image.alt || "";
  if (imageLightboxCaption) imageLightboxCaption.textContent = image.alt || "";
  imageLightboxRoot.classList.remove("hidden");
  imageLightboxRoot.classList.add("flex");
  imageLightboxRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("image-lightbox-open");
  const firstClose = imageLightboxCloseButtons[0];
  if (firstClose) firstClose.focus();
}

function closeImageLightbox() {
  if (!imageLightboxRoot || !imageLightboxImage) return;
  imageLightboxRoot.classList.add("hidden");
  imageLightboxRoot.classList.remove("flex");
  imageLightboxRoot.setAttribute("aria-hidden", "true");
  imageLightboxImage.removeAttribute("src");
  imageLightboxImage.alt = "";
  if (imageLightboxCaption) imageLightboxCaption.textContent = "";
  document.body.classList.remove("image-lightbox-open");
}

function initProjectImageLightbox() {
  document.querySelectorAll("img").forEach((image) => {
    if (!getScopedProjectImage(image)) return;
    image.classList.add("cursor-zoom-in");
    image.setAttribute("role", "button");
    image.setAttribute("tabindex", "0");
    image.setAttribute("aria-label", image.alt ? `Open larger image: ${image.alt}` : "Open larger project image");
  });
}

function renderTagList(tags = []) {
  if (!Array.isArray(tags)) return "";
  return tags
    .map((tag) => {
      const className = tag.accent
        ? "inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200"
        : "inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300";
      return `<span class="${className}">${escapeHtml(tag.label)}</span>`;
    })
    .join("");
}

function createMetaCard(item) {
  return `
    <div class="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/80">
      <p class="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(item.label)}</p>
      <p class="mt-2 text-base font-medium text-slate-950 dark:text-white">${escapeHtml(item.value)}</p>
    </div>
  `;
}

function createRoleContributionCard(project) {
  if (!project?.roleDetail && !project?.roleContribution) return "";
  return `
    <div class="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/80 sm:col-span-2 xl:col-span-3">
      <p class="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">My role</p>
      ${project.roleDetail ? `<p class="mt-2 text-base font-semibold text-slate-950 dark:text-white">${escapeHtml(project.roleDetail)}</p>` : ""}
      ${project.roleContribution ? `<p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.roleContribution)}</p>` : ""}
    </div>
  `;
}

function createProjectShowcase(project) {
  if (project.showcaseImageSrc) {
    const imageClass = usesScopedProjectAsset(project.showcaseImageSrc)
      ? "block h-auto w-full object-contain"
      : "block w-full object-cover";

    return `
      <figure class="overflow-hidden rounded-[2rem]">
        <img
          class="${imageClass}"
          src="${escapeHtml(project.showcaseImageSrc)}"
          alt="${escapeHtml(project.showcaseImageAlt || project.title)}"
          loading="eager"
        >
      </figure>
    `;
  }

  return "";
}

function createInfoCard(card) {
  if (card.number || card.title) {
    const numberHtml = card.number
      ? `<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] bg-brand-100 text-lg font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">${escapeHtml(card.number)}</div>`
      : "";
    const titleHtml = card.title
      ? `<h3 class="text-lg font-semibold text-slate-950 dark:text-white">${escapeHtml(card.title)}</h3>`
      : "";
    const bodyHtml = card.body
      ? `<p class="${card.title ? "mt-3 " : ""}text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(card.body)}</p>`
      : "";
    return `
      <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
        ${numberHtml}
        <div class="${numberHtml ? "mt-6" : ""}">
          ${titleHtml}
          ${bodyHtml}
        </div>
      </article>
    `;
  }
  return `
    <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
      <p class="mb-3 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(card.label)}</p>
      <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(card.body)}</p>
    </article>
  `;
}

function createBulletList(items = []) {
  if (!Array.isArray(items) || !items.length) return "";
  const renderItem = (item) => {
    if (typeof item === "string") {
      return `<li class="relative pl-5 text-sm leading-7 text-slate-600 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300">${escapeHtml(item)}</li>`;
    }
    if (item && item.label) {
      const text = item.text ? `<span class="text-slate-500 dark:text-slate-400"> — ${escapeHtml(item.text)}</span>` : "";
      return `<li class="relative pl-5 text-sm leading-7 text-slate-600 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300"><strong class="font-semibold text-slate-950 dark:text-white">${escapeHtml(item.label)}</strong>${text}</li>`;
    }
    const text = item && item.text ? item.text : "";
    const children = item && Array.isArray(item.children) ? item.children : [];
    const childrenHtml = children.length
      ? `<ul class="mt-2 grid gap-1.5 pl-1">${children.map((c) => `<li class="relative pl-5 text-sm leading-7 text-slate-600 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-slate-400 dark:text-slate-300 dark:before:bg-slate-500">${escapeHtml(c)}</li>`).join("")}</ul>`
      : "";
    return `<li class="relative pl-5 text-sm leading-7 text-slate-600 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300">${escapeHtml(text)}${childrenHtml}</li>`;
  };
  return `
    <ul class="grid gap-2">
      ${items.map(renderItem).join("")}
    </ul>
  `;
}

function createColumnsTable(columns) {
  if (!Array.isArray(columns) || !columns.length) return "";
  const longestCol = columns.reduce((a, b) => ((b.subsections || []).length > (a.subsections || []).length ? b : a), columns[0]);
  const subsectionLabels = (longestCol.subsections || []).map((s) => s.label || "");
  const headers = ["#", "Decision", ...subsectionLabels];
  const headerCellClass = "px-4 py-3 text-left text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400";
  const headerHtml = headers.map((h, i) => `<th scope="col" class="${i === 0 ? "w-12 " : ""}${headerCellClass}">${escapeHtml(h)}</th>`).join("");
  const rowsHtml = columns.map((col, ci) => {
    const numberCell = `<td class="px-4 py-5 align-top text-base font-bold text-brand-700 dark:text-brand-300">${escapeHtml(col.number || String(ci + 1).padStart(2, "0"))}</td>`;
    const iconHtml = col.iconSrc
      ? `<img src="${escapeHtml(col.iconSrc)}" alt="${escapeHtml(col.iconAlt || "")}" class="h-12 w-12 shrink-0 rounded-[0.75rem] object-cover" loading="lazy">`
      : "";
    const titleCell = col.iconSrc
      ? `<td class="px-4 py-5 align-top">
          <div class="flex items-start gap-3">
            ${iconHtml}
            <span class="text-sm font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(col.title || "")}</span>
          </div>
        </td>`
      : `<td class="px-4 py-5 align-top text-sm font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(col.title || "")}</td>`;
    const subCells = (col.subsections || []).map((s) => `<td class="px-4 py-5 align-top text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(s.body || "")}</td>`).join("");
    return `<tr class="${ci > 0 ? "border-t border-slate-200 dark:border-slate-800" : ""}">${numberCell}${titleCell}${subCells}</tr>`;
  }).join("");
  return `
    <div class="mb-8 overflow-x-auto rounded-[1.25rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
      <table class="w-full min-w-[720px] border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-900/60">
          <tr>${headerHtml}</tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
  `;
}

function splitResultValue(value) {
  const text = String(value || "").trim();
  if (!text) return { value: "", suffix: "" };
  const match = text.match(/^(~?\d+(?:\.\d+)?\s*(?:%|×|x)?)\s*(.*)$/i);
  if (!match) return { value: text, suffix: "" };
  return {
    value: match[1].replace(/\s+/g, ""),
    suffix: match[2].trim(),
  };
}

function createMetricCards(items) {
  if (!Array.isArray(items) || !items.length) return "";
  const iconPath = "M20 6 9 17l-5-5";
  const cardsHtml = items.map((item) => {
    const result = splitResultValue(item.result);
    return `
      <article class="group flex min-h-[220px] flex-col justify-between rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
        <div>
          <div class="mb-6 flex items-center justify-between gap-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.04em] text-slate-500 dark:text-slate-400">${escapeHtml(item.metric || "")}</p>
            <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="${iconPath}"/>
              </svg>
            </span>
          </div>
          <div class="flex flex-wrap items-end gap-x-2 gap-y-1">
            <span class="text-5xl font-semibold leading-none text-brand-600 dark:text-brand-300 sm:text-6xl">${escapeHtml(result.value)}</span>
            ${result.suffix ? `<span class="pb-1 text-base font-semibold leading-tight text-slate-700 dark:text-slate-200">${escapeHtml(result.suffix)}</span>` : ""}
          </div>
        </div>
        ${item.note ? `<p class="mt-6 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">${escapeHtml(item.note)}</p>` : ""}
      </article>
    `;
  }).join("");
  return `
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      ${cardsHtml}
    </div>
  `;
}

function createCompactMetricCards(items) {
  if (!Array.isArray(items) || !items.length) return "";
  const cardsHtml = items.map((item) => {
    const result = splitResultValue(item.result);
    return `
      <article class="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <p class="text-[11px] font-semibold uppercase tracking-[0.04em] text-slate-500 dark:text-slate-400">${escapeHtml(item.metric || "")}</p>
        <div class="mt-5 flex flex-wrap items-end gap-x-2 gap-y-1">
          <span class="text-4xl font-semibold leading-none text-brand-600 dark:text-brand-300">${escapeHtml(result.value)}</span>
          ${result.suffix ? `<span class="pb-1 text-sm font-semibold leading-tight text-slate-700 dark:text-slate-200">${escapeHtml(result.suffix)}</span>` : ""}
        </div>
        ${item.note ? `<p class="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">${escapeHtml(item.note)}</p>` : ""}
      </article>
    `;
  }).join("");
  return `
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      ${cardsHtml}
    </div>
  `;
}

function createMetricsTable(items) {
  if (!Array.isArray(items) || !items.length) return "";
  const headerCellClass = "px-4 py-3 text-left text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400";
  const hasDirection = items.some((item) => String(item.direction || "").trim());
  const hasNote = items.some((item) => String(item.note || "").trim());
  if (!hasDirection && !hasNote) {
    const splitMetricValue = (value) => {
      const text = String(value || "").trim();
      if (!text) return ["", ""];
      const metricSplits = [
        { pattern: /^(.+?)\s+(rule application)$/i },
        { pattern: /^(~?\d+%)\s+(.+)$/i },
        { pattern: /^(~?\d+%\s+reliability)$/i },
      ];
      for (const { pattern } of metricSplits) {
        const match = text.match(pattern);
        if (!match) continue;
        return match.length === 2 ? [match[1], ""] : [match[1], match[2]];
      }
      return [text, ""];
    };
    const getMetricTrendIcon = (item) => {
      const text = `${item.metric || ""} ${item.result || ""}`.toLowerCase();
      const isDown = /reduction|incorrect|less|decrease|reduced/.test(text);
      const path = isDown ? "M12 5v14m0 0 6-6m-6 6-6-6" : "M12 19V5m0 0 6 6m-6-6-6 6";
      return `<span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="${path}"/>
        </svg>
      </span>`;
    };
    const cardsHtml = items.map((item) => `
      <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-start justify-between gap-4">
          ${(() => {
            const [lineOne, lineTwo] = splitMetricValue(item.result);
            return `<p class="text-2xl font-bold leading-[1.08] text-brand-600 dark:text-brand-300">
              <span class="block">${escapeHtml(lineOne)}</span>
              ${lineTwo ? `<span class="block">${escapeHtml(lineTwo)}</span>` : ""}
            </p>`;
          })()}
          ${getMetricTrendIcon(item)}
        </div>
        <p class="mt-4 text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(item.metric || "")}</p>
      </article>
    `).join("");
    return `
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        ${cardsHtml}
      </div>
    `;
  }
  const headerHtml = [
    `<th scope="col" class="${headerCellClass}">Metric</th>`,
    hasDirection ? `<th scope="col" class="w-24 ${headerCellClass}">Direction</th>` : "",
    `<th scope="col" class="${headerCellClass}">Result</th>`,
    hasNote ? `<th scope="col" class="${headerCellClass}">Note</th>` : "",
  ].join("");
  const rowsHtml = items.map((item, i) => {
    const dir = String(item.direction || "").trim();
    const isUp = dir === "↑" || /^up$/i.test(dir);
    const isDown = dir === "↓" || /^down$/i.test(dir);
    const directionSymbol = isUp ? "↑" : isDown ? "↓" : dir;
    const directionClass = isUp || isDown
      ? "text-brand-600 dark:text-brand-300"
      : "text-slate-600 dark:text-slate-300";
    return `
      <tr class="${i > 0 ? "border-t border-slate-200 dark:border-slate-800" : ""}">
        <td class="px-4 py-5 align-top text-sm font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(item.metric || "")}</td>
        ${hasDirection ? `<td class="px-4 py-5 align-top text-lg font-bold ${directionClass}">${escapeHtml(directionSymbol)}</td>` : ""}
        <td class="px-4 py-5 align-top text-sm font-medium leading-tight text-slate-900 dark:text-white">${escapeHtml(item.result || "")}</td>
        ${hasNote ? `<td class="px-4 py-5 align-top text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(item.note || "")}</td>` : ""}
      </tr>
    `;
  }).join("");
  return `
    <div class="overflow-x-auto rounded-[1.25rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
      <table class="w-full min-w-[640px] border-collapse text-sm">
        <thead class="bg-slate-50 dark:bg-slate-900/60">
          <tr>${headerHtml}</tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
  `;
}

function createHighlightBlock(highlight) {
  if (!highlight) return "";
  const action = highlight.action || {};
  return `
    <div class="mt-8 rounded-[1.5rem] border-2 border-brand-400 bg-brand-100/70 p-7 dark:border-brand-400/60 dark:bg-brand-500/10">
      ${highlight.label ? `<p class="text-sm font-semibold text-slate-950 dark:text-white">${escapeHtml(highlight.label)}</p>` : ""}
      ${highlight.body ? `<p class="${highlight.label ? "mt-3 " : ""}text-base leading-8 text-slate-700 dark:text-slate-200">${escapeHtml(highlight.body)}</p>` : ""}
      ${action.href ? `<a class="mt-6 inline-flex min-h-11 items-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2" href="${escapeHtml(action.href)}">${escapeHtml(action.label || "Detail")}</a>` : ""}
    </div>
  `;
}

function createChallengeBlock(challenge) {
  if (!challenge) return "";
  const bodyParas = Array.isArray(challenge.body) ? challenge.body : challenge.body ? [challenge.body] : [];
  const quote = challenge.quote;
  return `
    ${bodyParas.map((paragraph) => `<p class="mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">${renderInlineText(paragraph)}</p>`).join("")}
    ${quote ? `
      <blockquote class="mb-8 max-w-4xl border-l-4 border-brand-400 pl-5 text-base italic leading-8 text-slate-700 dark:border-brand-400/60 dark:text-slate-200">
        &ldquo;${escapeHtml(quote)}&rdquo;
      </blockquote>
    ` : ""}
  `;
}

function createStepCard(step, index) {
  return `
    <article class="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900 sm:grid sm:grid-cols-[64px_minmax(0,1fr)]">
      <div class="flex items-center justify-center border-b border-slate-200 bg-brand-50 px-4 py-4 text-lg font-bold text-brand-700 dark:border-slate-800 dark:bg-brand-500/10 dark:text-brand-200 sm:border-b-0 sm:border-r">${String(index + 1).padStart(2, "0")}</div>
      <div class="p-6">
        <h3 class="text-base font-semibold text-slate-950 dark:text-white">${escapeHtml(step.title)}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(step.text)}</p>
      </div>
    </article>
  `;
}

function createOutcomeCard(item) {
  return `
    <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
      <p class="text-4xl font-bold text-brand-600 dark:text-brand-300">${escapeHtml(item.value)}</p>
      <p class="mt-3 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(item.label)}</p>
    </article>
  `;
}

function createSectionColumn(column) {
  const bullets = Array.isArray(column?.bullets) ? column.bullets : [];
  const subsections = Array.isArray(column?.subsections) ? column.subsections : [];
  const action = column?.action;
  const iconHtml = column.iconSrc
    ? `<div class="h-20 w-20 shrink-0 overflow-hidden rounded-[1rem]">
        <img src="${escapeHtml(column.iconSrc)}" alt="${escapeHtml(column.iconAlt || "")}" class="block h-full w-full object-cover" loading="lazy">
      </div>`
    : "";
  const iconSvgHtml = !column.iconSrc && !column.coverImageSrc && column.iconSvg
    ? `<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" aria-hidden="true">${column.iconSvg}</div>`
    : "";
  const numberHtml = !column.iconSrc && !column.coverImageSrc && !column.iconSvg && column.number
    ? `<div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem] bg-brand-100 text-lg font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">${escapeHtml(column.number)}</div>`
    : "";
  const visualHtml = iconHtml || iconSvgHtml || numberHtml;
  const branchLabelHtml = column.branchLabel ? `<span class="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">${escapeHtml(column.branchLabel)}</span>` : "";
  const titleHtml = `<div class="flex flex-wrap items-center gap-3">
      <h3 class="text-lg font-semibold text-slate-950 dark:text-white">${escapeHtml(column.title || "")}</h3>
      ${branchLabelHtml}
    </div>`;
  const bodyHtml = column.body ? `<p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(column.body)}</p>` : "";
  const bulletsHtml = bullets.length ? `<div class="mt-5">${createBulletList(bullets)}</div>` : "";
  const tagHtml = column.tag ? `<span class="mt-5 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">${escapeHtml(column.tag)}</span>` : "";
  const isDeepDiveAction = /^deep dive$/i.test(action?.label || "");
  const subsectionsHtml = subsections.length
    ? subsections.map((sub) => {
        const isOutcomeHighlight = /^outcome$/i.test(sub.label || "") && sub.body;
        if (isOutcomeHighlight) {
          return `
            <div class="mt-5 rounded-[0.9rem] bg-brand-50/90 px-4 py-3 text-sm leading-7 text-slate-600 dark:bg-brand-500/10 dark:text-slate-200">
              <span class="font-semibold text-slate-950 dark:text-white">${escapeHtml(sub.label)}:</span>
              ${escapeHtml(sub.body)}
            </div>
          `;
        }
        return `
          <div class="mt-5">
            ${sub.label ? `<p class="mb-2 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(sub.label)}</p>` : ""}
            ${sub.body ? `<p class="text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(sub.body)}</p>` : ""}
            ${Array.isArray(sub.bullets) && sub.bullets.length ? `<div class="${sub.body ? "mt-2" : ""}">${createBulletList(sub.bullets)}</div>` : ""}
          </div>
        `;
      }).join("")
    : "";
  const actionHtml = action?.href
    ? action.disabled
      ? `<span class="mt-6 inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-full bg-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-400 dark:bg-slate-800 dark:text-slate-500" aria-disabled="true" role="link">
          ${escapeHtml(action.label || "Detail")}
          <span class="ml-2" aria-hidden="true">→</span>
        </span>`
      : isDeepDiveAction
        ? `<a class="mt-6 inline-flex min-h-10 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.04em] text-brand-600 transition hover:text-brand-500 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:text-brand-300 dark:hover:text-brand-200" href="${escapeHtml(action.href)}">
          ${escapeHtml(action.label || "Detail")}
          <span aria-hidden="true">→</span>
        </a>`
        : `<a class="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:bg-brand-500 dark:hover:bg-brand-400" href="${escapeHtml(action.href)}">
          ${escapeHtml(action.label || "Detail")}
          <span class="ml-2" aria-hidden="true">→</span>
        </a>`
    : "";

  // Cover image variant — image spans full card width at the top
  if (column.coverImageSrc) {
    const usesNaturalRatio = usesScopedProjectAsset(column.coverImageSrc);
    const imageFrameClass = usesNaturalRatio
      ? "w-full bg-[#eee7ff]"
      : "aspect-[32/15] w-full bg-[#eee7ff]";
    const imageClass = usesNaturalRatio
      ? "block h-auto w-full object-contain"
      : "block h-full w-full object-cover";

    return `
      <div class="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div class="${imageFrameClass}">
          <img src="${escapeHtml(column.coverImageSrc)}" alt="${escapeHtml(column.coverImageAlt || "")}" class="${imageClass}" loading="lazy">
        </div>
        <div class="p-6">
          ${titleHtml}
          ${bodyHtml}
          ${bulletsHtml}
          ${subsectionsHtml}
          ${tagHtml}
          ${actionHtml}
        </div>
      </div>
    `;
  }

  if (visualHtml) {
    return `
      <div class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
        ${visualHtml}
        <div class="mt-6">
          ${titleHtml}
          ${bodyHtml}
          ${bulletsHtml}
          ${subsectionsHtml}
          ${tagHtml}
          ${actionHtml}
        </div>
      </div>
    `;
  }

  return `
    <div class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
      ${titleHtml}
      ${bodyHtml}
      ${bulletsHtml}
      ${subsectionsHtml}
      ${tagHtml}
      ${actionHtml}
    </div>
  `;
}

function createSimpleSectionColumn(column) {
  const iconSvgHtml = column.iconSvg
    ? `<div class="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.75rem] bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" aria-hidden="true">${column.iconSvg}</div>`
    : "";
  const bodyHtml = column.body ? `<p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(column.body)}</p>` : "";
  const bullets = Array.isArray(column?.bullets) ? column.bullets : [];
  const bulletsHtml = bullets.length ? `<div class="mt-5">${createBulletList(bullets)}</div>` : "";
  return `
    <div class="rounded-[1.25rem] border border-slate-200 px-5 py-5 dark:border-slate-800 sm:px-6">
      ${iconSvgHtml}
      <h3 class="text-xl font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(column.title || "")}</h3>
      ${bodyHtml}
      ${bulletsHtml}
    </div>
  `;
}

function createSimpleSectionColumnWithIcon(column) {
  const subsections = Array.isArray(column?.subsections) ? column.subsections : [];
  const branchLabelHtml = column.branchLabel ? `<span class="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">${escapeHtml(column.branchLabel)}</span>` : "";
  const iconSvgHtml = column.iconSvg
    ? `<div class="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" aria-hidden="true">${column.iconSvg}</div>`
    : "";
  const bodyHtml = column.body ? `<p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(column.body)}</p>` : "";
  const bullets = Array.isArray(column?.bullets) ? column.bullets : [];
  const bulletsHtml = bullets.length ? `<div class="mt-5">${createBulletList(bullets)}</div>` : "";
  const subsectionsHtml = subsections.length
    ? subsections.map((sub) => {
        const isOutcomeHighlight = /^outcome$/i.test(sub.label || "") && sub.body;
        if (isOutcomeHighlight) {
          return `
            <div class="mt-5 rounded-[0.9rem] bg-brand-50/90 px-4 py-3 text-sm leading-7 text-slate-600 dark:bg-brand-500/10 dark:text-slate-200">
              <span class="font-semibold text-slate-950 dark:text-white">${escapeHtml(sub.label)}:</span>
              ${escapeHtml(sub.body)}
            </div>
          `;
        }
        return `
          <div class="mt-5">
            ${sub.label ? `<p class="mb-2 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(sub.label)}</p>` : ""}
            ${sub.body ? `<p class="text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(sub.body)}</p>` : ""}
            ${Array.isArray(sub.bullets) && sub.bullets.length ? `<div class="${sub.body ? "mt-2" : ""}">${createBulletList(sub.bullets)}</div>` : ""}
          </div>
        `;
      }).join("")
    : "";
  return `
    <div class="h-full rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
      ${iconSvgHtml}
      <div class="flex flex-wrap items-center gap-3">
        <h3 class="text-base font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(column.title || "")}</h3>
        ${branchLabelHtml}
      </div>
      ${bodyHtml}
      ${bulletsHtml}
      ${subsectionsHtml}
    </div>
  `;
}

function createSimpleIconCard(column) {
  const iconSvgHtml = column.iconSvg
    ? `<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" aria-hidden="true">${column.iconSvg}</div>`
    : "";
  const bodyHtml = column.body ? `<p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(column.body)}</p>` : "";
  return `
    <article class="h-full min-h-[180px] rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      ${iconSvgHtml}
      <h3 class="mt-6 text-base font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(column.title || "")}</h3>
      ${bodyHtml}
    </article>
  `;
}

function createMapItem(item) {
  const tileBase = "group block rounded-[1.1rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-500/40 dark:hover:bg-slate-900";
  const tileStatic = "block rounded-[1.1rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60";
  const inner = `
    <div class="flex items-center gap-3">
      <span class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">${escapeHtml(item.number)}</span>
      <span class="h-px flex-1 bg-slate-300 dark:bg-slate-700" aria-hidden="true"></span>
    </div>
    <p class="mt-4 text-sm font-semibold leading-tight text-slate-900 transition group-hover:text-brand-600 dark:text-slate-100 dark:group-hover:text-brand-300">${escapeHtml(item.title)}</p>
  `;
  if (item.target) {
    return `<a href="#section-${escapeHtml(item.target)}" class="${tileBase}">${inner}</a>`;
  }
  return `<div class="${tileStatic}">${inner}</div>`;
}

function createMapPill(item) {
  const linkClass = "inline-flex rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase text-slate-700 transition hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300";
  const staticClass = "inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300";
  if (item.target) {
    return `<a href="#section-${escapeHtml(item.target)}" class="${linkClass}">${escapeHtml(item.label)}</a>`;
  }
  return `<span class="${staticClass}">${escapeHtml(item.label)}</span>`;
}

function createProjectNavigationSection(project) {
  const nav = project.caseStudyNavigation;
  const items = Array.isArray(nav?.items) ? nav.items : [];
  if (!nav || !items.length) return "";

  const pills = Array.isArray(nav.pills) ? nav.pills : [];
  return `
    <section class="border-t border-slate-200 px-4 py-12 dark:border-slate-800 sm:px-6 lg:px-8">
      <div class="mx-auto w-full max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-9 lg:p-10">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
          <div>
            ${nav.label ? `<p class="mb-4 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(nav.label)}</p>` : ""}
            <h2 class="max-w-3xl text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">${escapeHtml(nav.title || "")}</h2>
            ${(nav.body || []).map((paragraph) => `<p class="mt-3 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-300">${renderInlineText(paragraph)}</p>`).join("")}
          </div>
          ${nav.aside ? `
            <aside class="rounded-[1.25rem] border border-brand-200 bg-brand-50 p-5 dark:border-brand-500/20 dark:bg-brand-500/10">
              <p class="text-sm font-semibold text-brand-700 dark:text-brand-200">${escapeHtml(nav.aside.title || "")}</p>
              <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(nav.aside.body || "")}</p>
            </aside>
          ` : ""}
        </div>
        ${nav.mapLabel ? `<p class="mt-9 text-sm font-semibold text-slate-950 dark:text-white">${escapeHtml(nav.mapLabel)}</p>` : ""}
        <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          ${items.map(createMapItem).join("")}
        </div>
        ${nav.pillsLabel ? `<p class="mt-8 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(nav.pillsLabel)}</p>` : ""}
        ${pills.length ? `<div class="${nav.pillsLabel ? "mt-3" : "mt-5"} flex flex-wrap gap-2">${pills.map(createMapPill).join("")}</div>` : ""}
      </div>
    </section>
  `;
}

function createCarouselSlideImage(slide) {
  if (slide.imageSrc) return slide.imageSrc;

  const palette = slide.palette || ["#6D50F0", "#A78BFA", "#E9D5FF"];
  const title = String(slide.label || "").toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" fill="none">
      <rect width="1600" height="900" fill="transparent"/>
      <g opacity="0.18">
        <circle cx="290" cy="220" r="170" fill="${palette[0]}"/>
        <circle cx="1270" cy="230" r="150" fill="${palette[1]}"/>
        <circle cx="1110" cy="660" r="230" fill="${palette[2]}"/>
      </g>
      <g opacity="0.95">
        <rect x="180" y="180" width="1240" height="540" rx="40" fill="white"/>
        <rect x="260" y="270" width="310" height="44" rx="22" fill="${palette[0]}" fill-opacity="0.12"/>
        <rect x="260" y="360" width="520" height="30" rx="15" fill="${palette[1]}" fill-opacity="0.2"/>
        <rect x="260" y="410" width="420" height="30" rx="15" fill="${palette[2]}" fill-opacity="0.18"/>
        <rect x="260" y="500" width="210" height="110" rx="24" fill="${palette[0]}" fill-opacity="0.14"/>
        <rect x="500" y="500" width="210" height="110" rx="24" fill="${palette[1]}" fill-opacity="0.16"/>
        <rect x="740" y="500" width="210" height="110" rx="24" fill="${palette[2]}" fill-opacity="0.18"/>
        <circle cx="1140" cy="455" r="130" fill="${palette[0]}" fill-opacity="0.14"/>
        <circle cx="1140" cy="455" r="82" fill="${palette[1]}" fill-opacity="0.22"/>
      </g>
      <text x="260" y="245" fill="#0F172A" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="700">${title}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createCarousel(section, index) {
  const slides = Array.isArray(section.carousel?.slides) ? section.carousel.slides : [];
  if (!slides.length) return "";

  const carouselId = `carousel-${index + 1}`;
  const trackWidth = `${slides.length * 100}%`;
  const slideWidth = `${100 / slides.length}%`;
  return `
    <div class="mt-10 rounded-[2rem] bg-white px-4 py-6 shadow-card dark:bg-slate-900 sm:px-6 lg:px-8" data-carousel id="${carouselId}" tabindex="0" aria-roledescription="carousel" aria-label="${escapeHtml(section.carousel?.title || section.title || "Section carousel")}">
      <div class="relative">
        <button class="absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300" type="button" data-carousel-prev aria-label="Previous slide">
          <span aria-hidden="true">←</span>
        </button>
        <button class="absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300" type="button" data-carousel-next aria-label="Next slide">
          <span aria-hidden="true">→</span>
        </button>
        <div class="overflow-hidden px-14 sm:px-16">
          <div class="flex transition-transform duration-300 ease-out will-change-transform" data-carousel-track style="width: ${trackWidth};">
            ${slides.map((slide, slideIndex) => `
              <article class="shrink-0" style="width: ${slideWidth};" data-carousel-slide aria-roledescription="slide" aria-label="${escapeHtml(`${slideIndex + 1} of ${slides.length}`)}">
                <div class="px-3 sm:px-4">
                  ${slide.description ? `
                    <div class="mb-5">
                      <h3 class="text-2xl font-semibold text-slate-950 dark:text-white">${escapeHtml(slide.label || "")}</h3>
                      <p class="mt-3 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">${escapeHtml(slide.description)}</p>
                    </div>
                  ` : ""}
                  <img class="block w-full" src="${escapeHtml(createCarouselSlideImage(slide))}" alt="${escapeHtml(slide.label || "")}" draggable="false">
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="mt-6 flex flex-wrap items-center justify-center gap-2" data-carousel-dots>
        ${slides.map((slide, slideIndex) => `
          <button class="h-2.5 w-2.5 rounded-full bg-slate-300 transition hover:bg-brand-400 dark:bg-slate-700 dark:hover:bg-brand-400" type="button" data-carousel-dot data-slide-index="${slideIndex}" aria-label="${escapeHtml(`Go to ${slide.label || `slide ${slideIndex + 1}`}`)}"></button>
        `).join("")}
      </div>
    </div>
  `;
}

function createSectionImage(section) {
  if (!section.imageSrc) return "";
  return `
    <figure class="mt-10 overflow-hidden rounded-[2rem]">
      <img
        class="block w-full"
        src="${escapeHtml(section.imageSrc)}"
        alt="${escapeHtml(section.imageAlt || section.title || "")}"
        loading="lazy"
      >
    </figure>
  `;
}

function createImageLoop(section) {
  if (!section.imageLoop || !Array.isArray(section.imageLoop.images) || section.imageLoop.images.length < 2) return "";
  const [first, second] = section.imageLoop.images;
  return `
    <figure class="image-loop relative mt-10 overflow-hidden rounded-[1.5rem]" aria-label="Animated comparison between two related visuals">
      <img class="image-loop-img image-loop-img-base block w-full" src="${escapeHtml(first.src)}" alt="${escapeHtml(first.alt || "")}" loading="lazy">
      <img class="image-loop-img image-loop-img-overlay absolute inset-0 block h-full w-full object-contain" src="${escapeHtml(second.src)}" alt="${escapeHtml(second.alt || "")}" loading="lazy">
    </figure>
  `;
}

function createStatCard(item) {
  return `
    <article class="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
      <p class="text-3xl font-bold text-slate-950 dark:text-white">${escapeHtml(item.value)}</p>
      <p class="mt-2 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(item.label)}</p>
      ${item.detail ? `<p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(item.detail)}</p>` : ""}
    </article>
  `;
}

function createProjectNavCard(project, direction) {
  const label = direction === "previous" ? "Previous" : "Next";
  const arrow = direction === "previous" ? "←" : "→";
  const alignClass = direction === "previous" ? "items-start text-left" : "items-start text-left md:items-end md:text-right";

  if (!project) {
    return `
      <div class="min-h-[88px] rounded-[1.25rem] border border-dashed border-slate-200/80 dark:border-slate-800"></div>
    `;
  }

  if (project.isAvailable === false) {
    return `
      <div class="flex min-h-[88px] flex-col justify-center rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-4 opacity-75 dark:border-slate-800 dark:bg-slate-900/70 ${alignClass}" aria-disabled="true">
        <div class="flex items-center gap-2 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
          <span>${direction === "previous" ? arrow : ""}</span>
          <span>${label}</span>
          <span>${direction === "next" ? arrow : ""}</span>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-tight text-slate-500 dark:text-slate-400">${escapeHtml(project.title)}</h3>
        <span class="mt-3 inline-flex w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">Coming soon</span>
      </div>
    `;
  }

  return `
    <a class="group flex min-h-[88px] flex-col justify-center rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 dark:hover:bg-slate-900 ${alignClass}" href="./project.html?id=${encodeURIComponent(project.id)}">
      <div class="flex items-center gap-2 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
        <span>${direction === "previous" ? arrow : ""}</span>
        <span>${label}</span>
        <span>${direction === "next" ? arrow : ""}</span>
      </div>
      <h3 class="mt-3 text-lg font-semibold leading-tight text-slate-950 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">${escapeHtml(project.title)}</h3>
    </a>
  `;
}

function createRichSection(section, index) {
  const body = Array.isArray(section.body) ? section.body : section.body ? [section.body] : [];
  const cards = Array.isArray(section.cards) ? section.cards : [];
  const bullets = Array.isArray(section.bullets) ? section.bullets : [];
  const steps = Array.isArray(section.steps) ? section.steps : [];
  const stats = Array.isArray(section.stats) ? section.stats : [];
  const columns = Array.isArray(section.columns) ? section.columns : [];
  const groups = Array.isArray(section.groups) ? section.groups : [];
  const subsections = Array.isArray(section.subsections) ? section.subsections : [];
  const images = Array.isArray(section.images) ? section.images : [];
  const bottomImages = Array.isArray(section.bottomImages) ? section.bottomImages : [];
  const customHtml = section.customHtml || "";
  const carousel = section.carousel ? createCarousel(section, index) : "";
  const sectionImage = createSectionImage(section);
  const imageLoop = createImageLoop(section);
  const badge = section.badge
    ? `<p class="mb-6 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200">${escapeHtml(section.badge)}</p>`
    : "";
  const sectionId = getSectionId(section, index);
  const hasDiagramContent = section.diagramImageLoop || section.diagramImageSrc || section.diagramMermaid || section.mermaid;
  const hasDiagramText = section.diagramLabel || section.mermaidLabel || section.diagramCaption || section.mermaidCaption;
  const diagramFigureClass = hasDiagramText
    ? "mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
    : "mt-8 overflow-hidden rounded-[1.5rem]";

  const hasSectionHeading = Boolean(section.label || section.title);
  const sectionHeadHtml = hasSectionHeading ? `<div class="mb-6 flex items-center gap-3">
    <span class="text-2xl font-bold leading-none text-slate-300 dark:text-slate-700">${String(index + 1).padStart(2, "0")}</span>
    ${section.label ? `<span class="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(section.label)}</span>` : ""}
  </div>` : "";

  return `
    <section id="${sectionId}" class="scroll-mt-36 border-t border-slate-200 px-4 py-12 dark:border-slate-800 sm:px-6 lg:px-8">
      <div class="mx-auto w-full max-w-7xl">
        ${section.asideImageSrc
          ? `<div class="mb-8 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] lg:items-center">
              <div>
                ${sectionHeadHtml}
                <h2 class="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">${escapeHtml(section.title || "")}</h2>
                ${badge ? `<div class="mt-6">${badge}</div>` : ""}
                <div class="mt-6">${body.map((paragraph) => `<p class="mb-5 text-base leading-8 text-slate-600 dark:text-slate-300">${renderInlineText(paragraph)}</p>`).join("")}</div>
              </div>
              <figure class="overflow-hidden rounded-[1.5rem] lg:mx-auto lg:max-w-full">
                <img class="block w-full" src="${escapeHtml(section.asideImageSrc)}" alt="${escapeHtml(section.asideImageAlt || section.title || "")}" loading="lazy">
              </figure>
            </div>`
          : hasSectionHeading ? `<div class="mb-10">
              ${sectionHeadHtml}
              <h2 class="max-w-3xl text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">${escapeHtml(section.title || "")}</h2>
            </div>
            ${badge}
            ${createChallengeBlock(section.challenge)}
            ${body.map((paragraph) => `<p class="mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">${renderInlineText(paragraph)}</p>`).join("")}`
          : `${badge}
            ${createChallengeBlock(section.challenge)}
            ${body.map((paragraph) => `<p class="mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">${renderInlineText(paragraph)}</p>`).join("")}`
        }
        ${customHtml ? `<div class="mt-8">${customHtml}</div>` : ""}
        ${stats.length ? `<div class="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">${stats.map(createStatCard).join("")}</div>` : ""}
        ${steps.length ? `<div class="${columns.length || cards.length || bullets.length ? "mb-8 " : ""}grid gap-4">${steps.map(createStepCard).join("")}</div>` : ""}
        ${columns.length ? (
          section.displayAs === "table"
            ? createColumnsTable(columns)
            : section.displayAs === "simpleCards"
              ? `<div class="mb-8 grid gap-4 ${columns.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}">${columns.map(createSimpleSectionColumn).join("")}</div>`
              : section.displayAs === "simpleIconCards"
                ? `<div class="mb-8 grid gap-5 lg:grid-cols-3">${columns.map(createSimpleIconCard).join("")}</div>`
              : section.displayAs === "simpleCardsWithIcon"
                ? `<div class="mb-8 grid gap-x-8 gap-y-7 ${columns.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}">${columns.map(createSimpleSectionColumnWithIcon).join("")}</div>`
              : `<div class="mb-8 grid gap-5 ${columns.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}">${columns.map(createSectionColumn).join("")}</div>`
        ) : ""}
        ${groups.length ? `<div class="mt-10 sm:mt-14">${groups.map((group) => {
          const groupBody = Array.isArray(group.body) ? group.body : group.body ? [group.body] : [];
          const groupColumns = Array.isArray(group.columns) ? group.columns : [];
          const groupMetrics = Array.isArray(group.metrics) ? group.metrics : [];
          const explicitGridCols = Number(group.gridCols);
          const gridCols = explicitGridCols === 3
            ? "lg:grid-cols-3"
            : explicitGridCols === 4
              ? "lg:grid-cols-4"
              : groupColumns.length === 4
                ? "lg:grid-cols-4"
                : (groupColumns.length > 4 && groupColumns.length % 2 === 0
                  ? "lg:grid-cols-2"
                  : (groupColumns.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"));
          return `
            <div class="mb-16 last:mb-0 sm:mb-20">
              ${group.label ? `<p class="mb-3 text-[11px] font-semibold uppercase text-brand-700 dark:text-brand-300">${escapeHtml(group.label)}</p>` : ""}
              ${group.title ? `<h3 class="mb-3 text-xl font-semibold text-slate-950 dark:text-white sm:text-2xl">${escapeHtml(group.title)}</h3>` : ""}
              ${groupBody.length ? `<div class="mb-6 max-w-4xl">${groupBody.map((paragraph) => `<p class="mb-3 text-base leading-8 text-slate-600 dark:text-slate-300">${renderInlineText(paragraph)}</p>`).join("")}</div>` : ""}
              ${groupColumns.length ? `<div class="grid gap-5 ${gridCols}">${groupColumns.map(group.displayAs === "simpleCardsWithIcon" ? createSimpleSectionColumnWithIcon : group.displayAs === "simpleCards" ? createSimpleSectionColumn : createSectionColumn).join("")}</div>` : ""}
              ${groupMetrics.length ? (group.displayAs === "metricCards" ? createMetricCards(groupMetrics) : group.displayAs === "compactMetricCards" ? createCompactMetricCards(groupMetrics) : createMetricsTable(groupMetrics)) : ""}
            </div>
          `;
        }).join("")}</div>` : ""}
        ${cards.length ? `<div class="grid gap-5 lg:grid-cols-2">${cards.map(createInfoCard).join("")}</div>` : ""}
        ${bullets.length ? `<div class="mt-1">${createBulletList(bullets)}</div>` : ""}
        ${subsections.length ? `<div class="mt-10 grid gap-8">${subsections.map((subsection) => {
          const subsectionBullets = Array.isArray(subsection.bullets) ? subsection.bullets : [];
          return `
            <div>
              ${subsection.title ? `<h3 class="mb-4 text-lg font-semibold text-slate-950 dark:text-white">${escapeHtml(subsection.title)}</h3>` : ""}
              ${subsection.body ? `<p class="mb-4 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">${escapeHtml(subsection.body)}</p>` : ""}
              ${subsectionBullets.length ? createBulletList(subsectionBullets) : ""}
            </div>
          `;
        }).join("")}</div>` : ""}
        ${images.length ? `<div class="mt-10 grid gap-6 ${section.imageGridCols === 3 ? "lg:grid-cols-3" : section.imageGridCols === 2 ? "md:grid-cols-2" : ""}">${images.map((image) => `
          <figure class="overflow-hidden rounded-[1.5rem]">
            <img class="block w-full" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || section.title || "")}" loading="lazy">
          </figure>
        `).join("")}</div>` : ""}
        ${imageLoop}
        ${createHighlightBlock(section.highlight)}
        ${hasDiagramContent ? `
          <figure class="${diagramFigureClass}">
            ${(section.diagramLabel || section.mermaidLabel) ? `<h3 class="text-lg font-semibold text-slate-950 dark:text-white">${escapeHtml(section.diagramLabel || section.mermaidLabel)}</h3>` : ""}
            ${(section.diagramCaption || section.mermaidCaption) ? `<p class="${(section.diagramLabel || section.mermaidLabel) ? "mt-3" : ""} text-base leading-8 text-slate-600 dark:text-slate-300">${escapeHtml(section.diagramCaption || section.mermaidCaption)}</p>` : ""}
            ${Array.isArray(section.diagramImageLoop) && section.diagramImageLoop.length
              ? `<div class="image-loop image-loop-${section.diagramImageLoop.length} ${(section.diagramLabel || section.mermaidLabel || section.diagramCaption || section.mermaidCaption) ? "mt-6 " : ""}relative w-full">
                  ${section.diagramImageLoop.map((img, i) => `<img class="image-loop-img image-loop-img-${i + 1} ${i === 0 ? "block w-full" : "absolute inset-0 h-full w-full object-contain"}" src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || section.diagramImageAlt || section.diagramLabel || "")}" loading="${i === 0 ? "eager" : "lazy"}">`).join("")}
                </div>`
              : section.diagramImageSrc
                ? `<img class="${(section.diagramLabel || section.mermaidLabel || section.diagramCaption || section.mermaidCaption) ? "mt-6 " : ""}block w-full" src="${escapeHtml(section.diagramImageSrc)}" alt="${escapeHtml(section.diagramImageAlt || section.diagramLabel || section.mermaidLabel || "")}" loading="lazy">`
                : `<div class="mermaid ${(section.diagramLabel || section.mermaidLabel || section.diagramCaption || section.mermaidCaption) ? "mt-6 " : ""}w-full overflow-x-auto">${section.diagramMermaid || section.mermaid}</div>`
            }
          </figure>
        ` : ""}
        ${section.action && (section.action.href || section.action.disabled) ? `
          <div class="mt-8">
            ${section.action.disabled
              ? `<button type="button" disabled aria-disabled="true" class="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-full bg-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                  ${escapeHtml(section.action.label || "Detail")}
                  <span class="ml-2" aria-hidden="true">→</span>
                </button>`
              : `<a class="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:bg-brand-500 dark:hover:bg-brand-400" href="${escapeHtml(section.action.href)}">
                  ${escapeHtml(section.action.label || "Detail")}
                  <span class="ml-2" aria-hidden="true">→</span>
                </a>`
            }
          </div>
        ` : ""}
        ${section.summary ? `<p class="mt-8 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">${escapeHtml(section.summary)}</p>` : ""}
        ${sectionImage}
        ${bottomImages.length ? `<div class="mt-10 grid gap-6 ${section.bottomImageGridCols === 2 ? "md:grid-cols-2" : ""}">${bottomImages.map((image) => `
          <figure class="overflow-hidden rounded-[1.5rem]">
            <img class="block w-full" src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || section.title || "")}" loading="lazy">
          </figure>
        `).join("")}</div>` : ""}
        ${carousel}
      </div>
    </section>
  `;
}

function initCarousel(root) {
  const track = root.querySelector("[data-carousel-track]");
  const slides = [...root.querySelectorAll("[data-carousel-slide]")];
  const dots = [...root.querySelectorAll("[data-carousel-dot]")];
  const prevButton = root.querySelector("[data-carousel-prev]");
  const nextButton = root.querySelector("[data-carousel-next]");
  if (!track || !slides.length || !prevButton || !nextButton) return;

  let currentIndex = 0;
  let touchStartX = null;
  let touchDeltaX = 0;

  function render() {
    const currentSlide = slides[currentIndex];
    const offset = currentSlide ? currentSlide.offsetLeft : 0;
    track.style.transform = `translateX(-${offset}px)`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("bg-brand-500", isActive);
      dot.classList.toggle("dark:bg-brand-400", isActive);
      dot.classList.toggle("bg-slate-300", !isActive);
      dot.classList.toggle("dark:bg-slate-700", !isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    render();
  }

  prevButton.addEventListener("click", () => goTo(currentIndex - 1));
  nextButton.addEventListener("click", () => goTo(currentIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.slideIndex)));
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  });

  root.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX ?? null;
    touchDeltaX = 0;
  }, { passive: true });

  root.addEventListener("touchmove", (event) => {
    if (touchStartX == null) return;
    touchDeltaX = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
  }, { passive: true });

  root.addEventListener("touchend", () => {
    if (touchStartX == null) return;
    if (touchDeltaX > 40) goTo(currentIndex - 1);
    if (touchDeltaX < -40) goTo(currentIndex + 1);
    touchStartX = null;
    touchDeltaX = 0;
  });

  render();
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(initCarousel);
}

function initMermaid() {
  if (typeof window === "undefined" || typeof window.mermaid === "undefined") return;
  const blocks = document.querySelectorAll(".mermaid");
  if (!blocks.length) return;
  try {
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      flowchart: { curve: "basis", htmlLabels: true, useMaxWidth: true },
      theme: "base",
      themeVariables: {
        fontFamily: "Inter, system-ui, sans-serif",
        primaryColor: "#ebe6ff",
        primaryTextColor: "#3d3088",
        primaryBorderColor: "#7b5cff",
        lineColor: "#6d50f0",
        secondaryColor: "#f4f2ff",
        secondaryBorderColor: "#bcaeff",
        tertiaryColor: "#ffffff",
        tertiaryBorderColor: "#bcaeff",
      },
    });
    window.mermaid.run({ querySelector: ".mermaid" }).catch(function (err) {
      console.error("Mermaid render error:", err);
    });
  } catch (err) {
    console.error("Mermaid init error:", err);
  }
}

function initSectionNav(navSections) {
  const existing = document.getElementById("project-section-nav");
  if (existing) {
    if (existing._cleanup) existing._cleanup();
    existing.remove();
  }
  if (!navSections.length) return;

  const nav = document.createElement("nav");
  nav.id = "project-section-nav";
  nav.setAttribute("aria-label", "Page sections");
  nav.className = "fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden 2xl:flex flex-col gap-0.5";

  navSections.forEach(function ({ label, id }) {
    const a = document.createElement("a");
    a.href = "#" + id;
    a.dataset.navTarget = id;
    a.className = "group flex items-center gap-2.5 py-1.5";

    const bar = document.createElement("span");
    bar.dataset.navBar = "";
    bar.className = "flex-none h-4 w-0.5 rounded-full bg-slate-200 transition-colors duration-200 dark:bg-slate-700";

    const text = document.createElement("span");
    text.dataset.navLabel = "";
    text.className = "text-[11px] font-semibold uppercase text-slate-400 transition-colors duration-200 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300";
    text.textContent = label;

    a.appendChild(bar);
    a.appendChild(text);
    nav.appendChild(a);
  });

  document.body.appendChild(nav);

  function setActive(activeId) {
    nav.querySelectorAll("[data-nav-target]").forEach(function (item) {
      const isActive = item.dataset.navTarget === activeId;
      const bar = item.querySelector("[data-nav-bar]");
      const label = item.querySelector("[data-nav-label]");
      if (bar) bar.className = "flex-none h-4 w-0.5 rounded-full transition-colors duration-200 " +
        (isActive ? "bg-brand-500 dark:bg-brand-400" : "bg-slate-200 dark:bg-slate-700");
      if (label) label.className = "text-[11px] font-semibold uppercase transition-colors duration-200 group-hover:text-slate-700 dark:group-hover:text-slate-300 " +
        (isActive ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500");
    });
  }

  const sectionEls = navSections.map(function (s) { return document.getElementById(s.id); }).filter(Boolean);

  function updateActive() {
    const threshold = window.innerHeight * 0.3;
    let active = sectionEls[0];
    for (const el of sectionEls) {
      if (el.getBoundingClientRect().top <= threshold) active = el;
    }
    if (active) setActive(active.id);
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
  nav._cleanup = function () { window.removeEventListener("scroll", updateActive); };
}

function createLiteSections(project) {
  const tags = (project.tags || []).map((tag) => tag.label).join(" / ");
  const sections = [
    {
      label: "Overview",
      title: "Project summary",
      body: [project.overview || project.description || project.summary],
      cards: project.overviewCards || [],
    },
    {
      label: "Focus",
      title: "What this supporting project demonstrates",
      body: [
        `This supporting project expands the portfolio beyond featured case studies and reinforces Thanh's product-oriented thinking through practical system and workflow work.`,
        tags ? `Primary themes: ${tags}.` : ""
      ].filter(Boolean),
      steps: project.steps || [],
    }
  ];

  return sections.map(createRichSection).join("");
}

function executeInlineScripts(container) {
  container.querySelectorAll("script").forEach(function (script) {
    const newScript = document.createElement("script");
    newScript.textContent = script.textContent;
    if (script.parentNode) script.parentNode.replaceChild(newScript, script);
  });
}

function renderNotFound() {
  document.title = "Project Detail | Truong H. Viet Thanh";
  if (pageDescriptionMeta) {
    pageDescriptionMeta.setAttribute(
      "content",
      "Project detail page for Truong H. Viet Thanh's AI product and product design portfolio."
    );
  }
  if (projectTitleBar) {
    projectTitleBar.classList.add("pointer-events-none", "opacity-0", "-translate-y-2");
    projectTitleBar.setAttribute("aria-hidden", "true");
  }
  if (foundRoot) foundRoot.hidden = true;
  if (notFoundRoot) notFoundRoot.hidden = false;
}

function renderFound(project) {
  const metaCards = [
    { label: "Timeline", value: project.timeline },
    { label: "Company", value: project.company },
    { label: "Duration", value: project.duration },
  ].filter((item) => item.value);

  document.title = `${project.title} | Truong H. Viet Thanh`;
  if (pageDescriptionMeta) {
    pageDescriptionMeta.setAttribute(
      "content",
      project.description || project.summary || "Project detail page for Truong H. Viet Thanh's portfolio."
    );
  }
  if (breadcrumbRoot && window.buildBreadcrumb) {
    window.buildBreadcrumb(
      breadcrumbRoot,
      [{ label: "Works", href: "./index.html#work" }, { label: project.title }],
      { darkMode: true }
    );
  }
  if (tagsRoot) tagsRoot.innerHTML = renderTagList(project.tags || []);
  if (titleRoot) titleRoot.textContent = project.title;
  if (projectTitleBarText) projectTitleBarText.textContent = project.title;
  if (roleRoot) {
    const shouldShowRole = project.role && !project.hideDetailRole;
    roleRoot.textContent = shouldShowRole ? project.role : "";
    roleRoot.hidden = !shouldShowRole;
  }
  if (summaryRoot) summaryRoot.textContent = project.description || project.summary;
  if (metaRoot) metaRoot.innerHTML = createRoleContributionCard(project) + metaCards.map(createMetaCard).join("");
  if (showcaseSectionRoot) showcaseSectionRoot.hidden = !project.showcaseImageSrc;
  if (showcaseRoot) showcaseRoot.innerHTML = createProjectShowcase(project);
  if (navigationSectionRoot) navigationSectionRoot.innerHTML = createProjectNavigationSection(project);

  const projectSections = getProjectSections(project);
  if (detailSectionsRoot) {
    detailSectionsRoot.innerHTML = project.detailLevel === "lite"
      ? createLiteSections(project)
      : projectSections.map(createRichSection).join("");
    executeInlineScripts(detailSectionsRoot);
  }
  initCarousels();
  initMermaid();
  const navSections = (project.detailLevel === "lite"
    ? [{ label: "Overview" }, { label: "Focus" }]
    : projectSections
  ).map(function (s, i) { return { label: s.label, id: getSectionId(s, i) }; })
   .filter(function (s) { return s.label; });
  initSectionNav(navSections);
  const shouldShowOutcomes = !project.hideOutcomesSummary && Array.isArray(project.outcomes) && project.outcomes.length > 0;
  if (outcomesSectionRoot) outcomesSectionRoot.hidden = !shouldShowOutcomes;
  if (shouldShowOutcomes) {
    if (outcomesLabelRoot) outcomesLabelRoot.textContent = project.outcomesLabel || "Outcomes";
    if (outcomesRoot) outcomesRoot.innerHTML = (project.outcomes || []).map(createOutcomeCard).join("");
  } else if (outcomesRoot) {
    outcomesRoot.innerHTML = "";
  }

  const endImage = project.endImage && project.endImage.src ? project.endImage : null;
  if (endImageSectionRoot) endImageSectionRoot.hidden = !endImage;
  if (endImage) {
    if (endImageRoot) {
      endImageRoot.setAttribute("src", endImage.src);
      endImageRoot.setAttribute("alt", endImage.alt || "");
    }
    if (endImageCaptionRoot) endImageCaptionRoot.textContent = endImage.caption || endImage.alt || "";
  } else if (endImageRoot) {
    endImageRoot.removeAttribute("src");
    endImageRoot.setAttribute("alt", "");
    if (endImageCaptionRoot) endImageCaptionRoot.textContent = "";
  }
  initProjectImageLightbox();

  if (paginationRoot && typeof getAdjacentProjects === "function") {
    const { previous, next } = getAdjacentProjects(project.id);
    paginationRoot.innerHTML = [
      createProjectNavCard(previous, "previous"),
      createProjectNavCard(next, "next"),
    ].join("");
  }

  if (foundRoot) foundRoot.hidden = false;
  if (notFoundRoot) notFoundRoot.hidden = true;
}

function setStickyTitleVisibility(isVisible) {
  if (!projectTitleBar) return;
  projectTitleBar.classList.toggle("pointer-events-none", !isVisible);
  projectTitleBar.classList.toggle("opacity-0", !isVisible);
  projectTitleBar.classList.toggle("-translate-y-2", !isVisible);
  projectTitleBar.classList.toggle("opacity-100", isVisible);
  projectTitleBar.classList.toggle("translate-y-0", isVisible);
  projectTitleBar.setAttribute("aria-hidden", String(!isVisible));
}

function setupStickyTitle(project) {
  if (!projectTitleBar || !projectHero || !project) return;

  setStickyTitleVisibility(false);

  if (projectHero._stickyObserver) {
    projectHero._stickyObserver.disconnect();
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      setStickyTitleVisibility(!entry.isIntersecting);
    },
    {
      rootMargin: "-76px 0px 0px 0px",
      threshold: 0.15,
    }
  );

  observer.observe(projectHero);
  projectHero._stickyObserver = observer;
}

function toggleScrolledNav() {
  if (nav) nav.classList.toggle("is-scrolled", window.scrollY > SCROLLED_THRESHOLD);
}

function toggleMenu(forceState) {
  if (!menu || !menuToggle) return;
  const nextState = typeof forceState === "boolean" ? forceState : !menu.classList.contains("is-open");
  menu.classList.toggle("is-open", nextState);
  menuToggle.setAttribute("aria-expanded", String(nextState));
  document.body.classList.toggle("menu-open", nextState);
}

async function initPage() {
  applyTheme((function () { try { return localStorage.getItem("theme") || "light"; } catch (_) { return "light"; } })());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  let project = typeof getProjectById === "function" ? getProjectById(projectId) : null;
  if (project && typeof loadProjectDetail === "function") {
    await loadProjectDetail(project);
    project = getProjectById(projectId);
  }

  if (!project) {
    renderNotFound();
  } else {
    renderFound(project);
    setupStickyTitle(project);
  }

  toggleScrolledNav();
  window.addEventListener("scroll", toggleScrolledNav, { passive: true });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-nav-link]")) toggleMenu(false);
    const scopedImage = getScopedProjectImage(event.target);
    if (scopedImage) openImageLightbox(scopedImage);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeImageLightbox();
    if ((event.key === "Enter" || event.key === " ") && getScopedProjectImage(event.target)) {
      event.preventDefault();
      openImageLightbox(event.target);
    }
  });

  if (menuToggle) menuToggle.addEventListener("click", () => toggleMenu());
  imageLightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closeImageLightbox);
  });
  if (imageLightboxRoot) {
    imageLightboxRoot.addEventListener("click", (event) => {
      if (event.target === imageLightboxRoot) closeImageLightbox();
    });
  }
}

initPage();
