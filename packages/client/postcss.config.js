const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const plugins =
  process.env.NODE_ENV === "production"
    ? [tailwindcss, autoprefixer, cssnano]
    : [tailwindcss, autoprefixer];

module.exports = { plugins };
