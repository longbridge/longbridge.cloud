const webpack = require('./config/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack,
  assetPrefix: process.env.PUBLIC_ASSET_PATH,
  reactStrictMode: true,
  env: {
    PROXY: process.env.PROXY,
  },
}

module.exports = nextConfig
