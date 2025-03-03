import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚀 ESLint errors ko ignore karega
  },
};

export default nextConfig;
