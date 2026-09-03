#!/usr/bin/env node
// add_frontmatter.js
//
// Prepends Google DESIGN.md-spec YAML frontmatter to design-systems/<slug>/DESIGN.md.
// All values come from the package's own design-tokens.json / manifest.json /
// components.manifest.json. Idempotent: an existing frontmatter block is replaced,
// never stacked.
//
// Non-literal color handling: `var(--x)` aliases are resolved within the same
// design-tokens.json; values that remain `color-mix(...)` expressions are omitted
// (never computed/fabricated), and component bindings that would reference an
// omitted key are skipped so no {ref} can dangle.
//
// Usage:
//   node scripts/add_frontmatter.js            # all packages
//   node scripts/add_frontmatter.js apple ...  # only the named slugs

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DS_DIR = path.join(ROOT, 'design-systems');
const SKIP_DIRS = new Set(['_schema']);

// --css-var -> frontmatter path. Exhaustive by design: all 150 packages declare
// exactly these 56 vars. The 9 elevation/motion vars are deliberately unmapped
// (no elevation/motion category exists in the spec schema).
const COLOR_VARS = {
  '--accent': 'primary',
  '--accent-hover': 'primary-hover',
  '--accent-active': 'primary-active',
  '--accent-on': 'on-primary',
  '--bg': 'canvas',
  '--surface': 'surface',
  '--surface-warm': 'surface-warm',
  '--fg': 'ink',
  '--fg-2': 'body',
  '--muted': 'muted',
  '--meta': 'meta',
  '--border': 'border',
  '--border-soft': 'border-soft',
  '--success': 'success',
  '--warn': 'warning',
  '--danger': 'danger',
};

const TEXT_SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];

const SPACE_STEPS = ['1', '2', '3', '4', '5', '6', '8', '12'];
const SPACE_EXTRA = [
  'section-y-desktop',
  'section-y-tablet',
  'section-y-phone',
  'container-max',
  'container-gutter-desktop',
  'container-gutter-tablet',
  'container-gutter-phone',
];

// --- component binding tables -------------------------------------------------

// backgroundColor / textColor candidates, in priority order (first available wins).
const COMPONENT_COLOR_PROPS = [
  ['backgroundColor', ['--accent', '--bg', '--surface', '--surface-warm']],
  ['textColor', ['--accent-on', '--fg', '--fg-2', '--muted', '--meta']],
];
const COLOR_REF = {
  '--accent': 'colors.primary',
  '--bg': 'colors.canvas',
  '--surface': 'colors.surface',
  '--surface-warm': 'colors.surface-warm',
  '--accent-on': 'colors.on-primary',
  '--fg': 'colors.ink',
  '--fg-2': 'colors.body',
  '--muted': 'colors.muted',
  '--meta': 'colors.meta',
};

const RADIUS_REFS = [
  ['--radius-md', 'rounded.md'],
  ['--radius-sm', 'rounded.sm'],
  ['--radius-lg', 'rounded.lg'],
  ['--radius-pill', 'rounded.pill'],
];

const TYPO_FAMILY_REFS = [
  ['--font-display', 'typography.display'],
  ['--font-mono', 'typography.mono'],
  ['--font-body', 'typography.body'],
];
const TYPO_SIZE_REFS = [
  ['--text-base', 'typography.base'],
  ['--text-sm', 'typography.sm'],
  ['--text-lg', 'typography.lg'],
  ['--text-xs', 'typography.xs'],
  ['--text-xl', 'typography.xl'],
  ['--text-2xl', 'typography.2xl'],
  ['--text-3xl', 'typography.3xl'],
  ['--text-4xl', 'typography.4xl'],
];

const PADDING_VARS = ['--space-3', '--space-2', '--space-4', '--space-5', '--space-6', '--space-8', '--space-12', '--space-1'];

// --- helpers ------------------------------------------------------------------

function listPackages(filter) {
  const dirs = fs
    .readdirSync(DS_DIR)
    .filter((d) => {
      const p = path.join(DS_DIR, d);
      return fs.statSync(p).isDirectory() && !SKIP_DIRS.has(d);
    })
    .sort();
  return filter && filter.length ? dirs.filter((d) => filter.includes(d)) : dirs;
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return null;
  }
}

// Follow var(--x) alias chains inside one package's token list; drop values that
// remain color-mix() expressions (they are not literal colors and the spec's
// linter rejects them — we omit rather than compute a value the files never had).
function resolveTokenMap(tokens) {
  const raw = new Map();
  for (const t of tokens || []) raw.set(t.name, t.value);
  const resolved = new Map();
  for (const name of raw.keys()) {
    let cur = raw.get(name);
    const seen = new Set();
    while (typeof cur === 'string' && /^var\(\s*--[\w-]+\s*\)$/.test(cur)) {
      const key = '--' + cur.match(/^var\(\s*--([\w-]+)\s*\)$/)[1];
      if (seen.has(key) || !raw.has(key)) {
        cur = null;
        break;
      }
      seen.add(key);
      cur = raw.get(key);
    }
    if (typeof cur !== 'string') continue;
    if (cur.includes('color-mix(')) continue;
    resolved.set(name, cur);
  }
  return resolved;
}

function ref(path_) {
  return '{' + path_ + '}';
}

function firstRef(vars, pairs, available) {
  for (const [v, path_] of pairs) {
    if (vars.includes(v) && available.has(path_)) return ref(path_);
  }
  return null;
}

function isMappedVar(v) {
  return (
    COLOR_REF[v] ||
    v.startsWith('--radius-') ||
    v.startsWith('--font-') ||
    v.startsWith('--text-') ||
    v.startsWith('--space-') ||
    v.startsWith('--section-y-') ||
    v.startsWith('--container-')
  );
}

// Derive the `components:` map from one package's components.manifest.json groups.
// Each present group becomes a component (plus -hover/-active/-section/-container
// entries for the variant/structural tokens that group genuinely references).
// Every emitted {ref} is checked against `available` (the set of frontmatter paths
// actually emitted for this package).
function deriveComponents(manifest, available) {
  const entries = []; // [name, {prop: value}]
  const groups = (manifest && manifest.groups) || [];
  for (const g of groups) {
    if (!g || g.present === false) continue;
    const id = g.id;
    if (!id) continue;
    const vars = (g.tokenReferences || []).filter((v) => isMappedVar(v));

    const main = {};
    for (const [prop, candidates] of COMPONENT_COLOR_PROPS) {
      for (const v of candidates) {
        if (vars.includes(v) && available.has(COLOR_REF[v])) {
          main[prop] = ref(COLOR_REF[v]);
          break;
        }
      }
    }
    const radius = firstRef(vars, RADIUS_REFS, available);
    if (radius) main.rounded = radius;
    const typo = firstRef(vars, TYPO_FAMILY_REFS, available) || firstRef(vars, TYPO_SIZE_REFS, available);
    if (typo) main.typography = typo;
    for (const v of PADDING_VARS) {
      const path_ = 'spacing.' + v.replace('--space-', '');
      if (vars.includes(v) && available.has(path_)) {
        main.padding = ref(path_);
        break;
      }
    }
    if (Object.keys(main).length) entries.push([id, main]);

    if (vars.includes('--accent-hover') && available.has('colors.primary-hover')) {
      entries.push([id + '-hover', { backgroundColor: ref('colors.primary-hover') }]);
    }
    if (vars.includes('--accent-active') && available.has('colors.primary-active')) {
      entries.push([id + '-active', { backgroundColor: ref('colors.primary-active') }]);
    }
    if (vars.includes('--section-y-desktop') && available.has('spacing.section-y-desktop')) {
      entries.push([id + '-section', { padding: ref('spacing.section-y-desktop') }]);
    }
    const container = {};
    if (vars.includes('--container-max') && available.has('spacing.container-max')) {
      container.width = ref('spacing.container-max');
    }
    for (const key of ['container-gutter-desktop', 'container-gutter-tablet', 'container-gutter-phone']) {
      if (vars.includes('--' + key) && available.has('spacing.' + key)) {
        container.padding = ref('spacing.' + key);
        break;
      }
    }
    if (Object.keys(container).length) entries.push([id + '-container', container]);
  }
  return entries;
}

// --- YAML emission ------------------------------------------------------------

// Emit a nested plain-object tree as block-style YAML. All scalars and leaf keys
// are JSON.stringify'd so quotes/commas/braces are always safe (JSON scalars are
// valid YAML scalars; curly-brace refs MUST be quoted to avoid flow mappings).
function emitYaml(node) {
  const lines = [];
  walk(node, 0);
  return lines.join('\n');

  function walk(n, depth) {
    const pad = '  '.repeat(depth);
    for (const [key, value] of Object.entries(n)) {
      const k = typeof value === 'object' && value !== null ? key : JSON.stringify(key);
      if (typeof value === 'object' && value !== null) {
        lines.push(`${pad}${k}:`);
        walk(value, depth + 1);
      } else {
        lines.push(`${pad}${k}: ${JSON.stringify(value)}`);
      }
    }
  }
}

function collectPaths(node, prefix, out) {
  for (const [key, value] of Object.entries(node)) {
    const p = prefix ? prefix + '.' + key : key;
    out.add(p);
    if (typeof value === 'object' && value !== null) collectPaths(value, p, out);
  }
}

function buildTokenTree(byName) {
  const missing = [];
  const omitted = [];

  // Dimension-typed fields require a number+unit per the spec. Unitless
  // line-heights are accepted as multipliers, but bare numbers ("0") and CSS
  // keywords ("normal") are rejected by the linter — omit them rather than
  // fabricate a unit the package never declared.
  const hasUnit = (v) => typeof v === 'string' && /^-?\d+(\.\d+)?[a-z%]+$/.test(v.trim());
  const dim = (v) => (hasUnit(v) ? v : null);

  const colors = {};
  for (const [v, key] of Object.entries(COLOR_VARS)) {
    if (byName.has(v)) colors[key] = byName.get(v);
    else omitted.push(`${v} (non-literal/unresolved color value)`);
  }

  const typography = { display: {}, body: {}, mono: {} };
  for (const v of ['--font-display', '--font-body', '--font-mono']) {
    const target =
      v === '--font-display' ? typography.display : v === '--font-body' ? typography.body : typography.mono;
    if (byName.has(v)) target.fontFamily = byName.get(v);
    else missing.push(v);
  }
  if (byName.has('--leading-tight')) typography.display.lineHeight = byName.get('--leading-tight');
  else missing.push('--leading-tight');
  const tracking = dim(byName.get('--tracking-display'));
  if (tracking) typography.display.letterSpacing = tracking;
  else if (byName.has('--tracking-display')) omitted.push('--tracking-display (not a number+unit dimension)');
  if (byName.has('--leading-body')) typography.body.lineHeight = byName.get('--leading-body');
  else missing.push('--leading-body');
  for (const size of TEXT_SIZES) {
    const v = '--text-' + size;
    const fontSize = dim(byName.get(v));
    if (fontSize) typography[size] = { fontSize };
    else if (byName.has(v)) omitted.push(`${v} (unitless zero)`);
    else missing.push(v);
  }

  const rounded = {};
  for (const key of ['sm', 'md', 'lg', 'pill']) {
    const v = '--radius-' + key;
    const value = dim(byName.get(v));
    if (value) rounded[key] = value;
    else if (byName.has(v)) omitted.push(`${v} (unitless zero)`);
    else missing.push(v);
  }

  const spacing = {};
  for (const step of SPACE_STEPS) {
    const v = '--space-' + step;
    const value = dim(byName.get(v));
    if (value) spacing[step] = value;
    else if (byName.has(v)) omitted.push(`${v} (unitless zero)`);
    else missing.push(v);
  }
  for (const key of SPACE_EXTRA) {
    const v = '--' + key;
    const value = dim(byName.get(v));
    if (value) spacing[key] = value;
    else if (byName.has(v)) omitted.push(`${v} (unitless zero)`);
    else missing.push(v);
  }

  const tree = { colors, typography };
  if (Object.keys(rounded).length) tree.rounded = rounded;
  if (Object.keys(spacing).length) tree.spacing = spacing;
  return { tree, missing, omitted };
}

// --- main ---------------------------------------------------------------------

function processPackage(slug) {
  const dir = path.join(DS_DIR, slug);
  const designPath = path.join(dir, 'DESIGN.md');
  const tokensPath = path.join(dir, 'design-tokens.json');
  const manifestPath = path.join(dir, 'manifest.json');
  const compManifestPath = path.join(dir, 'components.manifest.json');

  const result = { slug, ok: false, hadFrontmatter: false, components: 0, omitted: [] };

  if (!fs.existsSync(designPath)) return Object.assign(result, { error: 'no DESIGN.md' });
  if (!fs.existsSync(tokensPath)) return Object.assign(result, { error: 'no design-tokens.json' });

  const manifest = readJson(manifestPath);
  if (!manifest || !manifest.name || !manifest.description) {
    return Object.assign(result, { error: 'manifest.json missing name/description' });
  }

  const tokens = readJson(tokensPath);
  if (!tokens || !Array.isArray(tokens.tokens)) {
    return Object.assign(result, { error: 'design-tokens.json unreadable' });
  }

  const byName = resolveTokenMap(tokens.tokens);
  const { tree, missing, omitted } = buildTokenTree(byName);

  // The three required scalar keys lead the block, in spec order. Values are
  // taken verbatim from manifest.json; emitYaml JSON-escapes every scalar, so
  // colons/quotes/commas in descriptions stay valid YAML.
  const fullTree = {
    version: 'alpha',
    name: manifest.name,
    description: manifest.description,
    ...tree,
  };

  const available = new Set(['version', 'name', 'description']);
  collectPaths(fullTree, '', available);

  const compManifest = readJson(compManifestPath);
  const componentEntries = compManifest ? deriveComponents(compManifest, available) : [];
  if (componentEntries.length) fullTree.components = Object.fromEntries(componentEntries);

  const raw = fs.readFileSync(designPath, 'utf8');
  let body = raw;

  // Idempotency: strip an existing frontmatter block before prepending.
  if (body.startsWith('---\n') || body.startsWith('---\r\n')) {
    const lines = body.split('\n');
    let closeIdx = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trimEnd() === '---') {
        closeIdx = i;
        break;
      }
    }
    if (closeIdx === -1) {
      return Object.assign(result, { error: 'unterminated existing frontmatter; left untouched' });
    }
    result.hadFrontmatter = true;
    body = lines.slice(closeIdx + 1).join('\n');
  }

  const frontmatter = '---\n' + emitYaml(fullTree) + '\n---\n\n';
  const out = body.startsWith('\n') ? frontmatter + body.slice(1) : frontmatter + body;
  fs.writeFileSync(designPath, out, 'utf8');

  return Object.assign(result, {
    ok: true,
    components: componentEntries.length,
    missing,
    omitted,
  });
}

function main() {
  const filter = process.argv.slice(2);
  const slugs = listPackages(filter);
  const failures = [];
  let replaced = 0;
  let totalComponents = 0;
  const allMissing = new Map();
  const allOmitted = new Map();

  for (const slug of slugs) {
    const r = processPackage(slug);
    if (!r.ok) {
      failures.push(`${slug}: ${r.error}`);
      continue;
    }
    if (r.hadFrontmatter) replaced++;
    totalComponents += r.components;
    for (const m of r.missing || []) allMissing.set(m, (allMissing.get(m) || 0) + 1);
    for (const m of r.omitted || []) allOmitted.set(m, (allOmitted.get(m) || 0) + 1);
  }

  console.log(`Processed ${slugs.length - failures.length}/${slugs.length} packages.`);
  console.log(`Replaced an existing frontmatter block in ${replaced} package(s).`);
  console.log(`Component entries emitted (total): ${totalComponents}`);
  if (allOmitted.size) {
    console.log('Omitted non-literal color values (color-mix/var leftovers):');
    for (const [v, n] of allOmitted) console.log(`  ${v} in ${n} package(s)`);
  }
  if (allMissing.size) {
    console.log('Missing declared tokens:');
    for (const [v, n] of allMissing) console.log(`  ${v} in ${n} package(s)`);
  }
  if (failures.length) {
    console.error('FAILURES:');
    for (const f of failures) console.error('  ' + f);
    process.exitCode = 1;
  }
}

main();
