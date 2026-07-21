const connectDB = require('./_lib/db');
const User = require('./_lib/User');
const { sign, setCookie } = require('./_lib/auth');
const { sendLoginAlert } = require('./_lib/mail');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectDB();
    const { name, userId, password } = req.body || {};

    if (!name || !userId || !password) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields.' });
    }

    const key = userId.toUpperCase().trim();
    const user = await User.findOne({ userId: key });
    const now = Date.now();

    if (user && user.lockUntil && now < user.lockUntil) {
      const remainingMin = Math.ceil((user.lockUntil - now) / 60000);
      return res.status(200).json({
        success: false,
        error: `Too many failed attempts. Your account is locked. Try again in ${remainingMin} minutes.`,
      });
    }

    const nameMatches = user && user.name.toLowerCase().trim() === name.toLowerCase().trim();
    const passwordMatches = user && (await user.comparePassword(password.trim()));

    if (!user || !nameMatches || !passwordMatches) {
      if (user) await handleFailedAttempt(user);
      return res.status(200).json({
        success: false,
        error: 'Invalid credentials. Please check your Name, User ID and Password.',
      });
    }

    // Successful login — reset lockout state
    user.loginAttempts = 0;
    user.lockUntil = 0;
    user.lockTier = 0;
    await user.save();

    await sendLoginAlert(user.name, user.userId);

    const token = sign({ id: user._id.toString(), name: user.name, userId: user.userId });
    setCookie(res, token);

    return res.status(200).json({ success: true, token, name: user.name, userId: user.userId });
  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

async function handleFailedAttempt(user) {
  const now = Date.now();

  if (user.lockUntil && now >= user.lockUntil) {
    user.loginAttempts = 0;
    user.lockUntil = 0;
  }

  user.loginAttempts += 1;

  if (user.loginAttempts >= 3) {
    user.lockTier = (user.lockTier || 0) + 1;
    let duration = 15 * 60 * 1000; // Tier 1: 15 min
    if (user.lockTier === 2) duration = 30 * 60 * 1000; // Tier 2: 30 min
    else if (user.lockTier >= 3) duration = 60 * 60 * 1000; // Tier 3+: 1 hr

    user.lockUntil = now + duration;
    user.loginAttempts = 0;
  }

  await user.save();
}
