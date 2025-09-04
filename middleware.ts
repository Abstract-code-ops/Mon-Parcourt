/**
 * Middleware to add security headers to all responses
 * More flexible than using next.config.js headers()
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get response
  const response = NextResponse.next();

  // Security Headers
  const headers = response.headers;

  // CORS headers - Only apply to /studio paths
  if (request.nextUrl.pathname.startsWith('/studio')) {
    // Replace with your production and staging domains
    const allowedOrigins = process.env.NODE_ENV === 'production'
      ? ['https://yourdomain.com']  // Replace with your domain
      : ['https://yourdomain.com', 'http://localhost:3000']; // For development
      
    const origin = request.headers.get('origin');
    
    // Only set Access-Control-Allow-Origin if the origin is in the allowedOrigins list
    if (origin && allowedOrigins.includes(origin)) {
      headers.set('Access-Control-Allow-Origin', origin);
      headers.set('Access-Control-Allow-Credentials', 'true');
      headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
      headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    }
  }

  // Common security headers for all responses
  headers.set('X-DNS-Prefetch-Control', 'on');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Add Content-Security-Policy (CSP)
  // Start with report-only to avoid breaking functionality
  headers.set(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' data: https:; connect-src 'self' https: wss:; frame-src 'self' https:; media-src 'self' https:; object-src 'none'; base-uri 'self';"
  );
  
  // Only add Strict-Transport-Security in production
  if (process.env.NODE_ENV === 'production') {
    headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }
  
  return response;
}

// Only apply middleware to relevant paths
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api/auth (NextAuth.js paths)
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. /_vercel (Vercel internals)
     * 5. all files in the public folder
     */
    '/((?!api/auth|_next|_static|_vercel|assets|favicon.ico).*)',
  ],
};
