---
"version": "alpha"
"name": "Pacman"
"description": "Bundled Open Design package for Pacman, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#ffcc00"
  "on-primary": "#050505"
  "canvas": "#050505"
  "surface": "#101014"
  "surface-warm": "#1f1b08"
  "ink": "#fff7d6"
  "body": "#f6e79c"
  "muted": "#b9a85d"
  "meta": "#ffcc00"
  "border": "#2338ff"
  "border-soft": "#17218a"
  "success": "#00ff66"
  "warning": "#ff9900"
  "danger": "#ff3b3b"
typography:
  display:
    "fontFamily": "\"Press Start 2P\", \"Arial Black\", system-ui, sans-serif"
    "lineHeight": "1.08"
  body:
    "fontFamily": "\"Inter\", system-ui, sans-serif"
    "lineHeight": "1.6"
  mono:
    "fontFamily": "\"Press Start 2P\", ui-monospace, monospace"
  xs:
    "fontSize": "10px"
  sm:
    "fontSize": "12px"
  base:
    "fontSize": "14px"
  lg:
    "fontSize": "16px"
  xl:
    "fontSize": "20px"
  2xl:
    "fontSize": "30px"
  3xl:
    "fontSize": "44px"
  4xl:
    "fontSize": "64px"
rounded:
  "sm": "10px"
  "md": "18px"
  "lg": "9999px"
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
  "section-y-desktop": "84px"
  "section-y-tablet": "60px"
  "section-y-phone": "44px"
  "container-max": "1080px"
  "container-gutter-desktop": "32px"
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
    "textColor": "{colors.muted}"
    "rounded": "{rounded.lg}"
    "typography": "{typography.sm}"
    "padding": "{spacing.3}"
  typography:
    "textColor": "{colors.body}"
    "typography": "{typography.lg}"
  layout-section:
    "padding": "{spacing.section-y-desktop}"
  layout-container:
    "padding": "{spacing.container-gutter-tablet}"
---

# Design System Inspired by Pacman

> Category: Themed & Unique
> Retro arcade-inspired design with pixel fonts, dotted borders, playful high-contrast colors, and 8-bit game aesthetics.

## Overview

Retro arcade-inspired design with pixel fonts, dotted borders, playful high-contrast colors, and 8-bit game aesthetics.

- **Visual style:** high-contrast, playful, dotted borders
- **Color stance:** primary, secondary, success, warning, danger, info, surface/subtle layers
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#2A3FE5` — Token from style foundations.
- **Secondary:** `#F4B9B0` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#000000` — Token from style foundations.
- **Text:** `#111827` — Token from style foundations.
- **Neutral:** `#000000` — Derived from the surface token for official format compatibility.

- Favor Primary (#2A3FE5) for CTA emphasis.
- Use Surface (#000000) for large backgrounds and cards.
- Keep body copy on Text (#111827) for legibility.

## Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Press Start 2P, display=Press Start 2P, mono=Space Mono
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

- Buttons: primary action uses `#2A3FE5`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#2A3FE5) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
