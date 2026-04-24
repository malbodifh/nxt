/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nxt",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
