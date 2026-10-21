# SecuredApp — Satellite Pages Design System & UI/UX Architecture (`SATELLITE_PAGE_DESIGN_SYSTEM.md`)

> **Golden Master Base Reference:** Banking DPDP Compliance Page (`src/pageComponents/product/BankingConsent/BankingConsentPage.jsx`)  
> **Source System:** SecuredApp Unified Design System (`design.md`)  
> **Target Framework:** Next.js / React / Tailwind CSS / Redux Toolkit / Framer Motion  
> **Target Scope:** All 11 Industry Satellite Consent Pages (Banking, Ecommerce, Ed-Tech, Fintech, HR, Healthcare, Insurance, NBFC, SaaS, Schools, Startups)

---

## 1. Golden Master Philosophy & Design Tenets

The **Banking Consent Page** serves as the unified archetype for all DPDP Act compliance satellite pages. It bridges high-stakes cybersecurity and regulatory rigor with the elegance of modern enterprise SaaS.

Every satellite page must strictly adhere to the visual, structural, and typographical rules defined here.

### Core Visual Tenets:
1. **Unified Dual-Theme Equilibrium:** Flawless transition between a crisp editorial Light Mode (`#FFFFFF`) and a deep cyber-navy Dark Mode (`#001938`).
2. **Standardized Spatial Cadence:** Exact 8pt spacing system (`py-24`, `py-20`, `min-h-[90vh] pt-28 pb-20`).
3. **Cyber Ambient Lighting:** Fine 100px cyber grid overlay (`bg-grid`) paired with centered radial blur glows (`bg-radial from-tertiary/15 via-transparent to-transparent blur-[140px]`).
4. **Live Regulatory Urgency:** Prominently featured live countdown timer to the **13 May 2027** DPDP enforcement deadline.

---

## 2. Color Palette & Token System

All colors must use the established tokens configured in `tailwind.config.js` and `design.md`. **Arbitrary dark hex values (such as `#070c18`, `#071317`, `#0d1e24`, `#132830`) are strictly forbidden.**

### 2.1 Core Palette Tokens

| Token | Hex / Value | Scope | Usage |
| :--- | :--- | :--- | :--- |
| `primary` | `#FFFFFF` | Global Light | Page background in light mode, primary white text in dark mode. |
| `secondary` | `#001938` | Global Dark | Deep Midnight Navy. Default page background in dark mode, primary text in light mode. |
| `tertiary` | `#12D576` | Global Accent | High-visibility Cyber Emerald Green. CTAs, active status indicators, verified badges. |
| `labelGray` | `#52525B` | Global Neutral | Neutral text, body subheadings, meta descriptions (Zinc-600). |
| `cardBackgroundDark` | `#FFFFFF1A` (10% White) | Dark Mode | Translucent frosted glass containers. |
| `cardBackgroundLight`| `#D2E6FF29` (16% Ice Blue) | Light Mode | Translucent ice glass containers. |
| `cardBorderColorDark`| `#D2E6FF4D` (30% Ice Blue) | Dark Mode | Borders for dark containers (`dark:border-white/10`). |
| `cardBorderColorLight`| `#A4CDFF4D` (30% Soft Blue) | Light Mode | Borders for light containers (`border-gray-200`). |

---

## 3. Typography Hierarchy

SecuredApp strictly enforces a 3-tier font discipline across all satellite pages:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. DISPLAY & HEADINGS: Outfit (`font-outfit`)                          │
│    Used for H1–H4, page titles, section headers, card titles, badges  │
├────────────────────────────────────────────────────────────────────────┤
│ 2. BODY & DOCUMENTATION: Nunito Sans (`font-nunitoSans`)               │
│    Used for paragraphs, explanations, FAQ answers, lists, tooltips     │
├────────────────────────────────────────────────────────────────────────┤
│ 3. METRICS, CODE & CTAs: Poppins & Monospace (`font-poppins` / `mono`)  │
│    Used for live countdown timer, SLA stats, Act sections, buttons     │
└────────────────────────────────────────────────────────────────────────┘
```

### Type Scale Breakdown:

| Element | Class Name | Font Family | Size & Weight |
| :--- | :--- | :--- | :--- |
| **Main Display (H1)** | `text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit` | Outfit | 48–60px / Bold (700) |
| **Section Title (H2)** | `text-3xl lg:text-5xl font-bold font-outfit` | Outfit | 30–48px / Bold (700) |
| **Subsection (H3)** | `text-xl sm:text-2xl font-bold font-outfit` | Outfit | 20–24px / Bold (700) |
| **Card Header (H4)** | `text-base sm:text-lg font-bold font-outfit` | Outfit | 16–18px / Bold (700) |
| **Body (Large / Lead)** | `text-base sm:text-lg font-normal font-nunitoSans` | Nunito Sans | 16–18px / Regular (400) |
| **Body (Default)** | `text-sm sm:text-base font-normal font-nunitoSans` | Nunito Sans | 14–16px / Regular (400) |
| **Captions / Micro** | `text-xs font-medium font-nunitoSans` | Nunito Sans | 12px / Medium (500) |
| **Technical Badges** | `text-xs font-mono font-bold` | JetBrains Mono | 12px / Monospace (700) |

---

## 4. Live Countdown Timer Specification (13 May 2027)

To highlight regulatory compliance timelines, every satellite page must display a **live countdown timer** targeting the DPDP Act 2023 enforcement date:

- **Target Timestamp:** `2027-05-13T00:00:00+05:30` (India Standard Time).
- **Format:** `[Days]d : [Hours]h : [Mins]m : [Secs]s`
- **Visual Pill Styling:**
  - Background: `bg-amber-500/10 dark:bg-amber-500/15`
  - Border: `border border-amber-500/30 dark:border-amber-500/40`
  - Text: `text-amber-800 dark:text-amber-300 font-semibold font-outfit`
  - Digits: `font-mono font-bold text-amber-700 dark:text-amber-200`
  - Indicator: Pulsing ping dot (`span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"`)

---

## 5. Structural Layout & Section Rhythm

Every satellite page follows the identical 10-step section cadence established by the Banking page:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. <MetaTags /> & <Navbar />                                           │
├────────────────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION (90vh)                                                 │
│    • 100px Cyber Grid (`bg-grid dark:bg-secondary`)                    │
│    • Center Ambient Glow (`blur-[140px] bg-radial from-tertiary/15`)   │
│    • 7-Col Left: Live 13 May 2027 Timer + H1 + Lead P + CTAs + Jump    │
│    • 5-Col Right: 3D Console Glass Card with Live Channel Telemetry    │
│    • Partner Ecosystem Logo Strip (DSCI, CySecK, IFSCA, C3iHub)        │
├────────────────────────────────────────────────────────────────────────┤
│ 3. SECTION 1: What is a CMP for [Industry]? (Definition & Burden)      │
│    • Section 6(10) Burden of Proof Callout Card (Amber Gradient)       │
│    • Architecture Visual Flow Diagram                                  │
├────────────────────────────────────────────────────────────────────────┤
│ 4. SECTION 2: How CMP Differs from Registered Consent Manager (DPB)   │
├────────────────────────────────────────────────────────────────────────┤
│ 5. SECTION 3: What the DPDP Act Changes for [Industry] (Bento Grid)    │
├────────────────────────────────────────────────────────────────────────┤
│ 6. SECTION 4: Dual-Role / Regulatory Obligations Matrix                │
├────────────────────────────────────────────────────────────────────────┤
│ 7. SECTION 5: Implementation Roadmap & Milestones                     │
├────────────────────────────────────────────────────────────────────────┤
│ 8. SECTION 6: Developer APIs, SDKs & Webhooks Demo Simulator           │
├────────────────────────────────────────────────────────────────────────┤
│ 9. SECTION 7: Frequently Asked Questions (Accordion)                   │
├────────────────────────────────────────────────────────────────────────┤
│ 10. SECTION 8: Bottom CTA & Conversion Banner + <Footer />             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Button & CTA Specifications

### Primary CTA (Demo Booking):
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={openDemoModal}
  className="px-8 py-4 bg-tertiary hover:opacity-95 text-secondary font-bold font-outfit rounded-xl shadow-[0_0_20px_rgba(18,213,118,0.35)] transition-all flex items-center justify-center gap-2 text-base"
>
  <span>Book a [Sector] Demo</span>
  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
</motion.button>
```

### Secondary CTA (Checklist / DPA Download):
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={openChecklistModal}
  className="px-8 py-4 bg-secondary/5 dark:bg-white/5 border border-secondary/20 dark:border-white/10 text-secondary dark:text-white font-semibold font-outfit rounded-xl hover:border-tertiary transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-base shadow-sm"
>
  <Download className="w-5 h-5 text-tertiary" />
  <span>Download [Sector] Checklist</span>
</motion.button>
```

---

## 7. Glassmorphic Surface Specifications

```css
/* Light Mode Glass Container */
background: rgba(255, 255, 255, 0.80);
backdrop-filter: blur(20px);
border: 1px solid rgba(229, 231, 235, 1); /* border-gray-200 */
border-radius: 1.5rem; /* rounded-3xl */

/* Dark Mode Glass Container */
background: rgba(255, 255, 255, 0.05); /* dark:bg-white/5 */
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.10); /* dark:border-white/10 */
border-radius: 1.5rem; /* rounded-3xl */
```

---

## 8. Modal & Form Specifications

All modals must adhere to `design.md` Section 6.5:
- Container: `bg-white dark:bg-[#001428] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl`
- Headers: `font-outfit font-bold text-slate-900 dark:text-white`
- Inputs: `bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-xl focus:border-emerald-500`
- Submit Button: `bg-tertiary text-secondary font-bold font-outfit rounded-xl shadow-lg hover:brightness-105`
- Form Action: Wired to `sendInquiryToCRM` targeting `/api/public/project-inquiry` with sector tag `DPDP Compliance - [Industry]`.
