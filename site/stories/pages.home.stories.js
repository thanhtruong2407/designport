export default {
  title: "Pages/Home HTML",
  parameters: {
    layout: "fullscreen",
  },
};

export const SourceOfTruth = {
  name: "public/index.html",
  render: () => `
    <iframe
      title="Homepage HTML source of truth"
      src="/index.html"
      class="block h-screen w-full border-0 bg-slate-50 dark:bg-slate-950"
    ></iframe>
  `,
};
