import type { NextConfig } from "next";

const legacyWorkSlugs = [
  "/work/mod-girl-ai-tvc",
  "/work/cgi-product-film",
  "/work/insignia-properties",
  "/work/retail-odoo-erp",
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyWorkSlugs.flatMap((source) => [
      { source: source, destination: "/work", permanent: true },
      { source: `${source}/`, destination: "/work", permanent: true },
    ]);
  },
};

export default nextConfig;
