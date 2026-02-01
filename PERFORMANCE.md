# Performance Optimization Guide

This document explains the performance decisions made in this blog implementation.

## Core Principles

1. **Server Components by Default** - Reduces JavaScript bundle size
2. **Static Site Generation** - Pre-rendered pages for instant load times
3. **Minimal Client JavaScript** - Only AdSense requires client-side code
4. **System Fonts** - No external font loading blocking render
5. **Optimized Images** - Proper sizing, lazy loading, modern formats

## Performance Optimizations

### 1. Server Components

All components are Server Components except `AdSense.tsx`, which requires client-side script injection. This means:
- No JavaScript sent to client for navigation, headers, footers
- Faster initial page load
- Better Core Web Vitals scores

### 2. Static Site Generation

All pages use SSG:
- `generateStaticParams()` for dynamic routes
- Pages pre-rendered at build time
- Zero server-side rendering overhead
- Fastest possible TTFB

### 3. Image Optimization

Using `next/image` with:
- Proper `width` and `height` to prevent layout shift
- Responsive `sizes` attribute
- Lazy loading by default (except LCP image)
- `priority` flag only for above-the-fold images
- Automatic format conversion (WebP, AVIF)

### 4. AdSense CLS Prevention

Ad containers use CSS `aspect-ratio`:
- Reserves exact space before ad loads
- Prevents Cumulative Layout Shift
- Multiple container classes for different ad sizes:
  - `ad-container` - 300x250 rectangle
  - `ad-container-wide` - 728x90 banner
  - `ad-container-square` - Square ads

### 5. Font Strategy

Using system fonts:
- No external font requests
- Instant text rendering
- `font-display: swap` ensures text is visible immediately
- No layout shift from font loading

### 6. Minimal JavaScript

- No animations or effects
- No heavy libraries
- No UI component libraries
- Pure CSS for styling
- Native HTML semantics

## Core Web Vitals Targets

### Largest Contentful Paint (LCP)
- Target: < 2.5s
- Optimizations:
  - Priority image loading for hero images
  - Proper image sizing
  - System fonts (no font blocking)

### First Input Delay (FID) / Interaction to Next Paint (INP)
- Target: < 100ms
- Optimizations:
  - Minimal JavaScript execution
  - Server Components reduce client-side work
  - No heavy client-side libraries

### Cumulative Layout Shift (CLS)
- Target: < 0.1
- Optimizations:
  - Aspect ratio containers for ads
  - Proper image dimensions
  - Reserved space for dynamic content

## SEO Optimizations

1. **Semantic HTML** - Proper use of `<article>`, `<section>`, `<aside>`
2. **One H1 per page** - Logical heading hierarchy
3. **Static metadata** - Generated at build time
4. **OpenGraph tags** - Social media sharing
5. **Twitter cards** - Enhanced Twitter sharing
6. **Sitemap** - Auto-generated at build time
7. **Robots.txt** - Proper crawling instructions

## Bundle Size

- Minimal dependencies
- No unnecessary abstractions
- Tree-shaking enabled
- SWC minification
- Package import optimization

## Monitoring

To verify performance:
1. Run `npm run build` to see bundle analysis
2. Use Lighthouse in Chrome DevTools
3. Check Core Web Vitals in Google Search Console
4. Monitor Real User Monitoring (RUM) data

## Future Optimizations

If needed, consider:
- Edge caching with CDN
- HTTP/2 Server Push (if supported)
- Resource hints (preconnect, prefetch)
- Service Worker for offline support (only if needed)

