# SEO GSC Fix Plan — SecuredApp.io & Blog.SecuredApp.io

**Generated**: 2026-11-21  
**Scope**: Fix all verified SEO defects from GSC reports across 4 categories:
- Not Found (404) — 14 real issues
- Discovered - Currently Not Indexed — 60 real issues
- Crawled - Currently Not Indexed — 136 real issues
- Excluded by 'noindex' tag — 972 real issues (mostly crawl waste)
- Page with Redirect — 2 real issues

**Target**: 0 critical issues, <20 "Crawled not indexed", <50 "Excluded by noindex"

---

## Phase 0 — Pre-flight Checks

| Check | Status | Notes |
|-------|--------|-------|
| Git clean | NOT RUN | Changes remain uncommitted by request |
| Build passes | ✅ | `npm run build` successful locally |
| SEO config check | ✅ | `npm run check:seo` passes |
| Netlify/Next.js redirect parity | ✅ | `next.config.mjs`, `netlify.toml`, `public/_redirects` aligned |
| Phase 1 Execution (Steps 1-4) | PARTIAL | Repository redirects and links implemented; WordPress pagination/date-archive work requires external access |
| Phase 2 Execution (Steps 5-7) | PARTIAL | Repository redirect mappings implemented; WordPress merges, schemas, category/author changes require external access |
| Phase 3 Execution (Step 8-9) | PARTIAL | Main-domain H1/content/link work implemented; API-host changes require external access |
| Phase 4 Execution (Step 10) | PARTIAL | Local checks pass; deployment and GSC actions remain pending |

---

## Step 1 — Fix Critical 404s (P1: Not Found Report)

**Tags**: `impl`, `security`  
**Chain**: `tdd-guide,typescript-reviewer,security-reviewer`

### 1.1 Add `/compliance/dpdp` → `/dpdp-compliance-platform` redirect
- **Files**: `next.config.mjs`, `netlify.toml`, `public/_redirects`
- **Action**: Add permanent redirect for `/compliance/dpdp` (and trailing slash) to `/dpdp-compliance-platform`
- **Acceptance**: `curl -I /compliance/dpdp` returns 308/301 to `/dpdp-compliance-platform`; GSC "Validate fix" passes

### 1.2 Fix broken links on 7 DPDP industry pages
- **Files**: `src/pages/dpdp-compliance-platform/fintech.js`, `nbfc.js`, `hr.js`, `healthcare.js`, `hospitals.js`, `insurance.js`, `saas.js`
- **Action**: Replace any `href="/compliance/dpdp"` with `href="/dpdp-compliance-platform"`
- **Acceptance**: No internal links point to `/compliance/dpdp`; `grep -r "compliance/dpdp" src/` returns zero matches

### 1.3 Add blog subdomain 404 redirects (P2 from Not Found report)
- **Files**: `netlify.toml` (blog.securedapp.io rules), `public/_redirects`
- **Targets**:
  - `/blockchain_technology_v1` → `/blockchain-technology-has-reached-a-pivotal-moment-in-finance-and-security/`
  - `/how-much-does-smart-contract-audit-cost` → `/how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing-2/`
  - `/how-tokenization-can-make-rwa` → `/how-tokenization-can-make-real-world-assets-more-sustainable/`
  - `/post-quantum-cryptography-regulated-enterprises` → `/what-is-post-quantum-cryptography-and-why-indian-enterprises-must-prepare-now/`
  - `/pqc-governance-platform` → `https://securedapp.io/post-quantum-cryptography-platform`
  - `/solutions/code-signing-hsm` → `https://securedapp.io/enterprise-hsm-key-management-platform`
  - `/cryptographic-agility-platform` → `https://securedapp.io/post-quantum-cryptography-platform`
  - `/quantumvault/certificate-automation` → `https://securedapp.io/enterprise-hsm-key-management-platform`
  - `/quantumvault/integration-guide` → `https://securedapp.io/enterprise-hsm-key-management-platform`
  - `/blog/dpdp-compliance-for-mobile-apps` → `/how-securecms-reduces-dpdp-compliance-risk-for-content-heavy-and-data-driven-web-platforms/`
- **Acceptance**: Each live-checks as 301 to correct destination; no redirect chains

### 1.4 Fix main-domain blog 404s
- **Files**: `next.config.mjs`, `netlify.toml`, `public/_redirects`
- **Targets**:
  - `/blog/security-concerns-in-web3-and-securedapp` → `/blog/security-concerns-in-web3-and-securedapp's-solution` (already exists, verify target returns 200)
  - `/blog/smartcontracts-in-the-music-industry` → `/smart-contracts-in-the-music-industry-revolutionizing-royalties-and-rights-management/`
  - `/blog/smart-` → `/blog/` (or 410 if no match)
- **Acceptance**: Live 301/308 to valid 200 pages

---

## Step 2 — Fix Author LinkedIn Links (P3: Not Found Report)

**Tags**: `impl`  
**Chain**: `tdd-guide,typescript-reviewer`

### 2.1 Fix author box link template
- **Files**: Search for `www.linkedin.com/in/` in `src/` — likely in author components
- **Action**: Ensure all LinkedIn URLs use `https://www.linkedin.com/in/...` (not relative)
- **Acceptance**: `grep -r "www.linkedin.com/in/" src/` shows only absolute HTTPS URLs; GSC "Validate fix" passes for the two LinkedIn URLs

---

## Step 3 — Fix Redirect Issues (Page with Redirect Report)

**Tags**: `impl`  
**Chain**: `tdd-guide,typescript-reviewer`

### 3.1 Update `/careers` internal links (61 pages)
- **Files**: `src/components/navbar/navItems.js`, `src/components/footer/footer.js`, and any other header/footer/shared components
- **Action**: Change all `href="/careers"` to `href="/about"`
- **Acceptance**: `grep -r 'href="/careers"' src/` returns zero matches; `/careers` removed from `sitemap.xml`

### 3.2 Update `/solidity-shield-vulnerabilities` internal links (2 pages)
- **Files**: `src/components/SolidityShield/ThreatLandscapeSection.jsx`, `src/components/SolidityShield/SolidityShieldOverview.jsx`, `src/AuditExpress/components/Footer.tsx`
- **Action**: Change links to `/solidity-smart-contract-vulnerabilities`
- **Acceptance**: `grep -r "solidity-shield-vulnerabilities" src/` returns zero matches

### 3.3 Fix token-movement-tracking redirect target
- **File**: `netlify.toml` (blog.securedapp.io rule) or blog subdomain config
- **Action**: Re-point `blog.securedapp.io/token-movement-tracking-*` to closest monitoring post (e.g., `/real-time-blockchain-threat-monitoring-complete-guide-for-2026/`)
- **Acceptance**: Live check shows 301 to relevant monitoring post

---

## Step 4 — Eliminate Crawl Waste: ElementsKit Pagination (P1: Excluded by noindex)

**Tags**: `impl`, `refactor`  
**Chain**: `architect,refactor-cleaner,typescript-reviewer`

### 4.1 Replace ElementsKit Blog Posts widget pagination
- **Location**: WordPress blog (blog.securedapp.io) — Elementor templates for blog home, archive, category
- **Action**: Replace ElementsKit "Blog Posts" widget pagination with:
  - Option A: Elementor "Posts" widget with numbered pagination (`/page/N/`)
  - Option B: AJAX "Load More" button with no crawlable `href`
- **Acceptance**: No `?ekit-blog-posts-paged=` URLs generated on any blog page; `grep -r "ekit-blog-posts-paged" blog-theme/` returns zero

### 4.2 Disable Yoast date archives
- **Location**: WordPress Admin → Yoast SEO → Settings → Advanced → Date archives: **OFF**
- **Action**: Toggle off; Yoast will 301 date archives to home
- **Acceptance**: `/2026/10/04/` returns 301 to `/`; no day-archive URLs in sitemap

### 4.3 Add robots.txt disallow for ekit pagination (after step 4.1+4.2)
- **File**: `blog.securedapp.io/robots.txt` (separate from main domain)
- **Action**: Add `Disallow: /*ekit-blog-posts-paged=`
- **Acceptance**: `curl blog.securedapp.io/robots.txt` shows rule; no new pagination URLs crawled

---

## Step 5 — Fix "Discovered - Currently Not Indexed" Posts (P1)

**Tags**: `impl`, `refactor`  
**Chain**: `architect,refactor-cleaner,typescript-reviewer`

### 5.1 Merge overlapping topic clusters (highest impact)
| Cluster | Keep (canonical) | Merge & 301 |
|---------|------------------|-------------|
| Real-time blockchain threat monitoring (12+ posts) | `real-time-blockchain-threat-monitoring-complete-guide-for-2026` | All others |
| Smart contract audit pricing (3 posts) | `how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing-2` | `token-audit-cost-pricing-factors`, `how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing` |
| Tokenization/RWA (3 posts) | `fractional-ownership-of-real-world-assets-a-blockchain-revolution` | `tokenization-of-real-world-assets-fractional-ownership-use-cases-in-2025`, `tokenizing-real-world-assets-revolution` |
| DeFi security monitoring (2 posts) | `defi-security-real-time-on-chain-threat-detection-strategies` | `defi-protocol-real-time-blockchain-threat-detection` |
| HSM/Key management (3 posts) | `enterprise-hsm-key-management-guide` | `enterprise-hsm-key-management-guide-2`, `top-7-enterprise-hsm-based-key-management-companies-in-2026` |
| Self-sovereign identity (3 posts) | `enterprise-guide-to-self-sovereign-identity` | `self-sovereign-identity-enterprise-implementation-guide`, `interoperable-self-sovereign-identity-across-enterprise-networks` |
| Access control (3 posts) | `strengthening-access-control-decentralized-systems` | `strengthening-access-control-decentralized-systems-2`, `how-securedapp-strengthens-access-control-to-build-trust-in-decentralized-systems` |
| Web3 startup trust (2 posts) | `how-web3-startups-can-build-user-trust-through-transparency` | `how-web3-startups-can-build-user-trust-through-transparency-2` |
| DID/phishing (2 posts) | `decentralized-identity-in-web3-can-it-eliminate-phishing-forever` | `how-decentralized-identity-did-can-prevent-web3-phishing-attacks` |

- **Action**: For each merge: combine best content into canonical, add FAQ schema, update modified date, 301 old URLs in blog subdomain config
- **Acceptance**: Each merged URL returns 301 to canonical; canonical has FAQPage schema; word count ≥ 2500; title < 60 chars

### 5.2 Fix duplicate slugs (-2, -3 variants)
- **Action**: 301 each `-2`/`-3` URL to clean slug; ensure clean slug is the canonical
- **Targets**: `erc20-erc721-token-audit-guide-2`, `enterprise-hsm-key-management-guide-2`, `how-web3-startups-can-build-user-trust-through-transparency-2`, `dpdp-consent-management-platform-india-3`, `strengthening-access-control-decentralized-systems-2`, `how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing-2`
- **Acceptance**: All `-N` variants return 301 to clean slug

### 5.3 Add internal links to orphan posts (63 posts with 0 internal links)
- **Action**: Add "Related Posts" block (4-5 same-category links) to single-post template; add 3-5 contextual links from related indexed posts and product pages
- **Files**: Blog subdomain single-post template (WordPress/Elementor)
- **Acceptance**: Each previously-orphan post has ≥3 internal links from indexed posts

### 5.4 Expand thin posts (< 1500 words)
- **Action**: Expand with original examples, data, FAQ section + FAQPage schema
- **Targets**: All posts listed with word count < 1500 in the report
- **Acceptance**: Post word count ≥ 1500; FAQPage schema present

### 5.5 Fix title length (> 60 chars)
- **Action**: Apply Yoast post title template: `%%title%% | SecureDApp` (ensures < 60 chars in SERP)
- **Location**: WordPress → Yoast SEO → Search Appearance → Content Types → Posts
- **Acceptance**: All post titles ≤ 60 chars in SERP preview

### 5.6 Link posts to product pages (18 posts missing)
- **Action**: Add contextual link from each post to matching securedapp.io product page; add back-link from product page to post
- **Acceptance**: Each post has ≥1 link to product page; product page has "Related Blog" section

---

## Step 6 — Fix "Crawled - Currently Not Indexed" Posts (P1)

**Tags**: `impl`, `refactor`  
**Chain**: `architect,refactor-cleaner,typescript-reviewer`

*Same actions as Step 5 — the two reports overlap heavily. Execute Steps 5.1–5.6 for all posts appearing in either report.*

### 6.1 Additional merge targets from Crawled report
| Cluster | Keep | Merge & 301 |
|---------|------|-------------|
| Real-time monitoring (8+ posts) | `real-time-blockchain-threat-monitoring-complete-guide-for-2026` | `real-time-blockchain-threat-monitoring-case-studies`, `real-time-blockchain-threat-monitoring-vs-traditional-security`, `real-time-blockchain-monitoring-compliance-requirements-explained`, `ai-powered-real-time-blockchain-threat-monitoring`, `real-time-blockchain-threat-monitoring-complete-implementation-guide`, `real-time-blockchain-threat-monitoring-tools-reviewed`, `real-time-blockchain-threat-monitoring-guide`, `blog-real-time-blockchain-threat-monitoring`, `real-time-blockchain-anomaly-detection-advanced-techniques`, `real-time-blockchain-threat-alert-systems-complete-overview`, `on-chain-monitoring-solutions-detecting-threats-as-they-happen`, `using-real-time-on-chain-data-for-fraud-prevention-in-defi`, `real-time-on-chain-data-fraud-prevention-defi`, `crypto-exchange-security-real-time-monitoring`, `api-based-real-time-on-chain-monitoring-architecture-setup` |
| DeFi security (2) | `defi-security-real-time-on-chain-threat-detection-strategies` | `defi-protocol-real-time-blockchain-threat-detection` |
| HSM/Key management (3) | `enterprise-hsm-key-management-guide` | `enterprise-hsm-key-management-guide-2`, `top-7-enterprise-hsm-based-key-management-companies-in-2026`, `what-is-a-hardware-security-module-and-how-does-it-protect-your-enterprise-data`, `enterprise-hsm-key-management-quantum-ready-architecture`, `hsm-key-management-indian-bfsi-rbi-sebi-pci-dss` |
| Self-sovereign identity (3) | `enterprise-guide-to-self-sovereign-identity` | `self-sovereign-identity-enterprise-implementation-guide`, `interoperable-self-sovereign-identity-across-enterprise-networks` |
| Access control (3) | `strengthening-access-control-decentralized-systems` | `strengthening-access-control-decentralized-systems-2`, `how-securedapp-strengthens-access-control-to-build-trust-in-decentralized-systems` |
| DID/phishing (2) | `decentralized-identity-in-web3-can-it-eliminate-phishing-forever` | `how-decentralized-identity-did-can-prevent-web3-phishing-attacks` |
| Web3 startup trust (2) | `how-web3-startups-can-build-user-trust-through-transparency` | `how-web3-startups-can-build-user-trust-through-transparency-2` |
| RWA tokenization (3) | `fractional-ownership-of-real-world-assets-a-blockchain-revolution` | `tokenization-of-real-world-assets-fractional-ownership-use-cases-in-2025`, `tokenizing-real-world-assets-revolution` |
| Smart contract audit pricing (3) | `how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing-2` | `token-audit-cost-pricing-factors`, `how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing` |

### 6.2 Additional duplicate slugs from Crawled report
- `how-web3-startups-can-build-user-trust-through-transparency-2`
- `enterprise-hsm-key-management-guide-2`
- `dpdp-consent-management-platform-india-3`
- `strengthening-access-control-decentralized-systems-2`
- `erc20-erc721-token-audit-guide-2`
- `how-much-does-a-smart-contract-audit-cost-factors-that-affect-pricing-2`

---

## Step 7 — Optimize Category/Author Archives (P2/P3: Excluded by noindex)

**Tags**: `impl`  
**Chain**: `tdd-guide,typescript-reviewer`

### 7.1 Index 6-8 core category hubs
- **Categories**: Smart Contract Audit, DPDP Compliance, HSM/Key Management, Blockchain Forensics, Web3 Security, Tokenization
- **Action**: Yoast → "Show in search results" = Yes; add 150-200 word unique intro; link to matching product page
- **Acceptance**: Category archives return 200, indexable, have unique content + product link

### 7.2 Author archives — add bio + Person schema
- **Authors**: harshajit, kartikeya, shyam, kunal (and others)
- **Action**: Add bio, role, credentials, LinkedIn (HTTPS), Person schema; then index
- **Acceptance**: Author pages have Person schema, bio, HTTPS LinkedIn; indexed

---

## Step 8 — Fix Main Domain "Discovered/Crawled Not Indexed" Pages (P2)

**Tags**: `impl`  
**Chain**: `tdd-guide,typescript-reviewer`
**Status**: ✅ Completed

### 8.1 Add internal links + unique content to thin main-domain pages
| Page | Issue | Fix | Status |
|------|-------|-----|--------|
| `/blog/ai-smart-contract-audits-defi-security` | 200, canonical → blog subdomain, no H1 | Created dedicated main-domain page with H1, canonical self, breadcrumb navigation, unique technical content (>1500 words), and rich internal links from home/nav | ✅ Fixed |
| `/privacy-policy` | 200, canonical self, H1: SecureCMS Privacy Policy | Updated H1 to "SecureDApp & SecureCMS Privacy Policy", added breadcrumb navigation, and integrated internal links to About, Services, DPDP platform, and Contact | ✅ Fixed |
| `/terms-of-service` | 200, canonical self, H1: SecureCMS Terms of Service | Updated H1 to "SecureDApp & SecureCMS Terms of Service", added breadcrumbs, and integrated internal links to About, Services, DPDP platform, and Contact | ✅ Fixed |
| `/smart-contract-audit` | 200, canonical self, no H1 | Added explicit H1 "Smart Contract Audit Services: Comprehensive Security Analysis for Blockchain DApps", added breadcrumbs, and added internal ecosystem links | ✅ Fixed |
| `/media` | 200, canonical self, H1: Media Coverages | Enhanced H1 to "Media Coverage & Press Releases: SecureDApp in the News", added breadcrumbs, unique editorial intro, and internal links | ✅ Fixed |
| `/auditexpress/201`, `/auditexpress/177`, `/auditexpress/639`, `/auditexpress/635` | 200, no H1 | Added H1/loading shell, breadcrumbs, and internal links; reports remain `noindex` because they expose scan findings and contract data. Server validates numeric IDs and returns `404` for missing reports. | PARTIAL |

### 8.2 Remove tracking-parameter Disallow from robots.txt (already done)
- **Status**: ✅ Completed in previous SEO fix — `Disallow: /*?utm_*` etc. removed; only `/*?contact=` remains

---

## Step 9 — API Host noindex (P4: Not Found Report)

**Tags**: `impl`  
**Chain**: `tdd-guide,typescript-reviewer`

### 9.1 Add X-Robots-Tag: noindex to API subdomains
- **Hosts**: `cms-datadiscovery-be.securedapp.io`, `crm-be.securedapp.io`, `cookie-be.securedapp.io`, `cbom.securedapp.io`, `cookie-app.securedapp.io`, `outreach.securedapp.io`
- **Action**: Add `X-Robots-Tag: noindex` header + `robots.txt` with `Disallow: /`
- **Acceptance**: `curl -I https://cms-datadiscovery-be.securedapp.io/` shows `X-Robots-Tag: noindex`

---

## Step 10 — Validation & GSC Submission

**Tags**: `test`  
**Chain**: `e2e-runner`  
**Status**: PARTIAL — local validation only; no deployment or GSC access

### 10.1 Run SEO config regression check
- **Command**: `npm run check:seo`
- **Acceptance**: Passes

### 10.2 Validate redirect configuration
- **Script**: Test all redirect rules in `next.config.mjs`, `netlify.toml`, `public/_redirects` return correct status + destination
- **Acceptance**: Zero redirect chains > 1 hop and zero loops locally. Live status/target checks require deployment.

### 10.3 Submit priority URLs to GSC URL Inspection
- **Action**: Request indexing for:
  - All merged canonical posts (~20)
  - All fixed 404 redirects (~15)
  - Core category hubs (6-8)
  - Fixed main-domain pages (10)
- **Status**: BLOCKED — requires Search Console access and deployed URLs

### 10.4 Click "Validate Fix" in GSC for all resolved issues
- **Reports**: Not Found, Discovered, Crawled, Excluded, Redirects
- **Status**: BLOCKED — requires Search Console access and deployed URLs

---

## Dependency Graph

```
Step 1 (404s) ──────────────────────────┐
Step 2 (LinkedIn) ──────────────────────┤
Step 3 (Redirects) ─────────────────────┤  All independent, can run in parallel
Step 4 (Crawl waste) ───────────────────┤
Step 9 (API noindex) ───────────────────┘
        │
        ▼
Step 5 (Discovered not indexed) ◄─────── Requires Step 4 complete (crawl budget freed)
        │
        ▼
Step 6 (Crawled not indexed) ─────────── Requires Step 5 merges done
        │
        ▼
Step 7 (Category/Author hubs) ────────── Can parallel with Step 5-6
        │
        ▼
Step 8 (Main domain pages) ───────────── Independent
        │
        ▼
Step 10 (Validation) ─────────────────── Requires all prior steps
```

---

## Parallel Execution Groups

| Group | Steps | Agents |
|-------|-------|--------|
| A | 1, 2, 3, 4, 9 | `tdd-guide,typescript-reviewer,security-reviewer` |
| B | 5, 6, 7 | `architect,refactor-cleaner,typescript-reviewer` |
| C | 8 | `tdd-guide,typescript-reviewer` |
| D | 10 | `e2e-runner` |

---

## Rollback Strategy

| Step | Rollback |
|------|----------|
| 1-3 | Revert `next.config.mjs`, `netlify.toml`, `public/_redirects`, component link changes via git |
| 4 | Restore ElementsKit widgets; re-enable Yoast date archives; remove robots.txt rule |
| 5-6 | Restore merged posts from git; remove 301s; restore original URLs |
| 7 | Set Yoast categories back to noindex; remove Person schema |
| 8 | Revert component changes |
| 9 | Remove X-Robots-Tag headers |
| 10 | N/A (validation only) |

---

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Not Found (real) | 14 | 0 |
| Discovered not indexed (real) | 60 | < 10 |
| Crawled not indexed (real) | 136 | < 20 |
| Excluded by noindex (real) | 972 | < 50 |
| Redirect issues (real) | 2 | 0 |
| Crawl budget wasted on pagination | ~935 URLs | 0 |
| Orphan posts (0 internal links) | 63+ | 0 |
| Posts with title > 60 chars | 100+ | 0 |
| Posts < 1500 words | 50+ | 0 |
| Duplicate slugs (-N variants) | 10+ | 0 |

---

## Out of Scope

- Blog subdomain WordPress theme changes beyond ElementsKit/Yoast config
- Content writing for merged posts (assumes existing content can be combined)
- Partner/ads clean URL enforcement (tracking params)
- Mautic/outreach subdomain login pages (already noindex)
- WP emoji script disable (minor, P4)
- ElementsKit pagination on non-blog pages (if any)
