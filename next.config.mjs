import withBundleAnalyzer from '@next/bundle-analyzer';

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
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      { protocol: "https", hostname: "securedapp.io" },
      { protocol: "https", hostname: "securedapp-v2.vercel.app" },
    ],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons", "@fortawesome/free-solid-svg-icons", "@fortawesome/free-brands-svg-icons"],
  },

  // NOTE: This works for LOCAL DEV. For Production (Netlify/Export), these are ignored and 'netlify.toml' is used.
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|webp|avif|png|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
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
      // 301 Redirects for GSC URL Issues
      {
        source: "/blog/%20ai-smart-contract-audits-defi-security",
        destination: "/blog/ai-smart-contract-audits-defi-security",
        permanent: true,
      },
      {
        source: "/blog/%C2%A0ai-smart-contract-audits-defi-security",
        destination: "/blog/ai-smart-contract-audits-defi-security",
        permanent: true,
      },
      {
        source: "/blog/managing-supply-chain-with-implementation-of-blockchain-blog-by-akash%20",
        destination: "/blog/managing-supply-chain-with-implementation-of-blockchain-blog-by-akash",
        permanent: true,
      },
      {
        source: "/blog/managing-supply-chain-with-implementation-of-blockchain-blog-by-akash%C2%A0",
        destination: "/blog/managing-supply-chain-with-implementation-of-blockchain-blog-by-akash",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-services/",
        destination: "/",
        permanent: true,
      },
      // Legacy main-domain page redirects
      {
        source: "/decentralized-identity-did",
        destination: "/self-sovereign-identity",
        permanent: true,
      },
      {
        source: "/secure-watch",
        destination: "/real-time-blockchain-threat-monitoring",
        permanent: true,
      },
      {
        source: "/secure-trace",
        destination: "/ai-blockchain-investigation-platform",
        permanent: true,
      },
      {
        source: "/smart-contract-development",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/project/data-security-on-blockchain",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/smart-contracts-the-heart-of-defi",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      // Broken client links
      {
        source: "/blog/\\[url\\]",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/undefined",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/tok",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/securepad.netlify.app",
        destination: "/tokenization-platform",
        permanent: true,
      },
      {
        source: "/blog/comprehensive-guide\\:-safely-and-effectively-investing-in-cryptocurrency",
        destination: "/blog",
        permanent: true,
      },
      // WordPress feeds
      {
        source: "/comments/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/introduction-to-zkevm-and-its-applications/feed",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzer(nextConfig);
