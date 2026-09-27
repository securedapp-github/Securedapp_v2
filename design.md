# SecuredApp — Unified Design System & UI/UX Architecture (`design.md`)

> **Version:** 2.4.0  
> **Target Framework:** Next.js 14 / React 18 / Tailwind CSS / Redux Toolkit  
> **Brand Ecosystem:** SecuredApp Web3 Security, Smart Contract Audits, SolidityShield, AuditExpress, SecureCMS, QuantumVault, and Enterprise Compliance Platforms.

---

## 📑 Table of Contents
1. [Brand Identity & Design Tenets](#1-brand-identity--design-tenets)
2. [Color Palette & Token System](#2-color-palette--token-system)
3. [Typography Hierarchy](#3-typography-hierarchy)
4. [Spatial Grid & Layout Foundation](#4-spatial-grid--layout-foundation)
5. [Elevation, Glassmorphism & Surface Treatment](#5-elevation-glassmorphism--surface-treatment)
6. [Component Design Library](#6-component-design-library)
7. [Product Sub-Systems & Visual Themes](#7-product-sub-systems--visual-themes)
8. [Motion & Micro-Interaction Guidelines](#8-motion--micro-interaction-guidelines)
9. [Accessibility (a11y) & Contrast Standards](#9-accessibility-a11y--contrast-standards)
10. [Performance & Asset Implementation Rules](#10-performance--asset-implementation-rules)

---

## 1. Brand Identity & Design Tenets

SecuredApp delivers enterprise-grade Web3 security, artificial intelligence vulnerability analysis, post-quantum cryptography, and regulatory compliance (DPDP Act 2023, GDPR, SOX). The user interface must bridge the precision of high-stakes cybersecurity with the frictionless elegance of modern enterprise SaaS.

### Core Tenets

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│   Cryptographic Rigor   │   Clarity Over Clutter  │   Continuous Trust Cue  │
│ High information        │ Complex vulnerability   │ Verified badges, live   │
│ density, precise audit  │ graphs abstracted into  │ scan monitors, and      │
│ metrics, terminal-grade │ intuitive visual badges │ cryptographic seals     │
│ code blocks.            │ and clear action steps. │ on every touchpoint.    │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

- **Dual-Theme Equilibrium:** Flawless transition between a crisp, clean editorial Light Mode and a deep cyber-navy Dark Mode.
- **Developer-Native Ergonomics:** Code blocks, contract address inspectors, and severity matrices styled with high-contrast monospace clarity.
- **Glassmorphic Sophistication:** Subtle translucent cards, neon cyan/emerald perimeter highlights, and fine cyber background grids.

---

## 2. Color Palette & Token System

The color system is mapped through Tailwind CSS tokens (`tailwind.config.js`) and custom CSS variables.

### 2.1 Primary & Background Palettes

| Token | Hex / Value | Mode / Scope | Usage |
| :--- | :--- | :--- | :--- |
| `primary` | `#FFFFFF` | Global Light | Default page background in light mode, primary white text in dark mode. |
| `secondary` | `#001938` | Global Dark | Deep Midnight Navy. Default background in dark mode, deep text in light mode. |
| `tertiary` | `#12D576` | Global Accent | High-visibility Cyber Emerald Green. Primary buttons, success states, verified badges. |
| `labelGray` | `#52525B` | Global Neutral | Neutral text, subheaders, inactive tab headers (Zinc-600). |
| `sideBarColorLight`| `#FFFFFF` | Light Mode | Clean white surface for light mode sidebars. |

### 2.2 Dark Navy Terminal Sub-System (SolidityShield / AuditExpress)

| Token / Class | Hex Code | Purpose |
| :--- | :--- | :--- |
| Base Surface | `#0A1120` | Core background for SolidityShield scanning consoles and dashboards. |
| Card / Container | `#0F1729` | Elevated container surface for scan history, overview cards, and metrics. |
| Accent Surface | `#131B2E` | Hover row states, active sidebar selection, table header backgrounds. |
| Terminal Border | `#1E293B` | Fine structural divider line (1px solid border). |
| Form Input Surface| `#131B2E` | Input fields, selects, and textareas. |
| Form Border | `#2A3548` | Default border for interactive fields. |
| Muted Blue Text | `#8B93A7` | Secondary text, table column headers, timestamp labels. |
| Placeholder Text | `#5B6478` | Input placeholder state. |
| System Green | `#22C55E` | Active sidebar indicators, scan passed metrics, selected pagination buttons. |

### 2.3 Glassmorphic Surface Tokens

| Token | Value | Applied State |
| :--- | :--- | :--- |
| `cardBackgroundDark` | `#FFFFFF1A` (10% White) | Translucent frosted cards in global dark mode. |
| `cardBackgroundLight`| `#D2E6FF29` (16% Ice Blue)| Subtle icy glass surface in light mode. |
| `cardBorderColorDark`| `#D2E6FF4D` (30% Ice Blue)| Perimeter border for dark frosted containers. |
| `cardBorderColorLight`| `#A4CDFF4D` (30% Soft Blue)| Perimeter border for light frosted containers. |

### 2.4 Severity & Risk Assessment Tokens

Used in smart contract vulnerability reports, real-time threat alerts, and compliance scorecards:

```
Critical     [#EF4444]  ████████  Severe exploit risk / immediate funds vulnerability
High         [#F97316]  ████████  Severe logic flow defect / access control failure
Medium       [#F59E0B]  ████████  Reentrancy vector / gas optimization flaw
Low          [#06B6D4]  ████████  Best practice deviation / minor state inconsistency
Informational[#3B82F6]  ████████  Code style, comments, and architecture suggestion
Passed       [#12D576]  ████████  Validated secure / zero vulnerabilities found
```

---

## 3. Typography Hierarchy

SecuredApp standardizes typography via Next.js Google Fonts (`next/font/google`), exposing modular CSS variables.

### 3.1 Font Families

| Variable | Family | Role | Weights |
| :--- | :--- | :--- | :--- |
| `--font-outfit` | `Outfit, sans-serif` | **Primary Brand Display:** Page titles, H1–H3 headlines, hero copy, nav links, card headings. | 400, 500, 600, 700, 800 |
| `--font-nunito-sans`| `Nunito Sans, sans-serif`| **Primary Body:** Paragraphs, documentation articles, FAQs, whitepapers. | 300, 400, 600, 700 |
| `--font-poppins` | `Poppins, sans-serif` | **UI & Data Metrics:** Key stats, numerical badges, button labels, modal headers. | 300, 400, 600, 700 |
| `--font-playfair-display`| `Playfair Display, serif`| **Editorial Accents:** Quotations, whitepaper subtitles, testimonial headers. | 400, 600, 700 |
| Code / Monospace | `JetBrains Mono, Fira Code, monospace` | Contract addresses, bytecode, terminal output, API endpoints. | 400, 500 |

### 3.2 Modular Type Scale

| Level | Desktop Size / Leading | Mobile Size / Leading | Weight | Tailwind Example |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `56px / 1.15` | `36px / 1.2` | Bold (700) | `text-4xl md:text-6xl font-bold font-outfit` |
| **Section H2** | `36px / 1.25` | `28px / 1.3` | SemiBold (600) | `text-2xl md:text-4xl font-semibold font-outfit` |
| **Subsection H3**| `24px / 1.35` | `20px / 1.4` | Medium / SemiBold | `text-xl md:text-2xl font-semibold font-outfit` |
| **Card Header H4**| `18px / 1.4` | `16px / 1.4` | SemiBold (600) | `text-base md:text-lg font-semibold font-outfit` |
| **Body (Large)** | `18px / 1.6` | `16px / 1.6` | Regular (400) | `text-base md:text-lg font-normal font-nunitoSans` |
| **Body (Default)**| `15px / 1.6` | `14px / 1.6` | Regular (400) | `text-sm md:text-base font-normal font-nunitoSans` |
| **Caption / Meta**| `12px / 1.5` | `11px / 1.5` | Medium (500) | `text-xs font-medium tracking-wide` |

---

## 4. Spatial Grid & Layout Foundation

### 4.1 8-Point Spatial System
All margin, padding, height, and layout gaps adhere to multiples of 4px / 8px:
- `4px` (`gap-1` / `p-1`) — Micro spacing, icon offsets.
- `8px` (`gap-2` / `p-2`) — Internal badge padding, button icon gaps.
- `16px` (`gap-4` / `p-4`) — Standard card internal padding on mobile, row gaps.
- `24px` (`gap-6` / `p-6`) — Desktop card padding, standard grid gap.
- `32px` (`gap-8` / `p-8`) — Bento grid major spacing, section sub-elements.
- `64px` (`py-16`) — Standard section vertical cadence.
- `96px`–`128px` (`py-24` to `py-32`) — Hero sections and primary landing transitions.

### 4.2 Grid Overlays
SecuredApp reinforces a subtle cyber-grid background across landing pages:
```css
/* 100px Light Grid */
.bg-grid {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
}

/* 100px Dark Grid */
.dark .bg-grid {
  background-image: linear-gradient(90deg, rgba(210, 230, 255, 0.039) 1px, transparent 1px),
                    linear-gradient(rgba(210, 230, 255, 0.039) 1px, transparent 1px);
}

/* 40px Cyber Terminal Grid (SolidityShield Console) */
.sss-terminal-grid {
  background-color: #0A1120;
  background-image: linear-gradient(to right, rgba(19, 27, 46, 0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(19, 27, 46, 0.5) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### 4.3 Container Constraints
- **Wide Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (Max 1280px)
- **Focused Hub:** `max-w-5xl mx-auto px-4 sm:px-6` (Max 1024px)
- **Reading / Whitepaper:** `max-w-3xl mx-auto px-4 sm:px-6` (Max 768px)

---

## 5. Elevation, Glassmorphism & Surface Treatment

### 5.1 Glassmorphic Cards
```css
/* Light Mode Glass Card */
.glass-card-light {
  background: rgba(210, 230, 255, 0.16);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(164, 205, 255, 0.3);
  border-radius: 16px;
}

/* Dark Mode Glass Card */
.glass-card-dark {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(210, 230, 255, 0.3);
  border-radius: 16px;
}
```

### 5.2 Shadows & Glows
- **Subtle Card Depth:** `box-shadow: 0 10px 30px -10px rgba(0, 25, 56, 0.08);`
- **Cyber Accent Glow (`#12D576`):** `box-shadow: 0 0 20px rgba(18, 213, 118, 0.25);`
- **Active Navigation Pill:** `box-shadow: 0 4px 14px rgba(18, 213, 118, 0.35);`

---

## 6. Component Design Library

### 6.1 Global Navbar & MegaMenu
- **Height:** 80px fixed height with dynamic sticky background blur (`backdrop-blur-md`).
- **Brand Logo:** Vector SecuredApp emblem paired with crisp typography and dynamic light/dark SVG asset.
- **Categorized MegaMenu:**
  - *Products Column:* SolidityShield, SecureCMS, SecureTrace, CookieHub, PQCSuite, SecureX-DID, SecureWatch, AuditExpress, SecurePad, QuantumVault.
  - *Services Column:* Smart Contract Audit, Dapp Security, Token Audit, RWA Audit, Blockchain Forensic, AML & Compliance, LevelUp Academy.
- **CTAs & Utilities:** Theme Toggle (`selector` based dark/light switch), `Request a Quote` button, mobile hamburger drawer.

### 6.2 Primary & Secondary Buttons

```
[ Primary CTA ]
Background:    #12D576 (Tertiary Emerald)
Hover:         Brightness 110% + transform translateY(-2px)
Text:          #001938 (Deep Navy, Bold, Outfit/Poppins)
Radius:        Full pill (rounded-full) or 10px (rounded-xl)
Padding:       px-7 py-3.5
Shadow:        0 0 16px rgba(18, 213, 118, 0.35)

[ Secondary / Ghost CTA ]
Background:    Transparent or cardBackgroundLight / cardBackgroundDark
Border:        1px solid cardBorderColorLight / cardBorderColorDark
Text:          #001938 (Light Mode) / #FFFFFF (Dark Mode)
Hover:         Border color #12D576 + subtle background tint
Radius:        Rounded matching primary
```

### 6.3 Bento Grid & Feature Cards
- **Asymmetric Visual Flow:** Combine 2-column, 3-column, and featured wide cards.
- **Icon Badging:** 48px × 48px rounded square container with 15% `#12D576` translucent background, containing crisp SVG icons.
- **Hover Micro-Interaction:** Smooth 250ms lift (`translateY(-4px)`), increased border opacity, and subtle ambient emerald glow.

### 6.4 Interactive Chatbot Widget (SecureBot)
- **Floating Badge:** Positioned at `bottomOffset: 108px`, `rightOffset: 24px` (desktop), `mobileBottomOffset: 84px`.
- **Performance Safeguard:** Lazy loaded with client-side dynamic import after initial LCP (3-second deferred initialization).
- **Surface:** Deep cyber navy header, bubble thread with user/assistant demarcation, structured form capture for audit quote inquiries.

### 6.5 Form Controls & Modals (`RequestQuoteModal`)
- **Background:** `#131B2E` in dark mode, `#F8FAFC` in light mode.
- **Border:** `1px solid #2A3548` transitioning to `border-[#12D576]` on `:focus-visible`.
- **Validation Feedback:** Inline error messages in `#EF4444` with accessible `aria-live` polite announcement.

---

## 7. Product Sub-Systems & Visual Themes

SecuredApp hosts specialized sub-products that preserve brand cohesion while sporting tailored aesthetic variants:

### 7.1 SolidityShield — AI Vulnerability Scanner
- **Theme Identity:** Deep Space Cyber (`#0A1120`, `#0F1729`).
- **Sidebar:** Fixed left rail with 3px `#22C55E` active indicator pill and `#131B2E` selection background.
- **Interactive Terminal:** Real-time vulnerability progress bar, Slither/Mythril analysis output, code line highlighted diff viewer.
- **Audit History Table:** Zebra hover rows (`#131B2E`), severity chip tags (`CRITICAL`, `HIGH`, `MED`, `LOW`), pagination controls.

### 7.2 AuditExpress — Rapid Smart Contract Auditing
- **Theme Identity:** High-velocity audit workflow with custom gradient grid banners (`grid-bg`, `griddark-bg`).
- **3-Step Flow Cards:**
  1. *Upload Contract / Repo Link*
  2. *Automated AI & Static Symbolic Engine Scan*
  3. *Instant Cryptographic Executive PDF Report*
- **Pricing Matrix:** Clear tier comparison (Express Scan vs Full Manual Audit vs Continuous Retainer).

### 7.3 SecureCMS & CookieHub — DPDP Act 2023 Compliance Platform
- **Theme Identity:** Enterprise Data Privacy & Zero-Leakage Governance.
- **Visual Sandbox:**
  - *Quarantined State:* `<script type="text/plain">` tag visualization with live network monitor showing 0 external tracking leaks.
  - *Consented State:* Real-time DOM transformation to active script execution without page refresh.
- **Typography Scoping:** Strictly enforced `Outfit` font family across all feature cards, accordions, and tables.

### 7.4 QuantumVault — Post-Quantum Cryptography & Key Management
- **Theme Identity:** High-security cryptographic vault.
- **Visual Features:** Dilithium / Kyber algorithm badges, HSM partition status gauges, hardware key rotation workflow diagrams.

---

## 8. Motion & Micro-Interaction Guidelines

### 8.1 Keyframe Animations
SecuredApp defines three core floating motion utilities in `src/index.css`:

```css
@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-20px); }
}

@keyframes float-simple {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Utilities */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-simple {
  animation: float-simple 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-simple 6s ease-in-out infinite;
  animation-delay: 2s;
}
```

### 8.2 Transition Curves
- **Standard Transition:** `all 200ms cubic-bezier(0.4, 0, 0.2, 1)` (hover, buttons, links).
- **Card Expansion / Modal:** `transform 300ms cubic-bezier(0.16, 1, 0.3, 1)` (popups, drawers, accordions).
- **Hardware Acceleration:** Apply `transform: translateZ(0)` or `will-change: transform` on animated hero elements.

### 8.3 Reduced Motion Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Accessibility (a11y) & Contrast Standards

- **WCAG 2.2 Level AA Standard:**
  - Standard text contrast ratio: minimum `4.5:1` against adjacent background.
  - Large display text (`>= 24px`): minimum `3.0:1`.
  - Primary button `#12D576` against `#001938` yields a contrast ratio of `11.4:1` (Exceeds AAA).
- **Focus Rings:** All interactive elements (buttons, inputs, links) implement visible focus indicators:
  ```css
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12D576] focus-visible:ring-offset-2
  ```
- **Semantic Structure:** Exactly one `<h1>` per page. Ordered `<h2>` and `<h3>` tags without skipping levels.
- **Screen Reader Support:** Informational icons paired with `aria-label` or hidden text (`sr-only`). Status badges marked with `role="status"`.

---

## 10. Performance & Asset Implementation Rules

1. **Font Preloading Discipline:** Only primary fonts (`Outfit`, `Nunito Sans`) are preloaded; decorative accents (`Playfair Display`, `Poppins`) load with `preload: false` to avoid blocking First Contentful Paint (FCP).
2. **Dynamic Client Component Hydration:** Heavy widgets (`ChatWidget`, `ToastContainer`) are loaded with `next/dynamic({ ssr: false })` to optimize Largest Contentful Paint (LCP) and Total Blocking Time (TBT).
3. **No Layout Shifts (CLS < 0.05):** Always declare explicit aspect ratios, heights, and widths on images, carousels, and hero graphic placeholders.
4. **CSS Consolidation:** Global stylesheets declared centrally in `_app.js` to eliminate Flash of Unstyled Content (FOUC).
