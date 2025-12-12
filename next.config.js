/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // ✅ Quality levels your app uses
    qualities: [50, 60, 70, 75, 80, 85, 90, 95],

    // Optimization settings
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],

    // Allow external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],

    // Device screen sizes (for responsive srcset)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image container sizes (for responsive srcset)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
  },
}

export default nextConfig