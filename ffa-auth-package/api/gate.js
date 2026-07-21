/* ============================================================
   gate.js — protected static file server
   ============================================================
   This is the piece that makes the login actually mean something.
   RTR's real protection came from Express serving paper HTML
   behind authMiddleware — a plain sessionStorage check in the
   browser is only a UI nicety, since anyone can set that value
   by hand in DevTools and load the page directly.

   This function reproduces RTR's server-side gate for a static
   site: vercel.json rewrites requests for the quiz app
   (index.html, js/app.js, js/parser.js, data/*, images/*) to this
   function instead of serving them as plain static files. It
   checks the JWT cookie, and only then reads the real file out of
   the /protected folder and streams it back.

   Anything NOT rewritten here (css/, logos, aboutus.html,
   contactus.html, login.html, register.html) stays genuinely
   public and is served by Vercel's normal static hosting.
============================================================ */
const fs = require('fs');
const path = require('path');
const { verify, getToken } = require('./_lib/auth');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
};

const PROTECTED_ROOT = path.join(process.cwd(), 'protected');

module.exports = async (req, res) => {
  const requested = (req.query.path || 'index.html').toString();

  // Prevent path traversal (../../etc)
  const safePath = path.normalize(requested).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(PROTECTED_ROOT, safePath);
  if (!filePath.startsWith(PROTECTED_ROOT)) {
    return res.status(400).send('Bad request');
  }

  const token = getToken(req);
  let authed = false;
  if (token) {
    try {
      verify(token);
      authed = true;
    } catch (e) {
      authed = false;
    }
  }

  const isPageRequest = safePath.endsWith('.html') || safePath === '';

  if (!authed) {
    if (isPageRequest) {
      res.writeHead(302, { Location: '/login.html' });
      return res.end();
    }
    // Direct asset request (js/data/image) with no valid session — block outright
    return res.status(401).send('Unauthorized');
  }

  try {
    const data = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
    return res.status(200).send(data);
  } catch (e) {
    return res.status(404).send('Not found');
  }
};
