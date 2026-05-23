import React from 'react';

export const heroData = {
  tag: "ENTERPRISE KEY SECURITY",
  title: <>Enterprise HSM <span className="text-[#00ff88]">Key Management</span> Platform</>,
  description: "Quantum Vault provides FIPS 140-2 certified, hardware-backed cryptographic protection and automated lifecycle management. Engineered for post-quantum readiness, it secures your most critical cryptographic keys within tamper-resistant environments, completely eliminating software-layer vulnerability and external exposure.",
  primaryCta: "Get a Free Security Consultation",
  secondaryCta: "See How It Works →",
  badges: ["FIPS 140-2", "ISO 27001", "PCI-DSS Ready", "Enterprise-Grade Security"],
  alerts: [
    { text: "Key exposure attempt blocked", level: "Critical", iconColor: "#ff4d4d" },
    { text: "Unauthorized key access denied", level: "High", iconColor: "#ffa500" },
    { text: "Key rotation completed", level: "Info", iconColor: "#00d2ff" }
  ]
};

export const aiDefinitionData = {
  text: "HSM-Based Key Management Solutions are systems that use Hardware Security Modules (HSMs) to securely generate, store, manage, and control cryptographic keys within tamper-resistant hardware environments, ensuring maximum protection and regulatory compliance."
};

export const risksData = {
  tag: "THREATS",
  title: <>Critical Flaws in <span className="text-[#00ff88]">Software-Defined Security</span></>,
  description: "While traditional encryption standardizes data defense, storing keys within standard software environments, application memory, or cloud runtimes exposes them to advanced memory scraping and internal exploit vectors.",
  riskFactorTitle: "Enterprise Risk Factor",
  riskFactorText: "Attackers bypass complex algorithmic math by targeting exposed keys directly. Software-only key management leaves organizations vulnerable to credential escalation and systemic compliance failures."
};

export const challengesData = {
  tag: "CHALLENGES",
  title: "Common Challenges in Enterprise Key Management",
  description: "Even organisations with encryption in place often struggle with key management complexity.",
  challenges: [
    { title: "Lack of Visibility", desc: "Teams do not have clear insight into where keys are stored or how they are used.", icon: "eye" },
    { title: "Inconsistent Access Controls", desc: "Different systems apply different policies, increasing risk.", icon: "shield" },
    { title: "Manual Key Lifecycle Processes", desc: "Manual rotation and revocation lead to delays and errors.", icon: "clock" },
    { title: "Multi-Cloud Complexity", desc: "Managing keys across AWS, Azure, and on-prem environments creates fragmentation.", icon: "cloud" },
    { title: "Compliance Pressure", desc: "Meeting regulatory requirements becomes difficult without centralised control.", icon: "file" }
  ],
  aiInsight: "Without HSM-based key management, organisations risk key exposure, unauthorised access, compliance violations, and complete failure of encryption systems."
};

export const whatIsHSMData = {
  tag: "PROTECTION",
  title: <>Architecture: <span className="text-[#00ff88]">HSM-Backed vs. Software Keys</span></>,
  description: "Enterprise HSM key management isolates the execution boundary of every cryptographic key lifecycle process, including generation, distribution, rotation, and revocation, inside dedicated physical hardware security modules.",
  description2: "Unlike cloud software stores, keys are generated via hardware-based random number generators (TRNG) and cannot be extracted in plaintext format, even under administrative compromise.",
  comparisonLabel: "Unlike software-based systems, HSMs provide:",
  comparisonCards: [
    { title: "Physical and logical protection of keys", icon: "shield" },
    { title: "Secure execution of cryptographic operations", icon: "box" },
    { title: "Tamper-resistant environments", icon: "lock" },
    { title: "Controlled access policies", icon: "key" }
  ],
  usageLabel: "HSM-based key management is widely used in:",
  usageList: [
    "Banking and financial services",
    "Enterprise cloud environments",
    "Government and defense systems",
    "Data encryption platforms"
  ],
  capabilitiesTitle: "Key Capabilities (AI-Optimized)",
  capabilitiesList: [
    "Generates cryptographic keys inside secure hardware",
    "Prevents key extraction or duplication",
    "Enables full key lifecycle management (create, rotate, revoke)",
    "Performs encryption, decryption, and digital signing securely",
    "Enforces strict access control and security policies"
  ]
};

export const whyNowData = {
  tag: "WHY NOW",
  title: <>Post-Quantum Cryptography & <span className="text-[#00ff88]">Evolving Regulatory Mandates</span></>,
  cards: [
    { 
      title: "Mitigation of \"Harvest Now, Decrypt Later\" Attacks", 
      desc: "Adversaries routinely intercept and archive encrypted enterprise traffic with the intent to decrypt it once cryptanalytically relevant quantum computers (CRQCs) emerge. Quantum Vault mitigates this vector by applying hybrid classical-quantum wrappers immediately.", 
      icon: "lock" 
    },
    { 
      title: "Alignment with India's National Digital Frameworks", 
      desc: "With tightening oversight from local regulators, including the Reserve Bank of India (RBI), financial institutions and digital platforms require strict cryptographic sovereignty and proven audit trails.", 
      icon: "shield" 
    }
  ],
  footer: "Only HSM-Based Key Management Solutions deliver true enterprise-grade protection."
};

export const processData = {
  tag: "PROCESS",
  title: <>Structural <span className="text-[#00ff88]">Security Workflow</span></>,
  steps: [
    { title: "Hardware Ingestion", desc: "Cryptographic keys are minted directly inside the HSM using FIPS-validated hardware entropy.", icon: "key" },
    { title: "Tamper-Responsive Storage", desc: "Keys live strictly inside hardware limits. Physical breach indicators prompt automated self-protection and cryptographic erasure.", icon: "box" },
    { title: "Cryptographic Access Boundaries", desc: "Enforces rigid role-based access control (RBAC), multi-party approval (m-of-n authentication), and segregated duties.", icon: "shield" },
    { title: "Automated Lifecycles", desc: "Continuous hands-free rotation, expiration enforcement, and instant revocation to eliminate manual configuration drift.", icon: "refresh" }
  ],
  howTo: "PQC-enabled HSM key management secures the entire cryptographic lifecycle, from generation to rotation, strictly inside hardware boundaries."
};

export const featuresData = {
  tag: "FEATURES",
  title: <>Platform <span className="text-[#00ff88]">Capabilities</span></>,
  cards: [
    { title: "Crypto Agility", desc: "Decoupled algorithmic logic allows seamless transitions to NIST-approved algorithms like ML-KEM (FIPS 203) and ML-DSA (FIPS 204) without codebase overhauls.", icon: "refresh" },
    { title: "Bring Your Own Key (BYOK)", desc: "Retain complete root-of-trust sovereignty over keys integrated into commercial cloud platforms (AWS, Azure, Google Cloud).", icon: "key" },
    { title: "Web3 & Transaction Infrastructure", desc: "Enterprise-grade wallet protection, validator key custody, and tamper-proof multi-signature execution for blockchain nodes.", icon: "cloud" }
  ]
};

export const differentiatorData = {
  tag: "DIFFERENTIATOR",
  title: "What Makes Quantum Vault Different",
  description: "Most organisations rely on software-based key management systems or fragmented cloud-native tools. While these approaches provide basic functionality, they lack the security, control, and compliance required for enterprise environments. HSM-Based Key Management Solutions like Quantum Vault offer a fundamentally different approach by securing cryptographic keys within dedicated hardware.",
  cards: [
    { title: "Hardware vs Software Key Management", desc: "Software-based systems store keys in application memory or cloud environments, making them vulnerable to attacks. Quantum Vault ensures keys are generated and stored within HSMs, eliminating exposure risk." },
    { title: "Centralised vs Fragmented Control", desc: "Traditional systems often result in multiple key stores across environments. Quantum Vault provides a unified Enterprise HSM Key Management platform with centralised visibility and governance." },
    { title: "Compliance-First Architecture", desc: "Unlike generic key management tools, Quantum Vault is designed to meet strict regulatory standards from the ground up, including PCI-DSS, ISO 27001, and NIST." },
    { title: "Scalable Enterprise Deployment", desc: "Quantum Vault supports large-scale environments with thousands of keys, multiple integrations, and consistent policy enforcement across systems." }
  ]
};

export const protectionData = {
  tag: "PROTECTION",
  title: "Key Risks We Prevent",
  risks: [
    { title: "Key Exposure & Data Breaches", desc: "Unprotected keys can lead to full system compromise.", icon: "warning" },
    { title: "Insider Misuse", desc: "Unauthorised access by internal users can compromise sensitive data.", icon: "user-slash" },
    { title: "Weak Key Storage", desc: "Software-based storage increases vulnerability to attacks.", icon: "lock-open" },
    { title: "Compliance Violations", desc: "Improper key handling leads to regulatory penalties.", icon: "gavel" },
    { title: "Encryption Failure", desc: "Compromised keys render encryption useless.", icon: "unlocked" }
  ]
};

export const industriesData = {
  tag: "INDUSTRIES",
  title: <>Specialized <span className="text-[#00ff88]">Sector Implementations</span></>,
  description: "SecureDApp provides hardware-backed key management solutions tailored to the specific security and compliance needs of critical industries.",
  industries: [
    { title: "BFSI & Fintech", desc: "Protects high-throughput UPI payment signing infrastructure, settlement APIs, and customer validation tokens.", icon: "university" },
    { title: "SaaS & Cloud Provider Infrastructures", desc: "Centralizes tenant encryption control across fragmented multi-cloud nodes.", icon: "cloud" },
    { title: "Defense & Government Infrastructure", desc: "Provides isolated root-of-trust architectures conforming to critical national data localization policies.", icon: "shield" }
  ]
};

export const processFlowData = {
  tag: "PROCESS",
  title: "Our End-to-End Key Management Process",
  steps: [
    { title: "Asset Discovery & Key Mapping", desc: "Identify and map all cryptographic assets.", icon: "search" },
    { title: "Secure Key Generation", desc: "Generate keys within HSM hardware.", icon: "key" },
    { title: "Key Storage & Access Control", desc: "Store keys securely and enforce strict access policies.", icon: "box" },
    { title: "Lifecycle Management", desc: "Rotate, revoke, and manage keys continuously.", icon: "sync" },
    { title: "Compliance Reporting", desc: "Generate audit-ready reports for regulatory requirements.", icon: "chart-bar" }
  ]
};

export const technologyData = {
  tag: "TECHNOLOGY",
  title: <>Technical <span className="text-[#00ff88]">Protocols & Integrations</span></>,
  description: "Quantum Vault drops directly into modern enterprise ecosystems using industry-standard programmatic interfaces:",
  cards: [
    { title: "Standard Protocol APIs", desc: "Native compliance with KMIP, PKCS#11, and secure RESTful webhooks.", icon: "plug" },
    { title: "SIEM & IAM Interoperability", desc: "Delivers structured cryptographic telemetry directly to your Security Operations Center (SOC) for deterministic auditing.", icon: "shield" }
  ],
  standardsTitle: "Cryptographic Standards and Algorithms Supported",
  standardsDesc: "Quantum Vault supports industry-standard cryptographic algorithms required for secure enterprise operations.",
  standards: [
    { text: "AES (Advanced Encryption Standard)" },
    { text: "RSA (Rivest-Shamir-Adleman)" },
    { text: "ECC (Elliptic Curve Cryptography)" },
    { text: "SHA-2 and SHA-3 hashing algorithms" },
    { text: "TLS/SSL key management" }
  ],
  footerNote: "These standards are widely used across financial systems, cloud platforms, and enterprise security architectures, ensuring compatibility and compliance."
};

export const caseStudiesData = {
  tag: "CASE STUDIES",
  title: <>Validated Enterprise <span className="text-[#00ff88]">Deployment Outcomes</span></>,
  studies: [
    {
      title: "Case Study: Global Banking Infrastructure Consolidation",
      challenge: "A highly-distributed financial institution faced audit failures due to inconsistent key management applications across legacy departments.",
      approach: "Standardized on Quantum Vault hardware security modules.",
      outcomes: [
        "Consolidated cryptographic silos, automated historical key rotations, and reduced critical access paths by over 70%."
      ],
      cta: "Explore HSM-Based Key Management Solutions \u2192"
    },
    {
      title: "Case Study: Multi-Cloud SaaS Optimization",
      challenge: "Rapid enterprise cloud scaling across AWS and Azure led to fragmented cloud native KMS management rules.",
      approach: "Deployed centralized Quantum Vault BYOK framework.",
      outcomes: [
        "Single-pane policy visibility reached 100%, simplifying multi-cloud vendor compliance tracking."
      ],
      cta: "See How Enterprise HSM Key Management Works \u2192"
    }
  ]
};

export const comparisonData = {
  tag: "COMPARISON",
  title: <>Comparative <span className="text-[#00ff88]">Architecture Assessment</span></>,
  rows: [
    { feature: "Hardware Security", vault: "check", software: "x", manual: "x" },
    { feature: "Key Lifecycle Management", vault: "check", software: "warning", manual: "x" },
    { feature: "Compliance Ready", vault: "check", software: "warning", manual: "x" },
    { feature: "Zero Key Exposure", vault: "check", software: "x", manual: "x" }
  ]
};

export const benefitsData = {
  tag: "BENEFITS",
  title: <>Key <span className="text-[#00ff88]">Advantages</span></>,
  benefits: [
    { title: "Zero-Trust Hardware Boundaries", desc: "Complete key isolation from memory or application layers.", icon: "shield" },
    { title: "Quantum-Resistant Infrastructure", desc: "Day-one integration for post-quantum cryptographic (PQC) standards.", icon: "lock" },
    { title: "Unified Multi-Cloud Governance", desc: "Centralized visibility across AWS, Azure, GCP, and on-prem architectures.", icon: "cloud" },
    { title: "Rapid Enterprise Deployment", desc: "Production-ready implementation structures deployable within 24 hours.", icon: "clock" }
  ]
};

export const timingData = {
  tag: "TIMING",
  title: "When Should You Implement HSM-Based Key Management Solutions?",
  subtitle: "Organizations should adopt Enterprise HSM Key Management when:",
  list: [
    "Handling sensitive financial or customer data",
    "Operating in regulated industries (banking, healthcare, government)",
    "Managing encryption keys across multiple environments",
    "Scaling infrastructure across cloud and on-prem systems",
    "Preparing for compliance audits"
  ],
  footer: "Early adoption reduces long-term risk and simplifies security operations."
};

export const integrationData = {
  tag: "INTEGRATIONS",
  title: "Seamless Integration with Your Security Stack",
  items: [
    { title: "SIEM Integration (Logging & Audit)", icon: "file-alt" },
    { title: "IAM System Integration", icon: "users" },
    { title: "REST APIs & Webhooks", icon: "code" },
    { title: "Multi-Cloud Support", icon: "cloud" }
  ]
};

export const pricingData = {
  tag: "PRICING",
  title: "Flexible Engagement Models",
  plans: [
    { name: "Starter", subtitle: "For Small Teams", buttonText: "Get Started", popular: false },
    { name: "Professional", subtitle: "For Growing Enterprises", buttonText: "Get Started", popular: true },
    { name: "Enterprise", subtitle: "For Large Organizations", buttonText: "Contact Sales", popular: false }
  ],
  footerText: "Get a Custom Quote \u2192"
};

export const secureTodayData = {
  title: "Start Securing Your Keys Today",
  description: "Quantum Vault delivers Enterprise HSM Key Management that eliminates key exposure, ensures compliance, and protects your most critical assets.",
  highlights: [
    { text: "Setup in 24 hours", icon: "clock" },
    { text: "No long-term commitment", icon: "bolt" },
    { text: "Enterprise-ready infrastructure", icon: "circle" }
  ],
  trustedTitle: "Trusted for Enterprise Key Security",
  trustedSub: "Quantum Vault is designed for organizations that require:",
  trustedList: [
    "High-assurance cryptographic key protection",
    "Compliance with global security standards",
    "Scalable infrastructure for growing environments",
    "Consistent key governance across systems"
  ],
  footer: "Used across industries including finance, SaaS, and enterprise IT environments.",
  buttons: [
    { text: "Book a Free Demo", primary: true },
    { text: "Talk to a Security Expert", primary: false },
    { text: "Download Security Report", primary: false, outline: true }
  ]
};

export const faqData = {
  tag: "FAQ",
  title: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is HSM key management?",
      a: "HSM key management is the process of generating, storing, controlling, rotating, and protecting cryptographic keys using Hardware Security Modules, commonly called HSMs. Instead of storing sensitive encryption keys inside software environments where they can potentially be exposed, HSM-based systems keep those keys inside tamper-resistant hardware designed specifically for secure cryptographic operations. In modern enterprises, HSM key management plays a critical role in protecting financial systems, cloud infrastructure, APIs, digital identities, blockchain platforms, and encrypted customer data."
    },
    {
      q: "What is HSM in key management?",
      a: "In key management, an HSM acts as the secure hardware layer responsible for handling cryptographic keys and sensitive cryptographic operations. It securely generates encryption keys, stores them within protected hardware boundaries, and performs operations such as encryption, decryption, digital signing, and authentication without exposing private keys externally. HSMs are widely used in enterprise environments where high-assurance security and compliance are required."
    },
    {
      q: "What is the meaning of HSM management?",
      a: "HSM management refers to the administration and governance of Hardware Security Modules across an organization's infrastructure. This includes controlling user access, managing cryptographic policies, monitoring audit logs, rotating keys, handling firmware updates, and ensuring compliance with security standards. Effective HSM management helps organizations maintain visibility, consistency, and operational control over their cryptographic environment."
    },
    {
      q: "Is HSM a software or hardware?",
      a: "An HSM is a hardware-based security device. Unlike software-only key management systems, HSMs are physical cryptographic modules designed to securely generate, store, and use encryption keys inside tamper-resistant hardware. Even when organizations use cloud-based HSM services, the underlying infrastructure still relies on dedicated secure hardware operated by the provider."
    },
    {
      q: "What are the 5 key principles of security?",
      a: "The five key principles of information security are confidentiality, integrity, availability, authentication, and non-repudiation. Together, these principles ensure that sensitive information remains protected from unauthorized access, remains accurate and trustworthy, stays accessible when needed, verifies user identities correctly, and provides accountability for digital actions and transactions."
    },
    {
      q: "What are the 4 types of hardware security modules?",
      a: "The most common types of Hardware Security Modules include network-attached HSMs, PCIe-based HSMs, USB or portable HSMs, and cloud HSMs. Network-attached HSMs are typically used in enterprise data centers, PCIe HSMs are installed directly into servers, portable HSMs are often used for smaller-scale or developer-focused environments, and cloud HSMs provide scalable hardware-backed cryptographic services through cloud providers."
    },
    {
      q: "Are HSMs still relevant today?",
      a: "HSMs are more relevant today than ever before. As organizations move toward cloud-native infrastructure, digital payments, remote access systems, blockchain applications, and AI-driven ecosystems, cryptographic key protection has become increasingly critical. Modern cyberattacks rarely attempt to break encryption directly. Instead, attackers target the encryption keys themselves. HSMs help prevent this by isolating keys inside secure hardware environments with strict access controls and tamper resistance."
    },
    {
      q: "What is enterprise key management?",
      a: "Enterprise key management refers to the centralized management of cryptographic keys across an organization's infrastructure, applications, cloud platforms, and security systems. It involves securely generating, distributing, rotating, revoking, and monitoring encryption keys throughout their lifecycle. Enterprise key management helps organizations maintain consistent security policies, simplify compliance, and reduce the risks associated with fragmented or poorly managed cryptographic environments."
    },
    {
      q: "What is KMS and HSM in security?",
      a: "A KMS, or Key Management System, is the software or service layer responsible for managing encryption keys operationally, while an HSM provides the secure hardware foundation used to protect those keys. In many enterprise environments, the KMS handles governance, automation, and policy management, while the HSM ensures cryptographic keys remain protected inside tamper-resistant hardware."
    },
    {
      q: "How does enterprise key management (EKM) work?",
      a: "Enterprise key management works by centralizing control over cryptographic keys and enforcing security policies consistently across systems and environments. Keys are securely generated, assigned to applications or workloads, protected using access controls, rotated periodically, and monitored through audit logging systems. In mature environments, HSMs are often integrated into the architecture to provide hardware-backed protection for highly sensitive keys."
    },
    {
      q: "What is CKMS used for?",
      a: "CKMS stands for Cryptographic Key Management System. It is used to manage the complete lifecycle of cryptographic keys, including generation, storage, rotation, revocation, backup, and auditing. Organizations use CKMS platforms to simplify encryption governance and ensure secure key handling across cloud infrastructure, enterprise applications, databases, and security systems."
    },
    {
      q: "What is an enterprise key?",
      a: "An enterprise key is a cryptographic key used within enterprise environments to secure sensitive systems, communications, applications, or data. Examples include database encryption keys, TLS private keys, API signing keys, blockchain wallet keys, and digital certificate keys. Because these keys often protect critical infrastructure and sensitive information, securing them properly is extremely important."
    },
    {
      q: "What are the essential features of an enterprise-grade key management system?",
      a: "An enterprise-grade key management system should provide centralized governance, strong access control, audit logging, automated lifecycle management, multi-cloud integration, compliance support, disaster recovery capabilities, and HSM integration for hardware-backed protection. Large organizations also require scalability, API connectivity, and visibility into how cryptographic keys are being used across different systems and environments."
    },
    {
      q: "Are HSM and TPM the same?",
      a: "No, HSMs and TPMs are not the same thing. A TPM, or Trusted Platform Module, is typically designed to secure a single endpoint device such as a laptop or server. An HSM, on the other hand, is built for enterprise-scale cryptographic security and centralized key management. While both involve hardware-backed security, HSMs provide significantly stronger governance, scalability, and cryptographic capabilities."
    },
    {
      q: "Is TPM a type of HSM?",
      a: "TPMs and HSMs belong to the broader category of hardware-based security technologies, but they serve different purposes. TPMs are lightweight hardware modules primarily focused on endpoint security and device integrity, while HSMs are specialized enterprise-grade cryptographic systems designed for high-security environments and centralized key protection."
    },
    {
      q: "What is the difference between HSM and TPM?",
      a: "The main difference between an HSM and a TPM is scale and purpose. TPMs are embedded security chips used to protect individual devices, operating systems, and local credentials. HSMs are dedicated cryptographic platforms designed to secure enterprise encryption keys, digital signatures, payment systems, cloud infrastructure, and large-scale cryptographic operations. HSMs also provide stronger tamper resistance and advanced governance features."
    },
    {
      q: "What else is TPM called?",
      a: "TPM stands for Trusted Platform Module. It is also sometimes referred to as a hardware security chip or a hardware root of trust because it establishes device-level trust and integrity within computing systems."
    },
    {
      q: "What are the 8 pillars of TPM?",
      a: "This question typically refers to Total Productive Maintenance rather than cybersecurity. The eight pillars include Autonomous Maintenance, Planned Maintenance, Quality Maintenance, Focused Improvement, Early Equipment Management, Training and Education, Safety and Environment, and Office TPM."
    },
    {
      q: "What is the purpose of an HSM?",
      a: "The primary purpose of an HSM is to securely protect cryptographic keys and perform sensitive cryptographic operations within tamper-resistant hardware. HSMs help organizations reduce the risk of key theft, improve encryption security, support compliance requirements, and strengthen trust across digital systems and transactions."
    },
    {
      q: "What is HSM in DevOps?",
      a: "In DevOps environments, HSMs are often used to secure sensitive cryptographic operations such as code signing, certificate management, API authentication, CI/CD pipeline security, and secret protection. By integrating HSMs into DevOps workflows, organizations reduce the risk of exposed credentials and strengthen software supply chain security."
    },
    {
      q: "How do hardware security modules enhance data encryption for large organisations?",
      a: "Hardware Security Modules enhance enterprise encryption by protecting cryptographic keys inside secure hardware environments instead of software-based storage. This significantly reduces the risk of key theft through malware, insider misuse, memory exposure, or application vulnerabilities. HSMs also improve governance, access control, auditing, and compliance for organizations operating across complex cloud and hybrid infrastructures."
    },
    {
      q: "What is HSM key management used for in blockchain and Web3?",
      a: "In blockchain and Web3 ecosystems, HSM key management is commonly used for secure wallet custody, blockchain transaction signing, validator security, institutional asset protection, and digital identity management. Since blockchain private keys directly control digital assets, HSMs provide an additional layer of protection by isolating keys within tamper-resistant hardware."
    },
    {
      q: "What is PQC-enabled HSM key management?",
      a: "PQC-enabled HSM key management refers to Hardware Security Module infrastructure designed to support post-quantum cryptography. These systems are built to help organizations transition toward quantum-resistant cryptographic algorithms while maintaining secure key management practices. As concerns around future quantum computing threats grow, PQC-enabled HSM platforms are becoming increasingly important for long-term cryptographic resilience."
    },
    {
      q: "What is the Harvest Now Decrypt Later attack and how does HSM prevent it?",
      a: "Harvest Now Decrypt Later refers to the strategy where attackers collect encrypted data today with the intention of decrypting it later using future quantum computing capabilities. While HSMs alone do not stop quantum attacks, PQC-enabled HSM infrastructure helps organizations prepare for quantum-resistant cryptography and maintain stronger control over cryptographic keys during the transition to post-quantum security models."
    },
    {
      q: "What is crypto agility in HSM key management?",
      a: "Crypto agility refers to the ability to quickly adapt cryptographic algorithms, standards, and policies without requiring major infrastructure redesigns. In HSM key management, crypto agility is essential because organizations may need to migrate from traditional algorithms like RSA and ECC toward newer post-quantum standards as the cybersecurity landscape evolves."
    },
    {
      q: "Which NIST post-quantum algorithms should an HSM support?",
      a: "Modern enterprise HSM platforms are increasingly expected to support post-quantum cryptographic algorithms standardized or selected by NIST, including ML-KEM, ML-DSA, and SLH-DSA. Support for these algorithms helps organizations prepare for the future impact of quantum computing on cryptographic security."
    },
    {
      q: "What compliance standards are critical for HSM-based key management in banking?",
      a: "Banking and financial institutions typically require HSM-based key management systems to align with standards such as PCI-DSS, FIPS 140-2 or FIPS 140-3, ISO 27001, NIST guidelines, PCI PIN Security Requirements, and regional regulatory expectations. These standards emphasize strong encryption governance, secure key handling, auditability, and operational resilience."
    },
    {
      q: "What are the top providers of enterprise HSM key management services in India?",
      a: "Several global and regional providers operate in the Indian enterprise HSM market, including Thales, Entrust, Utimaco, IBM, Futurex, AWS CloudHSM, Azure Managed HSM, and Google Cloud HSM. Indian cybersecurity and blockchain security companies are also increasingly building HSM-integrated and post-quantum-ready key management solutions tailored for local enterprise and regulatory requirements."
    },
    {
      q: "Which providers offer managed HSM services for cloud environments?",
      a: "Major cloud providers offering managed HSM services include AWS CloudHSM, Azure Managed HSM, Google Cloud HSM, and IBM Cloud HSM. These services allow organizations to use hardware-backed cryptographic protection without managing physical HSM infrastructure directly."
    },
    {
      q: "What HSM compliance requirements must Indian banks meet under RBI guidelines?",
      a: "Indian banks are expected to maintain strong cryptographic governance, secure encryption practices, access controls, audit logging, payment security protections, and operational resilience under RBI cybersecurity expectations. In many cases, banks also need to align with PCI-DSS and payment-related security requirements alongside internal governance standards."
    },
    {
      q: "What are the best enterprise HSM solutions for secure key management?",
      a: "The best enterprise HSM solution depends on the organization's infrastructure, compliance requirements, cloud strategy, scalability needs, and cryptographic workloads. Leading HSM platforms today focus on strong hardware protection, centralized governance, multi-cloud integration, crypto agility, blockchain compatibility, and post-quantum readiness."
    },
    {
      q: "How to choose an HSM-based key management system for large organisations?",
      a: "Organizations choosing an HSM-based key management system should evaluate factors such as scalability, compliance support, integration capabilities, cloud compatibility, audit visibility, lifecycle automation, disaster recovery, crypto agility, and future readiness for post-quantum cryptography. The ideal solution should align with both operational requirements and long-term security strategy."
    },
    {
      q: "Compare different deployment models for secure key management infrastructure",
      a: "Secure key management infrastructure can be deployed using on-prem HSMs, cloud HSMs, hybrid models, or managed HSM services. On-prem deployments offer maximum control and customization, while cloud HSMs provide scalability and operational simplicity. Hybrid models are increasingly popular because many enterprises operate across both cloud and on-prem environments simultaneously."
    },
    {
      q: "What are the benefits of using hardware security modules for enterprise key management?",
      a: "Hardware Security Modules provide stronger cryptographic protection by isolating keys inside tamper-resistant hardware environments. They reduce key exposure risks, strengthen compliance, improve auditability, support secure cryptographic operations, centralize governance, and help organizations maintain trust across digital systems. As encryption becomes increasingly central to enterprise infrastructure, HSMs have become a foundational component of modern cybersecurity architecture."
    }
  ]
};

export const learningPlanData = {
  tag: "GUIDE",
  title: <>Mastering <span className="text-[#00ff88]">HSM Key Management</span></>,
  description: "Explore our comprehensive 6-phase guide to understanding and implementing enterprise-grade Hardware Security Module (HSM) architecture.",
  phases: [
    {
      phase: "Phase 1",
      title: "Foundations of Security",
      desc: "Understand the core principles of enterprise security, the 5 key principles (confidentiality, integrity, availability, authentication, non-repudiation), and how enterprise key management systems function.",
      topics: ["5 key security principles", "Enterprise key management overview", "Role of an enterprise key", "CKMS essentials"]
    },
    {
      phase: "Phase 2",
      title: "Intro to Hardware Security Modules",
      desc: "Define what an HSM is, whether it's software or hardware, its primary purpose in key management, and the four main types of HSMs deployed today.",
      topics: ["What is HSM key management?", "HSM vs Software", "4 types of HSMs", "Relevance of HSMs today"]
    },
    {
      phase: "Phase 3",
      title: "HSM vs KMS vs TPM",
      desc: "Understand where HSMs fit into the broader security ecosystem compared to Key Management Systems (KMS) and Trusted Platform Modules (TPM).",
      topics: ["KMS vs HSM", "HSM vs TPM differences", "What is a TPM?"]
    },
    {
      phase: "Phase 4",
      title: "Modern HSM Applications",
      desc: "Learn how large organizations use HSMs today across modern architectures, including DevOps, Web3, and Blockchain environments.",
      topics: ["HSM in DevOps", "Blockchain and Web3 usage", "Enhancing data encryption"]
    },
    {
      phase: "Phase 5",
      title: "Post-Quantum Cryptography",
      desc: "Prepare for future threats like \"Harvest Now, Decrypt Later\" attacks. Learn about Post-Quantum Cryptography (PQC), crypto agility, and NIST post-quantum algorithms.",
      topics: ["PQC-enabled HSMs", "Harvest Now, Decrypt Later", "Crypto agility", "NIST PQC algorithms"]
    },
    {
      phase: "Phase 6",
      title: "Compliance & Deployment",
      desc: "Navigate real-world deployment, regional regulations (like RBI guidelines in India), deployment models (Cloud vs On-Prem), and how to choose the right provider.",
      topics: ["Banking compliance standards", "RBI guidelines", "Managed cloud HSMs", "Choosing an HSM system"]
    }
  ]
};
