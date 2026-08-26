/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [320, 384, 420, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256, 384],
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800"
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/teams",
        permanent: true
      },
      {
        source: "/work/:path*",
        destination: "/teams/:path*",
        permanent: true
      },
      {
        source: "/teams/baseball/consulting",
        destination: "/teams/baseball",
        permanent: true
      },
      {
        source: "/teams/baseball/research",
        destination: "/teams/baseball",
        permanent: true
      },
      {
        source: "/teams/basketball/consulting",
        destination: "/teams/basketball",
        permanent: true
      },
      {
        source: "/teams/basketball/research",
        destination: "/teams/basketball",
        permanent: true
      },
      {
        source: "/teams/tennis/consulting",
        destination: "/teams/tennis",
        permanent: true
      },
      {
        source: "/teams/tennis/research",
        destination: "/teams/tennis",
        permanent: true
      },
      {
        source: "/teams/volleyball/consulting",
        destination: "/teams/volleyball",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
