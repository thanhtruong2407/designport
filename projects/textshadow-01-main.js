window.portfolioProjectDetails = window.portfolioProjectDetails || {};

window.portfolioProjectDetails["textshadow-01-main"] = {
  "showcaseImageSrc": "./assets/01-img-textshadow-thumbnail.png",
  "showcaseImageAlt": "Text Shadow AI case study thumbnail showing AI-generated text styling",
  "outcomesLabel": "Product impact",
  "outcomes": [
    {
      "value": "Clearer",
      "label": "AI behavior rules"
    },
    {
      "value": "Editable",
      "label": "User control"
    },
    {
      "value": "Aligned",
      "label": "UX, AI, and canvas"
    }
  ],
  "hideOutcomesSummary": true,
  "popupSections": [
    {
      "label": "Context",
      "title": "Text shadow had to become a controllable product behavior",
      "body": [
        "Text shadow improves readability on complex backgrounds such as images, gradients, and low-contrast areas.",
        "In an AI-driven product, this behavior needs to be automated, consistent, and visually reliable across different contexts.",
        "That made text shadow a product problem, not just a design detail."
      ]
    },
    {
      "label": "Problem",
      "title": "AI could generate text shadow, but could not apply it consistently",
      "body": [
        "AI lacked clear design logic and product support. Output was inconsistent, context-unaware, and not usable in the canvas."
      ],
      "columns": [
        {
          "number": "01",
          "title": "Market reality",
          "coverImageSrc": "./assets/01-textshadow-problem-market-reality.png",
          "coverImageAlt": "Examples of text shadow improving readability on image and low-contrast backgrounds",
          "body": "Text shadow helps readability on images and low-contrast backgrounds.",
          "bullets": [
            "Supports readability and hierarchy",
            "Common in real product UI",
            "Functional, not only decorative"
          ]
        },
        {
          "number": "02",
          "title": "AI limitation",
          "coverImageSrc": "./assets/01-textshadow-problem-ai-limitation.png",
          "coverImageAlt": "AI limitation illustration showing inconsistent text shadow decisions",
          "body": "AI could generate text shadow but did not understand when or how to apply it.",
          "bullets": [
            "Inconsistent output",
            "Weak context awareness",
            "Incorrect or missing shadow usage"
          ]
        },
        {
          "number": "03",
          "title": "Product gap",
          "coverImageSrc": "./assets/01-textshadow-problem-product-gap.png",
          "coverImageAlt": "Product gap illustration showing text shadow support missing from the canvas",
          "body": "The design canvas did not support text shadow rendering.",
          "bullets": [
            "AI output could not appear correctly",
            "No editable text shadow controls",
            "Output was not usable in the canvas"
          ]
        }
      ]
    },
    {
      "label": "Challenges",
      "title": "Making text shadow consistent, controllable, and usable",
      "body": [
        "The main challenge was not only generating text shadow. The work had to connect design intent, AI behavior, and product rendering into one usable system."
      ],
      "displayAs": "simpleCards",
      "columns": [
        {
          "title": "Translate design intent",
          "body": "Human design decisions had to become clear AI behavior logic.",
          "tag": "AI Behavior"
        },
        {
          "title": "Improve context awareness",
          "body": "AI needed to understand when text shadow helps readability and when it should be avoided.",
          "tag": "Validation"
        },
        {
          "title": "Balance consistency and flexibility",
          "body": "The system needed predictable output while still allowing users to edit values.",
          "tag": "Product Thinking"
        },
        {
          "title": "Align with canvas rendering",
          "body": "Generated output had to map to product-supported values that could render in the canvas.",
          "tag": "System Design"
        }
      ]
    },
    {
      "label": "Solution",
      "title": "A three-part system for UX controls, AI behavior, and canvas rendering",
      "body": [
        "The solution connected UX/UI controls, AI behavior rules, and a mapping layer for canvas rendering."
      ],
      "columns": [
        {
          "title": "Preset Rule System",
          "branchLabel": "UX/UI",
          "coverImageSrc": "./assets/01-textshadow-solution-human.png",
          "coverImageAlt": "Preset-based text shadow controls for users",
          "subsections": [
            {
              "label": "What changed",
              "body": "A preset-based UI helps users apply text shadow quickly and safely."
            },
            {
              "label": "Controls",
              "bullets": [
                "Minimal, Soft, Hard, and Glow presets",
                "Editable offset, blur, color, and opacity",
                "Output users can review and adjust"
              ]
            },
            {
              "label": "Outcome",
              "body": "Users do not need to adjust complex shadow values from scratch."
            }
          ],
          "action": {
            "label": "Deep Dive",
            "href": "./project.html?id=textshadow-03-preset-rule"
          }
        },
        {
          "title": "AI Behavior System",
          "branchLabel": "AI logic",
          "coverImageSrc": "./assets/01-textshadow-solution-ai.png",
          "coverImageAlt": "Rule-based AI behavior system for text shadow",
          "subsections": [
            {
              "label": "What changed",
              "body": "Structured rules guide when AI should apply text shadow and when it should avoid it."
            },
            {
              "label": "Rules support",
              "bullets": [
                "Better context awareness",
                "Fewer random styling decisions",
                "More consistent preset selection"
              ]
            },
            {
              "label": "Outcome",
              "body": "AI-generated shadows become more predictable."
            }
          ],
          "action": {
            "label": "Deep Dive",
            "href": "./project.html?id=textshadow-02-ai-behavior"
          }
        },
        {
          "title": "System Integration",
          "branchLabel": "Canvas mapping",
          "coverImageSrc": "./assets/01-textshadow-image-system-integration.png",
          "coverImageAlt": "System integration diagram connecting AI output, preset logic, and canvas rendering",
          "subsections": [
            {
              "label": "What changed",
              "body": "A mapping layer connects AI output, preset logic, and canvas rendering."
            },
            {
              "label": "Mapping",
              "bullets": [
                "AI-generated shadows map to predefined presets",
                "Preset values remain editable",
                "Output becomes renderable in the product canvas"
              ]
            },
            {
              "label": "Outcome",
              "body": "Text shadow becomes predictable, controllable, and usable."
            }
          ]
        }
      ],
      "diagramLabel": "End-to-end system",
      "diagramCaption": "UX controls, AI behavior, and canvas rendering work together so generated output can be used inside the product.",
      "diagramImageSrc": "./assets/01-textshadow-solution-process.png",
      "diagramImageAlt": "End-to-end process diagram for Text Shadow AI"
    },
    {
      "label": "Decisions and Trade-offs",
      "title": "The system prioritized consistency, control, and editability",
      "body": [
        "The team chose a more structured system instead of unrestricted AI generation."
      ],
      "displayAs": "table",
      "columns": [
        {
          "number": "01",
          "title": "Preset-based over free-form styling",
          "subsections": [
            {
              "label": "Trade-off",
              "body": "Less open-ended styling."
            },
            {
              "label": "Result",
              "body": "More predictable and scalable output."
            }
          ]
        },
        {
          "number": "02",
          "title": "Rule-based AI over open generation",
          "subsections": [
            {
              "label": "Trade-off",
              "body": "Less creative variation."
            },
            {
              "label": "Result",
              "body": "More reliable AI behavior."
            }
          ]
        },
        {
          "number": "03",
          "title": "Editable output over full automation",
          "subsections": [
            {
              "label": "Trade-off",
              "body": "More product UI to support."
            },
            {
              "label": "Result",
              "body": "More user trust and control."
            }
          ]
        }
      ]
    },
    {
      "label": "Human-AI Feedback Loop",
      "title": "Interaction creates feedback, and iteration improves behavior",
      "body": [
        "AI behavior improves through continuous interaction, evaluation, and refinement between users, UX logic, and AI systems.",
        "The core insight was simple: interaction creates feedback. Iteration turns feedback into more accurate, consistent, and reliable AI behavior over time."
      ],
      "imageSrc": "./assets/01-textshadow-image-human-ai.png",
      "imageAlt": "Human and AI feedback loop illustration"
    },
    {
      "label": "Results and Impact",
      "title": "More predictable AI output with better product control",
      "body": [
        "The work improved the structure around AI-generated text shadow. Output became easier to evaluate, map, render, and edit."
      ],
      "imageSrc": "./assets/01-textshadow-results-impact.png",
      "imageAlt": "Text Shadow AI results and impact",
      "groups": [
        {
          "label": "Before and after",
          "displayAs": "simpleCards",
          "columns": [
            {
              "title": "Before",
              "bullets": [
                "Inconsistent AI-generated shadows",
                "Weak decision logic",
                "No editable canvas support"
              ]
            },
            {
              "title": "After",
              "bullets": [
                "Rule-based AI behavior",
                "Consistent preset mapping",
                "Editable UI output"
              ]
            }
          ]
        },
        {
          "label": "Impact",
          "displayAs": "simpleCards",
          "columns": [
            {
              "title": "User impact",
              "bullets": [
                "More predictable AI output",
                "Easier to refine and control",
                "Less manual correction needed"
              ]
            },
            {
              "title": "Product impact",
              "bullets": [
                "Standardized text shadow behavior",
                "Scalable AI styling foundation",
                "Better alignment across UX, AI, and rendering"
              ]
            }
          ]
        }
      ]
    },
    {
      "label": "Key Learnings",
      "title": "AI features need structure, alignment, and continuous refinement",
      "body": [
        "Generation alone is not enough. AI features need behavior logic, rendering support, and product integration."
      ],
      "displayAs": "simpleCards",
      "columns": [
        {
          "number": "01",
          "title": "AI features need product logic",
          "body": "Behavior logic, rendering support, and product integration need to work together."
        },
        {
          "number": "02",
          "title": "Clear rules improve consistency",
          "body": "Defined rules make AI behavior more predictable and easier to test."
        },
        {
          "number": "03",
          "title": "Testing is part of the lifecycle",
          "body": "AI behavior needs repeated evaluation and refinement, not one final review."
        },
        {
          "number": "04",
          "title": "Editable output builds trust",
          "body": "Users trust AI more when they can adjust and understand the output."
        }
      ]
    }
  ],
  "endImage": {
    "src": "./assets/01-textshadow-image-end.png",
    "alt": "Zendesk user feedback message about Visily text shadow improvements, with a note saying no survey, just a user who noticed",
    "caption": "A real user noticed the improvement without being asked."
  }
};
