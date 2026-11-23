# DESIGN.md

The contract for UI work on derekmisler.com. Read it before touching any `.astro` file, CSS or client script. If a need isn't covered here, stop and ask instead of inventing a value.

## Character

Kinetic type on a quiet page. One vertical stack of full-height panels, one statement each, set in Recursive. Scroll swings the weight of the big type and flips letters between sans, mono and slanted styles, then lets every letter settle on upright sans. The accent hue drifts as you read; text and background never move. Square corners, thick accent rules, no shadows, no imagery.

The motion shows design and code as one skill set. It's decoration on top of a page that already works: with reduced motion, no JS or an older browser, the same composition renders static and complete.

## Hard rules

- **Tokens only.** Every Tailwind default is off (`--*: initial` in `src/styles/kinetic-theme.css`), so a utility exists only if its token is listed below. In CSS, read tokens with `--theme(--spacing-sm)`, never a literal.
- **No arbitrary values in classes.** `scripts/check-tokens.mjs` fails on any class token with `[` or `(`.
- **Colors live in the theme.** Outside `src/kinetic/` and `kinetic-*` files, raw hex, `rgb()` and `hsl()` fail the check.
- **Never hand-edit `kinetic-scale.css`.** Change `scripts/kinetic-scale.ts` and run `pnpm scale`; a test fails when the file is stale.
- **All kinetic CSS sits in `@layer kinetic`** (`src/kinetic/kinetic.css`).
- **Inline `style` only for values computed at build** (custom properties, the rail's `word-spacing`).
- **Heights use `svh`, never `dvh`,** so the mobile toolbar moves nothing.
- **Square and flat:** `rounded-none` only, no `box-shadow`, no gradients.
- **Keyframes never read a `var()` that changes at runtime.** Chrome resolves it once, so a theme switch would leave stale values. Animate a registered number instead (`--progress`, `--lit`) and do the math outside the keyframes.
- **Keep `vite.build.cssMinify: 'esbuild'`.** lightningcss folds `animation-timeline` into the `animation` shorthand, which Chrome drops.

### The four kinetic checks

`pnpm test` runs `check-tokens.mjs`, which applies these to `src/kinetic/*` and any `kinetic-*` file:

1. **Axes:** no `font-variation-settings` outside the theme. Set `--wght`, `--mono`, `--casl` or `--slnt` instead.
2. **Motion guard:** every `animation*` and `transition*` property sits inside `@media (prefers-reduced-motion: no-preference)`.
3. **`@supports`:** single-engine features sit inside `@supports`. The list is fixed: `if()`, `@function`, `animation-trigger`, `timeline-trigger`, `trigger-scope`.
4. **OKLCH in the theme:** `kinetic-theme.css` and `kinetic-scale.css` use only `oklch()`. Other kinetic files use no color functions at all, only theme variables.

Scroll-driven animations are Baseline, but they still go inside `@supports (animation-timeline: view())` so older browsers keep the static page. Timeline triggers go inside `@supports (timeline-trigger: --a view())`, with animation longhands: the build moves `animation-trigger` ahead of the `animation` shorthand, which resets it.

## Color

### Tokens

| Utility suffix           | Variable      | Role                                                        |
| ------------------------ | ------------- | ----------------------------------------------------------- |
| `bg`                     | `--bg`        | Page and panel background                                   |
| `surface`                | `--surface`   | Rail rule, quiet fills                                      |
| `fg`                     | `--fg`        | Text                                                        |
| `fg-muted`               | `--fg-muted`  | Periods and secondary text                                  |
| `accent`                 | `--accent`    | Link underlines, panel rules, rail fill, focus ring, toggle |
| `on-accent`              | `--on-accent` | Text on an accent fill                                      |
| `transparent`, `current` |               | Resets                                                      |

`ink-lit` is the one custom utility: it sets `--ink` to a mix of `--fg` and `--accent` by the registered `--lit` (0 to 1). The active rail label uses it.

### Four OKLCH themes

Each theme sets a hue and chroma for background, text and accent on a fixed set of lightness steps. Derived tokens use relative color syntax: `--surface` is `--bg` at the surface lightness, `--fg-muted` is `--fg` at the muted lightness with 0.8 of its chroma, and `--on-accent` is the accent hue at the background lightness with 0.01 chroma.

| Theme  | `color-scheme` | bg hue / chroma | fg hue / chroma | accent hue / chroma | `--drift-span` |
| ------ | -------------- | --------------- | --------------- | ------------------- | -------------- |
| dawn   | light          | 60 / 0.015      | 330 / 0.06      | 25 / 0.17           | -50            |
| midday | light          | 230 / 0.012     | 255 / 0.05      | 255 / 0.16          | 50             |
| dusk   | dark           | 320 / 0.06      | 75 / 0.03       | 60 / 0.13           | 40             |
| night  | dark           | 270 / 0.03      | 250 / 0.02      | 200 / 0.12          | -40            |

Midday is the `:root` default. Night also applies under `@media (prefers-color-scheme: dark)` when no `data-theme` is set.

### AA lightness steps

| Steps        | bg  | surface | fg  | fg-muted | accent |
| ------------ | --- | ------- | --- | -------- | ------ |
| dawn, midday | 97% | 92%     | 25% | 42%      | 48%    |
| dusk         | 30% | 36%     | 96% | 86%      | 80%    |
| night        | 20% | 26%     | 95% | 80%      | 80%    |

`scripts/kinetic.test.ts` checks every theme stays in sRGB and every pair reaches 4.5:1: `fg`, `fg-muted` and `accent` on `bg` and on `surface`, plus `on-accent` on `accent`. It also checks the no-JS fallbacks equal midday and night. `node scripts/kinetic-palette.ts` prints every color and ratio. Change a hue or chroma, run the tests; change a lightness step only if they still pass.

### Accent drift

The accent hue drifts along the page. `html` runs a `--page` scroll timeline that animates the registered `--progress` from 0 to 1, and `--drift` is `--progress` times the theme's `--drift-span`, added to the accent hue. Text and background never drift.

The sign differs per theme because some hue offsets break a theme: below 0, midday's accent drops under 4.5:1, and between -65 and -5, dusk's accent leaves sRGB. A test walks each span in ten steps and checks that the accent stays in sRGB and every accent pair stays at 4.5:1 or more. Drift sits behind the motion guard and `@supports (animation-timeline: view())`, so without them `--progress` stays 0.

## Type

### Recursive faces

Two subset woff2 files, Latin only, built by `pnpm subset-font <Recursive_VF.ttf>` (`scripts/subset-font.ts`, harfbuzz through `subset-font`) into `public/fonts/`:

| Face           | Token          | File                      | Axes                                                         | Size               |
| -------------- | -------------- | ------------------------- | ------------------------------------------------------------ | ------------------ |
| Recursive Text | `font-text`    | `recursive-text.woff2`    | All pinned: wght 400, MONO 0, CASL 0, slnt 0, CRSV 0         | 19.5 KB, preloaded |
| Recursive      | `font-kinetic` | `recursive-kinetic.woff2` | CRSV pinned at 0; wght 300 to 1000, MONO, CASL and slnt live | 232 KB             |

Body text uses Recursive Text. Posters, headlines, links, periods, rail labels and `strong` in leads use the kinetic face.

### Axes

Four registered `@property` numbers drive the kinetic face. A base rule maps them onto `font-variation-settings` for every element in `body`, so components only set the properties.

| Property | Axis | Range       | Default |
| -------- | ---- | ----------- | ------- |
| `--wght` | wght | 300 to 1000 | 400     |
| `--mono` | MONO | 0 to 1      | 0       |
| `--casl` | CASL | 0 to 1      | 0       |
| `--slnt` | slnt | -15 to 0    | 0       |

Posters, headlines and `strong` in leads set `font-weight: normal` next to `--wght`, so the browser never synthesizes bold on top.

### Fluid scale

`scripts/kinetic-scale.ts` writes `src/styles/kinetic-scale.css` (`pnpm scale`). One method covers type and spacing: base 1rem at 360px to 1.125rem at 1440px, ratio 1.25 at 360px to 1.5 at 1440px, as `clamp()` with rem bounds and a `cqi` slope. Panels and the rail are size containers, so `cqi` tracks their width.

| Step     | Type          | Spacing | Leading     |
| -------- | ------------- | ------- | ----------- |
| -2       |               | `2xs`   |             |
| -1       | `text-small`  | `xs`    | body 1.6    |
| 0        | `text-body`   | `sm`    | body 1.6    |
| 0 to 1   | `text-link`   |         | body 1.6    |
| 1        | `text-lead`   | `md`    | lead 1.4    |
| 1.5 to 2 | `text-intro`  |         | lead 1.4    |
| 2        | `text-h3`     | `lg`    | heading 1.1 |
| 3        | `text-h2`     | `xl`    | heading 1.1 |
| 4        | `text-h1`     | `2xl`   | heading 1.1 |
| 5        | `text-poster` | `3xl`   | poster 0.9  |

Split steps start at the first step's 360px size and end at the last step's 1440px size, so they stay compact on phones and grow on wide screens: `text-link` runs from step 0 to 1, `text-intro` from 1.5 to 2.

Leading tokens: `leading-body`, `leading-lead`, `leading-heading`, `leading-poster`.

### Split tiers

Each panel has up to four tiers. Split text renders the full string in `.sr-only` and the split copy with `aria-hidden`, so screen readers read plain text.

- **Poster** (`.poster`, `Split.astro`): split per letter, one word per line, so style swaps never rewrap. Peak weight 1000. Size is `min((100cqi + --poster-bleed) / widest em, N --poster-unit / words, --poster-fit / words)`, never below `text-h2`. `posterSize()` in `panels.ts` sums each letter's widest advance (sans from the font file, or 0.6em mono). N is 40 on panels with a headline and 60 without. On short landscape screens (below 30rem tall) N counts `svw` instead of `svh` (`--poster-unit`), so phones size posters from their long side in both orientations. A third limit, `--poster-fit`, keeps every poster's lines within the screen height below the rail. Posters may run into the inline-end padding (`--poster-bleed`). The intro poster is the page's `h1`; the rest are `h2`.
- **Headline** (`.headline`, `Words.astro`): split per word, `text-h2`, at most 22ch, peak weight 800. Each word sits in an `inline-grid` cell over a hidden copy at peak weight that reserves its width, so lines never rewrap. Headlines swap slant only; mono is forced off because reserving mono width leaves gaps at rest. A muted mono `.period` sits above it.
- **Lead** (`.lead`): whole text, `text-intro`, `leading-lead`, at most 40ch. `strong` parts use the kinetic face at weight 800.
- **Prose:** whole, Recursive Text at `text-body` and `leading-body`. Link lists (`.links`) wrap in a flex row at `text-link` with `md` column gaps, which keeps all four on one line from 360px up, and use the kinetic face, like every link.

### Motion on the type

On its panel's view timeline (`--p0` to `--p6`), each poster letter and headline word swings `--wght` from 300 to its peak and back as its panel passes, with a stagger (`--lag`, `--shift`) across the word. A second, stepped animation swaps styles: poster letters mix sans, mono, slant and mono slant; headline words mix upright and slant. Eight swap patterns (`swapKeyframes()` in `swaps.ts`) are built per deploy and inlined in the head inside the motion guard. `shuffle.ts` reassigns them on each visit; neighbors never share one. Every pattern rests on upright sans at 42%, when the panel is in place.

Leads and link lists rise in when a panel crosses `cover 30%` to `cover 70%`, only where `timeline-trigger` is supported.

With a fine hovering pointer, poster letters within 320px of the cursor gain Casual (`pointer.ts`), resetting when the pointer leaves the window.

Posters and headlines stay `visibility: hidden` until the kinetic face loads. The head script sets `data-fonts` two frames after `document.fonts.load('1em Recursive')`, or after 3s, so the face swap is never a layout shift.

## Layout

- **Vertical stack on every device.** `main` holds one `.panel` per statement: intro first (name, intro copy, contact links), then each statement in `src/constants.ts`, then Elsewhere (contact links plus For AI agents).
- **Panels** are size containers, at least `100svh`, a centered flex column with `lg` gaps and `xl` inline padding. A `2xs` accent rule divides them. Block padding clears the rail on top and the theme toggle at the bottom.
- **No scroll snap.** It skipped past the swaps or snapped from too far away.

### The rail

A fixed progress rail across the top, full width with no side padding: one unbroken line of section labels over a `2xs` `surface` rule.

- Each label gets a Recursive face: weight alternates 1000 and 300, and mono, casual and slant shuffle per build (`rail()` in `panels.ts`).
- The line fits the viewport exactly. `--fit` is its width in em, read from `recursive-kinetic.woff2` with `fontkitten` (mono is 0.6em per character), with a 0.6em gap between labels and 0.25em word spaces. Font size is `100cqi / --fit`, kerning is off, and the last label grows to absorb rounding.
- Each label's part of the rule fills with accent from its panel's view timeline (`cover 0%` to `contain 0%`), and the active label mixes toward accent through `--lit`. `timeline-scope` on `html` lets the rail read the panel timelines.
- Clicking a label runs `focus.ts`: scroll to the panel, then focus it. The URL hash doesn't change. The skip link uses the same handler.

## Links and focus

- Links use the kinetic face with an accent underline 0.25em thick at a 0.3em offset (Recursive's `g` reaches 0.25em, so a closer line breaks at descenders).
- Hover and focus set `--wght: 1000` and `--casl: 1`, with a 0.3s transition behind the motion guard.
- `:focus-visible` draws an accent outline, half of `2xs` wide, at the same offset. Panels draw it inset (`2xs * -1.5`) so it doesn't double the panel rule; rail links use a negative offset so the viewport edge never clips it.
- After a mouse click on an in-page link, the panel takes focus without a ring; keyboard activation shows it.

## Theme toggle

A fixed bordered square in the bottom-right corner, in thumb reach: `--spacing-3xl` on touch, `--spacing-xl` with a fine pointer.

- One click cycles auto, dawn, midday, dusk, night. Auto picks from local hours: dawn 5 to 9, midday 9 to 16, dusk 16 to 20, night otherwise.
- The inline head script (`boot.ts`) sets `data-auto`, `data-choice` and `data-theme` on `html` before paint, from `localStorage` key `theme` or the hour. Choosing auto clears the key.
- The SVG icon morphs between sun, horizon and moon on a `linear()` spring; auto adds an orbiting dashed ring. The new theme reveals as a circle from the button through a View Transition, or swaps instantly without one.
- The button's `aria-label` names the current choice and a polite live region announces changes.
- Every `a[download]` (the Resume link) points at the active theme's PDF.

## Reduced motion

Every animation and transition sits behind the motion guard, and `pointer.ts` and the View Transition check the same query. With `prefers-reduced-motion: reduce` the page is the same vertical stack, fully static: posters at weight 1000, headlines at 800, every letter upright sans, no drift, no rise-in, no Casual, no smooth scroll, instant theme swaps. The rail shows plain labels over an empty rule.

## No JS

The server-rendered HTML is the full composition. Without the head script, `html` has no `data-theme`, so the OS picks: light gets midday, dark gets night. Without `data-choice` the toggle is hidden and posters show at once. CSS animations still run, with the swap patterns assigned at build. Rail links fall back to plain anchor jumps, and the Resume link points at the midday PDF.

## Budgets

| Budget                    | Limit | Shipped                                            |
| ------------------------- | ----- | -------------------------------------------------- |
| JS, gzipped, total        | 5 KB  | 1.35 KB (head script 0.34 KB, page module 1.02 KB) |
| `recursive-text.woff2`    |       | 19.5 KB, preloaded                                 |
| `recursive-kinetic.woff2` |       | 232 KB, accepted over the original 150 KB target   |
| Lighthouse mobile LCP     | 2.0s  |                                                    |
| Lighthouse mobile CLS     | 0     |                                                    |

No client frameworks and no animation libraries. Motion is CSS; the client modules only set attributes and custom properties.
