# Preset Rule System

> This file is an authoring preview for Obsidian. Edit this Markdown for writing review, then ask Codex to sync MD -> YAML. Website content is rendered from YAML, not directly from this file.

## Source of Truth

- Website detail content: `portfolio/site/source/content/projects/textshadow-03-preset-rule.yaml`
- Project hero and metadata: `portfolio/site/source/content/projects/selected-work.yaml`
- Generated website output: `portfolio/site/public/projects/textshadow-03-preset-rule.js`

## Hero

**Title:** Preset Rule System

**Summary:** Too many settings = slow. Use presets for quick control with live preview and custom editing.

**Description:** Text shadow includes multiple values such as offset, opacity, color, and blur, which can be hard for non-designers to control. This deep dive explains how a preset-based interaction system makes text shadow easier.

**Tags:** Preset System, UX Controls, Rule Logic, Validation

## Project Meta

**Company:** VISILY.AI

**Timeline:** 2026

**Duration:** 1 month

**My role:**  Feature ownership · UX System & Rule Logic 

## Showcase

**Image:** `./assets/03-img-textshadow-thumbnail.png`

**Alt:** Text Shadow preset rule system case study thumbnail

## Overview

### Making text shadow easier to apply, preview, and control

Text shadow has many values: offset, blur, opacity, color, and context. For many users, controlling these values manually can be slow and hard to predict.

The solution was a preset-based interaction system that keeps the default workflow simple while still allowing users to adjust values when needed.

## Challenge

### Too many parameters, low confidence

Text shadow requires multiple parameters such as offset, opacity, color, and blur. For non-designers, this makes the feature difficult to understand and use.

Users struggle to predict the final result and make confident decisions.

**Image:** `./assets/03-textshadow-solution-ui-challenge.png`

**Alt:** Text shadow UI challenge with multiple parameters

## Approach

### Preset-based interaction

Instead of showing all parameters by default, the system provides predefined presets: None, Minimal, Soft, Hard, Glow, and Custom (Manual control).

#### Users can

- Select a preset
- Preview the result instantly
- Customize values when needed

**Image:** `./assets/03-textshadow-preset-core-idea-outcomes.png`

**Alt:** Core idea and outcomes of the text shadow preset system

## Formula System

### Preset values scale with text properties

The preset system does not treat shadow values as one fixed style. Shadow behavior changes based on text properties such as font size and font weight.

This keeps results more consistent across headings, smaller text, and different canvas contexts.

**Image:** `./assets/03-textshadow-preset-formula-1.png`

**Alt:** Text shadow preset formula based on font size

## Behavior System

### User changes trigger automatic shadow recalculation

Shadow values update dynamically when users change presets or modify text properties.

**Flow:** User updates → System recalculates → Shadow updates.

This maintains visual consistency automatically.

**Image:** `./assets/03-textshadow-preset-behavior.png`

**Alt:** Behavior system flow for text shadow preset updates

**Bottom image grid:** 2 columns

**Left image:** `./assets/03-textshadow-solution-fixed-style.png`

**Left alt:** Fixed text shadow style example

**Right image:** `./assets/03-textshadow-solution-apply-preset.png`

**Right alt:** Applying a text shadow preset example

## UI Design

### Translating systems into intuitive interactions

The UI translates the preset system into a simple and predictable interaction model.

#### Interaction Design

Users can apply presets directly on the canvas, preview results instantly, and understand the current selection through clear states and feedback.

**Image:** `./assets/03-textshadow-ui-states.png`

**Alt:** Editable text shadow UI states

#### System Integration

The UI aligns text shadow behavior with typography settings, theme configuration, and existing text features.

**Image:** `./assets/03-textshadow-ui-integration.png`

**Alt:** Text shadow UI integrated with canvas preview

#### Visual Validation

Text shadow was tested on: light backgrounds, dark backgrounds, and image backgrounds. Validation focused on: readability, visual consistency, and reducing visual noise.

**Image:** `./assets/03-textshadow-ui-validation.png`

**Alt:** Text shadow UI validation across light and dark backgrounds

## Preview Workflow

1. Edit website copy in this Markdown file when reviewing in Obsidian.
2. Ask Codex to sync the rewritten MD content into the matching YAML file.
3. Codex should preserve the current website structure unless a structure change is clearly marked.
4. After YAML changes, run `npm run build:content` from `portfolio/site`.
5. If HTML and Markdown are different, treat YAML as the website source of truth and use this file as the writing preview.
