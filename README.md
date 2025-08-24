# Yusril A. P. Portfolio

A modern, responsive portfolio website built with Next.js 15 and featuring Progressive Web App (PWA) capabilities. This portfolio showcases professional experience, projects, and skills as a Full-stack Developer.

[![Deploy to GitHub Pages](https://github.com/yusril-adr/yusril-adr.github.io/workflows/Deploy%20Next.js%20site%20to%20Pages/badge.svg)](https://github.com/yusril-adr/yusril-adr.github.io/actions)

## ✨ Features

- **🚀 Next.js 15** - Latest version with Turbopack for blazing-fast development
- **📱 Progressive Web App (PWA)** - Installable app with offline functionality
- **🎨 Modern Design** - Clean, responsive UI with Tailwind CSS 4.1
- **⚡ Performance Optimized** - Image lazy loading with lazysizes
- **🌐 Multi-language Support** - Language context for internationalization
- **🔄 Smooth Animations** - Custom scroll animations and transitions
- **📊 SEO Optimized** - Meta tags, structured data, and social media integration
- **♿ Accessibility** - WCAG compliant with proper ARIA labels
- **📦 Static Export** - Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 15.5.0
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 4.1.12
- **Icons:** Lucide React
- **Language:** TypeScript 5.x
- **Build Tool:** Turbopack
- **Deployment:** GitHub Pages
- **PWA:** Custom Service Worker

## 🏃‍♂️ Quick Start

### Prerequisites

- **Node.js** 22.x or later
- **npm** 10.x or later

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yusril-adr/yusril-adr.github.io.git
   cd yusril-adr.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start production server (after build) |
| `npm run serve` | Serve the static build from `out/` directory |
| `npm run lint` | Run ESLint for code quality checks |

## 📦 Production Build

### Building for Static Export

This project is configured for static export, perfect for GitHub Pages deployment:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Serve locally** (optional)
   ```bash
   npm run serve
   ```

3. **Deploy the `out/` directory** to your hosting platform

### Build Output

The build process generates:
- **Static HTML files** in the `out/` directory
- **Optimized assets** (CSS, JS, images)
- **PWA files** (manifest.json, service worker)
- **SEO metadata** and structured data

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

This repository includes GitHub Actions workflow for automatic deployment:

- **Trigger:** Push to `main` branch
- **Process:** Install → Lint → Build → Verify PWA → Deploy
- **URL:** https://yusril-adr.github.io

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `out/` directory** to your hosting provider

### Environment Variables

For production deployment, you may need to set:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name  # For GitHub Pages subfolder deployment
```

## 📱 PWA Features

### Installation
- **Desktop:** Install button appears in supported browsers
- **Mobile:** Add to home screen prompt

### Offline Functionality
- **Service Worker** caches essential resources
- **Offline fallback** serves cached content when network unavailable
- **Cache strategies** for optimal performance

### PWA Configuration
- **Manifest:** `public/manifest.json`
- **Service Worker:** `public/sw.js`
- **Registration:** `src/lib/register-sw.ts`

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Home.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation
│   ├── Portfolio.tsx   # Projects showcase
│   └── sw-register.tsx # PWA service worker registration
├── contexts/           # React contexts
│   └── LanguageContext.tsx # Internationalization
├── data/              # Static data and configuration
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries
└── types/             # TypeScript type definitions
```

## ⚡ Performance

- **Lighthouse Score:** 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Bundle Size:** Minimized with tree-shaking and code splitting
- **Image Optimization:** Lazy loading with lazysizes library

## 📝 License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Yusril A. P.**
- Portfolio: [yusril-adr.github.io](https://yusril-adr.github.io)
- GitHub: [@yusril-adr](https://github.com/yusril-adr)

---

⭐ **Star this repository if you find it helpful!**
