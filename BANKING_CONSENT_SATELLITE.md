# Satellite Page Blueprint: Consent Management Platform for Banks

> **Satellite Page Specification & Production Runbook**  
> **Parent Hub**: [DPDP Compliance Platform](https://securedapp.io/dpdp-compliance-platform) (`/dpdp-compliance-platform`)  
> **Canonical Satellite URL**: `https://securedapp.io/dpdp-compliance-platform/banking`  
> **Legacy / Alias Route**: `https://securedapp.io/consent-management-platform-for-banks` (301 Permanent Redirect)  
> **Product Name**: SecureCMS for Banks  
> **Reviewed**: SecureDApp BFSI Privacy & Compliance Team  
> **Last Modified**: 2026-09-29  

---

## 1. Executive Overview & Strategic Purpose

The **Banking Consent Satellite Page** (`/dpdp-compliance-platform/banking`) is a specialized high-intent regulatory landing page engineered under SecureDApp's DPDP compliance product pillar. It is designed specifically for **Scheduled Commercial Banks (SCBs), Small Finance Banks (SFBs), Regional Rural Banks (RRBs), Cooperative Banks, and NBFCs** operating in India.

### Key Regulatory Drivers
- **Digital Personal Data Protection (DPDP) Act 2023** & **DPDP Rules 2025** (notified 13 Nov 2025).
- **Statutory Milestones**:
  - **13 Nov 2025**: DPDP Rules notified; Data Protection Board of India (DPBI) activated.
  - **13 Nov 2026**: DPBI-registered Consent Manager rules effective.
  - **13 May 2027**: Full statutory enforcement on banks (Notice, Consent, DSR, Withdrawal Parity, ₹250 Cr penalties).
  - **MeitY SDF Advisory**: Urgent readiness window for entities notified as Significant Data Fiduciaries (SDFs).
- **Burden of Proof (Section 6(10))**: In any regulatory dispute or DPBI investigation, the statutory burden of proving that valid affirmative consent was obtained rests entirely on the bank. SecureCMS provides cryptographic SHA-256 blockchain-anchored immutable audit receipts for every consent lifecycle event.

---

## 2. Information Architecture & Page Components

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 1. Navigation & Trust Bar (Logo, Partner Badges, Theme Toggle, Book Demo CTA)          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. Hero Section (Headline, Subhead, Role Jump Nav, Live Latency Stats, CTAs)           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. Core Architecture: What is a Banking CMP & Section 6(10) Burden of Proof            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. Clarification Matrix: CMP (Data Fiduciary) vs Registered Consent Manager            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 5. DPDP Act BFSI Shift: The 6 Regulatory Pillars, Penalties (₹250 Cr) & Timeline       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 6. Legal Basis Matrix: When Banks Need Consent vs Statutory Duty (PMLA vs DPDP)        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 7. Omnichannel Banking Touchpoints Audit (Branch, BCs, Apps, WhatsApp, Call Center)   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 8. SecureCMS Enterprise Module Suite (Purpose Engine, OTP Proof, Real-time Sync)       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 9. Interactive Banking Consent Simulator (Live CBS Sync & Parity Demonstration)       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 10. CBS, ESB & Multi-Platform Integration Architecture (Finacle, TCS BaNCS, Flexcube)  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 11. CISO & IT Risk Defense Layers (7-Layer Security, mTLS, RBAC, On-Premise/Cloud)     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 12. 6-Phase Bank Implementation Roadmap Leading to 13 May 2027 Deadline                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 13. Comparison Matrix: Basic Cookie Banner vs SecureCMS Enterprise Banking CMP         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 14. 8 Statutory FAQs (Accordion with Full Legal & Operational Answers)                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 15. Recognized Ecosystem Partner Badges (DSCI, CySecK, IFSCA, C3iHub IIT Kanpur)       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 16. Cross-linked DPDP Resources & Official MeitY/RBI Sources                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 17. Lead Capture Modals (Banking Demo Modal & Dual Lead Magnet Deliveries)             │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Interactive Engine: Banking Consent Simulator

Located in `src/pageComponents/product/BankingConsent/InteractiveConsentSimulator.jsx`:
- **Real-Time Channel Simulation**: Allows bankers to simulate customer consent capture across 3 distinct channels:
  1. *Branch Counter & Tablet* (Physical / Assisted onboarding)
  2. *Mobile Banking App* (Digital native flow)
  3. *Net Banking Portal* (Web desktop self-service)
- **Granular Purpose Matrix**:
  - `Core Account Operations` (Statutory / KYC - Pre-locked per Section 4/PMLA)
  - `Credit Card & Lending Cross-Sell` (Optional consent)
  - `Third-Party Insurance & MF Partners` (Optional unbundled consent)
  - `Personalized SMS & WhatsApp Marketing` (Optional consent)
- **Live Lifecycle Simulation**:
  - **OTP Verification Flow**: Simulates Aadhaar/SMS OTP authorization generating cryptographic hashes.
  - **CBS & ESB Propagation**: Demonstrates downstream sub-140ms synchronization with CBS (Finacle/BaNCS/Flexcube) and ESB message queues.
  - **Instant Withdrawal Parity (Sec 6(4))**: One-click revocation immediately stops marketing processing flags while preserving PMLA 5-year ledger records.

---

## 4. Structured Data & Schema Implementation (JSON-LD)

The page incorporates a complete `@graph` schema defined in `src/pageComponents/product/BankingConsent/data.js` and ingested via `src/components/common/MetaTags.js`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/banking#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/banking",
      "name": "Consent Management Platform for Banks in India | SecureCMS",
      "description": "Collect OTP-verified customer consent across branch, app and net banking, sync it with core banking and keep audit-ready DPDP records.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "publisher": {
          "@type": "Organization",
          "name": "SecureDApp",
          "legalName": "Vettedcode Technologies India Pvt. Ltd.",
          "url": "https://securedapp.io"
        }
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Banks in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/banking#bc"
      },
      "dateModified": "2026-09-29"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/banking#bc",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://securedapp.io/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "DPDP Compliance Platform",
          "item": "https://securedapp.io/dpdp-compliance-platform"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Banking",
          "item": "https://securedapp.io/dpdp-compliance-platform/banking"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a consent management platform for banks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is software that records, verifies and enforces each customer's consent for every purpose a bank uses their data for, updates connected systems when consent changes, and produces audit evidence. Banks use it to meet DPDP Act 2023 duties on notice, consent, withdrawal and data principal rights."
          }
        },
        {
          "@type": "Question",
          "name": "Do banks need customer consent for KYC under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, no separate consent is needed. Data a customer provides for KYC is processed for that specified purpose, and the DPDP Act recognises processing and retention that other laws require. The bank still gives a notice under Section 5, and it needs consent for other purposes such as marketing or cross-selling third-party products."
          }
        },
        {
          "@type": "Question",
          "name": "Can a customer withdraw consent and keep their bank account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Withdrawal stops processing that relied on consent, such as marketing, while the bank can continue processing needed to run the account or meet legal duties. Under Section 6(5) the customer bears the consequences of withdrawing, so the bank should explain in its notice what will stop."
          }
        },
        {
          "@type": "Question",
          "name": "How does SecureCMS connect with a core banking system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS connects through APIs, webhooks and prebuilt enterprise connectors, including CBS and ESB integrations, and to apps through native iOS, Android and Flutter SDKs. A consent change in any channel is applied across the connected systems, so a withdrawal made in net banking reaches the core system in real time."
          }
        },
        {
          "@type": "Question",
          "name": "How long must a bank keep data after an erasure request?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bank must erase data it no longer needs but can keep records that a law requires, such as PMLA records kept for five years after the relationship ends. SecureCMS records which fields are retained, the legal reason and the retention period."
          }
        },
        {
          "@type": "Question",
          "name": "How are minor accounts handled under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For customers under 18, banks need verifiable consent from a parent or lawful guardian and must not track or target advertising at children. The same applies to a person with a disability who has a lawful guardian. SecureCMS includes consent flows for minors and persons with disabilities that record the guardian's consent."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS is a consent management platform that banks use as Data Fiduciaries to manage their own customers' consent. Registered Consent Managers are separate entities registered with the Data Protection Board, and the registration provisions apply from 13 November 2026. A bank does not need a Consent Manager to run its own consent records, but it should be ready to act on consent a customer routes through one."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to banks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. Banks notified as Significant Data Fiduciaries should watch for any shorter window that MeitY notifies."
          }
        }
      ]
    }
  ]
}
```

---

## 5. File Manifest in the Repository

| File Path | Purpose |
| :--- | :--- |
| [`src/pages/dpdp-compliance-platform/banking.js`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pages/dpdp-compliance-platform/banking.js) | Primary Next.js page route serving `/dpdp-compliance-platform/banking` |
| [`src/pages/consent-management-platform-for-banks.js`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pages/consent-management-platform-for-banks.js) | Legacy / alias route serving `BankingConsentPage` |
| [`src/pageComponents/product/BankingConsent/BankingConsentPage.jsx`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pageComponents/product/BankingConsent/BankingConsentPage.jsx) | Main landing page React component with all 16 architectural sections |
| [`src/pageComponents/product/BankingConsent/InteractiveConsentSimulator.jsx`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pageComponents/product/BankingConsent/InteractiveConsentSimulator.jsx) | Live banking omnichannel consent simulator |
| [`src/pageComponents/product/BankingConsent/BankingModals.jsx`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pageComponents/product/BankingConsent/BankingModals.jsx) | Demo booking modal & Lead Magnet capture modal integrated with CRM |
| [`src/pageComponents/product/BankingConsent/data.js`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pageComponents/product/BankingConsent/data.js) | Complete data matrix, FAQs, timeline, named integrations & `bankingConsentSchema` |
| [`src/components/common/MetaTags.js`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/components/common/MetaTags.js) | Enhanced SEO head injector supporting custom JSON-LD graphs |
| [`public/sitemap.xml`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/public/sitemap.xml) | Updated XML sitemap index with `/dpdp-compliance-platform/banking` (priority 0.94) |
| [`next.config.mjs`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/next.config.mjs) | 301 Permanent Redirect mapping `/consent-management-platform-for-banks` → `/dpdp-compliance-platform/banking` |
| `Partner Logos` | Pure inline SVG & typographic badges for DSCI, CySecK, IFSCA, C3iHub IIT Kanpur (no binary image dependencies) |

---

## 6. Action Items Checklist & What is Pending

Below is the status of items related to this landing page and what remains pending for completion:

### Completed
- [x] **Full Landing Page Architecture**: Complete 16-section BFSI-grade landing page with dark/light mode parity.
- [x] **Omnichannel Simulator**: Interactive simulator demonstrating unbundled consent, OTP proof, and CBS synchronization.
- [x] **Schema Integration**: Complete WebPage, BreadcrumbList, and FAQPage JSON-LD schema injected cleanly into `<Head>`.
- [x] **Canonical Routing**: Next.js route at `/dpdp-compliance-platform/banking` created.
- [x] **301 SEO Redirect**: Configured `/consent-management-platform-for-banks` → `/dpdp-compliance-platform/banking`.
- [x] **Sitemap Registration**: Registered in `public/sitemap.xml` with priority 0.94.
- [x] **Syntax & Module Validation**: Verified with Node syntax checks and ES module schema validation.

### Pending / Recommended Next Steps
1. **Site Navigation Links (Navbar & Footer)**:
   - Add `"Consent for Banks"` or `"Banking CMP"` as a sub-item under the `Product` dropdown in `src/components/navbar/navItems.js`.
   - Add a dedicated link in `src/components/footer/footer.js` under Product/Solutions pointing to `/dpdp-compliance-platform/banking`.
2. **Parent Hub Reciprocal Cross-Link**:
   - In [`src/pageComponents/product/SecureCMS/SecureCMSPage.js`](file:///c:/Users/NIKIL/Documents/securedapp/quantum%20vault/Securedapp_v/src/pageComponents/product/SecureCMS/SecureCMSPage.js), under the "Fintech & Banking" industry card, add a direct CTA link pointing to `/dpdp-compliance-platform/banking` to maximize page rank flow and internal linking equity.
3. **Dedicated OpenGraph Banner Image**:
   - Currently `metaData.image` points to default `/assets/images/ProductPages/ss/hero.webp`.
   - Recommendation: Generate or add a dedicated BFSI OpenGraph image (`/assets/dpdp/banking-consent-og.webp`) featuring the headline and partner badges for high-CTR LinkedIn/Twitter previews.
4. **CRM Lead Submission Endpoint**:
   - `BankingModals.jsx` calls `sendTicketToCRM`. Verify that the backend webhook endpoint `/api/send-ticket` receives the new lead types:
     - `leadType: "Bank DPDP Consent Checklist"`
     - `leadType: "Banking Security Note"`
     - `leadType: "Banking Demo"`
5. **Git Push**:
   - Stage the banking satellite files, modified `MetaTags.js`, `next.config.mjs`, `sitemap.xml`, and new `.md` runbook, then commit and push to remote branch `nikil`.
