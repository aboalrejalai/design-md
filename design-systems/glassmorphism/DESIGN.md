---
"version": "alpha"
"name": "Glassmorphism"
"description": "Bundled Open Design package for Glassmorphism, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#4f8cff"
  "on-primary": "#ffffff"
  "canvas": "#eef6ff"
  "surface": "rgba(255, 255, 255, 0.74)"
  "surface-warm": "rgba(238, 246, 255, 0.72)"
  "ink": "#102033"
  "body": "#34465f"
  "muted": "#60708a"
  "meta": "#4f8cff"
  "border": "rgba(255, 255, 255, 0.64)"
  "border-soft": "rgba(255, 255, 255, 0.38)"
  "success": "#22c55e"
  "warning": "#f59e0b"
  "danger": "#ef4444"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.04"
    "letterSpacing": "-0.025em"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.55"
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
  "sm": "16px"
  "md": "24px"
  "lg": "36px"
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
  "section-y-desktop": "104px"
  "section-y-tablet": "72px"
  "section-y-phone": "52px"
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

# Design System Inspired by Glassmorphism

> Category: Morphism & Effects
> Frosted glass effect with translucent layers, subtle blur, and luminous borders for depth and modern elegance.

## Overview

Frosted glass effect with translucent layers, subtle blur, and luminous borders for depth and modern elegance.

- **Visual style:** clean, high-contrast, bold, enterprise, liquidglass effect, glassmorphism
- **Color stance:** primary, neutral, success, warning, danger, info, surface/subtle layers
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#1856FF` — Token from style foundations.
- **Secondary:** `#3A344E` — Token from style foundations.
- **Success:** `#07CA6B` — Token from style foundations.
- **Warning:** `#E89558` — Token from style foundations.
- **Danger:** `#EA2143` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#141414` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#1856FF) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#141414) for legibility.

## Typography

- **Scale:** mobile-first compact scale
- **Families:** primary=Plus Jakarta Sans, display=Plus Jakarta Sans, mono=JetBrains Mono
- **Weights:** 100, 200, 300, 400, 500, 600, 700, 800, 900
- Headings should carry the style personality; body text should optimize scanability and contrast.

## Layout

- **Spacing scale:** comfortable density mode
- Keep vertical rhythm consistent across sections and components.
- Align columns and modules to a predictable grid; avoid ad-hoc offsets.

### Layout & Composition

- Prefer clear content blocks with consistent internal padding.
- Keep hierarchy obvious: headline → support text → primary action.
- Use whitespace to separate concerns before adding borders or shadows.

## Components

- Buttons: primary action uses `#1856FF`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#1856FF) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
