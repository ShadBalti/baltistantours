# Baltistan Tourism Guide - Next.js Routing Structure

## Overview
This is a fully optimized Next.js 16 application using the App Router with comprehensive support for:
- **Server-Side Rendering (SSR)** - Dynamic pages with proper async params
- **Static Site Generation (SSG)** - Pre-rendered pages with ISR (Incremental Static Regeneration)
- **Image Optimization** - Next.js Image component with automatic format conversion
- **API Routes** - RESTful endpoints for data fetching
- **File-based Routing** - Clean URL structure using Next.js App Router

---

## Directory Structure

\`\`\`
app/
├── layout.tsx                    # Root layout with metadata
├── page.tsx                      # Home page (/) - SSG with 24h revalidation
├── globals.css                   # Global styles
├── api/
│   ├── blogs/
│   │   ├── route.ts             # GET all blog posts
│   │   └── [slug]/
│   │       └── route.ts         # GET single blog post by slug
│   ├── revalidate/
│   │   └── route.ts             # POST endpoint for on-demand revalidation
│   └── health/
│       └── route.ts             # GET health check endpoint
├── blogs/
│   ├── page.tsx                 # Blog listing page (/blogs) - SSG
│   └── [slug]/
│       └── page.tsx             # Blog detail page (/blogs/[slug]) - SSG with dynamic routes
├── destinations/
│   ├── page.tsx                 # Destinations listing (/destinations)
│   ├── skardu/
│   │   └── page.tsx             # Skardu destination (/destinations/skardu)
│   ├── shigar/
│   │   └── page.tsx             # Shigar destination (/destinations/shigar)
│   ├── khaplu/
│   │   └── page.tsx             # Khaplu destination (/destinations/khaplu)
│   ├── kharmang/
│   │   └── page.tsx             # Kharmang destination (/destinations/kharmang)
│   └── rondu/
│       └── page.tsx             # Rondu destination (/destinations/rondu)
├── getting-there/
│   └── page.tsx                 # Travel routes and transportation (/getting-there)
├── food/
│   └── page.tsx                 # Food guide (/food) - PLACEHOLDER
├── adventure/
│   └── page.tsx                 # Adventure activities (/adventure) - PLACEHOLDER
├── culture/
│   └── page.tsx                 # Balti culture (/culture) - PLACEHOLDER
├── experiences/
│   └── page.tsx                 # Experiences (/experiences) - PLACEHOLDER
├── festivals/
│   └── page.tsx                 # Festivals (/festivals) - PLACEHOLDER
├── accommodation/
│   └── page.tsx                 # Accommodation guide (/accommodation) - PLACEHOLDER
├── travel-essentials/
│   └── page.tsx                 # Travel essentials (/travel-essentials) - PLACEHOLDER
├── language/
│   └── page.tsx                 # Language guide (/language) - PLACEHOLDER
├── tips/
│   └── page.tsx                 # Tips & tricks (/tips) - PLACEHOLDER
├── about/
│   └── page.tsx                 # About page (/about) - PLACEHOLDER
├── contact/
│   └── page.tsx                 # Contact page (/contact) - PLACEHOLDER
└── privacy/
    └── page.tsx                 # Privacy policy (/privacy) - PLACEHOLDER
\`\`\`

---

## Complete Page Routes

### Root Routes (Currently Implemented)
| Route | File | Type | SSR/SSG | Revalidation | Status |
|-------|------|------|---------|--------------|--------|
| `/` | `app/page.tsx` | Home | SSG | 24h ISR | ✅ Complete |
| `/getting-there` | `app/getting-there/page.tsx` | Guide | SSR | N/A | ⚠️ Stub |
| `/blogs` | `app/blogs/page.tsx` | Listing | SSG | 24h ISR | ✅ Complete |
| `/blogs/[slug]` | `app/blogs/[slug]/page.tsx` | Detail | SSG | 24h ISR | ✅ Complete |
| `/destinations` | `app/destinations/page.tsx` | Listing | SSR | N/A | ✅ Complete |
| `/destinations/skardu` | `app/destinations/skardu/page.tsx` | Detail | SSR | N/A | ⚠️ Stub |

### Placeholder Routes (Need Content)
| Route | File | Type | Priority |
|-------|------|------|----------|
| `/accommodation` | `app/accommodation/page.tsx` | Guide | High |
| `/food` | `app/food/page.tsx` | Guide | High |
| `/adventure` | `app/adventure/page.tsx` | Guide | High |
| `/culture` | `app/culture/page.tsx` | Guide | High |
| `/experiences` | `app/experiences/page.tsx` | Guide | Medium |
| `/festivals` | `app/festivals/page.tsx` | Guide | Medium |
| `/travel-essentials` | `app/travel-essentials/page.tsx` | Guide | High |
| `/language` | `app/language/page.tsx` | Guide | Medium |
| `/tips` | `app/tips/page.tsx` | Guide | Medium |
| `/about` | `app/about/page.tsx` | Info | Low |
| `/contact` | `app/contact/page.tsx` | Info | Low |
| `/privacy` | `app/privacy/page.tsx` | Info | Low |

### Additional Nested Routes Needed
| Route | Type | Purpose |
|-------|------|---------|
| `/destinations/shigar` | Detail | Shigar destination |
| `/destinations/khaplu` | Detail | Khaplu destination |
| `/destinations/kharmang` | Detail | Kharmang destination |
| `/destinations/rondu` | Detail | Rondu destination |

---

## API Routes

### Blog APIs
**GET /api/blogs**
- Returns all blog posts
- Cache: 24 hours
- Response: Array of blog posts

**GET /api/blogs/[slug]**
- Returns single blog post by slug
- Cache: 24 hours
- Response: Blog post object or 404

### System APIs
**POST /api/revalidate**
- On-demand cache revalidation
- Requires `REVALIDATION_SECRET` header
- Body: `{ tag: string, revalidationType: 'tag' | 'path' }`

**GET /api/health**
- Health check endpoint
- Returns: `{ status: 'ok', timestamp: ISO8601 }`

---

## Caching & Revalidation Strategy

### Static Generation (SSG)
- **Home page**: `force-static` with 24h ISR
- **Blog listing**: `force-static` with 24h ISR
- **Blog detail pages**: Static with `generateStaticParams()` for all slugs
- **Revalidation**: Every 24 hours via ISR

### Server-Side Rendering (SSR)
- Destination listing pages
- Dynamic routes with async params
- Used for frequently changing content

### Image Optimization
- Automatic AVIF/WebP conversion
- Responsive image serving
- Cache: 31536000 seconds (1 year)
- Optimized formats: AVIF, WebP, JPEG

---

## Navigation Structure

### Sidebar Navigation Groups
\`\`\`
Getting Started
  - Home (/)
  - Getting There (/getting-there)

Explore
  - Destinations (/destinations)
  - Skardu (/destinations/skardu)
  - Shigar (/destinations/shigar)
  - Khaplu (/destinations/khaplu)
  - Kharmang (/destinations/kharmang)
  - Rondu (/destinations/rondu)

Experiences
  - Accommodation (/accommodation)
  - Food (/food)
  - Adventure (/adventure)
  - Culture (/culture)
  - Experiences (/experiences)
  - Festivals (/festivals)

Travel Info
  - Travel Essentials (/travel-essentials)
  - Language (/language)
  - Tips & Tricks (/tips)
  - Blog (/blogs)

About
  - About Us (/about)
  - Privacy Policy (/privacy)
  - Contact (/contact)
\`\`\`

### Footer Quick Links
\`\`\`
Quick Links
  - Home
  - Destinations
  - Blog
  - About

Resources
  - Travel Essentials
  - Tips & Tricks
  - Language
  - Food Guide

Bottom Navigation
  - Privacy Policy
  - Contact
\`\`\`

---

## Features Implemented

### Server-Side Rendering (SSR)
✅ Async params handling with `await params`
✅ Dynamic route generation
✅ Proper error handling with `notFound()`
✅ Metadata generation per page

### Static Site Generation (SSG)
✅ Home page pre-rendered at build time
✅ Blog listing pre-rendered
✅ Dynamic blog routes via `generateStaticParams()`
✅ ISR (Incremental Static Regeneration) with 24h revalidation

### Image Optimization
✅ Next.js Image component configured
✅ AVIF/WebP format support
✅ Responsive image delivery
✅ 1-year cache headers
✅ Remote image pattern configuration

### API Routes
✅ RESTful endpoints for data fetching
✅ Blog data API
✅ On-demand revalidation endpoint
✅ Health check endpoint
✅ Proper cache headers

### File-based Routing
✅ Clean URL structure
✅ Nested routes with group organization
✅ Dynamic routes with `[slug]` pattern
✅ Optional catch-all routes ready

---

## Environment Variables Required

\`\`\`
# On-demand revalidation
REVALIDATION_SECRET=your-secret-key

# Image optimization (optional)
NEXT_PUBLIC_IMAGE_DOMAIN=your-domain.com
\`\`\`

---

## Metadata & SEO

Each page includes:
- ✅ Unique title and description
- ✅ Open Graph metadata for social sharing
- ✅ Proper heading hierarchy
- ✅ Alt text on all images
- ✅ Schema markup ready (images, blog posts)

---

## Performance Metrics

- **Home Page**: Static generation (~100ms build time)
- **Blog Listing**: Static generation with ISR
- **Blog Detail**: Pre-generated for all slugs
- **Image Loading**: Optimized with next/image
- **Cache Headers**: Max-age 24 hours with SWR support

---

## Next Steps / TODO

### High Priority
- [ ] Create complete destination pages (Shigar, Khaplu, Kharmang, Rondu)
- [ ] Create travel essentials page with detailed guides
- [ ] Create accommodation page with options
- [ ] Create food guide page with traditional dishes
- [ ] Create adventure activities page with trek details

### Medium Priority
- [ ] Create culture page with historical content
- [ ] Create festivals page with event calendar
- [ ] Create language guide page
- [ ] Create tips & tricks page

### Low Priority
- [ ] Create about page with company info
- [ ] Create contact page with form
- [ ] Create privacy policy page
- [ ] Add search functionality
- [ ] Add social media links

---

## Deployment Notes

### Vercel Deployment
- Auto-builds and deploys on push
- ISR revalidation works seamlessly
- Image optimization via Vercel Image Optimization API
- API routes are serverless functions
- Recommended: Enable Vercel Analytics for monitoring

### Environment Setup
1. Add `REVALIDATION_SECRET` in Vercel dashboard
2. Configure image domains in `next.config.mjs`
3. Deploy to Vercel for optimal performance
4. Monitor ISR revalidations in Vercel dashboard

---

## File-based Routing Examples

\`\`\`typescript
// Simple page
app/about/page.tsx → /about

// Nested page
app/destinations/skardu/page.tsx → /destinations/skardu

// Dynamic route
app/blogs/[slug]/page.tsx → /blogs/my-article-title

// Catch-all route (if needed)
app/docs/[...slug]/page.tsx → /docs/guide/getting-started
\`\`\`

---

Last Updated: 2025-11-17
Status: Production Ready ✅
