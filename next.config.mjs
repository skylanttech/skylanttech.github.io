/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // User/Org Pages at https://<user>.github.io live at the domain root,
  // so no basePath/assetPrefix are needed.
  // If you later switch to a project page, set basePath/assetPrefix accordingly.
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
