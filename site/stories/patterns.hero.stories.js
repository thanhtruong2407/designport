import { heroPattern, sectionHeader, shell } from "./storybook-utils";

export default {
  title: "Patterns/Hero",
};

export const ProductOwnerPositioning = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Pattern / Hero",
        "Product Owner Positioning",
        "This story mirrors the homepage HTML hero so positioning, copy, spacing, and portrait treatment stay aligned with the live site."
      )}
      ${heroPattern()}
    `),
};

export const AISaaSVariant = {
  render: () =>
    shell(`
      ${sectionHeader(
        "Pattern / Hero",
        "AI/SaaS Role Variant",
        "A slightly more product-forward version for recruiters screening AI Product or SaaS Product Owner roles."
      )}
      ${heroPattern({
        nameLines: ["Product-oriented", "AI Designer"],
        role: "Product Owner (AI/SaaS)",
        summary:
          "I connect user problems, business goals, and technical constraints to shape AI-powered features, validate behavior, and support product delivery with cross-functional teams.",
        portrait: "/assets/avatar/profile-image.png",
        primaryAction: "View Works",
        secondaryAction: "Contact",
        email: "thanhtruong2407@gmail.com",
        phone: "+84 932 098 601",
      })}
    `),
};
