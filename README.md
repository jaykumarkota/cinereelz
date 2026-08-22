# CineReelz

A cinematic, mobile-first landing page for CineReelz, an event reel shooting service based in Hyderabad. The site presents services, packages, sample reels, client feedback, booking options, and contact details in a polished single-page experience.

## Highlights

- Responsive React landing page built for desktop and mobile
- Cinematic hero with a moving reel showcase
- One-time WhatsApp booking prompt for new visitors
- Interactive package tiers with direct WhatsApp booking links
- Sample reel gallery that opens Instagram reels directly
- Service coverage, process, testimonials, terms, contact, and footer sections
- Search-engine metadata and structured data through `react-helmet-async`
- Centralized business details, social links, WhatsApp links, and sample reel configuration

## Tech Stack

- React 19
- Vite
- React DOM
- React Helmet Async
- Font Awesome CDN
- ESLint

## Getting Started

### Prerequisites

Install a current LTS version of Node.js. npm is included with Node.js.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in your terminal.

### Create a production build

```bash
npm run build
```

The optimized site is generated in the `dist` directory.

### Preview the production build

```bash
npm run preview
```

### Run lint checks

```bash
npm run lint
```

## Project Structure

```text
cinereelz/
├── public/                 # Public hero media, robots.txt, sitemap.xml
├── src/
│   ├── assets/             # Brand logos, team photos, reel cover images
│   ├── components/         # Reusable homepage sections
│   ├── config/
│   │   └── siteConfig.js   # Business details, links, and reel configuration
│   ├── styles/             # Component and shared styles
│   ├── App.jsx             # Home page composition
│   └── main.jsx            # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Main Sections

The homepage is assembled in `src/App.jsx` and includes:

- Navigation and hero
- Why choose CineReelz
- Founder introduction
- Event coverage categories
- Package tiers and custom package option
- Booking workflow
- Sample Instagram reels
- Client testimonials
- Terms and contact call-to-action
- Footer and developer credit

## Updating Site Content

Most frequently changed business information lives in `src/config/siteConfig.js`:

- Phone number and email
- WhatsApp booking links
- Instagram and other social links
- Sample reel cover images and Instagram reel URLs
- Business name, description, and delivery-time messaging

### Add or change a sample reel

1. Add the reel cover image to `src/assets`.
2. Import the new image in `src/config/siteConfig.js`.
3. Update the matching item under `images.samples` with the image, title, alt text, and Instagram reel URL.

### Update package information

Edit `src/components/Packages.jsx` to change package names, pricing, descriptions, features, or WhatsApp booking messages. The styling for the section is in `src/styles/Packages.css`.

### Booking popup behavior

The one-time booking popup is implemented in `src/components/BookingPopup.jsx`. It stores a browser flag after appearing, so a visitor does not see it repeatedly. To test it again in a browser, clear the site's local storage entry named `cinereelz-booking-popup-seen`.

## Deployment

Run `npm run build` and deploy the contents of `dist` to any static hosting provider, such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Ensure the host is configured to serve `index.html` for client-side routes if you add routing in the future.

## License

This project is private and intended for CineReelz. Do not reuse brand assets, photos, copy, or reel content without permission.
