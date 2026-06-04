if (!window.portfolioContent) {
  console.error("Portfolio content not loaded. Ensure content.js is included before project-data.js.");
}

(function attachProjectDataHelpers() {
  const content = window.portfolioContent || {};
  const loadedDetailFiles = new Set();

  function normalizeSupportingTag(tag, index) {
    return {
      label: typeof tag === "string" ? tag : tag.label,
      accent: index === 0,
    };
  }

  function createComingSoonProject(project) {
    return {
      ...project,
      isAvailable: false,
      detailLevel: "lite",
      roleDetail: "Case study coming soon",
      description: "This project is selected for the portfolio, but the full case study page is still being prepared.",
      overview: "This project has been selected as part of Thanh's product-oriented work, and a complete write-up with clearer context, contribution, and outcomes will be added soon.",
      overviewCards: [
        {
          label: "Current status",
          body: "The full project story is still being refined so the final case study can better reflect product thinking, constraints, and impact."
        },
        {
          label: "Why it is included",
          body: "It still represents relevant experience for the broader AI, SaaS, systems, and product narrative of the portfolio."
        }
      ],
      dynamicLabel: "Status",
      dynamicTitle: "Full case study in progress",
      dynamicBadge: "Coming soon",
      steps: [
        {
          title: "Selected",
          text: "This project remains part of the portfolio because it supports the overall product and systems narrative."
        },
        {
          title: "In progress",
          text: "The detailed case study is still being prepared to better explain the context, contribution, and outcome."
        },
        {
          title: "Next update",
          text: "A fuller project page will replace this holding state once the final content is ready."
        }
      ],
      outcomesLabel: "Availability",
      outcomes: [
        { value: "Soon", label: "Case study status" },
        { value: "Live", label: "Project listed" },
        { value: "Draft", label: "Detail page state" }
      ]
    };
  }

  function createPlaceholderProjectFromSupporting(project) {
    return {
      id: project.id,
      detailLevel: "lite",
      isAvailable: false,
      thumb: "Work",
      role: "Supporting project",
      title: project.title,
      summary: project.summary,
      tags: (project.tags || []).map(normalizeSupportingTag),
      navIndex: "Supporting Projects",
      roleDetail: "Supporting project snapshot",
      description: project.summary,
      timeline: "Selected supporting work",
      duration: "Project summary",
      overview: "This supporting project reflects Thanh's ability to improve complex workflows, system usability, and product clarity in practical business contexts.",
      overviewCards: [
        {
          label: "Why it matters",
          body: "It strengthens the broader portfolio narrative around system thinking, UX problem solving, and product-oriented delivery."
        },
        {
          label: "Current detail level",
          body: "This page currently presents a lighter summary structure until the full long-form case study is added."
        }
      ],
      dynamicLabel: "Project focus",
      dynamicTitle: "What this project demonstrates",
      dynamicBadge: "Supporting work",
      steps: [
        {
          title: "Context",
          text: "Summarizes the product or operational problem space this project addressed."
        },
        {
          title: "Contribution",
          text: "Highlights Thanh's design and product-thinking contribution in shaping a more usable workflow."
        },
        {
          title: "Portfolio fit",
          text: "Shows additional range beyond the featured AI and enterprise projects while still reinforcing product relevance."
        }
      ],
      outcomesLabel: "Project snapshot",
      outcomes: [
        { value: "Support", label: "Role in portfolio" },
        { value: "System", label: "Workflow lens" },
        { value: "UX", label: "Problem-solving focus" }
      ]
    };
  }

  function mergeProjectDetails(project) {
    if (!project) return null;
    const detail = window.portfolioProjectDetails?.[project.id];
    return detail ? { ...project, ...detail } : project;
  }

  function loadProjectDetail(project) {
    if (!project?.detailFile || loadedDetailFiles.has(project.detailFile) || window.portfolioProjectDetails?.[project.id]) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = project.detailFile;
      script.async = false;
      script.onload = () => {
        loadedDetailFiles.add(project.detailFile);
        resolve();
      };
      script.onerror = () => {
        console.warn(`Project detail file could not be loaded: ${project.detailFile}`);
        resolve();
      };
      document.head.appendChild(script);
    });
  }

  function getProjectById(id) {
    const featured = (content.featuredProjects || []).find((project) => project.id === id);
    if (featured) {
      const normalizedFeatured = mergeProjectDetails({ ...featured, detailLevel: "rich" });
      return featured.isAvailable === false ? createComingSoonProject(normalizedFeatured) : normalizedFeatured;
    }

    const supporting = (content.supportingProjects || []).find((project) => project.id === id);
    if (!supporting) return null;
    return supporting.isAvailable === false
      ? createComingSoonProject(createPlaceholderProjectFromSupporting(supporting))
      : createPlaceholderProjectFromSupporting(supporting);
  }

  function getProjectSequence() {
    const featured = (content.featuredProjects || [])
      .filter((project) => project.isHidden !== true)
      .map((project) => ({ ...project, detailLevel: "rich" }));
    const supporting = (content.supportingProjects || [])
      .filter((project) => project.isHidden !== true)
      .map(createPlaceholderProjectFromSupporting);
    return [...featured, ...supporting];
  }

  function getAdjacentProjects(id) {
    const sequence = getProjectSequence();
    const currentIndex = sequence.findIndex((project) => project.id === id);
    if (currentIndex === -1) return { previous: null, next: null };

    return {
      previous: currentIndex > 0 ? sequence[currentIndex - 1] : null,
      next: currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : null,
    };
  }

  function getProjectSections(project) {
    if (Array.isArray(project.popupSections) && project.popupSections.length) return project.popupSections;
    return [
      {
        label: "Overview",
        title: "Project framing and responsibility",
        body: project.overview,
        cards: project.overviewCards,
      },
      {
        label: project.dynamicLabel,
        title: project.dynamicTitle,
        badge: project.dynamicBadge,
        steps: project.steps,
      }
    ];
  }

  window.portfolioProjectData = {
    createComingSoonProject,
    createPlaceholderProjectFromSupporting,
    loadProjectDetail,
    getProjectById,
    getProjectSections,
    getAdjacentProjects,
  };
})();
