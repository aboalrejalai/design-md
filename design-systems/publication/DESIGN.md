---
"version": "alpha"
"name": "Publication"
"description": "Bundled Open Design package for Publication, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#c1121f"
  "on-primary": "#ffffff"
  "canvas": "#ffffff"
  "surface": "#f6f6f6"
  "surface-warm": "#fff2f0"
  "ink": "#0b0b0b"
  "body": "#333333"
  "muted": "#666666"
  "meta": "#c1121f"
  "border": "#d6d6d6"
  "border-soft": "#ececec"
  "success": "#0f8a3b"
  "warning": "#d99a00"
  "danger": "#b00020"
typography:
  display:
    "fontFamily": "\"Franklin Gothic\", Arial, sans-serif"
    "lineHeight": "0.98"
    "letterSpacing": "-0.018em"
  body:
    "fontFamily": "Georgia, \"Times New Roman\", serif"
    "lineHeight": "1.58"
  mono:
    "fontFamily": "\"IBM Plex Mono\", ui-monospace, Menlo, monospace"
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
  "sm": "0px"
  "md": "0px"
  "lg": "0px"
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
  "section-y-desktop": "88px"
  "section-y-tablet": "64px"
  "section-y-phone": "44px"
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

# Design System Inspired by Publication

> Category: Creative & Artistic
> Print-inspired visual language for books, magazines, and reports with editorial grids and expressive typography.

## Overview

Print-inspired visual language for books, magazines, and reports with editorial grids and expressive typography.

- **Visual style:** modern, editorial
- **Color stance:** primary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#A855F7` — Token from style foundations.
- **Secondary:** `#0A1829` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#0A1829` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#A855F7) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#0A1829) for legibility.

## Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Nunito, display=Oswald, mono=JetBrains Mono
- **Weights:** 100, 200, 300, 400, 500, 600, 700, 800, 900
- Headings should carry the style personality; body text should optimize scanability and contrast.

## Layout

- **Spacing scale:** 4/8/12/16/24/32
- Keep vertical rhythm consistent across sections and components.
- Align columns and modules to a predictable grid; avoid ad-hoc offsets.

### Layout & Composition

- Prefer clear content blocks with consistent internal padding.
- Keep hierarchy obvious: headline → support text → primary action.
- Use whitespace to separate concerns before adding borders or shadows.

## Components

- Buttons: primary action uses `#A855F7`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#A855F7) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
