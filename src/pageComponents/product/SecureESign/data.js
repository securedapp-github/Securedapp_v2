export const heroData = {
  badge: "Court-Admissible • IT Act Section 3 & 3A Compliant • Government-Approved",
  title: "Digital Signatures Built for India. Government-Approved.",
  subtitle:
    "Secure e-Sign is the electronic signature solution designed for Indian businesses that need legally valid digital signatures. Whether you're signing contracts, managing KYC workflows, or handling government e-tenders—this is how modern organizations do it.",
  complianceNote: "IT Act-compliant. Government-approved infrastructure.",
  primaryCtaText: "Start Free Trial",
  secondaryCtaText: "Book a Demo",
  trustMetrics: [
    { value: "100%", label: "Court Admissible", detail: "IT Act Section 3" },
    { value: "Class 3", label: "DSC & Aadhaar", detail: "Dual Auth Architecture" },
    { value: "CDAC", label: "Certified R&D", detail: "Govt-Approved PKI" },
    { value: "AES-256", label: "End-to-End Encrypted", detail: "Data Stored in India" },
  ],
};

export const problemPoints = [
  {
    id: "paper-cycle",
    title: "Print. Sign. Scan. Repeat.",
    subtitle: "Turns days into weeks.",
    description: "Physical printing, wet signing, and scanning create severe friction, turning simple document turnarounds from hours into weeks.",
  },
  {
    id: "audit-holes",
    title: "Manual Verification",
    subtitle: "Leaves audit trails full of holes.",
    description: "Photocopied and scanned signatures lack cryptographic verification, leaving compliance records and audit trails vulnerable.",
  },
  {
    id: "cross-border",
    title: "Cross-Border Contracts",
    subtitle: "Legally gray territory.",
    description: "Unverified international agreements and non-PKI signatures struggle to hold up in court jurisdictions without statutory backing.",
  },
  {
    id: "no-repudiation",
    title: "Zero Non-Repudiation",
    subtitle: "No proof of who actually signed.",
    description: "No mathematical proof of who actually signed, when they signed, or if they changed their mind or altered the document post-signature.",
  },
];

export const meetSecureESign = {
  title: "Meet Secure e-Sign: The Electronic Signature Solution Built for India",
  whatItDoes: {
    heading: "What It Does",
    description:
      "Secure e-Sign is an enterprise-grade electronic signature solution that lets you send, sign, and authenticate documents in minutes, not days. Digital Certificate (DSC) powered. Aadhaar eSign compatible. Legally bulletproof.",
    bulletPoints: [
      "No software to install on client machines.",
      "Zero training overhead for employees or signers.",
      "Frictionless signing experience across desktop and mobile.",
    ],
  },
  whyItMatters: {
    heading: "Why It Matters",
    description:
      "Every signature is cryptographically bound to the signer's digital identity verification. You don't just get a signature. You get proof. Immutable proof. The kind courts recognize. The kind auditors love.",
    highlights: [
      {
        sector: "Fintech",
        text: "KYC documents and loan agreements get validated instantly with full RBI audit compliance.",
      },
      {
        sector: "Legal",
        text: "Contracts, wills, and POAs become dispute-proof with tamper-evident digital hashes.",
      },
      {
        sector: "Government",
        text: "E-tenders and vendor procurement bids process without procedural questions or delays.",
      },
    ],
  },
};

export const coreFeatures = [
  {
    id: "dual-auth",
    title: "Dual Authentication Method Support",
    tagline: "Class 3 DSC & Aadhaar eSign in One Unified Platform",
    subFeatures: [
      {
        name: "DSC-Based Signing",
        items: [
          "Class 3 Digital Signature Certificate authentication.",
          "Engineered for high-stakes contracts, GST filing, and government tenders.",
          "Legally recognized across all government and private sector platforms.",
          "Enterprise-grade PKI integration and Qualified Electronic Signature (QES) compliance.",
        ],
      },
      {
        name: "Aadhaar eSign Integration",
        items: [
          "Instant Biometric + OTP verification against official UIDAI backends.",
          "Fastest onboarding: Aadhaar holders skip physical certificate procurement delays.",
          "Fully valid under IT Act Section 3A for commercial and consumer agreements.",
          "Seamless DigiLocker integration for real-time document pulling and management.",
          "Zero dependency on physical dongles or hardware tokens.",
        ],
      },
    ],
  },
  {
    id: "digital-identity",
    title: "Digital Identity Verification at Every Step",
    tagline: "Cryptographic Proof Tied Permanently to Signer Identity",
    description:
      "All signatures carry verifiable cryptographic proof of identity rather than arbitrary image overlays.",
    capabilities: [
      "Unique digital fingerprint cryptographically tied to each individual signer.",
      "Real-time identity validation via DSC certificate chain validation or Aadhaar backend API.",
      "Multi-factor verification options (SMS OTP, biometric scan, or hardware certificate).",
      "Absolute non-repudiation: signers cannot legally dispute or deny their signature.",
      "Tamper-proof verification logs appended to document metadata.",
    ],
    beneficiaries: [
      { role: "Fintech", benefit: "KYC verification becomes instant and 100% audit-ready." },
      { role: "Legal", benefit: "Client identity permanently and immutably attached to contract." },
      { role: "Government", benefit: "Tender participants verified against official registries." },
    ],
  },
  {
    id: "legally-binding",
    title: "Legally Binding Document Signing Framework",
    tagline: "Full Evidentiary Weight Under Indian & International Law",
    description:
      "Every signature carries full legal weight under Indian law, admissible as primary evidence in court.",
    capabilities: [
      "IT Act Section 3 compliant (recognized as valid legal evidence in court proceedings).",
      "CDAC certification ensures guaranteed government acceptance across all ministries.",
      "Complete audit trail capturing server timestamp, public IP, and device fingerprint.",
      "Document integrity verification: cryptographic hash invalidates instantly if modified.",
      "Multi-party signing workflows supporting complex corporate hierarchies.",
    ],
    scenarios: [
      { domain: "Fintech", outcome: "Loan agreements signed in 5 minutes, legally enforceable." },
      { domain: "Legal", outcome: "Wills, POAs, and contracts hold up unequivocally in litigation." },
      { domain: "Government", outcome: "E-tender participation accepted on first submission." },
    ],
  },
  {
    id: "security-infra",
    title: "Secure Authentication & Authorization Infrastructure",
    tagline: "Enterprise Security Architecture with Zero Speed Compromise",
    description:
      "Built from the ground up for zero-trust environments with rigorous banking-grade controls.",
    capabilities: [
      "End-to-end encryption using modern TLS 1.3 in transit and AES-256 at rest.",
      "Granular Role-Based Access Control (RBAC) for teams and legal departments.",
      "Permission controls to delegate, approve, counter-sign, or reject with audit notes.",
      "Enterprise IP whitelisting, geographic fencing, and automated session management.",
      "Real-time threat detection, anomaly logging, and continuous compliance monitoring.",
      "Regular penetration testing and SOC 2 Type II certified operations.",
    ],
    industryHardening: [
      { domain: "Fintech", desc: "PCI-DSS ready architecture for payment-linked agreements." },
      { domain: "Legal", desc: "Attorney-client privilege protection with confidential communication logs." },
      { domain: "Government", desc: "Air-gapped signing support for classified tenders and national security." },
    ],
  },
  {
    id: "cdac-credibility",
    title: "Government-Approved Signing Platform Credibility",
    tagline: "Backed by CDAC—India's Premier Scientific R&D Institute",
    description:
      "Developed in strategic alignment with Centre for Development of Advanced Computing (CDAC) standards.",
    capabilities: [
      "CDAC approval validates technical compliance and cryptographic robustness.",
      "Direct DSC issuance integration, eliminating third-party CA delays.",
      "Official UIDAI Aadhaar backend integration via approved ASP/ESP gateways.",
      "Recognized by all central ministries, state departments, and statutory bodies.",
      "Full compatibility with MCA (Ministry of Corporate Affairs), GST, and e-Courts ecosystem.",
    ],
  },
];

export const threePillars = [
  {
    id: "fintech",
    badge: "Fintech & Digital Banking",
    title: "Accelerate Loan Closures & KYC Onboarding",
    description:
      "Engineered for high-velocity fintechs, NBFCs, and retail banks executing high-volume agreements without physical paper friction.",
    points: [
      "Loan Processing: Digital disbursement agreements execute in minutes rather than days.",
      "KYC Workflows: Paperless Aadhaar eSign satisfies full digital identity verification mandates.",
      "RBI Compliance: Automated audit trails guarantee complete regulatory documentation readiness.",
      "Cost Reduction: Eliminate up to 90% of printing, logistics, and manual physical storage overhead.",
      "High-Volume Scalability: Robust REST APIs handle thousands of concurrent document requests.",
    ],
  },
  {
    id: "legal",
    badge: "Legal Professionals & Law Firms",
    title: "Courtroom-Tested Enforceability & Non-Repudiation",
    description:
      "Empowers corporate counsels, litigators, and notary practitioners with cryptographic certainty that withstands judicial scrutiny.",
    points: [
      "Remote Execution: Client POAs, wills, settlement deeds, and NDAs executed anywhere in the world.",
      "Verified Signatories: Multi-factor authentication guarantees only authorized individuals sign.",
      "Non-Repudiation: Cryptographic public-key certificates permanently defeat signature forgery claims.",
      "Litigation Discovery: Export tamper-proof PDF audit certificates for immediate court submission.",
      "Practice Management: Embeds into practice management systems with webhook callback support.",
    ],
  },
  {
    id: "government",
    badge: "Government Agencies & e-Procurement",
    title: "Compliant e-Tendering & Public Citizen Services",
    description:
      "The government-approved digital signing platform purpose-built for transparent e-procurement, statutory filings, and public records.",
    points: [
      "E-Tenders: Vendors submit binding digital bids recognized across e-Procurement portals.",
      "Statutory Filings: Native support for authorized signatory verification across GST and MCA.",
      "Citizen Services: Fast-track citizen applications for permits, licenses, and social certificates.",
      "Tamper-Proof Bidding: Server-verified cryptographic timestamps prevent bid manipulation.",
      "Universal Access: Aadhaar eSign ensures citizens without physical USB tokens can participate.",
    ],
  },
];

export const industryUseCases = [
  {
    id: "fintech-banking",
    title: "Fintech & Digital Banking",
    challenge: "Loan approvals require wet signatures on physical documents.",
    solution: [
      "Loan agreements: Electronic signature solution streamlines signing via mobile",
      "Digital identity verification via Aadhaar eSign for faster onboarding",
      "Legally binding document signing holds up in compliance and litigation",
      "Audit trail generates automatically for RBI documentation",
      "Reduces manual handling of physical documents",
    ],
  },
  {
    id: "legal-notary",
    title: "Legal Services & Notarization",
    challenge: "Clients in different cities need remote signature options.",
    solution: [
      "Wills, POAs, and agreements: Sign remotely without geographic barriers",
      "Secure authentication & authorization via DSC ensures proper signatory",
      "Legally binding document signing recognized in courts under IT Act",
      "Permanent vault storage with cryptographic timestamp proof",
      "Eliminates need for notary coordination in remote scenarios",
    ],
  },
  {
    id: "govt-procurement",
    title: "Government Tenders & Procurement",
    challenge: "E-tender systems need vendor digital signatures.",
    solution: [
      "E-tender portal integration: Embed government approved signing platform into bid flows",
      "Dual auth: Vendors use DSC (if available) or Aadhaar eSign",
      "Digital identity verification cross-checks vendor against official registries",
      "Real-time validation of signatures at submission",
      "Immutable audit trail prevents bid tampering",
    ],
  },
  {
    id: "insurance-claims",
    title: "Insurance & Claims Processing",
    challenge: "Claims processing requires customer signatures on forms.",
    solution: [
      "Claim forms: Pre-populate and send for electronic signature solution",
      "Support bulk document signing for batch processing",
      "Digital identity verification confirms claimant against policy database",
      "Policy amendments via legally binding document signing",
      "Auto-generate compliance and audit reports",
    ],
  },
  {
    id: "corporate-contracts",
    title: "Corporate Contract Management",
    challenge: "Employee onboarding, NDAs, and offer letters spread across email.",
    solution: [
      "Centralized workflow: Draft, review, sign, and archive all documents",
      "Secure authentication & authorization ensures correct signatories",
      "Bulk signing: Send offers to multiple hires simultaneously",
      "Automated reminders for unsigned documents",
      "Searchable archive for compliance and record-keeping",
    ],
  },
];

export const securityComplianceData = {
  cdac: {
    title: "CDAC Certification",
    subtitle: "Government-Approved Signing Platform Backed by India's Premier R&D Institute",
    description:
      "Secure e-Sign adheres to the highest cryptographic standards defined by the Centre for Development of Advanced Computing (CDAC).",
    points: [
      "CDAC validates our cryptographic algorithms and Public Key Infrastructure (PKI) architecture.",
      "Subjected to mandatory annual independent third-party security audits.",
      "Full compliance with NIST cryptographic standards and OWASP Top 10 security guidelines.",
      "Strict zero-backdoor architecture with deterministic PKI execution.",
    ],
  },
  itAct: {
    title: "IT Act & Indian Law Compliance",
    subtitle: "Legally Binding Document Signing Recognized Across Indian Courts",
    description:
      "Every electronic signature executed through Secure e-Sign is legally recognized under Indian statutory frameworks:",
    points: [
      "Information Technology Act, 2000 (Section 3: Electronic records recognized as legal evidence).",
      "Indian Contract Act, 1872 (Electronic signatures enforceable as per IT Act requirements).",
      "Aadhaar eSign explicitly recognized under Section 3A for biometric-backed signatures.",
      "DSC issuance directly via CCA-approved Certifying Authorities ensures indisputable legal validity.",
    ],
  },
  auditTrail: {
    title: "Audit Trail & Non-Repudiation",
    subtitle: "Every Signature Bears Immutable Cryptographic Proof",
    description:
      "We generate a comprehensive, tamper-evident audit trail certificate for every signed document:",
    points: [
      "Signer Identity: Cryptographic certificate identifier or hashed Aadhaar verification token.",
      "Server Timestamp: Cryptographically sealed atomic time stamp (not claimable or local time).",
      "Document Hash: SHA-256 checksum proving document content has not changed by a single bit.",
      "Device Telemetry: IP address, device fingerprint, and browser environment logged.",
      "Explicit Consent Record: Exact checkbox consent, OTP confirmation, or biometric match timestamp.",
      "Tamper Detection: Any post-signature modification permanently invalidates the signature seal.",
    ],
  },
  dataResidency: {
    title: "Data Residency & Privacy Protection",
    subtitle: "100% Indian Sovereign Cloud Infrastructure",
    description:
      "Your documents and signer identities never leave Indian sovereign territory.",
    points: [
      "Dedicated signing infrastructure hosted exclusively in Tier-4 Indian data centers.",
      "Signer PII encrypted at rest using AES-256 and in transit using TLS 1.3.",
      "GDPR-ready pseudonymization for cross-border and international counterparties.",
      "Automated encrypted backups with quarterly tested disaster recovery protocols.",
      "Zero-access logs: No internal human admin can view document contents or signer PII.",
    ],
  },
};

export const howItWorksSteps = [
  {
    step: 1,
    title: "Upload & Prepare",
    shortDesc: "Upload your document and assign signature fields in seconds.",
    bullets: [
      "Upload PDF or Word document into our secure interface.",
      "Mark signature fields, initials, and date fields.",
      "Set signing sequence (sequential or parallel multi-party signing).",
      "Add custom instructions, deadlines, and corporate branding.",
      "Send invitations via encrypted email link instantly.",
    ],
  },
  {
    step: 2,
    title: "Sign Securely",
    shortDesc: "Signers choose their preferred legally recognized authentication method.",
    options: [
      {
        type: "Option A: DSC Signing",
        subtitle: "Class 3 Hardware Token / USB PKI",
        steps: [
          "Signer inserts cryptographic USB token or selects cloud DSC.",
          "Reviews document with zoom and inspection tools.",
          "Enters secure PIN to unlock cryptographic private key.",
          "Signature cryptographically appended with verifiable PKI chain.",
        ],
      },
      {
        type: "Option B: Aadhaar eSign",
        subtitle: "OTP / Biometric Instant Signing",
        steps: [
          "Signer inputs their 12-digit Aadhaar number.",
          "Receives instantaneous time-sensitive OTP on registered mobile.",
          "Explicitly confirms consent on UIDAI-compliant gateway.",
          "Digital signature appended instantly under IT Act Section 3A.",
        ],
      },
    ],
  },
  {
    step: 3,
    title: "Archive & Prove",
    shortDesc: "Document is locked permanently and backed by a verifiable audit certificate.",
    bullets: [
      "Signed document is cryptographically locked (no further modifications possible).",
      "Comprehensive Audit Trail Certificate generated as PDF or verifiable JSON.",
      "Automatic encrypted backup to enterprise vault with granular search capabilities.",
      "REST API & Webhooks trigger downstream updates to your ERP, CRM, or document archive.",
    ],
  },
];

export const faqsData = [
  {
    q: "Is a Legally Binding Document Signing really valid in court?",
    a: "Yes. Under Section 3 of the Information Technology Act, 2000, electronically signed documents are legally admissible as evidence in Indian courts. Secure e-Sign's tamper-evident audit trail—capturing server-verified timestamps, signer identity credentials, device fingerprints, and SHA-256 hashes—makes signature disputes nearly impossible to sustain. Aadhaar eSign adds an additional UIDAI biometric/OTP layer for indisputable proof of intent.",
  },
  {
    q: "Can I combine DSC and Aadhaar eSign in one workflow?",
    a: "Absolutely. You can send a single document to multiple signers where some use DSC (e.g., corporate directors with Class 3 tokens for statutory filing) while others use Aadhaar eSign (e.g., vendors or external clients without physical tokens). Both signature types carry full legal validity under Indian law and are compiled into a unified, consolidated audit certificate.",
  },
  {
    q: "What is the difference between Secure e-Sign and basic 'DocuSign-style' signing?",
    a: "Basic e-signature tools often rely on simple drawn signatures or email clicks without government-backed Public Key Infrastructure (PKI), which can be challenged in Indian courts. Secure e-Sign is backed by CDAC and Certifying Authorities, providing Qualified Electronic Signatures (QES) with cryptographic non-repudiation. For government contracts, high-stakes fintech transactions, and legal proceedings, qualified digital signatures are mandatory.",
  },
  {
    q: "Does Secure e-Sign work offline?",
    a: "DSC-based signing can operate in offline desktop environments using the cryptographic certificate on a physical USB hardware token. Aadhaar eSign requires an active internet connection to communicate securely with UIDAI's backend verification servers. Hybrid workflows are supported so you can choose the optimal method per signer.",
  },
  {
    q: "Can I integrate Secure e-Sign into my existing software?",
    a: "Yes. Secure e-Sign provides high-speed REST APIs, webhook event notifications, and client SDKs for JavaScript, Node.js, and Python. You can easily embed the signing ceremony, document preparation, and audit trail download directly into your CRM, ERP, loan origination system, or mobile app. Sandbox testing environments and comprehensive API docs are available for developers.",
  },
  {
    q: "Is Secure e-Sign GDPR and DPDP Act compliant for international and Indian signers?",
    a: "Yes. For Indian users, all signing infrastructure and document data reside within India in strict compliance with the Digital Personal Data Protection (DPDP) Act, 2023. For cross-border transactions involving international signers, signer personal data is pseudonymized and stored in compliance with GDPR principles.",
  },
  {
    q: "What if a signer disputes the signature later?",
    a: "The audit trail provides cryptographic proof of the signer's identity (via Class 3 certificate or Aadhaar token), the exact server-verified atomic timestamp, device telemetry and IP address, explicit OTP/PIN consent confirmation, and mathematical proof that the document was never modified post-signature. This evidence satisfies Section 3 of the IT Act, making fraudulent denial virtually impossible.",
  },
  {
    q: "How long are signed documents stored?",
    a: "On Enterprise plans, signed documents are stored indefinitely in an immutable, encrypted vault compliant with statutory records retention laws. Professional and Startup plans include 7-year storage, matching standard GST and tax record retention requirements. Custom retention schedules and automatic export to your own AWS S3 or private cloud are also supported.",
  },
  {
    q: "Can I revoke a signature after it has been appended?",
    a: "No. Once a document is cryptographically signed and sealed, the signature becomes immutable. This immutability is what provides legal enforceability. If parties agree to void an agreement, Secure e-Sign allows the execution of an addendum or revocation agreement, preserving the audit trails of both documents.",
  },
  {
    q: "What payment methods do you accept for Secure e-Sign?",
    a: "We accept credit/debit cards, net banking, UPI, NEFT/RTGS bank transfers, and GST invoices for B2B accounts. Annual billing options include a 15% discount.",
  },
];
