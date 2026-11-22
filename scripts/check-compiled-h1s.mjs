import fs from "node:fs";

const files = [
  "blog/ai-smart-contract-audits-defi-security.html",
  "privacy-policy.html",
  "terms-of-service.html",
  "smart-contract-audit.html",
  "media.html",
  "auditexpress/201.html",
];

for (const f of files) {
  const p = ".next/server/pages/" + f;
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, "utf8");
    const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = m ? m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "NO H1";
    console.log(`${f}: H1 = "${h1}"`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
}
