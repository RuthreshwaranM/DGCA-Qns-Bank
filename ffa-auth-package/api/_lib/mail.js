/* ============================================================
   mail.js — EmailJS alert sender
   ============================================================
   Unlike the RTR site (which called EmailJS directly from the
   browser with the service/template/key hardcoded in client JS),
   this version routes every alert through the server. Keys live
   only in Vercel environment variables, never in shipped JS.
============================================================ */

async function sendAlert(templateParams) {
  const SERVICE = process.env.EMAILJS_SERVICE_ID;
  const TEMPLATE = process.env.EMAILJS_TEMPLATE_ID;
  const KEY = process.env.EMAILJS_PUBLIC_KEY;

  if (!SERVICE || !TEMPLATE || !KEY) {
    console.warn('MailService: EmailJS env vars not set, skipping alert.');
    return false;
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: SERVICE,
        template_id: TEMPLATE,
        user_id: KEY,
        template_params: templateParams,
      }),
    });
    return res.ok;
  } catch (e) {
    console.warn('MailService: error sending alert:', e.message);
    return false;
  }
}

async function sendLoginAlert(name, userId) {
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  return sendAlert({
    student_name: name,
    student_id: userId,
    student_email: 'Password Login',
    login_time: now,
  });
}

module.exports = { sendAlert, sendLoginAlert };
