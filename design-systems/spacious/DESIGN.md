---
"version": "alpha"
"name": "Spacious"
"description": "Bundled Open Design package for Spacious, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#8f5d24"
  "on-primary": "#ffffff"
  "canvas": "#faf3df"
  "surface": "#fffaf0"
  "surface-warm": "#efe0bd"
  "ink": "#211b12"
  "body": "#504737"
  "muted": "#7c7160"
  "meta": "#8f5d24"
  "border": "#ddd0b4"
  "border-soft": "#eee3cd"
  "success": "#5b8d42"
  "warning": "#c27b22"
  "danger": "#a64036"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1"
    "letterSpacing": "-0.025em"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.62"
  mono:
    "fontFamily": "\"SF Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "14px"
  base:
    "fontSize": "17px"
  lg:
    "fontSize": "20px"
  xl:
    "fontSize": "28px"
  2xl:
    "fontSize": "42px"
  3xl:
    "fontSize": "64px"
  4xl:
    "fontSize": "88px"
rounded:
  "sm": "10px"
  "md": "16px"
  "lg": "24px"
  "pill": "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "section-y-desktop": "112px"
  "section-y-tablet": "80px"
  "section-y-phone": "56px"
  "container-max": "1180px"
  "container-gutter-desktop": "36px"
  "container-gutter-tablet": "24px"
  "container-gutter-phone": "16px"
components:
  buttons:
    "backgroundColor": "{colors.primary}"
    "textColor": "{colors.on-primary}"
    "rounded": "{rounded.md}"
    "typography": "{typography.body}"
    "padding": "{spacing.5}"
  inputs:
    "backgroundColor": "{colors.surface}"
    "textColor": "{colors.ink}"
    "rounded": "{rounded.sm}"
    "padding": "{spacing.2}"
  cards:
    "backgroundColor": "{colors.surface}"
    "rounded": "{rounded.lg}"
  typography:
    "textColor": "{colors.body}"
    "typography": "{typography.lg}"
  layout-section:
    "padding": "{spacing.section-y-desktop}"
  layout-container:
    "padding": "{spacing.container-gutter-tablet}"
---

# Design System Inspired by Spacious

> Category: Layout & Structure
> Generous whitespace, consistent padding, and grid-based layouts for clean, readable, and breathing interfaces.

## Overview

Generous whitespace, consistent padding, and grid-based layouts for clean, readable, and breathing interfaces.

- **Visual style:** minimal, clean
- **Color stance:** primary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#3B82F6` — Token from style foundations.
- **Secondary:** `#8B5CF6` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#111827` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#3B82F6) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#111827) for legibility.

## Typography

- **Scale:** 12/14/16/18/24/30/36
- **Families:** primary=Open Sans, display=Montserrat, mono=IBM Plex Mono
- **Weights:** 100, 200, 300, 400, 500, 600, 700, 800, 900
- Headings should carry the style personality; body text should optimize scanability and contrast.

## Layout

- **Spacing scale:** 8pt baseline grid
- Keep vertical rhythm consistent across sections and components.
- Align columns and modules to a predictable grid; avoid ad-hoc offsets.

### Layout & Composition

- Prefer clear content blocks with consistent internal padding.
- Keep hierarchy obvious: headline → support text → primary action.
- Use whitespace to separate concerns before adding borders or shadows.

## Components

- Buttons: primary action uses `#3B82F6`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#3B82F6) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
