import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
  server: {
    // These packages are large and can be excluded from the server bundle
    // and instead loaded at runtime.
    dependencies: {
      external: [
        "antd",
        "resend",
      ],
    },
    // Minify the server bundle to reduce its size
    minify: true,
  },
});