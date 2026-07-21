/* ============================================================
   db.js — cached MongoDB connection for Vercel serverless functions
   ============================================================
   Serverless functions can be invoked many times per minute, each
   potentially in a fresh execution context. Without caching, every
   invocation would open a brand-new MongoDB connection and never
   close it — you'd exhaust your connection pool in minutes.
   This caches the connection on the global object, which Vercel
   reuses across invocations on a "warm" lambda instance.
============================================================ */
const mongoose = require('mongoose');

let cached = global._ffaMongoose;
if (!cached) {
  cached = global._ffaMongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error(
        'MONGO_URI is not set. Add it in your Vercel project → Settings → Environment Variables.'
      );
    }
    cached.promise = mongoose.connect(uri).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDB;
