---
"version": "alpha"
"name": "Mono"
"description": "Bundled Open Design package for Mono, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#111111"
  "on-primary": "#ffffff"
  "canvas": "#ffffff"
  "surface": "#f7f7f7"
  "surface-warm": "#eeeeee"
  "ink": "#111111"
  "body": "#3a3a3a"
  "muted": "#707070"
  "meta": "#111111"
  "border": "#d9d9d9"
  "border-soft": "#eeeeee"
  "success": "#168a46"
  "warning": "#b7791f"
  "danger": "#c53030"
typography:
  display:
    "fontFamily": "\"IBM Plex Mono\", ui-monospace, monospace"
    "lineHeight": "1.06"
    "letterSpacing": "-0.025em"
  body:
    "fontFamily": "\"IBM Plex Mono\", ui-monospace, monospace"
    "lineHeight": "1.45"
  mono:
    "fontFamily": "\"IBM Plex Mono\", ui-monospace, monospace"
  xs:
    "fontSize": "11px"
  sm:
    "fontSize": "12px"
  base:
    "fontSize": "14px"
  lg:
    "fontSize": "16px"
  xl:
    "fontSize": "20px"
  2xl:
    "fontSize": "28px"
  3xl:
    "fontSize": "40px"
  4xl:
    "fontSize": "56px"
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
  "section-y-desktop": "80px"
  "section-y-tablet": "60px"
  "section-y-phone": "42px"
  "container-max": "1280px"
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

# Design System Inspired by Mono

> Category: Modern & Minimal
> Monospace-driven, matrix-inspired design with high-contrast elements, compact density, and a hacker-chic aesthetic.

## Overview

Monospace-driven, matrix-inspired design with high-contrast elements, compact density, and a hacker-chic aesthetic.

- **Visual style:** minimal, clean, high-contrast, playful, matrix
- **Color stance:** primary, secondary, success, warning, danger, info
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#37F712` — Token from style foundations.
- **Secondary:** `#00A6F4` — Token from style foundations.
- **Success:** `#00A63D` — Token from style foundations.
- **Warning:** `#FE9900` — Token from style foundations.
- **Danger:** `#FF2157` — Token from style foundations.
- **Surface:** `#E7E5E4` — Token from style foundations.
- **Text:** `#78716B` — Token from style foundations.
- **Neutral:** `#E7E5E4` — Derived from the surface token for official format compatibility.

- Favor Primary (#37F712) for CTA emphasis.
- Use Surface (#E7E5E4) for large backgrounds and cards.
- Keep body copy on Text (#78716B) for legibility.

## Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Space Mono, display=Space Mono, mono=JetBrains Mono
- **Weights:** 100, 200, 300, 400, 500, 600, 700, 800, 900
- Headings should carry the style personality; body text should optimize scanability and contrast.

## Layout

- **Spacing scale:** compact density mode
- Keep vertical rhythm consistent across sections and components.
- Align columns and modules to a predictable grid; avoid ad-hoc offsets.

### Layout & Composition

- Prefer clear content blocks with consistent internal padding.
- Keep hierarchy obvious: headline → support text → primary action.
- Use whitespace to separate concerns before adding borders or shadows.

## Components

- Buttons: primary action uses `#37F712`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#37F712) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
