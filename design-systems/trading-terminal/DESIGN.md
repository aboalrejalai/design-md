---
"version": "alpha"
"name": "Trading Terminal Design System"
"description": "Bundled Open Design package for Trading Terminal Design System, derived from curated DESIGN.md, tokens.css, and components.html fixtures."
colors:
  "primary": "#38bdf8"
  "on-primary": "#03111a"
  "canvas": "#070b12"
  "surface": "#101826"
  "surface-warm": "#162238"
  "ink": "#f8fafc"
  "body": "#cbd5e1"
  "muted": "#8492a6"
  "meta": "#38bdf8"
  "border": "#263246"
  "border-soft": "#1c2638"
  "success": "#22c55e"
  "warning": "#f59e0b"
  "danger": "#ef4444"
typography:
  display:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.08"
    "letterSpacing": "-0.01em"
  body:
    "fontFamily": "Inter, system-ui, sans-serif"
    "lineHeight": "1.45"
  mono:
    "fontFamily": "\"Roboto Mono\", \"SF Mono\", ui-monospace, Menlo, monospace"
  xs:
    "fontSize": "11px"
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
  "sm": "4px"
  "md": "8px"
  "lg": "12px"
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
  "section-y-phone": "42px"
  "container-max": "1320px"
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

# Trading Terminal Design System

> Category: Themed & Unique
> Bloomberg-style financial trading terminal. Dark-only, data-dense, cyan/coral buy/sell signals. Everything readable at a glance from two meters away.

## Overview

A professional-grade financial data terminal. Dense, information-rich layouts designed for traders who need to monitor multiple markets simultaneously. Dark surfaces reduce eye strain during long sessions. Cyan accent (#00D4AA) signals positive/buy, coral (#FF4757) signals negative/sell. Everything readable at a glance from two meters away.

- **Visual style:** dense, data-first, professional
- **Color stance:** dark surfaces with high-contrast data colors
- **Design intent:** keep outputs recognizable to this style family while preserving usability and readability

### Prior Art

Bloomberg Terminal, Refinitiv Eikon, FactSet, TradingView Pro. All share: dark-only surfaces, monospace data fonts, tabular layouts with no decorative spacing, and color-coded buy/sell signals.

## Colors

### Surface Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0D0D0D` | Primary canvas |
| Surface | `#141414` | Elevated panels, cards |
| Surface Hover | `#1A1A1A` | Hover state for panels |
| Border | `#2A2A2A` | Panel separation |

### Data Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#00D4AA` | Positive values, buy signals, success |
| Gain | `#00D4AA` | Positive price movement |
| Loss | `#FF4757` | Negative price movement |
| Warning | `#FFB800` | Caution alerts, margin warnings |
| Neutral | `#808086` | Unchanged, secondary data |
| Text Primary | `#FFFFFF` | High-contrast primary text |
| Text Secondary | `#AAAAAA` | Labels, metadata |
| Text Tertiary | `#828282` | Timestamps, grid labels |

### Dark Mode

Default and only mode. Trading terminals operate in dim environments for focus.

```css
:root {
  --color-bg: #0D0D0D;
  --color-surface: #141414;
  --color-surface-hover: #1A1A1A;
  --color-border: #2A2A2A;
  --color-primary: #00D4AA;
  --color-gain: #00D4AA;
  --color-loss: #FF4757;
  --color-warning: #FFB800;
  --color-text: #FFFFFF;
  --color-text-secondary: #AAAAAA;
  --color-text-tertiary: #828282;
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px;
}
```

## Typography

| Role | Size | Weight | Line Height | Font |
|------|------|--------|-------------|------|
| Display | 28px | 600 | 1.0 | JetBrains Mono |
| Heading | 16px | 600 | 1.2 | Inter |
| Body | 14px | 400 | 1.3 | JetBrains Mono |
| Label | 12px | 500 | 1.0 | Inter, uppercase |
| Micro | 10px | 400 | 1.0 | JetBrains Mono |

**Font labels for catalog extraction:**

```
Display: "JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
Heading: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
Body: "JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
Label: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
Micro: "JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
Mono: "JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace
```

## Layout

Grid-based dense layout. Multiple data columns visible simultaneously. Panels share borders, not gaps. No rounded corners — sharp edges communicate precision. The layout is tabular: rows of data, columns of similar data.

## Elevation & Depth

Trading terminals use flat design with border-based separation — no shadows. Surface shifts (#141414 vs #0D0D0D) convey elevation. Thin borders (#2A2A2A) define panel boundaries without decorative elements.

## Components

### Order Book Row

```css
.order-book-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: var(--space-1) 0;
  border-bottom: 1px solid var(--color-border);
}
.order-book-size { color: var(--color-text-secondary); text-align: right; }
.order-book-bid  { color: var(--color-gain); text-align: right; }
.order-book-ask  { color: var(--color-loss); text-align: right; }
```

### Price Card

```css
.price-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.price-card-label {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
}
.price-card-value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.0;
}
.price-card-change {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
}
.price-card-change.positive { color: var(--color-gain); }
.price-card-change.negative { color: var(--color-loss); }
```

### Ticker Bar

Horizontal scrolling single-line ticker for market overview.

```css
.ticker-bar {
  display: flex;
  gap: var(--space-6);
  overflow-x: auto;
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--color-border);
}
```

## Do's and Don'ts

- Do not use color alone to signal buy/sell — always pair with a directional icon or label
- Do not animate data values decoratively — traders need instant, stable reads
- Do not use rounded corners — sharp precision aesthetic only
- Do not use light mode — trading terminals operate in dim environments
- Do not show more than 5 price points in a column — cognitive overload reduces decision speed
- Do not use gradients — flat fills only

## Responsive Behavior

Terminal layouts target desktop-first (1280px+). On narrower viewports, columns collapse from rightmost to leftmost, prioritizing price and change data. Below 768px, single-column stack with horizontal scroll for overflow data. No breakpoints alter the dark-only constraint.

## Agent Prompt Guide

When generating a trading terminal interface, prompt the model to:
- Use JetBrains Mono for all numeric data; Inter for labels and headings
- Always show gain/loss values in monospace with color coding (#00D4AA green, #FF4757 red)
- No rounded corners on any element
- Use 100ms transitions for price updates, 150ms for hover states
- Never use light mode or bright backgrounds
- Include a horizontal ticker bar with scrolling price updates
- All data changes retain old value briefly before swapping to prevent flash blindness
