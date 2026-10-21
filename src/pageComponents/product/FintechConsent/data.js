export const fintechConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/fintech#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/fintech",
      "name": "Consent Management Platform for Fintech Companies | SecureCMS",
      "description": "Unified consent across payments, cards, lending and investments. Sync opt-outs in real time with partner banks and NBFCs under DPDP and RBI rules.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for Fintech",
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
        "name": "Fintech Companies, Neobanks, and Payment Aggregators in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/fintech#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/fintech#bc",
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
          "name": "Fintech",
          "item": "https://securedapp.io/dpdp-compliance-platform/fintech"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a consent management platform for fintech?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is software that records what each user has agreed to across every product in a fintech app, checks that consent before data is used, passes changes to partner banks and tools, and keeps tamper-proof records. Fintechs use it to meet DPDP Act 2023 duties on notice, consent, withdrawal and user rights."
          }
        },
        {
          "@type": "Question",
          "name": "Do payment apps need user consent for every transaction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. Section 7 of the DPDP Act allows processing of data a user voluntarily provides for a specific purpose, such as completing a payment they started. Consent is needed for other uses, such as marketing, credit offers or sharing data with partners."
          }
        },
        {
          "@type": "Question",
          "name": "How does SecureCMS work inside a fintech app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS provides native iOS, Android and Flutter SDKs and APIs. The app shows consent screens through embedded or redirect flows, SecureCMS stores the consent per product and purpose, and the app or backend checks consent at runtime before using the data."
          }
        },
        {
          "@type": "Question",
          "name": "Is Account Aggregator consent the same as DPDP consent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Account Aggregator consent covers sharing financial information through a licensed Account Aggregator under RBI's framework. When a fintech uses that data for its own purposes, DPDP duties on notice, purpose limitation and withdrawal still apply."
          }
        },
        {
          "@type": "Question",
          "name": "Who handles consent when a fintech partners with a bank or NBFC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on who decides the purpose. The fintech and the partner bank or NBFC can each be a Data Fiduciary for their own purposes. SecureCMS records which party each consent belongs to and syncs changes to partners."
          }
        },
        {
          "@type": "Question",
          "name": "Can a fintech delete a user's data on request if RBI rules require retention?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A fintech must erase data it no longer needs, but it can keep records a law requires, such as KYC records held after the relationship ends. SecureCMS logs which fields are kept, the legal reason and the release date, and erases the rest."
          }
        },
        {
          "@type": "Question",
          "name": "How do fintech apps handle users under 18?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For users under 18, the DPDP Act requires verifiable consent from a parent or lawful guardian and bars tracking, behavioural monitoring and targeted ads directed at children. SecureCMS has consent flows for minors and persons with disabilities that record guardian consent."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to fintech companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Consent Management Platform for Fintech Companies | SecureCMS",
  description: "Unified consent across payments, cards, lending and investments. Sync opt-outs in real time with partner banks and NBFCs under DPDP and RBI rules. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/fintech",
};

export const partnerLogos = [
  { name: "DSCI Certified Member", label: "DSCI Compliance Ready" },
  { name: "CySecK Evaluated", label: "Govt of Karnataka Cybersecurity CoE" },
  { name: "IFSCA FinTech Cohort", label: "GIFT City FinTech Sandbox" },
  { name: "IIT Kanpur C3iHub", label: "Cybersecurity Incubation Partner" },
];

export const jumpNavLinks = [
  { id: "transaction-vs-cross-sell", label: "Transaction vs Cross-Sell" },
  { id: "rbi-dpdp-matrix", label: "RBI & DPDP Dual Matrix" },
  { id: "product-matrix", label: "Multi-Product Consent" },
  { id: "embedded-finance", label: "Bank & Co-Fiduciary Sync" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "enterprise-modules", label: "Fintech Modules" },
  { id: "roadmap", label: "May 2027 Roadmap" },
  { id: "faqs", label: "Fintech FAQs" },
];

export const transactionVsConsentMatrix = [
  {
    activity: "Completing a UPI or card payment initiated by user",
    legalBasis: "Section 7 Legitimate Use (Voluntarily provided for specified purpose)",
    consentNeeded: "No separate popup needed",
    rule: "User actively triggers transaction; execution is contractually necessary. Notice still provided.",
  },
  {
    activity: "Cross-selling personal loans or credit cards using spend history",
    legalBasis: "Section 6(1) Explicit Consent",
    consentNeeded: "Mandatory Unbundled Consent",
    rule: "Must be a distinct, unbundled opt-in checkbox. Cannot be bundled into Terms of Service.",
  },
  {
    activity: "Sharing transaction records with insurance or investment partners",
    legalBasis: "Section 6(1) Explicit Consent + Co-Fiduciary Notice",
    consentNeeded: "Mandatory Partner Consent",
    rule: "Notice must identify third-party fiduciary categories and exact financial data items shared.",
  },
  {
    activity: "Credit bureau score pull (CIBIL / Experian / CRIF)",
    legalBasis: "RBI Digital Lending Directions + Section 6 Consent",
    consentNeeded: "Mandatory OTP Verified Consent",
    rule: "Must be standalone, explicitly timed permission; no evergreen bureau harvesting.",
  },
  {
    activity: "Card-on-File (CoF) tokenization registration",
    legalBasis: "RBI CoF Directive + Section 6 Consent",
    consentNeeded: "2FA / AFA Authentication Consent",
    rule: "Raw PAN never stored; consent binds token identifier and device binding.",
  },
  {
    activity: "Transaction monitoring for AML / CFT fraud detection",
    legalBasis: "Section 7 Legitimate Use + PMLA Statutory Duty",
    consentNeeded: "Exempt from Consent",
    rule: "Statutory fraud prevention obligation overrides user opt-out rights.",
  },
];

export const multiProductMatrix = [
  {
    product: "UPI & Peer-to-Peer Payments",
    dataCollected: "Mobile number, VPA handle, transaction amount, beneficiary details",
    purpose: "Payment routing and settlement via NPCI / PSP bank",
    governance: "Section 7 Legitimate Use + NPCI Guidelines",
  },
  {
    product: "Digital Lending & BNPL",
    dataCollected: "PAN, Aadhaar offline KYC, bank statements, employment details, bureau score",
    purpose: "Credit underwriting, loan disbursement and repayment scheduling",
    governance: "Section 6 Explicit Consent + RBI Digital Lending 2025",
  },
  {
    product: "WealthTech & Mutual Funds",
    dataCollected: "PAN, KYC records, bank mandate, risk profile assessment, portfolio holdings",
    purpose: "Executing trade orders with AMCs, SEBI regulatory compliance",
    governance: "Section 6 Consent + SEBI KYC Master Directions",
  },
  {
    product: "Co-Branded Credit Cards",
    dataCollected: "Income documents, address proof, phone, delivery address",
    purpose: "Card issuance through partner scheduled commercial bank",
    governance: "Dual Fiduciary Agreement (Fintech LSP + Issuer Bank)",
  },
];

export const enterpriseModules = [
  {
    title: "Omnichannel Consent Ledger",
    desc: "Single customer view across UPI, credit, cards and wealth. Every consent change cascades instantly to partner banks, CRM, and marketing systems.",
    badge: "Sub-100ms Sync",
  },
  {
    title: "Section 7 vs 6 Policy Engine",
    desc: "Automatically separates transactions executed under legitimate use from commercial cross-sell that demands explicit affirmative opt-in.",
    badge: "Regulatory Guardrail",
  },
  {
    title: "RBI CoF & Zero-Card Vault",
    desc: "SecureCMS stores consent audit receipts and token references only. Never touches or stores unencrypted PCI-DSS cardholder PAN data.",
    badge: "RBI 2018 Compliant",
  },
  {
    title: "PMLA Statutory Legal-Hold Engine",
    desc: "Automates Section 12 erasure requests while maintaining automated legal holds on 5-year statutory KYC and transaction ledgers.",
    badge: "PMLA / KYC Safe",
  },
  {
    title: "Partner Bank & NBFC Connectors",
    desc: "Bi-directional webhooks and mTLS REST APIs to sync borrower consent revivals and opt-outs with partner Core Banking Systems (CBS) and LMS.",
    badge: "Co-Fiduciary Ready",
  },
  {
    title: "Mobile App SDK Preference Center",
    desc: "Drop-in lightweight SDKs for iOS, Android, and Flutter. Gives users granular in-app toggles for marketing, analytics, and third-party sharing.",
    badge: "iOS / Android / Flutter",
  },
];

export const securityLayers = [
  {
    layer: "Data Localization Within India",
    detail: "100% cloud deployment in MeitY-empanelled Tier IV data centers in Mumbai and Hyderabad, complying strictly with RBI 2018 directive.",
  },
  {
    layer: "Cryptographic Consent Receipts",
    detail: "Every opt-in, revocation, and notice delivery is hashed using SHA-256 and signed with asymmetric key pairs for tamper-proof evidentiary proof.",
  },
  {
    layer: "Role-Based Access Control (RBAC)",
    detail: "Granular administrative privileges preventing customer support or sales reps from accessing unmasked financial identifiers.",
  },
  {
    layer: "Zero Card Data Storage",
    detail: "Engineered specifically so SecureCMS never stores card PANs, CVVs, or bank net-banking credentials; only consent lifecycle telemetry.",
  },
];

export const implementationRoadmap = [
  {
    phase: "Phase 1: Data Discovery & Legal Mapping",
    duration: "Weeks 1–2",
    milestone: "Classify all fintech data flows into Section 7 (Legitimate Use) vs Section 6 (Consent Required).",
  },
  {
    phase: "Phase 2: Multilingual Notice Configuration",
    duration: "Weeks 3–4",
    milestone: "Deploy unbundled statutory notices in English + 22 Eighth Schedule languages across mobile apps and web.",
  },
  {
    phase: "Phase 3: Mobile SDK Integration",
    duration: "Weeks 5–6",
    milestone: "Embed iOS, Android, and Flutter SDKs; connect app preference center to SecureCMS REST endpoints.",
  },
  {
    phase: "Phase 4: Partner Bank & NBFC Sync",
    duration: "Weeks 7–8",
    milestone: "Configure mTLS bi-directional webhooks with partner banks, card issuers, and lending underwriting engines.",
  },
  {
    phase: "Phase 5: DSR & Legal-Hold Automation",
    duration: "Weeks 9–10",
    milestone: "Automate user rights management; link PMLA 5-year retention rules to prevent unlawful premature erasure.",
  },
  {
    phase: "Phase 6: CISO Security Audit & Go-Live",
    duration: "Weeks 11–12",
    milestone: "VAPT certification, end-to-end sync stress testing, and board-level compliance sign-off ahead of 13 May 2027.",
  },
];

export const faqsData = [
  {
    question: "What is a consent management platform for fintech?",
    answer: "It is software that records what each user has agreed to across every product in a fintech app, checks that consent before data is used, passes changes to partner banks and tools, and keeps tamper-proof records. Fintechs use it to meet DPDP Act 2023 duties on notice, consent, withdrawal and user rights.",
  },
  {
    question: "Do payment apps need user consent for every transaction?",
    answer: "Generally no. Section 7 of the DPDP Act allows processing of data a user voluntarily provides for a specific purpose, such as completing a payment they started. Consent is needed for other uses, such as marketing, credit offers or sharing data with partners.",
  },
  {
    question: "How does SecureCMS work inside a fintech app?",
    answer: "SecureCMS provides native iOS, Android and Flutter SDKs and APIs. The app shows consent screens through embedded or redirect flows, SecureCMS stores the consent per product and purpose, and the app or backend checks consent at runtime before using the data.",
  },
  {
    question: "Is Account Aggregator consent the same as DPDP consent?",
    answer: "No. Account Aggregator consent covers sharing financial information through a licensed Account Aggregator under RBI's framework. When a fintech uses that data for its own purposes, DPDP duties on notice, purpose limitation and withdrawal still apply.",
  },
  {
    question: "Who handles consent when a fintech partners with a bank or NBFC?",
    answer: "It depends on who decides the purpose. The fintech and the partner bank or NBFC can each be a Data Fiduciary for their own purposes. SecureCMS records which party each consent belongs to and syncs changes to partners.",
  },
  {
    question: "Can a fintech delete a user's data on request if RBI rules require retention?",
    answer: "A fintech must erase data it no longer needs, but it can keep records a law requires, such as KYC records held after the relationship ends. SecureCMS logs which fields are kept, the legal reason and the release date, and erases the rest.",
  },
  {
    question: "How do fintech apps handle users under 18?",
    answer: "For users under 18, the DPDP Act requires verifiable consent from a parent or lawful guardian and bars tracking, behavioural monitoring and targeted ads directed at children. SecureCMS has consent flows for minors and persons with disabilities that record guardian consent.",
  },
  {
    question: "When do DPDP obligations apply to fintech companies?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Compliance Platform for Banks",
    href: "/dpdp-compliance-platform/banking",
    desc: "Core banking consent architecture, CBS connectors, and RBI compliance.",
  },
  {
    title: "Consent Management Platform for NBFCs",
    href: "/dpdp-compliance-platform/nbfc",
    desc: "RBI Digital Lending Directions 2025, zero-scraping onboarding, and LSP sync.",
  },
  {
    title: "SecureCookie CookieHub",
    href: "/cookiehub",
    desc: "Cookie consent and banner automation for financial web portals.",
  },
  {
    title: "DPDP Readiness Assessment",
    href: "/compliance/dpdp",
    desc: "Diagnostic toolkit and gap analysis for Indian financial fiduciaries.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (Gazette of India)", url: "https://www.meity.gov.in" },
  { name: "Draft DPDP Rules 2025 (Ministry of Electronics and IT)", url: "https://www.meity.gov.in" },
  { name: "RBI Directive on Storage of Payment System Data (April 2018)", url: "https://rbi.org.in" },
  { name: "RBI Guidelines on Digital Lending (Updated 2025)", url: "https://rbi.org.in" },
];
