This file provides guidance to AI agents when working with code in this repository.

## Repository Overview

This is Derek Misler's personal portfolio website: a static, single-page Astro site set in kinetic Recursive type, with four time-of-day themes.

## Development Commands

### Core Development

```bash
pnpm dev            # Start development server with hot reload
pnpm build          # Build static site for production
pnpm preview        # Preview production build locally
pnpm resume         # Regenerate public/derek-misler-resume-{dawn,midday,dusk,night}.pdf from src/constants.ts (needs Google Chrome installed)
pnpm scale          # Regenerate src/styles/kinetic-scale.css from scripts/kinetic-scale.ts
pnpm cursor         # Regenerate src/styles/kinetic-cursor.css (per-theme cursor SVGs) from the theme accents
pnpm subset-font <Recursive_VF.ttf>  # Rebuild the two Recursive woff2 files in public/fonts/
```

The resume PDF is generated locally and committed, never in `pnpm build`. Rerun `pnpm resume` after changing `src/constants.ts`. Each role's `resume` array picks which accomplishments the one-page PDF shows. Each PDF assumes white paper and takes its text, rule and accent colors from that theme in `kinetic-theme.css`; the Resume link swaps to the active theme's PDF.

### Code Quality

```bash
pnpm test           # Astro check + oxlint + oxfmt check + token check + scripts/*.test.ts
pnpm lint           # oxlint
pnpm format         # oxfmt (write)
pnpm format:check   # oxfmt --check
pnpm fix            # oxfmt write + oxlint --fix
```

`node scripts/kinetic-palette.ts` prints every theme color and contrast ratio.

## Architecture

### Technology Stack

- **Framework**: Astro with static output (version pinned in `package.json`)
- **Styling**: Tailwind v4 with tokens from `src/styles/kinetic-theme.css` and the generated `kinetic-scale.css` (all Tailwind defaults disabled), plus hand-written CSS in `src/kinetic/kinetic.css`
- **TypeScript**: Strict mode with path aliases (`@/` for `src/`)
- **Package Manager**: PNPM
- **Fonts**: Recursive, subset by `pnpm subset-font` into `/public/fonts/` and declared in `src/styles/kinetic-theme.css`
- **Client JS**: plain TypeScript modules, no framework, 5 KB gzipped budget

### Project Structure

```
src/
├── kinetic/
│   ├── kinetic.css      # Layout, type tiers, links, rail, toggle and motion, in @layer kinetic
│   ├── Track.astro      # The panels: poster, period and headline, lead, links
│   ├── Rail.astro       # Fixed progress rail of section labels
│   ├── ThemeToggle.astro
│   ├── Split.astro      # Poster text split per letter, unsplit copy for screen readers
│   ├── Words.astro      # Headline text split per word
│   ├── panels.ts        # Panel content, poster sizes and rail layout, measured from the font
│   ├── split.ts         # Word splitting and the per-letter stagger
│   ├── swaps.ts         # Style swap keyframes, built per deploy
│   ├── boot.ts          # Inline head script: theme, fonts-loaded flag
│   ├── hours.ts         # Local hour to theme
│   ├── switcher.ts      # Theme toggle, View Transition, resume link swap
│   ├── pointer.ts       # Casual axis near the pointer on posters
│   ├── focus.ts         # In-page links: scroll to the panel, then focus it
│   └── shuffle.ts       # Reassigns swap patterns per visit
├── pages/
│   ├── index.astro      # Homepage with SEO and JSON-LD
│   ├── 404.astro
│   ├── llms.txt.ts      # /llms.txt, the full profile for AI agents
│   └── robots.txt.ts    # Dynamic robots.txt generation
├── styles/
│   ├── kinetic-theme.css  # Tailwind tokens, fonts, registered axes, four OKLCH themes
│   ├── kinetic-scale.css  # Generated fluid type, leading and spacing (pnpm scale)
│   └── kinetic-cursor.css # Generated per-theme cursor SVGs (pnpm cursor)
├── utils/
│   ├── llms.ts          # Builds the llms.txt text
│   └── resume.ts        # Builds the resume markdown for scripts/resume.ts
└── constants.ts         # Site content and configuration
scripts/
├── check-tokens.mjs     # Token and kinetic CSS rules, run by pnpm test
├── kinetic-palette.ts   # Theme color parsing and contrast
├── kinetic-scale.ts     # Fluid scale generator
├── kinetic-cursor.ts    # Cursor SVG generator
├── kinetic.test.ts      # Palette, scale, cursor, token rules, splitter, panels, theme boot
├── subset-font.ts       # Recursive subsetting
└── resume.ts, resume.css
```

### Key Features

- **SEO Optimized**: Uses `@astrolib/seo` (`AstroSeo`) with Open Graph and Twitter cards, plus Person JSON-LD
- **Accessibility**: Split text keeps an unsplit copy for screen readers, every text pair is AA in every theme, and all motion respects reduced motion. No automated a11y lint; oxlint's `jsx-a11y` rules only see JSX, not `.astro` markup
- **Performance**: Static generation with sitemap integration, one preloaded text font, about 1.35 KB of gzipped JS
- **Progressive enhancement**: The server-rendered HTML is the full page without JS, with the OS-picked theme

### Content Management

Site content is centralized in `src/constants.ts`:

- Personal information and the intro copy (`intro`)
- Statements, one panel each, with a short `poster` line
- Skills and experience data
- Social media links and contact information
- Career history and education details

The homepage panels, `llms.txt` and the resume are built from `src/constants.ts`. Non-breaking hyphens are `-` plus U+2060 (Recursive has no U+2011); `llms.ts` and `resume.ts` strip the joiner.

### Styling Approach

- UI work: read `DESIGN.md` first. Tokens only, no arbitrary values; `pnpm test` enforces the token and kinetic rules.
- Token utilities in markup; component styles in `src/kinetic/kinetic.css`, reading tokens with `--theme()`.
- Four themes (dawn, midday, dusk, night) swap CSS variables under `html[data-theme]`; with no attribute, `prefers-color-scheme` picks midday or night.
- Font axes only through the registered `--wght`, `--mono`, `--casl` and `--slnt` properties.
- Fluid type and spacing from one generated scale, `clamp()` with rem bounds and `cqi`.

## Development Notes

### Code Quality Standards

- **TypeScript**: Strict mode with explicit types
- **oxlint**: Linting for `.ts`, `.mjs` and the frontmatter and `<script>` blocks of `.astro` files; it does not lint `.astro` markup or CSS
- **oxfmt**: Formatting for `.ts`, `.mjs`, `.astro`, `.css`, `.md`, `.json` and `.yml`. `.astro` support is on through `"astro": true` in `.oxfmtrc.json` and uses `@astrojs/compiler-rs`, which Astro already installs

### SEO Configuration

- Configured for `https://derekmisler.com`
- Google site verification included
- Automatic sitemap generation
- Structured meta tags for social media

### Deployment

- Built for static hosting (Cloudflare)
- Outputs to `dist/` directory
- Includes favicon, social media images, resume PDFs, `_headers` and `_redirects` in `/public/`

### Pull Requests

One PR per session. This is a personal repo, so a clean history doesn't matter: put all of a session's work on one branch and one PR, and push follow-up commits (merge commits are fine) to it instead of opening new PRs. A stack is fine only when a later change truly depends on an earlier one that should merge first. If a session already has an open PR here, add to it.
