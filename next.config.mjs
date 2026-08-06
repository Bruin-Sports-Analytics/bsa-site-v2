/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
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
        source: "/people/board",
        destination: "/people",
        permanent: true
      },
      {
        source: "/people/members",
        destination: "/people",
        permanent: true
      },
      {
        source: "/people/alumni",
        destination: "/people",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
