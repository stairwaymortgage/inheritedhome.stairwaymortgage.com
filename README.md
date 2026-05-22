# Inherited Home Guide
### inheritedHome.stairwaymortgage.com

Built for Stairway Mortgage & Blackburn Realty Group  
Jim Blackburn · NMLS #1072866

---

## Structure

```
/
├── index.html                        ← Homepage
├── vercel.json                       ← Vercel routing config
├── css/
│   └── style.css                     ← ALL styles for the entire site
├── js/
│   ├── components.js                 ← SHARED HEADER & FOOTER (edit here to update everywhere)
│   └── main.js                       ← Quiz logic, form logic, scroll behavior
└── pages/
    ├── live-here-settle-estate.html
    ├── sell-as-is.html
    ├── renovate-first.html
    ├── rent-it-buy-another.html
    ├── eliminate-payment.html
    ├── not-ready-yet.html
    ├── planning-guide.html
    └── contact.html
```

---

## How to Update the Header or Footer

Open **`/js/components.js`** — this is the ONLY file you need to edit.

- `NAV_HTML` — change any nav link labels, add/remove pages, update the CTA button
- `FOOTER_HTML` — change NMLS numbers, company names, legal copy, phone numbers

Save the file. Every page on the site updates automatically.

---

## How to Deploy on Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Framework Preset: **Other**
4. Build Command: leave **empty**
5. Output Directory: **`.`** (dot — the root)
6. Click Deploy

Done. Point your custom domain `inheritedHome.stairwaymortgage.com` to the Vercel project in your domain settings.

---

## Things to Update Before Going Live

| File | What to Update |
|------|---------------|
| `pages/contact.html` | Phone number and email address (marked with comments) |
| `pages/contact.html` | Business hours if different |
| `js/components.js` | Any nav link URLs once live domain is confirmed |

---

## Adding a New Page

1. Create `pages/your-new-page.html` — copy any existing page as a template
2. Add `<div id="nav-placeholder"></div>` at the top of `<body>`
3. Add `<div id="footer-placeholder"></div>` before closing `</body>`
4. Include both script tags at the bottom (see any existing page)
5. Add the new route to `vercel.json`
6. Add a link in `components.js` nav if it belongs in the menu

---

*Stairway Mortgage · NEXA Mortgage LLC · NMLS #1660690 · Equal Housing Lender*
