const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;
