---
"version": "alpha"
"name": "Luxury"
"description": "Bundled Open Design package for Luxury, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#c6a15b"
  "on-primary": "#080706"
  "canvas": "#080706"
  "surface": "#151310"
  "surface-warm": "#241e14"
  "ink": "#fff8ea"
  "body": "#d8cdb7"
  "muted": "#9f927c"
  "meta": "#c6a15b"
  "border": "#3a3020"
  "border-soft": "#282217"
  "success": "#5fa36a"
  "warning": "#d8a94f"
  "danger": "#d85a52"
typography:
  display:
    "fontFamily": "\"Didot\", \"Bodoni 72\", Georgia, serif"
    "lineHeight": "0.98"
    "letterSpacing": "-0.015em"
  body:
    "fontFamily": "\"Avenir Next\", Inter, sans-serif"
    "lineHeight": "1.6"
  mono:
    "fontFamily": "\"SF Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "14px"
  base:
    "fontSize": "16px"
  lg:
    "fontSize": "19px"
  xl:
    "fontSize": "28px"
  2xl:
    "fontSize": "44px"
  3xl:
    "fontSize": "68px"
  4xl:
    "fontSize": "96px"
rounded:
  "sm": "8px"
  "md": "14px"
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
  "section-y-desktop": "120px"
  "section-y-tablet": "84px"
  "section-y-phone": "60px"
  "container-max": "1160px"
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

# Design System Inspired by Luxury

> Category: Professional & Corporate
> High-end dark aesthetic with bold headings, monochromatic palette, and premium feel for luxury brand experiences.

## Overview

High-end dark aesthetic with bold headings, monochromatic palette, and premium feel for luxury brand experiences.

- **Visual style:** modern, bold, big headings
- **Color stance:** primary
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#FAFAFA` — Token from style foundations.
- **Secondary:** `#FAFAFA` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#000000` — Token from style foundations.
- **Text:** `#FFFFFF` — Token from style foundations.
- **Neutral:** `#000000` — Derived from the surface token for official format compatibility.

- Favor Primary (#FAFAFA) for CTA emphasis.
- Use Surface (#000000) for large backgrounds and cards.
- Keep body copy on Text (#FFFFFF) for legibility.

## Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Oswald, display=Oswald, mono=JetBrains Mono
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

- Buttons: primary action uses `#FAFAFA`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#FAFAFA) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
