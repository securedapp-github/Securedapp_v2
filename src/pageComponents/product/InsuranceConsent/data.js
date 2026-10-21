export const insuranceConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/insurance#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/insurance",
      "name": "Consent Management for Insurance Companies | SecureCMS",
      "description": "Capture policyholder consent across agents, bancassurance and digital channels, limit TPA claims data use and keep audit-ready DPDP proof. Book a demo.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for Insurance",
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
        "name": "Life, General, Health Insurers, TPAs, and InsurTech in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/insurance#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/insurance#bc",
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
          "name": "Insurance",
          "item": "https://securedapp.io/dpdp-compliance-platform/insurance"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is consent management for insurance companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is how an insurer records, verifies and enforces each policyholder's consent for every purpose, from proposal to claim, across agents, bank partners and digital channels. A consent management platform does this in software, controls data shared with TPAs and partners, and keeps evidence for DPDP reviews."
          }
        },
        {
          "@type": "Question",
          "name": "Do insurers need consent to process health data for a claim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Processing needed to settle a claim the policyholder has filed is generally tied to that request, but using the same data for other purposes, such as analytics or marketing, needs a separate basis. Insurers should record the purpose for each use."
          }
        },
        {
          "@type": "Question",
          "name": "Who is responsible for consent collected by agents or banks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The insurer remains responsible for the purposes it decides, even when an agent, broker or bank collects the data. It should be able to show what the policyholder agreed to. SecureCMS records OTP-verified consent on partner journeys against the policyholder record."
          }
        },
        {
          "@type": "Question",
          "name": "Are TPAs data processors under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where a TPA processes policyholder data on the insurer's instructions to handle claims, it generally acts as a Data Processor and the insurer as the Data Fiduciary. The insurer must make sure the TPA uses data only for that purpose."
          }
        },
        {
          "@type": "Question",
          "name": "Can a policyholder ask an insurer to delete data after a policy lapses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but the insurer can keep records that a law requires it to retain. The rest must be erased. SecureCMS logs which fields are kept, the legal reason and the release date."
          }
        },
        {
          "@type": "Question",
          "name": "How should insurers handle telematics and wearable data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Telematics and wearable data is collected continuously, so it should sit under its own consent that the policyholder can withdraw at any time. SecureCMS stops downstream use as soon as consent is withdrawn and checks consent before each use."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS is a consent management platform that insurers use as Data Fiduciaries. Registered Consent Managers are separate entities registered with the Data Protection Board from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to insurance companies?",
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
  title: "Consent Management for Insurance Companies | SecureCMS",
  description: "Capture policyholder consent across agents, bancassurance and digital channels, limit TPA claims data use and keep audit-ready DPDP proof. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/insurance",
};

export const partnerLogos = [
  { name: "DSCI Certified Member", label: "DSCI Compliance Ready" },
  { name: "CySecK Evaluated", label: "Govt of Karnataka Cybersecurity CoE" },
  { name: "IFSCA FinTech Cohort", label: "GIFT City FinTech Sandbox" },
  { name: "IIT Kanpur C3iHub", label: "Cybersecurity Incubation Partner" },
];

export const jumpNavLinks = [
  { id: "unbundled-proposal", label: "Unbundled Proposal Consent" },
  { id: "burden-of-proof", label: "Agent & Bancassurance Proof" },
  { id: "tpa-limiting", label: "TPA & Claims Governance" },
  { id: "telematics-consent", label: "Telematics & Wearables" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "enterprise-modules", label: "Insurance Modules" },
  { id: "roadmap", label: "May 2027 Roadmap" },
  { id: "faqs", label: "Insurer FAQs" },
];

export const policyLifecycleMatrix = [
  {
    stage: "Proposal & Quotation Stage",
    activity: "Capturing personal, medical, and lifestyle data for underwriting",
    legalBasis: "Section 7(a) Voluntary proposal provision + Section 6",
    consentRule: "Unbundled opt-in for underwriting; separate opt-ins for cross-sell.",
  },
  {
    stage: "Policy Issuance & Active Servicing",
    activity: "Premium debit, endorsements, address changes, notices",
    legalBasis: "Contractual execution & Section 7 legitimate use",
    consentRule: "No separate popup for premium receipts or policy renewals.",
  },
  {
    stage: "Cashless Claim / TPA Adjudication",
    activity: "Sharing medical records with Third Party Administrator (TPA)",
    legalBasis: "Section 8(2) Data Processor Agreement + Requested Claim",
    consentRule: "Restricted strictly to claim adjudication; unrelated history masked.",
  },
  {
    stage: "Telematics & Driving Behavior (Motor)",
    activity: "GPS acceleration, speed, trip logging for dynamic pricing",
    legalBasis: "Section 6(1) Explicit Ongoing Consent",
    consentRule: "Continuous stream with instant in-app revocation toggle.",
  },
  {
    stage: "Juvenile Policy (Child Life/Health)",
    activity: "Processing child PII under 18 years of age",
    legalBasis: "Section 9 Verifiable Parental Consent",
    consentRule: "Mandatory guardian OTP; zero profiling or targeted advertising.",
  },
  {
    stage: "Lapsed Policy / DSR Erasure Request",
    activity: "Policyholder requests complete data purge post lapse",
    legalBasis: "Section 12 Erasure vs IRDAI / PMLA Legal Hold",
    consentRule: "Marketing purged; claim ledgers locked for 5 years under law.",
  },
];

export const enterpriseModules = [
  {
    title: "Omnichannel Proposal Consent Station",
    desc: "Captures unbundled OTP-verified consent at the point of sale across individual agents, POSPs, bancassurance bank counters, and online portals.",
    badge: "POSP / Agent Ready",
  },
  {
    title: "TPA & Surveyor Field-Level Redactor",
    desc: "Controls downstream data transmission to Third Party Administrators. Exposes only hospital bills and diagnosis codes, masking unrelated medical notes.",
    badge: "TPA Minimization",
  },
  {
    title: "Telematics & Wearables Consent Pipeline",
    desc: "Real-time consent gateway for pay-how-you-drive motor sensors and health wearables, with sub-100ms suppression webhooks upon withdrawal.",
    badge: "IoT / Telematics",
  },
  {
    title: "Section 9 Juvenile Policy Safe-Harbor",
    desc: "Verifies parental/guardian identity for child policies while automatically applying firewall rules to block behavioral profiling and marketing outreach.",
    badge: "Child Policy Guard",
  },
  {
    title: "IRDAI & PMLA Statutory Legal-Hold Engine",
    desc: "Enforces 5-year post-settlement or post-lapse retention rules to protect the insurer during fraud investigations and regulatory audits.",
    badge: "IRDAI / PMLA Vault",
  },
  {
    title: "Core Policy Admin Connectors",
    desc: "Turnkey API and message bus connectors for Guidewire, Duck Creek, SAP for Insurance, and custom Core Policy Administration Systems.",
    badge: "Guidewire / Duck Creek",
  },
];

export const implementationRoadmap = [
  {
    phase: "Phase 1: Distribution Channel & Proposal Audit",
    duration: "Weeks 1–2",
    milestone: "Eliminate blanket proposal clauses across agency, bancassurance, broker, and aggregator portals.",
  },
  {
    phase: "Phase 2: Point-of-Sale OTP Consent Deployment",
    duration: "Weeks 3–4",
    milestone: "Deploy direct policyholder mobile OTP verification across agent tablet apps and branch terminals.",
  },
  {
    phase: "Phase 3: Core PAS & Claims Engine Sync",
    duration: "Weeks 5–6",
    milestone: "Integrate with Guidewire / Duck Creek / SAP to synchronize consent records with policy master files.",
  },
  {
    phase: "Phase 4: TPA & Reinsurer Field-Level Redaction",
    duration: "Weeks 7–8",
    milestone: "Configure field-level access filters for external TPAs, motor loss surveyors, and reinsurers.",
  },
  {
    phase: "Phase 5: Telematics & DSR Legal-Hold Setup",
    duration: "Weeks 9–10",
    milestone: "Enable in-app preference center for telematics; lock 5-year IRDAI retention schedules for lapsed policies.",
  },
  {
    phase: "Phase 6: IRDAI Cyber Security & DPDP Go-Live",
    duration: "Weeks 11–12",
    milestone: "CERT-In empaneled VAPT sign-off, board audit committee presentation ahead of 13 May 2027.",
  },
];

export const faqsData = [
  {
    question: "What is consent management for insurance companies?",
    answer: "It is how an insurer records, verifies and enforces each policyholder's consent for every purpose, from proposal to claim, across agents, bank partners and digital channels. A consent management platform does this in software, controls data shared with TPAs and partners, and keeps evidence for DPDP reviews.",
  },
  {
    question: "Do insurers need consent to process health data for a claim?",
    answer: "Processing needed to settle a claim the policyholder has filed is generally tied to that request, but using the same data for other purposes, such as analytics or marketing, needs a separate basis. Insurers should record the purpose for each use.",
  },
  {
    question: "Who is responsible for consent collected by agents or banks?",
    answer: "The insurer remains responsible for the purposes it decides, even when an agent, broker or bank collects the data. It should be able to show what the policyholder agreed to. SecureCMS records OTP-verified consent on partner journeys against the policyholder record.",
  },
  {
    question: "Are TPAs data processors under the DPDP Act?",
    answer: "Where a TPA processes policyholder data on the insurer's instructions to handle claims, it generally acts as a Data Processor and the insurer as the Data Fiduciary. The insurer must make sure the TPA uses data only for that purpose.",
  },
  {
    question: "Can a policyholder ask an insurer to delete data after a policy lapses?",
    answer: "Yes, but the insurer can keep records that a law requires it to retain. The rest must be erased. SecureCMS logs which fields are kept, the legal reason and the release date.",
  },
  {
    question: "How should insurers handle telematics and wearable data?",
    answer: "Telematics and wearable data is collected continuously, so it should sit under its own consent that the policyholder can withdraw at any time. SecureCMS stops downstream use as soon as consent is withdrawn and checks consent before each use.",
  },
  {
    question: "Is SecureCMS a registered Consent Manager?",
    answer: "SecureCMS is a consent management platform that insurers use as Data Fiduciaries. Registered Consent Managers are separate entities registered with the Data Protection Board from 13 November 2026.",
  },
  {
    question: "When do DPDP obligations apply to insurance companies?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Platform for Healthcare & Hospitals",
    href: "/dpdp-compliance-platform/healthcare",
    desc: "Clinical emergency overrides, OPD/IPD intake, and hospital HIS integration.",
  },
  {
    title: "DPDP Platform for Banks",
    href: "/dpdp-compliance-platform/banking",
    desc: "Core banking system connectors, CBS integration, and RBI guidelines.",
  },
  {
    title: "SecureCookie CookieHub",
    href: "/cookiehub",
    desc: "Cookie consent and banner automation for insurance portals and aggregators.",
  },
  {
    title: "DPDP Readiness Assessment",
    href: "/compliance/dpdp",
    desc: "Diagnostic toolkit and gap analysis for Indian insurers and TPAs.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (Official Gazette)", url: "https://www.meity.gov.in" },
  { name: "IRDAI (Information and Cyber Security) Guidelines", url: "https://irdai.gov.in" },
  { name: "Insurance Regulatory and Development Authority Act 1999", url: "https://irdai.gov.in" },
  { name: "Prevention of Money Laundering (Maintenance of Records) Rules", url: "https://financialservices.gov.in" },
];
