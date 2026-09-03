---
"version": "alpha"
"name": "Totality Festival"
"description": "Bundled Open Design package for Totality Festival, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#c084fc"
  "on-primary": "#13051f"
  "canvas": "#070711"
  "surface": "#111126"
  "surface-warm": "#1e1540"
  "ink": "#f8f7ff"
  "body": "#d6ccff"
  "muted": "#9d8ad4"
  "meta": "#c084fc"
  "border": "#34265e"
  "border-soft": "#241c42"
  "success": "#39ff88"
  "warning": "#fff34d"
  "danger": "#ff4d8d"
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
  "sm": "10px"
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

# Design System Inspired by Totality Festival

> Category: Themed & Unique
> Surface: web
> A cosmic-premium, glassmorphic dark system that captures the visceral awe of a solar eclipse — obsidian surfaces, amber "corona" highlights, and cyan atmospheric accents.

## Overview

"Cosmic Premium" — the visceral tension and awe of a solar eclipse. The aesthetic blends the stark mystery of deep space with the explosive brilliance of the solar corona. Surfaces appear as translucent obsidian slabs floating over nebula-like gradients. High-energy amber accents represent the "diamond ring" flash — they make the interface feel luminous and alive rather than heavy or muted.

- **Visual style:** dark, glassmorphic, cinematic
- **Color stance:** obsidian neutral, amber corona accent, cyan atmospheric
- **Design intent:** Keep outputs recognizable as a premium festival / creator product; use radial gradients for backgrounds to simulate the circular nature of the eclipse.

## Colors

- **Primary:** `#fff6df` — Amber / white-gold, the solar corona and "diamond ring" flash. Used for critical CTAs and high-importance highlights.
- **Primary Container:** `#ffd700` — Pure corona gold. Reserved for the single most important highlight on a screen.
- **Secondary:** `#bdf4ff` — Soft cyan, the atmospheric thinning and ethereal glow of the sky during totality. Used for interactive states and secondary emphasis.
- **Secondary Container:** `#00e3fd` — Vivid cyan for interactive ambient glow rims.
- **Tertiary:** `#fcf3ff` — Faint lavender-white for subtle tinted highlights.
- **Tertiary Container:** `#e7d1ff` — Deep indigo haze, celestial badges.
- **Surface:** `#121318` — Obsidian / near-black foundation.
- **Surface Container:** `#1e1f25` — Slightly elevated obsidian for cards.
- **Surface Container High:** `#292a2f` — Elevated panels, active states.
- **Text:** `#e3e1e9` — Warm off-white for primary body copy and headlines.
- **Text Muted:** `#d0c6ab` — Warm parchment tone for metadata and labels.
- **Outline:** `#999077` — Low-contrast warm gray for hairline borders.

- Favor Primary (#fff6df) and Primary Container (#ffd700) for the "corona flash" moments — max 3 per screen.
- Use Secondary (#bdf4ff / #00e3fd) for interactive states, never for decorative flourishes.
- Surfaces stack as semi-transparent glass: `rgba(255, 255, 255, 0.05-0.1)` with `backdrop-filter: blur(20px)` and a 1px `rgba(255, 255, 255, 0.1)` inner border to simulate light refraction.

## Typography

A dual-font strategy to balance cinematic impact with utility.

- **Display / Headings:** Space Grotesk — geometric, technical, futuristic-astronomical tone. Tight letter spacing (`-0.02em` to `-0.04em`) on large headings to feel "locked" and monumental.
- **Body / Long-form:** Inter — neutral, highly legible in low-light environments.
- **Labels:** Space Grotesk with wide tracking (`0.1em`) and uppercase, to read as "coordinates" or "readouts" rather than UI chrome.

Apply a subtle text-shadow or low-opacity primary-colored glow to `headline-xl` elements on the darkest backgrounds for a truly cinematic feel — radiant, not static.

## Layout

- **Grid:** 12-column fixed grid on desktop with generous outer margins (64–80px) to simulate the isolation of a celestial body in the void. Fluid model on mobile with 16px margins.
- **Rhythm:** 8px base unit. Internal component spacing tight (8 / 16px); external section margins wide (64 / 80px) to create distinct "islands" of content.
- **Max width:** 1280px for content containers.
- **Negative space is a feature, not a cost.** Prefer breathing room over density.

## Elevation & Depth

Depth is achieved through **glassmorphism** and light-based layering — not traditional drop shadows.

- **Level 1 (Base):** Deep obsidian surface with an optional radial gradient vignette in `#1a1b21` → `#121318`.
- **Level 2 (Panels):** Semi-transparent surfaces at `rgba(52, 52, 58, 0.2)` with `backdrop-filter: blur(20px)` and a 1px inner stroke at `rgba(255, 255, 255, 0.1)` to simulate refraction on a glass edge.
- **Level 3 (Interactive / Active):** An **ambient glow** — a soft, diffused shadow tinted with Secondary (`#00e3fd`) or Primary Container (`#ffd700`), creating the impression of light bleeding from behind the object.

## Shapes

Shape language is **soft-technical**. Geometric overall, but small corner radii soften aggression.

- **Buttons, inputs:** `rounded-lg` (8px).
- **Cards, featured containers:** `rounded-xl` (12px).
- **Badges, pills:** `rounded-full`.
- **Decorative elements:** circles and perfect arcs are encouraged to mirror the orbital / eclipse theme.

## Components

- **Primary button:** Amber fill on obsidian, with a luminous amber glow on hover (mimics the diamond-ring flash). Space Grotesk label, uppercase, `0.1em` tracking.
- **Secondary button:** Transparent fill, cyan outline and label — suggests the sky's transition during totality.
- **Glass card (level 2):** `rgba(52,52,58,0.2)` + 20px blur + 1px inner white stroke + generous internal padding.
- **Input field:** Anchored in the deepest surface (`#0d0e13`) for maximum contrast; cyan border on focus.
- **Badges:** Pill-shaped with the tertiary container color; reserved for "celestial" metadata (status, live indicators).

## Do's and Don'ts

- **Do** use Primary Container (`#ffd700`) no more than 3 times per screen — it's the flash, not the background.
- **Do** pair large Space Grotesk headlines with a subtle primary-colored glow on dark surfaces.
- **Do** tint shadows and glows with Primary or Secondary — never use pure gray shadows.
- **Don't** use solid opaque fills for cards — break the glass illusion.
- **Don't** combine amber and cyan glows on the same element — choose one depending on state (amber = highlight / CTA; cyan = interactive / focus).
- **Don't** use sharp 0-radius corners except for data tables where structure outweighs warmth.
