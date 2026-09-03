---
"version": "alpha"
"name": "Editorial"
"description": "Bundled Open Design package for Editorial, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#9a5a2f"
  "on-primary": "#ffffff"
  "canvas": "#fbf7f0"
  "surface": "#fffdf8"
  "surface-warm": "#f1e6d6"
  "ink": "#1f1a16"
  "body": "#4b4038"
  "muted": "#7d7168"
  "meta": "#9a5a2f"
  "border": "#ded3c5"
  "border-soft": "#eee5da"
  "success": "#4f8a4f"
  "warning": "#c9822f"
  "danger": "#b33a3a"
typography:
  display:
    "fontFamily": "Georgia, \"Times New Roman\", serif"
    "lineHeight": "1"
    "letterSpacing": "-0.02em"
  body:
    "fontFamily": "\"Source Serif Pro\", Georgia, serif"
    "lineHeight": "1.65"
  mono:
    "fontFamily": "\"IBM Plex Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "14px"
  base:
    "fontSize": "18px"
  lg:
    "fontSize": "21px"
  xl:
    "fontSize": "30px"
  2xl:
    "fontSize": "44px"
  3xl:
    "fontSize": "66px"
  4xl:
    "fontSize": "92px"
rounded:
  "sm": "4px"
  "md": "8px"
  "lg": "12px"
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
  "container-max": "1120px"
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

# Design System Inspired by Editorial

> Category: Creative & Artistic
> Magazine-inspired editorial layout with refined serif typography, structured grids, and elegant reading experiences.

## Overview

Magazine-inspired editorial layout with refined serif typography, structured grids, and elegant reading experiences.

- **Visual style:** modern, editorial
- **Color stance:** primary, secondary, neutral, success
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#111111` — Token from style foundations.
- **Secondary:** `#F1F1F1` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#111827` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#111111) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#111827) for legibility.

## Typography

- **Scale:** 14/16/18/24/32/40
- **Families:** primary=Gelasio, display=Gelasio, mono=Ubuntu Mono
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

- Buttons: primary action uses `#111111`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#111111) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
