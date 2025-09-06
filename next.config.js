/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Explicitly include environment variables
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  },
  // Netlify already handles image optimization or can serve original files.
  // Disable Next/Image optimizer to avoid /_next/image issues on Netlify.
  images: {
    unoptimized: true,
  },
  // Security headers and proper CORS for Sanity Studio
  async headers() {
    // Replace with your actual production domain
    const PRODUCTION_DOMAIN = 'https://monparcourtkf.netlify.app/';
    const ALLOWED_ORIGINS = [PRODUCTION_DOMAIN, 'http://localhost:3000']; 
    
    return [
      // Restricted CORS for Sanity studio (Action #1)
      {
        source: '/studio/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: ALLOWED_ORIGINS.join(',') }, // Restricts origins
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
      // Global security headers for all pages (Action #3)
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Start with Content-Security-Policy-Report-Only to avoid breaking things
          { key: 'Content-Security-Policy-Report-Only', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:; object-src 'none'; media-src 'self' https:;" },
          // Enable Strict Transport Security in production
          ...(process.env.NODE_ENV === 'production' ? [
            { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
          ] : [])
        ],
      },
    ];
  },
}

module.exports = nextConfig
