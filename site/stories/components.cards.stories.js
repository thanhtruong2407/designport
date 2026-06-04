import {
  certificationCard,
  featuredCard,
  secondFeaturedProject,
  sectionHeader,
  shell,
  supportingCard,
} from "./storybook-utils";

export default {
  title: "Components/Cards",
};

export const ProjectCards = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Component / Cards",
        "Selected Work Cards",
        "Cards mirror the homepage project card HTML and use data from public/content.js."
      )}
      <div class="grid gap-6 xl:grid-cols-2">
        ${featuredCard()}
        ${featuredCard(secondFeaturedProject)}
      </div>
    `),
};

export const SupportingAndCertification = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Component / Cards",
        "Supporting Cards",
        "Supporting and certification cards follow the same content source as the homepage."
      )}
      <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)]">
        ${supportingCard()}
        ${certificationCard()}
      </div>
    `),
};
