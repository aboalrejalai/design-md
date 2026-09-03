---
"version": "alpha"
"name": "Agentic"
"description": "Bundled Open Design package for Agentic, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#60a5fa"
  "on-primary": "#06111f"
  "canvas": "#0b1020"
  "surface": "#131b2f"
  "surface-warm": "#182343"
  "ink": "#f8fafc"
  "body": "#cbd5e1"
  "muted": "#8ea0b8"
  "meta": "#60a5fa"
  "border": "#293653"
  "border-soft": "#1e2a43"
  "success": "#22c55e"
  "warning": "#fbbf24"
  "danger": "#fb7185"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.06"
    "letterSpacing": "-0.02em"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.55"
  mono:
    "fontFamily": "\"JetBrains Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "13px"
  base:
    "fontSize": "15px"
  lg:
    "fontSize": "17px"
  xl:
    "fontSize": "22px"
  2xl:
    "fontSize": "32px"
  3xl:
    "fontSize": "48px"
  4xl:
    "fontSize": "66px"
rounded:
  "sm": "8px"
  "md": "12px"
  "lg": "20px"
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

# Design System Inspired by Agentic

> Category: Themed & Unique
> Conversational AI-first interface with minimal controls, clear outcomes, and delegated task flows for agentic workflows.

## Overview

Conversational AI-first interface with minimal controls, clear outcomes, and delegated task flows for agentic workflows.

- **Visual style:** modern, bold
- **Color stance:** surface/subtle layers
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#FF5701` — Token from style foundations.
- **Secondary:** `#F6F6F1` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#111827` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#FF5701) for CTA emphasis.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#111827) for legibility.

## Typography

- **Scale:** 14/16/18/24/32/40
- **Families:** primary=Playfair Display, display=Playfair Display, mono=JetBrains Mono
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

- Buttons: primary action uses `#FF5701`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#FF5701) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
