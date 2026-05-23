import path from "node:path";

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
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]build[\\/]polyfills[\\/]polyfill-module$/,
          path.resolve("./src/utils/empty-polyfills.js"),
        ),
      );
    }

    return config;
  },
};

export default nextConfig;
