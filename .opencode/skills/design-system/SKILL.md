---
name: design-system
description: Create or audit a product design system with deliberate typography, color, layout, interaction, responsive, accessibility, and motion rules.
---

Use for UI redesigns, new product surfaces, design-token work, and visual consistency reviews.

1. Inspect the existing UI, assets, CSS/Tailwind configuration, fonts, and interaction patterns before proposing changes.
2. Define a small token set: surface, text, border, accent, typography scale, spacing, radius, elevation, and motion.
3. Prefer one coherent visual language over unrelated per-component styling. Avoid default AI patterns, gratuitous gradients, neon glows, filler copy, and card-heavy layouts.
4. Specify responsive behavior, minimum 44px targets, focus/error/loading/empty states, contrast, reduced motion, and keyboard behavior.
5. Keep the design system proportional to the product. Do not introduce a new UI library for a handful of components.
6. Validate the rendered result at mobile and desktop widths; compare against existing brand and product requirements.

Adapted principles from `google-labs-code/stitch-skills` under Apache-2.0. This skill does not require Stitch or an MCP server.
