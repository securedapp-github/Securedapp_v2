export const saasConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/saas#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/saas",
      "name": "DPDP Compliance for SaaS Companies | SecureCMS",
      "description": "Map processor and fiduciary roles, honour customers' consent withdrawals in real time and give Indian enterprise buyers DPDP proof. Book a SaaS demo.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for SaaS",
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
        "name": "SaaS and IT companies serving India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/saas#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/saas#bc",
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
          "name": "SaaS",
          "item": "https://securedapp.io/dpdp-compliance-platform/saas"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the DPDP Act apply to SaaS companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A SaaS company that processes digital personal data of individuals in India, or that offers services to people in India from abroad, falls under the DPDP Act 2023. It acts as a Data Fiduciary for data it uses for its own purposes and as a Data Processor for customer data it handles."
          }
        },
        {
          "@type": "Question",
          "name": "Is a SaaS company a Data Fiduciary or a Data Processor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually both. It is a Data Fiduciary for data it decides to use, such as sign-ups, billing contacts and its own analytics, and a Data Processor for end-user data customers store in the product, where it acts on the customer's instructions."
          }
        },
        {
          "@type": "Question",
          "name": "Can SaaS companies host Indian customer data outside India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Act allows transfers except to countries the government restricts by notification. Sector rules can be stricter, so vendors serving banks, insurers or brokers may need to keep certain data in India."
          }
        },
        {
          "@type": "Question",
          "name": "Does the DPDP Act apply to foreign SaaS companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when they process digital personal data in connection with offering goods or services to people in India, even if the company and its servers are outside India."
          }
        },
        {
          "@type": "Question",
          "name": "Can we use customer data to train AI models?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only with a proper basis. Using customer data for your own model training usually makes you a Data Fiduciary for that purpose, so you need to tell customers and may need fresh consent from their users."
          }
        },
        {
          "@type": "Question",
          "name": "What must a SaaS processor do after a data breach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The processor should inform the affected customer quickly under its contract, and the customer, as Data Fiduciary, reports to the Data Protection Board and affected individuals under the DPDP Rules."
          }
        },
        {
          "@type": "Question",
          "name": "How does SecureCMS work with our product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS provides consent APIs, native iOS, Android and Flutter SDKs and webhooks. Your product receives consent changes in real time and checks consent before processing, with each customer's consent kept separate in a multi-tenant setup."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to SaaS companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. Plan your rollout against that date."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "DPDP Compliance for SaaS Companies | SecureCMS",
  description: "Map processor and fiduciary roles, honour customers' consent withdrawals in real time and give Indian enterprise buyers DPDP proof. Book a SaaS demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/saas",
};

export const partnerLogos = [
  { name: "DSCI Certified Member", label: "DSCI Compliance Ready" },
  { name: "CySecK Evaluated", label: "Govt of Karnataka Cybersecurity CoE" },
  { name: "IFSCA FinTech Cohort", label: "GIFT City FinTech Sandbox" },
  { name: "IIT Kanpur C3iHub", label: "Cybersecurity Incubation Partner" },
];

export const jumpNavLinks = [
  { id: "dual-roles", label: "Fiduciary vs Processor" },
  { id: "ai-training-firewall", label: "AI Model Training Rules" },
  { id: "enterprise-buyers", label: "Enterprise Due Diligence" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "developer-apis", label: "Developer SDKs & APIs" },
  { id: "enterprise-modules", label: "SaaS Modules" },
  { id: "roadmap", label: "May 2027 Roadmap" },
  { id: "faqs", label: "SaaS FAQs" },
];

export const dualRoleMatrix = [
  {
    category: "Sign-up & Account Creation",
    dataCollected: "Admin email, name, password hash, company name",
    role: "Data Fiduciary",
    legalBasis: "Section 7(a) Voluntary provision for account delivery",
  },
  {
    category: "Subscription Billing & Invoicing",
    dataCollected: "GSTIN, billing address, credit card token identifier",
    role: "Data Fiduciary",
    legalBasis: "Section 7 Legitimate Use + Tax / GST statutory obligation",
  },
  {
    category: "Multi-Tenant Customer Workspace",
    dataCollected: "Customer-uploaded contacts, leads, CRM records, files",
    role: "Data Processor",
    legalBasis: "Section 8(2) Contractual processing per customer instruction",
  },
  {
    category: "Internal Product Telemetry & Analytics",
    dataCollected: "Feature clickstream, session duration, browser type",
    role: "Data Fiduciary",
    legalBasis: "Section 7 Legitimate Use (Product improvement notice required)",
  },
  {
    category: "Internal AI Model Fine-Tuning",
    dataCollected: "Prompts, customer documents, conversation transcripts",
    role: "Data Fiduciary (Role Shift)",
    legalBasis: "Requires explicit DPA consent; processing outside processor scope",
  },
  {
    category: "Customer Support & Diagnostic Logs",
    dataCollected: "Error traces, crash reports, ticket attachments",
    role: "Data Processor",
    legalBasis: "Section 8(2) Support service level agreement",
  },
];

export const enterpriseModules = [
  {
    title: "Dual-Role Policy Engine",
    desc: "Maintains isolated data boundaries between what your SaaS owns as Data Fiduciary and multi-tenant customer records processed under Section 8(2).",
    badge: "Fiduciary vs Processor",
  },
  {
    title: "Real-Time Consent Ingestion Webhooks",
    desc: "Ingests end-user consent updates from customer apps and broadcasts suppression events across microservices and cache layers in sub-80ms.",
    badge: "Sub-80ms Ingestion",
  },
  {
    title: "AI Model Training Firewall",
    desc: "Dynamically strips customer PII and prevents multi-tenant customer documents from entering foundation model fine-tuning pipelines.",
    badge: "AI Guardrail",
  },
  {
    title: "Enterprise RFP Compliance Pack",
    desc: "Provides 1-click exportable DPDP compliance dossiers, Data Processing Addendums (DPA), and Cert-In VAPT proof to win Indian enterprise bids.",
    badge: "Enterprise Sales Moat",
  },
  {
    title: "Multi-Tenant Organization Isolation",
    desc: "Strict cryptographic and logical tenant segregation guaranteeing that consent receipts, DSR logs, and audit trails remain segregated per customer.",
    badge: "Tenant Isolation",
  },
  {
    title: "Global Privacy Harmonization Layer",
    desc: "Single unified consent API reconciling India's DPDP Act with GDPR (Europe), CPRA/CCPA (California), LGPD (Brazil), and PDPA (Singapore).",
    badge: "DPDP + GDPR + CPRA",
  },
];

export const implementationRoadmap = [
  {
    phase: "Phase 1: Fiduciary vs Processor Mapping",
    duration: "Weeks 1–2",
    milestone: "Classify all SaaS data flows, databases, and microservices into Data Fiduciary vs Data Processor roles.",
  },
  {
    phase: "Phase 2: Customer DPA & Sub-Processor Register",
    duration: "Weeks 3–4",
    milestone: "Draft Section 8(2) Data Processing Addendums and publish customer-facing sub-processor audit registries.",
  },
  {
    phase: "Phase 3: Real-Time Consent API Integration",
    duration: "Weeks 5–6",
    milestone: "Embed SecureCMS verification SDK; connect real-time webhook endpoints to customer opt-out pipelines.",
  },
  {
    phase: "Phase 4: AI Model Firewall & Cross-Border Audit",
    duration: "Weeks 7–8",
    milestone: "Audit model training pipelines; verify cloud hosting adherence to Section 16 cross-border transfer rules.",
  },
  {
    phase: "Phase 5: Multi-Tenant DSR Automation",
    duration: "Weeks 9–10",
    milestone: "Deploy self-service tenant export and erasure APIs enabling enterprise customers to fulfill user rights.",
  },
  {
    phase: "Phase 6: Enterprise RFP Ready & Go-Live",
    duration: "Weeks 11–12",
    milestone: "Publish enterprise security whitepaper, VAPT certification, and SOC2 / ISO compliance pack ahead of May 2027.",
  },
];

export const faqsData = [
  {
    question: "Does the DPDP Act apply to SaaS companies?",
    answer: "Yes. A SaaS company that processes digital personal data of individuals in India, or that offers services to people in India from abroad, falls under the DPDP Act 2023. It acts as a Data Fiduciary for data it uses for its own purposes and as a Data Processor for customer data it handles.",
  },
  {
    question: "Is a SaaS company a Data Fiduciary or a Data Processor?",
    answer: "Usually both. It is a Data Fiduciary for data it decides to use, such as sign-ups, billing contacts and its own analytics, and a Data Processor for end-user data customers store in the product, where it acts on the customer's instructions.",
  },
  {
    question: "Can SaaS companies host Indian customer data outside India?",
    answer: "The DPDP Act allows transfers except to countries the government restricts by notification. Sector rules can be stricter, so vendors serving banks, insurers or brokers may need to keep certain data in India.",
  },
  {
    question: "Does the DPDP Act apply to foreign SaaS companies?",
    answer: "Yes, when they process digital personal data in connection with offering goods or services to people in India, even if the company and its servers are outside India.",
  },
  {
    question: "Can we use customer data to train AI models?",
    answer: "Only with a proper basis. Using customer data for your own model training usually makes you a Data Fiduciary for that purpose, so you need to tell customers and may need fresh consent from their users.",
  },
  {
    question: "What must a SaaS processor do after a data breach?",
    answer: "The processor should inform the affected customer quickly under its contract, and the customer, as Data Fiduciary, reports to the Data Protection Board and affected individuals under the DPDP Rules.",
  },
  {
    question: "How does SecureCMS work with our product?",
    answer: "SecureCMS provides consent APIs, native iOS, Android and Flutter SDKs and webhooks. Your product receives consent changes in real time and checks consent before processing, with each customer's consent kept separate in a multi-tenant setup.",
  },
  {
    question: "When do DPDP obligations apply to SaaS companies?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. Plan your rollout against that date.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Platform for Fintech Companies",
    href: "/dpdp-compliance-platform/fintech",
    desc: "UPI payments, card tokenization, and multi-product consent governance.",
  },
  {
    title: "DPDP Platform for Ecommerce & D2C",
    href: "/dpdp-compliance-platform/ecommerce",
    desc: "Checkout unbundling, 3-year inactivity erasure, and WhatsApp marketing sync.",
  },
  {
    title: "SecureCookie CookieHub",
    href: "/cookiehub",
    desc: "Cookie consent and banner automation for modern SaaS applications.",
  },
  {
    title: "DPDP Readiness Assessment",
    href: "/compliance/dpdp",
    desc: "Diagnostic toolkit and gap analysis for B2B & B2C SaaS platforms.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (Section 8 Processor Duties)", url: "https://www.meity.gov.in" },
  { name: "Draft DPDP Rules 2025 (Cross-Border Section 16 Directives)", url: "https://www.meity.gov.in" },
  { name: "CERT-In Directions on Information Security Practices", url: "https://www.cert-in.org.in" },
  { name: "Ministry of Electronics & Information Technology (MeitY)", url: "https://www.meity.gov.in" },
];
