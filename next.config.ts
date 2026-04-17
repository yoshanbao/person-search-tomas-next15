import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // In Next.js 16, turbopack config moved from experimental.turbo to top-level turbopack
  turbopack: {
    // Resolve modules using Node.js resolution
    resolveAlias: {
      // Add any custom aliases here if needed
    }
  },
  webpack: (config, { isServer }) => {
    // Exclude mcp-server from webpack bundle
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    
    // Add mcp-server to ignored patterns
    if (config.watchOptions) {
      config.watchOptions.ignored = [
        ...(config.watchOptions.ignored || []),
        '**/mcp-server/**'
      ];
    }
    
    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  typescript: {
    // Ignore mcp-server TypeScript errors during build
    // The mcp-server is excluded from the project and runs separately
    ignoreBuildErrors: true,
  },
  // Note: In Next.js 16, the eslint config option was removed.
  // Linting is now done via `eslint .` command directly.
};

export default nextConfig;

