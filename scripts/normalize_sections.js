#!/usr/bin/env node
// normalize_sections.js
//
// Renames DESIGN.md `##` headings to the canonical DESIGN.md spec section names,
// merges Anti-patterns into Do's and Don'ts, reorders canonical sections into the
// spec order, and keeps every other section as a trailing extra (content is
// preserved verbatim; only headings are renamed/reordered).
//
// Usage:
//   node scripts/normalize_sections.js            # all packages
//   node scripts/normalize_sections.js apple ...  # only the named slugs

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DS_DIR = path.join(ROOT, 'design-systems');
const SKIP_DIRS = new Set(['_schema']);

// Canonical spec order.
const CANONICAL_ORDER = [
  'Overview',
  'Colors',
  'Typography',
  'Layout',
  'Elevation & Depth',
  'Shapes',
  'Components',
  "Do's and Don'ts",
];
const CANONICAL = new Set(CANONICAL_ORDER);

// Canonical trailing extras, kept in this relative order after the canonical block.
const TRAILING_ORDER = ['Responsive Behavior', 'Agent Prompt Guide'];

// Heading variants that map confidently onto a canonical name. Variants beyond
// the explicit rename table are flagged in the script's report output.
const RENAME = {
  'Visual Theme & Atmosphere': 'Overview',
  'Color Palette & Roles': 'Colors',
  Color: 'Colors',
  'Color Palette': 'Colors',
  'Color Palette (Cultural Modernism)': 'Colors',
  'Typography Rules': 'Typography',
  'Typography (The Heart of the System)': 'Typography',
  'Layout Principles': 'Layout',
  'Layout & Composition': 'Layout',
  'Spacing & Grid': 'Layout',
  'Layout & Spacing': 'Layout', // official spec alias of "Layout"
  'Spacing System': 'Layout',
  Spacing: 'Layout',
  'Spacing & Layout Grid': 'Layout',
  'Depth & Elevation': 'Elevation & Depth',
  Depth: 'Elevation & Depth',
  'Depth: 5-layer cascading shadow system': 'Elevation & Depth',
  'Component Stylings': 'Components',
  'Component Styles': 'Components',
};

// Merge targets: sections folded into an existing canonical section.
const MERGE_INTO_DOS = /^Anti-?patterns?(\s*\(Do NOT\))?$/i;
const DOS_RE = /^Do.s (and|&) Don.ts$/u;

function listPackages(filter) {
  return fs
    .readdirSync(DS_DIR)
    .filter((d) => {
      const p = path.join(DS_DIR, d);
      return fs.statSync(p).isDirectory() && !SKIP_DIRS.has(d);
    })
    .sort()
    .filter((d) => (filter && filter.length ? filter.includes(d) : true));
}

// Split a file into [frontmatter, preamble, sections].
// frontmatter: string including both --- fences, or ''
// preamble: everything before the first ## heading (H1, blockquote, intro prose)
function splitFile(raw) {
  let rest = raw;
  let frontmatter = '';
  if (rest.startsWith('---\n') || rest.startsWith('---\r\n')) {
    const lines = rest.split('\n');
    let closeIdx = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trimEnd() === '---') {
        closeIdx = i;
        break;
      }
    }
    if (closeIdx !== -1) {
      frontmatter = lines.slice(0, closeIdx + 1).join('\n');
      rest = lines.slice(closeIdx + 1).join('\n');
    }
  }

  const lines = rest.split('\n');
  const preambleLines = [];
  const sections = [];
  let current = null;
  for (const line of lines) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) {
      current = { rawTitle: m[1], body: [] };
      sections.push(current);
    } else if (current) {
      current.body.push(line);
    } else {
      preambleLines.push(line);
    }
  }
  return { frontmatter, preamble: preambleLines.join('\n'), sections };
}

// "3. Typography Rules" -> "Typography Rules"; also handles "12." and "4)".
function stripNumber(title) {
  return title.replace(/^\d+\s*[.)]\s*/, '').trim();
}

function classify(rawTitle) {
  const title = stripNumber(rawTitle);
  if (CANONICAL.has(title)) return { kind: 'canonical', name: title, title };
  if (DOS_RE.test(title)) return { kind: 'canonical', name: "Do's and Don'ts", title };
  if (MERGE_INTO_DOS.test(title)) return { kind: 'dos-merge', name: "Do's and Don'ts", title };
  if (Object.prototype.hasOwnProperty.call(RENAME, title)) {
    return { kind: 'canonical', name: RENAME[title], title };
  }
  return { kind: 'extra', name: title, title };
}

function cleanBody(body) {
  return body.join('\n').replace(/^\n+/, '').replace(/\s+$/, '');
}

function processPackage(slug) {
  const file = path.join(DS_DIR, slug, 'DESIGN.md');
  if (!fs.existsSync(file)) return { slug, ok: false, error: 'no DESIGN.md' };
  const raw = fs.readFileSync(file, 'utf8');
  const { frontmatter, preamble, sections } = splitFile(raw);
  if (!sections.length) return { slug, ok: false, error: 'no ## sections found' };

  const canonical = new Map(); // name -> { title, body, merges: [{title, body}] }
  const canonicalSeq = []; // first-seen order for stable extras + duplicate detection
  const extras = []; // { title, body } in original order
  const unmapped = new Set();

  for (const s of sections) {
    const c = classify(s.rawTitle);
    const body = cleanBody(s.body);
    if (c.kind === 'canonical') {
      if (!canonical.has(c.name)) {
        canonical.set(c.name, { title: c.name, body, merges: [] });
        canonicalSeq.push(c.name);
      } else {
        // duplicate canonical heading: fold under the first as a subsection
        canonical.get(c.name).merges.push({ title: c.title, body });
      }
    } else if (c.kind === 'dos-merge') {
      if (!canonical.has("Do's and Don'ts")) {
        canonical.set("Do's and Don'ts", { title: "Do's and Don'ts", body, merges: [] });
        canonicalSeq.push("Do's and Don'ts");
      } else {
        canonical.get("Do's and Don'ts").merges.push({ title: c.title, body });
      }
    } else {
      unmapped.add(c.title);
      const dup = extras.find((e) => e.title === c.title);
      if (dup) {
        dup.body += '\n\n### ' + c.title + ' (continued)\n\n' + body;
      } else {
        extras.push({ title: c.title, body });
      }
    }
  }

  // Emit canonical sections in spec order (only those present).
  const out = [];
  const presentCanonical = CANONICAL_ORDER.filter((n) => canonical.has(n));
  for (const name of presentCanonical) {
    const sec = canonical.get(name);
    let text = '## ' + sec.title + '\n\n' + sec.body;
    for (const m of sec.merges) {
      text += '\n\n### ' + m.title + '\n\n' + m.body;
    }
    out.push(text);
  }

  // Trailing extras: fixed order first, then any other extras in original order.
  const trailing = [];
  for (const name of TRAILING_ORDER) {
    const idx = extras.findIndex((e) => e.title === name);
    if (idx !== -1) trailing.push(extras.splice(idx, 1)[0]);
  }
  for (const e of [...trailing, ...extras]) {
    out.push('## ' + e.title + '\n\n' + e.body);
  }

  let text = '';
  if (frontmatter) text += frontmatter + '\n';
  text += preamble.replace(/\s+$/, '');
  if (text) text += '\n\n';
  text += out.join('\n\n');
  text = text.replace(/\s+$/, '') + '\n';

  fs.writeFileSync(file, text, 'utf8');
  return { slug, ok: true, extras: [...unmapped] };
}

function main() {
  const filter = process.argv.slice(2);
  const slugs = listPackages(filter);
  const failures = [];
  const extraHeadings = new Map();

  for (const slug of slugs) {
    const r = processPackage(slug);
    if (!r.ok) {
      failures.push(`${slug}: ${r.error}`);
      continue;
    }
    for (const h of r.extras) extraHeadings.set(h, (extraHeadings.get(h) || 0) + 1);
  }

  console.log(`Normalized ${slugs.length - failures.length}/${slugs.length} files.`);
  if (extraHeadings.size) {
    console.log('Kept as trailing extra sections (not in the rename table):');
    for (const [h, n] of [...extraHeadings.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(n).padStart(3)} ${h}`);
    }
  }
  if (failures.length) {
    console.error('FAILURES:');
    for (const f of failures) console.error('  ' + f);
    process.exitCode = 1;
  }
}

main();
