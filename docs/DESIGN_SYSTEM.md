# SHUBHAM KUMAR

## PORTFOLIO DESIGN SYSTEM

**Version 1.2 — Permanent visual source of truth**

## Positioning

A premium editorial personal portfolio for a business-focused Brand & Marketing Visual Designer.

The visual character is premium, editorial, business-focused, sophisticated, modern, precise, technology-aware, minimal, and confident. It should feel like the combination of:

**Premium Design Studio + Business / Technology Consultancy + Editorial Case-Study Publication**

## Theme direction

The portfolio supports light and dark modes through one shared design system. Light mode is the default and remains the primary identity; a saved user preference may restore dark mode on later visits. Do not infer the initial theme from the operating-system preference.

The theme principle is **same brand system, different surfaces**. Typography, hierarchy, spacing, real project imagery, cobalt signals, components, and interaction language remain consistent across both modes. Dark mode must not become a separate visual style.

Intentional fixed dark regions may still be used selectively for case-study heroes, technology or product storytelling, visual transitions, immersive project presentations, and contact/footer areas. Do not alternate light and dark surfaces randomly.

Every new section and component must support both global themes. Significant interface colors must come from approved tokens; do not add light-only hard-coded colors.

## Color system

All interface colors must use repository tokens. Do not scatter hexadecimal values through component styles.

### Light mode — default

| Token | Value | Role |
| --- | --- | --- |
| `--color-bg` | `#FFFFFF` | Primary pure-white canvas |
| `--color-surface` | `#F7F8FA` | Quiet secondary surface |
| `--color-surface-clean` | `#FFFFFF` | Clean image-adjacent surface |
| `--color-text` | `#0B0D12` | Deep-charcoal primary text |
| `--color-text-muted` | `#667085` | Supporting text |
| `--color-text-soft` | `#98A2B3` | Low-emphasis metadata |
| `--color-border` | `#E5E7EB` | Standard subtle border |
| `--color-border-subtle` | `#E5E7EB` | Lowest-emphasis rule |
| `--color-border-strong` | `#D0D5DD` | Stronger light-theme border |
| `--color-accent` | `#1E5EFF` | Cobalt brand signal |
| `--color-accent-dark` | `#1747C7` | Darker cobalt interaction state |
| `--color-button-primary-bg` | `#0B0D12` | Primary button background |
| `--color-button-primary-text` | `#FFFFFF` | Primary button text |

### Dark mode — available

| Token | Value | Role |
| --- | --- | --- |
| `--color-bg` | `#0B0D12` | Deep-charcoal canvas |
| `--color-surface` | `#141820` | Quiet grouped surface |
| `--color-text` | `#F8FAFC` | Primary text |
| `--color-text-muted` | `#A7B0BA` | Supporting text |
| `--color-text-soft` | `#7F8995` | Low-emphasis metadata |
| `--color-border` | `#2A3038` | Standard subtle border |
| `--color-border-strong` | `#3A424C` | Stronger dark-theme border |
| `--color-accent` | `#4D7CFF` | Cobalt signal on dark surfaces |
| `--color-accent-dark` | `#7B9BFF` | Brighter cobalt interaction state |
| `--color-button-primary-bg` | `#F8FAFC` | Primary button background |
| `--color-button-primary-text` | `#0B0D12` | Primary button text |

### Accent rule

Cobalt blue is the brand signal in both themes, not a dominant fill. Use it for project numbers, tiny indicators, short rules, arrows, links, selected states, focus treatment, hover details, section indexes, and small brand signatures. Do not use large blue backgrounds or turn every heading blue. Use `--color-accent-dark` for restrained theme-appropriate interaction states when needed.

### Theme behavior

- The root element uses `data-theme="light"` or `data-theme="dark"`.
- The storage key is `shubham-portfolio-theme`, with `light` and `dark` as the only values.
- A saved preference wins; otherwise the site initializes in light mode.
- Theme changes may transition background, text, and border colors for approximately 200–300ms.
- Reduced-motion preferences minimize those transitions.
- Project artwork remains authentic in both modes: no inversion, desaturation, tint, or blanket overlay.

## Typography

- Primary family: **Geist**
- Metadata and technical microcopy: **Geist Mono**
- Do not introduce another family without explicit approval.

Self-hosted variable WOFF2 files live in `public/fonts/` and are registered in `src/styles/typography.css`.

| Role | Guidance |
| --- | --- |
| Display | Responsive `clamp()`, approximately 52–88px |
| Major section heading | Approximately 44–64px |
| Project title | Approximately 28–42px |
| Lead | 20px / approximately 30px |
| Body | 17–18px / approximately 28px |
| Supporting | 14–15px |
| Micro label | 11–12px, uppercase, `0.08em–0.12em` tracking |

Large headlines must serve hierarchy, not spectacle. Keep line lengths deliberate and body copy readable.

## Grid and container

- Desktop design target: 1440px
- Maximum content width: 1248px
- Desktop thinking: 12 columns
- Tablet thinking: 8 columns
- Mobile thinking: 4 columns

Use CSS Grid and Flexbox pragmatically. Do not build a grid framework.

## Spacing

Use an 8px foundation. Preferred values are 8, 16, 24, 32, 40, 48, 64, 80, 96, 120, and 160px.

The code tokens are `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-8`, `--space-10`, `--space-12`, `--space-15`, and `--space-20`; their suffixes represent multiples of the 8px base.

Major sections generally use 120–160px vertical spacing on desktop. Avoid arbitrary spacing unless the composition genuinely requires it.

## Corners and borders

- `--radius-sm`: 6px
- `--radius-md`: 10px
- `--radius-lg`: 16px
- Borders are generally 1px and subtle.
- Editorial imagery may use square corners.

Avoid rounded SaaS-card aesthetics, heavy outlines, and borders around every content fragment.

## Buttons

### Light theme

- Primary: deep-charcoal background, white text, small cobalt arrow/detail.
- Secondary: transparent, dark text, subtle border.

### Dark theme

- Primary: off-white background, dark text, small cobalt arrow/detail.
- Secondary: transparent, light text, subtle dark-theme border, small cobalt arrow/detail.

Hover is limited to small arrow movement and restrained background or border transitions.

## Project identity

Project indexing is a persistent identity device: `01`, `02`, `03`, `04`, `05`. Numbers may use the accent.

Use sparse technical/editorial metadata such as:

- `ENTERPRISE TECHNOLOGY / BRAND / MARKETING`
- `RFID / PRODUCT COMMUNICATION / INDUSTRIAL TECHNOLOGY`
- `ROBOTICS / AUTOMATION / PRODUCT MARKETING`

Micro-labels are uppercase, tracked, muted, and concise.

## Imagery

Real professional work supplies most of the site's color. Prefer large imagery, intentional editorial crops, high-resolution optimized exports, full-width project moments where useful, and detail views where they improve understanding.

Do not create fake project imagery or present full documents at unreadably small sizes.

## Cards

Do not cardify everything. Prefer typography, imagery, spacing, and grid. A card container is appropriate only when it creates meaningful grouping. Avoid repeated background + border + radius + shadow patterns.

## Icons

Use Lucide when icons are necessary, normally at 18–22px with thin or medium strokes. Do not use colorful icon sets or place every icon in a circle.

## Motion

Use restrained transitions at approximately 180ms, 300ms, or 500ms with `cubic-bezier(.2,.8,.2,1)`.

Allowed motion includes subtle reveal, image transition, arrow movement, border transition, and very slight scale. Avoid scroll hijacking, cursor gimmicks, constant floating motion, excessive parallax, and large 3D effects. Always respect `prefers-reduced-motion`.

## Brand signature

The identity comes from large editorial typography, white or deep-charcoal surfaces, high-contrast type, real business and project imagery, technical micro-labels, numbered project indexing, restrained cobalt signals, disciplined grids, and occasional immersive fixed dark sections.

Do not reduce the identity to a generic corporate or SaaS-style “white + blue” treatment. Real project imagery, editorial hierarchy, and disciplined restraint must carry the work.
