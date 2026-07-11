# Expande Inmobiliaria — Landing Page

**Linear Issue:** CMD-229
**Branch:** `hann/cmd-229-landing-page-expande`
**Domain:** expandeinmobiliaria.com
**Deploy:** Vercel

---

## Project Purpose

Landing page comercial e informativa para Expande Inmobiliaria, orientada a campañas de Meta Ads (Facebook/Instagram). La URL se usará en anuncios pagados para redirigir a visitantes que quieran conocer los proyectos o comunicarse con la asistente virtual Camila.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro.js + TypeScript |
| UI / CSS | DaisyUI + Tailwind CSS v4 |
| Slider | Swiper.js (`swiper` npm) |
| Images | `@astrojs/image` (WebP, lazy load) |
| Icons | Lucide Astro o `astro-icon` |
| SEO | `@astrojs/sitemap` |
| Deploy | Vercel |
| Language | Spanish (Peru) |

> **DaisyUI skills:** install the component/theme skills with `npx -y skills add saadeghi/daisyui` to reference correct component usage and theming.

---

## Design Workflow

All UI design is done in **Paper desktop app** — a code-based design tool. This means designs are written as HTML/CSS directly in Paper, making it straightforward to export and translate into Astro components without a Figma-to-code step.

- Use the Paper MCP tools (`get_guide`, `get_basic_info`, `get_screenshot`, `get_jsx`, etc.) to read designs and extract exact values before implementing any component.
- `Paper-frames/` directory is used for Paper design exports/references.
- Always call `get_guide({ topic: "paper-mcp-instructions" })` at the start of any design session.
- The name of the project in Paper is "Expande_landing_page", in this place you can access to the main design system and the main screens of the landing page.

## Assets

- **Photo assets:** `/Photos_Expande/` — 10 images (project photos + client testimonials)
- **Logo + brand colors + typography:** Provided by user before implementation begins

---

## Site Architecture

Single-page application (`src/pages/index.astro`). 8 sections in order:

| # | Section | Key Content |
|---|---|---|
| 1 | **Hero** | Swiper slider — Expande de Lambayeque II launch, promotions, brand |
| 2 | **Sobre Expande** | 10+ años, misión, SUNARP, Lambayeque |
| 3 | **Proyectos / Timeline** | Vertical timeline de 5 proyectos + "Ver en Google Maps" buttons |
| 4 | **Testimonios** | Testimonial cards (placeholder until real content provided) |
| 5 | **Vista del proyecto en 3D** | YouTube video embed del render 3D — https://youtu.be/zpPAOy5R89c |
| 6 | **CTA Camila** | Asistente virtual 24/7 — WhatsApp link |
| 7 | **Galería** | Photo grid + CTA "Programa tu visita" |
| 8 | **FAQ** | DaisyUI accordion (placeholder until real Q&A provided) |

---

## Component Architecture

```
src/
├── components/
│   ├── Navigation.astro       — Sticky navbar, logo, CTA button
│   ├── HeroSlider.astro       — Swiper carousel
│   ├── SobreExpande.astro     — Company overview
│   ├── ProjectTimeline.astro  — Vertical timeline with Google Maps links
│   ├── TestimonialCard.astro  — Individual testimonial card
│   ├── Testimonials.astro     — Grid of TestimonialCards
│   ├── Project3D.astro        — YouTube video embed (render 3D del proyecto)
│   ├── CTACamila.astro        — WhatsApp CTA section
│   ├── Gallery.astro          — Photo grid + visit CTA
│   ├── FAQAccordion.astro     — DaisyUI collapse FAQ
│   └── Footer.astro           — Contact, social, hours, maps
├── layouts/
│   └── BaseLayout.astro       — SEO meta, OG tags, fonts, global styles
└── pages/
    └── index.astro            — Single page, composes all sections
```

---

## Projects Data

| Project | Location | Status |
|---|---|---|
| Refugio Sol y Luna | Jayanca, Lambayeque | Pasado |
| Villa del Sol (Etapa I, II, III) | La Victoria, Chiclayo | Pasado |
| Urb. SINAI | Carretera a Lambayeque | Pasado |
| Expande de Lambayeque I | 5 min Autopista El Sol | Actual — 100+ lotes vendidos |
| Expande de Lambayeque II | TBD | Lanzamiento 12 julio 2026 |

---

## Contact Data (hardcoded)

| Field | Value |
|---|---|
| WhatsApp Camila | +51 944 101 400 |
| Contacto directo | +51 903 085 217 |
| Email | expandeinmobilaria2015@gmail.com |
| Facebook | https://www.facebook.com/ExpandeInmobiliariacix |
| TikTok | https://www.tiktok.com/@expandeinmobiliaria.cix |
| Oficina | Calle Leoncio Prado 951, Chiclayo |
| Mapa oficina | https://maps.app.goo.gl/KEgPNsWpH6aUT7Zr9 |
| Mapa Proyecto I | https://maps.app.goo.gl/HXnPTfpt4YS4bgds7 |
| Horario | Lun–Vie 9am–6pm \| Sáb 9am–1pm \| Dom visitas programadas |

---

## SEO / AEO

- `@astrojs/sitemap` (run `npx astro add sitemap` during setup)
- Meta title: `"Expande Inmobiliaria | Venta de Lotes en Lambayeque y Chiclayo"`
- Open Graph tags — critical for Meta Ads campaigns
- LocalBusiness JSON-LD structured data
- Link building: Google Maps, Facebook, TikTok, WhatsApp

### Top Keywords (use in H1/H2 headings and meta)
- "Venta de lotes en Lambayeque"
- "Inmobiliarias en Lambayeque"
- "Inmobiliarias en Chiclayo"
- "Lotes para inversión"
- "Lotes para casa propia"
- "Proyecto de lotes"
- "Terrenos en venta"

---

## Pending Before First Implementation Session

1. **Brand assets from user:** Logo (SVG/PNG), color palette, font family — needed to configure Tailwind theme
2. **Paper design:** Check Paper desktop app and `Paper-frames/` for the visual design
3. **Expande de Lambayeque II map URL** — not provided in Linear issue yet
4. **Real testimonial content** — names, quotes, optional photos
5. **FAQ content** — real questions and answers

---

## Versioning Roadmap

### v1 (current)
- Static landing page — all content hardcoded directly in Astro components
- No CMS — edits require code changes

### v2 (future)
- **Sanity CMS** as the main content management system
- Content types to migrate: projects, testimonials, FAQ, hero slides, gallery images
- Enables non-technical content editing for the Expande team
- Astro + Sanity integration via `@sanity/astro` or GROQ queries

## Future Features (not in v1)

- Camila virtual assistant widget (WhatsApp chat integration)
- Additional project pages
- Sanity CMS (see v2 roadmap above)
