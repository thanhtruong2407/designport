# AI Behavior System

> This file is an authoring preview for Obsidian. Edit this Markdown for writing review, then ask Codex to sync MD -> YAML. Website content is rendered from YAML, not directly from this file.

## Source of Truth

- Website detail content: `portfolio/site/source/content/projects/textshadow-02-ai-behavior.yaml`
- Project hero and metadata: `portfolio/site/source/content/projects/selected-work.yaml`
- Generated website output: `portfolio/site/public/projects/textshadow-02-ai-behavior.js`

## Hero

**Title:** AI Behavior System

**Summary:** Fix inconsistent AI output. Add rules and test scenarios so AI makes reliable decisions.

**Description:** This is a deep dive of the Text Shadow AI main case study.

AI did not always understand when, where, or how to use text shadow correctly. This deep dive shows how design principles, observed AI patterns, and validation scenarios were converted into a clearer behavior system for more predictable AI output.

**Tags:** AI Behavior, Validation, Prompt Logic, Product Rules

## Project Meta

**Company:** VISILY.AI

**Timeline:** 2026

**Duration:** 1 month

**My role:** Feature ownership · AI Behavior Definition


## Showcase

**Image:** `./assets/02-img-textshadow-thumbnail.png`

**Alt:** Rule-based AI behavior system for text shadow generation

## Overview

### Turning unstable AI styling into controlled product behavior

This sub-project focused on the AI branch of the Text Shadow AI feature.

The goal was not only to make AI generate a visual effect. It was to help AI make better design decisions based on context, readability, and product constraints.

## Problem

### AI could generate text shadow, but could not use it reliably

AI output was inconsistent. In some cases, text shadow was missing even when the prompt asked for it. In other cases, the shadow appeared with weak intensity, incorrect values, or inconsistent behavior across similar screens.

The issue was not only visual quality. AI did not have clear decision logic for when, where, and how to use text shadow.

#### 01. Unstable behavior

Similar UI contexts could receive different shadow behavior.

- Shadow missing when needed
- Weak or incorrect values
- Different behavior across similar screens

**Image:** `./assets/02-textshadow-ai-challenge-inconsistent-output.png`

#### 02. Validation difficulty

AI behavior could not be evaluated through one single test case.

- Non-deterministic output
- Recurring issue patterns
- Need for scenario-based testing

**Image:** `./assets/02-textshadow-ai-output-observation.png`

#### 03. Product risk

If AI styling feels broken or unfinished, user trust decreases.

- Lower trust in AI output
- Harder handoff to product values
- More manual correction required

**Image:** `./assets/02-textshadow-canvas-support-gap.png`

## Product Goal

### Make AI-generated text shadow predictable, consistent, and product-ready

The expected result was not perfect automation. The goal was to improve reliability and make AI behavior easier to understand, test, and refine.

#### 01. Apply with intent

Help AI apply text shadow only when it supports readability or clear visual emphasis.

#### 02. Reduce inconsistency

Make similar UI contexts produce more similar behavior.

#### 03. Map to presets

Guide AI toward predefined presets instead of arbitrary free-form values.

#### 04. Support validation

Create a repeatable process for reviewing and improving AI behavior.

## AI Behavior Challenge

### Translating human design judgment into AI decision logic

Designers can judge readability, contrast, and visual emphasis by looking at the UI. AI needs these decisions to be expressed as clear rules, conditions, and constraints.

If the rules are vague, the output becomes unstable: AI may overuse text shadow, miss it, or apply it with the wrong intensity.

**Image:** `./assets/02-textshadow-ai-rule-system.png`

**Alt:** Rule-based AI system guiding text shadow decisions

## Rule-Based Solution

### A rule-based system for when, where, and how AI should use text shadow

Instead of allowing arbitrary shadow values, the system guided AI through predefined design rules and preset logic.

Rules are organized into a clear framework:

- **When to use (Apply / Avoid)** — Defines intent

- **How to use (Preset + Constraints)** — Defines execution

- **Where to use (Decorative vs Product UI)** — Defines scope

- **How it connects (System mapping)** — Defines implementation

#### Key rule areas

- **Core Principle** — Intentional, minimal, and context-aware usage

- **When to Apply Shadow** — Low contrast backgrounds and key emphasis

- **When to Avoid Shadow** — Small text and dense UI

- **Visual & Technical Constraints** — Opacity, blur, color, and spacing

- **Decorative Usage** — Limited non-functional usage cases

**Image:** `./assets/02-textshadow-ai-rule-simplification.png`

**Alt:** Design rules simplified into practical decision logic for AI text shadow generation

## Prompt Integration

### Splitting guidance into style logic and technical execution

After the behavior rules were defined, they were translated into structured prompt logic in collaboration with AI engineers. The split made AI behavior easier to manage because one layer explained design intent while the other controlled execution.

#### 01. Style guideline

Defines when and where text shadow should be used.

- Readability
- Visual hierarchy
- Background complexity
- Text importance

#### 02. Technical guideline

Defines how text shadow should be generated and mapped.

- Preset mapping
- Supported shadow values
- Product constraints
- Canvas compatibility

**Image:** `./assets/02-textshadow-ai-system-prompt-integration.png`

**Alt:** System prompt integration for AI text shadow behavior

## Scenario-Based Validation

### Testing behavior patterns, not one successful output

AI behavior was validated across different prompt conditions and UI contexts. The goal was to evaluate patterns across repeated outputs, not only check one result.

#### 01. Test coverage

- Prompts without text shadow instructions
- Generic text shadow requests
- Specific presets such as Soft, Hard, and Glow
- Hero banners with image backgrounds
- Dense UI screens where text shadow should be avoided

**Image:** `./assets/02-textshadow-ai-test-case-coverage.png`

#### 02. Evaluation criteria

- Applied when needed
- Avoided when it reduced clarity
- Correct preset selected
- Visible enough to support readability
- Mapped to product values

**Image:** `./assets/02-textshadow-ai-evaluation-criteria.png`

#### 03. Iteration loop

Each test round helped diagnose whether the issue came from rules, prompts, preset mapping, or product constraints.

- Test
- Observe
- Diagnose
- Refine rules and prompts
- Re-test

**Image:** `./assets/02-textshadow-ai-iteration-loop.png`

## Results and Learnings

### AI-generated text shadow became easier to evaluate, refine, and connect to the product

The validation work made behavior gaps easier to measure, compare, and prioritize.

#### Quality Improvements

- **More consistent rule application** — AI output consistency across structured validation scenarios
- **~30% reduction** — Incorrect or weak shadow usage during validation
- **~30% improvement** — Readability across tested UI contexts
- **~70% reliability** — Directional system reliability in prompt-based evaluation

#### Learnings

- **AI needs product rules** — Behavior becomes more stable when AI decisions are guided by clear product rules.
- **Design logic must be simple** — Human design judgment needs to be translated into rules AI can follow consistently.
- **Validation must be scenario-based** — Repeated prompt scenarios reveal behavior patterns better than one successful output.
- **Product constraints matter** — AI output works better when it maps to supported presets, values, and canvas behavior.

**Image:** `./assets/02-textshadow-ai-training-prompt.png`

**Alt:** AI training prompt guidance for text shadow behavior

## Preview Workflow

1. Edit website copy in this Markdown file when reviewing in Obsidian.
2. Ask Codex to sync the rewritten MD content into the matching YAML file.
3. Codex should preserve the current website structure unless a structure change is clearly marked.
4. After YAML changes, run `npm run build:content` from `portfolio/site`.
5. If HTML and Markdown are different, treat YAML as the website source of truth and use this file as the writing preview.
