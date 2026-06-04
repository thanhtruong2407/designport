window.portfolioProjectDetails = window.portfolioProjectDetails || {};

window.portfolioProjectDetails["textshadow-02-ai-behavior"] = {
  "showcaseImageSrc": "./assets/02-img-textshadow-thumbnail.png",
  "showcaseImageAlt": "Rule-based AI behavior system for text shadow generation",
  "hideOutcomesSummary": true,
  "outcomes": [
    {
      "value": "25+",
      "label": "Structured prompt scenarios evaluated"
    },
    {
      "value": "~70%",
      "label": "Directional system reliability"
    },
    {
      "value": "Lower",
      "label": "Incorrect shadow usage"
    },
    {
      "value": "Clearer",
      "label": "Validation and prioritization"
    }
  ],
  "popupSections": [
    {
      "label": "Overview",
      "title": "Turning unstable AI styling into controlled product behavior",
      "body": [
        "This sub-project focused on the AI branch of the Text Shadow AI feature.",
        "The goal was not only to make AI generate a visual effect. It was to help AI make better design decisions based on context, readability, and product constraints."
      ]
    },
    {
      "label": "Problem",
      "title": "AI could generate text shadow, but could not use it reliably",
      "body": [
        "AI output was inconsistent. In some cases, text shadow was missing even when the prompt asked for it. In other cases, the shadow appeared with weak intensity, incorrect values, or inconsistent behavior across similar screens.",
        "The issue was not only visual quality. AI did not have clear decision logic for when, where, and how to use text shadow."
      ],
      "columns": [
        {
          "number": "01",
          "title": "Unstable behavior",
          "coverImageSrc": "./assets/02-textshadow-ai-challenge-inconsistent-output.png",
          "coverImageAlt": "AI-generated text shadow outputs showing inconsistent behavior",
          "body": "Similar UI contexts could receive different shadow behavior.",
          "bullets": [
            "Shadow missing when needed",
            "Weak or incorrect values",
            "Different behavior across similar screens"
          ]
        },
        {
          "number": "02",
          "title": "Validation difficulty",
          "coverImageSrc": "./assets/02-textshadow-ai-output-observation.png",
          "coverImageAlt": "Observed AI output issues for text shadow behavior",
          "body": "AI behavior could not be evaluated through one single test case.",
          "bullets": [
            "Non-deterministic output",
            "Recurring issue patterns",
            "Need for scenario-based testing"
          ]
        },
        {
          "number": "03",
          "title": "Product risk",
          "coverImageSrc": "./assets/02-textshadow-canvas-support-gap.png",
          "coverImageAlt": "Product canvas support gap for AI-generated text shadow",
          "body": "If AI styling feels broken or unfinished, user trust decreases.",
          "bullets": [
            "Lower trust in AI output",
            "Harder handoff to product values",
            "More manual correction required"
          ]
        }
      ]
    },
    {
      "label": "Product Goal",
      "title": "Make AI-generated text shadow predictable, consistent, and product-ready",
      "body": [
        "The expected result was not perfect automation. The goal was to improve reliability and make AI behavior easier to understand, test, and refine."
      ],
      "displayAs": "simpleCards",
      "columns": [
        {
          "title": "Apply with intent",
          "body": "Help AI apply text shadow only when it supports readability or clear visual emphasis.",
          "tag": "AI Behavior"
        },
        {
          "title": "Reduce inconsistency",
          "body": "Make similar UI contexts produce more similar behavior.",
          "tag": "Validation"
        },
        {
          "title": "Map to presets",
          "body": "Guide AI toward predefined presets instead of arbitrary free-form values.",
          "tag": "Prompt Logic"
        },
        {
          "title": "Support validation",
          "body": "Create a repeatable process for reviewing and improving AI behavior.",
          "tag": "Product Rules"
        }
      ]
    },
    {
      "label": "AI Behavior Challenge",
      "title": "Translating human design judgment into AI decision logic",
      "body": [
        "Designers can judge readability, contrast, and visual emphasis by looking at the UI. AI needs these decisions to be expressed as clear rules, conditions, and constraints.",
        "If the rules are vague, the output becomes unstable: AI may overuse text shadow, miss it, or apply it with the wrong intensity."
      ],
      "diagramImageSrc": "./assets/02-textshadow-ai-rule-system.png",
      "diagramImageAlt": "Rule-based AI system guiding text shadow decisions"
    },
    {
      "label": "Rule-Based Solution",
      "title": "A rule-based system for when, where, and how AI should use text shadow",
      "body": [
        "Instead of allowing arbitrary shadow values, the system guided AI through predefined design rules and preset logic.",
        "Rules are organized into a clear framework:"
      ],
      "bullets": [
        {
          "label": "When to use (Apply / Avoid)",
          "text": "Defines intent"
        },
        {
          "label": "How to use (Preset + Constraints)",
          "text": "Defines execution"
        },
        {
          "label": "Where to use (Decorative vs Product UI)",
          "text": "Defines scope"
        },
        {
          "label": "How it connects (System mapping)",
          "text": "Defines implementation"
        }
      ],
      "subsections": [
        {
          "title": "Key rule areas",
          "bullets": [
            {
              "label": "Core Principle",
              "text": "Intentional, minimal, and context-aware usage"
            },
            {
              "label": "When to Apply Shadow",
              "text": "Low contrast backgrounds and key emphasis"
            },
            {
              "label": "When to Avoid Shadow",
              "text": "Small text and dense UI"
            },
            {
              "label": "Visual & Technical Constraints",
              "text": "Opacity, blur, color, and spacing"
            },
            {
              "label": "Decorative Usage",
              "text": "Limited non-functional usage cases"
            }
          ]
        }
      ],
      "images": [
        {
          "src": "./assets/02-textshadow-ai-rule-simplification.png",
          "alt": "Design rules simplified into practical decision logic for AI text shadow generation"
        }
      ]
    },
    {
      "label": "Prompt Integration",
      "title": "Splitting guidance into style logic and technical execution",
      "body": [
        "After the behavior rules were defined, they were translated into structured prompt logic in collaboration with AI engineers. The split made AI behavior easier to manage because one layer explained design intent while the other controlled execution."
      ],
      "displayAs": "simpleCards",
      "columns": [
        {
          "title": "Style guideline",
          "body": "Defines when and where text shadow should be used.",
          "bullets": [
            "Readability",
            "Visual hierarchy",
            "Background complexity",
            "Text importance"
          ]
        },
        {
          "title": "Technical guideline",
          "body": "Defines how text shadow should be generated and mapped.",
          "bullets": [
            "Preset mapping",
            "Supported shadow values",
            "Product constraints",
            "Canvas compatibility"
          ]
        }
      ],
      "images": [
        {
          "src": "./assets/02-textshadow-ai-system-prompt-integration.png",
          "alt": "System prompt integration for AI text shadow behavior"
        }
      ]
    },
    {
      "label": "Scenario-Based Validation",
      "title": "Testing behavior patterns, not one successful output",
      "body": [
        "AI behavior was validated across different prompt conditions and UI contexts. The goal was to evaluate patterns across repeated outputs, not only check one result."
      ],
      "columns": [
        {
          "number": "01",
          "title": "Test coverage",
          "coverImageSrc": "./assets/02-textshadow-ai-test-case-coverage.png",
          "coverImageAlt": "Test cases covering AI text shadow scenarios",
          "bullets": [
            "Prompts without text shadow instructions",
            "Generic text shadow requests",
            "Specific presets such as Soft, Hard, and Glow",
            "Hero banners with image backgrounds",
            "Dense UI screens where text shadow should be avoided"
          ]
        },
        {
          "number": "02",
          "title": "Evaluation criteria",
          "coverImageSrc": "./assets/02-textshadow-ai-evaluation-criteria.png",
          "coverImageAlt": "Evaluation criteria for AI-generated text shadow behavior",
          "bullets": [
            "Applied when needed",
            "Avoided when it reduced clarity",
            "Correct preset selected",
            "Visible enough to support readability",
            "Mapped to product values"
          ]
        },
        {
          "number": "03",
          "title": "Iteration loop",
          "coverImageSrc": "./assets/02-textshadow-ai-iteration-loop.png",
          "coverImageAlt": "AI behavior iteration loop",
          "body": "Each test round helped diagnose whether the issue came from rules, prompts, preset mapping, or product constraints.",
          "bullets": [
            "Test",
            "Observe",
            "Diagnose",
            "Refine rules and prompts",
            "Re-test"
          ]
        }
      ]
    },
    {
      "label": "Results and Learnings",
      "title": "AI-generated text shadow became easier to evaluate, refine, and connect to the product",
      "body": [
        "The validation work made behavior gaps easier to measure, compare, and prioritize."
      ],
      "groups": [
        {
          "label": "Quality Improvements",
          "metrics": [
            {
              "metric": "AI output consistency across structured validation scenarios",
              "result": "More consistent rule application"
            },
            {
              "metric": "Incorrect or weak shadow usage during validation",
              "result": "~30% reduction"
            },
            {
              "metric": "Readability across tested UI contexts",
              "result": "~30% improvement"
            },
            {
              "metric": "Directional system reliability in prompt-based evaluation",
              "result": "~70% reliability"
            }
          ]
        },
        {
          "label": "Learnings",
          "displayAs": "simpleCards",
          "columns": [
            {
              "title": "AI needs product rules",
              "body": "Behavior becomes more stable when AI decisions are guided by clear product rules."
            },
            {
              "title": "Design logic must be simple",
              "body": "Human design judgment needs to be translated into rules AI can follow consistently."
            },
            {
              "title": "Validation must be scenario-based",
              "body": "Repeated prompt scenarios reveal behavior patterns better than one successful output."
            },
            {
              "title": "Product constraints matter",
              "body": "AI output works better when it maps to supported presets, values, and canvas behavior."
            }
          ]
        }
      ]
    },
    {
      "images": [
        {
          "src": "./assets/02-textshadow-ai-training-prompt.png",
          "alt": "AI training prompt guidance for text shadow behavior"
        }
      ]
    }
  ]
};
