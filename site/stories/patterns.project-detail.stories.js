import { featuredProject, normalizeTags, productTags, sectionHeader, shell, tag } from "./storybook-utils";

export default {
  title: "Patterns/Project Detail",
};

export const ProjectHeaderAndMeta = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Pattern / Project Detail",
        "Case Study Header",
        "Project pages should stay aligned with public/content.js and frame product role before visual evidence."
      )}
      <section class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900">
        <div class="flex flex-wrap gap-3">${normalizeTags(featuredProject.tags || productTags).map((item) => tag(item.label, item.accent)).join("")}</div>
        <h1 class="mt-5 max-w-4xl text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">${featuredProject.title}</h1>
        <p class="mt-4 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${featuredProject.roleDetail || featuredProject.role}</p>
        <p class="mt-5 max-w-3xl whitespace-pre-line text-lg leading-8 text-slate-600 dark:text-slate-300">${featuredProject.description || featuredProject.summary}</p>
        <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          ${[
            `Company: ${featuredProject.company || "VISILY.AI"}`,
            `Timeline: ${featuredProject.timeline || "2026"}`,
            `Duration: ${featuredProject.duration || "Feature iteration"}`,
          ].map(
            (item) => `
              <article class="rounded-[1rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
                <p class="text-sm font-semibold text-slate-950 dark:text-white">${item}</p>
              </article>
            `
          ).join("")}
        </div>
      </section>
    `),
};

export const OutcomesAndImage = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Pattern / Project Detail",
        "Outcomes and Evidence",
        "Outcomes should stay moderate and evidence-led. Do not invent metrics; show the type of product improvement supported by the work."
      )}
      <div class="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <section class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <p class="mb-4 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">Outcomes</p>
          <div class="grid gap-4">
            ${[
              "Connect AI behavior, UI controls, and canvas output into one product system.",
              "Keep AI output editable so users can review and adjust generated text shadow.",
              "Use real project evidence to explain constraints, trade-offs, and delivery readiness.",
            ].map(
              (item) => `
                <article class="rounded-[1rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
                  <p class="text-sm leading-6 text-slate-700 dark:text-slate-300">${item}</p>
                </article>
              `
            ).join("")}
          </div>
        </section>
        <figure class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900">
          <img class="block aspect-[16/10] w-full object-cover" src="/assets/textshadow-ai-output-evaluation.png" alt="Text Shadow AI output evaluation example">
          <figcaption class="p-5 text-sm leading-6 text-slate-600 dark:text-slate-300">Use real project evidence to connect AI behavior work with product quality and delivery readiness.</figcaption>
        </figure>
      </div>
    `),
};
