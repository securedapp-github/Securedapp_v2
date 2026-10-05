export const bankingConsentSchema = {
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
};

export const metaData = {
  title: "Consent Management Platform for Banks in India | SecureCMS",
  desc: "Collect OTP-verified customer consent across branch, app and net banking, sync it with core banking and keep audit-ready DPDP records.",
  keywords: "consent management platform for banks, DPDP Act 2023 banking, DPDP Rules 2025 banks, bank consent management, core banking consent integration, Section 6(10) burden of proof, PMLA record retention vs DPDP erasure, bank DSR automation, Finacle consent connector",
  url: "https://securedapp.io/dpdp-compliance-platform/banking",
  image: "/assets/images/ProductPages/ss/hero.webp",
  customSchema: bankingConsentSchema,
};

export const partnerLogos = [
  {
    name: "DSCI",
    subtitle: "Data Security Council of India",
    badge: "Cybersecurity Partner",
    logo: "/assets/dpdp/dsci-logo.png",
    logoDark: "/assets/dpdp/dsci-bright.png",
    sizeClass: "h-16 sm:h-20 md:h-24 max-w-[260px] sm:max-w-[300px]",
  },
  {
    name: "CySecK",
    subtitle: "Govt of Karnataka CoE",
    badge: "CoE Innovation",
    logo: "/assets/dpdp/cyseck-logo.png",
    logoDark: "/assets/dpdp/cyseck-bright.png",
    sizeClass: "h-16 sm:h-20 md:h-24 max-w-[260px] sm:max-w-[300px]",
  },
  {
    name: "IFSCA",
    subtitle: "International Financial Services",
    badge: "FinTech Regulatory",
    logo: "/assets/dpdp/ifsca-logo.png",
    logoDark: "/assets/dpdp/ifsca-bright.png",
    sizeClass: "h-24 sm:h-28 md:h-32 max-w-[170px] sm:max-w-[200px]",
  },
  {
    name: "C3iHub",
    subtitle: "IIT Kanpur Cybersecurity Hub",
    badge: "Incubated Ecosystem",
    logo: "/assets/dpdp/c3ihub-logo.png",
    logoDark: "/assets/dpdp/c3ihub-bright.png",
    sizeClass: "h-22 sm:h-26 md:h-30 max-w-[180px] sm:max-w-[210px]",
  },
];

export const jumpNavLinks = [
  { label: "For Compliance & DPO", href: "#what-the-dpdp-act-changes-for-banks", badge: "Legal & DSR" },
  { label: "For CISO / IT Risk", href: "#security-and-deployment-for-bank-it-and-risk-teams", badge: "7-Layer Security" },
  { label: "For Digital Banking", href: "#integration-with-core-banking-and-bank-systems", badge: "CBS / SDK" },
  { label: "FAQs", href: "#frequently-asked-questions-about-consent-management-for-banks", badge: "8 Q&As" },
];

export const timelineData = [
  {
    date: "13 Nov 2025",
    title: "DPDP Rules Notified",
    desc: "DPDP Rules 2025 notified; Data Protection Board of India (DPBI) provisions came into force.",
    status: "In Force",
    active: true,
  },
  {
    date: "13 Nov 2026",
    title: "Consent Manager Provisions",
    desc: "Registration provisions for independent, DPBI-registered Consent Managers become effective.",
    status: "Upcoming",
    active: false,
  },
  {
    date: "13 May 2027",
    title: "Full Bank Obligations Live",
    desc: "Remaining statutory obligations apply: multilingual notice (Sec 5), affirmative consent (Sec 6), withdrawal parity (Sec 6(4)), DSR rights (Sec 11-14), breach reporting, and ₹250 Cr penalty exposure.",
    status: "Statutory Deadline",
    highlight: true,
    active: false,
  },
];

export const dpdpPillars = [
  {
    id: "sec-6",
    section: "Section 6",
    title: "Specific and Unambiguous Consent",
    summary: "Consent must name a purpose, cover only data that purpose strictly needs, and come through a clear affirmative action. One omnibus signature on an account-opening form that bundles banking, marketing, and insurance cross-sell fails the statutory test. Marketing, cross-selling, and analytics each require an independent choice.",
    icon: "CheckSquare",
    tag: "No Bundling",
  },
  {
    id: "sec-5",
    section: "Section 5",
    title: "Notices in English & 22 Indian Languages",
    summary: "Every consent request must be preceded by or accompanied with a notice listing the personal data collected, specific purpose, withdrawal method, and DPBI grievance procedure. Customers must be given the option to access the notice in English or any of the 22 languages specified in the Eighth Schedule of the Indian Constitution.",
    icon: "Languages",
    tag: "22 Languages",
  },
  {
    id: "sec-6-4",
    section: "Section 6(4)",
    title: "Withdrawal as Easy as Giving Consent",
    summary: "A customer who opted in via a mobile banking toggle must not be forced to visit a physical branch counter to untick it. Once consent is withdrawn, the bank and all downstream data processors (marketing automation, fintech partners, credit scoring engines) must immediately halt consent-based processing.",
    icon: "RefreshCw",
    tag: "Instant Revocation",
  },
  {
    id: "sec-10",
    section: "Section 10",
    title: "Significant Data Fiduciary (SDF) Duties",
    summary: "The Central Government may notify banks as Significant Data Fiduciaries based on the volume and sensitivity of personal data processed. Notified banks must appoint an India-based Data Protection Officer (DPO), engage an independent data auditor, and conduct periodic Data Protection Impact Assessments (DPIAs).",
    icon: "Building2",
    tag: "SDF Governance",
  },
  {
    id: "sec-8-6",
    section: "Section 8(6) & DPDP Rules",
    title: "Breach Reporting Within 72 Hours",
    summary: "Banks must promptly inform the Data Protection Board and each affected customer upon discovering a personal data breach, followed by a comprehensive detailed report within 72 hours under DPDP Rules. CERT-In's mandatory 6-hour reporting requirement for cybersecurity incidents operates concurrently.",
    icon: "AlertTriangle",
    tag: "Dual Reporting",
  },
  {
    id: "sec-33",
    section: "Schedule / Section 33",
    title: "Penalties Up to ₹250 Crore",
    summary: "Failing to take reasonable security safeguards to prevent personal data breaches incurs statutory penalties up to ₹250 crore. Failing to notify the Board and customers of a breach, or violating duties regarding children's data, carries penalties up to ₹200 crore.",
    icon: "ShieldAlert",
    tag: "₹250 Cr Max Penalty",
  },
];

export const bankingPurposesData = [
  {
    purpose: "KYC / CKYC verification",
    basis: "Data given for a specified purpose and required by law; notice still required (Sections 5 and 7)",
    secureCMSAction: "Records purpose, legal justification, and notice dispatch; no optional opt-in toggle",
    category: "Statutory / Essential",
  },
  {
    purpose: "PMLA record retention",
    basis: "Retention required by law (Section 8(7) DPDP Act; 5 years post-relationship)",
    secureCMSAction: "Blocks erasure for legally retained fields; logs immutable legal retention justification",
    category: "Statutory / Essential",
  },
  {
    purpose: "Credit information reporting (CICRA)",
    basis: "Disclosure required by law (Statutory mandate)",
    secureCMSAction: "Automated Purpose Catalogue entry; auditable disclosure logging",
    category: "Statutory / Essential",
  },
  {
    purpose: "Service alerts (OTP, transaction SMS)",
    basis: "Contractual / Needed to provide core service",
    secureCMSAction: "Isolated from marketing streams; zero marketing consent dependency",
    category: "Operational / Core",
  },
  {
    purpose: "Marketing SMS, email, WhatsApp",
    basis: "Explicit Affirmative Consent",
    secureCMSAction: "OTP-verified affirmative opt-in; instant single-click withdrawal sync",
    category: "Consent Required",
  },
  {
    purpose: "Cross-sell of insurance, mutual funds, cards",
    basis: "Explicit Affirmative Consent",
    secureCMSAction: "Per-product granular purpose consent with dedicated policy versioning",
    category: "Consent Required",
  },
  {
    purpose: "Sharing with fintech / co-lending partners",
    basis: "Consent or contractual necessity",
    secureCMSAction: "Real-time webhook notification; partner API token revocable in <250ms",
    category: "Consent Required",
  },
  {
    purpose: "Analytics and personalisation",
    basis: "Explicit Affirmative Consent",
    secureCMSAction: "Runtime validation check via SDK/API before profile data ingestion",
    category: "Consent Required",
  },
];

export const touchpointsData = [
  {
    touchpoint: "Branch account opening (paper or tablet)",
    problem: "Consent bundled into one signature on account opening form; no verifiable digital proof or timestamped record.",
    solution: "Branch Staff UI / Tablet workflow with unbundled checkboxes, multilingual notice display, and instant customer OTP verification.",
    icon: "Building",
  },
  {
    touchpoint: "Business correspondents & field agents",
    problem: "Remote agents on handheld POS devices collect customer data with zero verifiable record of what customer agreed to.",
    solution: "Lightweight Agent SDK with offline queue support, tamper-proof local signing, and customer SMS/WhatsApp OTP authorization.",
    icon: "Users",
  },
  {
    touchpoint: "Mobile banking app & net banking",
    problem: "Consent stored locally per app database, disconnected from Core Banking Systems (CBS) and central marketing tools.",
    solution: "Native iOS/Android/Flutter SDKs and Web embed syncing directly with centralized consent repository across all channels.",
    icon: "Smartphone",
  },
  {
    touchpoint: "Phone banking & call centre",
    problem: "Verbal consent collected by tele-callers without an auditable, tamper-proof customer authorization log.",
    solution: "Agent-initiated push verification: customer receives an instant WhatsApp or SMS confirmation link with real-time OTP validation.",
    icon: "PhoneCall",
  },
  {
    touchpoint: "WhatsApp banking",
    problem: "Transactional service messages and promotional marketing opt-ins mixed in single chat threads.",
    solution: "Conversational consent bot tree: clear granular opt-ins, bilingual menus, and automated keyword-based withdrawal handling.",
    icon: "MessageSquare",
  },
  {
    touchpoint: "Cards, loans & wealth digital journeys",
    problem: "Siloed consent per financial product line with no unified customer view across bank subsidiaries.",
    solution: "Unified Customer Information File (CIF) consent profile: changes reflect across credit cards, retail loans, and wealth management.",
    icon: "CreditCard",
  },
  {
    touchpoint: "Minor & guardian-operated accounts",
    problem: "Zero verifiable parental or lawful guardian consent flow as demanded by DPDP Section 9; risk of unlawful child data tracking.",
    solution: "Dedicated Minor & PwD workflow: captures verified lawful guardian identity, links CIF records, and enforces strict ad-tracking bans.",
    icon: "UserCheck",
  },
  {
    touchpoint: "Existing legacy customer base",
    problem: "Millions of pre-DPDP legacy depositors with omnibus consents requiring fresh statutory notice under Section 5(2).",
    solution: "Automated batch notice dispatch via SMS, Net Banking banners, and Mobile App prompts with automated affirmative response tracking.",
    icon: "Database",
  },
];

export const modulesData = [
  {
    problem: "Bundled consent at onboarding",
    module: "Purpose Management with Data Catalogue + Consent Templates",
    result: "Separate consent per purpose and product; unbundled policy versioning",
    icon: "Layers",
  },
  {
    problem: "No proof of consent at branch or via agents",
    module: "Consent Collection with OTP on Email/SMS/WhatsApp",
    result: "Verified, cryptographically signed, timestamped immutable record",
    icon: "KeyRound",
  },
  {
    problem: "Withdrawal not reaching all systems",
    module: "Instant Revocation Enforcement + Real-time Sync + Webhooks",
    result: "Marketing and partner systems halt consent-based processing immediately",
    icon: "RefreshCw",
  },
  {
    problem: "Campaigns sent to withdrawn customers",
    module: "API / SDK Runtime Validation",
    result: "Consent validity verified in real time before every message dispatch",
    icon: "ShieldCheck",
  },
  {
    problem: "Rights requests handled by email",
    module: "DSR Automation + SLA Tracking",
    result: "Tracked access, correction, and partial erasure with statutory countdown timers",
    icon: "FileCheck",
  },
  {
    problem: "Complaints with no escalation path",
    module: "Grievance Management + DPO Escalation + Feedback Module",
    result: "Documented grievance audit trail with automated DPO escalation alerts",
    icon: "Scale",
  },
  {
    problem: "Audit evidence spread across teams",
    module: "Blockchain-Backed Immutable Logs + Compliance Reports + Auditor Role",
    result: "Exportable cryptographic evidence; dedicated read-only access for RBI/internal auditors",
    icon: "Lock",
  },
  {
    problem: "Unknown personal data in legacy systems",
    module: "AI Data Discovery and Classification + Data Inventory",
    result: "Continuous automated map of where customer PII resides across banking silos",
    icon: "Search",
  },
  {
    problem: "Minor accounts and guardian consent",
    module: "Minor / PwD Consent Flows (Section 9 Compliance)",
    result: "Parental/lawful guardian verification recorded; ad tracking blocked by default",
    icon: "HeartHandshake",
  },
];

export const namedIntegrationsData = [
  {
    acronym: "TRIMS",
    fullName: "Treasury & Risk Information Management System",
    description: "Governs data feeds and consent boundaries for institutional dealing, forex, and market risk reporting.",
  },
  {
    acronym: "AIMS",
    fullName: "Asset & Investment Management System",
    description: "Enforces purpose-level customer consent before sharing portfolio telemetry with wealth management and mutual fund partners.",
  },
  {
    acronym: "NPA",
    fullName: "Non-Performing Asset Tracking & Recovery System",
    description: "Isolates legal debt recovery and statutory credit reporting records from promotional and cross-selling communications.",
  },
  {
    acronym: "GBM",
    fullName: "Global Banking & Markets Module",
    description: "Synchronizes institutional client and high-net-worth individual (HNI) privacy preferences across cross-border divisions.",
  },
  {
    acronym: "CHRIS",
    fullName: "Centralized Human Resources & Information System",
    description: "Applies role-based access control (RBAC) to ensure bank employees only access customer PII aligned with active consent.",
  },
];

export const securityLayers = [
  {
    layer: "Network",
    control: "mTLS 1.3, strict IP whitelisting, enterprise WAF, and DDoS mitigation",
    icon: "Network",
  },
  {
    layer: "Application",
    control: "Public key cryptography (RS256 / Ed25519) for data integrity and zero-secret token authentication",
    icon: "Cpu",
  },
  {
    layer: "Data Integrity",
    control: "Blockchain-based tamper-proof audit logs with cryptographic hash chaining (SHA-256)",
    icon: "Database",
  },
  {
    layer: "Access Control",
    control: "Multi-role RBAC, strict segregation of duties, organization-level tenancy, and super-admin controls",
    icon: "ShieldAlert",
  },
  {
    layer: "Assurance & Testing",
    control: "Comprehensive VAPT and multi-level automated testing by CERT-In empaneled security audit partners",
    icon: "FileCode",
  },
  {
    layer: "Release Governance",
    control: "Separate air-gapped Dev, UAT, Staging, and Production environments with zero telemetry leakage",
    icon: "GitBranch",
  },
  {
    layer: "Operations & HA",
    control: "24/7 SIEM monitoring, automated reporting, and distributed active-active database architecture for 99.99% availability",
    icon: "Activity",
  },
];

export const roadmapSteps = [
  {
    phase: "Phase 1",
    title: "Map Data and Purposes Across Products",
    deliverables: "Execute automated AI data discovery across core databases; catalog where customer PII sits; define distinct purpose IDs for retail, wealth, credit cards, and partner products.",
    status: "Step 01",
  },
  {
    phase: "Phase 2",
    title: "Draft and Translate Multilingual Notices",
    deliverables: "Author statutory Section 5 notices in English and all 22 Eighth Schedule Indian languages; configure immutable policy versioning in the SecureCMS repository.",
    status: "Step 02",
  },
  {
    phase: "Phase 3",
    title: "Integrate CBS, Mobile App, Net Banking & Branch Flows",
    deliverables: "Deploy native mobile SDKs (iOS, Android, Flutter); hook branch teller interfaces into SecureCMS APIs; establish real-time webhooks with Core Banking (CBS) and ESB layers.",
    status: "Step 03",
  },
  {
    phase: "Phase 4",
    title: "Transition Existing Legacy Customer Base",
    deliverables: "Send fresh statutory notices under Section 5(2) to existing depositors via SMS, WhatsApp, and in-app prompts; log affirmative consent responses with cryptographic timestamps.",
    status: "Step 04",
  },
  {
    phase: "Phase 5",
    title: "Go Live with DSR Automation & DPO Grievance Redressal",
    deliverables: "Operationalize customer self-service DSR portal for access, correction, and partial erasure; launch grievance ticketing with statutory SLA countdown monitors and DPO escalation alerts.",
    status: "Step 05",
  },
  {
    phase: "Phase 6",
    title: "Run Regulatory Audit Simulation & Downstream Drill",
    deliverables: "Export tamper-proof audit reports for internal audit and DPBI inspection; execute live revocation drills to verify downstream marketing and partner systems halt within 250ms.",
    status: "Step 06",
  },
];

export const comparisonData = [
  {
    requirement: "Purpose-level consent across products",
    basicBanner: "Website only; flat cookie categories",
    secureCMS: "All channels: Branch counters, CBS, Mobile App, Net Banking, WhatsApp, and Call Center",
  },
  {
    requirement: "Verified consent proof",
    basicBanner: "Anonymous browser click only; easily contested",
    secureCMS: "Cryptographic OTP on Email, SMS, or WhatsApp with immutable audit receipt",
  },
  {
    requirement: "Withdrawal enforced downstream",
    basicBanner: "No downstream connectivity; ignores CRM/CBS",
    secureCMS: "Instant webhook emission, real-time sync, and runtime API checks stopping processing in <250ms",
  },
  {
    requirement: "Rights requests, grievances & DPO escalation",
    basicBanner: "None; manual emails left in unmonitored inboxes",
    secureCMS: "Automated DSR workflow (access/correction/erasure) with SLA countdowns and DPO escalation",
  },
  {
    requirement: "Statutory conflict resolution (PMLA vs DPDP)",
    basicBanner: "No concept of banking retention mandates",
    secureCMS: "Intelligent Partial Erasure engine: deletes marketing data while locking PMLA 5-year records",
  },
  {
    requirement: "Tamper-proof audit evidence",
    basicBanner: "Ephemeral client-side browser cookies",
    secureCMS: "Blockchain-backed immutable logs, SHA-256 hash chains, and one-click regulatory audit exports",
  },
  {
    requirement: "Data discovery in legacy databases",
    basicBanner: "None",
    secureCMS: "Automated AI data discovery and classification across SQL/NoSQL banking data lakes",
  },
];

export const faqsData = [
  {
    question: "What is a consent management platform for banks?",
    answer: "A consent management platform for banks is enterprise software that records, verifies, and enforces each customer's consent for every specific purpose the bank processes their personal data—such as account servicing, cross-selling insurance or mutual funds, partner co-lending, and promotional marketing. It verifies the consent with OTP, stores a tamper-proof cryptographic audit trail, pushes updates across connected systems (branch, app, net banking, CBS) when consent changes or is withdrawn, and produces verifiable evidence for DPBI audits. Banks use it to fulfill DPDP Act 2023 and DPDP Rules 2025 mandates on notice, purpose limitation, withdrawal parity, and data principal rights.",
  },
  {
    question: "Do banks need customer consent for KYC under the DPDP Act?",
    answer: "Generally, no separate consent is needed for KYC verification. Data provided by a customer for KYC is processed for that specified statutory purpose under the Prevention of Money Laundering Act (PMLA) and RBI KYC Master Directions. Section 7 and Section 5 of the DPDP Act recognize processing required by existing law. However, the bank is still legally obligated to provide a Section 5 notice informing the customer of the personal data collected and its legal basis. Separate affirmative consent is strictly required for any purpose beyond KYC or core account servicing, such as third-party cross-selling, promotional marketing, or algorithmic profiling.",
  },
  {
    question: "Can a customer withdraw consent and keep their bank account?",
    answer: "Yes, absolutely. Under Section 6(4) of the DPDP Act, a customer has the right to withdraw consent at any time, with withdrawal as easy to execute as giving consent. Withdrawing consent only halts processing that relied specifically on consent—such as promotional SMS, WhatsApp marketing, or sharing data with fintech partners. The bank can and must continue processing personal data strictly necessary to operate the bank account or to satisfy statutory obligations (e.g. transaction alerts, tax deductions, PMLA reporting). Under Section 6(5), the customer bears the consequences of withdrawal, which the bank must clearly explain in its notice before the customer confirms revocation.",
  },
  {
    question: "How does SecureCMS connect with a core banking system (CBS)?",
    answer: "SecureCMS integrates with Core Banking Systems (CBS) such as Finacle, TCS BaNCS, and Oracle FLEXCUBE via enterprise REST APIs, webhooks, and Enterprise Service Bus (ESB) middleware. When a customer modifies or revokes consent in net banking or a mobile app, SecureCMS emits a sub-second webhook payload and updates the central consent repository. Connected core banking modules, marketing automation hubs, and partner gateways query the runtime validation API or receive the webhook event to instantly update customer status flags, ensuring withdrawn customers are dropped from campaign batches within 250 milliseconds.",
  },
  {
    question: "How long must a bank keep data after an erasure request (PMLA vs DPDP conflict)?",
    answer: "A bank must erase data it no longer needs when a customer exercises their right to erasure under Section 12, but it is legally empowered and required to retain records that existing law demands. Under the Prevention of Money Laundering Act (PMLA) Section 12 and RBI Master Directions, banks must preserve customer identification data and transaction logs for 5 years after the business relationship ends. SecureCMS resolves this through an Intelligent Partial Erasure Engine: it instantly deletes consent-dependent data (marketing profiles, analytics telemetry) while quarantining PMLA-mandated fields in an encrypted retention vault, logging the legal exemption under Sections 8(7) and 12(3) of the DPDP Act until the 5-year retention period lapses.",
  },
  {
    question: "How are minor accounts handled under the DPDP Act?",
    answer: "Under Section 9 of the DPDP Act, processing data of individuals under 18 years of age requires verifiable consent from a parent or lawful guardian. Furthermore, banks and data fiduciaries are strictly prohibited from engaging in tracking, behavioral monitoring, or targeted advertising directed at children. The same principles apply to individuals with disabilities under lawful guardianship. SecureCMS incorporates specialized Minor & PwD Consent Flows that verify and record the guardian's identity and affirmative OTP authorization, while programmatically flagging the CIF to block all downstream behavioral profiling and marketing outreach.",
  },
  {
    question: "Is SecureCMS a registered Consent Manager?",
    answer: "SecureCMS is an enterprise Consent Management Platform (CMP) operated directly by banks in their capacity as Data Fiduciaries to collect, govern, and prove consent from their own account holders. Registered Consent Managers are distinct third-party entities registered with the Data Protection Board of India (DPBI) under provisions that take effect on 13 November 2026, designed to let citizens manage multi-organization consents from a unified portal. Banks do not require a third-party Consent Manager to govern their internal systems; however, SecureCMS features open API adapters built to seamlessly receive, validate, and execute consent instructions forwarded by any DPBI-registered Consent Manager.",
  },
  {
    question: "When do DPDP obligations apply to banks?",
    answer: "The DPDP Rules were notified on 13 November 2025, establishing the Data Protection Board framework. Registration provisions for third-party Consent Managers apply from 13 November 2026. The core statutory obligations for banks—including Section 5 multilingual notices, Section 6 granular unbundled consent, Section 6(4) withdrawal parity, Data Subject Rights (DSR), DPO appointment, breach reporting within 72 hours, and statutory penalties up to ₹250 crore—apply from 13 May 2027. Note that MeitY discussed potential expedited compliance timelines for entities notified as Significant Data Fiduciaries (SDFs) in January 2026, so banks are advised to initiate discovery and architecture readiness immediately.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Consent Management Platform",
    desc: "Complete enterprise consent architecture for compliance with India's DPDP Act 2023.",
    url: "/dpdp-compliance-platform",
    badge: "Platform Overview",
  },
  {
    title: "Cookie Consent & SDK Hub",
    desc: "Zero-dependency, offline-first SDK for web and mobile consent governance.",
    url: "/cookie-hub",
    badge: "SDK Hub",
  },
  {
    title: "Consent Management for BFSI Under DPDP Rules 2025",
    desc: "Deep-dive legal and technical guide for commercial banks, NBFCs, and fintech fiduciaries.",
    url: "https://blog.securedapp.io/consent-management-bfsi-dpdp-rules-2025/",
    badge: "BFSI Guide",
    external: true,
  },
  {
    title: "DPDP Act Compliance Timeline (2026–2027)",
    desc: "Milestone breakdown of statutory deadlines, DPBI notification windows, and audit checkpoints.",
    url: "https://blog.securedapp.io/dpdp-act-compliance-timeline-2026-2027/",
    badge: "Timeline Guide",
    external: true,
  },
  {
    title: "Consent Management Platform vs Cookie Banner",
    desc: "Why basic web banners fail banking audits and how enterprise CMPs solve the Section 6(10) burden of proof.",
    url: "https://blog.securedapp.io/consent-management-platform-vs-cookie-banner-dpdp/",
    badge: "Audit Guide",
    external: true,
  },
  {
    title: "Must-Have Features of a DPDP Consent Platform",
    desc: "42-point architectural evaluation checklist for bank CISOs and compliance auditors.",
    url: "https://blog.securedapp.io/dpdp-consent-management-platform-india-audit-guide/",
    badge: "Feature Matrix",
    external: true,
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (MeitY)", url: "https://www.meity.gov.in" },
  { name: "DPDP Rules 2025 Gazette Notification (PIB / MeitY)", url: "https://pib.gov.in" },
  { name: "RBI Master Direction – Know Your Customer (KYC) Direction", url: "https://rbi.org.in" },
  { name: "CERT-In Cyber Incident Reporting Directions", url: "https://www.cert-in.org.in" },
];
