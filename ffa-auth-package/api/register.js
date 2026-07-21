const connectDB = require('./_lib/db');
const User = require('./_lib/User');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectDB();
    const { name, password, adminKey } = req.body || {};

    if (!name || !password || !adminKey) {
      return res.status(400).json({ success: false, error: 'Please provide all required fields.' });
    }

    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return res.status(403).json({ success: false, error: 'Forbidden: Invalid Admin Key' });
    }

    // Auto-generate the next sequential FFA-00X user ID
    const users = await User.find({}, { userId: 1 });
    let maxNum = -1;
    users.forEach((u) => {
      const match = u.userId.match(/FFA-(\d+)/i);
      if (match) maxNum = Math.max(maxNum, parseInt(match[1], 10));
    });
    const generatedUserId = `FFA-${String(maxNum + 1).padStart(3, '0')}`;

    const newUser = new User({
      name: name.trim(),
      userId: generatedUserId,
      password: password.trim(),
    });
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: `User ${name.trim()} registered successfully with ID: ${generatedUserId}`,
    });
  } catch (err) {
    console.error('Registration error:', err.message);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
