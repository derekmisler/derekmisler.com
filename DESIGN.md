# DESIGN.md

Operational contract for all UI work on derekmisler.com. Read this before touching any `.astro`, CSS, or layout file. If a need is not covered here, stop and ask instead of inventing.

## Character

Typographic, minimal, high contrast, flat. Thick accent rules, fluid type, generous line height, no decoration. The page should feel like a well-set poster, not an app.

## Hard rules

- Use only the tokens in `src/styles/theme.css`. Every Tailwind default is disabled, so a class that is not listed below does not exist.
- No arbitrary values: no `w-[437px]`, no `text-[#123456]`, no `p-[13px]`.
- No raw hex, rgb, or hsl anywhere outside `theme.css`.
- No new dependencies, no client JS frameworks, no React. Static Astro only.
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

One family: IBM Plex Sans, self-hosted, as `font-body` and `font-head`. Weights: `font-body` (450) and `font-bold` (700). No italics except `em`.

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
- Hero heading may use the gradient text treatment from `global.css` (`.gradient-text`). Do not apply it elsewhere.

## Spacing

Only `xs`, `sm`, `md`, `lg`. Examples: `p-md`, `gap-sm`, `mb-md`. Section padding is `md`. Never use numeric spacing like `p-4`.

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

- Mobile first. One breakpoint: `desktop` (1024px), used as `desktop:`.
- Sticky header uses `bg-background-transparent` and `z-sticky`. Overlays use `z-overlay`.
- A vertical rule appears only at `desktop:` between columns.

## Components

Use what exists. Do not create a near-duplicate.

`Header`, `Main`, `Nav`, `NavToggle`, `Section`, `IconButton`, `ScrollObserver`, `ThemeToggle`.

New component checklist:

1. Plain `.astro` file in `src/components/`.
2. Props typed in strict TypeScript.
3. Variants are an explicit union type, documented here.
4. Tokens only.
5. Add it to the list above in the same change.

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

## When the system does not cover it

Stop. Describe the gap, propose one token or component addition with rationale, and wait for approval. Update this file in the same change that adds it.
