/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Explicitly include environment variables
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
};

// If the OpenNext Cloudflare dev helper is available, initialize it.
// Wrapped in try/catch so this file remains valid if the package isn't installed
// or when running in environments that don't support it.
try {
  // Use require to stay in CommonJS context
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  if (typeof initOpenNextCloudflareForDev === "function") {
    initOpenNextCloudflareForDev();
  }
} catch (err) {
  // ignore: optional dev helper
}

module.exports = nextConfig;