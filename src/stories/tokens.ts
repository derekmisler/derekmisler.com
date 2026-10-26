import theme from '@/styles/theme.css?raw';

export interface Token {
  name: string;
  value: string;
}

const declarations = (selector: string): Token[] => {
  const start = theme.indexOf(`${selector} {`);
  if (start === -1) return [];
  const body = theme.slice(start, theme.indexOf('}', start));
  return [...body.matchAll(/--([\w-]+):\s*([^;]+);/g)].map(([, name = '', value = '']) => ({
    name,
    value: value.trim(),
  }));
};

const themeTokens = declarations('@theme inline');

export const darkValues = declarations(':root');
export const lightValues = declarations("html[data-theme='light']");

export const tokens = (namespace: string): Token[] =>
  themeTokens
    .filter(({ name }) => name.startsWith(`${namespace}-`))
    .map(({ name, value }) => ({ name: name.slice(namespace.length + 1), value }));

export const variable = (name: string, values: Token[]): string | undefined =>
  values.find((token) => token.name === name)?.value;
