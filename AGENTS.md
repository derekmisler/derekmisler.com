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
pnpm test           # Astro check + Prettier check + Biome lint
pnpm fix            # Prettier write + Biome lint --write
```

## Architecture

### Technology Stack

- **Framework**: Astro with static output (version pinned in `package.json`)
- **Styling**: CSS with custom properties (CSS variables)
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
│   ├── global.css     # Global styles with CSS custom properties
│   └── ibm-plex-sans-all.css  # @font-face declarations
├── utils/
│   └── scrollObserver.client.ts
└── constants.ts       # Site content and configuration
```

### Key Features

- **SEO Optimized**: Uses `@astrolib/seo` (`AstroSeo`) with Open Graph and Twitter cards
- **Accessibility**: Biome linter with its recommended a11y rules
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

- CSS custom properties for theming
- Component-scoped styles in `.astro` files
- Gradient text effects for headings
- Responsive typography using `clamp()` with viewport units

## Development Notes

### Code Quality Standards

- **TypeScript**: Strict mode with explicit types
- **Biome**: Linting (JS/TS, CSS, HTML) with recommended and a11y rules; its formatter is off
- **Prettier**: Code formatting with Astro plugin

### SEO Configuration

- Configured for `https://derekmisler.com`
- Google site verification included
- Automatic sitemap generation
- Structured meta tags for social media

### Deployment

- Built for static hosting (Cloudflare)
- Outputs to `dist/` directory
- Includes favicon and social media images in `/public/`
