# Portfolio — a hand-drawn window on the web

A multi-page portfolio website built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, modelled on the design system of [garimapahwa.xyz](https://garimapahwa.xyz/) — warm paper background (`#f5f5f3` light / `#121212` dark), Helvetica Neue, uppercase meta labels, a hero with per-character pop-in animation, a board of hand-drawn "window" doodle cards with a hover veil that types the card's label, a sticky minimal nav with a dashed scroll-progress bar, a half-orb theme toggle, scroll reveals, and a dashed footer with a beating `<3`.

## Getting started

```bash
npm install     # already done if you cloned after setup
npm run dev     # http://localhost:3000 (or the next free port)
npm run build   # production build
npm start       # serve the production build
```

## Pages

| Route                | Contents                                                        |
| -------------------- | --------------------------------------------------------------- |
| `/`                  | Hero (name, role, live IST clock, socials) + 6 window cards      |
| `/about`             | Story, what I do, how I work + "On this page" TOC and quick facts |
| `/projects`          | Projects grouped by Featured / Web / Open source                 |
| `/projects/[slug]`   | Case study, stack chips, "Was this helpful?", related            |
| `/experience`        | Roles, education, skills & tools                                 |
| `/contact`           | Form, channels, intro call, FAQ                                  |

## Make it yours

Everything content-related lives in one file:

```
src/data/portfolio.ts
```

- **`profile`** — name, role, location, email, socials
- **`navLinks` / `boardCards`** — navigation and the home-page window cards
- **`projects`** — every case study (renders `/projects`, its detail pages, and related lists)
- **`aboutSections` / `roles` / `education` / `skillGroups`** — About and Experience pages
- **`contactChannels` / `contactFaq`** — Contact page

Styling lives in `src/app/globals.css` as a plain-CSS design system (`.wrap`, `.meta`, `.nav`, `.hero`, `.board`, `.card`, `.btn`, `.field`, `.panel`, `.row-list`, …) built on CSS custom properties — swap the `[data-theme]` tokens there to rebrand.

### Notes

- The contact form is client-side only (shows a success state); wire `src/components/contact-form.tsx` to your API or a service like Formspree to actually send mail.
- `live`/`source` links on projects only render when they start with `http` — replace the placeholder `"#"` values with real URLs.
- Set your real domain in `src/app/sitemap.ts` (currently `https://example.com`).
