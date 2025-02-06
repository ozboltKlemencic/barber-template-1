import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  async headers() {
    return [
      {
        // Pot do API endpointa
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // V produkciji specificiraj domeno
          { key: "Access-Control-Allow-Methods", value: "POST,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type" },
        ]
      }
    ]
  }
};

export default nextConfig;
