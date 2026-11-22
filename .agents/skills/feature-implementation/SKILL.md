---
name: Feature implementation
description: Implement focused application changes with minimal scope, existing patterns, validation, and safe user-visible behavior.
---

Use for new features, refactors, configuration changes, and routine fixes.

1. Establish acceptance criteria and affected execution path before editing.
2. Reuse existing components, utilities, dependencies, and conventions.
3. Validate inputs at trust boundaries; preserve error information and user data.
4. Make the smallest coherent diff. Avoid speculative abstractions, migrations, or dependencies.
5. Add one focused test or runnable check for non-trivial behavior.
6. Run targeted checks, inspect the diff, then run the strongest affordable project check.

Stop and ask before destructive data changes, external publication, production deployment, or scope expansion.
