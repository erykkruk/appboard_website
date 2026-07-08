# Quality Check Command

## Usage
`/quality-check` — Run full quality pipeline for AppBoard Website

## Steps

Run all checks sequentially. Stop on first failure.

### 1. Lint
```bash
cd /Users/erykkruk/Development/Github/AppBoard/appboard_website
bun run lint
```

### 2. TypeScript Check
```bash
cd /Users/erykkruk/Development/Github/AppBoard/appboard_website
bunx tsc --noEmit
```

### 3. Build
```bash
cd /Users/erykkruk/Development/Github/AppBoard/appboard_website
bun run build
```

### 4. Tests (if configured)
```bash
cd /Users/erykkruk/Development/Github/AppBoard/appboard_website
bun test
```

## Output format

```markdown
## Quality Check Results

| Step | Status | Details |
|------|--------|---------|
| Lint | PASS/FAIL | [errors if any] |
| TypeScript | PASS/FAIL | [errors if any] |
| Build | PASS/FAIL | [errors if any] |
| Tests | PASS/FAIL/SKIP | [errors if any] |

### Overall: PASS / FAIL
[summary of issues if any]
```

## Rules

- ALL steps must PASS before merging
- Fix issues in order (lint -> types -> build -> tests)
- If a step fails, report the error and stop
