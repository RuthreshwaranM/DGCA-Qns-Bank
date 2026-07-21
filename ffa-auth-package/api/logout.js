const { clearCookie } = require('./_lib/auth');

module.exports = async (req, res) => {
  clearCookie(res);
  return res.status(200).json({ success: true, message: 'Logged out successfully' });
};
