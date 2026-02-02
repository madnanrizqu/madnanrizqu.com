# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (localhost:4321) |
| `npm run build` | Type check + build for production |
| `npm run check` | Run Astro type checking only |
| `npm run preview` | Preview production build locally |

## Architecture Overview

This is a static personal portfolio/blog built with **Astro 5.x** using static site generation (SSG).

### Technology Stack
- **Framework**: Astro with static output
- **UI**: Astro components (.astro) + React (.tsx) for interactive elements
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Content**: Astro Content Collections (MDX/Markdown)
- **Deployment**: Cloudflare (primary adapter)

### Key Directories
- `src/content/` - Content collections: blogs (MDX), projects (MDX), testimonies (Markdown)
- `src/pages/` - File-based routing with dynamic routes for blog/projects
- `src/components/` - Astro components (server-side) and React components (client-side interactivity)
- `src/layouts/` - Layout.astro (root with SEO), PageContainer.astro (content wrapper)

### Content Collections Schema
Defined in `src/content/config.ts`:
- **blogs**: title, description, pubDate (Date), imageSrc, imageAlt, tags (optional)
- **projects**: title, description, techs (array), imageSrc, imageAlt, projectHref (optional), order (optional)
- **testimonies**: id, shortVersion, author, order (optional)

### Routing
- `/` - Landing page
- `/blog` - Blog listing with client-side tag filtering
- `/blog/[slug]` - Dynamic blog posts (generated from `src/content/blogs/`)
- `/portfolio` - Portfolio page with projects and testimonies
- `/projects/[slug]` - Dynamic project pages (generated from `src/content/projects/`)
- `/contact` - Contact form
- `/api/contact` - POST endpoint (Formspree integration, not pre-rendered)

### Component Patterns
- **Server-side**: Astro components for layouts, cards, navigation
- **Client-side**: React components for forms (ContactForm.tsx), theme picker (ThemePicker.tsx), alerts (Alert.tsx)
- React components use `client:load` directive for hydration

### Styling Architecture
- CSS variables defined in `src/styles/global.css` for colors, spacing, typography
- Tailwind config (`tailwind.config.mjs`) maps custom tokens to CSS variables
- Dark mode via `data-theme="dark"` attribute on HTML element
- CSS modules (`.module.css`) for React component scoped styles

### URL Slug Generation
Use `slugify()` from `src/scripts/url.ts` for generating URL-safe slugs from content titles.
