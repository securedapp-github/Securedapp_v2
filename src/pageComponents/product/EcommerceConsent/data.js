export const ecommerceConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/ecommerce#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/ecommerce",
      "name": "Consent Management Platform for Ecommerce | SecureCMS",
      "description": "Capture checkout, cookie and WhatsApp marketing consent, sync opt-outs to every channel and meet DPDP rules for ecommerce and D2C brands. Book a demo.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for Ecommerce",
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
        "name": "Ecommerce and D2C Brands in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/ecommerce#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/ecommerce#bc",
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
          "name": "Ecommerce",
          "item": "https://securedapp.io/dpdp-compliance-platform/ecommerce"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a consent management platform for ecommerce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is software that records what each shopper has agreed to, such as marketing on WhatsApp, email, SMS or push, personalised recommendations and sharing data with partners. It shows consent screens at the right moment, sends opt-outs to every marketing tool in real time and keeps tamper-proof records for DPDP audits."
          }
        },
        {
          "@type": "Question",
          "name": "Do online stores need consent to process an order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. Using a shopper's details to take payment, ship the order, handle a return and send order updates is part of the purchase they asked for. Marketing, personalised recommendations and sharing data with partner brands need separate consent. Keep the two apart on screen so a shopper never has to accept offers to complete an order."
          }
        },
        {
          "@type": "Question",
          "name": "Is WhatsApp marketing allowed under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with the shopper's specific consent for WhatsApp marketing, a clear notice and an easy way to opt out. Order updates on WhatsApp are a different purpose from promotions and should be kept separate. SecureCMS records channel-level opt-ins, can verify them with an OTP, and syncs opt-outs to your connected tools."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 3-year inactivity rule for ecommerce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the DPDP Rules, an e-commerce entity with at least two crore registered users in India must erase a user's personal data after three years of inactivity. The store has to give 48 hours' notice first, so the user can log in and keep the account. Smaller stores are outside this specific rule, though the Act's general erasure duties still apply."
          }
        },
        {
          "@type": "Question",
          "name": "Is a cookie banner enough for DPDP compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A cookie banner covers tracking on the website, but the DPDP Act also covers consent for marketing channels, personalisation and partner sharing, along with shopper rights and grievances. SecureCMS handles shopper consent across channels, and CookieHub handles cookie consent."
          }
        },
        {
          "@type": "Question",
          "name": "Are logistics partners and payment gateways Data Processors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where they handle shopper data on the store's behalf to deliver orders or take payment, they generally act as Data Processors. The Act lets a store use a processor only under a valid contract, and the store stays responsible for how the data is handled. Some partners may be Data Fiduciaries for their own purposes."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SecureCMS is a consent management platform that online stores, acting as Data Fiduciaries, use to run their own consent and rights workflows. A registered Consent Manager is a separate role: an entity registered with the Data Protection Board under Rule 4 of the DPDP Rules, which applies from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to ecommerce businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. The Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights, breach reporting and the inactivity rule, apply from 13 May 2027. Online stores should plan against the May 2027 date."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Consent Management Platform for Ecommerce | SecureCMS",
  desc: "Capture checkout, cookie and WhatsApp marketing consent, sync opt-outs to every channel and meet DPDP rules for ecommerce and D2C brands. Book a demo.",
  keywords: "consent management platform for ecommerce, DPDP Act 2023 D2C, DPDP Rules 2025 ecommerce, WhatsApp marketing consent, checkout consent unbundling, 3-year inactivity rule, CookieHub, ad audience suppression",
  url: "https://securedapp.io/dpdp-compliance-platform/ecommerce",
  image: "/assets/images/ProductPages/ss/hero.webp",
  customSchema: ecommerceConsentSchema,
};

export const partnerLogos = [
  { name: "DSCI", subtitle: "Data Security Council of India", badge: "Cybersecurity Partner" },
  { name: "CySecK", subtitle: "Govt of Karnataka CoE", badge: "CoE Innovation" },
  { name: "IFSCA", subtitle: "Regulatory Sandbox FinTech", badge: "Regulatory CoE" },
  { name: "C3iHub", subtitle: "IIT Kanpur Cybersecurity Hub", badge: "Incubated Ecosystem" },
];

export const jumpNavLinks = [
  { label: "Founders", href: "#founders" },
  { label: "Growth & CRM", href: "#growth" },
  { label: "Engineering", href: "#engineering" },
  { label: "Legal / DPO", href: "#legal" },
  { label: "FAQs", href: "#faqs" },
];

export const storeTypes = [
  "D2C Brand",
  "Multi-Vendor Marketplace",
  "Quick Commerce",
  "Subscription Box",
  "Shopify & Custom Headless",
];

export const dpdpRequirementsData = [
  {
    req: "Notice in English or Eighth Schedule language",
    source: "DPDP Act s.5",
    solution: "Notice management with versioning across 22 Indian languages + English",
  },
  {
    req: "Separate, unambiguous consent; no pre-ticked or bundled boxes",
    source: "DPDP Act s.6",
    solution: "Purpose templates per channel and use (WhatsApp, SMS, Email, Push)",
  },
  {
    req: "Withdrawal as easy as giving consent",
    source: "DPDP Act s.6(4)",
    solution: "One-click opt-out synced to every marketing tool and CDP in <120ms",
  },
  {
    req: "Access, correction, erasure, grievance",
    source: "DPDP Act s.11–13",
    solution: "Automated DSR intake, SLA tracking, and DPO escalation workflows",
  },
  {
    req: "Processors used only under valid contract; store stays responsible",
    source: "DPDP Act s.8(1)–(2)",
    solution: "Purpose and field limits, webhooks, and tamper-proof processor audit logs",
  },
  {
    req: "Children under 18: verifiable parental consent; no targeted ads",
    source: "DPDP Act s.9",
    solution: "Minor & guardian consent flows with strict tracking SDK execution block",
  },
  {
    req: "Large e-commerce entities: erase after 3 years' inactivity, 48h notice",
    source: "DPDP Rules, Rule 8 & Third Schedule",
    solution: "Automated dormancy detection, 48-hour email/SMS alerts, and cryptographic erasure logs",
  },
  {
    req: "Breach intimation: DPDP 72-hour report, CERT-In 6-hour report",
    source: "DPDP Rules s.8(6) & CERT-In",
    solution: "Instant breach risk alerts, data forensics, and exportable audit trail",
  },
];

export const legalBasisMatrix = [
  {
    purpose: "Payment, shipping, returns, order updates",
    basis: "Needed for the purchase (Contractual/Specified Purpose)",
    solution: "Pre-locked purpose record; transparent notice at checkout",
  },
  {
    purpose: "Invoices and tax/GST records",
    basis: "Legal obligation (GST Act & Tax Laws)",
    solution: "Statutory legal-hold reason applied upon erasure request",
  },
  {
    purpose: "Email newsletter & promotional campaigns",
    basis: "Explicit Consent",
    solution: "Channel-level unticked opt-in with 1-click self-serve unsubscribe",
  },
  {
    purpose: "WhatsApp and SMS flash sale promotions",
    basis: "Explicit Consent",
    solution: "Channel-level opt-in; verifiable OTP confirmation where proof matters",
  },
  {
    purpose: "Mobile push notifications (promotional)",
    basis: "Explicit Consent",
    solution: "Mobile SDK permission dialogue with purpose-specific tagging",
  },
  {
    purpose: "Personalised recommendations from browsing history",
    basis: "Explicit Consent",
    solution: "Runtime validation check before recommending profiled products",
  },
  {
    purpose: "Retargeting pixels and ad custom audiences",
    basis: "Explicit Consent",
    solution: "Instant webhook sync to Meta Conversions API & Google Customer Match",
  },
  {
    purpose: "Loyalty and referral programmes",
    basis: "Explicit Consent",
    solution: "Unbundled opt-in upon program enrollment or post-purchase confirmation",
  },
  {
    purpose: "Sharing customer data with partner brands",
    basis: "Explicit Consent",
    solution: "Unbundled partner sharing consent via API / Webhook propagation",
  },
];

export const shopperJourneyData = [
  {
    step: "Landing & Browsing",
    moment: "Cookies & tracking pixels (CookieHub)",
    gap: "Ad pixels fire before shopper consent is granted",
    fix: "CookieHub script-blocking banner ensures zero pre-consent pixel firing",
  },
  {
    step: "Account Creation",
    moment: "Notice plus optional marketing opt-ins",
    gap: "Pre-ticked newsletter and partner checkboxes",
    fix: "Unbundled, unticked channel opt-ins with clear statutory notice",
  },
  {
    step: "Cart & Checkout",
    moment: "Order processing notice + WhatsApp updates",
    gap: "Bundling order updates and promotional marketing in one checkbox",
    fix: "Pre-locked order alerts; unbundled opt-in for marketing promotions",
  },
  {
    step: "Post-Purchase",
    moment: "Product reviews, referrals, loyalty points",
    gap: "Customer review content reused in external ads without consent",
    fix: "Explicit opt-in prompt before publishing user reviews or UGC in ads",
  },
  {
    step: "Marketing Outreach",
    moment: "WhatsApp, SMS, Email, Mobile Push",
    gap: "Opt-out on WhatsApp fails to sync with email and CRM lists",
    fix: "Single source of truth syncing opt-outs to all channels in <120ms",
  },
  {
    step: "Customer Support",
    moment: "Data access, correction, erasure (DSR)",
    gap: "Requests handled over untracked support emails with SLA breaches",
    fix: "Self-service privacy dashboard with automated DSR ticket routing",
  },
  {
    step: "Dormant Accounts",
    moment: "3-year inactivity notice & cryptographic erasure",
    gap: "No automated process for large platforms (>2 Cr users)",
    fix: "Automated 48-hour notification trigger and tamper-proof data purge",
  },
];

export const modulesData = [
  {
    problem: "One bundled checkbox for terms and marketing",
    module: "Purpose Management & Catalog",
    result: "Distinct, unticked consent per channel and purpose",
  },
  {
    problem: "Opt-out on store not reaching WhatsApp BSP or CRM",
    module: "Real-Time Webhooks & Connectors",
    result: "Instant <120ms synchronization across CDP, CRM, and ad tools",
  },
  {
    problem: "Campaigns sent to opted-out shoppers",
    module: "API/SDK Pre-Flight Runtime Validation",
    result: "Audience consent verified immediately prior to campaign send",
  },
  {
    problem: "No proof of WhatsApp promotional opt-in",
    module: "OTP Verification Engine",
    result: "Cryptographic, time-stamped proof of affirmative opt-in",
  },
  {
    problem: "Manual deletion requests via support tickets",
    module: "DSR Automation & SLA Tracker",
    result: "Standardized request logging, identity check, and verifiable erasure",
  },
  {
    problem: "Marketplace sellers or 3PLs see unnecessary PII",
    module: "Field-Level Access & Multi-Role RBAC",
    result: "Logistics sees delivery address only; seller sees order details only",
  },
  {
    problem: "Under-18 shoppers targeted with ads",
    module: "Minor / PwD Consent Engine",
    result: "Age gate with guardian consent and strict ad tracking block",
  },
  {
    problem: "Shopper data scattered across SaaS tools",
    module: "AI Data Discovery & Inventory",
    result: "Continuous visual map of all customer personal data repositories",
  },
];

export const securityLayers = [
  { layer: "Network", control: "mTLS and IP whitelisting for all API endpoints" },
  { layer: "Application", control: "Public key cryptography, signed tokens, API auth controls" },
  { layer: "Data Integrity", control: "Blockchain-based tamper-proof SHA-256 consent logs" },
  { layer: "Access Control", control: "Multi-role RBAC, organization and super-admin isolation" },
  { layer: "High Scale", control: "Distributed database architecture; multi-tenant isolation" },
];

export const rolloutSteps = [
  {
    step: "01",
    title: "Data Inventory",
    desc: "Map shopper data across your online store, app, CRM, marketing automation, and 3PL tools.",
  },
  {
    step: "02",
    title: "Split Purposes",
    desc: "Separate transactional order fulfillment from promotional marketing and cross-device profiling.",
  },
  {
    step: "03",
    title: "Checkout Redesign",
    desc: "Replace pre-ticked boxes with clean, unbundled channel opt-ins without adding checkout friction.",
  },
  {
    step: "04",
    title: "Connect Tech Stack",
    desc: "Wire real-time webhooks to CRM, WhatsApp BSP, and ad networks for instant opt-out propagation.",
  },
  {
    step: "05",
    title: "Re-Notify Customers",
    desc: "Send DPDP notice to existing customer database and record affirmative responses.",
  },
  {
    step: "06",
    title: "Rights & Inactivity",
    desc: "Go live with automated DSR intake and configure the 3-year inactivity rule if user base exceeds 2 Cr.",
  },
];

export const faqsData = ecommerceConsentSchema["@graph"][2].mainEntity;

export const dpdpResources = [
  { title: "Parent Hub: DPDP Compliance Platform", href: "/dpdp-compliance-platform" },
  { title: "CookieHub: Automated Cookie & Pixel Scanning", href: "/cookie-hub" },
  { title: "Fintech & Payments Consent Platform", href: "/dpdp-compliance-platform/fintech" },
  { title: "Banking Consent Management Platform", href: "/dpdp-compliance-platform/banking" },
];

export const officialSources = [
  { title: "DPDP Act 2023 (Official Gazette)", url: "https://www.meity.gov.in" },
  { title: "DPDP Rules 2025 (PIB Press Release)", url: "https://pib.gov.in" },
  { title: "CERT-In Cyber Incident Directions", url: "https://www.cert-in.org.in" },
];
