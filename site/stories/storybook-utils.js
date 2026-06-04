import "../public/content.js";

const portfolioContent = window.portfolioContent || {};

export const brandColors = [
  ["50", "#eef2ff"],
  ["100", "#e0e7ff"],
  ["200", "#c7d2fe"],
  ["300", "#a5b4fc"],
  ["400", "#818cf8"],
  ["500", "#6366f1"],
  ["600", "#6366f1"],
  ["700", "#3629b7"],
  ["800", "#2f249e"],
  ["900", "#1e1b4b"],
];

export const sampleHero = {
  nameLines: ["Truong Huynh", "Viet Thanh"],
  role: "Product Owner",
  summary:
    "Product Owner candidate with 6 years of experience in UX/UI design, user research, UX validation, AI-powered products, project coordination, and Agile workflows. SAFe 6.0 PO certified. Seeking Product Owner opportunities focused on AI-driven products.",
  portrait: "/assets/avatar/profile-image.png",
  primaryAction: "View Works",
  secondaryAction: "Download CV",
  email: "thanhtruong2407@gmail.com",
  phone: "+84 932 098 601",
};

export const featuredProject = portfolioContent.featuredProjects?.[0] || {
  title: "Text Shadow AI",
  role: "AI Feature / Main Case Study",
  summary: "Make AI text shadow controllable. Connect the AI, UI controls, and canvas so users can edit it.",
  thumbImageSrc: "/assets/01-home-prj-thumbnail-textshadow.png",
  thumbImageAlt: "Text Shadow AI main case study thumbnail",
  tags: [{ label: "AI", accent: true }, { label: "Product Behavior" }, { label: "UX System" }],
};

export const secondFeaturedProject = portfolioContent.featuredProjects?.[1] || featuredProject;
export const hospitalityProject = portfolioContent.featuredProjects?.find((project) => project.id === "cihms") || secondFeaturedProject;

export const certification = portfolioContent.certifications?.[0] || {
  title: "Certified SAFe® Product Owner / Product Manager",
  provider: "SAFe by Scaled Agile, Inc.",
  issued: "Issued Nov 2024",
  skills: "Management",
  logoSrc: "/assets/certifications-safe.png",
  credentialId: "09881514-3227",
};

export const productTags = ["AI", "Product Behavior", "UX System", "Canvas Mapping"];

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function shell(content, options = {}) {
  const width = options.width || "max-w-7xl";
  return `
    <main class="min-h-screen px-4 py-10 font-sans sm:px-6 lg:px-8">
      <div class="mx-auto w-full ${width}">
        ${content}
      </div>
    </main>
  `;
}

export function sectionHeader(index, title, description = "") {
  return `
    <div class="mb-8">
      <p class="mb-3 text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(index)}</p>
      <h2 class="max-w-4xl text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">${escapeHtml(title)}</h2>
      ${description ? `<p class="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(description)}</p>` : ""}
    </div>
  `;
}

export function tag(label, accent = false) {
  const classes = accent
    ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200"
    : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300";
  return `<span class="inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase ${classes}">${escapeHtml(label)}</span>`;
}

export function normalizeAssetPath(path = "") {
  return String(path).replace(/^\.\//, "/");
}

export function normalizeTags(tags = []) {
  return tags.map((item, index) => {
    if (typeof item === "string") return { label: item, accent: index === 0 };
    return { label: item.label, accent: Boolean(item.accent) };
  });
}

export function button(label, variant = "primary", state = "default") {
  const disabled = state === "disabled";
  const base = "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase transition";
  const variants = {
    primary: "bg-brand-600 text-white shadow-glow hover:bg-brand-500",
    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300",
    ghost:
      "border border-transparent text-brand-600 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-500/10",
  };
  const stateClass = disabled ? "pointer-events-none cursor-not-allowed opacity-45" : "";
  return `<button class="${base} ${variants[variant]} ${stateClass}" type="button" ${disabled ? "disabled" : ""}>${escapeHtml(label)}</button>`;
}

export function iconButton(label, state = "default") {
  const disabled = state === "disabled";
  return `
    <button
      class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 disabled:pointer-events-none disabled:opacity-45 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
      type="button"
      aria-label="${escapeHtml(label)}"
      ${disabled ? "disabled" : ""}
    >
      <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
      </svg>
    </button>
  `;
}

export function featuredCard(project = featuredProject) {
  const isAvailable = project.isAvailable !== false;
  const wrapperTag = isAvailable ? "a" : "div";
  const href = isAvailable ? ` href="./project.html?id=${encodeURIComponent(project.id || "")}"` : "";
  const cardState = isAvailable ? `View case study <span aria-hidden="true">-&gt;</span>` : "Coming soon";
  const imageSrc = normalizeAssetPath(project.thumbImageSrc || project.image || "/assets/01-home-prj-thumbnail-textshadow.png");
  const imageAlt = project.thumbImageAlt || "";
  const tags = normalizeTags(project.tags || []);
  const availabilityBadge = !isAvailable
    ? `<span class="mb-4 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">Coming soon</span>`
    : "";
  return `
    <article class="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <${wrapperTag} class="group block h-full w-full text-left"${href}>
        <div class="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900" aria-hidden="true">
          <img class="block h-full w-full object-cover" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}">
        </div>
        <div class="p-7">
          ${availabilityBadge}
          <p class="mb-3 text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">${escapeHtml(project.role)}</p>
          <h3 class="text-xl font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(project.title)}</h3>
          <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
          <div class="mt-5 flex flex-wrap gap-2.5">${tags.map((item) => tag(item.label, item.accent)).join("")}</div>
          <span class="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase ${isAvailable ? "text-brand-600 transition group-hover:text-brand-500 dark:text-brand-300 dark:group-hover:text-brand-200" : "text-amber-700 dark:text-amber-200"}">${cardState}</span>
        </div>
      </${wrapperTag}>
    </article>
  `;
}

export function supportingCard(project = hospitalityProject) {
  const tags = normalizeTags(project.tags || []);
  return `
    <article class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <div class="p-6">
        <p class="mb-3 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">Supporting project</p>
        <h3 class="text-lg font-semibold leading-tight text-slate-950 dark:text-white">${escapeHtml(project.title)}</h3>
        <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
        <div class="mt-5 flex flex-wrap gap-2.5">${tags.map((item) => tag(item.label, item.accent)).join("")}</div>
        <span class="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">Open details <span aria-hidden="true">-&gt;</span></span>
      </div>
    </article>
  `;
}

export function certificationCard(cert = certification) {
  const logo = normalizeAssetPath(cert.logoSrc || cert.logo || "/assets/certifications-safe.png");
  const credentialMeta = cert.credentialId ? `<p class="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">Credential ID ${escapeHtml(cert.credentialId)}</p>` : "";
  const skills = cert.skills ? `<p class="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300"><strong class="font-semibold text-slate-950 dark:text-white">Skills:</strong> ${escapeHtml(cert.skills)}</p>` : "";
  return `
    <article class="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/40">
      <div class="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded bg-white dark:bg-slate-950">
        <img class="h-full w-full object-contain" src="${escapeHtml(logo)}" alt="${escapeHtml(cert.provider || cert.title)} logo" loading="lazy">
      </div>
      <div class="min-w-0">
        <h3 class="text-base font-semibold leading-snug text-slate-950 dark:text-white">${escapeHtml(cert.title)}</h3>
        <p class="mt-0.5 text-sm leading-5 text-slate-800 dark:text-slate-200">${escapeHtml(cert.provider)}</p>
        <p class="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">${escapeHtml(cert.issued)}</p>
        ${credentialMeta}
        ${skills}
      </div>
    </article>
  `;
}

export function heroPattern(hero = sampleHero) {
  const [firstLine, secondLine] = hero.nameLines || String(hero.name || "").split(/\s(?=[^ ]+$)/);
  return `
    <section class="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(54,41,183,0.08),transparent_30%)]"></div>
      <div class="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle,rgba(99,102,241,0.12)_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-50"></div>
      <div class="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)]">
        <div class="text-center lg:text-left">
          <h1 class="mt-6 text-5xl font-extrabold leading-[0.95] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            ${escapeHtml(firstLine || "")}<br>
            <a class="mt-3 inline-block text-brand-600 transition hover:text-brand-500 dark:text-brand-300" href="#about">${escapeHtml(secondLine || "")}</a>
          </h1>
          <p class="mt-5 flex flex-wrap items-center justify-center gap-3 text-lg font-bold sm:text-xl lg:justify-start lg:text-2xl">
            <span class="text-brand-600 dark:text-brand-300">${escapeHtml(hero.role)}</span>
          </p>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:mx-0">${escapeHtml(hero.summary)}</p>
          <div class="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a class="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold uppercase text-white shadow-glow transition hover:bg-brand-500" href="#work">${escapeHtml(hero.primaryAction || "View Works")}</a>
            <a class="flex items-center gap-2 text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300" href="#">${escapeHtml(hero.secondaryAction || "Download CV")}</a>
          </div>
          <div class="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-slate-200 pt-5 dark:border-slate-800 lg:justify-start" aria-label="Direct contact">
            <a class="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300" href="mailto:${escapeHtml(hero.email)}">${escapeHtml(hero.email)}</a>
            <span class="hidden text-slate-300 dark:text-slate-700 sm:inline" aria-hidden="true">/</span>
            <a class="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300" href="tel:+84932098601">${escapeHtml(hero.phone)}</a>
          </div>
        </div>
        <div class="relative mx-auto w-full max-w-sm">
          <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-3 shadow-card dark:border-slate-800 dark:bg-slate-900/70">
            <img class="block aspect-[4/5] w-full rounded-[1.35rem] object-cover object-top" src="${escapeHtml(hero.portrait)}" alt="Portrait of Truong H. Viet Thanh">
          </div>
        </div>
      </div>
    </section>
  `;
}
