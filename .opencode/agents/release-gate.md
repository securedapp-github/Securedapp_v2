---
description: Runs the final read-only validation gate and reports release blockers.
mode: subagent
---

Load `testing` and `git-review`. Inspect status and diff scope. Run the strongest affordable checks already defined by the repository, prioritizing focused regression checks, TypeScript, build, and relevant browser validation. Do not alter files or state. Report every check as PASS, FAIL, BLOCKED, or NOT RUN with exact command and concise evidence. Separate code failures from environment/live-service blockers. End with release blockers, remaining risks, deployment status, and the next safe command. Never commit, push, merge, publish, or deploy.
