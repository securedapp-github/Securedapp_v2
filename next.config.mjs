/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  poweredByHeader: false,
  transpilePackages: ["react-icons"],
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },

  // output: "export", // Outputs a Single-Page Application (SPA).
  // NOTE: Removed static export so that Next.js API Routes are enabled for the chatbot backend.
  images: {
    unoptimized: true,
  },

  // NOTE: This works for LOCAL DEV. For Production (Netlify/Export), these are ignored and 'netlify.toml' is used.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none';" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(), payment=(), usb=()" },
          { key: "X-XSS-Protection", value: "0" },
        ],
      },
    ];
  },

  // SEO Permanent Redirects (301)
  async redirects() {
    return [
      {
        source: "/solidity-shield",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/secure-cms",
        destination: "/dpdp-compliance-platform",
        permanent: true,
      },
      {
        source: "/blockchain-forensic-investigation-tool",
        destination: "/ai-blockchain-investigation-platform",
        permanent: true,
      },
      {
        source: "/pqc",
        destination: "/post-quantum-cryptography-platform",
        permanent: true,
      },
      {
        source: "/self-sovereign-identity-enterprises",
        destination: "/self-sovereign-identity",
        permanent: true,
      },
      {
        source: "/auditexpress/home",
        destination: "/audit-express",
        permanent: true,
      },
      {
        source: "/secure-pad",
        destination: "/tokenization-platform",
        permanent: true,
      },
      {
        source: "/web3-kyc",
        destination: "/web3-identity-and-aml-compliance-platform",
        permanent: true,
      },
      {
        source: "/quantum-vault",
        destination: "/enterprise-hsm-key-management-platform",
        permanent: true,
      },
      {
        source: "/dapp-security-audit",
        destination: "/dapp-smart-contract-security-audit-platform",
        permanent: true,
      },
      {
        source: "/token-audit",
        destination: "/token-smart-contract-audit",
        permanent: true,
      },
      {
        source: "/rwa-audit",
        destination: "/rwa-smart-contract-audit",
        permanent: true,
      },
      {
        source: "/blockchain-forensic",
        destination: "/blockchain-intelligence-and-forensic-platform",
        permanent: true,
      },
      {
        source: "/crypto-compliance-aml",
        destination: "/crypto-aml-compliance-platform",
        permanent: true,
      },
      {
        source: "/dapp-development",
        destination: "/web3-dapp-development-company",
        permanent: true,
      },
      {
        source: "/nfts-development",
        destination: "/nft-marketplace-development-company",
        permanent: true,
      },
      {
        source: "/defi-development",
        destination: "/defi-development-company",
        permanent: true,
      },
      {
        source: "/sox-compliance-sarbanes-oxley-compliance-audit",
        destination: "/sox-compliance-audit-platform",
        permanent: true,
      },
      {
        source: "/itgc-audit-services",
        destination: "/itgc-audit-and-compliance-services",
        permanent: true,
      },
      {
        source: "/levelup-academy",
        destination: "/blockchain-web3-training-academy",
        permanent: true,
      },
      {
        source: "/solidity-shield-vulnerabilities",
        destination: "/solidity-smart-contract-vulnerabilities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
