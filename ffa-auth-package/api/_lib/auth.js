/* ============================================================
   auth.js — JWT + cookie helpers
   ============================================================
   Vercel's Node functions don't include Express's cookie-parser
   by default, so this parses the raw Cookie header by hand.
============================================================ */
const jwt = require('jsonwebtoken');

const COOKIE_NAME = 'ffa_token';

function sign(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' });
}

function verify(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

function parseCookies(req) {
  const header = req.headers.cookie || '';
  const out = {};
  header.split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    const k = pair.slice(0, idx).trim();
    const v = pair.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

function getToken(req) {
  const cookies = parseCookies(req);
  return (
    cookies[COOKIE_NAME] ||
    (req.query && req.query.token) ||
    req.headers['x-ffa-token']
  );
}

function setCookie(res, token) {
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${token}; Max-Age=${4 * 60 * 60}; Path=/; SameSite=Lax`
  );
}

function clearCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`);
}

module.exports = { sign, verify, parseCookies, getToken, setCookie, clearCookie, COOKIE_NAME };
