# SEO Audit — Psychologica (psychologica.pl)

**Date:** February 12, 2025  
**Scope:** Gatsby site — meta tags, technical SEO, content, and on-page signals.

---

## Executive summary

The site has a solid base: unique titles and meta descriptions per page, canonical URLs, sitemap, and GA. Several issues hurt crawlability, indexing, and sharing (wrong favicon URL, HTTP/HTTPS mismatch, typos, missing Open Graph/Twitter, no structured data). Fixing the critical items below will improve visibility and consistency.

---

## Critical issues

### 1. Favicon returns 404 in production

**Where:** `src/components/Layout.js`  
**Issue:** Favicon is set as `href="src/images/favicon-32x32.png"`. In production the site is served from the build output; that path does not exist, so the favicon fails to load.

**Fix:** Serve favicon from the `static` folder and reference it from root, e.g. `href="/favicon-32x32.png"`, and ensure `static/favicon-32x32.png` exists (e.g. copy from `src/images/`).

---

### 2. siteUrl is HTTP while canonicals are HTTPS

**Where:** `gatsby-config.js`  
**Issue:** `siteMetadata.siteUrl` is `"http://www.psychologica.pl/"` while `gatsby-plugin-canonical-urls` uses `https://www.psychologica.pl`. Sitemap and any plugins using `siteUrl` may generate HTTP URLs, causing mixed signals and weaker SEO.

**Fix:** Set `siteMetadata.siteUrl` to `"https://www.psychologica.pl"` (no trailing slash to match canonical plugin) and use HTTPS everywhere.

---

### 3. Typos in meta and alt text

**404 page** (`src/pages/404.js`):
- "Nieznaleźlismy" → "Nie znaleźliśmy"
- "Pscyhologica" → "Psychologica"

**Contact meta** (`src/pages/skontaktuj-sie.js`):
- "kadego" → "każdego"

**Alt text:**
- `OfferPomoc.js`: "Renata Zua" → "Renata Zuba"
- `OfferEdukacja.js`: "konferencja UJ}" → "konferencja UJ" (remove stray `}`)

**Impact:** Typos in titles/descriptions can reduce trust and clarity in snippets; alt text typos affect accessibility and image SEO.

---

### 4. Web app manifest shows "GatsbyJS"

**Where:** `gatsby-config.js` → `gatsby-plugin-manifest`  
**Issue:** `name` and `short_name` are "GatsbyJS". When users add the site to the home screen or see PWA metadata, the wrong brand is shown.

**Fix:** Use site branding, e.g. "Psychologica" / "Psychologica Rzeszów", and consider using `psychologica-favicon.png` (or your main icon) for the manifest. Align `theme_color` and `background_color` with your brand.

---

## High‑priority improvements

### 5. No Open Graph or Twitter Card meta

**Where:** All pages (Layout and contact page Helmet).  
**Issue:** Only `title` and `description` are set. There are no `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, or Twitter Card tags. Shares on Facebook, LinkedIn, Twitter, etc. will get generic or poor previews.

**Fix:** Add to Layout (and contact page) per-page:
- `og:title`, `og:description`, `og:image`, `og:url`, `og:type` (e.g. `website`)
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

Use `siteUrl` and the current path for `og:url`; use a default image (e.g. logo or key visual) for `og:image` and ensure it is absolute (e.g. `https://www.psychologica.pl/og-image.jpg`).

---

### 6. Contact page not using shared Layout SEO

**Where:** `src/pages/skontaktuj-sie.js`  
**Issue:** Contact page uses its own Helmet and does not use the same Layout as other pages, so it may not get the same canonical URL treatment and is easy to forget when adding new meta (e.g. OG) in Layout.

**Recommendation:** Prefer using the same Layout + `pageTitle` / `pageDescription` (and later OG) so canonical and all meta are consistent. If you keep a custom Helmet, mirror canonical and OG/Twitter tags there.

---

### 7. No JSON-LD structured data

**Issue:** No LocalBusiness, ProfessionalService, or Organization schema. For a local practice (psychologist in Rzeszów), structured data helps rich results and local SEO.

**Fix:** Add JSON-LD in Layout or per page, e.g.:
- **LocalBusiness** or **ProfessionalService**: name, address (Mikołaja Reja 12/320, 35-211 Rzeszów), telephone, opening hours if relevant, sameAs (social URLs if any).
- **Organization**: name, url, logo.

Use the same canonical URL and site name as in meta tags.

---

## Medium priority

### 8. robots.txt

**Issue:** No explicit `robots.txt` was found. Gatsby does not create one by default. A `robots.txt` that points to the sitemap helps crawlers.

**Fix:** Add a `robots.txt` (e.g. in `static/robots.txt`) with:
- `User-agent: *` and appropriate Allow/Disallow rules (if any).
- `Sitemap: https://www.psychologica.pl/sitemap-index.xml` (or the actual sitemap URL Gatsby generates).

Alternatively use a plugin (e.g. `gatsby-plugin-robots-txt`) that outputs `robots.txt` and the sitemap URL.

---

### 9. Heading hierarchy and single H1

**Status:** Most pages use a single main heading (e.g. TitleContact, OfferHeader) as the primary H1. Worth confirming every template has exactly one H1 and that H2/H3 follow a logical order for both SEO and accessibility.

---

### 10. Image alt text quality

**Status:** Many images have descriptive alt text (e.g. "Psycholog Renata Zuba Rzeszów - Psychologica"). A few are generic ("bg-testimonial", "background pattern"). Consider more descriptive alt for key images and decorative alt (`alt=""`) for purely decorative ones to keep focus on content.

---

## What’s working well

- **Unique titles and meta descriptions** per page, with location and brand.
- **Canonical URLs** via `gatsby-plugin-canonical-urls` (HTTPS).
- **Sitemap** via `gatsby-plugin-sitemap`.
- **Google Analytics / GTM** configured.
- **Descriptive alt text** on many images; keyword-aware where it matters.
- **Clear URL structure** (e.g. `/oferta-terapeutyczna/`, `/o-mnie/`, `/skontaktuj-sie/`).

---

## Recommended action order

1. Fix favicon path and add `static/favicon-32x32.png`.
2. Set `siteUrl` to HTTPS in `gatsby-config.js`.
3. Correct all typos in 404, contact meta, and alt text.
4. Update manifest name/short_name and icon/colors.
5. Add Open Graph and Twitter Card meta (Layout + contact if separate).
6. Add JSON-LD (LocalBusiness/ProfessionalService + Organization).
7. Add or generate `robots.txt` with sitemap URL.

After these changes, re-check with Google Search Console and a social sharing debugger (e.g. Facebook Sharing Debugger, Twitter Card Validator) to confirm indexing and previews.

---

## Implemented (follow-up)

- **Seo component** (`src/components/Seo.js`): Renders title, description, canonical URL, Open Graph and Twitter Card meta, favicon, and JSON-LD (ProfessionalService) on all pages using Layout.
- **Layout** now uses `<Seo title={…} description={…} />` instead of raw Helmet.
- **Contact page** (`skontaktuj-sie.js`): Added OG/Twitter meta and canonical link.
- **JSON-LD**: ProfessionalService schema with name, description, url, image, address (Mikołaja Reja 12/320, Rzeszów), areaServed. Business address added to `gatsby-config.js` `siteMetadata.businessAddress`.
- **robots.txt** in `static/robots.txt`: `User-agent: *` Allow `/`, `Sitemap: https://www.psychologica.pl/sitemap-index.xml`.
- **Optional**: Add `static/og-image.jpg` (e.g. 1200×630px) for better social previews; Seo and contact page fall back to `https://www.psychologica.pl/og-image.jpg`.
