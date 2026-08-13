export const navItems = [
  {
    to: "#product",
    items: [
      { name: "Solidity Shield", to: "/blockchain-security/smart-contract-security-audit" },
      { name: "Secure CMS (Consent)", to: "/dpdp-compliance-platform" },
      { name: "Secure Trace", to: "/ai-blockchain-investigation-platform" },
      { name: "PQC Suite", to: "/post-quantum-cryptography-platform" },
      {
        name: "SecureX DID",
        to: "/self-sovereign-identity",
      },
      { name: "Secure Watch", to: "/real-time-blockchain-threat-monitoring" },
      { name: "Audit Express", to: "/audit-express" },
      { name: "Secure Pad", to: "/tokenization-platform" },
      { name: "SecureX-ID", to: "/web3-identity-and-aml-compliance-platform" },
      { name: "Quantum Vault", to: "/enterprise-hsm-key-management-platform" },
    ],
    label: "Product",
  },
  {
    to: "#services",
    items: [
      {
        title: "Audit",
        children: [
          { name: "Smart Contract Audit", to: "/smart-contract-audit" },
          { name: "Dapp Security Audit", to: "/dapp-smart-contract-security-audit-platform" },
          { name: "Token Audit", to: "/token-smart-contract-audit" },
          { name: "RWA Audit", to: "/rwa-smart-contract-audit" },
        ],
      },
      {
        title: "Security",
        children: [
          { name: "Web3 Security", to: "/web3-security" },
          { name: "Blockchain Forensic", to: "/blockchain-intelligence-and-forensic-platform" },
        ],
      },
      {
        title: "Regulatory Solutions",
        children: [
          { name: "Crypto Compliance & AML", to: "/crypto-aml-compliance-platform" },
          {
            name: "Decentralized Identity (DID)",
            to: "/self-sovereign-identity",
          },
          { name: "DApp Development", to: "/web3-dapp-development-company" },
          { name: "NFTs Development", to: "/nft-marketplace-development-company" },
          { name: "DeFi Development", to: "/defi-development-company" },
          {
            name: "SOX Compliance",
            to: "/sox-compliance-audit-platform",
          },
          { name: "ITGC Compliance", to: "/itgc-audit-and-compliance-services" },
        ],
      },
      {
        title: "Training & Education",
        children: [{ name: "LevelUp Academy", to: "/blockchain-web3-training-academy" }],
      },
    ],
    label: "Services",
  },
  {
    to: "#resources",
    items: [
      { name: "Blogs", to: "https://blog.securedapp.io", external: true },
      { name: "Our Authors", to: "/authors" },
      { name: "White Papers", to: "/white-paper" },
      { name: "About Us", to: "/about" },
      { name: "Media", to: "/media" },
      { name: "Support", to: "/support" },
    ],
    label: "Resources",
  },
  {
    to: "/solidity-shield-scan/pricing",
    items: [],
    label: "Pricing",
  },
];
