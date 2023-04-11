const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://main--astonishing-salmiakki-44f443.netlify.app";

module.exports = baseUrl;
