---
"version": "alpha"
"name": "Application"
"description": "Bundled Open Design package for Application, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#2563eb"
  "on-primary": "#ffffff"
  "canvas": "#f6f7f9"
  "surface": "#ffffff"
  "surface-warm": "#eef4ff"
  "ink": "#172033"
  "body": "#3b4658"
  "muted": "#6b7689"
  "meta": "#2563eb"
  "border": "#d8dee8"
  "border-soft": "#edf1f6"
  "success": "#16a34a"
  "warning": "#f59e0b"
  "danger": "#dc2626"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.12"
    "letterSpacing": "-0.015em"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.5"
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
    "fontSize": "22px"
  2xl:
    "fontSize": "30px"
  3xl:
    "fontSize": "42px"
  4xl:
    "fontSize": "58px"
rounded:
  "sm": "8px"
  "md": "12px"
  "lg": "18px"
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

# Design System Inspired by Application

> Category: Professional & Corporate
> App dashboard with purple-themed aesthetic, top-bar navigation, card-based layouts, and developer-first workflows.

## Overview

App dashboard with purple-themed aesthetic, top-bar navigation, card-based layouts, and developer-first workflows.

- **Visual style:** modern, clean, high-contrast, glass-like panels, soft shadows, rounded components
- **Color stance:** primary (purple), neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#9333EA` — Token from style foundations.
- **Secondary:** `#A855F7` — Token from style foundations.
- **Success:** `#10B981` — Token from style foundations.
- **Warning:** `#F59E0B` — Token from style foundations.
- **Danger:** `#EF4444` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#09090B` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#9333EA) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#09090B) for legibility.

## Typography

- **Scale:** 12/14/16/20/24/32
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

- Buttons: primary action uses `#9333EA`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#9333EA) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
