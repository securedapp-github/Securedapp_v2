export const hrConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/hr#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/hr",
      "name": "Employee Consent Management Under DPDP | SecureCMS",
      "description": "Know when HR needs consent and when employment legitimate use applies. Manage candidate, dependant and monitoring consent with audit-ready records.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for HR & Workforce",
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
        "name": "CHROs, HR Operations, and Enterprise DPOs in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/hr#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/hr#bc",
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
          "name": "HR and Employees",
          "item": "https://securedapp.io/dpdp-compliance-platform/hr"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do employers need employee consent under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally not for employment purposes. Section 7(i) lets an employer process employee data without consent for employment, for safeguarding the employer from loss or liability, and for a service or benefit the employee asks for. Consent is needed for uses beyond that, such as optional programmes or publishing employee photos."
          }
        },
        {
          "@type": "Question",
          "name": "Is a consent clause in the appointment letter enough?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually it is the wrong tool. Employment processing generally rests on legitimate use, and a bundled consent in an appointment letter is weak for anything else, because consent must be free, specific and unconditional. A clear notice plus separate opt-ins for optional uses works better."
          }
        },
        {
          "@type": "Question",
          "name": "Do we need consent to keep rejected candidates' CVs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To keep a rejected candidate's CV for future roles, take their consent and set an expiry. Data needed to process the application they sent is a separate purpose. Erase it when that purpose ends, unless a law requires you to keep it."
          }
        },
        {
          "@type": "Question",
          "name": "Can employers monitor employee devices and email?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monitoring that protects the employer from loss or liability, such as stopping data leaks, can fall under Section 7(i) if it is proportionate and employees are told about it. Covert or excessive monitoring is hard to justify."
          }
        },
        {
          "@type": "Question",
          "name": "How should HR handle dependants' data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dependants are separate individuals with their own data. What you need for a benefit the employee asks for, such as health insurance, can be processed for that benefit. Any other use needs its own basis, and a child dependant's data needs a parent's consent where consent applies."
          }
        },
        {
          "@type": "Question",
          "name": "How long can we keep ex-employee data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keep what laws such as tax, PF and labour rules require, for as long as they require it, and erase the rest once the employment purpose ends (Section 8(7)). SecureCMS records the legal reason and release date for every retained record."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS is a consent management platform that employers use as Data Fiduciaries to manage employee and candidate consent. Registered Consent Managers are a separate category under Section 6(9), and the registration provisions apply from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to employee data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. The Consent Manager provisions apply from 13 November 2026. The remaining obligations, including consent, rights and breach reporting, apply from 13 May 2027, so HR has until then to sort its employee data."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Employee Consent Management Under DPDP | SecureCMS",
  description: "Know when HR needs consent and when employment legitimate use applies. Manage candidate, dependant and monitoring consent with audit-ready records. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/hr",
};

export const partnerLogos = [
  { name: "DSCI Certified Member", label: "DSCI Compliance Ready" },
  { name: "CySecK Evaluated", label: "Govt of Karnataka Cybersecurity CoE" },
  { name: "IFSCA FinTech Cohort", label: "GIFT City FinTech Sandbox" },
  { name: "IIT Kanpur C3iHub", label: "Cybersecurity Incubation Partner" },
];

export const jumpNavLinks = [
  { id: "section-7i-matrix", label: "Section 7(i) vs Consent" },
  { id: "lifecycle-matrix", label: "Hire-to-Exit Matrix" },
  { id: "candidate-talent-pool", label: "Talent Pool Expiry" },
  { id: "device-monitoring", label: "IT & Device Monitoring" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "enterprise-modules", label: "HR Modules" },
  { id: "roadmap", label: "May 2027 Roadmap" },
  { id: "faqs", label: "HR & DPO FAQs" },
];

export const hireToExitLifecycle = [
  {
    stage: "Job Application & ATS Screening",
    activity: "Processing CV, screening for advertised role",
    legalBasis: "Section 7(a) Voluntary provision by candidate",
    consentNeeded: "No (voluntary submission for specified role)",
  },
  {
    stage: "Talent Pool Retention (Rejected Candidates)",
    activity: "Retaining CVs for future unspecified job openings",
    legalBasis: "Section 6(1) Explicit Consent",
    consentNeeded: "Yes (mandatory standalone opt-in with expiry)",
  },
  {
    stage: "Background Verification (BGV)",
    activity: "Third-party police/education/credit check",
    legalBasis: "Section 8(2) Data Processor Agreement + Sec 7(i)",
    consentNeeded: "Covered under employment terms + BGV processor clause",
  },
  {
    stage: "Payroll, PF, ESIC & Income Tax",
    activity: "Statutory deductions and government remittances",
    legalBasis: "Section 7(i) Legitimate Use & Statutory Duty",
    consentNeeded: "No (mandatory compliance with Indian labor laws)",
  },
  {
    stage: "Dependants' Group Health Insurance",
    activity: "Sharing spouse/children data with insurer",
    legalBasis: "Section 7(i) Provision of employee-requested benefit",
    consentNeeded: "No for administration; Yes for secondary wellness offers",
  },
  {
    stage: "Device & DLP Email Monitoring",
    activity: "DLP tools preventing corporate data exfiltration",
    legalBasis: "Section 7(i) Safeguarding employer from loss/liability",
    consentNeeded: "No consent needed; Prior written policy notice mandatory",
  },
  {
    stage: "Employee Advocacy & Social Media Photos",
    activity: "Publishing employee images on LinkedIn / campaigns",
    legalBasis: "Section 6(1) Explicit Consent",
    consentNeeded: "Yes (mandatory individual opt-in, freely revocable)",
  },
  {
    stage: "Post-Exit Alumni & Rehire Network",
    activity: "Email newsletters and alumni rehire outreach",
    legalBasis: "Section 6(1) Explicit Consent",
    consentNeeded: "Yes (standalone alumni consent collected at offboarding)",
  },
];

export const enterpriseModules = [
  {
    title: "HR Lawful-Basis Registry",
    desc: "Maintains a real-time audit ledger mapping every workforce data field to Section 7(i) legitimate use vs Section 6 consent requirements.",
    badge: "Section 7(i) Engine",
  },
  {
    title: "Talent Pool Auto-Expiry Vault",
    desc: "Captures candidate consent upon rejection and automatically schedules cryptographic erasure after 6, 12, or 24 months unless renewed.",
    badge: "ATS Connected",
  },
  {
    title: "Employee Preference Self-Service Portal",
    desc: "Allows staff to manage optional benefits, social media photo permissions, and family member benefit data without touching HR.",
    badge: "Self-Service",
  },
  {
    title: "Device Monitoring Policy Notice Engine",
    desc: "Delivers provable, multilingual IT acceptable-use notices across employee laptops to legally substantiate Section 7(i) loss prevention.",
    badge: "DLP Safeguard",
  },
  {
    title: "Exit Clearance & Statutory Legal-Hold",
    desc: "Automatically purges candidate and performance notes while retaining tax, PF, and dispute records under mandatory statutory holds.",
    badge: "EPF / Tax Hold",
  },
  {
    title: "HRMS & Payroll Enterprise Connectors",
    desc: "Turnkey API and webhook connectors for Darwinbox, Keka, GreytHR, BambooHR, and Workday to synchronize employee opt-outs.",
    badge: "Turnkey APIs",
  },
];

export const implementationRoadmap = [
  {
    phase: "Phase 1: Workforce Data Inventory & Basis Mapping",
    duration: "Weeks 1–2",
    milestone: "Classify all HRMS, ATS, and payroll fields into Section 7(i) legitimate use vs Section 6 consent.",
  },
  {
    phase: "Phase 2: Employee Privacy Notice Delivery",
    duration: "Weeks 3–4",
    milestone: "Issue multilingual Section 5 notices to all current employees across intranet and employee portals.",
  },
  {
    phase: "Phase 3: ATS Talent Pool Consent Automation",
    duration: "Weeks 5–6",
    milestone: "Implement unbundled candidate talent-pool opt-in and auto-purge scripts in recruiting workflows.",
  },
  {
    phase: "Phase 4: Employee Self-Service Preference Center",
    duration: "Weeks 7–8",
    milestone: "Launch self-service toggles for optional corporate programmes, wellness apps, and photo consents.",
  },
  {
    phase: "Phase 5: Exit Clearance & Statutory Legal-Hold",
    duration: "Weeks 9–10",
    milestone: "Configure retention rules: 7-year holds on PF/tax ledgers; immediate purging of talent profiles.",
  },
  {
    phase: "Phase 6: CISO & Labor Law Sign-Off",
    duration: "Weeks 11–12",
    milestone: "Finalize audit trails, execute vendor DPA agreements with BGV and payroll vendors ahead of May 2027.",
  },
];

export const faqsData = [
  {
    question: "Do employers need employee consent under the DPDP Act?",
    answer: "Generally not for employment purposes. Section 7(i) lets an employer process employee data without consent for employment, for safeguarding the employer from loss or liability, and for a service or benefit the employee asks for. Consent is needed for uses beyond that, such as optional programmes or publishing employee photos.",
  },
  {
    question: "Is a consent clause in the appointment letter enough?",
    answer: "Usually it is the wrong tool. Employment processing generally rests on legitimate use, and a bundled consent in an appointment letter is weak for anything else, because consent must be free, specific and unconditional. A clear notice plus separate opt-ins for optional uses works better.",
  },
  {
    question: "Do we need consent to keep rejected candidates' CVs?",
    answer: "To keep a rejected candidate's CV for future roles, take their consent and set an expiry. Data needed to process the application they sent is a separate purpose. Erase it when that purpose ends, unless a law requires you to keep it.",
  },
  {
    question: "Can employers monitor employee devices and email?",
    answer: "Monitoring that protects the employer from loss or liability, such as stopping data leaks, can fall under Section 7(i) if it is proportionate and employees are told about it. Covert or excessive monitoring is hard to justify.",
  },
  {
    question: "How should HR handle dependants' data?",
    answer: "Dependants are separate individuals with their own data. What you need for a benefit the employee asks for, such as health insurance, can be processed for that benefit. Any other use needs its own basis, and a child dependant's data needs a parent's consent where consent applies.",
  },
  {
    question: "How long can we keep ex-employee data?",
    answer: "Keep what laws such as tax, PF and labour rules require, for as long as they require it, and erase the rest once the employment purpose ends (Section 8(7)). SecureCMS records the legal reason and release date for every retained record.",
  },
  {
    question: "Is SecureCMS a registered Consent Manager?",
    answer: "SecureCMS is a consent management platform that employers use as Data Fiduciaries to manage employee and candidate consent. Registered Consent Managers are a separate category under Section 6(9), and the registration provisions apply from 13 November 2026.",
  },
  {
    question: "When do DPDP obligations apply to employee data?",
    answer: "The DPDP Rules were notified on 13 November 2025. The Consent Manager provisions apply from 13 November 2026. The remaining obligations, including consent, rights and breach reporting, apply from 13 May 2027, so HR has until then to sort its employee data.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Platform for SaaS Companies",
    href: "/dpdp-compliance-platform/saas",
    desc: "Processor vs Fiduciary boundaries and customer tenant consent isolation.",
  },
  {
    title: "DPDP Platform for Banks",
    href: "/dpdp-compliance-platform/banking",
    desc: "Core banking system connectors, CBS integration, and RBI guidelines.",
  },
  {
    title: "SecureCookie CookieHub",
    href: "/cookiehub",
    desc: "Cookie consent and banner automation for corporate portals and ATS sites.",
  },
  {
    title: "DPDP Readiness Assessment",
    href: "/compliance/dpdp",
    desc: "Diagnostic toolkit and gap analysis for Indian employer organizations.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (Section 7(i))", url: "https://www.meity.gov.in" },
  { name: "Employees' Provident Funds & Miscellaneous Provisions Act 1952", url: "https://epfindia.gov.in" },
  { name: "Income Tax Act 1961 (Statutory Record Retention)", url: "https://incometaxindia.gov.in" },
  { name: "CERT-In Cyber Security Directions (6-Hour Breach Reporting)", url: "https://www.cert-in.org.in" },
];
