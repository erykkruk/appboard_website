import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The shared VPS OOM-kills the build when static generation fans out to
    // one worker per core — cap the workers so `next build` fits in memory.
    cpus: 2,
  },
};

export default nextConfig;
