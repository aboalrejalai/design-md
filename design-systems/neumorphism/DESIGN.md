---
"version": "alpha"
"name": "Neumorphism"
"description": "Bundled Open Design package for Neumorphism, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#b46a46"
  "on-primary": "#ffffff"
  "canvas": "#f7eee6"
  "surface": "#fff8f1"
  "surface-warm": "#ead6c7"
  "ink": "#2b211c"
  "body": "#5a4b43"
  "muted": "#8a7a70"
  "meta": "#b46a46"
  "border": "#dac8b9"
  "border-soft": "#eaded4"
  "success": "#4d8f5a"
  "warning": "#c88735"
  "danger": "#b84c4c"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.06"
    "letterSpacing": "-0.025em"
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
  "sm": "14px"
  "md": "22px"
  "lg": "34px"
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

# Design System Inspired by Neumorphism

> Category: Morphism & Effects
> Soft, extruded UI elements with inner and outer shadows on monochromatic surfaces for a tactile, embedded look.

## Overview

Soft, extruded UI elements with inner and outer shadows on monochromatic surfaces for a tactile, embedded look.

- **Visual style:** minimal, clean, high-contrast, playful, matrix
- **Color stance:** primary, secondary, success, warning, danger, info
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#006666` — Token from style foundations.
- **Secondary:** `#F1F2F5` — Token from style foundations.
- **Success:** `#00A63D` — Token from style foundations.
- **Warning:** `#FE9900` — Token from style foundations.
- **Danger:** `#FF2157` — Token from style foundations.
- **Surface:** `#E7E5E4` — Token from style foundations.
- **Text:** `#1E2938` — Token from style foundations.
- **Neutral:** `#E7E5E4` — Derived from the surface token for official format compatibility.

- Favor Primary (#006666) for CTA emphasis.
- Use Surface (#E7E5E4) for large backgrounds and cards.
- Keep body copy on Text (#1E2938) for legibility.

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

- Buttons: primary action uses `#006666`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#006666) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
