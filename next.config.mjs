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
      }
    ];
  }
};

export default nextConfig;
