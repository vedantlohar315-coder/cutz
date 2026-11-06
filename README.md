# Cutzy Salon & Academy

A six-page, mobile-first website for Cutzy Salon & Academy by Arjun Dhingra.

## Open the site

Open `index.html` in a browser. The pages are static HTML and can also be hosted together on any static web host. No build step or package installation is required.

## Put it on GitHub Pages

1. Create a GitHub repository for the site.
2. Extract the ZIP and upload its **contents** to the repository's top level. Keep `index.html`, `styles.css`, `app.js`, `data/`, and `media/` together; `index.html` should be at the repository root.
3. In the repository, open **Settings → Pages**. Choose **Deploy from a branch**, select the `main` branch and `/(root)`, then save.
4. Share the published GitHub Pages URL once deployment finishes.

The ZIP is arranged with `index.html` at its root, so extracting it directly into the repository root preserves the working relative links.

## Editable details

- **Prices and course placeholders:** `data/pricing.js` is the single source for all ₹XXX and ₹XXXX amounts.
- **Services, contact details, photos, reels and testimonial copy:** `data/content.js`.
- **Replaceable salon media:** `media/logo.png`, `media/hair-consultation.jpg`, `media/arjun-portrait.jpg`, `media/salon-front.jpg`, `media/chestnut-finish.jpg`, `media/guest-finish.jpg`, and `media/brunette-waves.jpg`.
- **Page styles and interactions:** `styles.css` and `app.js`.

The photos supplied with the request are used as the initial salon media. Salon photos are compressed JPEG copies; the logo stays PNG to preserve transparency. Reel-style cards and the gallery's follow button link to the official Instagram profile. Direct image retrieval from Instagram was blocked here, so the site uses the supplied local photos as its static gallery.

## Enquiry flow

The form validates the required fields in the browser, checks for a honeypot spam field, and prepares an appointment message addressed to the WhatsApp number from the brief. Visitors review the details and tap **Send** in WhatsApp. No enquiry is stored by this static site.

## Before publishing

- Replace all placeholder prices and course details in `data/pricing.js` after Cutzy approves them.
- Replace the three sample guest notes in `data/content.js` with approved, verified reviews.
- Replace media in `media/` with approved compressed versions as Cutzy's latest work becomes available.
- Confirm the address and opening hours before publication.
