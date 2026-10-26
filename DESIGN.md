# DESIGN.md

Operational contract for all UI work on derekmisler.com. Read this before touching any `.astro`, CSS, or layout file. If a need is not covered here, stop and ask instead of inventing.

## Character

Typographic, minimal, high contrast, flat. Thick accent rules, fluid type, generous line height, no decoration. The page should feel like a well-set poster, not an app.

## Hard rules

- Use only the tokens in `src/styles/theme.css`. Every Tailwind default is disabled, so a class that is not listed below does not exist.
- No arbitrary values: no `w-[437px]`, no `text-[#123456]`, no `p-[13px]`.
- No raw hex, rgb, or hsl anywhere outside `theme.css`.
- No new dependencies, no client JS frameworks, no React. Static Astro only. Storybook is a local-only dev dependency.
- No inline `style` attributes except to pass a CSS variable.
- Both themes must work. Never hardcode a color for one theme.
- Do not add comments.

## Color tokens

| Class suffix             | Role                                            |
| ------------------------ | ----------------------------------------------- |
| `text`                   | Body and heading text                           |
| `background`             | Page background                                 |
| `background-accent`      | Link underline, hover wipe, panels              |
| `background-transparent` | Sticky header surface                           |
| `accent`                 | Rules, scrollbar, gradient end stop, highlights |
| `transparent`            | Clear fills                                     |

Usage: `text-text`, `bg-background`, `bg-background-accent`, `border-accent`.

Dark is the default. Light applies under `html[data-theme='light']`. Values live in `theme.css` and swap through CSS variables, so never branch on theme in markup.

## Typography

One family: IBM Plex Sans, self-hosted, as `font-body` and `font-head`. Weights: `font-regular` (450, the `body` default) and `font-bold` (700). No italics except `em`.

| Class      | Use                        |
| ---------- | -------------------------- |
| `text-xs`  | `small`, captions          |
| `text-sm`  | Body, `li`, `h5`, `h6`     |
| `text-md`  | `.lead`, `h4`              |
| `text-lg`  | `h3`                       |
| `text-xl`  | `h2`, hero                 |
| `text-xxl` | Display only, one per page |

- Body line height is `leading-body`. Headings use `leading-heading`. `leading-tight` only for single-line display text.
- Headings: `font-head font-bold leading-heading text-balance`.
- Prose width is capped at 65ch by the existing `p` and `li` base rule. Do not override it.
- Hero heading may use the `gradient-text` utility from `global.css`. Do not apply it elsewhere.

## Spacing

Scale: `xs`, `sm`, `md`, `lg`, plus `0` for resets. Examples: `p-md`, `gap-sm`, `mb-md`, `desktop:p-0`. Section padding is `md`. Never use numeric spacing like `p-4`.

Fixed sizes: `rule` (10px, the rule thickness, as in `w-rule` or `mr-rule`) and `icon` (40px, icon button content, as in `size-icon`).

## Shape and depth

- Radius: `rounded-none` only. Everything is square.
- No shadows, no blur, no gradients except the heading gradient.
- Separation comes from rules: `rule-top`, `rule-bottom`, or an `hr`. Rule thickness is fixed at `--rule` (10px).

## Links and buttons

- Links and buttons share one pattern: underlined in `background-accent`, with a `scaleX` wipe fill on hover, focus, and active, using the 230ms ease-out transition.
- Reuse `IconButton.astro` for icon buttons. Do not restyle links per section.
- Never remove the focus treatment. Focus must be visible.

## Motion

- Hover and focus wipe only, 230ms, `ease-out`.
- Theme and overlay opacity fades at 230ms.
- Respect `prefers-reduced-motion`: no new animation without a reduced-motion fallback.

## Layout

- Mobile first. Breakpoints: `desktop` (1024px) for layout changes, plus `wide` (1280px) and `xwide` (1440px) only for the main grid's column widths. Use min-width variants (`desktop:`), not `max-*`.
- Sticky headers: `sticky top-0 z-sticky bg-background-transparent p-md`. Full-screen overlays: `fixed inset-0 z-overlay` with `overlay-hidden`, which fades in while `body[data-hidden]` is set.
- A vertical rule appears only at `desktop:` between columns.

## Styles

- `src/styles/theme.css`: tokens. The only place raw colors live.
- `src/styles/global.css`: base element rules in `@layer base`, plus the `gradient-text` and `overlay-hidden` utilities.
- `src/styles/site.css`: the site's Tailwind entry. Imports `global.css` and keeps `src/stories` out of the scan.
- Components style with utilities in markup. A scoped `<style>` is only for values with no token yet; it starts with `@reference '../styles/global.css';` and reads tokens through `--theme()`.
- `pnpm test` runs `scripts/check-tokens.mjs`, which fails on arbitrary values in classes and raw colors outside `theme.css`. `pnpm test:visual` compares screenshots against `tests/screenshots/`.

### Values without tokens

These predate the tokens and stay in scoped styles until a token is approved:

- The 100ms toggle bar transition (`NavToggle`).
- Grid column templates (`Main`), which mix `min-content`, `auto`, and `var(--rule)`.
- `50dvh` section minimum height (`Section`).
- `min(36ch, 100%)` hero copy width (`Header`).
- Skip link offset, `z-index: 9999`, and 2px border (`pages/index.astro`).

## Components

Use what exists. Do not create a near-duplicate.

`Header`, `Main`, `Nav`, `NavToggle`, `Section`, `IconButton`, `ScrollObserver`, `ThemeToggle`.

New component checklist:

1. Plain `.astro` file in `src/components/`.
2. Props typed in strict TypeScript.
3. Variants are an explicit union type, documented here.
4. Tokens only.
5. Add it to the list above in the same change.
6. Add `src/stories/components/<Name>.stories.ts` with a story per variant, and check both themes in Storybook.

## Accessibility

- Text and `background` contrast must meet WCAG AA in both themes. Do not introduce new text/background pairings outside the table above.
- Semantic landmarks, one `h1` per page, heading levels in order.
- Every interactive element is keyboard reachable with a visible focus state.
- Images need `alt`. Decorative images use `alt=""`.

## Do

- Reuse existing components and utilities.
- Keep copy in `src/constants.ts`.
- Check both themes at phone and desktop widths before finishing.

## Do not

- Add a color, size, or spacing value that is not a token.
- Add cards, shadows, rounded corners, or icon libraries.
- Add a second font.
- Center long text.
- Introduce a UI framework or component library.

## Storybook

`pnpm storybook` is the reference for this system. Foundations pages list every token in `theme.css` with its rendered value in the current theme and viewport, and check the approved pairings against WCAG AA. Story markup follows the same rules as site markup, and `pnpm test` checks it.

## When the system does not cover it

Stop. Describe the gap, propose one token or component addition with rationale, and wait for approval. Update this file in the same change that adds it.
