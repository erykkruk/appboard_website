# Contributing to AppBoard Website

Thanks for your interest in contributing to AppBoard! This is the marketing
website (Next.js 16, React 19, Tailwind CSS 4) for the source-available,
self-hostable ASO (App Store Optimization) tool. Contributions of all kinds are
welcome — bug fixes, content, design, SEO, and docs.

AppBoard is **source-available and free for personal & non-commercial use under
the [PolyForm Noncommercial License 1.0.0](LICENSE)**. Note that this is **not**
an OSI-approved open-source license — it restricts commercial use. By
contributing, you agree that your contributions will be licensed under the same
PolyForm Noncommercial License 1.0.0.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By
participating, you are expected to uphold it. Please report unacceptable
behavior to conduct@appboard.dev.

## Prerequisites

- [Bun](https://bun.sh/) `>= 1.3`

## Local Setup

```bash
# 1. Fork and clone the repo, then:
bun install

# 2. Start the dev server
bun dev
```

The website runs at `http://localhost:6700`.

## Before You Open a PR

Run the local checks and make sure everything passes:

```bash
bun run lint     # ESLint
bun run build    # production build (catches build-time and SEO issues)
```

- Keep changes focused — one logical change per PR.
- SEO matters here: verify metadata, structured data, and Core Web Vitals are
  not regressed by your change.

## Branch Model

- **`develop`** is the integration branch. Base your work on it and open PRs
  **into `develop`**.
- **`main`** is the released/deployed branch. Do not target it directly.

```bash
git checkout develop
git pull
git checkout -b feat/my-change
```

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add pricing comparison section
fix: correct Open Graph image dimensions
chore: bump next to 16.2.4
docs: update README
```

Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`.

## Pull Requests

1. Ensure lint and the build pass locally.
2. Push your branch and open a PR **targeting `develop`**.
3. Fill out the PR template (Summary, Changes, Related issue, Testing, Checklist).
4. Use a Conventional Commits style PR title.

### Review Expectations

- Every PR requires review and approval before it can be merged — direct pushes
  to `develop`/`main` are not accepted.
- A maintainer will review for content accuracy, design consistency, SEO, and
  performance.
- Be responsive to review feedback; keep the discussion constructive.

## Security

Please do not report security vulnerabilities via public issues. See
[SECURITY.md](SECURITY.md) for responsible disclosure.
