# Golden Palm Ceylon — Luxury Tourism Website

A production-ready Next.js (App Router) + TypeScript + Tailwind CSS website for a
luxury Sri Lanka tour operator, built from the Golden Palm Ceylon brand brief.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react + react-icons (icons)
- Firebase Firestore (contact form storage)

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Firebase Setup (required for the Contact form, and for Login/Signup)

1. Create a project at https://console.firebase.google.com
2. Enable **Firestore Database** (start in production or test mode).
3. Enable **Authentication > Sign-in method > Email/Password**.
4. In Project Settings > General > Your apps, create a Web App and copy the config values.
5. Copy `.env.local.example` to `.env.local` and fill in the six `NEXT_PUBLIC_FIREBASE_*` values.
6. Restart `npm run dev`. Submissions from `/contact` will now be written to the
   `inquiries` collection in Firestore, and `/login` / `/signup` will work.

Until `.env.local` is configured, the form will show an error message on submit
rather than failing silently — this is expected.

## Customer Accounts & Admin Dashboard

- `/signup` and `/login` let a customer create an account and sign in (Firebase Auth, email/password).
- `/account` shows a signed-in customer their own submitted enquiries.
- `/admin` shows **every** enquiry, but only to emails listed in `NEXT_PUBLIC_ADMIN_EMAILS`
  (comma-separated, in `.env.local`).
- **Important:** `NEXT_PUBLIC_ADMIN_EMAILS` only controls the UI. To actually protect the
  data at the database level, deploy the rules in `firestore.rules` and add each admin's
  Firebase Auth UID as a document in an `admins` collection — see the comments at the
  top of `firestore.rules` for the exact steps.

## Journey Planning Flow ("Book Your Journey")

Rather than linking straight to the contact form, the main "Book Your Journey" buttons
(Navbar, Hero, closing CTA) now go to `/plan` — a single landing page with a
"Let's Start Planning" button — which leads to `/plan/start`, a 4-step wizard
(Intro → About You → Preference → Summary) that submits to the same Firestore
`inquiries` collection as the `/contact` form. The `/contact` page and its form still
exist separately for direct enquiries.

## Guest Reviews

- `/reviews` lists guest reviews and includes a "Write a Review" form (name, country,
  star rating, tour, comment) that writes to a public Firestore `reviews` collection.
- The homepage's "What Our Guests Say" section pulls from the same collection via
  `src/components/ReviewsList.tsx`. Until real reviews come in (or if Firebase isn't
  configured), it falls back to the curated testimonials in `src/lib/data.ts`.
- Firestore rules for the `reviews` collection (public create + read, no
  update/delete) are included in `firestore.rules`. Consider adding a moderation
  step (e.g. an `approved` field checked in the rule) before launch if spam is a concern.

## Sustainability Page

`/sustainability` has two download buttons for PDFs you provide. Add your two files to
`public/documents/` with these exact names:
- `travel-instructions.pdf`
- `sustainability-policy.pdf`

(See `public/documents/README.txt` for a reminder.)

## TripAdvisor Link

The homepage's "Find Us on TripAdvisor" button (`src/components/home/FindUsOnline.tsx`)
currently links to a placeholder TripAdvisor URL — update the `href` once you have your
business's actual TripAdvisor profile page.

## Admin Dashboard — Content Management

`/admin` has four tabs:
- **Enquiries** — every submitted enquiry.
- **Reviews** — every guest review, with a delete button (moderation).
- **Gallery** — add photos by pasting an already-hosted image URL (no file
  upload — use your own image host, Google Drive share links, or a CDN),
  and delete them. Added photos appear on the public `/gallery` page
  alongside the illustrated placeholders.
- **Tours** — the fullest tab:
  - **Main Tour Types**: the 9 built-in categories are always available;
    add a brand-new one (name + illustration style) if you need a
    category outside those (e.g. "Beach Tours"). It immediately appears
    as a filter option on `/tours` and in the tour form's category dropdown.
  - **Edit the Original Built-in Tours**: a one-time "Import Built-in
    Tours for Editing" button copies all 45 launch tours into Firestore.
    After that, they appear in the list below with full Edit/Delete
    controls, and any edits you make there **override** the version baked
    into the code on the live site (matched by slug) — no redeploy needed.
  - **Add/Edit a Tour**: title, category, duration, price, highlights,
    short description, and an optional **Photo URL** (falls back to the
    illustration if left blank). Click **"Add full itinerary"** to expand
    the full builder — hero title, intro, overview, day-by-day itinerary
    (add/remove days freely), hotel/transport/meals, included/excluded
    lists, optional experiences, and FAQs. A tour saved with at least one
    itinerary day gets its own `/tours/[slug]` page with the same layout
    as the built-in tours. The slug is auto-generated from the title.
  - This page (and the public tour detail pages) revalidate every 60
    seconds, so admin edits appear within a minute without a rebuild.

This requires the Firestore rules in `firestore.rules` to be deployed
(admin-only write access for `reviews`, `gallery`, `categories`, and
`customTours` collections), and requires your account's Firebase Auth UID
to be in the `admins` Firestore collection — see the Firebase setup steps above.

## Project Structure

```
src/
  app/                 Routes (App Router) — one folder per page
    destinations/[slug] Dynamic destination detail pages
    sitemap.ts           Auto-generated sitemap.xml
    robots.ts            Auto-generated robots.txt
  components/          Shared UI components
    home/               Homepage-only sections
  lib/
    data.ts             All tour/destination/service/testimonial content — edit here
    firebase.ts         Firebase init + Firestore submission helper
```

## Content Editing

Nearly all copy (tours, destinations, services, testimonials, FAQs, the experience
timeline) lives in a single file: `src/lib/data.ts`. Edit that file to update
prices, add tours, or add destinations without touching any component.

## Replacing Placeholder Visuals

This build ships with an original line-art "motif" system (`src/components/Motif.tsx`)
standing in for photography, so the site is ready to preview and deploy without
needing licensed images first. To swap in real photography:

- Replace the gradient + `<Motif />` blocks in `TourCard.tsx`, `DestinationCard.tsx`,
  `Hero.tsx`, `GalleryMasonry.tsx`, and the destination detail page with `next/image`
  components pointing at your own photos (place files in `/public/images`).
- The hero section (`components/home/Hero.tsx`) is set up to hold a background video —
  see the comment at the top of that file.

## SEO

Every page exports its own `metadata` (title, description, canonical URL). Open
Graph/Twitter tags and an Organization JSON-LD schema are set globally in
`app/layout.tsx`; a `TouristDestination` schema is added per destination page.
`sitemap.xml` and `robots.txt` are generated automatically from `app/sitemap.ts`
and `app/robots.ts`.

## Phase 2 Ideas (not built yet, architecture supports them)

- User accounts / saved itineraries
- Admin dashboard to manage enquiries and tours from Firestore
- Online booking calendar + payment gateway
- Guest reviews collection

## Deployment

This is a standard Next.js app — deploy to Vercel, Netlify, or any Node hosting.
Remember to set the `NEXT_PUBLIC_FIREBASE_*` environment variables in your
hosting provider's dashboard as well.
