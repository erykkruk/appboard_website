# PR Command

## Usage
`/pr` — Create a structured Pull Request for AppBoard Website

## Steps

1. **Analyze all commits** on the branch vs main:
   ```bash
   git log main..HEAD --oneline
   git diff main...HEAD --stat
   ```

2. **Create PR** with template:
   ```
   ## Summary
   [1-3 bullet points describing what changed and why]

   ## Changes
   - [List of specific changes]

   ## SEO Impact
   - [Any metadata, schema, or content changes affecting SEO]
   - [New pages added to sitemap? Y/N]
   - [Schema markup updated? Y/N]

   ## Testing
   - [ ] Build passes (`bun run build`)
   - [ ] Lint passes (`bun run lint`)
   - [ ] Responsive design verified (mobile, tablet, desktop)
   - [ ] Accessibility checked (keyboard nav, ARIA, contrast)
   - [ ] SEO metadata verified (title, description, OG)

   ## Screenshots
   [Mobile and desktop screenshots if UI changes]
   ```

3. **Push and create PR**:
   ```bash
   git push -u origin $(git branch --show-current)
   gh pr create --title "..." --body "..."
   ```

4. **Rules**:
   - PR title follows conventional commit format
   - Description in English
   - Always include SEO Impact section (this is a marketing website)
   - NO Co-Authored-By
