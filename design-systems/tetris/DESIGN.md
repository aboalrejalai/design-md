---
"version": "alpha"
"name": "Tetris"
"description": "Bundled Open Design package for Tetris, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#00f0f0"
  "on-primary": "#061018"
  "canvas": "#050816"
  "surface": "#10162a"
  "surface-warm": "#17203a"
  "ink": "#f8fafc"
  "body": "#cbd5e1"
  "muted": "#94a3b8"
  "meta": "#00f0f0"
  "border": "#26324f"
  "border-soft": "#1c2740"
  "success": "#00f000"
  "warning": "#f0f000"
  "danger": "#f00000"
typography:
  display:
    "fontFamily": "\"Press Start 2P\", \"Arial Black\", system-ui, sans-serif"
    "lineHeight": "1.1"
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
    "fontSize": "28px"
  3xl:
    "fontSize": "40px"
  4xl:
    "fontSize": "56px"
rounded:
  "sm": "0px"
  "md": "0px"
  "lg": "4px"
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
  "section-y-phone": "44px"
  "container-max": "1100px"
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

# Design System Inspired by Tetris

> Category: Themed & Unique
> Classic block-game inspired design with playful colors, bold display fonts, and compact, high-energy layouts.

## Overview

Classic block-game inspired design with playful colors, bold display fonts, and compact, high-energy layouts.

- **Visual style:** high-contrast, playful, premium
- **Color stance:** primary, secondary, success, warning, danger, info
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## Colors

- **Primary:** `#1C202B` — Token from style foundations.
- **Secondary:** `#7107E7` — Token from style foundations.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#DFE7FF` — Token from style foundations.
- **Text:** `#1C398E` — Token from style foundations.
- **Neutral:** `#DFE7FF` — Derived from the surface token for official format compatibility.

- Favor Primary (#1C202B) for CTA emphasis.
- Use Surface (#DFE7FF) for large backgrounds and cards.
- Keep body copy on Text (#1C398E) for legibility.

## Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Bangers, display=Bangers, mono=JetBrains Mono
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

- Buttons: primary action uses `#1C202B`; secondary actions stay neutral.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## Do's and Don'ts

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.

## Motion & Interaction

- Use subtle transitions that emphasize Primary (#1C202B) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.
