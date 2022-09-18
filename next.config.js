/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["nextjs-components"]);
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
