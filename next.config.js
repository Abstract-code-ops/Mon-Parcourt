/**
 * Unified Next.js configuration with:
 * - Environment variable passthrough
 * - Bundle analyzer (enable with ANALYZE=1)
 * - modularizeImports to tree‑shake heavy libs (antd, icons)
 * - optimizePackageImports to reduce bundle surface
 */

/** @type {import('next').NextConfig} */
const config = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },

  // Moved to the top level (no longer experimental)
  optimizePackageImports: ['antd', 'dayjs'],

  // 'modularizeImports' now lives inside the 'compiler' option
  compiler: {
    modularizeImports: {
      antd: {
        transform: 'antd/es/{{member}}',
        preventFullImport: true,
      },
      '@ant-design/icons': {
        transform: '@ant-design/icons/{{member}}',
        preventFullImport: true,
      },
      '@sanity/icons': {
        transform: '@sanity/icons/{{member}}',
        preventFullImport: true,
      },
    }
  }
};

// Optional OpenNext Cloudflare dev helper init (kept after config definition)
try {
  const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
  if (typeof initOpenNextCloudflareForDev === 'function') {
    initOpenNextCloudflareForDev();
  }
} catch (_) {
  // silent noop
}

module.exports = config;