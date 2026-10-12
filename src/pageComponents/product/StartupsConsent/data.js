export const startupsConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/startups#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/startups",
      "name": "Consent Management Platform for Startups | SecureCMS",
      "description": "DPDP consent for startups without a legal team: set up notices, opt-ins, withdrawal and rights requests quickly, then scale as you grow. Book a demo.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for Startups",
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
        "name": "Startups and small businesses in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/startups#bc"
      },
      "dateModified": "2026-10-10"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/startups#bc",
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
          "name": "Startups",
          "item": "https://securedapp.io/dpdp-compliance-platform/startups"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the DPDP Act apply to startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The DPDP Act 2023 applies to any business processing digital personal data of people in India, with no turnover or user-count threshold. Startups carry the same core duties as everyone else on notice, consent, user rights, security safeguards and breach reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a startup exemption under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not currently. Section 17(3) allows the government to exempt notified startups from certain provisions, but no such exemption has been notified. Until one is, startups should plan to meet the full requirements by 13 May 2027, rather than waiting for a carve-out that may never come."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum a startup needs for DPDP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A clear notice, separate consent for marketing and analytics, an easy way to withdraw, a process for access, correction and deletion requests, a grievance contact, vendor contracts with processor terms, a breach plan, and records of all of it. The checklist above puts these in order."
          }
        },
        {
          "@type": "Question",
          "name": "Is a cookie banner enough for a startup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if your website is all you have and it only uses cookies. Most startups also collect data through sign-ups, apps, WhatsApp or email, and those need purpose-level consent and a way to withdraw that a cookie banner alone does not give you."
          }
        },
        {
          "@type": "Question",
          "name": "When should a startup set up consent management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before launch, or as early as you can manage. Retrofitting consent onto an existing user base means re-notifying every user and rebuilding records you should have kept from the start. Setting it up at MVP stage keeps your data clean from day one and saves a painful clean-up later."
          }
        },
        {
          "@type": "Question",
          "name": "How does DPDP compliance help with fundraising and sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Investors increasingly look at data practices during due diligence, and enterprise customers send privacy questionnaires before they sign. Having consent records, rights-request logs and vendor controls ready to share shortens both processes and spares your founders a scramble for documents."
          }
        },
        {
          "@type": "Question",
          "name": "How much does SecureCMS cost for a startup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on the number of users and products you run, so quotes are given individually rather than from a fixed price list. Book a startup demo to get a quote that fits your stage and your team's size."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to startups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. For most startups, that last date is the one to plan around."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Consent Management Platform for Startups | SecureCMS",
  desc: "DPDP consent for startups without a legal team: set up notices, opt-ins, withdrawal and rights requests quickly, then scale as you grow. Book a demo.",
  description: "DPDP consent for startups without a legal team: set up notices, opt-ins, withdrawal and rights requests quickly, then scale as you grow. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/startups",
  url: "https://securedapp.io/dpdp-compliance-platform/startups",
  image: "/assets/images/ProductPages/ss/hero.webp",
  keywords: "consent management platform for startups, DPDP compliance for startups, DPDP startup exemption, Section 17(3) DPDP Act, startup privacy engineering India, investor due diligence DPDP, enterprise privacy questionnaire"
};

export const partnerLogos = [
  { name: "C3iHub IIT Kanpur", label: "Incubated CoE" },
  { name: "CySecK Karnataka", label: "State Cybersecurity Hub" },
  { name: "DSCI National CoE", label: "Data Security Council" },
  { name: "IFSCA Sandbox", label: "Fintech Regulatory Sandbox" },
  { name: "Startup India", label: "Ecosystem Partner" }
];

export const stagesMatrix = [
  {
    stage: "MVP / Pre-Seed",
    requirements: "Privacy notice; separate opt-ins for marketing and analytics; easy withdrawal; grievance contact",
    solution: "Consent templates; embedded or redirect flows; self-serve preference centre",
    badge: "Day 1 Essentials"
  },
  {
    stage: "Seed",
    requirements: "Rights requests (access, correction, deletion); vendor list and contracts; breach plan",
    solution: "DSR automation with SLA tracking; purpose limits for vendors; risk alerts",
    badge: "Scale Traction"
  },
  {
    stage: "Series A",
    requirements: "Consent checks before data use across tools; role-based access; retention rules",
    solution: "API/SDK runtime validation; RBAC; automated policy versioning",
    badge: "Institutional Growth"
  },
  {
    stage: "Selling to Enterprises",
    requirements: "Evidence for security and DPDP questionnaires; immutable audit trail",
    solution: "Blockchain-backed logs; compliance reports; Auditor read-only role",
    badge: "B2B Procurement"
  },
  {
    stage: "Going Global",
    requirements: "GDPR, CPRA, LGPD and PDPA consent alongside DPDP",
    solution: "Unified multi-regulation policy framework across regional jurisdictions",
    badge: "Cross-Border Scale"
  }
];

export const tenPointChecklist = [
  {
    num: "01",
    title: "Data Inventory",
    desc: "List the personal data you collect and every tool that touches it (CRM, WhatsApp, analytics, pixels, payment gateway)."
  },
  {
    num: "02",
    title: "Multi-Language Notice",
    desc: "Publish a plain-language notice in English and the Indian languages your target users speak."
  },
  {
    num: "03",
    title: "Unbundled Consent",
    desc: "Take separate opt-ins for marketing, analytics and partner sharing. Strictly ban pre-ticked checkboxes."
  },
  {
    num: "04",
    title: "Firewall Trackers",
    desc: "Stop analytics SDKs and ad pixels from executing prior to user consent. (Websites: see CookieHub)."
  },
  {
    num: "05",
    title: "1-Click Withdrawal",
    desc: "Give users a simple preference center to withdraw consent, propagating instantly to all downstream tools."
  },
  {
    num: "06",
    title: "DSR Automation",
    desc: "Set up workflows for data access, correction and deletion requests, with one named owner to respond."
  },
  {
    num: "07",
    title: "Grievance Contact",
    desc: "Name an accessible Data Grievance Redressal Officer on your app and website."
  },
  {
    num: "08",
    title: "Vendor Processor Terms",
    desc: "Put processor terms and DPAs in your vendor contracts so each tool acts only on your documented instructions."
  },
  {
    num: "09",
    title: "Breach Protocol",
    desc: "Write an incident escalation plan: who informs the DPB, affected users, and who reports to CERT-In within 6 hours."
  },
  {
    num: "10",
    title: "Audit Evidence",
    desc: "Maintain cryptographically signed, timestamped logs of all consent events and rights requests."
  }
];

export const buildVsBuyMatrix = [
  {
    dimension: "Consent Capture",
    inHouse: "A form and a single database table (brittle when adding fields)",
    secureCms: "Purpose templates, OTP verification, embedded and redirect flows"
  },
  {
    dimension: "Withdrawal Across Tools",
    inHouse: "Custom fragile cron scripts syncing CRM, WhatsApp, ads, and DB",
    secureCms: "Real-time sync, webhooks, sub-120ms runtime API enforcement"
  },
  {
    dimension: "Rights Requests (DSR)",
    inHouse: "A shared support inbox and manual database deletion queries",
    secureCms: "Automated self-serve DSR workflows with built-in statutory SLA timers"
  },
  {
    dimension: "Regulatory Evidence",
    inHouse: "Mutable application logs that fail enterprise security reviews",
    secureCms: "Tamper-proof blockchain logs, exportable reports, read-only Auditor role"
  },
  {
    dimension: "Ongoing Maintenance",
    inHouse: "1-2 full-time engineers diverted from shipping core features",
    secureCms: "Zero maintenance overhead; continuously updated for DPDP Rules"
  }
];

export const problemModuleResults = [
  {
    problem: "No time to design consent flows or forms",
    module: "Consent Templates + Purpose Management",
    result: "Live, compliant consent screens deployed in less than 24 hours"
  },
  {
    problem: "Analytics and ads firing before user agreement",
    module: "API/SDK Runtime Validation + CookieHub",
    result: "Automated firewall: tools process data only after affirmative consent"
  },
  {
    problem: "Users emailing founders to unsubscribe or delete account",
    module: "Self-Serve Preference Centre + DSR Engine",
    result: "Zero manual intervention: instant self-serve preference updates"
  },
  {
    problem: "Investors or enterprise prospects asking for compliance proof",
    module: "Blockchain-Backed Logs + Compliance Reports",
    result: "1-click exportable audit receipts that clear diligence questionnaires"
  },
  {
    problem: "Launching a second product or entering international markets",
    module: "Multi-Tenant Architecture + Multi-Regulation Policies",
    result: "Unified consent infrastructure scaling across DPDP, GDPR, CPRA & LGPD"
  }
];

export const industryGuides = [
  {
    sector: "Fintech, Lending & Investing",
    linkText: "Explore Fintech & NBFC Architecture",
    href: "/dpdp-compliance-platform/fintech",
    desc: "UPI transactional consent, credit bureau sharing, and RBI digital lending alignment."
  },
  {
    sector: "EdTech & Learning Platforms",
    linkText: "Explore EdTech & Minor Architecture",
    href: "/dpdp-compliance-platform/edtech",
    desc: "Verifiable parental consent, minor tracking prohibitions under Section 9, and LMS connectors."
  },
  {
    sector: "Schools & Educational Trusts",
    linkText: "Explore School DPDP Compliance",
    href: "/dpdp-compliance-platform/schools",
    desc: "Rule 12 educational & safety exemptions, photo consent, bus GPS tracking, and WhatsApp groups."
  },
  {
    sector: "Healthcare & Telemedicine",
    linkText: "Explore Healthcare & Patient Architecture",
    href: "/dpdp-compliance-platform/healthcare",
    desc: "EHR/HIS integration, emergency triage Section 7(d) exceptions, and lab data sharing."
  },
  {
    sector: "E-Commerce & D2C Brands",
    linkText: "Explore E-Commerce & D2C Architecture",
    href: "/dpdp-compliance-platform/ecommerce",
    desc: "Cart checkout unbundling, 3-year inactivity erasure rules, and ad suppression APIs."
  },
  {
    sector: "SaaS & Cloud Applications",
    linkText: "Explore SaaS Multi-Tenant Architecture",
    href: "/dpdp-compliance-platform/saas",
    desc: "Dual-mode Data Fiduciary vs Processor framework, enterprise DPAs, and multi-tenant isolation."
  }
];

export const faqsData = [
  {
    q: "Does the DPDP Act apply to startups?",
    a: "Yes. The DPDP Act 2023 applies to any business processing digital personal data of people in India, with no turnover or user-count threshold. Startups carry the same core duties as everyone else on notice, consent, user rights, security safeguards and breach reporting."
  },
  {
    q: "Is there a startup exemption under the DPDP Act?",
    a: "Not currently. Section 17(3) allows the government to exempt notified startups from certain provisions, but no such exemption has been notified. Until one is, startups should plan to meet the full requirements by 13 May 2027, rather than waiting for a carve-out that may never come."
  },
  {
    q: "What is the minimum a startup needs for DPDP?",
    a: "A clear notice, separate consent for marketing and analytics, an easy way to withdraw, a process for access, correction and deletion requests, a grievance contact, vendor contracts with processor terms, a breach plan, and records of all of it. The checklist above puts these in order."
  },
  {
    q: "Is a cookie banner enough for a startup?",
    a: "Only if your website is all you have and it only uses cookies. Most startups also collect data through sign-ups, apps, WhatsApp or email, and those need purpose-level consent and a way to withdraw that a cookie banner alone does not give you."
  },
  {
    q: "When should a startup set up consent management?",
    a: "Before launch, or as early as you can manage. Retrofitting consent onto an existing user base means re-notifying every user and rebuilding records you should have kept from the start. Setting it up at MVP stage keeps your data clean from day one and saves a painful clean-up later."
  },
  {
    q: "How does DPDP compliance help with fundraising and sales?",
    a: "Investors increasingly look at data practices during due diligence, and enterprise customers send privacy questionnaires before they sign. Having consent records, rights-request logs and vendor controls ready to share shortens both processes and spares your founders a scramble for documents."
  },
  {
    q: "How much does SecureCMS cost for a startup?",
    a: "Pricing depends on the number of users and products you run, so quotes are given individually rather than from a fixed price list. Book a startup demo to get a quote that fits your stage and your team's size."
  },
  {
    q: "When do DPDP obligations apply to startups?",
    a: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, rights and breach reporting, apply from 13 May 2027. For most startups, that last date is the one to plan around."
  }
];

export const dpdpResources = [
  {
    title: "DPDP Consent Management Platform Overview",
    desc: "Complete enterprise architecture for India's Digital Personal Data Protection Act.",
    href: "/dpdp-compliance-platform"
  },
  {
    title: "CookieHub Web & Pixel Consent",
    desc: "Automated scanner preventing tracking pixels and ad tags from executing before consent.",
    href: "/cookie-hub"
  },
  {
    title: "DPDP Act Compliance Timeline",
    desc: "Detailed roadmap of enforcement milestones leading up to May 13, 2027.",
    href: "https://blog.securedapp.io/dpdp-act-compliance-timeline-2026-2027/"
  },
  {
    title: "Consent Manager vs. Cookie Banner",
    desc: "Why simple cookie banners fail to meet DPDP purpose-level consent requirements.",
    href: "https://blog.securedapp.io/consent-management-platform-vs-cookie-banner-dpdp/"
  }
];
