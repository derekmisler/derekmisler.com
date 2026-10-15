import { readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const themeFile = join(root, 'src/styles/theme.css');
const extensions = new Set(['.astro', '.css', '.ts', '.js', '.mjs', '.cjs', '.html']);
const colorPattern = /(?<![&\w]|href=["'])#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b|\b(?:rgba?|hsla?)\(/gi;
const classPattern = /\bclass(?::list)?=(?:"([^"]*)"|'([^']*)'|\{)/g;
const stringPattern = /"([^"]*)"|'([^']*)'|`([^`]*)`/g;

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    return extensions.has(extname(entry.name)) ? [path] : [];
  });

const lineOf = (source, index) => source.slice(0, index).split('\n').length;

const expressionEnd = (source, start) => {
  let depth = 1;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++;
    if (source[i] === '}' && --depth === 0) return i;
  }
  return source.length;
};

const classStrings = (source) => {
  const found = [];
  for (const match of source.matchAll(classPattern)) {
    const quoted = match[1] ?? match[2];
    if (quoted !== undefined) {
      found.push({ index: match.index, value: quoted });
      continue;
    }
    const start = match.index + match[0].length;
    const expression = source.slice(start, expressionEnd(source, start));
    for (const literal of expression.matchAll(stringPattern)) {
      found.push({ index: start + literal.index, value: literal[1] ?? literal[2] ?? literal[3] });
    }
  }
  for (const match of source.matchAll(/@apply\s+([^;]+);/g)) {
    found.push({ index: match.index, value: match[1] });
  }
  return found;
};

const errors = [];

for (const file of walk(join(root, 'src'))) {
  const source = readFileSync(file, 'utf8');
  const name = relative(root, file);

  for (const { index, value } of classStrings(source)) {
    for (const token of value.split(/\s+/)) {
      if (/[[(]/.test(token)) errors.push(`${name}:${lineOf(source, index)}: arbitrary value "${token}"`);
    }
  }

  if (file === themeFile) continue;
  for (const match of source.matchAll(colorPattern)) {
    errors.push(`${name}:${lineOf(source, match.index)}: raw color "${match[0]}" outside theme.css`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} token violation(s). Use theme.css tokens; see DESIGN.md.`);
  process.exit(1);
}

console.log('Token check passed.');
