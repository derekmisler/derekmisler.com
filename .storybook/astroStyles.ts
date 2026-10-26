import type { Plugin } from 'vite';

const rawInjection =
  /\(function\(\) \{\s*if \(typeof document === 'undefined'\) \{ return; \}\s*const tagged = document\.head\.querySelectorAll\('style\[' \+ "data-astro-dev" \+ '\]'\);[\s\S]*?style\.setAttribute\("data-astro-dev", ("[^"]*")\);[\s\S]*?\}\)\(\);/g;

export const astroStyles = (): Plugin => ({
  name: 'derekmisler:astro-compiled-styles',
  enforce: 'post',
  apply: 'serve',
  transform(code, id) {
    if (!id.endsWith('.astro') || !code.includes('"data-astro-dev"')) return null;
    return {
      code: code.replace(rawInjection, (_, marker: string) => {
        const key = JSON.parse(marker) as string;
        const split = key.lastIndexOf(':');
        return `import ${JSON.stringify(`${key.slice(0, split)}?astro&type=style&index=${key.slice(split + 1)}&lang.css`)};`;
      }),
      map: null,
    };
  },
});
