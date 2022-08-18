/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? '/test.github.io' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
