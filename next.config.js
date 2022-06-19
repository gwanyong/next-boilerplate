const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: `${process.env.NEXT_PUBLIC_AUTH_URL}/:path*`,
      },
      {
        source: "/base/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  compiler: { styledComponents: true },
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: false,
      fs: false,
      http: false,
      https: false,
      stream: false,
    };
    return config;
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
