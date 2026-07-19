import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, "..");
// Deployed site lives at the repo root (GitHub Pages), not site/public.
const repoRoot = path.resolve(__dirname, "../..");
const sourcePath = path.join(siteRoot, "source/content/index.yaml");
const selectedWorkPath = path.join(siteRoot, "source/content/projects/selected-work.yaml");
const textShadowMainCaseStudyPath = path.join(siteRoot, "source/content/projects/textshadow-01-main.yaml");
const textshadowProjectPath = path.join(siteRoot, "source/content/projects/textshadow-ai.yaml");
const textshadowAiBehaviorSystemPath = path.join(siteRoot, "source/content/projects/textshadow-02-ai-behavior.yaml");
const textshadowPresetRuleSystemPath = path.join(siteRoot, "source/content/projects/textshadow-03-preset-rule.yaml");
const cihmsProjectPath = path.join(siteRoot, "source/content/projects/cihms.yaml");
const scfVietnamProjectPath = path.join(siteRoot, "source/content/projects/scf-vietnam.yaml");
const scfVietnamViOverlayPath = path.join(siteRoot, "source/content/projects/scf-vietnam.vi.yaml");
const textshadowProblemPath = path.join(siteRoot, "source/content/subpages/textshadow-problem.yaml");
const textshadowHumanPath = path.join(siteRoot, "source/content/subpages/textshadow-human-branch.yaml");
const textshadowAiPath = path.join(siteRoot, "source/content/subpages/textshadow-ai-branch.yaml");
const textshadowSystemIntegrationPath = path.join(siteRoot, "source/content/subpages/textshadow-system-integration.yaml");
const contentPath = path.join(repoRoot, "content.js");
const indexPath = path.join(repoRoot, "index.html");
const textShadowMainCaseStudyDetailPath = path.join(repoRoot, "projects/textshadow-01-main.js");
const textshadowDetailPath = path.join(repoRoot, "projects/textshadow-ai.js");
const textshadowAiBehaviorSystemDetailPath = path.join(repoRoot, "projects/textshadow-02-ai-behavior.js");
const textshadowPresetRuleSystemDetailPath = path.join(repoRoot, "projects/textshadow-03-preset-rule.js");
const cihmsDetailPath = path.join(repoRoot, "projects/cihms.js");
const scfVietnamDetailPath = path.join(repoRoot, "projects/scf-vietnam.js");
const scfVietnamViDetailPath = path.join(repoRoot, "projects/scf-vietnam.vi.js");
const textshadowProblemOutputPath = path.join(repoRoot, "projects/textshadow/problem.html");
const textshadowHumanOutputPath = path.join(repoRoot, "projects/textshadow/human-branch.html");
const textshadowAiOutputPath = path.join(repoRoot, "projects/textshadow/ai-branch.html");
const textshadowSystemIntegrationOutputPath = path.join(repoRoot, "projects/textshadow/system-integration.html");

function stripComment(line) {
  let quote = null;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const prev = line[i - 1];
    if ((char === "\"" || char === "'") && prev !== "\\") {
      quote = quote === char ? null : quote || char;
    }
    if (char === "#" && !quote && (i === 0 || /\s/.test(line[i - 1]))) {
      return line.slice(0, i);
    }
  }
  return line;
}

function readYamlLines(text) {
  return text
    .replace(/\r/g, "")
    .split("\n")
    .map((raw, index) => {
      const withoutComment = stripComment(raw).replace(/\s+$/u, "");
      return {
        index: index + 1,
        indent: withoutComment.match(/^ */u)[0].length,
        text: withoutComment.trim(),
      };
    })
    .filter((line) => line.text.length > 0);
}

function splitKeyValue(text) {
  let quote = null;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const prev = text[i - 1];
    if ((char === "\"" || char === "'") && prev !== "\\") {
      quote = quote === char ? null : quote || char;
    }
    if (char === ":" && !quote) {
      return [text.slice(0, i).trim(), text.slice(i + 1).trim()];
    }
  }
  return null;
}

function parseScalar(value) {
  if (value === "null") return null;
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "[]") return [];
  if (value === "{}") return {};
  if ((value.startsWith("[") && value.endsWith("]")) || (value.startsWith("{") && value.endsWith("}"))) {
    return JSON.parse(value);
  }
  if (/^-?\d+(\.\d+)?$/u.test(value)) return Number(value);
  if (value.startsWith("\"") && value.endsWith("\"")) return JSON.parse(value);
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/gu, "'");
  return value;
}

function parseYaml(text) {
  const lines = readYamlLines(text);
  const isListItem = (line) => line.text === "-" || line.text.startsWith("- ");

  function parseBlock(start, indent) {
    if (start >= lines.length) return [null, start];
    if (lines[start].indent < indent) return [null, start];
    return isListItem(lines[start])
      ? parseArray(start, indent)
      : parseObject(start, indent);
  }

  function parseObject(start, indent) {
    const object = {};
    let i = start;
    while (i < lines.length) {
      const line = lines[i];
      if (line.indent < indent) break;
      if (line.indent > indent) {
        throw new Error(`Unexpected indentation on line ${line.index}`);
      }
      if (isListItem(line)) break;

      const pair = splitKeyValue(line.text);
      if (!pair) throw new Error(`Expected key/value on line ${line.index}`);
      const [key, rawValue] = pair;
      if (!key) throw new Error(`Missing key on line ${line.index}`);

      if (rawValue === "") {
        const next = lines[i + 1];
        if (!next || next.indent <= indent) {
          object[key] = {};
          i += 1;
        } else {
          const [child, nextIndex] = parseBlock(i + 1, next.indent);
          object[key] = child;
          i = nextIndex;
        }
      } else {
        object[key] = parseScalar(rawValue);
        i += 1;
      }
    }
    return [object, i];
  }

  function parseArray(start, indent) {
    const array = [];
    let i = start;
    while (i < lines.length) {
      const line = lines[i];
      if (line.indent < indent) break;
      if (line.indent > indent) throw new Error(`Unexpected indentation on line ${line.index}`);
      if (!isListItem(line)) break;

      const rest = line.text === "-" ? "" : line.text.slice(2).trim();
      if (rest === "") {
        const next = lines[i + 1];
        if (!next || next.indent <= indent) {
          array.push(null);
          i += 1;
        } else {
          const [child, nextIndex] = parseBlock(i + 1, next.indent);
          array.push(child);
          i = nextIndex;
        }
        continue;
      }

      const pair = splitKeyValue(rest);
      if (pair) {
        const item = {};
        const [key, rawValue] = pair;
        if (rawValue === "") {
          const next = lines[i + 1];
          if (!next || next.indent <= indent) {
            item[key] = {};
            i += 1;
          } else {
            const [child, nextIndex] = parseBlock(i + 1, next.indent);
            item[key] = child;
            i = nextIndex;
          }
        } else {
          item[key] = parseScalar(rawValue);
          i += 1;
        }

        while (i < lines.length && lines[i].indent > indent) {
          const [more, nextIndex] = parseObject(i, indent + 2);
          Object.assign(item, more);
          i = nextIndex;
        }
        array.push(item);
      } else {
        array.push(parseScalar(rest));
        i += 1;
      }
    }
    return [array, i];
  }

  const [result, end] = parseBlock(0, lines[0]?.indent || 0);
  if (end !== lines.length) {
    throw new Error(`Unexpected content on line ${lines[end].index}`);
  }
  return result;
}

function readYamlFile(filePath) {
  return parseYaml(fs.readFileSync(filePath, "utf8"));
}

function requirePath(object, keyPath) {
  return keyPath.split(".").reduce((current, key) => {
    if (current && Object.hasOwn(current, key)) return current[key];
    throw new Error(`Missing required content key: ${keyPath}`);
  }, object);
}

function htmlText(value) {
  return String(value)
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;");
}

function htmlAttr(value) {
  return htmlText(value).replace(/"/gu, "&quot;");
}

function heroContactRowHtml(items) {
  if (!Array.isArray(items) || items.length === 0) return "";
  const links = items
    .map((item, index) => {
      const href = item.href ? ` href="${htmlAttr(item.href)}"` : "";
      const tag = item.href ? "a" : "span";
      const separator = index > 0 ? `<span class="hidden text-slate-300 dark:text-slate-700 sm:inline" aria-hidden="true">/</span>\n            ` : "";
      return `${separator}<${tag} class="hero-contact-link text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"${href}>
              <span class="sr-only">${htmlText(item.label)}: </span>${htmlText(item.value)}
            </${tag}>`;
    })
    .join("\n            ");

  return `<div class="hero-contact-row mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-slate-200 pt-5 dark:border-slate-800 lg:justify-start" aria-label="Direct contact">
            ${links}
          </div>`;
}

function replaceRequired(source, pattern, replacement, label) {
  if (!pattern.test(source)) {
    throw new Error(`Could not find ${label}`);
  }
  return source.replace(pattern, replacement);
}

function replaceWithinSection(html, sectionId, replacer) {
  const sectionStart = html.search(new RegExp(`<section[^>]+id="${sectionId}"`, "u"));
  if (sectionStart === -1) throw new Error(`Could not find section #${sectionId}`);
  const nextSection = html.slice(sectionStart + 1).search(/<section\b/u);
  const sectionEnd = nextSection === -1
    ? html.indexOf("</main>", sectionStart)
    : sectionStart + 1 + nextSection;
  if (sectionEnd === -1) throw new Error(`Could not find end for section #${sectionId}`);
  const before = html.slice(0, sectionStart);
  const section = html.slice(sectionStart, sectionEnd);
  const after = html.slice(sectionEnd);
  return before + replacer(section) + after;
}

function replaceFirstSectionText(section, className, value) {
  return replaceRequired(
    section,
    new RegExp(`(<[^>]+class="[^"]*${className}[^"]*"[^>]*>)([\\s\\S]*?)(</[^>]+>)`, "u"),
    `$1${htmlText(value)}$3`,
    className,
  );
}

function removeFirstElementByClass(section, className) {
  return removeOptional(section, new RegExp(`\\s*<[^>]+class="[^"]*${className}[^"]*"[^>]*>[\\s\\S]*?</[^>]+>`, "u"));
}

function removeOptional(source, pattern) {
  return source.replace(pattern, "");
}

function updateHtml(html, content) {
  html = replaceRequired(html, /<title>[\s\S]*?<\/title>/u, `<title>${htmlText(requirePath(content, "seo.title"))}</title>`, "document title");
  html = replaceRequired(
    html,
    /(<meta\s+name="description"\s+content=")[^"]*("\s*>)/u,
    `$1${htmlAttr(requirePath(content, "seo.description"))}$2`,
    "meta description",
  );

  html = replaceWithinSection(html, "hero", (section) => {
    const heroEyebrow = requirePath(content, "hero.eyebrow");
    if (heroEyebrow) {
      section = replaceRequired(
        section,
        /(<p class="inline-flex[^"]*"[^>]*>)([\s\S]*?)(<\/p>)/u,
        `$1${htmlText(heroEyebrow)}$3`,
        "hero eyebrow",
      );
    } else {
      section = removeOptional(section, /\s*<p class="inline-flex[^"]*"[^>]*>[\s\S]*?<\/p>/u);
    }
    section = replaceRequired(
      section,
      /(<h1 class="hero-name[^"]*"[^>]*>\s*)[\s\S]*?(<a class="hero-link[^"]*" href="#about">)[\s\S]*?(<\/a>\s*<\/h1>)/u,
      `$1${htmlText(requirePath(content, "hero.name.firstLine"))}<br>\n            $2${htmlText(requirePath(content, "hero.name.linkedLine"))}$3`,
      "hero name",
    );
    const roleFrom = requirePath(content, "hero.role.from");
    const roleTo = requirePath(content, "hero.role.to");
    if (roleFrom) {
      section = replaceRequired(
        section,
        /(<p class="hero-role[^"]*"[^>]*>\s*<span(?:\s+class="[^"]*")?>)[\s\S]*?(<\/span>\s*<span class="role-separator[\s\S]*?<\/span>\s*<span(?:\s+class="[^"]*")?>)[\s\S]*?(<\/span>\s*<\/p>)/u,
        `$1${htmlText(roleFrom)}$2${htmlText(roleTo)}$3`,
        "hero role",
      );
    } else {
      section = replaceRequired(
        section,
        /(<\/h1>\s*)<p class="[^"]*"[^>]*>[\s\S]*?<\/p>/u,
        `$1<p class="hero-role mt-5 flex flex-wrap items-center justify-center gap-3 text-lg font-bold sm:text-xl lg:justify-start lg:text-2xl">\n            <span class="text-brand-600 dark:text-brand-300">${htmlText(roleTo)}</span>\n          </p>`,
        "hero role",
      );
    }
    section = replaceRequired(
      section,
      /(<p class="hero-summary[^"]*"[^>]*>\s*)[\s\S]*?(\s*<\/p>)/u,
      `$1${htmlText(requirePath(content, "hero.summary"))}$2`,
      "hero summary",
    );
    const heroSecondaryCta = requirePath(content, "hero.secondaryCta");
    if (heroSecondaryCta) {
      section = replaceRequired(
        section,
        /(<div class="hero-actions[\s\S]*?<a class="[^"]*" href=")[^"]*(">)[\s\S]*?(<\/a>\s*<a class="[^"]*" href=")[^"]*(">)[\s\S]*?(<\/a>)/u,
        `$1${htmlAttr(requirePath(content, "hero.primaryCta.href"))}$2${htmlText(requirePath(content, "hero.primaryCta.label"))}$3${htmlAttr(requirePath(content, "hero.secondaryCta.href"))}$4${htmlText(requirePath(content, "hero.secondaryCta.label"))}$5`,
        "hero actions",
      );
    } else {
      // Single-CTA hero: only the primary action link is present.
      section = replaceRequired(
        section,
        /(<div class="hero-actions[\s\S]*?<a class="[^"]*" href=")[^"]*(">)[\s\S]*?(<\/a>)/u,
        `$1${htmlAttr(requirePath(content, "hero.primaryCta.href"))}$2${htmlText(requirePath(content, "hero.primaryCta.label"))}$3`,
        "hero actions",
      );
    }
    const heroContactRow = heroContactRowHtml(requirePath(content, "hero.contactRow"));
    if (/class="hero-contact-row[^"]*"/u.test(section)) {
      section = replaceRequired(
        section,
        /\s*<div class="hero-contact-row[^"]*"[^>]*>[\s\S]*?<\/div>\s*(?=<\/div>\s*<div class="hero-panel)/u,
        `\n          ${heroContactRow}\n          `,
        "hero contact row",
      );
    } else if (heroContactRow) {
      section = replaceRequired(
        section,
        /(\s*<div class="hero-actions[^"]*"[^>]*>[\s\S]*?<\/div>)/u,
        `$1\n          ${heroContactRow}`,
        "hero contact row insertion point",
      );
    }
    const experienceBadge = requirePath(content, "hero.experienceBadge");
    section = experienceBadge
      ? replaceFirstSectionText(section, "hero-experience", experienceBadge)
      : removeFirstElementByClass(section, "hero-experience");
    section = replaceRequired(
      section,
      /(<img\s+class="portrait-image[^"]*"[\s\S]*?src=")[^"]*("[\s\S]*?alt=")[^"]*("[\s\S]*?>)/u,
      `$1${htmlAttr(requirePath(content, "hero.portrait.src"))}$2${htmlAttr(requirePath(content, "hero.portrait.alt"))}$3`,
      "hero portrait",
    );
    const locationBadge = requirePath(content, "hero.locationBadge");
    section = locationBadge
      ? replaceFirstSectionText(section, "hero-location", locationBadge)
      : removeFirstElementByClass(section, "hero-location");
    return section;
  });

  const sectionMap = {
    work: "work",
    experience: "experience",
    skills: "skills",
    about: "about",
    contact: "contact",
  };

  Object.entries(sectionMap).forEach(([key, id]) => {
    html = replaceWithinSection(html, id, (section) => {
      section = replaceFirstSectionText(section, "section-index", requirePath(content, `sections.${key}.index`));
      section = replaceFirstSectionText(section, "section-title", requirePath(content, `sections.${key}.title`));
      return section;
    });
  });

  html = replaceWithinSection(html, "work", (section) => replaceFirstSectionText(section, "subsection-label", requirePath(content, "sections.work.supportingLabel")));
  html = replaceWithinSection(html, "skills", (section) => {
    section = replaceRequired(
      section,
      /(<div class="certifications-block[\s\S]*?<p class="subsection-label[^"]*"[^>]*>)[\s\S]*?(<\/p>)/u,
      `$1${htmlText(requirePath(content, "sections.skills.certificationsLabel"))}$2`,
      "certifications label",
    );
    section = replaceRequired(
      section,
      /(<div class="education-block[\s\S]*?<p class="subsection-label[^"]*"[^>]*>)[\s\S]*?(<\/p>)/u,
      `$1${htmlText(requirePath(content, "sections.skills.educationLabel"))}$2`,
      "education label",
    );
    return section;
  });

  html = replaceWithinSection(html, "contact", (section) => {
    section = replaceFirstSectionText(section, "contact-title", requirePath(content, "contact.title"));
    section = replaceRequired(
      section,
      /(<p class="contact-text[^"]*"[^>]*>\s*)[\s\S]*?(\s*<\/p>)/u,
      `$1${htmlText(requirePath(content, "contact.text"))}$2`,
      "contact text",
    );
    return section;
  });

  html = replaceRequired(
    html,
    /(<footer[\s\S]*?<p>)[\s\S]*?(<\/p>[\s\S]*?<a class="[^"]*" href="#hero">)[\s\S]*?(<\/a>)/u,
    `$1${htmlText(requirePath(content, "footer.text"))}$2${htmlText(requirePath(content, "footer.backToTopLabel"))}$3`,
    "footer",
  );

  return html;
}

function formatJs(value) {
  return JSON.stringify(value, null, 2).replace(/\n/gu, "\n  ");
}

function findValueEnd(source, valueStart) {
  let quote = null;
  let escaped = false;
  const stack = [];
  for (let i = valueStart; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }
    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{" || char === "[") {
      stack.push(char);
      continue;
    }
    if (char === "}" || char === "]") {
      stack.pop();
      continue;
    }
    if (char === "," && stack.length === 0) return i;
    if (char === "\n" && stack.length === 0) {
      const next = source.slice(i).match(/^\n\s*\};/u);
      if (next) return i;
    }
  }
  throw new Error("Could not find end of JavaScript value");
}

function replaceTopLevelProperty(source, property, value) {
  const pattern = new RegExp(`\\n  ${property}:\\s*`, "u");
  const match = pattern.exec(source);
  if (!match) {
    const closingIndex = source.lastIndexOf("\n};");
    if (closingIndex === -1) throw new Error(`Could not find content.js closing object while adding ${property}`);
    const separator = /,\s*$/u.test(source.slice(0, closingIndex).trimEnd()) ? "" : ",";
    return `${source.slice(0, closingIndex).trimEnd()}${separator}\n  ${property}: ${formatJs(value)}${source.slice(closingIndex)}`;
  }
  const valueStart = match.index + match[0].length;
  const valueEnd = findValueEnd(source, valueStart);
  return `${source.slice(0, match.index)}\n  ${property}: ${formatJs(value)}${source.slice(valueEnd)}`;
}

function readCurrentPortfolioContent(js) {
  const sandbox = {
    console: {
      error() {},
      warn() {},
      log() {},
    },
    window: {},
  };
  vm.createContext(sandbox);
  vm.runInContext(js, sandbox, { filename: "content.js" });
  if (!sandbox.window.portfolioContent) {
    throw new Error("Could not read window.portfolioContent from content.js");
  }
  return sandbox.window.portfolioContent;
}

const detailOnlyProjectFields = [
  "caseStudyNavigation",
  "hideOutcomesSummary",
  "popupSections",
  "outcomesLabel",
  "outcomes",
];

function stripDetailOnlyFields(project) {
  return Object.fromEntries(
    Object.entries(project).filter(([key]) => !detailOnlyProjectFields.includes(key)),
  );
}

function mergeProjectList(existingProjects = [], sourceProjects = [], property) {
  const existingById = new Map(existingProjects.map((project) => [project.id, project]));
  return sourceProjects.map((sourceProject) => {
    if (!sourceProject.id) throw new Error(`Missing project id in ${property}`);
    const existingProject = existingById.get(sourceProject.id);
    if (!existingProject) return sourceProject;
    const baseProject = sourceProject.detailFile ? stripDetailOnlyFields(existingProject) : existingProject;
    return {
      ...baseProject,
      ...sourceProject,
    };
  });
}

function selectedWorkUpdates(js, selectedWork) {
  const current = readCurrentPortfolioContent(js);
  return {
    featuredProjects: mergeProjectList(current.featuredProjects, requirePath(selectedWork, "featuredProjects"), "featuredProjects"),
    supportingProjects: mergeProjectList(current.supportingProjects, requirePath(selectedWork, "supportingProjects"), "supportingProjects"),
  };
}

function updateContentJs(js, content, selectedWork) {
  const updates = {
    ...selectedWorkUpdates(js, selectedWork),
    timeline: requirePath(content, "timeline"),
    skillGroups: requirePath(content, "skillGroups"),
    certifications: requirePath(content, "certifications"),
    education: requirePath(content, "education"),
    aboutLead: requirePath(content, "about.lead"),
    aboutParagraphs: requirePath(content, "about.paragraphs"),
    aboutImageSrc: requirePath(content, "about.image.src"),
    aboutImageAlt: requirePath(content, "about.image.alt"),
    focusTags: requirePath(content, "about.focusTags"),
    contactItems: requirePath(content, "contact.items"),
  };

  return Object.entries(updates).reduce(
    (current, [property, value]) => replaceTopLevelProperty(current, property, value),
    js,
  );
}

function projectDetailJs(project) {
  const id = requirePath(project, "id");
  const detail = requirePath(project, "detail");
  return `window.portfolioProjectDetails = window.portfolioProjectDetails || {};\n\nwindow.portfolioProjectDetails[${JSON.stringify(id)}] = ${JSON.stringify(detail, null, 2)};\n`;
}

/* ---------------------------------------------------------------------------
 * Language overlays
 *
 * A translation overlay carries prose only. It is merged onto the English
 * project structure, so labels, titles, stats, image paths, alt text and
 * carousel captions always come from the English source and can never drift.
 * Sections are matched by `label`; an unmatched label is a build error.
 * ------------------------------------------------------------------------- */

const OVERLAY_PARAGRAPH_CLASS = "mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300";
const OVERLAY_LEAD_CLASS = "font-semibold text-slate-900 dark:text-white";
const OVERLAY_LIST_CLASS = "mb-5 grid gap-2";
const OVERLAY_ITEM_CLASS = "relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300";
const OVERLAY_ITEM_STRONG_CLASS = "font-semibold text-slate-950 dark:text-white";
const OVERLAY_ITEM_MUTED_CLASS = "text-slate-500 dark:text-slate-400";
const OVERLAY_LINK_CLASS = "font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300";

// Escapes HTML, then renders inline **bold**, *italic* and [text](url).
function overlayInline(value) {
  return htmlText(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/gu, (match, label, href) =>
      `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${OVERLAY_LINK_CLASS}">${label}</a>`)
    .replace(/\*\*([^*]+)\*\*/gu, `<strong class="${OVERLAY_LEAD_CLASS}">$1</strong>`)
    .replace(/(^|[^*])\*([^*]+)\*/gu, "$1<em>$2</em>")
    .replace(/'/gu, "&#39;");
}

function overlayListItemHtml(item) {
  // "**Label**: rest" keeps the label bold and mutes the description, matching
  // the role list in the English foundation section.
  const labelled = /^\*\*([^*]+)\*\*(:\s.*)$/su.exec(item);
  if (labelled) {
    return `<li class="${OVERLAY_ITEM_CLASS}"><strong class="${OVERLAY_ITEM_STRONG_CLASS}">${htmlText(labelled[1])}</strong><span class="${OVERLAY_ITEM_MUTED_CLASS}">${overlayInline(labelled[2])}</span></li>`;
  }
  return `<li class="${OVERLAY_ITEM_CLASS}">${overlayInline(item)}</li>`;
}

function overlayBlocksHtml(blocks) {
  return blocks
    .map((block) => {
      if (Array.isArray(block.bullets)) {
        return `<ul class="${OVERLAY_LIST_CLASS}">${block.bullets.map(overlayListItemHtml).join("")}</ul>`;
      }
      const lead = block.lead
        ? `<strong class="${OVERLAY_LEAD_CLASS}">${htmlText(block.lead)}</strong> `
        : "";
      return `<p class="${OVERLAY_PARAGRAPH_CLASS}">${lead}${overlayInline(block.text || "")}</p>`;
    })
    .join("");
}

function applySectionOverlay(section, overlay, context) {
  const next = { ...section };

  if (Array.isArray(overlay.body)) next.body = overlay.body.slice();
  if (Array.isArray(overlay.bullets)) next.bullets = overlay.bullets.slice();
  if (typeof overlay.tableIntro === "string") next.tableIntro = overlay.tableIntro;
  if (typeof overlay.summary === "string") next.summary = overlay.summary;
  if (typeof overlay.closingNote === "string") next.closingNote = overlay.closingNote;

  if (Array.isArray(overlay.blocks)) {
    if (!section.customHtml) {
      throw new Error(`${context}: overlay supplies "blocks" but the English section has no customHtml`);
    }
    next.customHtml = overlayBlocksHtml(overlay.blocks);
  }

  if (Array.isArray(overlay.columns)) {
    const baseColumns = section.columns || [];
    if (overlay.columns.length !== baseColumns.length) {
      throw new Error(`${context}: overlay has ${overlay.columns.length} columns, English has ${baseColumns.length}`);
    }
    next.columns = baseColumns.map((column, columnIndex) => {
      const columnOverlay = overlay.columns[columnIndex] || {};
      const nextColumn = { ...column };
      if (typeof columnOverlay.body === "string") nextColumn.body = columnOverlay.body;
      if (Array.isArray(columnOverlay.subsections)) {
        const baseSubsections = column.subsections || [];
        if (columnOverlay.subsections.length !== baseSubsections.length) {
          throw new Error(`${context}, column ${columnIndex + 1}: overlay has ${columnOverlay.subsections.length} subsections, English has ${baseSubsections.length}`);
        }
        // Subsection labels (Trust, Compliance, ...) stay English; only the body is translated.
        nextColumn.subsections = baseSubsections.map((subsection, subsectionIndex) => ({
          ...subsection,
          body: columnOverlay.subsections[subsectionIndex],
        }));
      }
      return nextColumn;
    });
  }

  return next;
}

function applyLanguageOverlay(baseProject, overlay) {
  const lang = requirePath(overlay, "lang");
  const baseDetail = requirePath(baseProject, "detail");
  const baseSections = baseDetail.popupSections || [];
  const overlaySections = overlay.sections || [];

  const byLabel = new Map(baseSections.map((section, index) => [section.label, index]));
  const popupSections = baseSections.map((section) => ({ ...section }));

  overlaySections.forEach((sectionOverlay) => {
    const label = sectionOverlay.label;
    const index = byLabel.get(label);
    if (index === undefined) {
      throw new Error(`Overlay [${lang}] references section "${label}", which does not exist in ${baseProject.id}.yaml`);
    }
    popupSections[index] = applySectionOverlay(
      popupSections[index],
      sectionOverlay,
      `Overlay [${lang}] section "${label}"`,
    );
  });

  return {
    id: `${requirePath(baseProject, "id")}-${lang}`,
    detail: { ...baseDetail, popupSections },
  };
}

function paragraphHtml(paragraph, className = "mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300") {
  if (typeof paragraph === "string") {
    return `<p class="${className}">${htmlText(paragraph)}</p>`;
  }
  if (paragraph.lead) {
    const prefix = paragraph.prefix || "";
    const suffix = paragraph.suffix || "";
    return `<p class="${className}">${htmlText(prefix)}<strong class="font-semibold text-slate-900 dark:text-white">${htmlText(paragraph.lead)}</strong>${htmlText(suffix)}</p>`;
  }
  return `<p class="${className}">${htmlText(paragraph.text || "")}</p>`;
}

function paragraphGroupHtml(paragraphs = [], className) {
  return paragraphs.map((paragraph) => paragraphHtml(paragraph, className)).join("\n        ");
}

function paragraphGroupHtmlWithClasses(paragraphs = [], firstClass, restClass) {
  return paragraphs.map((paragraph, index) => paragraphHtml(paragraph, index === 0 ? firstClass : restClass)).join("\n        ");
}

function bulletListHtml(bullets = [], extraClass = "") {
  if (!bullets.length) return "";
  return `
        <ul class="${extraClass || "grid gap-2"}">
          ${bullets.map((bullet) => {
            if (typeof bullet === "string") {
              return `<li class="relative max-w-4xl pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300">${htmlText(bullet)}</li>`;
            }
            if (!bullet.label) {
              return `<li class="relative max-w-4xl pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300">${htmlText(bullet.text)}</li>`;
            }
            return `<li class="relative max-w-4xl pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300"><strong class="font-semibold text-slate-900 dark:text-white">${htmlText(bullet.label)}</strong> ${htmlText(bullet.text)}</li>`;
          }).join("\n          ")}
        </ul>`;
}

function statGroupsHtml(groups = []) {
  if (!groups.length) return "";
  return `
        <div class="mt-5 grid gap-4 md:grid-cols-2">
          ${groups.map((group) => `
          <div class="rounded-[1rem] border border-slate-200 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/70">
            <p class="mb-3 text-sm font-semibold text-slate-950 dark:text-white">${htmlText(group.label || "")}</p>
            ${bulletListHtml(group.items || [], "grid gap-1.5")}
          </div>`).join("\n          ")}
        </div>`;
}

function imageHtml(image) {
  if (!image?.src) return "";
  const spacingClass = image.mbClass ? ` ${htmlAttr(image.mbClass)}` : "";
  return `
        <figure class="mt-8 w-full overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-800${spacingClass}">
          <img class="block w-full" src="${htmlAttr(image.src)}" alt="${htmlAttr(image.alt || "")}" loading="lazy">
        </figure>`;
}

function subsectionHtml(subsection) {
  const listClass = (subsection.afterBullets || []).length || subsection.note || (subsection.statGroups || []).length ? "mb-5 grid gap-2" : "grid gap-2";
  return `
        <h3 class="mb-3 mt-10 text-lg font-semibold text-slate-950 dark:text-white">${htmlText(subsection.title)}</h3>
        ${paragraphGroupHtml(subsection.paragraphs || [])}
        ${bulletListHtml(subsection.bullets || "", listClass)}
        ${statGroupsHtml(subsection.statGroups || [])}
        ${paragraphGroupHtml(subsection.afterBullets || [], "mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300")}
        ${subsection.note ? `<p class="mb-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-200"><span class="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">✓</span> ${htmlText(subsection.note)}</p>` : ""}`;
}

function sectionCardsHtml(cards = []) {
  if (!cards.length) return "";
  return `
        <div class="mt-8 grid gap-5 lg:grid-cols-2">
          ${cards.map((card) => {
            const iconHtml = card.iconSvg
              ? `<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-[0.9rem] bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200" aria-hidden="true">${card.iconSvg}</div>`
              : "";
            return `
          <article class="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">
            ${iconHtml}
            ${!iconHtml && card.kicker ? `<p class="mb-3 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${htmlText(card.kicker)}</p>` : ""}
            <h3 class="text-xl font-semibold text-slate-950 dark:text-white">${htmlText(card.title || "")}</h3>
            ${paragraphGroupHtml(card.paragraphs || [], "mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300")}
            ${bulletListHtml(card.bullets || [], "mt-5 grid gap-2")}
            ${card.outcome ? `<p class="mt-5 rounded-[1rem] bg-brand-50 p-4 text-sm leading-7 text-slate-700 dark:bg-brand-500/10 dark:text-slate-200"><strong class="font-semibold text-slate-950 dark:text-white">Outcome:</strong> ${htmlText(card.outcome)}</p>` : ""}
          </article>`;
          }).join("\n          ")}
        </div>`;
}

function calloutHtml(callout) {
  if (!callout) return "";
  return `
        <div class="mt-10 rounded-[1.5rem] border-2 border-brand-400 bg-brand-100/70 p-7 dark:border-brand-400/60 dark:bg-brand-500/10 sm:p-10">
          <h3 class="max-w-3xl text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl">${htmlText(callout.title)}</h3>
          ${(callout.paragraphs || []).map((text, index) => `<p class="${index === 0 ? "mt-5" : "mt-4"} max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-200">${htmlText(text)}</p>`).join("\n          ")}
        </div>`;
}

function imagesHtml(images = [], extraClass = "") {
  if (!images.length) return "";
  const spacingClass = extraClass ? ` ${htmlAttr(extraClass)}` : "";
  return `
        <div class="mt-8 flex w-full flex-col gap-5${spacingClass}">
          ${images.map((image) => `<figure class="w-full overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-800">
            <img class="block w-full" src="${htmlAttr(image.src)}" alt="${htmlAttr(image.alt || "")}" loading="lazy">
          </figure>`).join("\n          ")}
        </div>`;
}

function orderedItemsHtml(items = []) {
  if (!items.length) return "";
  return `
        <ol class="mb-5 grid gap-3">
          ${items.map((item, index) => `<li class="relative max-w-4xl pl-9 text-base leading-8 text-slate-600 dark:text-slate-300">
            <span class="absolute left-0 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">${index + 1}</span>
            <strong class="font-semibold text-slate-900 dark:text-white">${htmlText(item.label)}</strong> — ${htmlText(item.text)}
          </li>`).join("\n          ")}
        </ol>`;
}

function actionButtonHtml(action) {
  if (!action?.modalTarget) return "";
  return `
        <button type="button" data-modal-open="${htmlAttr(action.modalTarget)}" class="mt-8 inline-flex min-h-11 items-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
          ${htmlText(action.label)}
          <span class="ml-2" aria-hidden="true">→</span>
        </button>`;
}

function highlightSectionHtml(section) {
  if (!section.highlight) return "";
  return `
        <section class="scroll-mt-36 border-t border-slate-200 px-4 py-12 dark:border-slate-800 sm:px-6 lg:px-8">
          <div class="mx-auto w-full max-w-7xl">
            <div class="rounded-[1.5rem] border-2 border-brand-400 bg-brand-100/70 p-7 dark:border-brand-400/60 dark:bg-brand-500/10 sm:p-10">
              <p class="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">${htmlText(section.highlight)}</p>
            </div>
          </div>
        </section>`;
}

function problemSectionHtml(section) {
  if (section.highlight) return highlightSectionHtml(section);
  const singleImage = imageHtml(section.image);
  const sectionImages = imagesHtml(section.images || [], section.imagesMbClass);
  const imageAtEnd = section.imagePosition === "end" || (section.subsections || []).length || (section.afterSubsections || []).length || (section.orderedItems || []).length || (section.afterOrderedItems || []).length || (section.afterImageParagraphs || []).length || (section.afterImageSubsections || []).length;
  const imagesAtEnd = section.imagesPosition === "end" || (section.subsections || []).length || (section.afterSubsections || []).length || (section.orderedItems || []).length || (section.afterOrderedItems || []).length || (section.afterImageParagraphs || []).length || (section.afterImageSubsections || []).length;
  const bulletClass = (section.afterBullets || []).length || section.image ? "mb-8 grid gap-2" : "grid gap-2";
  const afterImageParagraphs = imageAtEnd
    ? paragraphGroupHtml(section.afterImageParagraphs || [])
    : paragraphGroupHtmlWithClasses(section.afterImageParagraphs || [], "mb-5 mt-8 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300", "mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300");
  return `
    <section id="${htmlAttr(section.id)}" class="scroll-mt-36 border-t border-slate-200 px-4 py-12 dark:border-slate-800 sm:px-6 lg:px-8">
      <div class="mx-auto w-full max-w-7xl">
        ${section.number ? `<p class="text-5xl font-bold text-slate-300 dark:text-slate-700">${htmlText(section.number)}</p>` : ""}
        <div class="mb-10">
          <div class="mt-8">
            ${section.kicker ? `<p class="mb-4 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">${htmlText(section.kicker)}</p>` : ""}
            <h2 class="max-w-3xl text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">${htmlText(section.title)}</h2>
          </div>
        </div>
        ${paragraphGroupHtml(section.paragraphs || [])}
        ${bulletListHtml(section.bullets || [], bulletClass)}
        ${paragraphGroupHtml(section.afterBullets || [])}
        ${imageAtEnd ? "" : singleImage}
        ${imagesAtEnd ? "" : sectionImages}
        ${afterImageParagraphs}
        ${(section.subsections || []).map(subsectionHtml).join("\n")}
        ${sectionCardsHtml(section.cards || [])}
        ${paragraphGroupHtml(section.afterSubsections || [])}
        ${orderedItemsHtml(section.orderedItems || [])}
        ${paragraphGroupHtml(section.afterOrderedItems || [])}
        ${(section.afterImageSubsections || []).map(subsectionHtml).join("\n")}
        ${imageAtEnd ? singleImage : ""}
        ${imagesAtEnd ? sectionImages : ""}
        ${calloutHtml(section.callout)}
        ${imageHtml(section.trailingImage)}
        ${actionButtonHtml(section.action)}
      </div>
    </section>`;
}

function modalDescriptionHtml(section) {
  const subsectionContent = (section.subsections || []).map((subsection) => [
    subsection.title ? `<h3 class="mb-3 mt-10 text-lg font-semibold text-slate-950 dark:text-white">${htmlText(subsection.title)}</h3>` : "",
    paragraphGroupHtml(subsection.paragraphs || []),
    bulletListHtml(subsection.bullets || [], (subsection.afterBullets || []).length ? "mb-8 grid gap-2" : "grid gap-2"),
    ...(subsection.statGroups || []).map((group) => bulletListHtml(group.items || [], "grid gap-1.5")),
    paragraphGroupHtml(subsection.afterBullets || []),
    subsection.note ? `<p class="mb-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-200">${htmlText(subsection.note)}</p>` : "",
  ].join("\n                "));

  return [
    paragraphGroupHtml(section.paragraphs || []),
    bulletListHtml(section.bullets || [], (section.afterBullets || []).length ? "mb-8 grid gap-2" : "grid gap-2"),
    paragraphGroupHtml(section.afterBullets || []),
    ...subsectionContent,
    orderedItemsHtml(section.orderedItems || []),
    paragraphGroupHtml(section.afterOrderedItems || []),
    paragraphGroupHtml(section.afterSubsections || []),
  ].filter(Boolean).join("\n                ");
}

function modalSectionHtml(section) {
  if (section.highlight) {
    return `
          <section class="border-t border-slate-200 px-4 py-10 dark:border-slate-800 sm:px-6 lg:px-8">
            <div class="mx-auto w-full max-w-7xl">
              <p class="max-w-4xl text-base leading-8 text-slate-700 dark:text-slate-200">${htmlText(section.highlight)}</p>
            </div>
          </section>`;
  }

  return `
          <section class="border-t border-slate-200 px-4 py-10 dark:border-slate-800 sm:px-6 lg:px-8">
            <div class="mx-auto w-full max-w-7xl">
              <h2 class="max-w-3xl text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl">${htmlText(section.title || "")}</h2>
              <div class="mt-5">
                ${modalDescriptionHtml(section)}
              </div>
              ${imageHtml(section.image)}
              ${imagesHtml(section.images || [], section.imagesMbClass)}
            </div>
          </section>`;
}

function renderThemeScript() {
  return `
  <script>
    (function () {
      const MOON = "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z";
      const SUN = "M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-9h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM3 11H2a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm14.66-5.07.71-.71a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41-1.41zM5.63 17.66l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 1.41zm11.32 1.41-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1-1.41 1.41zM5.63 6.34 4.92 5.63a1 1 0 0 1 1.41-1.41l.71.71A1 1 0 0 1 5.63 6.34z";
      const toggle = document.querySelector("[data-theme-toggle]");
      const icon = document.querySelector("[data-theme-icon]");
      function applyTheme(theme) {
        document.documentElement.classList.toggle("dark", theme === "dark");
        if (icon) icon.setAttribute("d", theme === "light" ? SUN : MOON);
        if (toggle) toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
      }
      applyTheme("light");
      if (toggle) {
        toggle.addEventListener("click", () => {
          const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
          applyTheme(current === "light" ? "dark" : "light");
        });
      }
    })();
  </script>`;
}

function renderProblemSubpage(page) {
  const breadcrumbId = requirePath(page, "breadcrumb.elementId");
  const html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${htmlText(requirePath(page, "seo.title"))}</title>
  <meta name="description" content="${htmlAttr(requirePath(page, "seo.description"))}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
          colors: {
            brand: {
              50: "#f4f2ff",
              100: "#ebe6ff",
              200: "#d8d0ff",
              300: "#bcaeff",
              400: "#9a82ff",
              500: "#7b5cff",
              600: "#6d50f0",
              700: "#5a42cf",
              800: "#4a37aa",
              900: "#3d3088"
            }
          },
          boxShadow: { card: "0 10px 35px rgba(15, 23, 42, 0.08)" }
        }
      }
    };
  </script>
</head>
<body class="min-w-[320px] bg-slate-50 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
    <div class="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <a class="text-sm font-semibold text-slate-900 dark:text-slate-100" href="${htmlAttr(requirePath(page, "header.brandHref"))}">${htmlText(requirePath(page, "header.brandLabel"))}</a>
      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
        type="button"
        aria-label="Toggle light/dark mode"
        data-theme-toggle
      >
        <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path data-theme-icon d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
        </svg>
      </button>
    </div>
  </header>

  <main>
    <section class="border-b border-slate-200 px-4 py-6 sm:px-6 lg:px-8 dark:border-slate-800">
      <div id="${htmlAttr(breadcrumbId)}"></div>
    </section>

    <section class="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.12),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.06),transparent_30%)]"></div>
      <div class="relative mx-auto w-full max-w-7xl">
        <h1 class="max-w-4xl text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">${htmlText(requirePath(page, "hero.title"))}</h1>
        <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">${htmlText(requirePath(page, "hero.summary"))}</p>
      </div>
    </section>
${requirePath(page, "sections").map(problemSectionHtml).join("\n")}
  </main>

  <footer class="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-8 dark:border-slate-800">
    <div class="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
      <a class="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-200" href="${htmlAttr(requirePath(page, "footer.backLink.href"))}">
        <span class="mr-2" aria-hidden="true">&larr;</span>
        ${htmlText(requirePath(page, "footer.backLink.label"))}
      </a>
      <a class="text-[11px] font-semibold uppercase text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300" href="#top">${htmlText(requirePath(page, "footer.backToTopLabel"))}</a>
    </div>
  </footer>

  <script src="../../breadcrumb.js"></script>
  <script>
    buildBreadcrumb(document.getElementById(${JSON.stringify(breadcrumbId)}), ${JSON.stringify(requirePath(page, "breadcrumb.items"))}, { darkMode: true });
  </script>${renderThemeScript()}
</body>
</html>
`;
  return html.split("\n").map((line) => line.trimEnd()).join("\n");
}

function modalHtml(modal) {
  return `
  <div id="${htmlAttr(modal.id)}-modal" class="fixed inset-0 z-[100] hidden bg-slate-900/60 backdrop-blur-sm" role="dialog" aria-modal="true" aria-hidden="true" aria-label="${htmlAttr(modal.title)}">
    <div class="flex h-full w-full items-center justify-center p-12 sm:p-[72px]">
      <div class="flex h-full max-h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-slate-50 shadow-2xl dark:bg-slate-950">
        <header class="flex-shrink-0 border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
          <div class="mx-auto flex min-h-[64px] w-full items-center justify-between px-4 sm:px-6 lg:px-8">
            <span aria-hidden="true"></span>
            <button
              type="button"
              data-modal-close
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-300"
              aria-label="Close popup"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto">
          <section class="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,92,255,0.12),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(96,165,250,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.06),transparent_30%)]"></div>
            <div class="relative mx-auto w-full max-w-7xl">
              <h1 class="max-w-4xl text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">${htmlText(requirePath(modal, "hero.title"))}</h1>
            </div>
          </section>
          ${(modal.sections || []).map(modalSectionHtml).join("\n")}
        </main>

        <footer class="flex-shrink-0 border-t border-slate-200 bg-white/95 px-4 py-5 backdrop-blur-xl sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950/95">
          <div class="mx-auto flex w-full items-center justify-end">
            <button type="button" data-modal-close class="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500/40 dark:hover:bg-brand-500/10 dark:hover:text-brand-200">${htmlText(modal.closeLabel || "Close")}</button>
          </div>
        </footer>
      </div>
    </div>
  </div>`;
}

function renderModalScript() {
  return `
  <script>
    (function () {
      let lastOpener = null;
      function openModal(modal) {
        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        const firstClose = modal.querySelector("[data-modal-close]");
        if (firstClose) firstClose.focus();
      }
      function closeModal(modal) {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (lastOpener) lastOpener.focus();
      }
      document.querySelectorAll("[data-modal-open]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const targetId = btn.getAttribute("data-modal-open") + "-modal";
          const modal = document.getElementById(targetId);
          if (!modal) return;
          lastOpener = btn;
          openModal(modal);
        });
      });
      document.querySelectorAll("[data-modal-close]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const modal = btn.closest('[role="dialog"]');
          if (modal) closeModal(modal);
        });
      });
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        document.querySelectorAll('[role="dialog"]').forEach(function (modal) {
          if (!modal.classList.contains("hidden")) closeModal(modal);
        });
      });
    })();
  </script>`;
}

function renderHumanBranchSubpage(page) {
  const html = renderProblemSubpage(page);
  const modalMarkup = (page.modals || []).map(modalHtml).join("\n");
  return html
    .replace("\n  <script src=\"../../breadcrumb.js\"></script>", `\n${modalMarkup}\n${renderModalScript()}\n\n  <script src=\"../../breadcrumb.js\"></script>`)
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{4,}/gu, "\n\n\n");
}

function renderAiBranchSubpage(page) {
  return renderHumanBranchSubpage(page);
}

function main() {
  const content = readYamlFile(sourcePath);
  const selectedWork = readYamlFile(selectedWorkPath);
  const textShadowMainCaseStudy = readYamlFile(textShadowMainCaseStudyPath);
  const textshadowProject = readYamlFile(textshadowProjectPath);
  const textshadowAiBehaviorSystemProject = readYamlFile(textshadowAiBehaviorSystemPath);
  const textshadowPresetRuleSystemProject = readYamlFile(textshadowPresetRuleSystemPath);
  const cihmsProject = readYamlFile(cihmsProjectPath);
  const scfVietnamProject = readYamlFile(scfVietnamProjectPath);
  const scfVietnamViProject = applyLanguageOverlay(
    scfVietnamProject,
    readYamlFile(scfVietnamViOverlayPath),
  );
  const textshadowProblem = readYamlFile(textshadowProblemPath);
  const textshadowHuman = readYamlFile(textshadowHumanPath);
  const textshadowAi = readYamlFile(textshadowAiPath);
  const textshadowSystemIntegration = readYamlFile(textshadowSystemIntegrationPath);

  const originalHtml = fs.readFileSync(indexPath, "utf8");
  const nextHtml = updateHtml(originalHtml, content);
  fs.writeFileSync(indexPath, nextHtml);

  const originalContentJs = fs.readFileSync(contentPath, "utf8");
  const nextContentJs = updateContentJs(originalContentJs, content, selectedWork);
  fs.writeFileSync(contentPath, nextContentJs);

  fs.writeFileSync(textShadowMainCaseStudyDetailPath, projectDetailJs(textShadowMainCaseStudy));
  fs.writeFileSync(textshadowDetailPath, projectDetailJs(textshadowProject));
  fs.writeFileSync(textshadowAiBehaviorSystemDetailPath, projectDetailJs(textshadowAiBehaviorSystemProject));
  fs.writeFileSync(textshadowPresetRuleSystemDetailPath, projectDetailJs(textshadowPresetRuleSystemProject));
  fs.writeFileSync(cihmsDetailPath, projectDetailJs(cihmsProject));
  fs.writeFileSync(scfVietnamDetailPath, projectDetailJs(scfVietnamProject));
  fs.writeFileSync(scfVietnamViDetailPath, projectDetailJs(scfVietnamViProject));
  fs.writeFileSync(textshadowProblemOutputPath, renderProblemSubpage(textshadowProblem));
  fs.writeFileSync(textshadowHumanOutputPath, renderHumanBranchSubpage(textshadowHuman));
  fs.writeFileSync(textshadowAiOutputPath, renderAiBranchSubpage(textshadowAi));
  fs.writeFileSync(textshadowSystemIntegrationOutputPath, renderProblemSubpage(textshadowSystemIntegration));

  console.log("Built content from source/content YAML files");
}

main();
