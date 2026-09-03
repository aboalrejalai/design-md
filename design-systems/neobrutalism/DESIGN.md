---
"version": "alpha"
"name": "Neobrutalism"
"description": "Bundled Open Design package for Neobrutalism, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#d24b1f"
  "on-primary": "#ffffff"
  "canvas": "#fff4cf"
  "surface": "#fffaf0"
  "surface-warm": "#ffdca8"
  "ink": "#2a1810"
  "body": "#593625"
  "muted": "#8a6652"
  "meta": "#d24b1f"
  "border": "#d9aa7a"
  "border-soft": "#efd0ab"
  "success": "#3d8f4f"
  "warning": "#f2a93b"
  "danger": "#b83a2f"
typography:
  display:
    "fontFamily": "Arial Black, Impact, sans-serif"
    "lineHeight": "1.06"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.52"
  mono:
    "fontFamily": "\"SF Mono\", ui-monospace, Menlo, monospace"
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
    "fontSize": "36px"
  3xl:
    "fontSize": "54px"
  4xl:
    "fontSize": "76px"
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
  "section-y-desktop": "96px"
  "section-y-tablet": "68px"
  "section-y-phone": "48px"
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

# Design System Inspired by Neobrutalism

> Category: Bold & Expressive
> Modern take on brutalism with bold borders, vivid accent colors, and raw, high-contrast layouts on warm surfaces.

## Overview

Modern take on brutalism with bold borders, vivid accent colors, and raw, high-contrast layouts on warm surfaces.

- **Visual style:** modern, clean, high-contrast
- **Color stance:** primary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#FDC800` — Token from style foundations.
- **Secondary:** `#432DD7` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FBFBF9` — Token from style foundations.
- **Text:** `#1C293C` — Token from style foundations.
- **Neutral:** `#FBFBF9` — Derived from the surface token for official format compatibility.

- Favor Primary (#FDC800) for CTA emphasis.
- Use Surface (#FBFBF9) for large backgrounds and cards.
- Keep body copy on Text (#1C293C) for legibility.

## Typography

- **Scale:** 13/15/17/21/27/35
- **Families:** primary=Inter, display=Inter, mono=JetBrains Mono
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

- Buttons: primary action uses `#FDC800`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#FDC800) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
