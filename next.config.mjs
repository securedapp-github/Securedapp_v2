import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  trailingSlash: false, // Globally 301-redirects /path/ → /path (fixes trailing-slash crawl errors)
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
    optimizeCss: process.env.NODE_ENV === 'production',
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
      // Contact & Careers
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/career",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/career/",
        destination: "/careers",
        permanent: true,
      },

      // Solidity Shield / Scanner aliases
      {
        source: "/smart-contract-scanner-solidity-shield",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/smart-contract-scanner-solidity-shield/",
        destination: "/blockchain-security/smart-contract-security-audit",
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
        source: "/the-global-landscape-of-smart-contract-audits",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/the-global-landscape-of-smart-contract-audits/",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/exploring-the-adoption-of-smart-contracts-in-different-regions-and-sectors",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/exploring-the-adoption-of-smart-contracts-in-different-regions-and-sectors/",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/introduction-to-zkevm-and-its-applications",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/introduction-to-zkevm-and-its-applications/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/smart-contracts-the-heart-of-defi",
        destination: "/defi-development-company",
        permanent: true,
      },
      {
        source: "/smart-contracts-the-heart-of-defi/",
        destination: "/defi-development-company",
        permanent: true,
      },
      {
        source: "/project/data-security-on-blockchain",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/project/data-security-on-blockchain/",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/project/:path*",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },

      // WordPress taxonomy tags
      {
        source: "/tag/defi",
        destination: "/defi-development-company",
        permanent: true,
      },
      {
        source: "/tag/defi/",
        destination: "/defi-development-company",
        permanent: true,
      },
      {
        source: "/tag/ico",
        destination: "/tokenization-platform",
        permanent: true,
      },
      {
        source: "/tag/ico/",
        destination: "/tokenization-platform",
        permanent: true,
      },
      {
        source: "/tag/estonia",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/estonia/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/blog",
        permanent: true,
      },

      // Broken client & blog links
      {
        source: "/how-tokenization-can-make-rwa",
        destination: "/tokenization-platform",
        permanent: true,
      },
      {
        source: "/blog/how-tokenization-can-make-rwa",
        destination: "/tokenization-platform",
        permanent: true,
      },
      {
        source: "/blog/security-concerns-in-web3-and-securedapp",
        destination: "/blog/security-concerns-in-web3-and-securedapp's-solution",
        permanent: true,
      },
      {
        source: "/blog/how-to-secure-your-nft-marketplace-common-vulnerabilities-to-avoid",
        destination: "/nft-marketplace-development-company",
        permanent: true,
      },
      {
        source: "/blog/blockchain-security",
        destination: "/web3-security",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-right-smart-contract-auditor",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/blog/what-is-smart-contract-audit",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/blog/markets-in-crypto-assets-regulations-affect-blockchain-security",
        destination: "/crypto-aml-compliance-platform",
        permanent: true,
      },
      {
        source: "/blog/how-much-does-smart-contract-audit-cost",
        destination: "/blockchain-security/smart-contract-security-audit",
        permanent: true,
      },
      {
        source: "/blog/Staying-up-to-date-on-the-latest-aml-and-kyc-regulations-for-crypto-businesses",
        destination: "/crypto-aml-compliance-platform",
        permanent: true,
      },
      {
        source: "/blog/\\[url\\]",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/%5Burl%5D",
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
        destination: "/tokenization-platform",
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
      {
        source: "/blog/comprehensive-guide%3A-safely-and-effectively-investing-in-cryptocurrency",
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
        source: "/comments/feed/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/introduction-to-zkevm-and-its-applications/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/introduction-to-zkevm-and-its-applications/feed/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/blog",
        permanent: true,
      },

      // LinkedIn URL accidentally used as a site path
      {
        source: "/www.linkedin.com/in/:profile*",
        destination: "https://www.linkedin.com/in/:profile*",
        permanent: true,
      },
      {
        source: "/authors/www.linkedin.com/in/:profile*",
        destination: "https://www.linkedin.com/in/:profile*",
        permanent: true,
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzer(nextConfig);
