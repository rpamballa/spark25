# Spark25

Marketing site and blog platform for Spark25 — a React (Vite + Tailwind CSS) frontend with an Express/MongoDB backend.

## Structure

- `frontend/` — Vite + React app (marketing pages, blog, editor, dashboard)
- `backend/` — Express API server (auth, blogs, comments, notifications, contact)

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

### Backend

```bash
npm install
npm start        # runs backend/server.js
```

The backend requires a `.env` file (MongoDB connection, JWT secret, AWS and Mailchimp keys) and Firebase Admin credentials. The Firebase service account key is **not** committed to this repository — provide it one of these ways:

- `FIREBASE_SERVICE_ACCOUNT` — the service account JSON, inline
- `FIREBASE_SERVICE_ACCOUNT_PATH` — path to the service account JSON file

## Brand logos

The "Brands We've Helped" marquee on the home page is driven by the logo assets in `frontend/src/imgs/logos/`. Logos are rendered monochrome (`brightness-0`) for a uniform look against the section's fixed light background; drop a new SVG/PNG in that folder and add it to the `brands` list in `frontend/src/components/spark25Marquee.jsx` to extend it.
