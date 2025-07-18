# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website/blog for Edisson Reinozo, currently being migrated from Gatsby to SvelteKit. The project uses modern web technologies including Svelte 5, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies (uses Bun package manager)
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type checking
bun run check
bun run check:watch  # Watch mode

# Linting and formatting
bun run lint    # ESLint + format check
bun run format  # Prettier formatting
```

## Architecture and Structure

### Tech Stack
- **Framework**: SvelteKit v2.22.0 with Svelte 5 (uses new runes syntax)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with Vite integration
- **Markdown**: MDsveX for .md/.svx file processing
- **Package Manager**: Bun (not npm/yarn)

### Project Structure
- `/src/routes/` - SvelteKit file-based routing
- `/src/lib/` - Shared components and utilities
- `/static/` - Static assets
- `/docs/blog.md` - Migration guide with Gatsby project details

### Key Configuration Files
- `svelte.config.js` - MDsveX and adapter configuration
- `vite.config.ts` - Tailwind CSS integration via @tailwindcss/vite
- `app.css` - Global styles with Tailwind imports

## Migration Context

This is a fresh SvelteKit installation that will replace a Gatsby blog. The migration aims to:
1. Implement a Markdown-based blog system (articles in `/content/articles/`)
2. Create routes for `/articulos/[slug]/` to display blog posts
3. Maintain the purple theme (#663399) from the original site
4. Add modern UI components using shadcn-svelte

Current status: Base SvelteKit setup complete, blog functionality not yet implemented.

## Development Guidelines

### When working with Svelte components:
- This project uses Svelte 5 runes (`$props()`, `$state()`, etc.)
- Follow existing component patterns in the codebase
- Use TypeScript for all new components

### For the blog system:
- Articles should support frontmatter with `date` and `title` fields
- Use MDsveX for Markdown processing (already configured)
- Implement Spanish date formatting as specified in migration guide

### Styling approach:
- Use Tailwind CSS utilities for styling
- The primary color should be rebeccapurple (#663399)
- Follow the Tailwind v4 syntax (CSS-based configuration)