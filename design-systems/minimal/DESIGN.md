---
"version": "alpha"
"name": "Minimal"
"description": "Bundled Open Design package for Minimal, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#111111"
  "on-primary": "#ffffff"
  "canvas": "#ffffff"
  "surface": "#fafafa"
  "surface-warm": "#f5f5f5"
  "ink": "#111111"
  "body": "#3a3a3a"
  "muted": "#777777"
  "meta": "#111111"
  "border": "#e2e2e2"
  "border-soft": "#eeeeee"
  "success": "#168a46"
  "warning": "#b7791f"
  "danger": "#c53030"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.08"
    "letterSpacing": "-0.02em"
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
    "fontSize": "22px"
  2xl:
    "fontSize": "32px"
  3xl:
    "fontSize": "48px"
  4xl:
    "fontSize": "64px"
rounded:
  "sm": "2px"
  "md": "4px"
  "lg": "8px"
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
  "section-y-desktop": "112px"
  "section-y-tablet": "80px"
  "section-y-phone": "56px"
  "container-max": "1120px"
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

# Design System Inspired by Minimal

> Category: Modern & Minimal
> Stripped-back design emphasizing whitespace, clean typography, and restrained color for maximum clarity and focus.

## Overview

Stripped-back design emphasizing whitespace, clean typography, and restrained color for maximum clarity and focus.

- **Visual style:** minimal, clean, bold
- **Color stance:** primary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#0C0C09` — Token from style foundations.
- **Secondary:** `#312C85` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#F4F4F1` — Token from style foundations.
- **Text:** `#0C0C09` — Token from style foundations.
- **Neutral:** `#F4F4F1` — Derived from the surface token for official format compatibility.

- Favor Primary (#0C0C09) for CTA emphasis.
- Use Surface (#F4F4F1) for large backgrounds and cards.
- Keep body copy on Text (#0C0C09) for legibility.

## Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Open Sans, display=Inter, mono=Inconsolata
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

- Buttons: primary action uses `#0C0C09`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#0C0C09) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
