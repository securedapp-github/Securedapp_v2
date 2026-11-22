import assert from "node:assert/strict";
import fs from "node:fs";

const read = (file) => fs.readFileSync(file, "utf8");
const nextConfig = read("next.config.mjs");
const netlify = read("netlify.toml");
const redirects = read("public/_redirects");
const robots = read("public/robots.txt");
const sitemap = read("public/sitemap.xml");
const blogPage = read("src/pages/blog/[url].js");

for (const parameter of [
  "fbclid",
  "gclid",
  "msclkid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
  "affiliate",
]) {
  assert.doesNotMatch(
    robots,
    new RegExp(`Disallow:.*${parameter}`, "i"),
    `robots blocks ${parameter}`
  );
}

for (const url of [
  "https://securedapp.io/dpdp-compliance-platform/hospitals",
  "https://securedapp.io/careers",
]) {
  assert.doesNotMatch(sitemap, new RegExp(url.replaceAll(".", "\\.")), `sitemap contains ${url}`);
}

for (const category of ["blockchain", "finance", "legal", "token", "web3"]) {
  assert.doesNotMatch(sitemap, new RegExp(`https://(?:blog\\.)?securedapp\\.io/(?:blog/)?category/${category}`));
}

assert.match(
  nextConfig,
  /source: "\/dpdp-compliance-platform\/hospitals"[\s\S]*destination: "\/dpdp-compliance-platform\/healthcare"/
);
assert.match(nextConfig, /source: "\/blog\/category\/:path\*"[\s\S]*blog\.securedapp\.io\/category\/:path\*/);
assert.match(blogPage, /export async function getServerSideProps/);
assert.doesNotMatch(blogPage, /export async function getStaticProps/);
assert.match(blogPage, /destination: `https:\/\/blog\.securedapp\.io\//);
assert.match(netlify, /from = "\/careers"[\s\S]*to = "\/about"/);
assert.match(redirects, /\/blog\/category\/\*\s+https:\/\/blog\.securedapp\.io\/category\/:splat/);
assert.doesNotMatch(netlify, /from = "https:\/\/blog\.securedapp\.io\/\*"/);

// No blog-subdomain rule may point back into /blog/* on the main domain:
// main-domain /blog/<slug> now redirects to blog.securedapp.io, so a reverse
// rule would bounce the visitor between hosts forever.
assert.doesNotMatch(
  netlify,
  /from = "https:\/\/blog\.securedapp\.io\/[^"]+"\s*\n\s*to = "https:\/\/securedapp\.io\/blog\//
);
assert.doesNotMatch(
  redirects,
  /https:\/\/blog\.securedapp\.io\/\S+\s+https:\/\/securedapp\.io\/blog\//
);

// A sitemap must only list canonical 200 URLs. Any exact redirect source that
// still appears in the sitemap is a crawl-budget and duplication defect.
const sitemapPaths = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    try {
      return new URL(match[1]).pathname.replace(/\/$/, "");
    } catch {
      return match[1];
    }
  })
);
const exactRedirectSources = [
  ...nextConfig.matchAll(/source:\s*["']([^"']+)["']/g),
]
  .map((match) => match[1])
  .filter((source) => !/[*:()\\]/.test(source))
  .map((source) => source.replace(/\/$/, ""));
assert.deepEqual(
  exactRedirectSources.filter((source) => sitemapPaths.has(source)),
  [],
  "sitemap lists URLs that are permanently redirected"
);

// Trailing-slash variants must collapse in one hop at the edge.
for (const source of [
  "/dpdp-compliance-platform/hospitals/",
  "/privacy-policy/",
  "/terms-of-service/",
]) {
  assert.ok(redirects.includes(`${source}`), `_redirects missing ${source}`);
  assert.ok(
    netlify.includes(`from = "${source}"`),
    `netlify.toml missing ${source}`
  );
}

for (const file of [
  "src/components/navbar/navItems.js",
  "src/components/footer/footer.js",
  "src/components/SolidityShield/ThreatLandscapeSection.jsx",
  "src/components/SolidityShield/SolidityShieldOverview.jsx",
  "src/AuditExpress/components/Footer.tsx",
  "src/App.js",
]) {
  assert.doesNotMatch(read(file), /solidity-shield-vulnerabilities|to:\s*["']\/careers["']/);
}

// Robots blocks ekit crawl waste
assert.match(robots, /Disallow: \/\*ekit-blog-posts-paged=/);

// /compliance/dpdp redirects everywhere
assert.match(nextConfig, /source:\s*["']\/compliance\/dpdp["'][\s\S]*destination:\s*["']\/dpdp-compliance-platform["']/);
assert.match(netlify, /from = "\/compliance\/dpdp"[\s\S]*to = "\/dpdp-compliance-platform"/);
assert.match(redirects, /\/compliance\/dpdp\s+\/dpdp-compliance-platform\s+301!/);
assert.match(redirects, /\/compliance\/dpdp\/\s+\/dpdp-compliance-platform\s+301!/);

// Parity for DPDP components
for (const consentFile of [
  "src/pageComponents/product/FintechConsent/data.js",
  "src/pageComponents/product/HRConsent/data.js",
  "src/pageComponents/product/HealthcareConsent/data.js",
  "src/pageComponents/product/InsuranceConsent/data.js",
  "src/pageComponents/product/NBFCConsent/data.js",
  "src/pageComponents/product/SaaSConsent/data.js",
]) {
  assert.doesNotMatch(read(consentFile), /href:\s*["']\/compliance\/dpdp["']/);
}

// Blog subdomain 404 redirects
for (const rule of [
  "https://blog.securedapp.io/blockchain_technology_v1",
  "https://blog.securedapp.io/how-much-does-smart-contract-audit-cost",
  "https://blog.securedapp.io/how-tokenization-can-make-rwa",
  "https://blog.securedapp.io/post-quantum-cryptography-regulated-enterprises",
  "https://blog.securedapp.io/pqc-governance-platform",
  "https://blog.securedapp.io/solutions/code-signing-hsm",
  "https://blog.securedapp.io/cryptographic-agility-platform",
  "https://blog.securedapp.io/quantumvault/certificate-automation",
  "https://blog.securedapp.io/quantumvault/integration-guide",
  "https://blog.securedapp.io/blog/dpdp-compliance-for-mobile-apps",
  "https://blog.securedapp.io/token-movement-tracking-*",
]) {
  assert.ok(netlify.includes(`from = "${rule}"`), `netlify.toml missing ${rule}`);
  assert.ok(redirects.includes(rule), `_redirects missing ${rule}`);
}

// Main-domain blog redirects
assert.match(nextConfig, /source:\s*["']\/blog\/smartcontracts-in-the-music-industry["']/);
assert.match(netlify, /from = "\/blog\/smartcontracts-in-the-music-industry"/);
assert.match(redirects, /\/blog\/smartcontracts-in-the-music-industry\s+https:\/\/blog\.securedapp\.io/);

// No non-https LinkedIn links in blog data
assert.doesNotMatch(read("src/pageComponents/blog/blog-data.js"), /http:\/\/(?:www\.)?linkedin\.com/);

console.log("SEO configuration checks passed");
