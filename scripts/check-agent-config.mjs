import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'opencode.jsonc');
const configText = fs.readFileSync(configPath, 'utf8');

function parseJsonc(source) {
  let output = '';
  let quoted = false;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    const next = source[index + 1];

    if (lineComment) {
      if (character === '\n') {
        lineComment = false;
        output += character;
      }
      continue;
    }

    if (blockComment) {
      if (character === '*' && next === '/') {
        blockComment = false;
        index += 1;
      } else if (character === '\n') {
        output += character;
      }
      continue;
    }

    if (quoted) {
      output += character;
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') quoted = false;
      continue;
    }

    if (character === '"') {
      quoted = true;
      output += character;
    } else if (character === '/' && next === '/') {
      lineComment = true;
      index += 1;
    } else if (character === '/' && next === '*') {
      blockComment = true;
      index += 1;
    } else {
      output += character;
    }
  }

  return JSON.parse(output.replace(/,\s*([}\]])/g, '$1'));
}

const config = parseJsonc(configText);
const requiredAgents = [
  'orchestrator',
  'explorer',
  'architect',
  'builder',
  'tester',
  'reviewer',
  'security-reviewer',
  'browser-qa',
  'release-gate',
  'frontend-designer',
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function matches(pattern, value) {
  const expression = `^${pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replaceAll('*', '.*').replaceAll('?', '.')}$`;
  return new RegExp(expression, 'i').test(value);
}

function effectiveRule(agent, action, resource) {
  const rules = [...(config.permissions ?? []), ...(config.agents?.[agent]?.permissions ?? [])];
  let effect = 'ask';
  for (const rule of rules) {
    if (matches(rule.action, action) && matches(rule.resource, resource)) effect = rule.effect;
  }
  return effect;
}

assert(config.$schema === 'https://opencode.ai/config.json', 'missing OpenCode schema');
assert(config.default_agent === 'orchestrator', 'default agent must be orchestrator');
assert(config.instructions?.includes('AGENTS.md'), 'AGENTS.md must be loaded');
assert(config.skills?.includes('./.opencode/skills'), 'repository skills must be loaded');
assert(config.permissions?.some(({ action, resource, effect }) => action === 'skill' && resource === '*' && effect === 'allow'), 'global skill permission missing');

for (const agent of requiredAgents) {
  assert(fs.existsSync(path.join(root, '.opencode', 'agents', `${agent}.md`)) || config.agents?.[agent], `missing agent: ${agent}`);
}

for (const [agent, definition] of Object.entries(config.agents ?? {})) {
  assert(definition.permissions?.some(({ action, resource, effect }) => action === 'skill' && resource === '*' && effect === 'allow'), `agent cannot access all skills: ${agent}`);
  assert(effectiveRule(agent, 'edit', '.env') === 'deny', `.env edit is not denied for ${agent}`);
  assert(effectiveRule(agent, 'edit', '.env.local') === 'deny', `.env.* edit is not denied for ${agent}`);
}

for (const agent of ['orchestrator', 'builder']) {
  assert(effectiveRule(agent, 'edit', 'package.json') === 'ask', `package.json edit must require approval for ${agent}`);
  assert(effectiveRule(agent, 'edit', 'scripts/custom.mjs') === 'ask', `script edit must require approval for ${agent}`);
}

const browserQaShell = config.agents?.['browser-qa']?.permissions ?? [];
assert(browserQaShell.some(({ action, resource, effect }) => action === 'shell' && resource === 'npx playwright *' && effect === 'ask'), 'browser QA Playwright command must require approval');

const dangerousShellAllows = config.agents
  ? Object.entries(config.agents).flatMap(([agent, definition]) => (definition.permissions ?? [])
    .filter(({ action, effect }) => action === 'shell' && effect === 'allow')
    .map(({ resource }) => ({ agent, resource })))
  : [];
for (const { agent, resource } of dangerousShellAllows) {
  assert(resource !== 'npm run *', `broad npm execution allowed for ${agent}`);
  assert(resource !== 'node scripts/*', `broad script execution allowed for ${agent}`);
}

assert(fs.existsSync(path.join(root, '.opencode', 'contracts', 'task-packet.md')), 'task packet contract missing');
assert(fs.existsSync(path.join(root, '.opencode', 'contracts', 'completion-report.md')), 'completion report contract missing');
assert(fs.existsSync(path.join(root, '.opencode', 'contracts', 'auto-routing.md')), 'auto-routing contract missing');

console.log(`Agent configuration valid: ${requiredAgents.length} roles, contracts, JSONC parsing, effective env protection, and shell guards present.`);
