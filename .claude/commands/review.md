# Review Command

## Usage
`/review` — Route changed files to relevant review agents

## Steps

1. **Identify changed files**:
   ```bash
   git diff --name-only HEAD~1
   # or for unstaged changes:
   git diff --name-only
   ```

2. **Route to agents** based on file types:

   | File Pattern | Agents to Run |
   |-------------|---------------|
   | `src/app/**/page.tsx` | architecture-review + seo-technical-review + seo-content-review |
   | `src/app/**/layout.tsx` | architecture-review + seo-technical-review |
   | `src/components/sections/**` | architecture-review + code-review + seo-content-review |
   | `src/components/ui/**` | code-review + architecture-review |
   | `src/components/layout/**` | code-review + architecture-review |
   | `src/lib/**` | code-review |
   | `src/lib/schema.ts` | seo-technical-review |
   | `src/lib/seo.ts` | seo-technical-review |
   | `src/app/sitemap*` | seo-technical-review |
   | `src/app/robots*` | seo-technical-review + seo-ai-visibility-review |
   | `middleware.ts` | security-review + seo-technical-review |
   | `next.config.*` | security-review + performance-review |
   | `*.test.*` | testing-review |
   | Content/copy changes | seo-content-review + seo-ai-visibility-review |

3. **Run each relevant agent** by reading its `.claude/agents/[name].md` and applying the checklist to the changed files.

4. **Output combined review**:
   ```markdown
   ## Review Summary — [branch/PR]

   ### Agents Run
   - [list of agents applied]

   ### Passes
   - [items that pass]

   ### Issues Found
   - [Agent: issue] -> [fix]

   ### Blockers
   - [critical issues]
   ```
