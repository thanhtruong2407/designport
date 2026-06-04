# Text Shadow AI

> This file is a readable preview aligned from YAML. Edit `portfolio/site/source/content/projects/textshadow-01-main.yaml` and `portfolio/site/source/content/projects/selected-work.yaml` for website content.

## Source of Truth

- Website detail content: `portfolio/site/source/content/projects/textshadow-01-main.yaml`
- Project hero and metadata: `portfolio/site/source/content/projects/selected-work.yaml`
- Generated website output: `portfolio/site/public/projects/textshadow-01-main.js`

## Hero

**Title:** Text Shadow AI

**Summary:** Make AI text shadow controllable. Connect the AI, UI controls, and canvas so users can edit it.

**Description:** Text shadow improves readability on complex backgrounds, but AI-generated output needed clearer behavior logic and product support.

This case study frames the work as a product system: UX/UI controls, AI behavior rules, and canvas rendering working together to make output consistent, editable, and usable.

**Tags:** AI, Product Behavior, UX System, Canvas Mapping

## Project Meta

**Company:** VISILY.AI

**Timeline:** 2026

**Duration:** 1 month

**My role:** Feature ownership · AI Feature Rule Definition

## Showcase

**Image:** `./assets/img-textshadow-thumbnail.png`

**Alt:** Text Shadow AI case study thumbnail showing AI-generated text styling

## Context

### Text shadow became a product behavior, not just a design choice.

Text shadow improves readability on complex backgrounds such as images, gradients, and low-contrast areas. In an AI-driven product, this behavior needs to be automated, consistent, and visually reliable across different contexts.

That made text shadow a product problem, not just a design detail.

## Problem

### AI could generate text shadow, but could not apply it consistently

AI lacked clear design logic and product support. Output was inconsistent, context-unaware, and not usable in the canvas.

#### 01. Market reality

Text shadow helps readability on images and low-contrast backgrounds.

- Supports readability and hierarchy
- Common in real product UI
- Functional, not only decorative

**Image:** `./assets/textshadow-problem-market-reality.png`

#### 02. AI limitation

AI could generate text shadow but did not understand when or how to apply it.

- Inconsistent output
- Weak context awareness
- Incorrect or missing shadow usage

**Image:** `./assets/textshadow-problem-ai-limitation.png`

#### 03. Product gap

The design canvas did not support text shadow rendering.

- AI output could not appear correctly
- No editable text shadow controls
- Output was not usable in the canvas

**Image:** `./assets/textshadow-problem-product-gap.png`

## Challenges

### Making text shadow consistent, controllable, and usable

The main challenge was not only generating text shadow. The work had to connect design intent, AI behavior, and product rendering into one usable system.

#### Translate design intent

Human design decisions had to become clear AI behavior logic.

**Tag:** AI Behavior

#### Improve context awareness

AI needed to understand when text shadow helps readability and when it should be avoided.

**Tag:** Validation

#### Balance consistency and flexibility

The system needed predictable output while still allowing users to edit values.

**Tag:** Product Thinking

#### Align with canvas rendering

Generated output had to map to product-supported values that could render in the canvas.

**Tag:** Technical Constraint

## Solution

### A three-part system for UX controls, AI behavior, and canvas rendering

The solution connected UX/UI controls, AI behavior rules, and a mapping layer for canvas rendering.

#### UX/UI controls

**Branch:** Human control

**What changed:** A preset-based UI helps users apply text shadow quickly and safely.

**Controls:**

- Minimal, Soft, Hard, and Glow presets
- Editable offset, blur, color, and opacity
- Output users can review and adjust

**Outcome:** Users do not need to adjust complex shadow values from scratch.

**Image:** `./assets/textshadow-solution-human.png`

#### AI behavior system

**Branch:** AI logic

**What changed:** Structured rules guide when AI should apply text shadow and when it should avoid it.

**Rules support:**

- Better context awareness
- Fewer random styling decisions
- More consistent preset selection

**Outcome:** AI-generated shadows become more predictable.

**Image:** `./assets/textshadow-solution-ai.png`

#### System integration

**Branch:** Canvas mapping

**What changed:** A mapping layer connects AI output, preset logic, and canvas rendering.

**Mapping:**

- AI-generated shadows map to predefined presets
- Preset values remain editable
- Output becomes renderable in the product canvas

**Outcome:** Text shadow becomes predictable, controllable, and usable.

**Image:** `./assets/textshadow-image-system-integration.png`

#### End-to-end system

UX controls, AI behavior, and canvas rendering work together so generated output can be used inside the product.

**Image:** `./assets/textshadow-solution-process.png`

**Alt:** End-to-end process diagram for Text Shadow AI

## Decisions and Trade-offs

### The system prioritized consistency, control, and editability

The team chose a more structured system instead of unrestricted AI generation.

| # | Decision | Trade-off | Result |
|---|---|---|---|
| 01 | Preset-based over free-form styling | Less open-ended styling. | More predictable and scalable output. |
| 02 | Rule-based AI over open generation | Less creative variation. | More reliable AI behavior. |
| 03 | Editable output over full automation | More product UI to support. | More user trust and control. |

## Human-AI Feedback Loop

### Interaction creates feedback, and iteration improves behavior

AI behavior improves through continuous interaction, evaluation, and refinement between users, UX logic, and AI systems.

The core insight was simple: interaction creates feedback. Iteration turns feedback into more accurate, consistent, and reliable AI behavior over time.

**Image:** `./assets/textshadow-image-human-ai.png`

**Alt:** Human and AI feedback loop illustration

## Results and Impact

### More predictable AI output with better product control

The work improved the structure around AI-generated text shadow. Output became easier to evaluate, map, render, and edit.

**Image:** `./assets/textshadow-results-impact.png`

**Alt:** Text Shadow AI results and impact

#### Before

- Inconsistent AI-generated shadows
- Weak decision logic
- No editable canvas support

#### After

- Rule-based AI behavior
- Consistent preset mapping
- Editable UI output

#### User impact

- More predictable AI output
- Easier to refine and control
- Less manual correction needed

#### Product impact

- Standardized text shadow behavior
- Scalable AI styling foundation
- Better alignment across UX, AI, and rendering

## Key Learnings

### AI features need structure, alignment, and continuous refinement

Generation alone is not enough. AI features need behavior logic, rendering support, and product integration.

#### 01. AI features need product logic

Behavior logic, rendering support, and product integration need to work together.

#### 02. Clear rules improve consistency

Defined rules make AI behavior more predictable and easier to test.

#### 03. Testing is part of the lifecycle

AI behavior needs repeated evaluation and refinement, not one final review.

#### 04. Editable output builds trust

Users trust AI more when they can adjust and understand the output.

## Outcomes

**Product impact**

- **Clearer:** AI behavior rules
- **Editable:** User control
- **Aligned:** UX, AI, and canvas

## Preview Workflow

1. Edit website content in YAML first.
2. Run `npm run build:content` from `portfolio/site`.
3. Preview HTML with `python3 -m http.server 4173 -d public` from `portfolio/site`.
4. Use this Markdown file only for readable review, wording checks, or export.
5. If HTML and Markdown are different, treat YAML as the source of truth and update this preview from YAML.
