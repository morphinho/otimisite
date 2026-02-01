# Architecture Overview

## Performance-First Design

This blog is built with performance as the primary concern. Every decision prioritizes speed, Core Web Vitals, and SEO.

## Component Architecture

### Server Components (Default)
- **Header.tsx** - Navigation, no JavaScript needed
- **Footer.tsx** - Footer links, pure HTML
- **Sidebar.tsx** - Sidebar content with AdSense placeholder
- **All Pages** - Pre-rendered at build time

### Client Components (Only When Necessary)
- **AdSense.tsx** - Requires client-side script injection

## Page Structure

### Home Page (`app/page.tsx`)
- Hero section with optimized LCP image
- Featured articles grid
- AdSense banner (below fold)

### Blog Listing (`app/blog/page.tsx`)
- Grid of blog post cards
- Static generation
- Proper semantic HTML

### Blog Post (`app/blog/[slug]/page.tsx`)
- Dynamic route with SSG
- `generateStaticParams()` for all posts
- Proper SEO metadata
- In-article ad placement
- Sidebar with additional ads

## Performance Optimizations

### 1. Static Site Generation
- All pages pre-rendered at build time
- Zero server-side rendering overhead
- Fastest possible TTFB

### 2. Image Optimization
- `next/image` with proper sizing
- Responsive `sizes` attribute
- Lazy loading (except LCP image)
- Priority flag for above-fold images
- Automatic format conversion

### 3. AdSense CLS Prevention
- Aspect ratio containers
- Reserved space before ad loads
- Multiple container classes for different ad sizes
- Isolated component prevents re-renders

### 4. Font Strategy
- System fonts only
- No external font loading
- Instant text rendering
- No layout shift

### 5. Minimal JavaScript
- Server Components reduce bundle size
- Only AdSense requires client-side code
- No animations or effects
- Pure CSS styling

## SEO Structure

### Semantic HTML
- `<article>` for blog posts
- `<section>` for content sections
- `<aside>` for sidebar
- `<nav>` for navigation
- `<header>` and `<footer>` for page structure

### Metadata
- Static metadata generation
- OpenGraph tags
- Twitter cards
- Auto-generated sitemap
- Proper robots.txt

### URL Structure
- Clean, semantic URLs
- `/blog/[slug]` pattern
- Static generation for all routes

## File Organization

```
app/                    # Next.js App Router
  layout.tsx           # Root layout with metadata
  page.tsx             # Home page
  globals.css          # Global styles
  blog/                # Blog routes
    page.tsx           # Listing page
    [slug]/            # Dynamic post routes
      page.tsx         # Individual posts
  sitemap.ts           # Auto-generated sitemap

components/            # Reusable components
  AdSense.tsx         # Client component (ads)
  Header.tsx           # Server component
  Footer.tsx           # Server component
  Sidebar.tsx          # Server component

public/               # Static assets
  images/             # Blog post images
  robots.txt          # SEO robots file
```

## Build Process

1. **Development**: `npm run dev`
   - Fast refresh
   - TypeScript checking
   - Tailwind CSS compilation

2. **Production Build**: `npm run build`
   - Static generation of all pages
   - Image optimization
   - Bundle minification
   - Sitemap generation

3. **Production Server**: `npm start`
   - Serves pre-rendered pages
   - Minimal server overhead

## Performance Targets

- **Lighthouse Performance**: 95+
- **LCP**: < 2.5s
- **FID/INP**: < 100ms
- **CLS**: < 0.1
- **TTFB**: < 200ms (static)

## Key Design Decisions

1. **No UI Libraries** - Pure Tailwind CSS for minimal bundle size
2. **No Animations** - Speed over aesthetics
3. **System Fonts** - No font loading blocking
4. **Server Components First** - Minimal client JavaScript
5. **Static Generation** - Fastest possible load times
6. **Aspect Ratio Ads** - Prevents layout shift
7. **Semantic HTML** - Better SEO and accessibility

## Extensibility

To add new features:
1. **New Pages**: Create in `app/` directory
2. **New Components**: Add to `components/` (Server Components by default)
3. **New Blog Posts**: Add to `blogPosts` object in `app/blog/[slug]/page.tsx`
4. **Styling**: Use Tailwind CSS classes (no CSS-in-JS)

## Maintenance

- **Content Updates**: Edit blog posts in `app/blog/[slug]/page.tsx`
- **Styling**: Modify `app/globals.css` or component Tailwind classes
- **SEO**: Update metadata in `app/layout.tsx` and page files
- **Ads**: Configure in `components/AdSense.tsx`

