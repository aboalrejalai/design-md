---
"version": "alpha"
"name": "OpenAI"
"description": "Bundled Open Design package for OpenAI, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#10a37f"
  "primary-hover": "#0a7a5e"
  "on-primary": "#ffffff"
  "canvas": "#ffffff"
  "surface": "#f5f5f5"
  "surface-warm": "#fafafa"
  "ink": "#0d0d0d"
  "body": "#1a1a1a"
  "muted": "#6e6e6e"
  "meta": "#9b9b9b"
  "border": "#e5e5e5"
  "border-soft": "#ededed"
  "success": "#10a37f"
  "warning": "#f5a623"
  "danger": "#ef4146"
typography:
  display:
    "fontFamily": "\"Signifier\", \"Source Serif Pro\", Georgia, ui-serif, serif"
    "lineHeight": "1.08"
    "letterSpacing": "-0.02em"
  body:
    "fontFamily": "\"Söhne\", \"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif"
    "lineHeight": "1.65"
  mono:
    "fontFamily": "\"Söhne Mono\", ui-monospace, \"JetBrains Mono\", Menlo, Consolas, monospace"
  xs:
    "fontSize": "12px"
  sm:
    "fontSize": "13px"
  base:
    "fontSize": "16px"
  lg:
    "fontSize": "18px"
  xl:
    "fontSize": "20px"
  2xl:
    "fontSize": "28px"
  3xl:
    "fontSize": "40px"
  4xl:
    "fontSize": "56px"
rounded:
  "sm": "12px"
  "md": "16px"
  "lg": "16px"
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
  "container-gutter-desktop": "48px"
  "container-gutter-tablet": "24px"
  "container-gutter-phone": "24px"
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
    "rounded": "{rounded.sm}"
    "typography": "{typography.body}"
    "padding": "{spacing.2}"
  cards:
    "backgroundColor": "{colors.canvas}"
    "rounded": "{rounded.md}"
    "padding": "{spacing.6}"
  badges:
    "backgroundColor": "{colors.surface}"
    "textColor": "{colors.muted}"
    "rounded": "{rounded.pill}"
    "typography": "{typography.xs}"
  typography:
    "textColor": "{colors.ink}"
    "typography": "{typography.display}"
  layout:
    "padding": "{spacing.4}"
  layout-container:
    "width": "{spacing.container-max}"
    "padding": "{spacing.container-gutter-desktop}"
---

# Design System Inspired by OpenAI

> Category: AI & LLM
> Calm, near-monochrome system anchored in deep teal-black with generous white space and editorial typography.

## Overview

OpenAI's product surface reads like a research lab dressed for the public — clinical, restrained, deliberately quiet. The page background is a true white (`#ffffff`) layered against a near-black ink (`#0d0d0d`) with a subtle teal undertone, so even the text feels slightly cooled rather than aggressively dark. The result is a chromatic neutrality that puts model output, code, and prose front and center, not the chrome around them.

The signature move is the use of **Söhne** (or its system stand-in `inter`) at restrained weights — 400 for body, 500 for nav and labels, 600 for emphasis — paired with **Signifier**, a contemporary serif used for editorial display. Where most AI brands lean futuristic, OpenAI's serif headlines give the product a quietly literary tone, as if every announcement is an essay.

The shape system is uniformly soft: 8px–12px radii, 9999px pills for tags and chips, no harsh corners anywhere. Section transitions are denoted by whitespace rather than dividers; when borders appear they are `#e5e5e5` hairlines that read as the absence of color rather than its presence.

**Key Characteristics:**
- True white canvas (`#ffffff`) with deep teal-black ink (`#0d0d0d`)
- Söhne / Inter at modest weights (400, 500, 600) — restraint over assertion
- Signifier serif for editorial display headlines
- Soft 8–12px radii everywhere; 9999px pills for chips
- Hairline borders (`#e5e5e5`) used sparingly; whitespace as primary divider
- Single-color illustrations in deep teal — no gradients in marks
- Generous line-height (1.55–1.65) and tracking near zero

## Colors

### Primary
- **Pure White** (`#ffffff`): Primary background, card surface, button background.
- **Ink Black** (`#0d0d0d`): Primary text, brand mark, primary CTA.
- **Soft Black** (`#1a1a1a`): Secondary heading, alternative ink for non-critical text.

### Surface & Background
- **Mist** (`#fafafa`): Section break background, footer surface.
- **Pearl** (`#f5f5f5`): Card surface, elevated panel.
- **Cloud** (`#ececec`): Disabled background, divider tint.

### Brand Accent
- **OpenAI Teal** (`#10a37f`): Brand primary, link, highlight badge — the lone color in an otherwise neutral system.
- **Teal Deep** (`#0a7a5e`): Hover and pressed state for the brand color.
- **Teal Soft** (`#e8f5f0`): Surface tint for success badges, highlight callouts.

### Neutrals & Text
- **Graphite** (`#3c3c3c`): Body text, default reading color.
- **Slate** (`#6e6e6e`): Secondary text, captions, metadata.
- **Ash** (`#9b9b9b`): Tertiary text, placeholder, disabled label.
- **Stone** (`#c4c4c4`): Decorative dividers, faint icons.

### Semantic & Border
- **Border Hairline** (`#e5e5e5`): Standard hairline separator.
- **Border Soft** (`#ededed`): Card outline on white surface.
- **Error** (`#ef4146`): Validation, destructive action.
- **Warning** (`#f5a623`): Soft amber for advisory states.
- **Info** (`#2563eb`): Informational link tone (used sparingly; teal still wins).

## Typography

### Font Family
- **Display / Editorial**: `Signifier`, with fallback: `'Source Serif Pro', Georgia, serif`
- **Body / UI**: `Söhne`, with fallback: `Inter, system-ui, -apple-system, 'Segoe UI', sans-serif`
- **Code / Mono**: `Söhne Mono`, with fallback: `ui-monospace, 'JetBrains Mono', Menlo, Consolas, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Signifier | 56px (3.5rem) | 400 | 1.08 | -0.02em | Editorial hero, announcement titles |
| H1 | Söhne | 40px (2.5rem) | 600 | 1.15 | -0.01em | Page heading |
| H2 | Söhne | 28px (1.75rem) | 600 | 1.2 | -0.005em | Section heading |
| H3 | Söhne | 20px (1.25rem) | 600 | 1.3 | normal | Sub-section |
| Body Large | Söhne | 18px (1.125rem) | 400 | 1.6 | normal | Lede paragraphs |
| Body | Söhne | 16px (1rem) | 400 | 1.65 | normal | Standard reading text |
| Body Small | Söhne | 14px (0.875rem) | 400 | 1.55 | normal | Card body, dense UI |
| Caption | Söhne | 13px (0.8125rem) | 500 | 1.4 | 0.01em | Metadata, badges |
| Label | Söhne | 12px (0.75rem) | 500 | 1.3 | 0.04em | Eyebrow, uppercase nav links |
| Code | Söhne Mono | 14px (0.875rem) | 400 | 1.55 | normal | Code blocks, terminal output |

### Principles
- **Restraint as identity**: weights cap at 600; 700+ feels off-brand. Hierarchy comes from size and color, not weight.
- **Serif for soul, sans for system**: Signifier appears only in editorial display moments. The product UI is sans-only.
- **Negative tracking on display**: -0.02em on display sizes; tracking returns to zero by 16px.

## Components

### Buttons

**Primary**
- Background: `#0d0d0d`
- Text: `#ffffff`
- Padding: 10px 18px
- Radius: 9999px (full pill) on chips, 12px on rectangular CTAs
- Hover: `#1a1a1a` background
- Use: Primary CTA, "Try ChatGPT", "Sign in"

**Secondary**
- Background: `#ffffff`
- Text: `#0d0d0d`
- Border: 1px solid `#e5e5e5`
- Padding: 10px 18px
- Radius: 12px
- Hover: background `#fafafa`, border `#d4d4d4`

**Brand Accent**
- Background: `#10a37f`
- Text: `#ffffff`
- Padding: 10px 18px
- Radius: 12px
- Hover: `#0a7a5e`
- Use: Highlighted upgrade CTA, success path

### Cards
- Background: `#ffffff`
- Border: 1px solid `#ededed`
- Radius: 16px
- Padding: 24px–32px
- Shadow: none by default; on hover `0 4px 16px rgba(13,13,13,0.06)`

### Inputs
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Radius: 12px
- Padding: 12px 14px
- Focus: border `#10a37f`, ring `0 0 0 3px rgba(16,163,127,0.12)`

### Pills & Tags
- Background: `#f5f5f5`
- Text: `#3c3c3c`
- Padding: 4px 10px
- Radius: 9999px
- Font: 12px / 500

## Spacing & Layout

- **Base unit**: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Container**: max-width 1200px, 24px gutter on mobile, 48px on desktop.
- **Section rhythm**: 96–128px vertical between major sections; 64px on mobile.
- **Grid**: 12-column desktop, 4-column mobile, 24px gap.

## Motion

- **Duration**: 150–220ms for hover; 280–360ms for layout transitions.
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth out) for entrances.
- **Restraint**: no parallax, no scroll-jacking. Subtle fade and translate only.

## Usage Guardrails

- Preserve the neutral editorial restraint, soft radius, and sparse accent usage together; green accents alone do not create an OpenAI-like surface.
- Use Signifier-style display moments only for editorial or announcement hierarchy, keeping product controls in the sans system.
- Avoid ornamental motion, heavy shadows, and oversized decorative cards; the system should feel calm, readable, and deliberate.
