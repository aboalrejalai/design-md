---
"version": "alpha"
"name": "Material"
"description": "Bundled Open Design package for Material, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#1a73e8"
  "on-primary": "#ffffff"
  "canvas": "#f8fafd"
  "surface": "#ffffff"
  "surface-warm": "#e8f0fe"
  "ink": "#202124"
  "body": "#3c4043"
  "muted": "#5f6368"
  "meta": "#1a73e8"
  "border": "#dadce0"
  "border-soft": "#edf0f2"
  "success": "#188038"
  "warning": "#f9ab00"
  "danger": "#d93025"
typography:
  display:
    "fontFamily": "\"Google Sans\", Roboto, Arial, sans-serif"
    "lineHeight": "1.12"
  body:
    "fontFamily": "Roboto, Arial, sans-serif"
    "lineHeight": "1.5"
  mono:
    "fontFamily": "\"Roboto Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "14px"
  base:
    "fontSize": "16px"
  lg:
    "fontSize": "18px"
  xl:
    "fontSize": "24px"
  2xl:
    "fontSize": "32px"
  3xl:
    "fontSize": "48px"
  4xl:
    "fontSize": "64px"
rounded:
  "sm": "4px"
  "md": "12px"
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
  "section-y-desktop": "96px"
  "section-y-tablet": "68px"
  "section-y-phone": "48px"
  "container-max": "1200px"
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

# Design System Inspired by Material

> Category: Professional & Corporate
> Google's Material Design with layered surfaces, dynamic theming, built-in motion, and responsive cross-platform patterns.

## Overview

Google's Material Design with layered surfaces, dynamic theming, built-in motion, and responsive cross-platform patterns.

- **Visual style:** modern, minimal, clean
- **Color stance:** primary, secondary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#6442D6` — Token from style foundations.
- **Secondary:** `#C8B3FD` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#111827` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#6442D6) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#111827) for legibility.

## Typography

- **Scale:** 12/14/16/20/24/32
- **Families:** primary=Inter, display=Roboto, mono=Fira Code
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

- Buttons: primary action uses `#6442D6`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#6442D6) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
