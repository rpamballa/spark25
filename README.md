# Spark25

Marketing site and blog platform for Spark25 — a React (Vite + Tailwind CSS) frontend with an Express/MongoDB backend.

## Structure

- `frontend/` — Vite + React app (marketing pages, blog, editor, dashboard)
- `backend/` — Express API server (auth, blogs, comments, notifications, contact)

## Deployment

- **Frontend** — Cloudflare Workers static assets, live at [spark25.com](https://spark25.com).
  Configured by `frontend/wrangler.jsonc`; builds from this repo (root directory
  `frontend`, build `npm run build`, deploy `npx wrangler deploy`). The API base
  URL is baked in at build time from the `VITE_API_URL` build variable.
- **Backend** — Render web service at `https://spark25-api.onrender.com`,
  configured by `render.yaml` (Node 22, `npm start`, health check on `/`).
  Secrets: `MONGO_URI` env var, plus the Firebase Admin key mounted as the
  `firebase-service-account.json` secret file.
- **Database** — MongoDB Atlas (free M0 cluster, database name `spark25`).

Pushes to the production branch auto-deploy both the Cloudflare frontend and
the Render backend.

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

_Last deploy trigger: 2026-08-15 (post Git reconnect)_
