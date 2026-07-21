# Flight Flare Aviation — Login + Protection Setup

This is a standalone package you merge into your real Exam Bank project
(the one with `css/style.css`, `css/academy.css`, `js/parser.js`,
`js/app.js`, `data/*.js`, `images/`). It reuses the RTR site's overall
pattern — login page, JWT session, admin-gated registration, anti-cheat
script — but rebuilt as **Vercel serverless functions** instead of a
persistent Express server, matching your README's original plan and
keeping the site deployable as a static-first Vercel project.

## 1. Folder layout — what moves where

Your final project root should look like this:

```
/                          ← public, no login required
  index.html               ← NEW: thin redirect (see step 3)
  aboutus.html              (yours, unchanged)
  contactus.html             (yours, unchanged)
  login.html                ← from this package
  register.html             ← from this package
  logo1.png / logo2.png      (yours, unchanged)
  css/style.css               (yours, unchanged — stays public)
  css/academy.css             (yours, unchanged — stays public)
  js/protection.js          ← from this package

  api/                      ← from this package, all of it
    login.js
    register.js
    logout.js
    alert.js
    gate.js
    _lib/db.js
    _lib/User.js
    _lib/auth.js
    _lib/mail.js

  protected/                ← NEW folder — the real app moves in here
    index.html               (your REAL app shell, quiz UI etc.)
    js/app.js                 (yours, unchanged)
    js/parser.js               (yours, unchanged)
    data/*.js                   (yours, unchanged — all your questions)
    images/*                     (yours, unchanged — question diagrams)

  vercel.json               ← from this package
  package.json               ← from this package (merge if you already have one)
  .env.example
  .gitignore
```

**Why split it this way:** `css/` stays public because `login.html` needs
it to render before anyone's authenticated. `protected/` holds
everything that actually contains your exam questions — that's the part
worth gating.

## 2. Move your real files

1. Take your actual `index.html` (the one with the quiz engine, not the
   marketing one you uploaded to me) and put it at `protected/index.html`.
2. Move `js/app.js` and `js/parser.js` into `protected/js/`.
3. Move all of `data/*.js` into `protected/data/`.
4. Move `images/` into `protected/images/`.
5. Open `protected/AUTH-GUARD-SNIPPET.html` from this package and paste
   its `<script>` block as the **first thing inside `<body>`** in your
   real `protected/index.html`. This is the client-side session check —
   it mirrors exactly what RTR's `index.html` does.
6. Add `<script src="/js/protection.js" defer></script>` into the
   `<head>` of `protected/index.html` too, so the anti-cheat layer runs
   on the actual quiz pages, not just the login screen.
7. Wire a "Sign Out" button to call `ffaSignOut()` (defined by the
   auth-guard snippet) wherever your topbar lives.

## 3. Add the new public index.html

Vercel's rewrites in `vercel.json` intercept `/` and `/index.html` and
route them through `/api/gate`, which reads the real file out of
`protected/index.html` for authenticated sessions only. So the
**public** `index.html` file at your project root should just be your
marketing/landing content if you want one there — but since `/` is
rewritten to the gate, whatever real HTML file sits at the project root
named `index.html` is never actually served directly once `vercel.json`
is in place. If you don't want a separate public landing page, you can
delete the root `index.html` entirely; `/` will always resolve through
the gate.

## 4. Environment variables

Copy `.env.example`, fill in real values, and add them in **Vercel →
Project → Settings → Environment Variables** (not in a committed file):

- `MONGO_URI` — a free MongoDB Atlas cluster works fine for this scale
- `JWT_SECRET` — any long random string
- `ADMIN_SECRET_KEY` — any long random string; this is your `?key=`
  for `register.html`
- `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY` —
  from your EmailJS account (reuse the same ones from the RTR site if
  you want alerts landing in the same inbox, or create a fresh EmailJS
  service just for this site)

## 5. Creating your first students

There's no automatic seed list this time (RTR hardcoded 8 starter
accounts; this package doesn't, since your student roster is separate).
Instead, visit:

```
https://yoursite.vercel.app/register.html?key=YOUR_ADMIN_SECRET_KEY
```

and register each student by name + password. The first one becomes
`FFA-000`, the next `FFA-001`, and so on automatically.

## 6. What's different from the RTR site (on purpose)

- **No persistent server.** Everything is a Vercel serverless function
  instead of one long-running Express process — matches your README's
  static-first design and needs zero server management.
- **Lockout tracking lives in MongoDB**, not an in-memory `Map`. A
  serverless function has no memory between invocations, so RTR's
  approach wouldn't actually work here — this version stores
  `loginAttempts` / `lockUntil` / `lockTier` directly on each user
  document instead.
- **EmailJS keys never reach the browser.** RTR's `protection.js` had
  the EmailJS service ID, template ID, and public key hardcoded in
  client-side JS (visible to anyone via view-source). This version
  routes every alert through `/api/alert` on the server, so those keys
  only ever live in Vercel's environment variables.
- **The gate is real, not just a client-side redirect.** `index.html`,
  `js/app.js`, `js/parser.js`, and everything in `data/` and `images/`
  only get served by `/api/gate` after it verifies your session cookie
  server-side — someone can't just set a fake value in `sessionStorage`
  and read the questions, the way they could with a purely
  client-side-only check.

## 7. Honest limits

`js/protection.js` (the anti-cheat layer — blocking right-click, print,
DevTools shortcuts, etc.) is a deterrent, exactly like it was on the RTR
site. It cannot stop someone determined enough to disable JavaScript
before the page loads or inspect network requests directly. The actual
protection for your question content is the server-side gate in step
6 — the anti-cheat script's job is just to make casual copying
annoying and to notify you when someone tries something more deliberate.
