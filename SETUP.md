# Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure AdSense**
   
   Edit `components/AdSense.tsx` and replace:
   - `ca-pub-XXXXXXXXXXXXXXXX` with your actual AdSense Publisher ID (appears twice in the file)
   
   Update ad slot IDs in:
   - `components/Sidebar.tsx` (line 15)
   - `app/page.tsx` (line 67)
   - `app/blog/[slug]/page.tsx` (line 150)

3. **Add Images**
   
   Place your blog post images in `public/images/`:
   - `post-1.jpg` (recommended: 1200x630px for OpenGraph)
   - `post-2.jpg`
   - `post-3.jpg`
   
   Or update image paths in:
   - `app/page.tsx`
   - `app/blog/page.tsx`
   - `app/blog/[slug]/page.tsx`

4. **Update Site Metadata**
   
   Edit `app/layout.tsx`:
   - Update `metadataBase` URL (line 12)
   - Update site name and description
   
   Edit `app/sitemap.ts`:
   - Update `baseUrl` (line 7)

5. **Add Blog Posts**
   
   Edit `app/blog/[slug]/page.tsx`:
   - Add new posts to the `blogPosts` object (line 12)
   - Update `generateStaticParams()` if needed (line 95)

## Development

```bash
npm run dev
```

Visit http://localhost:3000

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with system fonts
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog posts (SSG)
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── not-found.tsx       # 404 page
├── components/
│   ├── AdSense.tsx         # Client component for ads
│   ├── Header.tsx          # Server component navigation
│   ├── Footer.tsx           # Server component footer
│   └── Sidebar.tsx         # Server component sidebar
├── public/
│   ├── images/             # Blog post images
│   └── robots.txt          # SEO robots file
└── [config files]
```

## Key Files to Customize

- **Content**: `app/blog/[slug]/page.tsx` - Blog posts data
- **Styling**: `app/globals.css` - Global styles
- **Layout**: `components/Header.tsx`, `components/Footer.tsx`
- **SEO**: `app/layout.tsx` - Metadata configuration
- **Ads**: `components/AdSense.tsx` - AdSense setup

## Performance Checklist

- ✅ All components are Server Components (except AdSense)
- ✅ Static Site Generation enabled
- ✅ System fonts (no external loading)
- ✅ Proper image optimization with next/image
- ✅ Ad containers use aspect-ratio (prevents CLS)
- ✅ Semantic HTML structure
- ✅ Static metadata generation
- ✅ Sitemap auto-generated

## Next Steps

1. Replace placeholder content with your actual blog posts
2. Add your AdSense publisher ID and ad slots
3. Add your blog post images
4. Update metadata and URLs
5. Test with Lighthouse (target: 95+ Performance score)
6. Deploy to production

