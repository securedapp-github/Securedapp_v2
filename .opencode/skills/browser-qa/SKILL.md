---
name: Browser QA
description: Validate web pages and user flows with Playwright or the available browser tooling, including console, accessibility, responsive, and artifact checks.
---

1. Start the app using the documented command; never guess credentials.
2. Test the smallest critical journey and its failure state.
3. Check URL, visible content, controls, focus/keyboard access, console errors, network failures, and responsive layout.
4. Capture a screenshot or trace for meaningful failures.
5. Clean up servers and report exact browser/tool limitations.

Prefer accessible locators and user-visible assertions. Do not modify production data during QA.
