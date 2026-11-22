import https from "node:https";
import http from "node:http";

function fetchUrl(urlStr, options = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const client = url.protocol === "https:" ? https : http;
    const req = client.request(
      url,
      {
        method: options.method || "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          ...options.headers,
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body,
          });
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function runTests() {
  console.log("=== Testing Key URLs & Assertions ===\n");

  const results = [];

  // Helper
  const check = (desc, pass, details) => {
    results.push({ desc, pass, details });
    console.log(`${pass ? "✅ PASS" : "❌ FAIL"}: ${desc} (${details})`);
  };

  try {
    // 1. /compliance/dpdp
    const dpdp = await fetchUrl("https://securedapp.io/compliance/dpdp", { method: "HEAD" });
    check(
      "/compliance/dpdp (Edge/Live check)",
      (dpdp.statusCode === 301 || dpdp.statusCode === 308) &&
        dpdp.headers.location?.includes("/dpdp-compliance-platform"),
      `Status: ${dpdp.statusCode}, Location: ${dpdp.headers.location || "none"}`
    );

    // 2. /careers
    const careers = await fetchUrl("https://securedapp.io/careers", { method: "HEAD" });
    check(
      "/careers status",
      careers.statusCode === 301 || careers.statusCode === 308,
      `Status: ${careers.statusCode}, Location: ${careers.headers.location}`
    );

    // 3. /solidity-shield-vulnerabilities
    const ssv = await fetchUrl("https://securedapp.io/solidity-shield-vulnerabilities", { method: "HEAD" });
    check(
      "/solidity-shield-vulnerabilities status",
      ssv.statusCode === 301 || ssv.statusCode === 308,
      `Status: ${ssv.statusCode}, Location: ${ssv.headers.location}`
    );

    // 4. /blog/ai-smart-contract-audits-defi-security
    const aiBlog = await fetchUrl("https://securedapp.io/blog/ai-smart-contract-audits-defi-security");
    const aiH1 = aiBlog.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, "");
    check(
      "/blog/ai-smart-contract-audits-defi-security (200 with H1)",
      aiBlog.statusCode === 200 && !!aiH1,
      `Status: ${aiBlog.statusCode}, H1: "${aiH1 || 'None'}"`
    );

    // 5. /privacy-policy
    const pp = await fetchUrl("https://securedapp.io/privacy-policy");
    const ppH1 = pp.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, "");
    check(
      "/privacy-policy (200 with H1)",
      pp.statusCode === 200 && !!ppH1,
      `Status: ${pp.statusCode}, H1: "${ppH1 || 'None'}"`
    );

    // 6. /terms-of-service
    const tos = await fetchUrl("https://securedapp.io/terms-of-service");
    const tosH1 = tos.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, "");
    check(
      "/terms-of-service (200 with H1)",
      tos.statusCode === 200 && !!tosH1,
      `Status: ${tos.statusCode}, H1: "${tosH1 || 'None'}"`
    );

    // 7. /smart-contract-audit
    const sca = await fetchUrl("https://securedapp.io/smart-contract-audit");
    const scaH1 = sca.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, "");
    check(
      "/smart-contract-audit (200 with H1)",
      sca.statusCode === 200 && !!scaH1,
      `Status: ${sca.statusCode}, H1: "${scaH1 || 'None'}"`
    );

    // 8. /media
    const media = await fetchUrl("https://securedapp.io/media");
    const mediaH1 = media.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, "");
    check(
      "/media (200 with H1)",
      media.statusCode === 200 && !!mediaH1,
      `Status: ${media.statusCode}, H1: "${mediaH1 || 'None'}"`
    );

    // 9. /auditexpress/201
    const ae201 = await fetchUrl("https://securedapp.io/auditexpress/201");
    const ae201H1 = ae201.body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.trim()?.replace(/<[^>]+>/g, "");
    check(
      "/auditexpress/201 (200 with H1)",
      ae201.statusCode === 200 && !!ae201H1,
      `Status: ${ae201.statusCode}, H1: "${ae201H1 || 'None'}"`
    );

    // 10. blog.securedapp.io/robots.txt (has Disallow: /*ekit-blog-posts-paged=)
    const blogRobots = await fetchUrl("https://blog.securedapp.io/robots.txt");
    const hasEkitRule = blogRobots.body.includes("ekit-blog-posts-paged=");
    check(
      "blog.securedapp.io/robots.txt Disallow rule",
      blogRobots.statusCode === 200 && hasEkitRule,
      `Status: ${blogRobots.statusCode}, Contains ekit rule: ${hasEkitRule}`
    );

    // 11. blog.securedapp.io threat monitoring post with FAQPage schema
    const threatPost = await fetchUrl("https://blog.securedapp.io/real-time-blockchain-threat-monitoring-complete-guide-for-2026/");
    const hasFaqSchema = threatPost.body.includes('"@type":"FAQPage"') || threatPost.body.includes('"@type": "FAQPage"');
    check(
      "blog.securedapp.io threat monitoring post (FAQPage schema)",
      threatPost.statusCode === 200 && hasFaqSchema,
      `Status: ${threatPost.statusCode}, FAQPage schema present: ${hasFaqSchema}`
    );

    // 12. Category hubs
    const catPost = await fetchUrl("https://blog.securedapp.io/category/smart-contract-audit/");
    check(
      "Category hub /category/smart-contract-audit/",
      catPost.statusCode === 200,
      `Status: ${catPost.statusCode}`
    );

    // 13. Author archives
    const authorPost = await fetchUrl("https://blog.securedapp.io/author/harshajit/");
    const hasPersonSchema = authorPost.body.includes('"@type":"Person"') || authorPost.body.includes('"@type": "Person"');
    check(
      "Author archive /author/harshajit/ (Person schema)",
      authorPost.statusCode === 200 && hasPersonSchema,
      `Status: ${authorPost.statusCode}, Person schema present: ${hasPersonSchema}`
    );

  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

runTests();
