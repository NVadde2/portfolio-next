import type { NextConfig } from "next";

// Deployed as a GitHub Project Page at https://nvadde2.github.io/portfolio/
// so all routes/assets need the /portfolio base path baked in at build time.
const basePath = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // static export has no image optimization server
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
