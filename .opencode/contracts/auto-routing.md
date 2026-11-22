# Automatic routing policy

The orchestrator applies this policy before implementation:

| Task signal | Load skill(s) | Delegate agent(s) |
| --- | --- | --- |
| New repo, unclear behavior, multi-file change | `repo-orientation` | `explorer` |
| Non-trivial feature, refactor, config change | `feature-implementation` | `architect`, then `builder` |
| Bug, failed check, regression | `debugging`, `testing` | `explorer`, then `builder` if a fix is needed |
| Input, auth, API, secret, payment, browser/MCP boundary | `security` | `security-reviewer` |
| UI, route, accessibility, responsive behavior | `design-system`, `ui-implementation` | `frontend-designer`; `browser-qa` after implementation; use Playwright when available |
| Test selection or validation | `testing` | `tester` |
| Current diff or pre-completion review | `code-review`, `git-review` | `reviewer` |
| SEO, metadata, redirects, indexing | `seo` | `reviewer`; `browser-qa` for live page behavior |
| Performance or Core Web Vitals | `performance` | `tester`; `browser-qa` for browser evidence |
| Completion or release decision | `testing`, `git-review` | `release-gate` |

Rules:

1. Load only skills matching the task; do not preload the catalog.
2. Delegate independent read-only checks in parallel.
3. Never assign overlapping edits. `builder` owns implementation files.
4. Always run `reviewer` after edits. Add `security-reviewer` for trust-boundary changes.
5. Use `release-gate` before declaring completion when changes are non-trivial.
6. Skip delegation for a verified trivial one-file change; still run the proportionate check.
7. Report selected skills, agents, evidence, and skipped gates.
