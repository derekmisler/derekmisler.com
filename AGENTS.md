This file provides guidance to AI agents when working with code in this repository.

## Repository Overview

This is Derek Misler's personal portfolio website - a static site built with Astro.js featuring a clean, minimalist design focused on typography and accessibility.

## Development Commands

### Core Development

```bash
pnpm dev            # Start development server with hot reload
pnpm build          # Build static site for production
pnpm preview        # Preview production build locally
```

### Code Quality

```bash
pnpm test           # Astro check + oxlint + oxfmt check + token check
pnpm lint           # oxlint
pnpm format         # oxfmt (write)
pnpm format:check   # oxfmt --check
pnpm test:visual    # Build, then compare Playwright screenshots against tests/screenshots/
                    # First run on a new machine: pnpm exec playwright install chromium
pnpm fix            # oxfmt write + oxlint --fix
```

## Architecture

### Technology Stack

- **Framework**: Astro with static output (version pinned in `package.json`)
- **Styling**: Tailwind v4 with tokens from `src/styles/theme.css` (all Tailwind defaults disabled)
- **TypeScript**: Strict mode with path aliases (`@/` for `src/`)
- **Package Manager**: PNPM
- **Fonts**: IBM Plex Sans (self-hosted in `/public/fonts/sans/`, declared in `src/styles/ibm-plex-sans-all.css`)

### Project Structure

```
src/
├── components/        # Astro components (.astro files)
│   ├── Header.astro   # Hero header with gradient text
│   ├── Main.astro     # Main content area
│   ├── Nav.astro, NavToggle.astro, Section.astro, IconButton.astro
│   ├── ScrollObserver.astro
│   └── ThemeToggle.astro
├── pages/
│   ├── index.astro    # Homepage with SEO configuration
│   └── robots.txt.ts  # Dynamic robots.txt generation
├── styles/
│   ├── theme.css      # Tailwind tokens and theme color variables
│   ├── global.css     # Tailwind entry: base rules and custom utilities
│   └── ibm-plex-sans-all.css  # @font-face declarations
├── utils/
│   └── scrollObserver.client.ts
└── constants.ts       # Site content and configuration
```

### Key Features

- **SEO Optimized**: Uses `@astrolib/seo` (`AstroSeo`) with Open Graph and Twitter cards
- **Accessibility**: No automated a11y lint; oxlint's `jsx-a11y` rules only see JSX, not `.astro` markup
- **Performance**: Static generation with sitemap integration
- **Typography**: Custom font loading with IBM Plex Sans
- **Responsive Design**: Mobile-first approach with viewport-based sizing

### Content Management

Most site content is centralized in `src/constants.ts` (the hero copy lives in `Header.astro`):

- Personal information and bio
- Skills and experience data
- Social media links and contact information
- Career history and education details

### Styling Approach

- UI work: read `DESIGN.md` first. Tokens only, no arbitrary values.
- Token utilities in markup; scoped `<style>` only for values with no token yet
- Dark and light themes swap CSS variables under `html[data-theme='light']`
- Gradient text on the hero via the `gradient-text` utility
- Responsive typography using `clamp()` with viewport units

## Development Notes

### Code Quality Standards

- **TypeScript**: Strict mode with explicit types
- **oxlint**: Linting for `.ts`, `.mjs` and the frontmatter and `<script>` blocks of `.astro` files; it does not lint `.astro` markup or CSS
- **oxfmt**: Formatting for `.ts`, `.mjs`, `.css`, `.md`, `.json` and `.yml`; `.astro` files are ignored because oxfmt's experimental Astro support adds visible whitespace (`Docker</a>.` becomes `Docker .`), so format them by hand

### SEO Configuration

- Configured for `https://derekmisler.com`
- Google site verification included
- Automatic sitemap generation
- Structured meta tags for social media

### Deployment

- Built for static hosting (Cloudflare)
- Outputs to `dist/` directory
- Includes favicon and social media images in `/public/`
