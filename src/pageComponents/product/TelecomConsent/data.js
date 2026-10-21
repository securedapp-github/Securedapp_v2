import React from "react";
import { 
  ShieldCheck, 
  FileText, 
  Users, 
  Radio, 
  Wifi, 
  Building2, 
  KeyRound, 
  Database, 
  Clock, 
  AlertTriangle, 
  Server, 
  CheckCircle2, 
  Lock, 
  Share2 
} from "lucide-react";

export const telecomConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/telecom#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/telecom",
      "name": "Consent Management for Telecom and ISPs | SecureCMS",
      "description": "For ISP Category A, B and C licence holders: record subscriber consent, separate KYC and IPDR duties from marketing, and keep audit-ready DPDP proof.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "publisher": {
          "@type": "Organization",
          "name": "SecureDApp",
          "legalName": "Vettedcode Technologies India Pvt. Ltd.",
          "url": "https://securedapp.io"
        }
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Internet service providers in India (Category A, B, C)"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/telecom#bc"
      },
      "dateModified": "2026-10-13"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/telecom#bc",
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
          "name": "Telecom and ISPs",
          "item": "https://securedapp.io/dpdp-compliance-platform/telecom"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the DPDP Act apply to internet service providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ISPs collect and process subscribers' personal data digitally, including KYC, billing and usage records, so every ISP, whether it holds a Category A, B or C authorisation, is a Data Fiduciary under the DPDP Act 2023 and must follow its rules on notice, consent, rights and breach reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Do ISPs need subscriber consent for KYC and IPDR logs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. Customer verification, keeping IPDR and login logs for the period the licence requires and lawful interception are legal and licence duties. ISPs should still tell subscribers what is collected and why, and they need consent for marketing, OTT bundle sharing and usage analytics."
          }
        },
        {
          "@type": "Question",
          "name": "Can a subscriber ask an ISP to delete their data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but the ISP must keep records its licence requires, such as IPDR and login logs held for at least two years under the Unified Licence. The rest must be erased. SecureCMS logs which records are kept, why and until when."
          }
        },
        {
          "@type": "Question",
          "name": "Are DPDP rules different for Category A, B and C ISPs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The DPDP Act applies the same way to all ISPs. The difference is scale: national ISPs handle more subscribers and partners and may be notified as Significant Data Fiduciaries, while local ISPs often collect data through franchisees. Your licence category shapes your DoT duties, not the DPDP rules."
          }
        },
        {
          "@type": "Question",
          "name": "Who is responsible for data collected by franchisees or cable partners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ISP remains responsible for purposes it decides, even when a franchisee or local cable operator collects the data. It should be able to show what the subscriber agreed to and limit what each partner can see. Role-based access in SecureCMS supports both."
          }
        },
        {
          "@type": "Question",
          "name": "Can ISPs share subscriber data with OTT partners for bundles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only on a proper basis, typically the subscriber's consent or what is needed to deliver the bundle they chose, and only the data required. SecureCMS records the purpose and passes consent changes to partners in real time, so a withdrawal reaches the bundle partner promptly."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SecureCMS is a consent management platform that ISPs use as Data Fiduciaries. A registered Consent Manager is a separate entity registered with the Data Protection Board, and the Consent Manager provisions of the DPDP Rules apply from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to ISPs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, subscriber rights and breach reporting, apply from 13 May 2027. Plan for the later date, but start early, because changing consent at field and franchisee level takes time."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Consent Management for Telecom and ISPs | SecureCMS",
  description: "For ISP Category A, B and C licence holders: record subscriber consent, separate KYC and IPDR duties from marketing, and keep audit-ready DPDP proof.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/telecom",
};

export const partnerLogos = [
  { name: "DoT Unified Licence Aligned", label: "DoT UL Compliance" },
  { name: "TRAI TCCCPR Architecture", label: "Commercial Communication Rules" },
  { name: "DSCI Certified Member", label: "DSCI Privacy Framework" },
  { name: "CERT-In Guidelines Aligned", label: "Cybersecurity Log Security" },
];

export const jumpNavLinks = [
  { id: "overview", label: "Overview" },
  { id: "categories", label: "Licence Categories (A, B, C)" },
  { id: "licence-vs-consent", label: "Licence Duties vs Consent" },
  { id: "ipdr-retention", label: "IPDR vs Erasure" },
  { id: "touchpoints", label: "Franchisee Touchpoints" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "modules", label: "SecureCMS Modules" },
  { id: "security", label: "Security & Localisation" },
  { id: "rollout-plan", label: "Rollout Plan" },
  { id: "faqs", label: "ISP FAQs" },
];

export const categoryMatrix = [
  {
    category: "Category A – National",
    badge: "National Authorisation",
    typicalProfile: "Large subscriber base, many partners, in-house compliance team",
    mainConsentRisk: "Marketing and OTT bundles at scale; usage analytics",
    sdfLikelihood: "Higher (may be notified as Significant Data Fiduciary)",
    secureCmsFit: "Tenants with multiple apps, APIs, webhooks and an Auditor role; integrations scoped with your IT team",
    borderClass: "border-emerald-500/30",
    bgClass: "bg-emerald-500/5",
  },
  {
    category: "Category B – Circle / Metro",
    badge: "Telecom Circle / Metro",
    typicalProfile: "Regional brand, franchise or reseller network across telecom circle",
    mainConsentRisk: "Franchisee-collected KYC and consent across multi-city networks",
    sdfLikelihood: "Depends on subscriber scale and regional market dominance",
    secureCmsFit: "Role-based access for franchise teams; OTP consent on partner journeys",
    borderClass: "border-blue-500/30",
    bgClass: "bg-blue-500/5",
  },
  {
    category: "Category C – SSA (Local)",
    badge: "SSA / District Level",
    typicalProfile: "Small team, local cable/LCO partners, cost-sensitive operations",
    mainConsentRisk: "Paper forms; WhatsApp-based collection and unverified signatures",
    sdfLikelihood: "Lower",
    secureCmsFit: "Quick start with OTP on SMS or WhatsApp and a simple management dashboard",
    borderClass: "border-amber-500/30",
    bgClass: "bg-amber-500/5",
  },
];

export const licenceVsConsentTable = [
  {
    purpose: "Subscriber KYC / customer verification",
    basis: "Licence and legal obligation",
    whatSecureCmsDoes: "Records the purpose; no consent toggle (statutory notice only)",
    isLicenceDuty: true,
  },
  {
    purpose: "IPDR and login/logout logs (Min 2 years under DoT UL amendment of 21 Dec 2021)",
    basis: "Licence obligation",
    whatSecureCmsDoes: "Keeps a legal-hold reason when subscriber erasure is requested",
    isLicenceDuty: true,
  },
  {
    purpose: "Lawful interception and government requests",
    basis: "Legal obligation",
    whatSecureCmsDoes: "Sits strictly outside consent; authorized access is tamper-proof logged",
    isLicenceDuty: true,
  },
  {
    purpose: "Billing, installation, fault repair, outage alerts",
    basis: "Needed to provide the service (Contractual)",
    whatSecureCmsDoes: "Kept completely apart from marketing channels",
    isLicenceDuty: true,
  },
  {
    purpose: "Plan upgrades and promotional offers (SMS, WhatsApp, calls)",
    basis: "Consent, plus TRAI commercial communication rules (TCCCPR)",
    whatSecureCmsDoes: "Granular marketing opt-in; 1-click instant withdrawal",
    isLicenceDuty: false,
  },
  {
    purpose: "Sharing data with OTT partners for bundles (Hotstar, SonyLIV, etc.)",
    basis: "Consent, or what the specific bundle chosen needs",
    whatSecureCmsDoes: "Consent changes passed on instantly by API or webhook",
    isLicenceDuty: false,
  },
  {
    purpose: "Usage analytics for marketing or profiling",
    basis: "Consent",
    whatSecureCmsDoes: "Runtime check before data is sent to analytics pipelines",
    isLicenceDuty: false,
  },
  {
    purpose: "Router/CPE diagnostics for network quality",
    basis: "Needed to provide the service",
    whatSecureCmsDoes: "Strictly purpose-limited; prohibits marketing reuse",
    isLicenceDuty: true,
  },
  {
    purpose: "Referral programmes and customer rewards",
    basis: "Consent",
    whatSecureCmsDoes: "Kept as a distinct, unbundled purpose toggle",
    isLicenceDuty: false,
  },
];

export const touchpointsTable = [
  {
    touchpoint: "New connection form (field team or franchisee)",
    commonProblem: "Paper KYC with one blanket signature covering connection and marketing",
    solution: "Mobile-based digital CAF with separate opt-in toggles and instant OTP proof",
  },
  {
    touchpoint: "Local cable operator / LCO partners",
    commonProblem: "No verifiable proof of what the subscriber actually agreed to",
    solution: "LCO partner portal with OTP verification sent directly to subscriber",
  },
  {
    touchpoint: "Self-care app and website",
    commonProblem: "Marketing and analytics opt-ins pre-ticked or bundled into terms",
    solution: "Unbundled, granular preference center with instant sync to billing",
  },
  {
    touchpoint: "Call centre and WhatsApp support",
    commonProblem: "Verbal or chat consent collected with no structured audit log",
    solution: "Agent-triggered SMS/WhatsApp consent approval links with real-time logs",
  },
  {
    touchpoint: "Plan upgrades and OTT bundles",
    commonProblem: "Subscriber data shared with third-party OTT partners without record",
    solution: "Automated partner webhook passing specific bundle entitlements only",
  },
  {
    touchpoint: "Public Wi-Fi / hotspot login",
    commonProblem: "OTP login mobile numbers harvested and reused for marketing blasts",
    solution: "Isolated hotspot consent directory; separate marketing opt-in checkbox",
  },
  {
    touchpoint: "Existing subscriber base (Legacy)",
    commonProblem: "Pre-DPDP forms that need fresh notice as soon as practicable (Section 5(2))",
    solution: "Automated batch re-consent campaigns via WhatsApp & SMS with tracking",
  },
];

export const secureCmsModules = [
  {
    problem: "One signature on the connection form",
    module: "Purpose Management, Data Catalogue & Templates",
    result: "Separate consent captured per distinct business purpose",
  },
  {
    problem: "Franchisee-collected consent with no proof",
    module: "OTP on Email/SMS/WhatsApp, Redirect & Embedded Flows",
    result: "Cryptographically verified consent receipt with timestamp and IP",
  },
  {
    problem: "Franchisees see all subscribers in region",
    module: "Multi-role RBAC, Tenant Separation & Admin Controls",
    result: "Each partner team sees only what its operational role allows",
  },
  {
    problem: "Promotions continue after subscriber opt-out",
    module: "Instant Revocation & API/SDK Runtime Validation",
    result: "Consent checked in real-time before each outbound campaign",
  },
  {
    problem: "OTT partners out of sync on plan downgrades",
    module: "Real-time Sync, Outbound Webhooks & Partner APIs",
    result: "Partners receive consent changes and de-provision bundles promptly",
  },
  {
    problem: "Erasure vs 2-year IPDR retention conflict",
    module: "DSR Automation, SLA Tracking & Policy Versioning",
    result: "Partial erasure executed; licence-mandated IPDR logs locked for 2 years",
  },
  {
    problem: "Complaints and regulatory escalations",
    module: "Grievance Management & DPO Escalation Workflows",
    result: "Documented, legally compliant grievance trail with SLA tracking",
  },
  {
    problem: "Evidence for audit or Board review",
    module: "Blockchain-backed Logs, Reports & Auditor Role",
    result: "Exportable, read-only evidence dossier ready for DoT and DPB audits",
  },
  {
    problem: "Subscriber data scattered across billing and CRM",
    module: "AI Data Discovery, Classification & Data Inventory",
    result: "Complete data map showing where every subscriber attribute resides",
  },
];

export const securityLayers = [
  {
    layer: "Network",
    control: "Mutual TLS (mTLS) and IP whitelisting for all ISP API connections",
    icon: <Radio className="w-5 h-5 text-emerald-500" />,
  },
  {
    layer: "Application",
    control: "Public key cryptography, secure JWT session tokens, and granular API rate limiting",
    icon: <KeyRound className="w-5 h-5 text-blue-500" />,
  },
  {
    layer: "Data Integrity",
    control: "Blockchain-based tamper-proof consent receipts with immutable cryptographic hashes",
    icon: <Lock className="w-5 h-5 text-teal-500" />,
  },
  {
    layer: "Access Control",
    control: "Multi-role RBAC, segregation of duties, franchise admin controls and super-admin logging",
    icon: <Users className="w-5 h-5 text-purple-500" />,
  },
  {
    layer: "Testing & Release",
    control: "Periodic CERT-In empaneled VAPT, multi-level testing, isolated Dev/UAT/Prod environments",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
  },
  {
    layer: "Hosting & Residency",
    control: "100% data localisation with consent records stored in Tier-IV Indian data centres (AWS Mumbai/MeitY empaneled)",
    icon: <Server className="w-5 h-5 text-amber-500" />,
  },
];

export const rolloutSteps = [
  {
    step: "1",
    title: "Data Mapping & Systems Inventory",
    desc: "Map subscriber personal data across CAF forms, billing engines, CRM, network AAA/RADIUS logs, self-care apps, franchisees and OTT partners.",
  },
  {
    step: "2",
    title: "Tag Licence Duties vs Consent",
    desc: "Classify KYC, IPDR (2-year DoT hold) and interception as licence duties. Segregate marketing, OTT bundles and profiling into distinct consent purposes.",
  },
  {
    step: "3",
    title: "Replace Paper CAF with OTP Verification",
    desc: "Deploy OTP-confirmed consent on SMS/WhatsApp across field installation engineers, LCOs and franchise retail counters.",
  },
  {
    step: "4",
    title: "Connect CRM & OTT Partner Webhooks",
    desc: "Integrate billing and CRM pipelines with SecureCMS APIs. Configure outbound webhooks so opt-outs propagate to Hotstar, SonyLIV, etc. in <80ms.",
  },
  {
    step: "5",
    title: "Re-Notify Existing Subscriber Base",
    desc: "Execute Section 5(2) compliant multi-lingual notice campaigns to legacy subscribers via WhatsApp, email and self-care app banners.",
  },
  {
    step: "6",
    title: "Deploy DSR Portal & Evidence Drills",
    desc: "Activate self-service subscriber preference centers, grievance management with DPO escalation, and run mock DPB audit drills.",
  },
];

export const faqsData = [
  {
    question: "Does the DPDP Act apply to internet service providers?",
    answer: "Yes. ISPs collect and process subscribers' personal data digitally, including KYC, billing and usage records, so every ISP, whether it holds a Category A, B or C authorisation, is a Data Fiduciary under the DPDP Act 2023 and must follow its rules on notice, consent, rights and breach reporting.",
  },
  {
    question: "Do ISPs need subscriber consent for KYC and IPDR logs?",
    answer: "Generally no. Customer verification, keeping IPDR and login logs for the period the licence requires and lawful interception are legal and licence duties. ISPs should still tell subscribers what is collected and why, and they need consent for marketing, OTT bundle sharing and usage analytics.",
  },
  {
    question: "Can a subscriber ask an ISP to delete their data?",
    answer: "Yes, but the ISP must keep records its licence requires, such as IPDR and login logs held for at least two years under the Unified Licence. The rest must be erased. SecureCMS logs which records are kept, why and until when.",
  },
  {
    question: "Are DPDP rules different for Category A, B and C ISPs?",
    answer: "No. The DPDP Act applies the same way to all ISPs. The difference is scale: national ISPs handle more subscribers and partners and may be notified as Significant Data Fiduciaries, while local ISPs often collect data through franchisees. Your licence category shapes your DoT duties, not the DPDP rules.",
  },
  {
    question: "Who is responsible for data collected by franchisees or cable partners?",
    answer: "The ISP remains responsible for purposes it decides, even when a franchisee or local cable operator collects the data. It should be able to show what the subscriber agreed to and limit what each partner can see. Role-based access in SecureCMS supports both.",
  },
  {
    question: "Can ISPs share subscriber data with OTT partners for bundles?",
    answer: "Only on a proper basis, typically the subscriber's consent or what is needed to deliver the bundle they chose, and only the data required. SecureCMS records the purpose and passes consent changes to partners in real time, so a withdrawal reaches the bundle partner promptly.",
  },
  {
    question: "Is SecureCMS a registered Consent Manager?",
    answer: "No. SecureCMS is a consent management platform that ISPs use as Data Fiduciaries. A registered Consent Manager is a separate entity registered with the Data Protection Board, and the Consent Manager provisions of the DPDP Rules apply from 13 November 2026.",
  },
  {
    question: "When do DPDP obligations apply to ISPs?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, subscriber rights and breach reporting, apply from 13 May 2027. Plan for the later date, but start early, because changing consent at field and franchisee level takes time.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act, 2023 (MeitY)", url: "https://www.meity.gov.in" },
  { name: "DoT Amendment on CDR/IPDR Storage (21 Dec 2021)", url: "https://dot.gov.in/sites/default/files/21122021%20UL%20CDR%20two%20years.pdf?download=1" },
  { name: "DoT eServices: Internet Service Authorisation (NSO)", url: "https://www.eservices.dot.gov.in/internet-service-authorisation-nso" },
  { name: "Principal Telecommunication Services Rules 2026 (G.S.R. 513(E))", url: "https://dot.gov.in" },
  { name: "TRAI Telecom Commercial Communications Customer Preference Reg. (TCCCPR)", url: "https://www.trai.gov.in" },
];

export const dpdpResources = [
  {
    title: "DPDP Platform for SaaS & Cloud Providers",
    href: "/dpdp-compliance-platform/saas",
    desc: "B2B multi-tenant architecture, fiduciary vs processor mapping, and AI training firewalls.",
  },
  {
    title: "DPDP Platform for Banking Institutions",
    href: "/dpdp-compliance-platform/banking",
    desc: "CBS sync, Account Aggregator integration, and Section 8(7) retention rules.",
  },
  {
    title: "DPDP Platform for E-Commerce & D2C",
    href: "/dpdp-compliance-platform/ecommerce",
    desc: "Unbundled checkout, abandoned cart consent, and WhatsApp marketing compliance.",
  },
  {
    title: "CookieHub Cookie Consent Automation",
    href: "/cookie-hub",
    desc: "Granular cookie banners and tag management aligned with Indian DPDP privacy norms.",
  },
];
