const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
