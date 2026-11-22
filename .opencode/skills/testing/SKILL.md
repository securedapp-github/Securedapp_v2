---
name: Testing
description: Select, run, and improve proportionate tests for code changes, regressions, APIs, and user flows.
---

1. Inspect available npm scripts and existing test conventions first.
2. Prefer the smallest deterministic check that proves the changed behavior.
3. Use unit tests for pure logic, integration checks for boundaries, and Playwright for critical browser flows.
4. Keep tests independent, repeatable, and free of real credentials or production data.
5. Record exact commands and results. Distinguish skipped, blocked, and passing checks.

Do not increase coverage by adding tests that assert implementation details without protecting behavior.
