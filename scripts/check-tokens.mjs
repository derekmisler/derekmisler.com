import { readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url).pathname;
const kineticThemeFiles = new Set(['src/styles/kinetic-theme.css', 'src/styles/kinetic-scale.css']);
const extensions = new Set(['.astro', '.css', '.ts', '.js', '.mjs', '.cjs', '.html']);
const colorPattern = /(?<![&\w]|href=["'])#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b|\b(?:rgba?|hsla?)\(/gi;
const classPattern = /\bclass(?::list)?=(?:"([^"]*)"|'([^']*)'|\{)/g;
const stringPattern = /"([^"]*)"|'([^']*)'|`([^`]*)`/g;

const axesPattern = /font-variation-settings|fontVariationSettings/g;
const nonOklchPattern =
  /#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b|(?<![\w-])(?:rgba?|hsla?|hwb|lab|lch|oklab|color)\(/gi;
const anyColorPattern = new RegExp(`${nonOklchPattern.source}|(?<![\\w-])(?:oklch|color-mix)\\(`, 'gi');
const motionPattern = /(?<![\w-])(?:animation|transition)(?:-[a-z-]+)?(?=\s*:)/g;
const singleEnginePattern = /(?<![\w-])(?:if\(|@function\b|animation-trigger|timeline-trigger|trigger-scope)/g;

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

export const isKinetic = (name) => name.startsWith('src/kinetic/') || basename(name).startsWith('kinetic-');

const styleBlocks = (name, source) =>
  extname(name) === '.css'
    ? [{ offset: 0, css: source }]
    : [...source.matchAll(/(<style[^>]*>)([\s\S]*?)<\/style>/g)].map((match) => ({
        offset: match.index + match[1].length,
        css: match[2],
      }));

const preludesAt = (css, index) => {
  const stack = [];
  let start = 0;
  for (let i = 0; i < index; i++) {
    if (css[i] === '{') stack.push(css.slice(start, i).trim());
    if (css[i] === '}') stack.pop();
    if ('{};'.includes(css[i])) start = i + 1;
  }
  return [...stack, css.slice(start, index).trim()];
};

const insideAtRule = (css, index, pattern) => preludesAt(css, index).some((prelude) => pattern.test(prelude));
const inPrelude = (css, index) => preludesAt(css, index).at(-1).startsWith('@');

export const kineticErrors = (name, source) => {
  const theme = kineticThemeFiles.has(name);
  const errors = [];
  const report = (index, message) => errors.push(`${name}:${lineOf(source, index)}: ${message}`);

  if (!theme) {
    for (const match of source.matchAll(axesPattern)) {
      report(match.index, `"${match[0]}" outside the theme; set --wght, --mono, --casl or --slnt`);
    }
  }
  for (const match of source.matchAll(theme ? nonOklchPattern : anyColorPattern)) {
    report(match.index, theme ? `non-OKLCH color "${match[0]}"` : `color "${match[0]}" outside the theme`);
  }

  for (const { offset, css } of styleBlocks(name, source)) {
    for (const match of css.matchAll(motionPattern)) {
      if (
        !inPrelude(css, match.index) &&
        !insideAtRule(css, match.index, /^@media\b.*prefers-reduced-motion:\s*no-preference/)
      ) {
        report(offset + match.index, `"${match[0]}" outside @media (prefers-reduced-motion: no-preference)`);
      }
    }
    for (const match of css.matchAll(singleEnginePattern)) {
      if (!insideAtRule(css, match.index, /^@supports\b/)) {
        report(offset + match.index, `single-engine "${match[0]}" outside @supports`);
      }
    }
  }
  return errors;
};

const check = () => {
  const errors = [];

  for (const file of walk(join(root, 'src'))) {
    const source = readFileSync(file, 'utf8');
    const name = relative(root, file);

    for (const { index, value } of classStrings(source)) {
      for (const token of value.split(/\s+/)) {
        if (/[[(]/.test(token)) errors.push(`${name}:${lineOf(source, index)}: arbitrary value "${token}"`);
      }
    }

    if (isKinetic(name)) {
      errors.push(...kineticErrors(name, source));
      continue;
    }

    for (const match of source.matchAll(colorPattern)) {
      errors.push(`${name}:${lineOf(source, match.index)}: raw color "${match[0]}" outside the theme`);
    }
  }

  if (errors.length > 0) {
    console.error(errors.join('\n'));
    console.error(`\n${errors.length} token violation(s). Use kinetic-theme.css tokens.`);
    process.exit(1);
  }

  console.log('Token check passed.');
};

if (process.argv[1] === fileURLToPath(import.meta.url)) check();
