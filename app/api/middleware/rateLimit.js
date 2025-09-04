/**
 * Simple rate limiter middleware for Next.js API routes
 * Limits requests by IP address using a rolling window
 */

// In-memory store for rate limiting (consider Redis for production)
const ratelimitStore = new Map();

// Cleans up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, { timestamp }] of ratelimitStore.entries()) {
    // Remove entries older than the window
    if (now - timestamp > 60 * 1000) {
      ratelimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Rate limiting middleware for Next.js API Routes
 * @param {Object} options Rate limiter options
 * @param {number} options.limit Max requests per window
 * @param {number} options.windowMs Time window in milliseconds
 * @returns {Function} Middleware function
 */
export function rateLimiter({ limit = 10, windowMs = 60 * 1000 } = {}) {
  return async function rateLimit(request) {
    // Get IP from headers or request
    const ip = 
      request.headers.get('x-forwarded-for')?.split(',')[0] || 
      'unknown-ip';
    
    const now = Date.now();
    const key = `${ip}`;
    
    // Get current state for this IP
    const current = ratelimitStore.get(key) || { count: 0, timestamp: now };
    
    // Reset if outside window
    if (now - current.timestamp > windowMs) {
      current.count = 0;
      current.timestamp = now;
    }
    
    // Increment count
    current.count++;
    ratelimitStore.set(key, current);
    
    // Add rate limit headers
    const headers = new Headers();
    headers.set('X-RateLimit-Limit', limit.toString());
    headers.set('X-RateLimit-Remaining', Math.max(0, limit - current.count).toString());
    headers.set('X-RateLimit-Reset', new Date(current.timestamp + windowMs).toISOString());
    
    // If over limit, return 429 Too Many Requests
    if (current.count > limit) {
      headers.set('Retry-After', Math.ceil((current.timestamp + windowMs - now) / 1000).toString());
      return new Response(JSON.stringify({ 
        error: 'Too many requests, please try again later.' 
      }), { 
        status: 429, 
        headers 
      });
    }
    
    return null; // Continue to the actual handler
  };
}

/**
 * Validates a request body against a schema
 * @param {Function} validator Validation function that returns errors or null
 * @returns {Function} Middleware function
 */
export function validateRequest(validator) {
  return async function validate(request) {
    try {
      const body = await request.json();
      const validationResult = validator(body);
      
      if (validationResult?.errors) {
        return new Response(
          JSON.stringify({ 
            error: 'Invalid request data', 
            details: validationResult.errors 
          }),
          { status: 400 }
        );
      }
      
      // Attach validated data to the request object for handlers
      request.validatedData = validationResult.data || body;
      return null; // Continue to the handler
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { status: 400 }
      );
    }
  };
}
