const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["en", "it", "sv"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
