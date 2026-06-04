import { brandColors, sectionHeader, shell } from "./storybook-utils";

export default {
  title: "Foundations/Tokens",
};

export const Color = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Foundation / Color",
        "Brand and Neutral Tokens",
        "The brand scale supports a calm AI-native portfolio: clear hierarchy, restrained accents, and enough contrast for product credibility."
      )}
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        ${brandColors
          .map(
            ([name, value]) => `
              <article class="overflow-hidden rounded-[1rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
                <div class="h-24" style="background:${value}"></div>
                <div class="p-4">
                  <p class="text-sm font-semibold text-slate-950 dark:text-white">brand-${name}</p>
                  <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${value}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <div class="rounded-[1rem] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-semibold text-slate-950 dark:text-white">Surface</p>
          <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">White / slate surfaces create a premium, recruiter-friendly reading experience.</p>
        </div>
        <div class="rounded-[1rem] border border-slate-200 bg-brand-50 p-5 shadow-card dark:border-brand-500/20 dark:bg-brand-500/10">
          <p class="text-sm font-semibold text-brand-700 dark:text-brand-200">Accent</p>
          <p class="mt-2 text-sm leading-6 text-brand-700/80 dark:text-brand-100/80">Use brand accents for product direction, active states, and primary actions.</p>
        </div>
        <div class="rounded-[1rem] border border-slate-800 bg-slate-950 p-5 shadow-card">
          <p class="text-sm font-semibold text-white">Dark Mode</p>
          <p class="mt-2 text-sm leading-6 text-slate-300">Dark surfaces should stay calm and content-led, not overly decorative.</p>
        </div>
      </div>
    `),
};

export const Typography = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Foundation / Typography",
        "Readable Product Narrative",
        "Inter is used for concise hierarchy: strong headlines for positioning, compact labels for scanning, and generous body leading for case-study reading."
      )}
      <div class="grid gap-6">
        <div class="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <p class="text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">Hero label</p>
          <h1 class="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] text-slate-950 dark:text-white sm:text-6xl">Truong Huynh<br><span class="text-brand-600 dark:text-brand-300">Viet Thanh</span></h1>
          <p class="mt-5 text-xl font-bold text-brand-600 dark:text-brand-300">Product Owner</p>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Use hero-scale type only for the homepage positioning or major case-study titles.</p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <p class="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">Section label</p>
            <h2 class="mt-3 text-3xl font-bold text-slate-950 dark:text-white">Selected Work</h2>
          </article>
          <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <h3 class="text-xl font-semibold text-slate-950 dark:text-white">Project card title</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Card copy should explain product relevance, not only visual output.</p>
          </article>
          <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            <p class="text-sm font-semibold uppercase text-brand-600 dark:text-brand-300">Metadata</p>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Use compact labels for role, domain, scope, and constraints.</p>
          </article>
        </div>
      </div>
    `),
};

export const SpacingShadowRadius = {
  name: "Spacing, Shadow, Radius",
  render: () =>
    shell(`
      ${sectionHeader(
        "Foundation / Layout",
        "Spacing, Shadow, and Radius",
        "The portfolio uses generous whitespace, subtle elevation, and moderate radius to feel premium without becoming decorative."
      )}
      <div class="grid gap-5 md:grid-cols-3">
        <article class="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div class="grid gap-2">
            <span class="h-3 w-16 rounded-full bg-brand-100 dark:bg-brand-500/20"></span>
            <span class="h-3 w-28 rounded-full bg-brand-200 dark:bg-brand-500/30"></span>
            <span class="h-3 w-44 rounded-full bg-brand-300 dark:bg-brand-500/40"></span>
          </div>
          <h3 class="mt-6 text-lg font-semibold text-slate-950 dark:text-white">Spacing</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Use spacious section rhythm and tighter card internals for fast scanning.</p>
        </article>
        <article class="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div class="h-24 rounded-[1.5rem] bg-white shadow-card dark:bg-slate-900"></div>
          <h3 class="mt-6 text-lg font-semibold text-slate-950 dark:text-white">Card shadow</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Use elevation to separate content, not as a decorative effect.</p>
        </article>
        <article class="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <div class="grid grid-cols-3 gap-3">
            <span class="h-16 rounded-lg bg-slate-100 dark:bg-slate-800"></span>
            <span class="h-16 rounded-[1.25rem] bg-slate-100 dark:bg-slate-800"></span>
            <span class="h-16 rounded-[1.75rem] bg-slate-100 dark:bg-slate-800"></span>
          </div>
          <h3 class="mt-6 text-lg font-semibold text-slate-950 dark:text-white">Radius</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Use larger radius mostly for portfolio cards and portrait frames.</p>
        </article>
      </div>
    `),
};
