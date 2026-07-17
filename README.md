# Aarav Mehta — Personal Portfolio

A modern, production-ready personal portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. Designed to look and feel like a premium, agency-built site while remaining fully editable, accessible and SEO-optimized — ideal as a final-year capstone project or a real personal site.

> The Open Graph/Twitter preview card is generated automatically at build time by `app/opengraph-image.tsx` — no static image file needed.

---

## ✨ Features

- **Modern UI/UX** — glassmorphism cards, gradient accents, animated blobs, consistent type system (Inter + Space Grotesk)
- **Dark / Light mode** toggle with system preference detection (`next-themes`), no flash-of-wrong-theme
- **Fully responsive** — mobile, tablet, laptop, desktop and ultra-wide breakpoints
- **Sticky navigation** with scroll-aware background, active-section highlighting (IntersectionObserver) and animated underline
- **Scroll progress bar**, **scroll-to-top button**, animated **typing effect**, **animated counters**
- **Project filtering** with a skeleton-loading state and an accessible **image lightbox/gallery modal**
- **Contact form** with client-side validation and Formspree integration (no backend required)
- **404 page** and route-level fade transitions (`app/template.tsx`)
- **Full SEO stack**: metadata API, Open Graph + Twitter images generated at build time, JSON-LD `Person` schema, `robots.txt` and `sitemap.xml` via Next.js metadata routes, semantic HTML, descriptive alt text
- **Accessibility-conscious**: skip-to-content link, visible focus rings, `aria-*` attributes, keyboard-navigable lightbox, reduced-motion fallback for the typing animation
- **Performance-first**: server components by default, `next/image` optimization, code-split client islands, no layout shift skeletons, minimal client-side JS

---

## 🧱 Tech Stack

| Layer            | Choice                                | Why |
|-------------------|----------------------------------------|-----|
| Framework         | Next.js 14 (App Router)               | File-based routing, built-in image/font optimization, native SEO metadata & route handlers (robots/sitemap/OG images) |
| Language          | TypeScript                            | Type-safety and maintainability for a growing component tree |
| Styling           | Tailwind CSS                          | Fast, consistent, utility-first styling with a custom design-token theme |
| Animation         | Framer Motion                         | Declarative scroll/enter animations, shared layout transitions |
| Icons             | react-icons                           | Single dependency covering Feather + Simple Icons brand marks |
| Theming           | next-themes                           | Hydration-safe dark/light mode with `class` strategy |
| Forms             | Formspree (client fetch)              | Zero-backend contact form; swap for EmailJS/Resend easily |

---

## 📁 Folder Structure

```
Portfolio/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, JSON-LD, providers
│   ├── page.tsx              # Home page — composes all sections
│   ├── template.tsx          # Route-level fade transition
│   ├── not-found.tsx         # Custom 404 page
│   ├── globals.css           # Tailwind layers + design-system utility classes
│   ├── robots.ts             # Generates /robots.txt
│   ├── sitemap.ts            # Generates /sitemap.xml
│   ├── manifest.ts           # Generates /manifest.webmanifest
│   ├── icon.tsx               # Code-generated favicon (32x32)
│   ├── apple-icon.tsx          # Code-generated apple touch icon (180x180)
│   ├── opengraph-image.tsx    # Code-generated OG image (1200x630)
│   └── twitter-image.tsx      # Code-generated Twitter card image
├── components/
│   ├── layout/                # Header, Footer, ThemeToggle, ScrollProgress, ScrollToTop
│   ├── sections/               # Hero, About, Skills, Services, Projects, Experience, Education,
│   │                            TechStack, Testimonials, Contact, ProjectLightbox
│   ├── ui/                     # Reveal, SectionHeading, AnimatedCounter, TypingAnimation, SkeletonCard, GoBackButton
│   ├── PageLoader.tsx          # Initial splash/loading animation
│   └── ThemeProvider.tsx
├── lib/
│   ├── constants.ts            # Site config (name, role, nav links, socials, env-driven URL)
│   ├── data.ts                 # All content: skills, projects, experience, education, testimonials...
│   └── utils.ts                 # cn(), email validation, contact form validation, number formatting
├── public/                     # Static assets (add resume.pdf, custom images here)
├── tailwind.config.ts           # Design tokens: colors, gradients, animations
├── next.config.mjs
└── .env.example
```

---

## 🎨 UI/UX Design System

- **Color palette**: Indigo → Cyan brand gradient (`brand` / `accent` tokens) with a magenta accent for highlights; neutral `base` and `slate` scale for surfaces and text — chosen for a premium tech feel without being a generic "SaaS blue."
- **Typography**: `Space Grotesk` for display/headings (geometric, confident), `Inter` for body copy (excellent legibility at small sizes). Both loaded via `next/font/google` with `display: swap` for zero layout-shift.
- **Surfaces**: `.glass-card` utility (semi-transparent background + backdrop blur + soft border) used consistently for cards, timeline items and modals — the primary "premium" visual signature of the site.
- **Motion language**: fade-and-rise on scroll (`Reveal`), consistent `ease: [0.16, 1, 0.3, 1]` easing curve, spring-based scroll progress bar, shared-layout nav underline.
- **Accessibility**: 4.5:1+ text contrast in both themes, visible `:focus-visible` rings, semantic landmarks (`header`, `main`, `nav`, `footer`, `section[aria-label]`), skip link, reduced-motion fallback in `TypingAnimation`.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production domain, used for canonical URLs, sitemap and JSON-LD |
| `NEXT_PUBLIC_FORMSPREE_ID` | Your [Formspree](https://formspree.io) form ID (contact form) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Google Search Console verification token |
| `NEXT_PUBLIC_GA_ID` | Optional analytics measurement ID |

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🛠️ Customization Guide

1. **Branding & copy** — edit `lib/constants.ts` (`siteConfig`, `NAV_LINKS`). Update name, role, tagline, email, phone, location, resume path and social links.
2. **Content** — edit `lib/data.ts`:
   - `skills`, `services`, `projects`, `experience`, `education`, `certifications`, `testimonials`, `techStack`, `stats`.
   - Each project has `image`/`gallery` (replace Unsplash placeholder URLs with your own screenshots — ideally hosted at `/public/images/projects/...` and referenced as `/images/projects/your-file.png`).
3. **Resume** — add your real PDF at `public/resume.pdf` (referenced by `siteConfig.resumeUrl`).
4. **Profile photos** — replace the Unsplash portrait URLs in `components/sections/Hero.tsx` and `About.tsx` with your own photo (add to `public/images/` and use a root-relative path for best performance/caching).
5. **Colors/fonts** — adjust the `brand`, `accent`, `magenta` tokens and gradients in `tailwind.config.ts`, and swap the Google Fonts imports in `app/layout.tsx`.
6. **Contact form backend** — the form posts directly to Formspree from the client. To use EmailJS or Resend instead, replace the `fetch` call inside `components/sections/Contact.tsx`.
7. **Sections order/visibility** — edit `app/page.tsx`; remove or reorder `<Section />` components as needed.

---

## 🔎 SEO Configuration & Checklist

- [x] Semantic HTML5 landmarks (`header`, `main`, `nav`, `section[aria-label]`, `footer`)
- [x] Logical heading hierarchy (`h1` in Hero, `h2` per section, `h3`/`h4` for sub-items)
- [x] Unique, descriptive `<title>` template (`app/layout.tsx` → `metadata.title.template`)
- [x] Meta description on every page (root + `not-found.tsx`)
- [x] Open Graph tags — auto-injected from `app/opengraph-image.tsx`
- [x] Twitter Card tags — auto-injected from `app/twitter-image.tsx`
- [x] Canonical URL — `alternates.canonical` in `app/layout.tsx`
- [x] `robots.txt` — generated by `app/robots.ts`
- [x] `sitemap.xml` — generated by `app/sitemap.ts`
- [x] JSON-LD structured data — `Person` schema embedded in `app/layout.tsx`
- [x] Descriptive `alt` text on every image (see `Hero`, `About`, `Projects`, `Testimonials`)
- [x] Optimized images via `next/image` (automatic AVIF/WebP, responsive `sizes`)
- [x] Fast loading via static prerendering (`○ (Static)` for every route in the build output)
- [ ] Submit `sitemap.xml` to Google Search Console after deployment
- [ ] Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` once you register the property

---

## ⚡ Performance & Lighthouse Checklist

- [x] Server Components by default; only interactive islands (`"use client"`) ship JS (nav, theme toggle, forms, lightbox, counters)
- [x] `next/font` for zero-CLS, self-hosted Google Fonts
- [x] `next/image` for automatic responsive images, lazy loading below the fold, `priority` only on the hero image
- [x] Skeleton loaders (`SkeletonCard`) prevent layout shift while filtering projects
- [x] Animations use GPU-friendly `transform`/`opacity`, respecting `prefers-reduced-motion` where relevant
- [x] Security headers set in `next.config.mjs` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`)
- [x] Production build output is fully static (see `npm run build` output — all routes are `○ Static`)
- [ ] Run `npx next build && npx serve out` or deploy a preview, then audit with Lighthouse/PageSpeed Insights and address any project-specific findings (e.g. real image weights once you swap in your own photos)
- [ ] Compress/resize any custom images you add to `public/` before committing (aim for < 200KB per hero/project image)

> Note: the demo project images and avatars are loaded from Unsplash/Pravatar for placeholder purposes. Replace them with your own optimized assets before your final Lighthouse run — remote demo images will not be as fast as self-hosted, `next/image`-optimized files.

---

## ☁️ Deployment

### Deploy to Vercel (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js, no build configuration needed.
5. (Optional) Add your custom domain under **Project → Settings → Domains**.

### Deploy to Netlify

1. Push the project to Git and create a new site from Git in Netlify.
2. Build command: `npm run build`
3. Publish directory: leave default (Netlify's Next.js runtime handles this automatically via the official Next.js plugin).
4. Add the same environment variables under **Site settings → Environment variables**.
5. Add your custom domain under **Domain management**.

### Post-deploy checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` to your real production domain and redeploy (this drives canonical URLs, sitemap and JSON-LD).
- [ ] Verify `/robots.txt` and `/sitemap.xml` resolve correctly in production.
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Run Lighthouse against the production URL (not localhost) for accurate scores.

---

## ✅ Testing Checklist

- [ ] Test on Chrome, Firefox, Safari and Edge
- [ ] Test on real mobile devices (iOS Safari + Android Chrome) in addition to responsive dev tools
- [ ] Verify dark/light toggle persists across reloads
- [ ] Tab through the entire page with a keyboard only — confirm every interactive element is reachable and has a visible focus state
- [ ] Test the contact form: empty submission, invalid email, valid submission (with a real Formspree ID)
- [ ] Test the project filters and lightbox (including arrow-key navigation and `Esc` to close)
- [ ] Run `npm run lint` and `npm run typecheck` before every deploy
- [ ] Run an axe/Lighthouse accessibility audit and fix any flagged contrast/label issues introduced by your content edits

---

## 🔭 Future Enhancements

- Blog / case-study pages using MDX (`app/blog/[slug]/page.tsx`) with the same design system
- Headless CMS integration (Sanity/Contentful) so content editors don't need to touch code
- Photography/work gallery with a masonry layout and full-screen lightbox
- FAQ accordion section
- Multi-language support via `next-intl`
- Automated Lighthouse CI in GitHub Actions to catch performance regressions

---

## 📝 Git Commit Recommendations

Keep commits small and scoped. Suggested conventional-commit style:

```
feat: add project filtering and lightbox
fix: correct dark mode flash on initial load
style: refine hero gradient and spacing on mobile
docs: update README deployment steps
perf: lazy-load below-the-fold project images
a11y: add aria-live region to contact form status
```

---

## 📄 License

This project is provided as a personal portfolio template. Replace all placeholder content (name, projects, images, resume, social links) with your own before publishing.
