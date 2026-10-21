export const nbfcConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/nbfc#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/nbfc",
      "name": "Consent Management Platform for NBFCs in India | SecureCMS",
      "description": "Record OTP-verified borrower consent across loan apps, DSAs and branches, meet RBI digital lending and DPDP rules, keep audit-ready proof. Book a demo.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for NBFCs",
        "applicationCategory": "FinanceApplication",
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
        "name": "NBFCs, Digital Lenders, MFIs, and HFCs in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/nbfc#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/nbfc#bc",
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
          "name": "NBFC",
          "item": "https://securedapp.io/dpdp-compliance-platform/nbfc"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a consent management platform for NBFCs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is software that records, verifies and enforces each borrower's consent for every purpose an NBFC uses their data for. It shares consent changes with lending partners and systems and produces audit evidence. NBFCs use it to meet their DPDP Act 2023 duties alongside RBI's Digital Lending Directions."
          }
        },
        {
          "@type": "Question",
          "name": "Do NBFCs need consent for KYC and credit bureau reporting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. KYC, PMLA record keeping and reporting to credit information companies are required by law, and the DPDP Act treats compliance with law as a legitimate use under Section 7. NBFCs still have to give a notice, and they need consent for purposes such as marketing and cross-sell."
          }
        },
        {
          "@type": "Question",
          "name": "What do RBI's Digital Lending Directions say about borrower data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They require need-based collection with prior explicit consent and an audit trail. Lending apps may not access phone files, contacts or call logs. Camera, microphone or location can be accessed one time, only for onboarding and KYC. Borrowers get granular consent, including the option to ask for deletion."
          }
        },
        {
          "@type": "Question",
          "name": "How does SecureCMS handle consent from DSAs and lending partners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS captures OTP-verified consent on partner or DSA journeys through redirect or embedded consent flows, stores it against the borrower's record, and sends any later change to partners and internal systems through APIs and webhooks."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower ask an NBFC to delete data after closing a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but the NBFC can keep data a law requires, such as KYC and PMLA records held for five years after the relationship ends. The rest must be erased. SecureCMS logs which fields are kept, why, and until when."
          }
        },
        {
          "@type": "Question",
          "name": "How should NBFCs control data used by collection agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agencies should receive only the data needed to recover the loan from the borrower. SecureCMS applies purpose- and field-level access rules along with role-based access, so collections teams see only what their purpose allows, and every access is logged."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SecureCMS is a consent management platform that NBFCs use as Data Fiduciaries. Registered Consent Managers are separate entities, registered with the Data Protection Board, and those provisions apply from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to NBFCs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026. The remaining obligations, including notice, consent, rights requests and breach reporting, apply from 13 May 2027."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Consent Management Platform for NBFCs in India | SecureCMS",
  description: "Record OTP-verified borrower consent across loan apps, DSAs and branches, meet RBI digital lending and DPDP rules, keep audit-ready proof. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/nbfc",
};

export const partnerLogos = [
  { name: "DSCI Certified Member", label: "DSCI Compliance Ready" },
  { name: "CySecK Evaluated", label: "Govt of Karnataka Cybersecurity CoE" },
  { name: "IFSCA FinTech Cohort", label: "GIFT City FinTech Sandbox" },
  { name: "IIT Kanpur C3iHub", label: "Cybersecurity Incubation Partner" },
];

export const jumpNavLinks = [
  { id: "dual-rulebook", label: "DPDP + RBI Lending Rules" },
  { id: "legal-basis-matrix", label: "Borrower Consent Matrix" },
  { id: "zero-scraping", label: "Zero-Scraping Onboarding" },
  { id: "collections-governance", label: "Recovery Agency Governance" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "enterprise-modules", label: "NBFC Modules" },
  { id: "roadmap", label: "May 2027 Roadmap" },
  { id: "faqs", label: "NBFC FAQs" },
];

export const dualRulebookData = [
  {
    parameter: "Data Collection Scope",
    dpdpAct: "Section 6(1): Limited strictly to necessary personal data for specified purpose.",
    rbiDigitalLending: "Strictly need-based collection. Banned access to mobile contacts, call logs, media files.",
    secureCmsSolution: "Zero phone-scraping policy engine; automated sandbox audit rejecting excessive app permissions.",
  },
  {
    parameter: "Borrower Consent Standard",
    dpdpAct: "Free, specific, informed, unconditional, and unambiguous with clear affirmative action.",
    rbiDigitalLending: "Prior explicit consent with verifiable audit trail for every data sharing with REs/LSPs.",
    secureCmsSolution: "Multilingual OTP-verified consent capture in 22 languages with SHA-256 cryptographic receipts.",
  },
  {
    parameter: "Credit Bureau Reporting & Pulls",
    dpdpAct: "Statutory reporting is Section 7 legitimate use; bureau pull requires explicit opt-in.",
    rbiDigitalLending: "Mandatory separate consent before pulling credit information company (CIC) reports.",
    secureCmsSolution: "Dedicated, unbundled OTP gate for bureau pulls separated from loan application terms.",
  },
  {
    parameter: "Recovery & Collection Practices",
    dpdpAct: "Section 6 purpose limitation; cannot contact unconsented third parties or referees.",
    rbiDigitalLending: "Strictly prohibits harassing calls, contacting borrower contacts, or unconsented family outreach.",
    secureCmsSolution: "Dynamic field-level redaction; hides family/referee contacts from recovery agent views.",
  },
  {
    parameter: "Data Erasure vs Statutory Retention",
    dpdpAct: "Section 12 right to erasure upon purpose fulfillment or consent revocation.",
    rbiDigitalLending: "Mandatory 5-year retention of KYC, loan agreement, and ledger records under PMLA §12.",
    secureCmsSolution: "Automated legal hold engine: erases marketing profiles, locks statutory loan ledgers for 5 years.",
  },
];

export const legalBasisMatrix = [
  {
    activity: "Borrower identity verification (CKYC / Aadhaar Offline)",
    legalBasis: "Section 7 Legitimate Use + PMLA Statutory Mandate",
    consentRule: "Statutory Duty (Notice given, no opt-out)",
    impact: "Non-erasable during loan tenure + 5 years post closure",
  },
  {
    activity: "Credit score retrieval from CIBIL / Experian / CRIF",
    legalBasis: "RBI Digital Lending Directions + Section 6 Consent",
    consentRule: "Mandatory Standalone Consent",
    impact: "Requires explicit borrower opt-in; timestamped record",
  },
  {
    activity: "Cross-selling personal loans / credit cards to existing borrowers",
    legalBasis: "Section 6(1) Explicit Consent",
    consentRule: "Mandatory Unbundled Opt-In",
    impact: "Must be separate checkbox; revocable at any time",
  },
  {
    activity: "Sharing loan profile with Co-Lending Bank partner",
    legalBasis: "Co-Fiduciary Joint Processing Agreement + Section 6",
    consentRule: "Mandatory Co-Lender Disclosure",
    impact: "Notice must specify co-lender name and risk share split",
  },
  {
    activity: "Handing over delinquent loan file to external collection agency",
    legalBasis: "Section 7 Legitimate Use (Contractual Debt Recovery)",
    consentRule: "Permitted for Debt Recovery Only",
    impact: "Restricted strictly to borrower phone & dues; contacts redacted",
  },
];

export const enterpriseModules = [
  {
    title: "Zero-Scraping Onboarding SDK",
    desc: "Blocks forbidden device permissions (contacts, SMS, call logs, storage) on Android and iOS while capturing valid OTP-verified consent for KYC and bureau pulls.",
    badge: "RBI 2025 Compliant",
  },
  {
    title: "DSA & LSP Real-Time Sync Engine",
    desc: "Captures borrower consent at the DSA front-end and broadcasts revocations or changes to Lending Service Providers and co-lending banks in under 120ms.",
    badge: "Co-Lending Ready",
  },
  {
    title: "Recovery Agency Field Redactor",
    desc: "Purpose-based field limiting for collections teams. Hides family contacts, workplace details, and unconsented referee numbers automatically.",
    badge: "Recovery Shield",
  },
  {
    title: "Closed Loan Legal-Hold Engine",
    desc: "Enforces Section 12 borrower erasure rights while preserving 5-year statutory KYC, sanction letter, and repayment ledgers mandated by PMLA Section 12.",
    badge: "PMLA / KYC Safe",
  },
  {
    title: "LOS & LMS Platform Connectors",
    desc: "Turnkey API and webhook integration for Nucleus FinnOne Neo, Pennant, Lentra, and custom NBFC Loan Origination & Management Systems.",
    badge: "Turnkey APIs",
  },
  {
    title: "22 Indian Languages Notice Portal",
    desc: "Displays statutory loan data notices in all 22 Eighth Schedule languages, matching the borrower's preferred regional language during digital onboarding.",
    badge: "Multilingual Sec 5(3)",
  },
];

export const implementationRoadmap = [
  {
    phase: "Phase 1: Loan Journey & DSA Data Audit",
    duration: "Weeks 1–2",
    milestone: "Map borrower touchpoints across digital apps, DSAs, LSPs, and physical branches into DPDP/RBI matrix.",
  },
  {
    phase: "Phase 2: Mobile SDK Zero-Scraping Hardening",
    duration: "Weeks 3–4",
    milestone: "Embed SecureCMS mobile SDK; eliminate contact/call-log scraping; configure OTP bureau consent gates.",
  },
  {
    phase: "Phase 3: Multilingual Notice & DSA Portal",
    duration: "Weeks 5–6",
    milestone: "Deploy borrower notice portal in English + 22 Indian languages across website, app, and DSA portals.",
  },
  {
    phase: "Phase 4: LOS / LMS & Co-Lender Webhook Sync",
    duration: "Weeks 7–8",
    milestone: "Integrate mTLS webhooks with core loan management systems, co-lending banks, and recovery agencies.",
  },
  {
    phase: "Phase 5: Automated DSR & PMLA Legal Hold",
    duration: "Weeks 9–10",
    milestone: "Deploy self-service borrower consent management portal; configure automated 5-year retention hold for closed loans.",
  },
  {
    phase: "Phase 6: CISO Certification & Audit Sign-Off",
    duration: "Weeks 11–12",
    milestone: "Complete CERT-In empaneled VAPT audit and establish board-ready evidentiary compliance records.",
  },
];

export const faqsData = [
  {
    question: "What is a consent management platform for NBFCs?",
    answer: "It is software that records, verifies and enforces each borrower's consent for every purpose an NBFC uses their data for. It shares consent changes with lending partners and systems and produces audit evidence. NBFCs use it to meet their DPDP Act 2023 duties alongside RBI's Digital Lending Directions.",
  },
  {
    question: "Do NBFCs need consent for KYC and credit bureau reporting?",
    answer: "Generally no. KYC, PMLA record keeping and reporting to credit information companies are required by law, and the DPDP Act treats compliance with law as a legitimate use under Section 7. NBFCs still have to give a notice, and they need consent for purposes such as marketing and cross-sell.",
  },
  {
    question: "What do RBI's Digital Lending Directions say about borrower data?",
    answer: "They require need-based collection with prior explicit consent and an audit trail. Lending apps may not access phone files, contacts or call logs. Camera, microphone or location can be accessed one time, only for onboarding and KYC. Borrowers get granular consent, including the option to ask for deletion.",
  },
  {
    question: "How does SecureCMS handle consent from DSAs and lending partners?",
    answer: "SecureCMS captures OTP-verified consent on partner or DSA journeys through redirect or embedded consent flows, stores it against the borrower's record, and sends any later change to partners and internal systems through APIs and webhooks.",
  },
  {
    question: "Can a borrower ask an NBFC to delete data after closing a loan?",
    answer: "Yes, but the NBFC can keep data a law requires, such as KYC and PMLA records held for five years after the relationship ends. The rest must be erased. SecureCMS logs which fields are kept, why, and until when.",
  },
  {
    question: "How should NBFCs control data used by collection agencies?",
    answer: "Agencies should receive only the data needed to recover the loan from the borrower. SecureCMS applies purpose- and field-level access rules along with role-based access, so collections teams see only what their purpose allows, and every access is logged.",
  },
  {
    question: "Is SecureCMS a registered Consent Manager?",
    answer: "No. SecureCMS is a consent management platform that NBFCs use as Data Fiduciaries. Registered Consent Managers are separate entities, registered with the Data Protection Board, and those provisions apply from 13 November 2026.",
  },
  {
    question: "When do DPDP obligations apply to NBFCs?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026. The remaining obligations, including notice, consent, rights requests and breach reporting, apply from 13 May 2027.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Platform for Fintech Companies",
    href: "/dpdp-compliance-platform/fintech",
    desc: "UPI payments, card tokenization, and multi-product consent governance.",
  },
  {
    title: "DPDP Platform for Banks",
    href: "/dpdp-compliance-platform/banking",
    desc: "Core banking system connectors, CBS integration, and RBI guidelines.",
  },
  {
    title: "SecureCookie CookieHub",
    href: "/cookiehub",
    desc: "Cookie consent and banner automation for NBFC portals and lending apps.",
  },
  {
    title: "DPDP Readiness Assessment",
    href: "/compliance/dpdp",
    desc: "Diagnostic toolkit and gap analysis for non-banking financial entities.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (Official Gazette)", url: "https://www.meity.gov.in" },
  { name: "RBI Guidelines on Digital Lending (Updated Directions 2025)", url: "https://rbi.org.in" },
  { name: "Prevention of Money Laundering (Maintenance of Records) Rules", url: "https://financialservices.gov.in" },
  { name: "RBI Master Direction – Non-Banking Financial Company", url: "https://rbi.org.in" },
];
