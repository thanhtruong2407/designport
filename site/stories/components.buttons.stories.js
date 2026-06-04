import { button, iconButton, sectionHeader, shell } from "./storybook-utils";

export default {
  title: "Components/Buttons",
};

export const Actions = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Component / Buttons",
        "Portfolio Actions",
        "Buttons should feel decisive and recruiter-friendly. Primary actions move reviewers toward experience or contact; secondary actions support exploration."
      )}
      <div class="grid gap-6">
        <section class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <p class="mb-4 text-sm font-semibold text-slate-950 dark:text-white">CTA variants</p>
          <div class="flex flex-wrap gap-4">
            ${button("View Experience")}
            ${button("Get in Touch", "secondary")}
            ${button("Read Case Study", "ghost")}
          </div>
        </section>
        <section class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <p class="mb-4 text-sm font-semibold text-slate-950 dark:text-white">States</p>
          <div class="flex flex-wrap gap-4">
            ${button("Default")}
            ${button("Secondary", "secondary")}
            ${button("Disabled", "primary", "disabled")}
            ${button("Coming Soon", "secondary", "disabled")}
          </div>
        </section>
        <section class="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
          <p class="mb-4 text-sm font-semibold text-slate-950 dark:text-white">Icon controls</p>
          <div class="flex flex-wrap gap-3">
            ${iconButton("Switch to dark mode")}
            ${iconButton("Open navigation")}
            ${iconButton("Disabled control", "disabled")}
          </div>
        </section>
      </div>
    `),
};
