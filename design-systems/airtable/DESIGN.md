---
"version": "alpha"
"name": "Airtable"
"description": "Bundled Open Design package for Airtable, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#1b61c9"
  "primary-hover": "#254fad"
  "on-primary": "#ffffff"
  "canvas": "#ffffff"
  "surface": "#ffffff"
  "surface-warm": "#ffffff"
  "ink": "#181d26"
  "body": "#333333"
  "muted": "rgba(4, 14, 32, 0.69)"
  "meta": "rgba(4, 14, 32, 0.69)"
  "border": "#e0e2e6"
  "border-soft": "#eef0f3"
  "success": "#006400"
  "warning": "#eab308"
  "danger": "#dc2626"
typography:
  display:
    "fontFamily": "\"Haas Groot Disp\", Haas, -apple-system, system-ui, \"Segoe UI\", Roboto, sans-serif"
    "lineHeight": "1.2"
  body:
    "fontFamily": "Haas, -apple-system, system-ui, \"Segoe UI\", Roboto, sans-serif"
    "lineHeight": "1.35"
  mono:
    "fontFamily": "ui-monospace, \"SF Mono\", \"JetBrains Mono\", Menlo, Monaco, Consolas, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "14px"
  base:
    "fontSize": "16px"
  lg:
    "fontSize": "20px"
  xl:
    "fontSize": "24px"
  2xl:
    "fontSize": "32px"
  3xl:
    "fontSize": "40px"
  4xl:
    "fontSize": "48px"
rounded:
  "sm": "12px"
  "md": "16px"
  "lg": "24px"
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
  "section-y-tablet": "64px"
  "section-y-phone": "48px"
  "container-max": "1200px"
  "container-gutter-desktop": "24px"
  "container-gutter-tablet": "16px"
  "container-gutter-phone": "12px"
components:
  buttons:
    "backgroundColor": "{colors.primary}"
    "textColor": "{colors.on-primary}"
    "rounded": "{rounded.sm}"
    "typography": "{typography.body}"
    "padding": "{spacing.2}"
  inputs:
    "backgroundColor": "{colors.primary}"
    "textColor": "{colors.ink}"
    "typography": "{typography.sm}"
  cards:
    "backgroundColor": "{colors.primary}"
    "typography": "{typography.sm}"
    "padding": "{spacing.2}"
  badges:
    "textColor": "{colors.ink}"
    "rounded": "{rounded.pill}"
    "typography": "{typography.xs}"
    "padding": "{spacing.2}"
  typography:
    "backgroundColor": "{colors.primary}"
    "textColor": "{colors.ink}"
    "typography": "{typography.display}"
  layout:
    "padding": "{spacing.3}"
  layout-container:
    "width": "{spacing.container-max}"
    "padding": "{spacing.container-gutter-desktop}"
---

# Design System Inspired by Airtable

> Category: Design & Creative
> Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic.

## Overview

Airtable's website is a clean, enterprise-friendly platform that communicates "sophisticated simplicity" through a white canvas with deep navy text (`#181d26`) and Airtable Blue (`#1b61c9`) as the primary interactive accent. The Haas font family (display + text variants) creates a Swiss-precision typography system with positive letter-spacing throughout.

**Key Characteristics:**
- White canvas with deep navy text (`#181d26`)
- Airtable Blue (`#1b61c9`) as primary CTA and link color
- Haas + Haas Groot Disp dual font system
- Positive letter-spacing on body text (0.08px–0.28px)
- 12px radius buttons, 16px–32px for cards
- Multi-layer blue-tinted shadow: `rgba(45,127,249,0.28) 0px 1px 3px`
- Semantic theme tokens: `--theme_*` CSS variable naming

## Colors

### Primary
- **Deep Navy** (`#181d26`): Primary text
- **Airtable Blue** (`#1b61c9`): CTA buttons, links
- **White** (`#ffffff`): Primary surface
- **Spotlight** (`rgba(249,252,255,0.97)`): `--theme_button-text-spotlight`

### Semantic
- **Success Green** (`#006400`): `--theme_success-text`
- **Weak Text** (`rgba(4,14,32,0.69)`): `--theme_text-weak`
- **Secondary Active** (`rgba(7,12,20,0.82)`): `--theme_button-text-secondary-active`

### Neutral
- **Dark Gray** (`#333333`): Secondary text
- **Mid Blue** (`#254fad`): Link/accent blue variant
- **Border** (`#e0e2e6`): Card borders
- **Light Surface** (`#f8fafc`): Subtle surface

### Shadows
- **Blue-tinted** (`rgba(0,0,0,0.32) 0px 0px 1px, rgba(0,0,0,0.08) 0px 0px 2px, rgba(45,127,249,0.28) 0px 1px 3px, rgba(0,0,0,0.06) 0px 0px 0px 0.5px inset`)
- **Soft** (`rgba(15,48,106,0.05) 0px 0px 20px`)

## Typography

### Font Families
- **Primary**: `Haas`, fallbacks: `-apple-system, system-ui, Segoe UI, Roboto`
- **Display**: `Haas Groot Disp`, fallback: `Haas`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Haas | 48px | 400 | 1.15 | normal |
| Display Bold | Haas Groot Disp | 48px | 900 | 1.50 | normal |
| Section Heading | Haas | 40px | 400 | 1.25 | normal |
| Sub-heading | Haas | 32px | 400–500 | 1.15–1.25 | normal |
| Card Title | Haas | 24px | 400 | 1.20–1.30 | 0.12px |
| Feature | Haas | 20px | 400 | 1.25–1.50 | 0.1px |
| Body | Haas | 18px | 400 | 1.35 | 0.18px |
| Body Medium | Haas | 16px | 500 | 1.30 | 0.08–0.16px |
| Button | Haas | 16px | 500 | 1.25–1.30 | 0.08px |
| Caption | Haas | 14px | 400–500 | 1.25–1.35 | 0.07–0.28px |

## Layout

- Spacing: 1–48px (8px base)
- Radius: 2px (small), 12px (buttons), 16px (cards), 24px (sections), 32px (large), 50% (circles)

## Elevation & Depth

- Blue-tinted multi-layer shadow system
- Soft ambient: `rgba(15,48,106,0.05) 0px 0px 20px`

## Components

### Buttons
- **Primary Blue**: `#1b61c9`, white text, 16px 24px padding, 12px radius
- **White**: white bg, `#181d26` text, 12px radius, 1px border white
- **Cookie Consent**: `#1b61c9` bg, 2px radius (sharp)

### Cards: `1px solid #e0e2e6`, 16px–24px radius
### Inputs: Standard Haas styling

## Do's and Don'ts

### Do: Use Airtable Blue for CTAs, Haas with positive tracking, 12px radius buttons
### Don't: Skip positive letter-spacing, use heavy shadows

## Responsive Behavior

Breakpoints: 425–1664px (23 breakpoints)

## Agent Prompt Guide

- Text: Deep Navy (`#181d26`)
- CTA: Airtable Blue (`#1b61c9`)
- Background: White (`#ffffff`)
- Border: `#e0e2e6`
