if (!window.portfolioContent) {
  console.error("Portfolio content not loaded. Ensure content.js is included before app.js.");
}

const content = window.portfolioContent || {};

const featuredProjectsRoot = document.querySelector("[data-featured-projects]");
const otherProjectsRoot = document.querySelector("[data-other-projects]");
const timelineRoot = document.querySelector("[data-timeline]");
const skillGroupsRoot = document.querySelector("[data-skill-groups]");
const certificationsRoot = document.querySelector("[data-certifications]");
const educationRoot = document.querySelector("[data-education]");
const aboutLeadRoot = document.querySelector("[data-about-lead]");
const aboutParagraphsRoot = document.querySelector("[data-about-paragraphs]");
const focusTagsRoot = document.querySelector("[data-focus-tags]");
const aboutPortraitRoot = document.querySelector("[data-about-portrait]");
const aboutImageRoot = document.querySelector("[data-about-image]");
const contactItemsRoot = document.querySelector("[data-contact-items]");

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");

const nav = document.querySelector("[data-nav]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const sections = [...document.querySelectorAll("main section[id]")];

const MOON = "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z";
const SUN = "M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-9h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM3 11H2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm14.66-5.07.71-.71a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41-1.41zM5.63 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41zm11.32 1.41-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41zM5.63 6.34 4.92 5.63a1 1 0 0 1 1.41-1.41l.71.71A1 1 0 0 1 5.63 6.34z";

const NAV_SCROLL_OFFSET = 140;
const SCROLLED_THRESHOLD = 12;

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  if (themeIcon) themeIcon.setAttribute("d", theme === "light" ? SUN : MOON);
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  }
  try { localStorage.setItem("theme", theme); } catch (_) {}
}

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(str) {
  return escapeHtml(str);
}

function renderTagList(tags = []) {
  if (!Array.isArray(tags)) return "";
  return tags
    .map((tag) => `<span class="${escapeHtml(tag.className)}">${escapeHtml(tag.label)}</span>`)
    .join("");
}

function projectHref(projectId) {
  return `./project.html?id=${encodeURIComponent(projectId)}`;
}

function usesScopedProjectAsset(src = "") {
  return /\/(?:thumbnails\/)?0[1-3]-[^/]+\.png$/u.test(src);
}

function createProjectThumb(project) {
  if (project.thumbImageSrc) {
    const usesNaturalRatio = usesScopedProjectAsset(project.thumbImageSrc);
    const frameClass = usesNaturalRatio
      ? "project-thumb overflow-hidden bg-slate-100 dark:bg-slate-900"
      : "project-thumb aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900";
    const imageClass = usesNaturalRatio
      ? "block h-auto w-full object-contain"
      : "block h-full w-full object-cover";

    return `
      <div class="${frameClass}" aria-hidden="true">
        <img
          class="${imageClass}"
          src="${escapeHtml(project.thumbImageSrc)}"
          alt="${escapeHtml(project.thumbImageAlt || "")}"
        >
      </div>
    `;
  }

  return `
    <div class="project-thumb flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-100 via-white to-slate-100 text-5xl font-bold text-brand-300 dark:from-brand-500/15 dark:via-slate-900 dark:to-slate-900 dark:text-brand-500/40" aria-hidden="true">
      <span>${escapeHtml(project.thumb)}</span>
    </div>
  `;
}

function createFeaturedCard(project) {
  const isAvailable = project.isAvailable !== false;
  const wrapperTag = isAvailable ? "a" : "div";
  const href = isAvailable ? ` href="${projectHref(project.id)}"` : "";
  const cardState = isAvailable
    ? "View case study <span aria-hidden=\"true\">→</span>"
    : "Coming soon";
  const availabilityBadge = !isAvailable
    ? `<span class="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">Coming soon</span>`
    : "";
  const titleTag = project.titleTag
    ? `<span class="project-title-tag inline-flex shrink-0 rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase leading-none text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200">${escapeHtml(project.titleTag)}</span>`
    : "";
  return `
    <article class="project-card reveal overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <${wrapperTag} class="project-trigger group block h-full w-full text-left"${href}>
        ${createProjectThumb(project)}
        <div class="project-body p-7">
          ${availabilityBadge}
          <p class="project-kicker mb-3 text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(project.role)}</p>
          <h3 class="project-title flex flex-wrap items-center gap-2 text-xl font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(project.title)}${titleTag}</h3>
          <p class="project-text mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
          <span class="card-cta mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase ${isAvailable ? "text-brand-600 transition group-hover:text-brand-500 dark:text-brand-300 dark:group-hover:text-brand-200" : "text-amber-700 dark:text-amber-200"}">${cardState}</span>
        </div>
      </${wrapperTag}>
    </article>
  `;
}

function createSupportingCard(project) {
  const isAvailable = project.isAvailable !== false;
  const wrapperTag = isAvailable ? "a" : "div";
  const href = isAvailable ? ` href="${projectHref(project.id)}"` : "";
  const availabilityBadge = !isAvailable
    ? `<span class="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">Coming soon</span>`
    : "";
  return `
    <article class="mini-card reveal overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <${wrapperTag} class="mini-trigger group block h-full w-full text-left"${href}>
        <div class="mini-body p-6">
          ${availabilityBadge}
          <p class="mini-kicker mb-3 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">Supporting project</p>
          <h3 class="mini-title text-lg font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(project.title)}</h3>
          <p class="mini-text mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
          <span class="card-cta mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase ${isAvailable ? "text-brand-600 transition group-hover:text-brand-500 dark:text-brand-300 dark:group-hover:text-brand-200" : "text-amber-700 dark:text-amber-200"}">${isAvailable ? "Open details <span aria-hidden=\"true\">→</span>" : "Coming soon"}</span>
        </div>
      </${wrapperTag}>
    </article>
  `;
}

function createTimelineItem(item) {
  const logoText = item.logoText || (item.company || "").split(/\s+/).filter(Boolean).map((word) => word[0]).join("").slice(0, 4).toUpperCase();
  const logo = item.logoSrc
    ? `<img class="h-full w-full object-contain" src="${escapeHtml(item.logoSrc)}" alt="${escapeHtml(item.company)} logo" loading="lazy">`
    : `<span aria-hidden="true">${escapeHtml(logoText)}</span>`;

  // Multi-role card (e.g. Visily with Freelance + Full-time)
  if (item.roles && item.roles.length > 0) {
    const rolesHtml = item.roles.map((r, i) => {
      const isLast = i === item.roles.length - 1;
      const pointsHtml = (r.points || []).length > 0
        ? `<ul class="timeline-points mt-3 grid gap-2">${r.points.map((p) => `<li class="relative pl-5 text-sm leading-7 text-slate-600 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300">${escapeHtml(p)}</li>`).join("")}</ul>`
        : "";
      return `
        <div class="${isLast ? "" : "mb-4 border-b border-slate-100 pb-4 dark:border-slate-800"}">
          <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p class="timeline-role text-sm font-semibold uppercase text-slate-800 dark:text-slate-100">${escapeHtml(r.role)}</p>
            <span class="text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(r.period)}</span>
            ${r.type ? `<span class="text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(r.type)}</span>` : ""}
          </div>
          ${(r.keywords || []).length > 0 ? `<div class="mt-2 flex flex-wrap gap-1.5">${r.keywords.map(k => `<span class="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">${escapeHtml(k)}</span>`).join("")}</div>` : ""}
          ${pointsHtml}
        </div>`;
    }).join("");

    const overallPeriod = item.period || "";

    return `
    <article class="timeline-item reveal grid min-w-0 gap-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 sm:p-8 lg:grid-cols-[340px_minmax(0,1fr)]">
      <div class="timeline-meta flex gap-5 border-b border-slate-200 pb-5 dark:border-slate-800 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        <div class="timeline-logo flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white text-base font-bold uppercase text-brand-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-brand-300">
          ${logo}
        </div>
        <div class="min-w-0 pt-1">
          <h3 class="timeline-company text-2xl font-bold leading-tight text-slate-950 dark:text-white">${escapeHtml(item.company)}</h3>
          ${overallPeriod ? `<p class="timeline-period mt-3 text-[12px] font-bold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(overallPeriod)}</p>` : ""}
        </div>
      </div>
      <div>
        ${rolesHtml}
        ${item.summary ? `<p class="timeline-summary mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:text-slate-300">${escapeHtml(item.summary)}</p>` : ""}
      </div>
    </article>
  `;
  }

  // Single-role card (default)
  const periodMatch = String(item.period || "").match(/^(.*?)\s*(\([^)]*\))$/);
  const periodDate = periodMatch ? periodMatch[1].trim() : item.period;
  const periodDuration = periodMatch ? periodMatch[2] : "";

  return `
    <article class="timeline-item reveal grid min-w-0 gap-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40 sm:p-8 lg:grid-cols-[340px_minmax(0,1fr)]">
      <div class="timeline-meta flex gap-5 border-b border-slate-200 pb-5 dark:border-slate-800 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
        <div class="timeline-logo flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white text-base font-bold uppercase text-brand-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-brand-300">
          ${logo}
        </div>
        <div class="min-w-0 pt-1">
          <h3 class="timeline-company text-2xl font-bold leading-tight text-slate-950 dark:text-white">${escapeHtml(item.company)}</h3>
          <p class="timeline-period mt-3 text-[12px] font-bold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(periodDate)}</p>
          ${periodDuration ? `<p class="timeline-duration mt-1 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(periodDuration)}</p>` : ""}
        </div>
      </div>
      <div>
        <p class="timeline-role text-sm font-semibold uppercase text-slate-800 dark:text-slate-100">${escapeHtml(item.role)}</p>
        ${(item.keywords || []).length > 0 ? `<div class="mt-2 flex flex-wrap gap-1.5">${item.keywords.map(k => `<span class="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">${escapeHtml(k)}</span>`).join("")}</div>` : ""}
        ${item.summary ? `<p class="timeline-summary mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(item.summary)}</p>` : ""}
        <ul class="timeline-points mt-4 grid gap-2">
          ${(item.points || []).map((point) => `<li class="relative pl-5 text-sm leading-7 text-slate-600 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300">${escapeHtml(point)}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function createSkillTagRow(tags) {
  if (!Array.isArray(tags)) return "";
  const tagHtml = tags.map(tag =>
    `<span class="skill-tag inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">${escapeHtml(tag)}</span>`
  ).join('<span class="skill-tag-sep mx-1 text-slate-300 dark:text-slate-600 select-none">·</span>');
  return `<div class="skill-tag-row reveal flex flex-wrap items-center gap-y-2">${tagHtml}</div>`;
}

function createSkillGroup(group) {
  if (!group || typeof group !== "object") return "";
  // If it's an array (legacy format), fall back to tag row
  if (Array.isArray(group)) return createSkillTagRow(group);
  const items = Array.isArray(group.items) ? group.items : [];
  const itemsHtml = items
    .map((item) => `<p class="skill-desc mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(item)}</p>`)
    .join("");
  return `
    <article class="skill-group reveal rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <div class="flex items-start gap-4">
        <span class="skill-number shrink-0 text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300 pt-1">${escapeHtml(group.number || "")}</span>
        <div class="min-w-0">
          <h3 class="skill-title text-base font-semibold leading-snug text-slate-950 dark:text-white">${escapeHtml(group.title || "")}</h3>
          ${itemsHtml}
        </div>
      </div>
    </article>
  `;
}

function createCertificationCard(cert) {
  const logoMap = {
    safe: `<div class="flex h-full w-full items-center justify-center rounded-full bg-teal-600 text-[8px] font-extrabold uppercase leading-none text-white">SAFe</div>`,
    "google-cloud": `<div class="grid h-full w-full grid-cols-2 overflow-hidden rounded-[0.2rem] bg-slate-100"><span class="bg-stone-200"></span><span class="bg-sky-200"></span><span class="bg-slate-500"></span><span class="bg-slate-300"></span></div>`,
    coursera: `<div class="flex h-full w-full items-center justify-center rounded bg-blue-700 text-[8px] font-bold lowercase text-white">coursera</div>`,
    pendo: `<div class="h-0 w-0 border-b-[13px] border-r-[13px] border-t-[13px] border-b-transparent border-r-pink-500 border-t-transparent"></div>`,
    "grow-google": `<div class="flex h-full w-full items-center justify-center rounded bg-white text-center text-[6px] font-bold leading-[0.9] text-slate-700"><span>Grow<br>with<br><span class="text-blue-600">Google</span></span></div>`,
  };
  const logo = cert.logoSrc
    ? `<img class="h-full w-full object-contain" src="${escapeHtml(cert.logoSrc)}" alt="${escapeHtml(cert.provider || cert.title)} logo" loading="lazy">`
    : logoMap[cert.logoType] || `<div class="flex h-full w-full items-center justify-center rounded bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">${escapeHtml((cert.title || "C").slice(0, 1))}</div>`;
  const credentialMeta = cert.credentialId ? `<p class="cert-id mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">Credential ID ${escapeHtml(cert.credentialId)}</p>` : "";
  const issued = cert.issued ? `<p class="cert-issued mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">${escapeHtml(cert.issued)}</p>` : "";
  const credentialButtonClass = "cert-button mt-4 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300";
  let credentialButton = "";
  if (cert.showCredential && cert.credentialImageSrc) {
    credentialButton = `<button class="${credentialButtonClass}" type="button" data-cert-image="${escapeAttribute(cert.credentialImageSrc)}" data-cert-title="${escapeAttribute(cert.title)}">Show credential <span aria-hidden="true">↗</span></button>`;
  } else if (cert.showCredential && cert.credentialHref) {
    credentialButton = `<a class="${credentialButtonClass}" href="${escapeAttribute(cert.credentialHref)}" target="_blank" rel="noopener noreferrer">Show credential <span aria-hidden="true">↗</span></a>`;
  } else if (cert.showCredential) {
    credentialButton = `<button class="${credentialButtonClass}" type="button" aria-disabled="true">Show credential <span aria-hidden="true">↗</span></button>`;
  }
  const skills = cert.skills ? `<p class="cert-skills mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300"><strong class="font-semibold text-slate-950 dark:text-white">Skills:</strong> ${escapeHtml(cert.skills)}</p>` : "";

  return `
    <article class="cert-card reveal flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <div class="cert-logo mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded bg-white dark:bg-slate-950">
        ${logo}
      </div>
      <div class="min-w-0">
        <h3 class="cert-title text-base font-semibold leading-snug text-slate-950 dark:text-white">${escapeHtml(cert.title)}</h3>
        <p class="cert-provider mt-0.5 text-sm leading-5 text-slate-800 dark:text-slate-200">${escapeHtml(cert.provider || cert.meta || "")}</p>
        ${issued}
        ${credentialMeta}
        ${credentialButton}
        ${skills}
      </div>
    </article>
  `;
}

function createContactItem(item) {
  const tag = item.href ? "a" : "div";
  const href = item.href ? ` href="${escapeHtml(item.href)}"` : "";
  return `
    <${tag} class="contact-item reveal flex min-w-0 items-center justify-between gap-4 rounded-[1.25rem] border p-5 transition duration-200 ${item.href ? "hover:-translate-y-1" : ""} ${item.featured ? "border-brand-200 bg-brand-50 dark:border-brand-500/20 dark:bg-brand-500/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}"${href}>
      <div class="min-w-0">
        <span class="contact-label block text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${escapeHtml(item.label)}</span>
        <span class="contact-value mt-2 block text-base font-medium text-slate-950 [overflow-wrap:anywhere] dark:text-white">${escapeHtml(item.value)}</span>
      </div>
      ${item.href ? `<span class="contact-arrow shrink-0 text-brand-600 dark:text-brand-300" aria-hidden="true">→</span>` : ""}
    </${tag}>
  `;
}

function hydratePage() {
  if (!content.featuredProjects) return;
  const visibleFeaturedProjects = content.featuredProjects.filter((project) => project.isHidden !== true);
  const visibleSupportingProjects = (content.supportingProjects || []).filter((project) => project.isHidden !== true);
  if (featuredProjectsRoot) featuredProjectsRoot.innerHTML = visibleFeaturedProjects.map(createFeaturedCard).join("");
  if (otherProjectsRoot) {
    otherProjectsRoot.innerHTML = visibleSupportingProjects.map(createSupportingCard).join("");
    const otherProjectsSection = otherProjectsRoot.closest(".other-projects");
    if (otherProjectsSection) otherProjectsSection.hidden = visibleSupportingProjects.length === 0;
  }
  if (timelineRoot) timelineRoot.innerHTML = (content.timeline || []).map(createTimelineItem).join("");
  if (skillGroupsRoot) skillGroupsRoot.innerHTML = (content.skillGroups || []).map(createSkillGroup).join("");
  if (certificationsRoot) certificationsRoot.innerHTML = (content.certifications || []).map(createCertificationCard).join("");
  if (educationRoot) educationRoot.innerHTML = (content.education || []).map(createCertificationCard).join("");
  if (aboutLeadRoot) aboutLeadRoot.textContent = content.aboutLead || "";
  if (aboutParagraphsRoot) {
    aboutParagraphsRoot.innerHTML = (content.aboutParagraphs || [])
      .map((paragraph) => `<p class="about-body text-base leading-8 text-slate-600 dark:text-slate-300">${escapeHtml(paragraph)}</p>`)
      .join("");
  }
  if (focusTagsRoot) {
    focusTagsRoot.innerHTML = (content.focusTags || [])
      .map((tag) => `<span class="focus-tag inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200">${escapeHtml(tag)}</span>`)
      .join("");
  }
  if (aboutPortraitRoot && aboutImageRoot) {
    const hasAboutImage = Boolean(content.aboutImageSrc);
    aboutPortraitRoot.hidden = !hasAboutImage;
    if (hasAboutImage) {
      aboutImageRoot.src = content.aboutImageSrc;
      aboutImageRoot.alt = content.aboutImageAlt || "";
    } else {
      aboutImageRoot.removeAttribute("src");
      aboutImageRoot.alt = "";
    }
  }
  if (contactItemsRoot) contactItemsRoot.innerHTML = (content.contactItems || []).map(createContactItem).join("");
}

function ensureCredentialModal() {
  let modal = document.querySelector("[data-cert-modal]");
  if (modal) return modal;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm" data-cert-modal>
      <div class="relative max-h-full w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-950">
        <div class="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <h3 class="text-base font-semibold text-slate-950 dark:text-white" data-cert-modal-title>Credential</h3>
          <button class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-300" type="button" data-cert-modal-close aria-label="Close credential preview">×</button>
        </div>
        <div class="max-h-[80vh] overflow-auto bg-slate-100 p-4 dark:bg-slate-900">
          <img class="mx-auto block h-auto max-h-[74vh] w-auto max-w-full rounded-lg bg-white shadow-card" data-cert-modal-image alt="">
        </div>
      </div>
    </div>
  `);
  modal = document.querySelector("[data-cert-modal]");
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-cert-modal-close]")) closeCredentialModal();
  });
  return modal;
}

function openCredentialModal(imageSrc, title) {
  const modal = ensureCredentialModal();
  const image = modal.querySelector("[data-cert-modal-image]");
  const heading = modal.querySelector("[data-cert-modal-title]");
  if (image) {
    image.src = imageSrc;
    image.alt = `${title} credential`;
  }
  if (heading) heading.textContent = title;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeCredentialModal() {
  const modal = document.querySelector("[data-cert-modal]");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

function syncActiveNav() {
  const offset = window.scrollY + NAV_SCROLL_OFFSET;
  let activeId = sections[0]?.id;
  sections.forEach((section) => {
    if (offset >= section.offsetTop) activeId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
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

function setupRevealObserver() {
  const revealTargets = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  revealTargets.forEach((target) => target.classList.add("reveal-pending"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((target) => observer.observe(target));
}

let scrollRafId = null;

function onScroll() {
  if (scrollRafId) return;
  scrollRafId = requestAnimationFrame(() => {
    syncActiveNav();
    toggleScrolledNav();
    scrollRafId = null;
  });
}

applyTheme((function () { try { return localStorage.getItem("theme") || "light"; } catch (_) { return "light"; } })());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    applyTheme(current === "light" ? "dark" : "light");
  });
}

hydratePage();
setupRevealObserver();
syncActiveNav();
toggleScrolledNav();

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-nav-link]")) toggleMenu(false);
  const certButton = event.target.closest("[data-cert-image]");
  if (certButton) {
    openCredentialModal(certButton.dataset.certImage, certButton.dataset.certTitle || "Credential");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCredentialModal();
});

window.addEventListener("scroll", onScroll, { passive: true });

if (menuToggle) menuToggle.addEventListener("click", () => toggleMenu());
