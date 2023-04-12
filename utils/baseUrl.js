const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://journal-s9jp.onrender.com";

module.exports = baseUrl;
