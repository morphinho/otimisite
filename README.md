# Performance-Focused Editorial Blog

A high-performance Next.js blog optimized for Core Web Vitals, SEO, and AdSense monetization.

## Performance Features

- **Static Site Generation (SSG)** - All pages pre-rendered at build time
- **Server Components** - Minimal client-side JavaScript
- **Optimized Images** - Using next/image with proper sizing and lazy loading
- **System Fonts** - No external font loading, instant text rendering
- **AdSense Integration** - CLS-prevented ad placeholders with aspect ratios
- **Semantic HTML** - Proper article, section, and aside elements
- **SEO Optimized** - Static metadata generation, OpenGraph, Twitter cards

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static Site Generation

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Performance Targets

- **Performance**: 95+ (Lighthouse)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

## Key Performance Decisions

1. **Server Components by Default** - Reduces JavaScript bundle size
2. **No Client Components Unless Necessary** - AdSense is the only client component
3. **Aspect Ratio Containers for Ads** - Prevents Cumulative Layout Shift (CLS)
4. **System Fonts** - No font loading blocking render
5. **Static Generation** - Fastest possible load times
6. **Proper Image Sizing** - Prevents layout shift and optimizes LCP

## AdSense Setup

Replace `ca-pub-XXXXXXXXXXXXXXXX` in `components/AdSense.tsx` with your actual AdSense publisher ID.

Update ad slot IDs in components:
- `components/Sidebar.tsx`
- `app/page.tsx`
- `app/blog/[slug]/page.tsx`

## Project Structure

```
app/
  layout.tsx          # Root layout with metadata
  page.tsx            # Home page
  blog/
    page.tsx          # Blog listing
    [slug]/
      page.tsx        # Individual blog posts
components/
  AdSense.tsx         # Client component for ads
  Header.tsx          # Server component navigation
  Footer.tsx          # Server component footer
  Sidebar.tsx         # Server component sidebar
```

## Notes

- All components are Server Components except AdSense (requires client-side script)
- Images use next/image with proper width/height and responsive sizes
- Ad containers use aspect-ratio CSS to prevent CLS
- No animations or fancy effects - pure performance focus
- Content-first approach - speed over aesthetics

