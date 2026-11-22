---
name: Repository orientation
description: Map an unfamiliar repository, identify conventions and execution paths, and produce evidence before implementation.
---

Use before any multi-file change or when repository behavior is unclear.

1. Read project instructions, `package.json`, build configuration, and relevant entry points.
2. Check `git status`, existing diffs, route/module structure, and installed scripts.
3. Trace the requested behavior from user entry point through state, API, persistence, and rendering.
4. Identify existing helpers, tests, security boundaries, and deployment assumptions.
5. Report verified facts, assumptions, affected files, risks, and the smallest implementation boundary.

Do not edit during orientation. Do not infer framework behavior from filenames alone.
