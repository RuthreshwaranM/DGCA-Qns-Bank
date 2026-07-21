/* ============================================================
   User.js — student account schema
   ============================================================
   Lockout state (loginAttempts / lockUntil / lockTier) lives on
   the user document rather than in an in-memory Map, because a
   serverless function has no persistent memory between
   invocations — a Map would reset constantly and the lockout
   would never actually work.
============================================================ */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    password: { type: String, required: true },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Number, default: 0 },
    lockTier: { type: Number, default: 0 },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (entered) {
  return bcrypt.compare(entered, this.password);
};

// mongoose.models.User avoids "Cannot overwrite model" errors when a
// warm lambda instance re-runs this file on a subsequent invocation.
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
