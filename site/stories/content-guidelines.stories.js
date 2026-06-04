import { sectionHeader, shell } from "./storybook-utils";

export default {
  title: "Content Guidelines/Product Narrative",
};

const examples = [
  {
    avoid: "Designed a beautiful and modern UI for the AI feature.",
    prefer:
      "Identified gaps in AI-generated output behavior and refined UI states to help users evaluate and adjust results.",
  },
  {
    avoid: "Created pixel-perfect screens for the banking dashboard.",
    prefer:
      "Translated banking workflows and operational constraints into clearer product flows for enterprise users.",
  },
  {
    avoid: "Made the design system visually consistent.",
    prefer:
      "Explored token structures and reusable rules to support scalable theme generation and product consistency.",
  },
];

export const ProductOrientedWording = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Content / Guidelines",
        "Write for Product Credibility",
        "Portfolio copy should reinforce Thanh's move from UX/UI execution toward product thinking, AI product contribution, and cross-functional delivery."
      )}
      <div class="grid gap-5">
        ${examples
          .map(
            (example) => `
              <article class="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
                <div>
                  <p class="text-[11px] font-semibold uppercase text-rose-600 dark:text-rose-300">Avoid</p>
                  <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${example.avoid}</p>
                </div>
                <div>
                  <p class="text-[11px] font-semibold uppercase text-brand-600 dark:text-brand-300">Prefer</p>
                  <p class="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">${example.prefer}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `),
};
