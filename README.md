## Black Olives — Project Documentation

### Project Overview

- **Project name**: Black Olives — Restaurant Landing Page
- **Live site**: `https://mekintosz.github.io/black-olives/`
- **Repository**: `https://github.com/Mekintosz/black-olives`
- **One-liner**: A responsive, visually rich, static website for a Mediterranean restaurant with table booking UI, newsletter subscription, and smooth navigation.
- **Primary users**: Prospective diners exploring the brand, menu, chef, location, and booking options.
- **Goals**: Communicate brand identity, showcase venue and chef, provide booking entry point, capture newsletter signups.

### At-a-glance

- **Core features**: Responsive UI, mobile nav with a11y, table booking form validation, newsletter signup form, location map, optimized media.
- **Frontend**: HTML5, CSS3, JavaScript (ES modules)
- **Tooling**: Parcel 2 bundler (dev/build), npm scripts, GitHub Pages deployment via `gh-pages`.
- **Hosting**: GitHub Pages (static site)
- **Assets**: WebP images, SVG logos/icons, embedded PDF menu, Google Fonts, OpenStreetMap iframe.

---

## Features

- **Responsive layout**
  - Mobile-first design using CSS Grid/Flexbox and media queries.
  - Hero image with overlayed navigation; layout adjusts up to desktop breakpoint.
- **Accessible, smooth navigation**
  - Fixed header with anchor links: Home, About us, Menu (PDF), Our chef, Location.
  - Mobile menu button toggles nav visibility with `aria-expanded` and appropriate `aria-label` updates; Escape key closes.
  - Smooth scrolling between sections; body scroll lock when menu is open.
- **Table booking page**
  - Separate `book-table.html` with booking form (name, telephone, email, date, time, room choice, number of seats).
  - Client-side validation ensures date is in the future and disallows Mondays (closed day); range checks on seats.
- **Newsletter subscription**
  - Inline form for name and email next to descriptive content; styled consistently with booking form.
  - Currently posts to `#` (no backend yet) — see Future Work.
- **Location & contact**
  - OpenStreetMap embedded map with restaurant coordinates.
  - Prominent contact email and address details; repeated in footer.
- **Performance & media**
  - WebP/optimized images, lazy loading on section images, SVG icons/logos, static PDF menu.
- **Semantic HTML**
  - Landmarks and semantic tags for basic SEO and a11y.

---

## Tech Stack

### Frontend

- **Language**: JavaScript (ES modules), HTML5, CSS3
- **Module structure**: `src/index.js` imports `modules/nav.js` and `modules/bookingDate.js`.
- **Styling**: Single CSS file with custom properties, responsive media queries, component-like class structure.
- **Fonts**: Google Fonts (`Libre Bodoni`, `Libre Caslon Text`).

### Tooling & Build

- **Bundler**: Parcel 2 (`parcel` and `parcel build`)
- **Package manager**: npm (scripts in `package.json`)
- **Deployment**: `gh-pages` package to publish `dist` to GitHub Pages

### Hosting & Services

- **Static hosting**: GitHub Pages (`gh-pages` branch)
- **Map**: OpenStreetMap embedded iframe

---

## Architecture

### High-level

- **Container**: Static site (no runtime backend) served from CDN-like GitHub Pages.
- **Pages**: `index.html` (landing), `book-table.html` (booking form)
- **Assets**: `/src/assets/` images (WebP/PNG/SVG) and `Current-menu.pdf`
- **Scripts**: `index.js` initializes modules on `DOMContentLoaded`

### Application components

- **Navigation module** (`src/modules/nav.js`)
  - Toggles `.header__nav.active`, updates `aria-expanded` and `aria-label`, handles Escape key, closes on link click, and manages body scroll locking.
- **Booking date validation** (`src/modules/bookingDate.js`)
  - Enforces min date (tomorrow), disallows Mondays, and integrates with HTML5 form validation via `setCustomValidity` and `reportValidity`.
- **Styling system** (`src/styles.css`)
  - CSS variables for colors, typography sizes, box shadows.
  - Component sections: header, sections, forms, footer; media queries at 600px and 1000px breakpoints.
  - Utility concerns: smooth scroll, input focus rings, shared form input styles, image sizing, layout grids.

### External integrations

- **Google Fonts** for typography
- **OpenStreetMap** for embedded map

---

### Code quality & testing

- Lightweight stack; no linter/test tooling configured yet.
- Recommended next steps: add Prettier/ESLint; smoke tests with Playwright for nav and form validation.

---

## Deployment

### GitHub Pages

1. Ensure repository has Pages enabled (Settings → Pages → deploy from `gh-pages` branch).
2. Run `npm run deploy` to build and publish `dist` to `gh-pages` via the `gh-pages` package.
3. The `--public-url ./` build flag ensures relative asset paths so the site works under `/<repo>/`.

### Continuous deployment (optional)

- GitHub Actions can be added to run build on `main` and publish to `gh-pages` automatically.

### Configuration & secrets

- No runtime secrets. If adding form backends later, use environment-specific endpoints and avoid hardcoding keys.

---

## Graphic Design & UX

**Rationale — Technology Choices** : Created the layout, color scheme, and component designs in Figma before development, ensuring a consistent visual identity and efficient build process.

### Accessibility

- Semantic HTML, labeled controls, visible focus, proper color contrast targeted.
- A11y in nav: `aria-controls`, `aria-expanded`, Escape-to-close, body scroll lock to prevent background scroll when menu is open.

---

## Rationale — Technology Choices

- **Parcel 2**: Zero-config bundling, fast dev server, automatic asset handling; ideal for small static sites.
- **GitHub Pages + gh-pages**: Free, simple static hosting integrated with the repo; easy one-command deployments.
- **Vanilla JavaScript (ES modules)**: Lightweight, no framework overhead; direct control over a11y and interactions; good for demonstrating fundamentals.
- **WebP/SVG assets**: Modern formats with excellent compression and crisp rendering for logos/illustrations.
- **OpenStreetMap**: Simple, privacy-friendly embeddable map without API keys.
- **Google Fonts**: Broad typeface selection that matches brand tone and supports performance with `preconnect`.

---

## Development Roadmap

- **Short-term**
  - Smooth mobile nav opening animation for button state and icon transitions
  - Improve `book-table.html` layout and spacing on small screens
  - Form submission handling: integrate a mock or serverless backend (Netlify Functions, Cloudflare Workers) for booking and newsletter
  - Add ESLint/Prettier; basic Playwright smoke tests
- **Medium-term**
  - Backend endpoints with validation and email notifications
  - Persist bookings/subscriptions (e.g., Supabase/Airtable/Sheet + webhook)
  - Analytics (privacy-friendly) and basic SEO improvements (structured data)

---

## Non-goals and Future Work

- **Non-goals (current phase)**: Full backend, authentication, CMS, complex state management.
- **Future**: Serverless booking/subscription, admin dashboard for requests, CMS for content updates, automated image optimization pipeline, tests and CI.

---

## Credits

- **Photo credits** :
- jay-wennington-N_Y88TWmGwA-unsplash - header
- rc-cf-FMh5o5m5N9E-unsplash - chef
- don-fontijn-4k8OuBDNAW8-unsplash - olive tree
- jason-leung-poI7DelFiVA-unsplash - dining room
- luca-bravo-8x_fFNrmeDk-unsplash - bar
