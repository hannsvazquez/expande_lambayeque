# Expande Inmobiliaria — Landing Page

Marketing landing page for **Expande Inmobiliaria**, a real estate company in Lambayeque/Chiclayo, Peru. Built for Meta Ads (Facebook/Instagram) campaigns driving traffic to `expandeinmobiliaria.com`, showcasing the company's lotización projects and connecting visitors with the virtual assistant Camila via WhatsApp.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Main sections

Single page (`src/pages/index.astro`), composed of 8 sections in order:

1. **Hero** — Swiper slider (launch, promotion, and brand slides) with a stats row (+10 años, +100 lotes vendidos, 5 proyectos)
2. **About Expande** — company overview, founding stats, and feature highlights
3. **Lastest projects** — vertical timeline of the 5 projects with "Ver en Google Maps" links
4. **Testimonials** — client testimonial cards
5. **3D render of the project** — lazy-loaded YouTube facade (click-to-play)
6. **CTA Camila** — WhatsApp call-to-action with a chat preview mockup
7. **Gallery** — photo grid with a "Programa tu visita" CTA
8. **FAQ** — accordion FAQ

Plus a sticky **Navigation**, a **Footer** (contact, socials, hours, map links), and a persistent **floating WhatsApp button**.

## Main components

```
src/
├── components/
│   ├── Navigation.astro
│   ├── HeroSlider.astro
│   ├── SobreExpande.astro
│   ├── ProjectTimeline.astro
│   ├── TestimonialCard.astro
│   ├── Testimonials.astro
│   ├── Project3D.astro
│   ├── CTACamila.astro
│   ├── Gallery.astro
│   ├── FAQAccordion.astro
│   ├── Footer.astro
│   └── WhatsAppFloatButton.astro
├── data/                  # typed content: projects, testimonials, faq, contact
├── layouts/
│   └── BaseLayout.astro   # SEO meta, OG tags, JSON-LD, fonts
└── pages/
    └── index.astro
```

Content (projects, testimonials, FAQ, contact info) lives in typed data files under `src/data/`, kept separate from markup so it's easy to migrate to Sanity CMS in v2.

## SEO practices used

- **Sitemap** — `@astrojs/sitemap`, generated at build time (`sitemap-index.xml`)
- **Meta title/description** using the target keywords (venta de lotes en Lambayeque, inmobiliarias en Chiclayo, lotes para inversión, etc.)
- **Open Graph + Twitter Card** tags for rich previews on Meta Ads / social shares
- **JSON-LD structured data** (`RealEstateAgent` schema) with address, phone, hours, and social profiles
- **Canonical URL** per page
- **Semantic headings** (H1/H2/H3) built around the target keyword list
- **Link building** — outbound links to Google Maps (office + each project), Facebook, TikTok, and WhatsApp
- **Image optimization** — all images processed through `astro:assets` (WebP output, responsive sizing, lazy loading below the fold)
- **Lazy-loaded YouTube embed** (click-to-play facade) to avoid loading YouTube's JS on first paint
- **Self-hosted fonts** (no external Google Fonts request) to reduce render-blocking requests
- `robots.txt` pointing to the sitemap

## Tech stack (v1)

| Layer | Technology |
|---|---|
| Framework | [Astro 7](https://astro.build) (TypeScript, static output) |
| UI / CSS | [Tailwind CSS v4](https://tailwindcss.com) + [daisyUI v5](https://daisyui.com) (custom `expande` theme) |
| Slider | [Swiper](https://swiperjs.com) |
| Images | `astro:assets` (built-in, WebP + lazy load) |
| Icons | [`@lucide/astro`](https://lucide.dev) |
| Fonts | Alexandria (headings) + Roboto (body), self-hosted via Fontsource |
| SEO | `@astrojs/sitemap` |
| Deploy | Vercel |
| Language | Spanish (Peru) |

No CMS in v1 — all content is hardcoded in typed data files under `src/data/`. See `CLAUDE.md` for the full project spec and the v2 (Sanity CMS) roadmap.
