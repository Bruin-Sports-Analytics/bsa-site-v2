/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve source assets directly so image traffic cannot exhaust Vercel's
    // transformation allowance. Compress new assets before uploading them.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hfpruaivskrkweobtvcf.supabase.co",
        pathname: "/storage/v1/object/public/**"
      }
    ]
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
