This file provides guidance to AI agents when working with code in this repository.

## Repository Overview

This is Derek Misler's personal portfolio website - a static site built with Astro.js featuring a clean, minimalist design focused on typography and accessibility.

## Development Commands

### Core Development

```bash
pnpm start          # Start development server with hot reload
pnpm build          # Build static site for production
pnpm preview        # Preview production build locally
```

### Code Quality

```bash
pnpm test           # Run full test suite: Astro check + Prettier + ESLint + Stylelint
pnpm lint:fix       # Fix ESLint issues automatically
pnpm format:fix     # Format code with Prettier
pnpm style:fix      # Fix Stylelint CSS/Astro issues
pnpm fix            # Run all fixes: style, format, and lint
```

## Architecture

### Technology Stack

- **Framework**: Astro.js v5 with static site generation
- **Styling**: CSS with custom properties (CSS variables)
- **TypeScript**: Strict mode with path aliases (`@/` for `src/`)
- **Package Manager**: PNPM
- **Fonts**: IBM Plex Serif (self-hosted in `/public/fonts/`)

### Project Structure

```
src/
├── components/        # Astro components (.astro files)
│   ├── Header.astro   # Hero header with gradient text
│   ├── Main.astro     # Main content area
│   └── ThemeToggle.astro
├── pages/
│   ├── index.astro    # Homepage with SEO configuration
│   └── robots.txt.ts  # Dynamic robots.txt generation
├── styles/
│   └── global.css     # Global styles with CSS custom properties
└── constants.tsx       # Site content and configuration
```

### Key Features

- **SEO Optimized**: Uses `astro-seo` with Open Graph and Twitter cards
- **Accessibility**: ESLint with jsx-a11y strict rules
- **Performance**: Static generation with sitemap integration
- **Typography**: Custom font loading with IBM Plex Serif
- **Responsive Design**: Mobile-first approach with viewport-based sizing

### Content Management

All site content is centralized in `src/constants.tsx`:

- Personal information and bio
- Skills and experience data
- Social media links and contact information
- Career history and education details

### Styling Approach

- CSS custom properties for theming
- Component-scoped styles in `.astro` files
- Gradient text effects for headings
- Responsive typography using `max()` and viewport units

## Development Notes

### Code Quality Standards

- **TypeScript**: Strict mode with explicit types
- **ESLint**: Astro plugin with accessibility rules
- **Prettier**: Code formatting with Astro plugin
- **Stylelint**: CSS linting for Astro and CSS files

### SEO Configuration

- Configured for `https://derekmisler.com`
- Google site verification included
- Automatic sitemap generation
- Structured meta tags for social media

### Deployment

- Built for static hosting (Cloudflare)
- Outputs to `dist/` directory
- Includes favicon and social media images in `/public/`
