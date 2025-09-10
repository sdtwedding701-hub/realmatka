/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ✅ Static export on build
  images: { unoptimized: true } // ✅ next/image बिना optimization चलेगा
};
module.exports = nextConfig;
