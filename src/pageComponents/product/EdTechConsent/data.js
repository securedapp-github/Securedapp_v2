export const edtechConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/edtech#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/edtech",
      "name": "Consent Management for EdTech Platforms and Schools | SecureCMS",
      "description": "Verifiable parental consent, child data protection under Section 9, and LMS/CRM sync for EdTech apps and schools under DPDP Act 2023.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for EdTech",
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
        "name": "EdTech Platforms, Schools, Test Prep and Higher Education in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/edtech#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/edtech#bc",
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
          "name": "EdTech & Schools",
          "item": "https://securedapp.io/dpdp-compliance-platform/edtech"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is consent management for edtech?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is how a learning platform or school records permission to use a learner's personal data. For learners under 18, the permission comes from a parent or guardian. After 18, it comes from the learner. A consent management platform keeps purposes separate, checks consent before data is used and lets parents change their choices."
          }
        },
        {
          "@type": "Question",
          "name": "Who counts as a child under the DPDP Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone under 18. That puts most school students and many first-year college students inside the rule, so an edtech platform needs verifiable consent from a parent or lawful guardian before it processes their personal data. Section 2(f) of the Act sets the age, and the Rules explain how that consent is verified."
          }
        },
        {
          "@type": "Question",
          "name": "How can an edtech platform verify a parent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules let a platform rely on reliable identity and age details it already holds, details the parent provides, or a virtual token from a service such as DigiLocker. The platform should also keep a record of the check. An OTP alone confirms a phone number or email, not who the person is."
          }
        },
        {
          "@type": "Question",
          "name": "Can edtech apps use learning analytics for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They can use data needed to deliver the course, such as saving progress and grading tests. Tracking, behavioural monitoring and targeted advertising aimed at children are restricted under Section 9(3). Every analytics use should be reviewed against that line, ideally with your legal team, before it is switched on for under-18 learners."
          }
        },
        {
          "@type": "Question",
          "name": "Do schools need parental consent for every use of student data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not always. The DPDP Rules exempt educational institutions from parts of the children's data rules for specified purposes, such as educational activities and the safety of enrolled children. Other uses still need parental consent, and a commercial edtech platform should not assume the school exemption covers it."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to consent when a student turns 18?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parental consent covers a learner only while they are a child. When the learner turns 18, the platform should ask the learner directly for consent to continue processing, purpose by purpose. SecureCMS can prompt this renewal as the learner approaches 18, so old parental consent is not treated as permanent."
          }
        },
        {
          "@type": "Question",
          "name": "Is SecureCMS a registered Consent Manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SecureCMS is a consent management platform that edtech companies and schools use as Data Fiduciaries, inside their own apps and school portals. Registered Consent Managers are separate entities that register with the Data Protection Board, and that registration framework starts on 13 November 2026."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to edtech companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. The Consent Manager provisions apply from 13 November 2026. The remaining obligations, including verifiable parental consent, notice, rights and breach reporting, apply from 13 May 2027. For anyone handling under-18 data, that May 2027 date is the one that matters for parental consent, so planning is best started well before it."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Consent Management for EdTech Platforms and Schools | SecureCMS",
  desc: "Verifiable parental consent, child data protection under Section 9, and LMS/CRM sync for EdTech apps and schools under DPDP Act 2023.",
  keywords: "consent management for edtech, DPDP Act 2023 children data, Section 9 verifiable parental consent, school DPDP compliance, student data protection, learning analytics ban, DigiLocker parental verification",
  url: "https://securedapp.io/dpdp-compliance-platform/edtech",
  image: "/assets/images/ProductPages/ss/hero.webp",
  customSchema: edtechConsentSchema,
};

export const partnerLogos = [
  { name: "DSCI", subtitle: "Data Security Council of India", badge: "Cybersecurity Partner" },
  { name: "CySecK", subtitle: "Govt of Karnataka CoE", badge: "CoE Innovation" },
  { name: "IFSCA", subtitle: "Regulatory Sandbox FinTech", badge: "Regulatory CoE" },
  { name: "C3iHub", subtitle: "IIT Kanpur Cybersecurity Hub", badge: "Incubated Ecosystem" },
];

export const jumpNavLinks = [
  { label: "Founders & Product", href: "#founders" },
  { label: "Legal / DPO", href: "#legal" },
  { label: "School Admins", href: "#admins" },
  { label: "FAQs", href: "#faqs" },
];

export const builtForTypes = [
  "EdTech Mobile & Web Apps",
  "K-12 Private & Public Schools",
  "Test Prep & Competitive Coaching",
  "Higher Education & Adult Learners",
];

export const edtechRequirementsData = [
  {
    req: "Verifiable consent from a parent or lawful guardian",
    source: "DPDP s.9(1); Rule 10",
    solution: "Minor/PwD consent flows with DigiLocker token or parent KYC/OTP",
  },
  {
    req: "No processing likely to cause harm to child's well-being",
    source: "DPDP s.9(2)",
    solution: "Algorithmic audit safeguards, content filters & runtime checks",
  },
  {
    req: "No tracking, behavioural monitoring or targeted ads at children",
    source: "DPDP s.9(3)",
    solution: "Automated age-flag SDK firewall blocking analytics & retargeting tokens",
  },
  {
    req: "Consent for persons with disabilities through a lawful guardian",
    source: "DPDP Rules, Rule 11",
    solution: "Accessible guardian authorization workflows with legal guardian proofs",
  },
  {
    req: "Exemptions for specified educational institutions and safety",
    source: "DPDP Rules, Rule 12 & Fourth Schedule",
    solution: "Granular tagging for core school pedagogy vs commercial EdTech upsell",
  },
  {
    req: "Notice in English or an Eighth Schedule language for parents",
    source: "DPDP s.5(3)",
    solution: "Parent-facing consent notices in 22 Scheduled Indian languages",
  },
  {
    req: "Parent withdrawal, student rights, and grievance escalation",
    source: "DPDP s.6(4), s.11–13",
    solution: "Parent self-serve preference center, DSR automation & DPO escalation",
  },
  {
    req: "Breach reporting: DPDP 72-hour report, CERT-In 6-hour report",
    source: "DPDP Rules s.8(6) & CERT-In",
    solution: "Automated risk monitoring, incident response log, and audit export",
  },
];

export const analyticsTrackingMatrix = [
  {
    practice: "Saving course progress, quiz scores, and assignments",
    status: "Permitted (Part of Core Educational Service)",
    solution: "Tied to core service delivery; pre-locked with parent notice",
  },
  {
    practice: "Adaptive lesson difficulty within a current learning module",
    status: "Permitted (Pedagogical Delivery)",
    solution: "Categorized as instructional delivery, tagged with legal memo",
  },
  {
    practice: "Cross-app engagement tracking for commercial product analytics",
    status: "Restricted for Minors (Section 9(3))",
    solution: "Blocked automatically by SecureCMS runtime for all under-18 learners",
  },
  {
    practice: "Personalised course recommendations to upsell test-prep packages",
    status: "Restricted for Minors (Section 9(3))",
    solution: "Commercial profiling blocked; marketing redirected to parents only",
  },
  {
    practice: "Targeted advertisements, retargeting ad pixels, sponsor offers",
    status: "Strictly Prohibited for Minors (Section 9(3))",
    solution: "Zero-tolerance runtime block; all ad tags suppressed",
  },
  {
    practice: "Online examination proctoring (webcam & screen recording)",
    status: "Requires Separate Specific Consent & Proportionality",
    solution: "Unbundled consent with strict auto-erasure after exam evaluation",
  },
  {
    practice: "Sharing academic progress reports with parents and schools",
    status: "Permitted (Core Service)",
    solution: "Purpose-bound reporting to verified parent/guardian contacts only",
  },
];

export const learnerLifecycleData = [
  {
    stage: "Sign-Up & Age Check",
    moment: "Route under-18s to parental consent",
    problem: "Self-declared age without verification or follow-up",
    solution: "Mandatory age gate routing <18 learners directly to parent contact flow",
  },
  {
    stage: "Parent Verification",
    moment: "Verified parent consent per purpose",
    problem: "Checkbox ticked by the child pretending to be a parent",
    solution: "DigiLocker virtual token or parent phone/email OTP verification",
  },
  {
    stage: "School Enrolment (B2B)",
    moment: "School and platform roles documented",
    problem: "Ambiguity over whether school or EdTech vendor holds consent",
    solution: "Co-fiduciary and processor contract tagging with shared audit logs",
  },
  {
    stage: "Learning & Assessments",
    moment: "Service delivery separated from tracking",
    problem: "Third-party analytics SDKs running indiscriminately on children",
    solution: "Runtime validation firewall blocking tracking SDK execution",
  },
  {
    stage: "Marketing to Parents",
    moment: "Parent's explicit marketing consent",
    problem: "Promotional sales calls and WhatsApp spam sent to students directly",
    solution: "Direct student outreach blocked; marketing routed only to consenting parents",
  },
  {
    stage: "Learner Turns 18",
    moment: "Fresh consent from now-adult learner",
    problem: "Parental consent treated as perpetual and never renewed",
    solution: "Automated birthday trigger: parental flags expire, fresh consent prompted",
  },
  {
    stage: "Account Closure",
    moment: "Student data erasure and academic retention",
    problem: "Student profiles, exam video recordings kept indefinitely",
    solution: "Automated DSR erasure with academic certificate legal-hold records",
  },
];

export const edtechModulesData = [
  {
    problem: "Child ticks the parent consent checkbox",
    module: "Minor / PwD Consent Engine & Parent OTP",
    result: "Parent consent recorded separately via verified contact",
  },
  {
    problem: "One bundled consent for lessons, analytics, and marketing",
    module: "Purpose Management & Catalog Templates",
    result: "Distinct, unbundled consent per educational & commercial purpose",
  },
  {
    problem: "Commercial tracking SDKs running on minor profiles",
    module: "API/SDK Runtime Enforcement Firewall",
    result: "Behavioral tracking and ad pixels denied execution for <18s",
  },
  {
    problem: "Parent wants to revoke access to counselor calls",
    module: "Parent Preference Hub & Instant Revocation",
    result: "Revocation propagates immediately across LMS, CRM, and call sheets",
  },
  {
    problem: "Student attains age 18 but parental consent still runs",
    module: "Policy Versioning & 18th-Birthday Nudge Engine",
    result: "Parental consent expires; adult learner prompted for own consent",
  },
  {
    problem: "Parent complaints regarding child data privacy",
    module: "Grievance Management & DPO Escalation",
    result: "Structured resolution trail with statutory SLA tracking",
  },
  {
    problem: "School district audits or regulatory DPB inspection",
    module: "Blockchain-Backed Logs & Auditor Role",
    result: "Tamper-proof, exportable compliance receipts ready on demand",
  },
  {
    problem: "Student data scattered across LMS, video proctoring, CRM",
    module: "AI Data Discovery & Inventory",
    result: "Automated visual inventory mapping all learner PII repositories",
  },
];

export const rolloutSteps = [
  {
    step: "01",
    title: "Data & Age Mapping",
    desc: "Map all learner, parent, and educator data across LMS, mobile apps, CRM, and proctoring tools.",
  },
  {
    step: "02",
    title: "Implement Age Gate",
    desc: "Deploy client-side age check routing all learners under 18 to the verifiable parent consent flow.",
  },
  {
    step: "03",
    title: "Split Purposes & Block Tracking",
    desc: "Separate course delivery from analytics and marketing; activate Section 9(3) tracking block for minors.",
  },
  {
    step: "04",
    title: "Parent Verification & Portal",
    desc: "Connect DigiLocker token or parent OTP verification and launch the parent self-serve preference center.",
  },
  {
    step: "05",
    title: "Re-Notify Existing Families",
    desc: "Issue compliant bilingual DPDP notices to currently enrolled families and capture verifiable responses.",
  },
  {
    step: "06",
    title: "Age-18 Renewal & Rights Go-Live",
    desc: "Activate 18th-birthday renewal nudges, DSR automation, and formal grievance escalation workflows.",
  },
];

export const faqsData = edtechConsentSchema["@graph"][2].mainEntity;

export const dpdpResources = [
  { title: "Parent Hub: DPDP Compliance Platform", href: "/dpdp-compliance-platform" },
  { title: "Patient Health Consent Platform (Children's Health)", href: "/dpdp-compliance-platform/healthcare" },
  { title: "Ecommerce & D2C Consent Platform (Under-18 Shoppers)", href: "/dpdp-compliance-platform/ecommerce" },
  { title: "CookieHub: Website Cookie & Pixel Scanning", href: "/cookie-hub" },
];

export const officialSources = [
  { title: "DPDP Act 2023 (Official Gazette)", url: "https://www.meity.gov.in" },
  { title: "DPDP Rules 2025 (PIB Press Release)", url: "https://pib.gov.in" },
  { title: "CERT-In Cyber Incident Directions", url: "https://www.cert-in.org.in" },
];
