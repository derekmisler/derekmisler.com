import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const themes = ['dawn', 'midday', 'dusk', 'night'] as const;
export const pairs = [
  ['fg', 'bg'],
  ['fg', 'surface'],
  ['fg-muted', 'bg'],
  ['fg-muted', 'surface'],
  ['accent', 'bg'],
  ['accent', 'surface'],
  ['on-accent', 'accent'],
] as const;

type Oklch = { l: number; c: number; h: number };

export const themeFile = fileURLToPath(new URL('../src/styles/kinetic-theme.css', import.meta.url));

const blocks = (css: string) =>
  [...css.matchAll(/([^{};]+)\{([^{}]*)\}/g)].map(([, selector, body]) => ({
    selectors: selector.split(',').map((part) => part.trim()),
    declarations: [...body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(
      ([, name, value]) => [name, value.trim()] as const,
    ),
  }));

export const declarations = (css: string, selectors: string[]) =>
  Object.fromEntries(
    blocks(css)
      .filter((block) => block.selectors.some((selector) => selectors.includes(selector)))
      .flatMap((block) => block.declarations),
  );

const resolve = (value: string, scope: Record<string, string>, depth = 0): string => {
  if (depth > 10) throw new Error(`Unresolvable value: ${value}`);
  const next = value.replace(/var\((--[\w-]+)\)/g, (_, name: string) => {
    if (!(name in scope)) throw new Error(`Undefined ${name}`);
    return scope[name];
  });
  return next === value ? value : resolve(next, scope, depth + 1);
};

const splitTop = (text: string) => {
  const parts: string[] = [];
  let depth = 0;
  let current = '';
  for (const char of text.trim()) {
    if (char === '(') depth++;
    if (char === ')') depth--;
    if (/\s/.test(char) && depth === 0) {
      if (current) parts.push(current);
      current = '';
    } else current += char;
  }
  if (current) parts.push(current);
  return parts;
};

const channel = (token: string, origin: Oklch | undefined, scale: number) => {
  const keyword = (name: string) => {
    if (!origin || !(name in origin)) throw new Error(`Unknown channel ${name}`);
    return origin[name as keyof Oklch];
  };
  const value = (part: string) =>
    /^[lch]$/.test(part) ? keyword(part) : part.endsWith('%') ? (Number.parseFloat(part) / 100) * scale : Number(part);
  const calc = token.match(/^calc\((\S+)\s*([*+/-])\s*(\S+)\)$/);
  if (!calc) return value(token);
  const [a, op, b] = [value(calc[1]), calc[2], value(calc[3])];
  return op === '*' ? a * b : op === '/' ? a / b : op === '+' ? a + b : a - b;
};

export const parseOklch = (color: string): Oklch => {
  const inner = color.trim().match(/^oklch\((.*)\)$/s)?.[1];
  if (inner === undefined) throw new Error(`Not an oklch() color: ${color}`);
  let parts = splitTop(inner.split('/')[0]);
  let origin: Oklch | undefined;
  if (parts[0] === 'from') {
    origin = parseOklch(parts[1]);
    parts = parts.slice(2);
  }
  const [l, c, h] = parts;
  return { l: channel(l, origin, 1), c: channel(c, origin, 0.4), h: channel(h, origin, 1) };
};

export const linearSrgb = ({ l, c, h }: Oklch) => {
  const a = c * Math.cos((h * Math.PI) / 180);
  const b = c * Math.sin((h * Math.PI) / 180);
  const L = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const M = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const S = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
    -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
    -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
  ];
};

export const contrast = (text: Oklch, background: Oklch) => {
  const luminance = (color: Oklch) => {
    const [r, g, b] = linearSrgb(color).map((value) => Math.min(1, Math.max(0, value)));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const [dark, light] = [luminance(text), luminance(background)].sort((x, y) => x - y);
  return (light + 0.05) / (dark + 0.05);
};

export const palette = (css: string, selectors: string[]) => {
  const scope = declarations(css, selectors);
  const color = (name: string) => parseOklch(resolve(`var(--${name})`, scope));
  return Object.fromEntries(
    ['bg', 'surface', 'fg', 'fg-muted', 'accent', 'on-accent'].map((name) => [name, color(name)]),
  );
};

export const themeSelectors = (theme: string) => [':root', `:root[data-theme='${theme}']`];

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const css = readFileSync(themeFile, 'utf8');
  for (const theme of themes) {
    const colors = palette(css, themeSelectors(theme));
    console.log(`\n${theme}`);
    for (const [name, { l, c, h }] of Object.entries(colors)) {
      console.log(`  ${name.padEnd(10)} oklch(${(l * 100).toFixed(1)}% ${c.toFixed(3)} ${h.toFixed(0)})`);
    }
    for (const [text, background] of pairs) {
      console.log(
        `  ${`${text} on ${background}`.padEnd(24)} ${contrast(colors[text], colors[background]).toFixed(2)}`,
      );
    }
  }
}
