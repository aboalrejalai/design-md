---
"version": "alpha"
"name": "Dashboard"
"description": "Bundled Open Design package for Dashboard, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#0ea5e9"
  "on-primary": "#04131d"
  "canvas": "#f4f7fb"
  "surface": "#ffffff"
  "surface-warm": "#eef6ff"
  "ink": "#111827"
  "body": "#334155"
  "muted": "#64748b"
  "meta": "#0ea5e9"
  "border": "#d8e2ee"
  "border-soft": "#edf3f8"
  "success": "#10b981"
  "warning": "#f59e0b"
  "danger": "#ef4444"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.1"
    "letterSpacing": "-0.015em"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.48"
  mono:
    "fontFamily": "\"IBM Plex Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "11px"
  sm:
    "fontSize": "13px"
  base:
    "fontSize": "15px"
  lg:
    "fontSize": "17px"
  xl:
    "fontSize": "22px"
  2xl:
    "fontSize": "30px"
  3xl:
    "fontSize": "42px"
  4xl:
    "fontSize": "56px"
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
  "section-y-desktop": "84px"
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

# Design System Inspired by Dashboard

> Category: Professional & Corporate
> Dark-themed cloud-platform aesthetic with modular grids, glass-like panels, and strong data hierarchy for productivity dashboards.

## Overview

Dark-themed cloud-platform aesthetic with modular grids, glass-like panels, and strong data hierarchy for productivity dashboards.

- **Visual style:** modern, clean, cloud-platform aesthetic (Heroku/Vercel/GitHub inspired), dark theme, subtle gradients, soft shadows, glass-like panels, rounded components
- **Color stance:** primary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#0C5CAB` — Token from style foundations.
- **Secondary:** `#0A4A8A` — Token from style foundations.
- **Success:** `#10B981` — Token from style foundations.
- **Warning:** `#F59E0B` — Token from style foundations.
- **Danger:** `#EF4444` — Token from style foundations.
- **Surface:** `#09090B` — Token from style foundations.
- **Text:** `#FAFAFA` — Token from style foundations.
- **Neutral:** `#09090B` — Derived from the surface token for official format compatibility.

- Favor Primary (#0C5CAB) for CTA emphasis.
- Use Surface (#09090B) for large backgrounds and cards.
- Keep body copy on Text (#FAFAFA) for legibility.

## Typography

- **Scale:** 12/14/16/20/24/32
- **Families:** primary=IBM Plex Sans, display=IBM Plex Sans, mono=IBM Plex Sans
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

- Buttons: primary action uses `#0C5CAB`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#0C5CAB) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
