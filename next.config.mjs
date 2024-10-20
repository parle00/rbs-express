/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgrosetta.mynet.com.tr",
        port: "",
        pathname: "/file/**",
      },
      {
        protocol: "https",
        hostname: "img7.mynet.com.tr",
        port: "",
        pathname: "/rosetta/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/haber",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
