---
name: Performance
description: Investigate frontend and runtime performance using evidence, then apply the smallest high-impact fix.
---

Measure before optimizing. Check bundle cost, render work, network waterfalls, caching, image/font loading, server latency, and repeated requests relevant to the changed path.

Prioritize user-visible bottlenecks such as LCP, blocking JavaScript, layout shift, long tasks, and avoidable data fetches. Preserve correctness and accessibility. Do not add a performance dependency or abstraction without a measured need.
