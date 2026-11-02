# Daddy Associates — Professional Business Website

> **"We Clean. We Move. We Celebrate."**

A modern, responsive, high-performance multi-service business website built with **React.js**, **Vite**, **React Router DOM**, **Vanilla CSS3**, and **Lucide Icons** for **Daddy Associates**.

The website features three dedicated service divisions:
1. **Deep Cleaning Services** (Homes, Kitchens, Bathrooms, Move Turnover, Commercial)
2. **Packing & Moving Services** (Household Shifting, Office Moves, Fragile Packing, Coordination)
3. **Event Planning & Management** (Birthdays, Weddings, Corporate Galas, Staging)

---

## 🌟 Key Features

- **Brand-Centric Design System**:
  - Palette: Deep Navy (`#101C2C`), Warm Gold (`#D9AE68`), Crisp White (`#FFFFFF`), Light Grey (`#F5F7FA`), Dark Charcoal (`#182230`), and WhatsApp Green (`#25D366`).
  - Google Fonts: *Plus Jakarta Sans* for readable copy and *Outfit* for headings.
  - Micro-animations, responsive cards, glassmorphic accents, and reduced-motion support.

- **Floating WhatsApp Integration**:
  - Persistent, pulsing WhatsApp button across all pages with accessible ARIA labeling.
  - Generates pre-filled, contextual messages (`encodeURIComponent`) for general inquiries, deep cleaning bookings, relocation quotes with origin/destination, and event consultations.
  - Configurable in a single centralized config file or `.env`.

- **Comprehensive Route Structure**:
  - `/` — Homepage with Hero, 3 service pillars, Why Choose Us, How It Works, Testimonials, FAQ preview, and Gallery preview.
  - `/about` — About Us with company introduction, mission, vision, core values, and quality assurance framework.
  - `/services` — Services overview highlighting all 3 divisions and multi-service bundle offers.
  - `/services/deep-cleaning` — 7 detailed deep cleaning services, 3 package tiers, and cleaning FAQs.
  - `/services/packing-moving` — 7 moving services, interactive WhatsApp relocation quote builder, 3 packages, and moving FAQs.
  - `/services/event-planning` — 7 celebration services, event consultation builder, 3 event tiers, and event FAQs.
  - `/gallery` — Full project gallery with category filters (All, Cleaning, Moving, Events) and modal Lightbox with next/prev keyboard controls.
  - `/faq` — Searchable FAQ knowledge base with category tabs and animated accordions.
  - `/contact` — Client-side validated contact form, honest demo mode fallback with one-click WhatsApp forward, phone/email/hours details, and embedded Google Maps.
  - `*` — Custom 404 Not Found page with helpful navigation buttons.

- **Mobile First & Fully Responsive**:
  - Tested across 320px, 375px, 425px, 768px, 1024px, and 1440px viewports.
  - Slide-in mobile drawer navigation with hamburger toggle.
  - No horizontal scrolling; touch-friendly tap targets.

---

## 📁 Project Structure

```text
daddy-associates/
├── public/
│   └── vite.svg                  # Brand SVG favicon
├── src/
│   ├── components/
│   │   ├── Button.jsx            # Polymorphic button (internal Link, external <a>, or <button>)
│   │   ├── ContactForm.jsx       # Validated contact form + API handler & demo WhatsApp forward
│   │   ├── FAQAccordion.jsx      # Accessible accordion with smooth toggle
│   │   ├── Footer.jsx            # Site footer with service links, contact panel, & copyright
│   │   ├── Gallery.jsx           # Responsive gallery grid with category filters & lightbox
│   │   ├── Lightbox.jsx          # Accessible modal lightbox with Arrow/Escape key controls
│   │   ├── Logo.jsx              # Brand typographic wordmark & geometric SVG emblem
│   │   ├── Navbar.jsx            # Sticky navbar with announcement bar, dropdowns, & mobile menu
│   │   ├── PackageCard.jsx       # Pricing & package card with quote CTA & WhatsApp integration
│   │   ├── ScrollToTop.jsx       # Route change scroll listener + floating back-to-top button
│   │   ├── SectionHeading.jsx    # Standardized section headings with badges
│   │   ├── ServiceCard.jsx       # Service card with tasks checklist, ideal for, & CTA
│   │   └── WhatsAppButton.jsx    # Persistent floating WhatsApp button with tooltip
│   ├── config/
│   │   └── siteConfig.js         # Single source of truth for business contact, phone, & WhatsApp
│   ├── data/
│   │   ├── faqs.js               # Comprehensive Q&A data by category
│   │   ├── gallery.js            # Gallery photographs, captions, alt text, & replacement guide
│   │   ├── packages.js           # Package tiers, inclusions, & pricing notes
│   │   ├── services.js           # Detailed breakdown of all 21 services across 3 divisions
│   │   └── testimonials.js       # Editable client reviews marked as sample content
│   ├── pages/
│   │   ├── About.jsx             # About Us page
│   │   ├── Contact.jsx           # Contact page with business info & map embed
│   │   ├── DeepCleaning.jsx      # Dedicated Deep Cleaning page
│   │   ├── EventPlanning.jsx     # Dedicated Event Planning page
│   │   ├── FAQ.jsx               # Searchable FAQ page
│   │   ├── GalleryPage.jsx       # Dedicated Gallery page
│   │   ├── Home.jsx              # High-impact landing page
│   │   ├── NotFound.jsx          # Custom 404 page
│   │   ├── PackingMoving.jsx     # Dedicated Packing & Moving page
│   │   └── Services.jsx          # All Services overview page
│   ├── styles/
│   │   ├── global.css            # Design tokens, variables, typography, reset, buttons, cards
│   │   └── responsive.css        # Media queries for 320px to 1440px screens
│   ├── App.jsx                   # React Router DOM configuration & application layout
│   └── main.jsx                  # React 18 bootstrap entry point
├── .env.example                  # Example environment variables
├── .gitignore                    # Git ignore file
├── index.html                    # HTML5 entry with meta SEO tags & Google Fonts
├── package.json                  # Dependencies & npm scripts
├── vite.config.js                # Vite development server configuration
└── README.md                     # Documentation
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) and **npm** installed on your computer.

### 2. Installation
Open your terminal in the project directory and install the packages:

```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch at:
```
http://localhost:5173/
```

### 4. Build for Production
To create an optimized, minified production bundle:
```bash
npm run build
```
The output files will be created in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization Guide

### 1. Updating Business Details & WhatsApp Number
All core business details are stored in:
👉 `src/config/siteConfig.js`

```javascript
export const siteConfig = {
  name: "Daddy Associates",
  tagline: "We Clean. We Move. We Celebrate.",

  // WhatsApp Integration (international format without '+' or spaces)
  whatsapp: {
    phoneNumber: "1234567890", // Replace with your real number (e.g., '12125550199' or '919876543210')
    displayPhone: "+1 (234) 567-8900",
  },

  contact: {
    phone: "+1 (234) 567-8900",
    email: "info@daddyassociates.com",
    address: {
      line1: "124 Grand Heritage Boulevard",
      line2: "Suite 500",
      city: "Metro City",
      postalCode: "10001",
    },
    // Optional: Connect Formspree or custom backend endpoint
    formEndpoint: "",
  },
};
```

You can also create a `.env` file based on `.env.example`:
```env
VITE_WHATSAPP_PHONE=919876543210
VITE_SITE_PHONE=+91 98765 43210
VITE_SITE_EMAIL=contact@daddyassociates.com
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
```

### 2. Replacing Gallery Photographs
To use your company's genuine photographs:
1. Place your optimized JPG or WebP images in `public/images/gallery/`
2. Open `src/data/gallery.js`
3. Update the `src` paths:
```javascript
{
  id: "clean-01",
  category: "deep-cleaning",
  categoryLabel: "Deep Cleaning",
  title: "Master Suite Deep Sanitation",
  description: "Tile buffing and window frame descaling.",
  src: "/images/gallery/clean-01.jpg",
  alt: "Master bedroom after deep cleaning"
}
```

### 3. Connecting the Contact Form to Email (Formspree or Backend)
The contact form has built-in API integration:
1. Sign up for free at [Formspree](https://formspree.io/) and create a new form.
2. Copy your unique form endpoint URL (e.g. `https://formspree.io/f/mqkvnxyz`).
3. Set `VITE_CONTACT_FORM_ENDPOINT` in your `.env` file:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/mqkvnxyz
   ```
4. Submissions will now be delivered straight to your email inbox!
*(Note: If no endpoint is configured, the form automatically falls back to an honest demo state with a one-click WhatsApp forward button pre-filled with all user inputs).*

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. In **Environment Variables**, add:
   - `VITE_WHATSAPP_PHONE`
   - `VITE_CONTACT_FORM_ENDPOINT` (optional)
6. Click **Deploy**. Vercel will build and serve your site globally.

*Tip for single-page routing on Vercel:* Create a `vercel.json` file in the root if needed:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `public/_redirects` file with the following line to support client-side routing:
   ```text
   /*    /index.html   200
   ```
5. Click **Deploy Site**.

---

## 📄 License
© Daddy Associates. All rights reserved.
Built with modern web standards for residential and corporate clients.
