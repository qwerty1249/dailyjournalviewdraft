const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://dailyjournalviewdraft.vercel.app/login";

module.exports = baseUrl;
