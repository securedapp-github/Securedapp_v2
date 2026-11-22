---
name: Git review
description: Check working-tree safety, diff scope, commit readiness, and release risks without discarding user work.
---

1. Inspect `git status`, diff, ignored files, and changed-file scope.
2. Preserve unrelated modifications; never reset or checkout user changes.
3. Check generated files, secrets, lockfiles, migrations, and accidental binaries.
4. Confirm tests and documentation match the diff.
5. Do not commit, push, tag, merge, or publish without explicit authorization.

Report the exact remaining commands and any release blocker.
