# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build with static export
npm run build

# Serve production build locally
npm run serve

# Start Next.js server (after build)
npm run start

# Run ESLint
npm run lint
```

## Project Architecture

### Static Export Configuration
This portfolio uses Next.js static export (`output: 'export'`) optimized for GitHub Pages deployment. The build generates static HTML files in the `out/` directory.

### PWA Implementation
- **Manual Service Worker**: Custom implementation without next-pwa due to Next.js 15 compatibility issues
- **Registration**: `src/lib/register-sw.ts` exports `registerSW()` function
- **Client-side Registration**: `src/components/sw-register.tsx` handles browser-side registration
- **Manifest**: `public/manifest.json` with proper icon paths and PWA metadata
- **Offline Caching**: Service worker caches essential resources with cache-first strategy

### Internationalization Architecture
- **Context-based**: `src/contexts/LanguageContext.tsx` provides language state management
- **Type-safe Content**: All content uses `LanguageContent` interface with `en` and `id` properties
- **Data Structure**: Content organized in `src/data/` with typed configurations
- **Centralized Config**: `src/data/config.ts` contains app-wide settings and framework selections

### Component Structure
- **Section Components**: Each major section (About, Portfolio, Contact, etc.) is a separate component
- **Data-driven**: Components consume typed data from `src/data/` modules
- **Responsive Design**: Tailwind CSS 4.1 with mobile-first approach
- **Performance Optimized**: Uses lazysizes for image lazy loading

### Key Technical Patterns

#### Content Management
All text content follows this pattern:
```typescript
interface LanguageContent {
  en: string;
  id: string;
}
```

#### Configuration System
Framework and portfolio items are configured in `src/data/config.ts` with typed interfaces. To add/remove frameworks, modify the `FRAMEWORK` array.

#### PWA Service Worker Registration
The service worker is registered client-side only in production:
- Root layout includes `<ServiceWorkerRegister />` component  
- Component uses `useEffect` to call `registerSW()` after mount
- Service worker only registers in production builds

#### Image Optimization
- All images should use lazy loading via lazysizes
- Portfolio images have configurable sizes in config (SMALL: 360, MEDIUM: 640)
- Icons stored in `public/images/favicon/` with proper PWA manifest references

### Deployment
- **Automatic**: GitHub Actions workflow triggers on push to `main` branch
- **Process**: Install → Lint → Build → Verify PWA assets → Deploy to GitHub Pages  
- **PWA Verification**: Build process validates manifest.json and sw.js exist in output

### Important Notes
- Requires Node.js 22.x or later (specified in package.json engines)
- Uses BSD 3-Clause license
- Turbopack enabled for faster development builds
- Static export requires `images.unoptimized: true` in Next.js config