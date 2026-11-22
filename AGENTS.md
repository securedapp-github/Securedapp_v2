# SecureDApp agent workspace

Use the project skills in `.opencode/skills/` as the canonical, tool-neutral playbooks. OpenCode and Antigravity discover the same files. Load only the skill relevant to the current task; combine skills when needed.

All repository skills are available to every configured agent on demand. Do not preload unrelated skills: it wastes context and can create conflicting instructions. Configured project/global plugins are available to agents through their permitted tools; no project plugin is currently configured.

Automatic routing contract: `.opencode/contracts/auto-routing.md`. The orchestrator selects relevant skills and delegates matching specialist agents. Agents do not all run on every task; trivial work stays narrow. Edits require independent review; trust-boundary changes require security review; non-trivial completion requires the release gate.

## Operating contract

1. Inspect repository instructions, status, structure, dependencies, and the affected execution path before editing.
2. Prefer existing code, installed dependencies, platform features, and the smallest focused diff.
3. Separate discovery, plan, implementation, review, and validation. Ask before consequential external or destructive actions.
4. Preserve unrelated user changes. Never expose secrets from `.env*` files.
5. Validate with the strongest available checks. Report `PASS`, `FAIL`, `BLOCKED`, or `NOT RUN` honestly.
6. For non-trivial logic, leave one runnable regression check. Do not add test scaffolding without a behavior to verify.

## Project facts

- Next.js Pages Router application with JavaScript, TypeScript, React, Tailwind, and Redux Toolkit.
- `src/pages/` contains route entry points; shared UI and page components live under `src/`.
- Use the existing npm scripts and dependencies. Do not assume undocumented tools or routes.
- Browser validation uses Playwright when available; local application behavior remains the source of truth.

## Skill catalog

- `repo-orientation`: map the repository before work.
- `feature-implementation`: implement focused product changes.
- `debugging`: investigate failures from evidence to root cause.
- `testing`: choose and run the smallest meaningful checks.
- `code-review`: perform defect-first review before completion.
- `security`: handle secrets, input, auth, APIs, and dependencies safely.
- `browser-qa`: validate web flows, console errors, accessibility, and screenshots.
- `performance`: investigate runtime and frontend performance without premature optimization.
- `design-system`: define and preserve visual tokens, interaction states, responsive rules, and anti-generic UI quality.
- `ui-implementation`: turn approved UI direction into accessible, maintainable components using existing project conventions.
- `stitch-integration`: use Google Stitch only when Stitch MCP is explicitly configured and approved.
- `documentation`: update docs only when behavior or operations change.
- `git-review`: inspect scope, diff hygiene, and release safety.
- `seo`: optional route/metadata/structured-data checks for public pages.

## Completion report

End work with: changed files, behavior, checks and actual results, review findings/fixes, remaining risks, and deployment status.
