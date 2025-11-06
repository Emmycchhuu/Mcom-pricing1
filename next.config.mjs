/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enforce type safety in CI/builds.
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
