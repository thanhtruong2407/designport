window.portfolioProjectDetails = window.portfolioProjectDetails || {};

window.portfolioProjectDetails["cihms"] = {
  "showcaseImageSrc": "./assets/img-cihms-thumbnail.png",
  "showcaseImageAlt": "CiHMS product mockup overview",
  "hideOutcomesSummary": true,
  "popupSections": [
    {
      "label": "Context",
      "title": "Platform Context: Large Hospitality System with Workflow Problems",
      "body": [
        "HMS is a large hospitality management system used across multiple properties and cities.",
        "It has 35+ modules and 100+ features used daily by staff and management teams. Over time, workflows became fragmented and inconsistent across modules. This made daily operations harder to complete."
      ],
      "stats": [
        {
          "value": "35+",
          "label": "Modules"
        },
        {
          "value": "100+",
          "label": "Features"
        },
        {
          "value": "40+",
          "label": "Properties"
        },
        {
          "value": "15+",
          "label": "Cities"
        },
        {
          "value": "3",
          "label": "Countries"
        },
        {
          "value": "3,300+",
          "label": "Branch personnel"
        }
      ]
    },
    {
      "label": "Problem",
      "title": "Workflows No Longer Fit How Hotel Teams Actually Work",
      "body": [
        "As the product scaled, staff had to work harder. Usability decreased. Operational efficiency dropped.",
        "Why this happened:"
      ],
      "displayAs": "simpleCards",
      "columns": [
        {
          "number": "01",
          "title": "Fragmented Workflows",
          "body": "Staff had to switch between multiple modules to complete routine tasks. There was no clear end-to-end flow."
        },
        {
          "number": "02",
          "title": "UI Inconsistency",
          "body": "Different modules used different interaction patterns. This increased cognitive load and learning time. Staff needed more training."
        },
        {
          "number": "03",
          "title": "Lack of Scalable Structure",
          "body": "Features were added quickly without a unified foundation. This created cross-dependencies and system complexity."
        },
        {
          "number": "04",
          "title": "Operational Impact",
          "body": "Tasks took longer to complete. The risk of errors increased."
        }
      ]
    },
    {
      "label": "Product Goal",
      "title": "Improve operational efficiency by simplifying workflows and standardizing system behavior",
      "body": [
        "Improve operational efficiency by simplifying workflows and standardizing system behavior."
      ],
      "imageSrc": "./assets/img-product-goal-relax.png",
      "imageAlt": "Product goal visual break",
      "bullets": [
        "Reduce task complexity.",
        "Improve usability perception.",
        "Increase adoption and preference."
      ]
    },
    {
      "label": "Approach",
      "title": "Moved from module-based thinking to workflow-based product decisions",
      "steps": [
        {
          "title": "Research",
          "text": "Interviewed staff and stakeholders. Observed real workflows. Key insight: system structure did not match real work."
        },
        {
          "title": "Workflow analysis",
          "text": "Mapped end-to-end flows. Identified gaps and inconsistencies. Shifted from module-based to workflow-based thinking."
        },
        {
          "title": "System restructuring",
          "text": "Simplified flows. Improved navigation and structure. Standardized interactions."
        },
        {
          "title": "Engineering collaboration",
          "text": "Created clear specifications. Worked with engineers to ensure feasibility."
        }
      ]
    },
    {
      "label": "Solution",
      "title": "Focused on improving workflows in high-impact areas",
      "body": [
        "Focused on improving workflows in high-impact areas."
      ],
      "groups": [
        {
          "title": "Key areas",
          "displayAs": "simpleCards",
          "gridCols": 3,
          "columns": [
            {
              "title": "Front Office",
              "body": "Check-in, check-out, reservation handling, pricing, and guest-facing operations."
            },
            {
              "title": "Housekeeping",
              "body": "Room status, cleaning coordination, maintenance needs, and task handoff clarity."
            },
            {
              "title": "Task and Maintenance",
              "body": "Cross-department workflows that act as a backbone for operational coordination."
            },
            {
              "title": "Channel Management",
              "body": "Room availability and pricing synchronization across booking platforms."
            },
            {
              "title": "OPS Inventory",
              "body": "Tracks inventory, locations, and quantities with clear audit trails and accountability."
            },
            {
              "title": "Package Control",
              "body": "Guest service and upsell flows supporting a smoother service experience."
            }
          ]
        },
        {
          "title": "Improvements",
          "displayAs": "simpleCards",
          "gridCols": 3,
          "columns": [
            {
              "number": "01",
              "title": "Unified workflows",
              "body": "Created more consistent flows across modules."
            },
            {
              "number": "02",
              "title": "Simpler task flows",
              "body": "Reduced complexity in recurring operational tasks."
            },
            {
              "number": "03",
              "title": "Better booking clarity",
              "body": "Improved clarity around booking and reservation information."
            },
            {
              "number": "04",
              "title": "Lower cognitive load",
              "body": "Reduced the effort needed to understand and complete core tasks."
            },
            {
              "number": "05",
              "title": "Scalable design patterns",
              "body": "Created patterns that could support future modules and product growth."
            }
          ]
        }
      ]
    },
    {
      "label": "Execution - Design System",
      "title": "Creating consistency at scale",
      "body": [
        "Reduced cognitive load and improved onboarding."
      ],
      "bullets": [
        "Reusable UI patterns.",
        "Standardized components.",
        "Improved layout and hierarchy."
      ],
      "carousel": {
        "title": "Design system showcase",
        "slides": [
          {
            "label": "Typography and main color",
            "imageSrc": "./assets/design-main-and-typo.png"
          },
          {
            "label": "Other palette color",
            "imageSrc": "./assets/design-other-palette.png"
          },
          {
            "label": "Spot Illustration",
            "imageSrc": "./assets/design-illustration.png"
          },
          {
            "label": "Iconography",
            "imageSrc": "./assets/design-iconography.png"
          },
          {
            "label": "Components",
            "imageSrc": "./assets/design-components.png"
          }
        ]
      }
    },
    {
      "label": "Execution - Highlighted Modules",
      "title": "Core parts of the platform that shaped operational workflows",
      "body": [
        "CiHMS consists of 35+ modules and 100+ features supporting end-to-end hotel operations."
      ],
      "imageSrc": "./assets/design-highlighted-modules.png",
      "imageAlt": "CiHMS highlighted modules overview",
      "carousel": {
        "title": "Highlighted modules showcase",
        "slides": [
          {
            "label": "Front Office",
            "description": "Handles reservations, check-in and check-out, pricing, and services. Directly affects guest-facing operations.",
            "imageSrc": "./assets/module-front-office.png"
          },
          {
            "label": "Housekeeping",
            "description": "Supports cleaning, maintenance, and service tasks. Requires clarity and real-time coordination.",
            "imageSrc": "./assets/module-house-keeping.png"
          },
          {
            "label": "Channel Management",
            "description": "Controls room availability across booking platforms. Critical for operational accuracy and revenue.",
            "imageSrc": "./assets/module-channel-management.png"
          },
          {
            "label": "OPS Inventory",
            "description": "Tracks inventory with audit trails. Supports accountability and operational visibility.",
            "imageSrc": "./assets/module-ops-inventory.png"
          },
          {
            "label": "Package Control",
            "description": "Supports contactless service flows and upsell-related features. Helps improve the guest experience.",
            "imageSrc": "./assets/module-packade-control.png"
          },
          {
            "label": "Task and Maintenance",
            "description": "Connects workflows across departments. Acts as a backbone for operational coordination.",
            "imageSrc": "./assets/module-task.png"
          }
        ]
      }
    },
    {
      "label": "Results and Impact",
      "title": "Improved adoption, usability, and confidence in the platform",
      "displayAs": "simpleIconCards",
      "stats": [
        {
          "value": "85.11%",
          "label": "Branch satisfaction",
          "detail": "Rated Good or Very Good"
        },
        {
          "value": "76.34%",
          "label": "Head Office satisfaction",
          "detail": "Rated system positively"
        },
        {
          "value": "85.28%",
          "label": "Branch preference",
          "detail": "Preferred CiHMS over Opera"
        },
        {
          "value": "75.45%",
          "label": "Head Office preference",
          "detail": "Preferred CiHMS over Opera"
        },
        {
          "value": "3,300+",
          "label": "Branch personnel"
        },
        {
          "value": "100+",
          "label": "Head Office personnel"
        }
      ],
      "columns": [
        {
          "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 3v18h18\"/><path d=\"m19 9-5 5-4-4-3 3\"/></svg>",
          "title": "Operational impact",
          "body": "Reduced friction and improved task speed. Lower dependency on training."
        },
        {
          "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 6h18\"/><path d=\"M3 12h18\"/><path d=\"M3 18h18\"/><path d=\"M7 6v12\"/><path d=\"M17 6v12\"/></svg>",
          "title": "Workflow improvement",
          "body": "Better navigation and clearer booking flows."
        },
        {
          "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2v20\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6\"/></svg>",
          "title": "Product impact",
          "body": "Improved competitiveness and user trust. Stronger foundation for future growth."
        }
      ]
    },
    {
      "label": "Key Learnings",
      "title": "What this project reinforced about product and system design",
      "columns": [
        {
          "number": "01",
          "title": "Workflow drives efficiency",
          "body": "Task flows matter more than individual screens."
        },
        {
          "number": "02",
          "title": "Users think in tasks",
          "body": "Design should follow real workflows."
        },
        {
          "number": "03",
          "title": "Adoption is critical",
          "body": "Balance improvement with familiarity."
        },
        {
          "number": "04",
          "title": "Consistency scales",
          "body": "Design systems support long-term growth."
        }
      ]
    }
  ],
  "outcomesLabel": "Impact",
  "outcomes": [
    {
      "value": "40+",
      "label": "Properties supported"
    },
    {
      "value": "15+",
      "label": "Cities supported"
    },
    {
      "value": "3",
      "label": "Countries reached"
    },
    {
      "value": "85.28%",
      "label": "Branch preference over Opera"
    }
  ]
};
