export const schoolsConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/schools#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/schools",
      "name": "DPDP Compliance for Schools in India | SecureCMS",
      "description": "Manage parent consent for photos, apps, admissions and WhatsApp, apply the school exemptions correctly and keep audit-ready DPDP records. Book a demo.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for Schools",
        "applicationCategory": "EducationalApplication",
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
        "name": "Schools in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/schools#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/schools#bc",
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
          "name": "Schools",
          "item": "https://securedapp.io/dpdp-compliance-platform/schools"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/schools#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the DPDP Act apply to schools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Schools collect and store the personal data of students, parents and staff digitally, for example in school ERP systems, apps and messaging groups, so they are Data Fiduciaries under the DPDP Act 2023. They must follow its rules on notice, consent, data rights and breach reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Do schools need parent consent for attendance and exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. The DPDP Rules let educational institutions track and monitor students for their educational activities and for student safety without the usual children’s-data limits. Uses beyond teaching and safety, such as posting photos online, still need parent consent."
          }
        },
        {
          "@type": "Question",
          "name": "Can schools post student photos on social media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only with parent consent for that specific purpose, and parents must be able to withdraw it. A photo used internally for an ID card or school record is different from one posted on the school website or social media."
          }
        },
        {
          "@type": "Question",
          "name": "Is school bus GPS tracking allowed under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tracking students on school transport for their safety falls within the safety purpose the DPDP Rules allow, including when the bus operator is a contractor engaged by the school. Using the same location data for anything else needs a separate basis. Tell parents about the tracking in your notice."
          }
        },
        {
          "@type": "Question",
          "name": "How can a school verify that consent came from a parent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules let a school rely on reliable identity details it already holds for a parent, such as verified details from admission, or use identity details the parent provides or a DigiLocker token. An OTP confirms the phone number or email, not identity on its own."
          }
        },
        {
          "@type": "Question",
          "name": "Who is responsible when a school uses an edtech app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Where the school decides why student data is used, the school is generally the Data Fiduciary and the app provider is its Data Processor. The school should limit what the app can do with student data and check the contract."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SecureCMS is a consent management platform that schools use, as Data Fiduciaries, to manage parent and student consent. Registered Consent Managers are separate entities registered with the Data Protection Board, and those provisions apply from 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do schools need to be DPDP compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including parent consent, notice, rights and breach reporting, apply from 13 May 2027."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "DPDP Compliance for Schools in India | SecureCMS",
  desc: "Manage parent consent for photos, apps, admissions and WhatsApp, apply the school exemptions correctly and keep audit-ready DPDP records. Book a demo.",
  description: "Manage parent consent for photos, apps, admissions and WhatsApp, apply the school exemptions correctly and keep audit-ready DPDP records. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/schools",
  url: "https://securedapp.io/dpdp-compliance-platform/schools",
  image: "/assets/images/ProductPages/ss/hero.webp",
  keywords: "DPDP compliance for schools, school parent consent management, Rule 12 Fourth Schedule school exemption, verifiable parental consent schools, student data protection India, APAAR ID parent consent form, school bus GPS tracking DPDP, school WhatsApp group parent consent"
};

export const partnerLogos = [
  { name: "CBSE Affiliated Institutions", label: "CBSE Schools" },
  { name: "CISCE / ICSE Schools", label: "ICSE Networks" },
  { name: "State Board Authorities", label: "State Boards" },
  { name: "Multi-Campus Trust Networks", label: "School Chains" },
  { name: "Pre-School & Daycare Groups", label: "Early Childhood" },
  { name: "Residential & Boarding Schools", label: "Boarding Campuses" }
];

export const jumpNavLinks = [
  { name: "Principals & Trusts", href: "#principals-trusts" },
  { name: "Administrators", href: "#administrators" },
  { name: "School IT", href: "#school-it" },
  { name: "FAQs", href: "#faqs" }
];

export const builtForTypes = [
  { title: "CBSE / ICSE / State Board Schools", desc: "Day schools managing student admissions, report cards, fee portals, and parent-teacher communication." },
  { title: "School Groups & Chains", desc: "Multi-tenant trusts managing unified compliance and parent records across dozens of distinct campuses." },
  { title: "Pre-Schools & Daycares", desc: "Early learning centers capturing high-touch photo, diet, and guardian pickup verification consent." },
  { title: "Residential & Boarding Schools", desc: "24/7 student care environments handling medical infirmaries, weekend travel tracking, and guardian proxies." }
];

export const schoolActivitiesMatrix = [
  {
    activity: "Attendance, marks, report cards, timetables",
    basis: "Educational activity (Rule 12 & Fourth Schedule)",
    records: "Purpose record and admission notice",
    requiresConsent: false,
    badge: "Exempt Function"
  },
  {
    activity: "CCTV on campus",
    basis: "Safety of enrolled children (Rule 12)",
    records: "Purpose record, retention limits & role access",
    requiresConsent: false,
    badge: "Exempt Safety"
  },
  {
    activity: "School bus GPS tracking",
    basis: "Safety of enrolled children (Contractor covered)",
    records: "Purpose record, transit access limits",
    requiresConsent: false,
    badge: "Exempt Safety"
  },
  {
    activity: "Board exam registration, UDISE+ reporting",
    basis: "Legal duty or statutory task",
    records: "Statutory purpose record & filing receipt",
    requiresConsent: false,
    badge: "Legal Obligation"
  },
  {
    activity: "APAAR ID creation",
    basis: "Voluntary (Ministry of Education parent form)",
    records: "Parent consent record, opt-out recorded",
    requiresConsent: true,
    badge: "Consent Required"
  },
  {
    activity: "Photos and videos on website or social media",
    basis: "Parent consent (Marketing & public display)",
    records: "Per-purpose unbundled consent, instant withdrawal",
    requiresConsent: true,
    badge: "Consent Required"
  },
  {
    activity: "WhatsApp class or parent groups",
    basis: "Parent consent for channel communication",
    records: "Channel consent, OTP opt-in per parent number",
    requiresConsent: true,
    badge: "Consent Required"
  },
  {
    activity: "Third-party learning apps chosen by school",
    basis: "Processor contract + consent if beyond teaching",
    records: "Purpose limits on vendors, DPA adherence",
    requiresConsent: true,
    badge: "Consent / DPA"
  },
  {
    activity: "Counselling and health records",
    basis: "Need-based student welfare, strict access",
    records: "Separate purpose, encrypted RBAC to Counsellor/Principal",
    requiresConsent: false,
    badge: "Strict RBAC"
  },
  {
    activity: "Admissions enquiries & prospective marketing",
    basis: "Consent of enquiring parent",
    records: "Lead marketing opt-in with expiration timestamp",
    requiresConsent: true,
    badge: "Consent Required"
  },
  {
    activity: "Sharing with sponsors and event partners",
    basis: "Parent consent (Annual day, sports day)",
    records: "Per-purpose commercial sharing consent",
    requiresConsent: true,
    badge: "Consent Required"
  }
];

export const problemModuleResults = [
  {
    problem: "Paper forms with one signature for everything",
    module: "Purpose Management, Data Catalogue & Templates",
    result: "Separate, unbundled consent per activity with zero ambiguity"
  },
  {
    problem: "Consent collected on WhatsApp with no verifiable record",
    module: "OTP verification on Email, SMS & WhatsApp",
    result: "Confirmed, cryptographically time-stamped proof of parent agreement"
  },
  {
    problem: "Parent withdraws photo consent after social media post",
    module: "Preference Centre & Instant Revocation Sync",
    result: "Automated webhook alert to web team, ERP & media repository in sub-120ms"
  },
  {
    problem: "Vendors see more student data than needed for their service",
    module: "Purpose & Field-Level Enforcement, Multi-Role RBAC",
    result: "Access strictly limited to bare minimum needed (e.g. Bus driver only gets stop)"
  },
  {
    problem: "Counselling & medical records open to all teachers & office staff",
    module: "Multi-Role RBAC & Segregation of Duties",
    result: "Vaulted encryption: only designated counsellor and principal can view notes"
  },
  {
    problem: "Parent complaints regarding child data exposure go undocumented",
    module: "Grievance Management, DPO Escalation & Feedback",
    result: "Documented statutory grievance trail complying with Section 13 mandates"
  },
  {
    problem: "Lack of verifiable evidence during Board or DPB audits",
    module: "Blockchain-Backed Logs, Reports & Auditor Role",
    result: "Exportable cryptographic proof satisfying Section 6(10) burden of proof"
  },
  {
    problem: "Student data scattered across ERP, LMS, spreadsheets & chat apps",
    module: "AI Data Discovery, Classification & Inventory",
    result: "Comprehensive real-time map of where every student data point resides"
  },
  {
    problem: "School groups managing multiple campuses with overlapping records",
    module: "Multi-Tenant Architecture with Organisation Admin",
    result: "Central trust oversight with rigorous campus-level tenant isolation"
  }
];

export const personaGuides = {
  principals: {
    title: "For Principals & School Trusts",
    subtitle: "Protect institution reputation and eliminate regulatory exposure under DPDP Act 2023.",
    points: [
      "Mitigate statutory penalties of up to ₹250 crore by eliminating blanket paper consent forms.",
      "Safeguard student trust by ensuring social media photos and marketing reels are backed by unbundled parental opt-ins.",
      "Maintain central compliance visibility across all affiliated campuses, branches, and pre-schools.",
      "Establish a transparent, responsive parent grievance channel fulfilling Section 13 statutory timelines."
    ]
  },
  administrators: {
    title: "For School Administrators & Admissions Teams",
    subtitle: "Replace chaotic paperwork and WhatsApp spreadsheets with automated digital workflows.",
    points: [
      "Streamline admission cycles with digital consent notices in English and all 22 Eighth Schedule Indian languages.",
      "Leverage existing student admission documentation under Rule 10 with phone/email OTP verification.",
      "Handle parental opt-outs seamlessly: when a parent revokes WhatsApp consent, communications switch automatically.",
      "Separate staff and teacher payroll records under Section 7 employment legitimate uses from student files."
    ]
  },
  it: {
    title: "For School IT Directors & ERP Leads",
    subtitle: "Plug-and-play APIs, native SDKs, and granular RBAC across the school technology ecosystem.",
    points: [
      "Enforce field-level data minimization via REST APIs and webhooks across Fedena, Entab, Teachmint, and custom ERPs.",
      "Isolate transport contractors: bus GPS operators receive student name and stop location, never marks or medical histories.",
      "Implement mTLS, public-key encryption, and IP whitelisting for all bi-directional learning app data syncs.",
      "Automate 72-hour Data Protection Board breach reporting workflows with encrypted audit telemetry."
    ]
  }
};

export const timelineMilestones = [
  {
    date: "13 November 2025",
    title: "DPDP Rules 2025 Notified",
    desc: "Rule 12 and the Fourth Schedule formally establish educational institution monitoring exemptions."
  },
  {
    date: "13 November 2026",
    title: "Consent Manager Framework Applies",
    desc: "Technical specifications for registered Consent Managers take effect under DPB oversight."
  },
  {
    date: "13 May 2027",
    title: "Core Statutory Enforcement Deadline",
    desc: "All schools must enforce verifiable parent consent, notices, user rights, and 72-hour breach reporting."
  }
];

export const faqsData = [
  {
    q: "Does the DPDP Act apply to schools?",
    a: "Yes. Schools collect and store the personal data of students, parents and staff digitally, for example in school ERP systems, apps and messaging groups, so they are Data Fiduciaries under the DPDP Act 2023. They must follow its rules on notice, consent, data rights and breach reporting."
  },
  {
    q: "Do schools need parent consent for attendance and exams?",
    a: "Generally no. The DPDP Rules let educational institutions track and monitor students for their educational activities and for student safety without the usual children’s-data limits. Uses beyond teaching and safety, such as posting photos online, still need parent consent."
  },
  {
    q: "Can schools post student photos on social media?",
    a: "Only with parent consent for that specific purpose, and parents must be able to withdraw it. A photo used internally for an ID card or school record is different from one posted on the school website or social media."
  },
  {
    q: "Is school bus GPS tracking allowed under the DPDP Act?",
    a: "Tracking students on school transport for their safety falls within the safety purpose the DPDP Rules allow, including when the bus operator is a contractor engaged by the school. Using the same location data for anything else needs a separate basis. Tell parents about the tracking in your notice."
  },
  {
    q: "How can a school verify that consent came from a parent?",
    a: "The DPDP Rules let a school rely on reliable identity details it already holds for a parent, such as verified details from admission, or use identity details the parent provides or a DigiLocker token. An OTP confirms the phone number or email, not identity on its own."
  },
  {
    q: "Who is responsible when a school uses an edtech app?",
    a: "Where the school decides why student data is used, the school is generally the Data Fiduciary and the app provider is its Data Processor. The school should limit what the app can do with student data and check the contract."
  },
  {
    q: "Is SecureCMS a registered Consent Manager?",
    a: "SecureCMS is a consent management platform that schools use, as Data Fiduciaries, to manage parent and student consent. Registered Consent Managers are separate entities registered with the Data Protection Board, and those provisions apply from 13 November 2026."
  },
  {
    q: "When do schools need to be DPDP compliant?",
    a: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including parent consent, notice, rights and breach reporting, apply from 13 May 2027."
  }
];

export const dpdpResources = [
  {
    title: "DPDP Consent Management Platform Overview",
    desc: "Complete enterprise architecture for India's Digital Personal Data Protection Act.",
    href: "/dpdp-compliance-platform"
  },
  {
    title: "Consent Management for EdTech Platforms",
    desc: "How learning apps and digital platforms manage minor verifiable consent under Section 9.",
    href: "/dpdp-compliance-platform/edtech"
  },
  {
    title: "Patient & Infirmary Consent for Healthcare",
    desc: "Medical records, infirmary logs, and counselling health data governance.",
    href: "/dpdp-compliance-platform/healthcare"
  },
  {
    title: "CookieHub Web & Portal Tracking Consent",
    desc: "Scan school portals and public websites for third-party cookies and tracking pixels.",
    href: "/cookie-hub"
  }
];
