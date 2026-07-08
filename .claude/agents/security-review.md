# Security Review Agent

## Role

Reviews changes from a security standpoint — headers, input validation, secrets, CSP, CSRF.

## When to Run

- New API endpoint
- Changes to middleware
- Changes to the next.config.ts configuration
- Forms (contact, newsletter)
- Changes to env variables

## Security Architecture

### Defense in Depth Strategy
1. **Input Validation**: All user inputs sanitized and validated
2. **Security Headers**: Comprehensive security headers
3. **Data Protection**: No secrets in client-side code
4. **CSRF Protection**: Origin/referer validation for state-changing operations
5. **Rate Limiting**: API endpoints protected against abuse

## Frontend Security (Next.js 16)

### 1. Content Security Policy (CSP)
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      connect-src 'self';
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
```

### 2. Security Headers Implementation
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}
```

### 3. XSS Prevention
```typescript
// Good: Safe user input handling (React escapes by default)
function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };
}

// If dangerouslySetInnerHTML is needed:
import DOMPurify from 'dompurify';
const sanitized = DOMPurify.sanitize(htmlContent);
```

### 4. CSRF Protection
```typescript
export async function POST(request: Request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  if (!referer?.startsWith(process.env.NEXT_PUBLIC_APP_URL!)) {
    return new Response('Forbidden', { status: 403 });
  }
}
```

## Data Security

### 1. Input Validation
```typescript
import { z } from 'zod';

const ContactFormSchema = z.object({
  email: z.string().email('Invalid email format'),
  message: z.string().min(10, 'Message too short').max(1000, 'Message too long'),
  name: z.string().min(2, 'Name too short').max(100, 'Name too long')
});
```

### 2. Environment Variables Security
```bash
# .env.local (never commit to git)
RESEND_API_KEY=re_xxx
NEXT_PUBLIC_APP_URL=https://appboard.dev  # Only NEXT_PUBLIC_ exposed to client

# .env.example (safe to commit)
RESEND_API_KEY=your-resend-api-key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 3. Secrets Management
- NEVER expose server-side secrets to client
- ONLY `NEXT_PUBLIC_*` env vars are safe for client-side
- API keys for email, analytics, etc. stay server-side only

## API Security

### 1. Rate Limiting
```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response('Rate limit exceeded', { status: 429 });
  }
}
```

### 2. API Input Validation
```typescript
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ContactFormSchema.parse(body);
    await processContactForm(validatedData);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## AppBoard-Specific Security

### 1. No Product Data Exposure
- Marketing website does NOT handle user data
- No auth flows on this site (auth is on admin.appboard.dev)
- Contact forms only — validate and rate-limit

### 2. Third-Party Scripts
- Minimize external scripts (analytics, tracking)
- Load analytics scripts asynchronously
- CSP must whitelist only necessary domains

### 3. GDPR Compliance
- Cookie consent banner if using analytics
- Privacy policy page
- No tracking without consent

## Security Review Checklist

### Security Headers
- [ ] Content Security Policy configured
- [ ] X-Frame-Options set to DENY
- [ ] X-Content-Type-Options set to nosniff
- [ ] Strict-Transport-Security enabled
- [ ] Referrer-Policy configured

### Input Validation
- [ ] All form inputs validated (contact, newsletter)
- [ ] API inputs validated with schema (Zod)
- [ ] File uploads restricted (if any)
- [ ] XSS prevention in place

### Data Protection
- [ ] HTTPS enforced in production
- [ ] Environment variables properly secured
- [ ] No secrets in client-side code
- [ ] No secrets in git repository

### Monitoring
- [ ] Rate limiting on API endpoints
- [ ] Error handling doesn't expose sensitive info
- [ ] Regular dependency updates (`bun audit`)

### Code Comment Policy

**IMPORTANT: NO UNNECESSARY COMMENTS**

- Code should be self-documenting through clear naming
- Only add comments for complex business logic or non-obvious behavior
