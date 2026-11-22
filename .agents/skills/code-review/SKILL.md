---
name: Code review
description: Review current changes for correctness, security, regressions, scope discipline, and missing validation.
---

Review the diff, not the author's intent.

Check in severity order:

- data loss, auth bypass, secret exposure, injection, unsafe shell, and permission errors;
- broken behavior, edge cases, race conditions, error swallowing, and compatibility;
- missing tests, accessibility regressions, performance regressions, and stale documentation;
- unrelated changes, dead code, duplicated logic, and unverifiable claims.

Return actionable findings with file, line, impact, and fix. If no findings exist, state what was checked and remaining uncertainty.
