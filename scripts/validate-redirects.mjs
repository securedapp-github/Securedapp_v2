import fs from "node:fs";

// 1. Read files
const nextConfigText = fs.readFileSync("next.config.mjs", "utf8");
const netlifyText = fs.readFileSync("netlify.toml", "utf8");
const redirectsText = fs.readFileSync("public/_redirects", "utf8");

// Parse Next.js redirects
const nextRedirects = [];
const sourceMatches = [...nextConfigText.matchAll(/source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["']/g)];
for (const match of sourceMatches) {
  nextRedirects.push({ from: match[1], to: match[2] });
}

// Parse netlify.toml redirects
const netlifyRedirects = [];
const netlifyMatches = [...netlifyText.matchAll(/from\s*=\s*["']([^"']+)["']\s*\n\s*to\s*=\s*["']([^"']+)["']/g)];
for (const match of netlifyMatches) {
  netlifyRedirects.push({ from: match[1], to: match[2] });
}

// Parse public/_redirects
const textRedirects = [];
const lines = redirectsText.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith("#"));
for (const line of lines) {
  const parts = line.split(/\s+/);
  if (parts.length >= 2) {
    textRedirects.push({ from: parts[0], to: parts[1] });
  }
}

console.log(`Parsed redirects: Next.js (${nextRedirects.length}), netlify.toml (${netlifyRedirects.length}), _redirects (${textRedirects.length})`);

function analyzeRules(name, rules) {
  console.log(`\n=== Analyzing ${name} (${rules.length} rules) ===`);
  const fromMap = new Map();
  const duplicateSources = [];

  for (const r of rules) {
    if (fromMap.has(r.from)) {
      duplicateSources.push(r.from);
    }
    fromMap.set(r.from, r.to);
  }

  // 1. Check for loops and chains > 1 hop
  const chains = [];
  const loops = [];

  for (const [from, to] of fromMap.entries()) {
    // Exact match or normalized path match
    const normTo = to.replace(/^https?:\/\/[^\/]+/, "").replace(/\/$/, "");
    
    // Check if target is another source
    for (const [secondFrom, secondTo] of fromMap.entries()) {
      if (secondFrom === from) continue;
      
      const normSecondFrom = secondFrom.replace(/^https?:\/\/[^\/]+/, "").replace(/\/$/, "");
      
      if (to === secondFrom || (normTo && normTo === normSecondFrom && !secondFrom.includes("*") && !secondFrom.includes(":"))) {
        if (secondTo === from) {
          loops.push({ from, to, secondTo });
        } else {
          chains.push({ hop1: `${from} -> ${to}`, hop2: `${secondFrom} -> ${secondTo}` });
        }
      }
    }
  }

  console.log(`Loops found: ${loops.length}`);
  if (loops.length > 0) {
    console.error("LOOPS:", loops);
  }

  console.log(`Chains > 1 hop found: ${chains.length}`);
  if (chains.length > 0) {
    console.error("CHAINS:", chains);
  }

  return { loops, chains };
}

const resNext = analyzeRules("Next.js next.config.mjs", nextRedirects);
const resNetlify = analyzeRules("netlify.toml", netlifyRedirects);
const resRedirects = analyzeRules("public/_redirects", textRedirects);

const totalDefects = resNext.loops.length + resNext.chains.length +
                     resNetlify.loops.length + resNetlify.chains.length +
                     resRedirects.loops.length + resRedirects.chains.length;

if (totalDefects === 0) {
  console.log("\n✅ ALL REDIRECTS VALIDATED: Zero loops, zero chains > 1 hop.");
  process.exit(0);
} else {
  console.error(`\n❌ Validation failed: ${totalDefects} defects found.`);
  process.exit(1);
}
