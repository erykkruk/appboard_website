# Testing Review Agent

## Role

Reviews testing strategy, test coverage, test quality, and testing patterns.

## When to Run

- New component or page
- Changes to business logic
- New API endpoint
- Refactoring existing code
- Before major releases

## Testing Strategy

### Testing Pyramid
```
                E2E Tests (10%)
              ──────────────────
             Integration Tests (20%)
           ────────────────────────
          Unit Tests (70%)
        ──────────────────────────
```

## Unit Testing

### 1. Component Testing
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { FeatureCard } from '@/components/ui/cards/feature-card';

describe('FeatureCard', () => {
  it('displays feature information correctly', () => {
    render(
      <FeatureCard
        title="Keyword Tracking"
        description="Track your app keywords"
        icon={<SearchIcon />}
      />
    );

    expect(screen.getByText('Keyword Tracking')).toBeInTheDocument();
    expect(screen.getByText('Track your app keywords')).toBeInTheDocument();
  });

  it('is accessible', () => {
    render(
      <FeatureCard
        title="Keyword Tracking"
        description="Track your app keywords"
        icon={<SearchIcon />}
      />
    );

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
```

### 2. Utility Function Testing
```typescript
import { formatPrice, cn } from '@/lib/utils';

describe('formatPrice', () => {
  it('formats USD correctly', () => {
    expect(formatPrice(29.99)).toBe('$29.99');
  });

  it('formats zero correctly', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });
});
```

## Integration Testing

### 1. Page Integration Tests
```typescript
import { render, screen, waitFor } from '@testing-library/react';

describe('Pricing Page', () => {
  it('loads and displays pricing plans', async () => {
    render(<PricingPage />);

    await waitFor(() => {
      expect(screen.getByText('Starter')).toBeInTheDocument();
      expect(screen.getByText('Professional')).toBeInTheDocument();
      expect(screen.getByText('Enterprise')).toBeInTheDocument();
    });
  });

  it('highlights popular plan', () => {
    render(<PricingPage />);

    const popularBadge = screen.getByText('Most Popular');
    expect(popularBadge).toBeInTheDocument();
  });
});
```

### 2. API Route Testing
```typescript
describe('/api/contact', () => {
  it('validates required fields', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: '' }),
    });

    expect(response.status).toBe(400);
  });

  it('accepts valid contact form', async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I am interested in AppBoard',
      }),
    });

    expect(response.status).toBe(200);
  });
});
```

## E2E Testing (Playwright)

### 1. Critical User Journeys
```typescript
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('user can navigate to pricing', async ({ page }) => {
    await page.goto('/');

    await page.click('text=Pricing');
    await expect(page).toHaveURL('/pricing');

    await expect(page.locator('h1')).toContainText('Pricing');
  });

  test('user can submit contact form', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('[name="name"]', 'John Doe');
    await page.fill('[name="email"]', 'john@example.com');
    await page.fill('[name="message"]', 'I want to learn more about AppBoard');

    await page.click('button[type="submit"]');

    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  });
});
```

### 2. Accessibility Testing
```typescript
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility', () => {
  test('homepage is accessible', async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
    await checkA11y(page, null, {
      detailedReport: true,
    });
  });

  test('pricing page is accessible', async ({ page }) => {
    await page.goto('/pricing');
    await injectAxe(page);
    await checkA11y(page);
  });
});
```

### 3. Responsive Testing
```typescript
test('responsive design works on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  await expect(page.locator('[data-testid="mobile-menu-toggle"]')).toBeVisible();
  await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
});
```

## Test Configuration

### Bun Test Config
```typescript
// bunfig.toml or test config
// Uses Bun's built-in test runner
// Module aliases via tsconfig paths
```

### Playwright Configuration
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  use: {
    baseURL: 'http://localhost:6700',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'bun dev',
    url: 'http://localhost:6700',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Testing Commands

```bash
bun test                    # Run all tests
bun test --watch            # Watch mode
bun test --coverage         # With coverage
bunx playwright test        # E2E tests
bunx playwright test --ui   # E2E with UI
```

## Testing Review Checklist

### Unit Tests (70%)
- [ ] All components have unit tests
- [ ] All utility functions tested
- [ ] Edge cases covered
- [ ] Error scenarios tested

### Integration Tests (20%)
- [ ] Page components tested
- [ ] API routes tested
- [ ] Form submissions tested

### E2E Tests (10%)
- [ ] Critical user journeys tested
- [ ] Cross-browser compatibility verified
- [ ] Mobile responsiveness tested
- [ ] Accessibility compliance verified

### Test Quality
- [ ] Tests are readable and maintainable
- [ ] Mocks are minimal and focused
- [ ] Test data is realistic
- [ ] Assertions are specific
- [ ] Tests run reliably

### Coverage Requirements
- [ ] Overall coverage > 80%
- [ ] Component coverage > 85%
- [ ] Utility coverage > 90%
- [ ] Critical paths 100% covered

### Code Comment Policy

**IMPORTANT: NO UNNECESSARY COMMENTS**

- Code should be self-documenting through clear naming
- Only add comments for complex business logic or non-obvious behavior
