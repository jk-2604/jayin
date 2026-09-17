import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoBasePath = '/jayin-khanna-academic'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(isGithubPages && {
    basePath: repoBasePath,
    assetPrefix: repoBasePath,
  }),
}

export default nextConfig
