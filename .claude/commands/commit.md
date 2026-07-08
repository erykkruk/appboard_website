# Commit Command

## Usage
`/commit` — Create a conventional commit for AppBoard Website

## Steps

1. **Run quality checks**:
   ```bash
   cd /Users/erykkruk/Development/Github/AppBoard/appboard_website
   bun run lint
   bun run build
   ```

2. **Check git status**:
   ```bash
   git status
   git diff --staged
   ```

3. **Analyze changes** and determine commit type:
   - `feat:` — new feature, page, section, component
   - `fix:` — bug fix
   - `refactor:` — code restructuring without behavior change
   - `style:` — styling changes (CSS, Tailwind)
   - `docs:` — documentation changes
   - `chore:` — dependency updates, config changes
   - `perf:` — performance improvements
   - `test:` — adding or fixing tests
   - `seo:` — SEO improvements (metadata, schema, content)

4. **Create commit** with conventional format:
   ```
   type(scope): description

   [optional body with details]
   ```

   Scope examples: `landing`, `pricing`, `features`, `blog`, `seo`, `header`, `footer`, `ui`

5. **Rules**:
   - Message in English
   - Max 72 chars for first line
   - NO Co-Authored-By
   - Imperative mood ("add", "fix", "update", not "added", "fixed", "updated")
