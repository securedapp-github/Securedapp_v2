---
name: Debugging
description: Diagnose bugs and failed checks by reproducing symptoms, tracing callers, isolating root cause, and verifying the fix.
---

1. Capture the exact error, command, route, input, environment, and reproduction frequency.
2. Read the failing code and every direct caller before changing it.
3. Form one falsifiable root-cause hypothesis at a time.
4. Add the smallest diagnostic or regression check needed; do not mask the failure.
5. Fix the shared cause, not only the reported symptom.
6. Reproduce before and after when possible; rerun adjacent checks for regressions.

Never disable validation, swallow errors, or replace a failing integration with a fake success.
