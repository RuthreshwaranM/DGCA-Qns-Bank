const { sendAlert } = require('./_lib/mail');
const { verify, getToken } = require('./_lib/auth');

// Only these activities are worth an email — everything else (tab
// switch, minimise, orientation change) is silently ignored so the
// instructor's inbox doesn't get spammed.
const ALLOWED_KEYWORDS = [
  'print',
  'screenshot',
  'printscreen',
  'devtools',
  'developer',
  'f12',
  'ctrl+shift+i',
  'ctrl+shift+j',
  'ctrl+shift+c',
];

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { activity } = req.body || {};
  if (!activity) {
    return res.status(400).json({ success: false, error: 'Missing activity' });
  }

  const lower = activity.toLowerCase();
  const isAllowed = ALLOWED_KEYWORDS.some((kw) => lower.includes(kw));
  if (!isAllowed) {
    return res.status(200).json({ success: true, skipped: true });
  }

  let name = 'Unknown';
  let userId = 'Unknown';
  const token = getToken(req);
  if (token) {
    try {
      const decoded = verify(token);
      name = decoded.name;
      userId = decoded.userId;
    } catch (e) {
      // Invalid/expired token — still log the attempt as Unknown
    }
  }

  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  await sendAlert({
    student_name: `⚠️ ${name}`,
    student_id: userId,
    student_email: activity,
    login_time: `${now} | Page: ${req.headers.referer || 'unknown'}`,
  });

  return res.status(200).json({ success: true });
};
