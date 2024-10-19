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
};

export default nextConfig;
