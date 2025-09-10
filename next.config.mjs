/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // ❌ Build fail न हो Type errors की वजह से
    ignoreBuildErrors: true,
  },
  eslint: {
    // ❌ Build fail न हो Lint errors की वजह से
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
