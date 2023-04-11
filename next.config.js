const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

const { withAxiom } = require("next-axiom");
module.exports = withAxiom({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;
