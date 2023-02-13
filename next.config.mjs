// import withPlugins from "next-compose-plugins";
import optimizedImages from "next-optimized-images";
import withCSS from "@zeit/next-css";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["paro-public-assets.s3.me-central-1.amazonaws.com"],
  },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

// export default nextConfig;

// export default (_phase, { defaultConfig }) => {
//   const plugins = [optimizedImages, withCSS];
//   return plugins.reduce((acc, plugin) => plugin(acc), {
//     ...defaultConfig,
//     ...nextConfig,
//   });
// };
