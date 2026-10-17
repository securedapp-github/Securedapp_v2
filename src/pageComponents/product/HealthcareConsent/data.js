export const healthcareConsentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://securedapp.io/dpdp-compliance-platform/healthcare#webpage",
      "url": "https://securedapp.io/dpdp-compliance-platform/healthcare",
      "name": "Patient Consent Management System for Hospitals in India | SecureCMS",
      "description": "Record patient consent across OPD, IPD, HIS/EMR, labs and TPAs. Emergency override logging, clinical data protection and DPDP compliance for hospitals.",
      "inLanguage": "en-IN",
      "about": {
        "@type": "SoftwareApplication",
        "name": "SecureCMS for Healthcare",
        "applicationCategory": "HealthApplication",
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
        "name": "Hospitals, Clinics, Diagnostic Labs, and HealthTech in India"
      },
      "breadcrumb": {
        "@id": "https://securedapp.io/dpdp-compliance-platform/healthcare#bc"
      },
      "dateModified": "2026-10-11"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://securedapp.io/dpdp-compliance-platform/healthcare#bc",
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
          "name": "Healthcare & Hospitals",
          "item": "https://securedapp.io/dpdp-compliance-platform/healthcare"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a patient consent management system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is software that records what each patient has agreed to about the use and sharing of their health data, checks that consent before data is used, passes changes to hospital systems and partners, and keeps tamper-proof records. Hospitals use it to meet DPDP Act 2023 duties on notice, consent and patient rights."
          }
        },
        {
          "@type": "Question",
          "name": "Do hospitals need consent to treat a patient in an emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The DPDP Act allows personal data to be processed without consent to respond to a medical emergency involving a threat to life or an immediate threat to health. The hospital should still record why the data was used. SecureCMS logs that reason against the record."
          }
        },
        {
          "@type": "Question",
          "name": "Can hospitals share patient data with insurers and TPAs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hospitals can share the data needed for a claim the patient has asked for, such as cashless treatment, and should keep it limited to that claim. Using the same data for anything else needs a separate basis. SecureCMS records the purpose and limits what each party can see."
          }
        },
        {
          "@type": "Question",
          "name": "Is ABDM consent the same as DPDP consent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. ABDM has its own consent framework for exchanging health records through ABHA and its health information exchange. The DPDP Act still applies to how a hospital collects and uses patient data for its own purposes, so a hospital may need both."
          }
        },
        {
          "@type": "Question",
          "name": "Can a patient ask a hospital to delete their medical records?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A patient can ask for erasure. The hospital must erase the data unless it needs to keep it for the specified purpose or to follow a law, which can include medical record retention rules. SecureCMS logs which records are kept, why, and until when."
          }
        },
        {
          "@type": "Question",
          "name": "How should hospitals handle consent for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For patients under 18, the DPDP Act requires verifiable consent from a parent or lawful guardian. The DPDP Rules exempt clinical establishments and healthcare professionals when processing is limited to health services the child needs. SecureCMS records guardian consent through its flows for minors and persons with disabilities."
          }
        },
        {
          "@type": "Question",
          "name": "Does SecureCMS replace clinical consent forms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. SecureCMS manages consent for the use and sharing of patient data under the DPDP Act. Clinical informed consent for treatment and procedures stays part of the hospital's own medical process, with its own forms and clinician sign-off. The two sit side by side: one covers the procedure, the other covers the data."
          }
        },
        {
          "@type": "Question",
          "name": "When do DPDP obligations apply to hospitals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, patient rights and breach reporting, apply from 13 May 2027. Hospitals should plan notices and consent flows well before that date."
          }
        }
      ]
    }
  ]
};

export const metaData = {
  title: "Patient Consent Management System for Hospitals in India | SecureCMS",
  description: "Record patient consent across OPD, IPD, HIS/EMR, labs and TPAs. Emergency override logging, clinical data protection and DPDP compliance for hospitals. Book a demo.",
  canonical: "https://securedapp.io/dpdp-compliance-platform/healthcare",
};

export const partnerLogos = [
  { name: "DSCI Certified Member", label: "DSCI Compliance Ready" },
  { name: "CySecK Evaluated", label: "Govt of Karnataka Cybersecurity CoE" },
  { name: "IFSCA FinTech Cohort", label: "GIFT City FinTech Sandbox" },
  { name: "IIT Kanpur C3iHub", label: "Cybersecurity Incubation Partner" },
];

export const jumpNavLinks = [
  { id: "clinical-vs-data-consent", label: "Clinical vs Data Consent" },
  { id: "emergency-override", label: "Emergency Room Overrides" },
  { id: "touchpoints-matrix", label: "Hospital Touchpoints" },
  { id: "simulator", label: "Interactive Simulator" },
  { id: "enterprise-modules", label: "Healthcare Modules" },
  { id: "tpa-data-limiting", label: "TPA & Insurer Limiting" },
  { id: "roadmap", label: "May 2027 Roadmap" },
  { id: "faqs", label: "Hospital FAQs" },
];

export const hospitalTouchpoints = [
  {
    touchpoint: "OPD Registration Desk",
    dataCollected: "Name, phone, age, symptoms, previous prescriptions",
    purpose: "Patient identification, consultation slot allocation",
    legalBasis: "Voluntary provision for care sought (Section 7(a))",
    consentRule: "Multilingual notice at desk; no repetitive checkbox for basic doctor visit.",
  },
  {
    touchpoint: "Emergency Room / Trauma Admission",
    dataCollected: "Emergency vitals, blood type, unconscious patient triage",
    purpose: "Immediate life-saving resuscitation and emergency surgery",
    legalBasis: "Section 7(f) Medical Emergency (Threat to life or health)",
    consentRule: "Exempt from prior consent. SecureCMS automatically logs emergency rationale.",
  },
  {
    touchpoint: "Inpatient Cashless TPA / Insurer Desk",
    dataCollected: "Discharge summary, diagnostic scans, itemized medical billing",
    purpose: "Cashless insurance pre-authorization and claim settlement",
    legalBasis: "Section 7(a) Requested Benefit + Section 6 Explicit Opt-In",
    consentRule: "Patient authorizes insurer sharing; fields restricted strictly to claim requisites.",
  },
  {
    touchpoint: "External Diagnostic Labs & LIS",
    dataCollected: "Blood samples, pathology reports, biopsy images",
    purpose: "Diagnostic analysis and clinical lab test execution",
    legalBasis: "Section 8(2) Data Processor Agreement",
    consentRule: "Labs operate under hospital processor contract; secondary re-use is blocked.",
  },
  {
    touchpoint: "Clinical Trials & Genomic Research",
    dataCollected: "De-identified patient cohorts, disease registries, lab values",
    purpose: "Medical study, academic publication, drug discovery",
    legalBasis: "Section 6(1) Explicit Standalone Consent",
    consentRule: "Mandatory unbundled consent; cannot be bundled into general hospital admission.",
  },
  {
    touchpoint: "Hospital WhatsApp & Marketing Reminders",
    dataCollected: "Mobile number, health screening packages, preventive checkups",
    purpose: "Patient engagement and promotional health checkups",
    legalBasis: "Section 6(1) Explicit Opt-In",
    consentRule: "Mandatory opt-in checkbox; instantly revocable via WhatsApp reply or portal.",
  },
];

export const enterpriseModules = [
  {
    title: "OPD Counter Quick-Consent Station",
    desc: "Captures patient or family consent via SMS OTP, WhatsApp link, or QR scan in 22 Indian languages at patient registration in under 15 seconds.",
    badge: "Sub-15s Registration",
  },
  {
    title: "Section 7(f) Emergency Override Ledger",
    desc: "Enables clinicians to bypass consent during life-threatening emergencies, automatically logging the admitting doctor, time, and clinical reason.",
    badge: "Emergency Safe-Harbor",
  },
  {
    title: "TPA & Insurer Field Redactor",
    desc: "Limits data shared with insurance TPAs strictly to claim-necessary fields. Automatically masks unrelated psychiatric, reproductive, or genetic notes.",
    badge: "Field-Level Masking",
  },
  {
    title: "Paediatric Care & Guardian Consent",
    desc: "Seamlessly operates the Fourth Schedule healthcare exemption for treating children, while strictly barring commercial profiling or promotional tracking.",
    badge: "Sec 9 / Fourth Schedule",
  },
  {
    title: "Medical Records Retention Vault",
    desc: "Enforces statutory legal holds on IPD charts, MLCs, and prescriptions under NMC & State Clinical Establishment Acts when patients request erasure.",
    badge: "NMC / Legal Hold",
  },
  {
    title: "HIS, EMR, LIS & PACS Connectors",
    desc: "Bi-directional FHIR / HL7 REST connectors for Epic, Cerner, Meditech, Akhil Systems, and custom hospital information management systems.",
    badge: "FHIR / HL7 Ready",
  },
];

export const implementationRoadmap = [
  {
    phase: "Phase 1: Clinical vs Data Consent Audit",
    duration: "Weeks 1–2",
    milestone: "Demarcate clinical procedure forms from digital data consent across OPD, IPD, labs, and pharmacy.",
  },
  {
    phase: "Phase 2: Reception & Kiosk Notice Deployment",
    duration: "Weeks 3–4",
    milestone: "Deploy digital notices in English + 22 Indian languages across OPD registration desks and patient kiosks.",
  },
  {
    phase: "Phase 3: HIS / EMR Connector Integration",
    duration: "Weeks 5–6",
    milestone: "Connect SecureCMS with hospital EMR via FHIR/HL7 webhooks; configure emergency room override triggers.",
  },
  {
    phase: "Phase 4: TPA & Laboratory Field-Limiting",
    duration: "Weeks 7–8",
    milestone: "Apply field-level redaction rules to restrict data sent to external diagnostic labs and insurance TPAs.",
  },
  {
    phase: "Phase 5: Paediatric & Statutory Retention Policies",
    duration: "Weeks 9–10",
    milestone: "Configure guardian verification for minors; embed NMC 3-to-5 year legal hold rules for medical charts.",
  },
  {
    phase: "Phase 6: Hospital CISO Audit & Clinical Go-Live",
    duration: "Weeks 11–12",
    milestone: "VAPT certification, hospital staff SOP briefing, and board compliance sign-off ahead of 13 May 2027.",
  },
];

export const faqsData = [
  {
    question: "What is a patient consent management system?",
    answer: "It is software that records what each patient has agreed to about the use and sharing of their health data, checks that consent before data is used, passes changes to hospital systems and partners, and keeps tamper-proof records. Hospitals use it to meet DPDP Act 2023 duties on notice, consent and patient rights.",
  },
  {
    question: "Do hospitals need consent to treat a patient in an emergency?",
    answer: "No. The DPDP Act allows personal data to be processed without consent to respond to a medical emergency involving a threat to life or an immediate threat to health. The hospital should still record why the data was used. SecureCMS logs that reason against the record.",
  },
  {
    question: "Can hospitals share patient data with insurers and TPAs?",
    answer: "Hospitals can share the data needed for a claim the patient has asked for, such as cashless treatment, and should keep it limited to that claim. Using the same data for anything else needs a separate basis. SecureCMS records the purpose and limits what each party can see.",
  },
  {
    question: "Is ABDM consent the same as DPDP consent?",
    answer: "No. ABDM has its own consent framework for exchanging health records through ABHA and its health information exchange. The DPDP Act still applies to how a hospital collects and uses patient data for its own purposes, so a hospital may need both.",
  },
  {
    question: "Can a patient ask a hospital to delete their medical records?",
    answer: "A patient can ask for erasure. The hospital must erase the data unless it needs to keep it for the specified purpose or to follow a law, which can include medical record retention rules. SecureCMS logs which records are kept, why, and until when.",
  },
  {
    question: "How should hospitals handle consent for children?",
    answer: "For patients under 18, the DPDP Act requires verifiable consent from a parent or lawful guardian. The DPDP Rules exempt clinical establishments and healthcare professionals when processing is limited to health services the child needs. SecureCMS records guardian consent through its flows for minors and persons with disabilities.",
  },
  {
    question: "Does SecureCMS replace clinical consent forms?",
    answer: "No. SecureCMS manages consent for the use and sharing of patient data under the DPDP Act. Clinical informed consent for treatment and procedures stays part of the hospital's own medical process, with its own forms and clinician sign-off. The two sit side by side: one covers the procedure, the other covers the data.",
  },
  {
    question: "When do DPDP obligations apply to hospitals?",
    answer: "The DPDP Rules were notified on 13 November 2025. Consent Manager provisions apply from 13 November 2026, and the remaining obligations, including notice, consent, patient rights and breach reporting, apply from 13 May 2027. Hospitals should plan notices and consent flows well before that date.",
  },
];

export const dpdpResources = [
  {
    title: "DPDP Platform for Insurance Companies",
    href: "/dpdp-compliance-platform/insurance",
    desc: "TPA claims processing, bancassurance consent, and IRDAI compliance.",
  },
  {
    title: "DPDP Platform for SaaS Companies",
    href: "/dpdp-compliance-platform/saas",
    desc: "Processor vs Fiduciary boundaries and customer tenant consent isolation.",
  },
  {
    title: "SecureCookie CookieHub",
    href: "/cookiehub",
    desc: "Cookie consent and banner automation for hospital web portals.",
  },
  {
    title: "DPDP Readiness Assessment",
    href: "/compliance/dpdp",
    desc: "Diagnostic toolkit and gap analysis for Indian healthcare establishments.",
  },
];

export const officialSources = [
  { name: "Digital Personal Data Protection Act 2023 (Section 7(f) Emergency Exemption)", url: "https://www.meity.gov.in" },
  { name: "National Medical Commission (NMC) Code of Medical Ethics", url: "https://www.nmc.org.in" },
  { name: "Ayushman Bharat Digital Mission (ABDM) Guidelines", url: "https://abdm.gov.in" },
  { name: "Clinical Establishments (Registration and Regulation) Act", url: "https://mohfw.gov.in" },
];
