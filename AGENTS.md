# Shubham Kumar Portfolio

Before changing UI, styling, layout, content structure, animation, or responsive behavior, read:

- `docs/DESIGN_SYSTEM.md`
- `docs/PORTFOLIO_STRATEGY.md`
- `docs/CONTENT_RULES.md`

These documents are the repository source of truth.

Do not introduce a new color, font, spacing system, card style, animation language, or visual direction unless the user explicitly approves a design-system change.

The portfolio positions Shubham Kumar as a business-focused Brand & Marketing Visual Designer. Do not turn it into a developer portfolio, generic SaaS site, graphic-design thumbnail gallery, cyberpunk/neon portfolio, or student portfolio.

For UI work:

- Reuse existing tokens and components.
- Support both global light and dark themes for every new section and component.
- Source significant interface colors from approved theme tokens; do not add light-only hard-coded colors.
- Preserve the established typography hierarchy and spacing system.
- Use real professional imagery when available.
- Maintain accessibility, responsive behavior, and reduced-motion support.
- Avoid unnecessary dependencies.

After meaningful UI changes, run `npm run build`.

Never invent clients, metrics, awards, results, testimonials, job titles, or other professional claims.
