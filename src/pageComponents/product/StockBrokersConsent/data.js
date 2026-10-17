import React from "react";
import { 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Users, 
  Lock, 
  CheckCircle2, 
  AlertTriangle, 
  Server, 
  Smartphone, 
  Bell, 
  Database, 
  Clock, 
  Building2, 
  KeyRound, 
  Radio, 
  Share2 
} from "lucide-react";

export const stockBrokersConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/stock-brokers#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/stock-brokers",
      "name": "DPDP Compliance for Stock Brokers in India | SecureCMS",
      "description": "Separate SEBI-mandated processing from consent, capture OTP-verified client consent across trading apps and APs, keep audit-ready DPDP proof.",
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
        "name": "SEBI-registered stock brokers in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/stock-brokers#bc"
      },
      "dateModified": "2026-10-13"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/stock-brokers#bc",
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
          "name": "Stock Brokers",
          "item": "https://securedapp.io/dpdp-compliance-platform/stock-brokers"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does DPDP compliance mean for stock brokers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It means handling client personal data under the DPDP Act 2023 alongside SEBI rules. That covers clear notices, purpose-specific consent for uses beyond the law and the trading service, easy withdrawal, rights and grievance handling, control over Authorised Persons and vendors, and breach reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Do brokers need client consent for KYC and exchange reporting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. KYC through a KRA, UCC allocation and reporting to exchanges and depositories are required by SEBI rules, and the DPDP Act treats legal obligations as legitimate uses. Brokers still give a notice, and they need consent for marketing, profiling and cross-sell."
          }
        },
        {
          "@type": "Question",
          "name": "Is DDPI the same as consent under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A DDPI authorises a broker to debit or pledge securities for specific purposes. It does not cover the use of personal data. Brokers need DPDP notices and separate consent for marketing, profiling and data sharing, so the two should be kept as separate records."
          }
        },
        {
          "@type": "Question",
          "name": "Can a client ask a broker to delete data after closing the account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but the broker can keep records that SEBI rules, depository requirements or PMLA require it to retain, and must erase the rest. SecureCMS logs which fields are kept, the legal reason and the release date, so the broker can explain the partial erasure to the client."
          }
        },
        {
          "@type": "Question",
          "name": "Who is responsible for data collected by Authorised Persons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The broker remains responsible for purposes it decides, even when an Authorised Person collects the data. It should be able to show what the client agreed to and limit what the AP can see. SecureCMS records OTP-verified consent on AP journeys and applies role-based access."
          }
        },
        {
          "@type": "Question",
          "name": "How does the DPDP Act relate to SEBI's CSCRF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEBI's Cybersecurity and Cyber Resilience Framework sets cyber controls for regulated entities, brokers included. The DPDP Act requires reasonable security safeguards for personal data. Controls built for CSCRF can support DPDP safeguards, but DPDP adds duties on notice, consent and rights."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SecureCMS is a consent management platform that brokers use as Data Fiduciaries, inside their own systems. Registered Consent Managers are separate entities that register with the Data Protection Board once those provisions apply from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to stock brokers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. That is the date to plan your broker's rollout around."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "DPDP Compliance for Stock Brokers in India | SecureCMS",
  description: "Separate SEBI-mandated processing from consent, capture OTP-verified client consent across trading apps and APs, keep audit-ready DPDP proof. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/stock-brokers",
};

export const partnerLogos = [
  { name: "SEBI CSCRF Aligned", label: "Cyber Resilience Framework" },
  { name: "NSE & BSE Aligned", label: "Exchange Reporting Standards" },
  { name: "KRA / CKYC Compliant", label: "Statutory Verification Layer" },
  { name: "CDSL & NSDL Ready", label: "Depository Integration" },
];

export const jumpNavLinks = [
  { id: "overview", label: "Overview & Context" },
  { id: "sebi-vs-consent", label: "SEBI Duties vs Consent" },
  { id: "ddpi-not-consent", label: "DDPI ≠ DPDP Consent" },
  { id: "retention-erasure", label: "Retention vs Erasure" },
  { id: "touchpoints", label: "AP & App Touchpoints" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "modules", label: "SecureCMS Modules" },
  { id: "cscrf-security", label: "SEBI CSCRF Security" },
  { id: "integrations", label: "Trading Systems" },
  { id: "roadmap", label: "Roadmap to May 2027" },
  { id: "faqs", label: "Broker FAQs" },
];

export const sebiVsConsentTable = [
  {
    purpose: "KYC via KRA / CKYC",
    basis: "Legitimate use, legal obligation under SEBI & PMLA",
    whatSecureCmsDoes: "Notice and purpose record, no toggle (statutory processing)",
    isMandatory: true,
  },
  {
    purpose: "UCC, exchange and depository reporting",
    basis: "Legitimate use, legal obligation",
    whatSecureCmsDoes: "Tamper-proof purpose record without consent toggle",
    isMandatory: true,
  },
  {
    purpose: "Order execution, contract notes, settlement",
    basis: "Needed for the trading service the client contracted for",
    whatSecureCmsDoes: "Kept strictly separate from commercial marketing channels",
    isMandatory: true,
  },
  {
    purpose: "Records of phone orders and client communications",
    basis: "Legal obligation to retain (SEBI Broker Regulations)",
    whatSecureCmsDoes: "Statutory legal-hold reason locked when erasure is requested",
    isMandatory: true,
  },
  {
    purpose: "Suspicious transaction reporting (FIU-IND)",
    basis: "PMLA legal obligation",
    whatSecureCmsDoes: "Sits outside client consent; access logged immutably",
    isMandatory: true,
  },
  {
    purpose: "Marketing, product offers, newsletters",
    basis: "Consent",
    whatSecureCmsDoes: "OTP-verified opt-in, 1-click instant withdrawal",
    isMandatory: false,
  },
  {
    purpose: "Research-based nudges or profiling for stock recommendations",
    basis: "Consent",
    whatSecureCmsDoes: "Purpose-level consent with runtime API validation check before push",
    isMandatory: false,
  },
  {
    purpose: "Cross-sell (Mutual Funds, Insurance, Loans Against Securities - LAS)",
    basis: "Consent",
    whatSecureCmsDoes: "Unbundled per-product consent; separate toggle for each financial line",
    isMandatory: false,
  },
  {
    purpose: "Sharing with partners, referral programmes",
    basis: "Consent",
    whatSecureCmsDoes: "Consent sync via API or webhook; instant propagation on revocation",
    isMandatory: false,
  },
  {
    purpose: "Trading app analytics beyond service needs",
    basis: "Consent",
    whatSecureCmsDoes: "Runtime validation check before data feeds retargeting or analytics",
    isMandatory: false,
  },
];

export const touchpointsTable = [
  {
    touchpoint: "Online account opening (trading app / web)",
    commonProblem: "One single checkbox covers KYC, terms, marketing and partner sharing",
    solution: "Unbundled digital journey with distinct purpose toggles and clear Section 5 notices",
  },
  {
    touchpoint: "Authorised Persons (APs) and branch network",
    commonProblem: "Client documents and declarations collected on phones with no verifiable audit trail",
    solution: "AP partner portal with direct-to-client OTP verification and role-based field restrictions",
  },
  {
    touchpoint: "Phone dealing desk",
    commonProblem: "Orders are voice-recorded, but marketing consent is assumed or verbally taken without logs",
    solution: "Voice-order logging tagged as service necessity; marketing opt-in confirmed via SMS link",
  },
  {
    touchpoint: "Trading app (notifications, analytics, referrals)",
    commonProblem: "Client behavioural clickstream feeds algorithmic nudges without explicit consent",
    solution: "In-app granular preference centre with real-time SDK runtime suppression",
  },
  {
    touchpoint: "Research and advisory products",
    commonProblem: "Portfolio profiling is mixed into the general broking terms of service",
    solution: "Dedicated research profiling consent with purpose-specific withdrawal options",
  },
  {
    touchpoint: "Cross-sell (Mutual Funds, Insurance, LAS)",
    commonProblem: "Pre-ticked boxes or bundled consent for allied financial distribution products",
    solution: "Independent opt-ins for MF, Insurance and Lending Against Securities",
  },
  {
    touchpoint: "Minor and guardian-operated demat accounts",
    commonProblem: "No verifiable proof of parental or lawful guardian consent under Section 9",
    solution: "Verifiable parental consent module with DigiLocker/Aadhaar guardian verification",
  },
  {
    touchpoint: "Existing client base (Legacy)",
    commonProblem: "Pre-DPDP account forms that require fresh statutory notice under Section 5(2)",
    solution: "Automated multi-channel re-notice campaigns via WhatsApp, email and app notifications",
  },
];

export const secureCmsModules = [
  {
    problem: "Regulatory and marketing purposes mixed in onboarding",
    module: "Purpose Management, Data Catalogue & Templates",
    result: "Clear statutory split between legal duties and consent-based purposes",
  },
  {
    problem: "AP-collected client data with no verifiable proof",
    module: "OTP on Email, SMS & WhatsApp with Redirect/Embedded Flows",
    result: "Cryptographically verified client consent on every AP journey",
  },
  {
    problem: "APs browse more client data than operationally needed",
    module: "Multi-role RBAC with Purpose & Field-Level Enforcement",
    result: "Access strictly limited by partner role, geography and business purpose",
  },
  {
    problem: "Research nudges and offers sent after client withdrawal",
    module: "Instant Revocation with API & SDK Runtime Validation",
    result: "Consent evaluated in sub-50ms before every push notification or campaign",
  },
  {
    problem: "Erasure requests on closed trading and demat accounts",
    module: "DSR Automation, SLA Tracking & Policy Versioning",
    result: "Partial erasure executed; SEBI & PMLA records placed on locked statutory hold",
  },
  {
    problem: "Client grievances and DPO escalation delays",
    module: "Grievance Management, DPO Escalation & Audit Trail",
    result: "Documented, legally compliant dispute resolution with statutory SLA tracking",
  },
  {
    problem: "Evidence for SEBI inspection or Data Protection Board",
    module: "Blockchain-backed Logs, Compliance Reports & Auditor Role",
    result: "Exportable, read-only audit dossiers ready for SEBI, exchange and DPB drills",
  },
  {
    problem: "Client data spread across back-office and app silos",
    module: "AI Data Discovery, Classification & Inventory",
    result: "Comprehensive data map detailing where all client PII resides",
  },
];

export const cscrfLayers = [
  {
    layer: "Network",
    control: "Mutual TLS (mTLS), strict IP whitelisting and perimeter segmentation between trading engines and consent systems",
    icon: <Radio className="w-5 h-5 text-emerald-500" />,
  },
  {
    layer: "Application",
    control: "Public key cryptography, signed JWT authentication, and strict API rate limiting aligned with SEBI CSCRF guidelines",
    icon: <KeyRound className="w-5 h-5 text-blue-500" />,
  },
  {
    layer: "Data Integrity",
    control: "Blockchain-based immutable consent receipts, SHA-256 state logging, and cryptographic verification for audits",
    icon: <Lock className="w-5 h-5 text-teal-500" />,
  },
  {
    layer: "Access Control",
    control: "Multi-role RBAC, principle of least privilege, AP sub-broker data masking, and segregation of back-office duties",
    icon: <Users className="w-5 h-5 text-purple-500" />,
  },
  {
    layer: "Testing & Release",
    control: "Periodic CERT-In empaneled VAPT, automated dependency scanning, and isolated Dev, UAT and Production environments",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
  },
  {
    layer: "Operations & Resilience",
    control: "Real-time log telemetry, automated backup replication across Tier-IV Indian data centres, and distributed architecture",
    icon: <Server className="w-5 h-5 text-amber-500" />,
  },
];

export const implementationRoadmap = [
  {
    step: "1",
    title: "Map Client Data Across Ecosystem",
    desc: "Map all client PII across onboarding web/apps, trading engines, DP operations, AP networks, CRM and marketing tools.",
  },
  {
    step: "2",
    title: "Split SEBI & PMLA Duties from Consent",
    desc: "Tag KRA KYC, UCC and trade logs as legal obligations; isolate research nudges, MF cross-sell and profiling into consent purposes.",
  },
  {
    step: "3",
    title: "Deploy OTP Verification on App & AP Journeys",
    desc: "Integrate OTP verification for client consent across online onboarding and field AP tablets; enforce field-level data masking.",
  },
  {
    step: "4",
    title: "Re-Notify Existing Client Base",
    desc: "Execute Section 5(2) compliant notice campaigns to existing trading and demat account holders in major Indian languages.",
  },
  {
    step: "5",
    title: "Go Live with DSR Rights & DPO Escalation",
    desc: "Launch client self-service preference portals, automated DSR request handling, and grievance escalation to the designated DPO.",
  },
  {
    step: "6",
    title: "Run Inspection & Incident Response Drill",
    desc: "Export audit-ready compliance dossiers, test real-time nudge suppression, and simulate 72-hour DPB breach reporting.",
  },
];

export const milestoneDates = [
  {
    date: "13 November 2025",
    milestone: "DPDP Rules officially notified",
    scope: "Framework published; sets compliance timelines for regulated entities.",
  },
  {
    date: "13 November 2026",
    milestone: "Consent Manager provisions apply",
    scope: "Registration criteria and operational guidelines for interoperable Consent Managers.",
  },
  {
    date: "13 May 2027",
    milestone: "All remaining DPDP obligations apply",
    scope: "Mandatory enforcement of notices, consent, client rights, AP oversight and breach penalties.",
  },
];

export const faqsData = [
  {
    question: "What does DPDP compliance mean for stock brokers?",
    answer: "It means handling client personal data under the DPDP Act 2023 alongside SEBI rules. That covers clear notices, purpose-specific consent for uses beyond the law and the trading service, easy withdrawal, rights and grievance handling, control over Authorised Persons and vendors, and breach reporting.",
  },
  {
    question: "Do brokers need client consent for KYC and exchange reporting?",
    answer: "Generally no. KYC through a KRA, UCC allocation and reporting to exchanges and depositories are required by SEBI rules, and the DPDP Act treats legal obligations as legitimate uses. Brokers still give a notice, and they need consent for marketing, profiling and cross-sell.",
  },
  {
    question: "Is DDPI the same as consent under the DPDP Act?",
    answer: "No. A DDPI authorises a broker to debit or pledge securities for specific purposes. It does not cover the use of personal data. Brokers need DPDP notices and separate consent for marketing, profiling and data sharing, so the two should be kept as separate records.",
  },
  {
    question: "Can a client ask a broker to delete data after closing the account?",
    answer: "Yes, but the broker can keep records that SEBI rules, depository requirements or PMLA require it to retain, and must erase the rest. SecureCMS logs which fields are kept, the legal reason and the release date, so the broker can explain the partial erasure to the client.",
  },
  {
    question: "Who is responsible for data collected by Authorised Persons?",
    answer: "The broker remains responsible for purposes it decides, even when an Authorised Person collects the data. It should be able to show what the client agreed to and limit what the AP can see. SecureCMS records OTP-verified consent on AP journeys and applies role-based access.",
  },
  {
    question: "How does the DPDP Act relate to SEBI's CSCRF?",
    answer: "SEBI's Cybersecurity and Cyber Resilience Framework sets cyber controls for regulated entities, brokers included. The DPDP Act requires reasonable security safeguards for personal data. Controls built for CSCRF can support DPDP safeguards, but DPDP adds duties on notice, consent and rights.",
  },
  {
    question: "Is SecureCMS a registered Consent Manager?",
    answer: "No. SecureCMS is a consent management platform that brokers use as Data Fiduciaries, inside their own systems. Registered Consent Managers are separate entities that register with the Data Protection Board once those provisions apply from 13 November 2026.",
  },
  {
    question: "When do DPDP obligations apply to stock brokers?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. That is the date to plan your broker's rollout around.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act, 2023 (MeitY)", url: "https://www.meity.gov.in" },
  { name: "DPDP Rules 2025 Notification", url: "https://www.meity.gov.in" },
  { name: "SEBI Circular on DDPI Execution (4 April 2022)", url: "https://www.sebi.gov.in/legal/circulars/apr-2022/execution-of-demat-debit-and-pledge-instruction-ddpi-for-transfer-of-securities-towards-deliveries-settlement-obligations-and-pledging-re-pledging-of-securities_57546.html" },
  { name: "SEBI Clarification on DDPI (6 October 2022)", url: "https://www.sebi.gov.in/legal/circulars/oct-2022/execution-of-demat-debit-and-pledge-instruction-ddpi-for-transfer-of-securities-towards-deliveries-settlement-obligations-and-pledging-re-pledging-of-securities-clarification_63724.html" },
  { name: "SEBI Technical Clarifications on CSCRF (August 2025)", url: "https://www.sebi.gov.in/legal/circulars/aug-2025/technical-clarifications-to-cybersecurity-and-cyber-resilience-framework-cscrf-for-sebi-regulated-entities-res-_96329.html" },
  { name: "CERT-In Directions on Cyber Incident Reporting (28 April 2022)", url: "https://www.cert-in.org.in" },
];

export const neighbouringResources = [
  {
    title: "DPDP Platform for Fintech Companies",
    href: "/dpdp-compliance-platform/fintech",
    desc: "Investment apps, algorithmic trading tools, and multi-product consent governance.",
  },
  {
    title: "DPDP Platform for NBFCs & Lending",
    href: "/dpdp-compliance-platform/nbfc",
    desc: "Loans against securities (LAS), digital credit underwriting, and collection consent.",
  },
  {
    title: "DPDP Platform for Insurance Providers",
    href: "/dpdp-compliance-platform/insurance",
    desc: "Broking cross-sell, health & life coverage policies, and TPA data transfers.",
  },
  {
    title: "SecureCMS Core Consent Platform",
    href: "/dpdp-compliance-platform",
    desc: "Enterprise consent architecture, blockchain audit logs, and DSR automation.",
  },
];
