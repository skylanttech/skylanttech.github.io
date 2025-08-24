/** @type {import('next').NextConfig} */
const repo = "skylant" // GitHub repository name
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  // Export static files for GitHub Pages
  output: "export",

  // Ensure paths work under https://<user>.github.io/<repo>
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true, // Better compatibility with static hosting

  // next/image is not supported on static hosts by default
  images: {
    unoptimized: true,
  },

  // Keep builds lenient on GH Pages CI (optional)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  reactStrictMode: true,
}

export default nextConfig
