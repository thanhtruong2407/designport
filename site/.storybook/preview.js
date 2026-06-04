export const globalTypes = {
  theme: {
    description: "Portfolio color mode",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      dynamicTitle: true,
    },
  },
};

export const initialGlobals = {
  theme: "light",
};

function syncPortfolioTheme(isDark) {
  const themeRoots = [
    document.documentElement,
    document.body,
    document.getElementById("storybook-root"),
    document.querySelector(".sb-show-main"),
  ].filter(Boolean);

  themeRoots.forEach((root) => {
    root.classList.toggle("dark", isDark);
  });
}

export const decorators = [
  (story, context) => {
    const isDark = context.globals.theme === "dark";
    syncPortfolioTheme(isDark);
    requestAnimationFrame(() => syncPortfolioTheme(isDark));

    return `
      <div data-portfolio-theme="${isDark ? "dark" : "light"}" class="${isDark ? "dark min-h-screen bg-slate-950 text-slate-100" : "min-h-screen bg-slate-50 text-slate-900"}">
        ${story()}
      </div>
    `;
  },
];

export const parameters = {
  layout: "fullscreen",
  options: {
    storySort: {
      order: ["Foundations", "Components", "Patterns", "Content Guidelines"],
    },
  },
  backgrounds: {
    disable: true,
  },
};
