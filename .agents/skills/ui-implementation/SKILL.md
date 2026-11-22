---
name: ui-implementation
description: Implement polished accessible frontend components from requirements, screenshots, or approved design direction without breaking existing behavior.
---

Use after requirements or design direction are clear.

1. Identify the actual framework, router, styling system, component conventions, and existing primitives.
2. Reuse installed dependencies and local components. Do not assume Vite, React Router, shadcn/ui, or TypeScript when the project does not use them.
3. Build semantic HTML first; add ARIA only where native semantics do not suffice.
4. Keep data, state, side effects, and presentational components separated only when the existing codebase benefits from it.
5. Implement all meaningful states: loading, empty, error, disabled, hover, focus-visible, active, and responsive collapse.
6. Avoid placeholder `href="#"`, hardcoded secrets, inaccessible custom controls, unexplained absolute positioning, and arbitrary magic values.
7. Run the project’s checks and browser QA when available. Inspect console errors and keyboard/focus behavior.

Adapted principles from `google-labs-code/stitch-skills` under Apache-2.0. Stitch MCP is optional; local implementation does not require it.
