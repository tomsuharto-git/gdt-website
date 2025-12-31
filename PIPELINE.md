# GDT Output → Website Pipeline v2.0

Complete workflow for converting GDT analysis outputs into a production-ready website.

**Repository**: https://github.com/tomsuharto-git/gdt-website
**Production URL**: https://gdt-hub.vercel.app
**Vercel Project**: `gdt-hub` (auto-deploys on push to main)

---

## Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         GDT OUTPUT FOLDER                               │
│  ├── gdt-summary-output.json (required)                                 │
│  ├── a1-brand-positioning.md ... c3-disruption-urgency.md (9 files)    │
│  └── [optional: panel data, metadata]                                   │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    gdt_converter_v2.py                                  │
│  1. Parse JSON summary                                                  │
│  2. Extract WSN from markdown Summary sections                          │
│  3. Validate completeness (detect placeholders)                         │
│  4. Derive missing WSN from Rating Rationale                            │
│  5. Extract Deep Dive content (strengths, weaknesses, context)          │
│  6. Generate TypeScript data file                                       │
│  7. Generate validation report                                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       OUTPUT FILES                                      │
│  ├── src/data/[brand].ts (website data)                                 │
│  └── src/data/[brand]-conversion-report.md (validation report)          │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    MANUAL STEPS                                         │
│  1. Add brand images to public/                                         │
│  2. Add brand to src/data/index.ts registry                             │
│  3. Review conversion report, fix any issues                            │
│  4. npm run dev → verify locally                                        │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    GIT & DEPLOY                                         │
│  1. git add -A                                                          │
│  2. git commit -m "Add [brand] analysis"                                │
│  3. git push tomsuharto-git main                                        │
│  4. Vercel auto-deploys → https://gdt-hub.vercel.app                    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Quick Start

### Basic Conversion
```bash
cd gdt-website
python scripts/gdt_converter_v2.py ../outputs/[brand-folder]
```

### Full Conversion with Report
```bash
python scripts/gdt_converter_v2.py ../outputs/[brand-folder] \
  --accent-color "#E54B7B" \
  --output src/data/[brand].ts \
  --var-name [brandName] \
  --report
```

### Strict Mode (fail on incomplete)
```bash
python scripts/gdt_converter_v2.py ../outputs/[brand-folder] --strict
```

---

## Source File Requirements

### 1. Main JSON (Required)

**File:** `gdt-summary-output.json`

| Field | Purpose |
|-------|---------|
| `brand_name` | Brand display name |
| `market` | Target market (USA, etc.) |
| `category` | Product category |
| `total_score` | Overall GDT score (0-100) |
| `section_a/b/c` | Section scores and component data |
| `growth_profile` | Profile name, definition, implications |
| `growth_barrier` | Constraints and evidence |
| `growth_solution` | Unlocks and actions |
| `growth_system` | Products, outputs, critical path |

### 2. Component Markdown Files (Required - 9 files)

| File | Component |
|------|-----------|
| `a1-brand-positioning.md` | A1: Brand Positioning |
| `a2-pricing-power.md` | A2: Pricing Power |
| `a3-business-growth.md` | A3: Business Growth |
| `b1-emotional-connection.md` | B1: Emotional Connection |
| `b2-cultural-relevance.md` | B2: Cultural Relevance |
| `b3-brand-experience.md` | B3: Brand Experience |
| `c1-brand-distinctiveness.md` | C1: Brand Distinctiveness |
| `c2-brand-innovation.md` | C2: Brand Innovation |
| `c3-disruption-urgency.md` | C3: Disruption Urgency |

---

## Markdown Format Specification

Each component markdown file MUST follow this structure for complete extraction:

```markdown
# [ID]: [Component Name]
**Section:** [Section Name] | **Score:** [X.X]/10 | **Tier:** [Tier Name]

**Brand:** [Brand Name] | **Market:** [Market]

---

## Summary

**[Headline - the core finding in one sentence]**

*[Subline - supporting context or implication]*

**What:** [The observation - what we found in the research]

*Evidence: [Supporting data point or proof]*

**So What:** [Strategic implication - why this matters for the brand]

**Now What:** [Recommended action - what to do about it]

---

## Deep Dive

### Strengths

- [Strength 1 - full sentence with specific example]
- [Strength 2 - full sentence with specific example]
- [Strength 3 - full sentence with specific example]

### Weaknesses

- [Weakness 1 - full sentence with specific example]
- [Weakness 2 - full sentence with specific example]
- [Weakness 3 - full sentence with specific example]

### Competitive Context

[Paragraph describing competitive positioning - how brand compares to competitors]

### Rating Rationale

[Detailed paragraph explaining why this score was given, with evidence and comparison]

---

## Score Breakdown

| Dimension | Score |
|-----------|-------|
| [Metric 1] | [X.X] |
| [Metric 2] | [X.X] |
| [Metric 3] | [X.X] |

*Generated: [ISO timestamp]*
```

---

## WSN Content Extraction

### Priority 1: Summary Section

The converter first attempts to extract WSN from the `## Summary` section:

| Element | Markdown Format | Extraction Pattern |
|---------|-----------------|-------------------|
| Headline | `**Bold text on own line**` | First `**...**` after `## Summary` |
| Subline | `*Italic text on own line*` | First `*...*` not containing "Evidence" |
| What | `**What:** content` | Text after `**What:**` |
| Evidence | `*Evidence: content*` | Text inside `*Evidence:...*` |
| So What | `**So What:** content` | Text after `**So What:**` |
| Now What | `**Now What:** content` | Text after `**Now What:**` |

### Priority 2: Derivation from Rating Rationale

If Summary content is **incomplete or placeholder**, the converter derives WSN from other sections:

| WSN Field | Derivation Source |
|-----------|-------------------|
| Headline | First sentence of Rating Rationale (cleaned) |
| What | Observation-type sentences from Rationale |
| So What | Competitive Context or implication sentences |
| Now What | Action-oriented sentences from Rationale |
| Subline | Generated from tier descriptor |
| Evidence | Extracted metrics from Rationale |

### Placeholder Detection

These patterns are flagged as incomplete:
- "Assessment pending"
- "Assessment in progress"
- "In progress"
- "TBD" / "To be determined"
- "[Insert..."
- Content < 10 characters

---

## Extraction Field Mapping

### From JSON

| Source Field | Target Field | Automation |
|--------------|--------------|------------|
| `brand_name` | `brand.name` | 100% |
| `market` | `brand.market` | 100% |
| `category` | `brand.category` | 100% |
| `total_score` | `totalScore` | 100% |
| `growth_profile.name` | `growthProfile.name` | 100% |
| `growth_profile.definition` | `growthProfile.definition` | 100% |
| `section_a/b/c.components` | `sections[].components` | 100% |
| `growth_barrier` | `growthBarrier` | 100% |
| `growth_solution` | `growthSolution` | 100% |
| `growth_system` | `growthSystem` | 100% |

### From Markdown

| Source | Target | Automation |
|--------|--------|------------|
| Header: `**Tier:**` | `component.tier` | 95% |
| Summary: bold line | `wsn.headline` | 90% |
| Summary: italic line | `wsn.subline` | 90% |
| Summary: `**What:**` | `wsn.what` | 90% |
| Summary: `*Evidence:*` | `wsn.evidence` | 90% |
| Summary: `**So What:**` | `wsn.soWhat` | 90% |
| Summary: `**Now What:**` | `wsn.nowWhat` | 90% |
| Deep Dive: `### Strengths` bullets | `component.strengths` | 95% |
| Deep Dive: `### Weaknesses` bullets | `component.weaknesses` | 95% |
| Deep Dive: `### Competitive Context` | `component.competitiveContext` | 95% |
| Deep Dive: `### Rating Rationale` | Derivation source | 95% |
| Score Breakdown: table rows | `component.scoreBreakdown` | 95% |

### Manual Input

| Field | Source | Notes |
|-------|--------|-------|
| `brand.accentColor` | CLI `--accent-color` | Hex color for brand |
| Cover image | `public/[brand-id]-cover.png` | Manual upload |
| Growth profile icon | `public/growth-systems/[profile].png` | Based on profile name |

---

## Validation Report

The converter generates a validation report (`--report` flag) showing:

### Summary Table
```
| Status | Count |
|--------|-------|
| Complete | 7/9 |
| Derived from Rationale | 1/9 |
| Incomplete | 1/9 |
```

### Component Status
```
| ID | Name | WSN | Strengths | Weaknesses | Status |
|----|------|-----|-----------|------------|--------|
| A1 | Brand Positioning | ✅ | ✅ | ✅ | COMPLETE |
| B1 | Emotional Connection | ⚠️ | ✅ | ✅ | DERIVED |
| C2 | Brand Innovation | ❌ | ❌ | ✅ | INCOMPLETE |
```

### Status Definitions
- **COMPLETE**: All WSN fields extracted from Summary, strengths and weaknesses present
- **DERIVED**: WSN partially/fully derived from Rating Rationale (yellow flag)
- **INCOMPLETE**: Missing required content that couldn't be derived (needs attention)
- **PARTIAL**: Some content present but not all requirements met

---

## Post-Conversion Checklist

### Required Steps

```bash
# 1. Run converter with report
python scripts/gdt_converter_v2.py ../outputs/[brand] --report

# 2. Review the conversion report
cat src/data/[brand]-conversion-report.md

# 3. Add brand images
# - public/[brand-id]-cover.png (hero image, ~800x800)
# - public/growth-systems/[profile-id].png (profile icon, ~400x400)

# 4. Add brand to data registry
# Edit src/data/index.ts:
#   import { [brandName]Analysis } from './[brand]';
#   export const brands = { ..., [brandId]: [brandName]Analysis };

# 5. Test locally
npm run dev
# Visit http://localhost:3000/[brand-id]

# 6. Commit and push (Vercel auto-deploys)
git add -A
git commit -m "Add [brand] analysis to GDT Hub"
git push tomsuharto-git main

# 7. Verify deployment
# Wait ~30s, then visit https://gdt-hub.vercel.app/[brand-id]
```

### Handling Incomplete Components

If the report shows INCOMPLETE or DERIVED components:

1. **Option A: Regenerate GDT output**
   - Re-run the GDT agent for that component
   - Ensure Summary section is fully populated
   - Re-run converter

2. **Option B: Derive from existing content**
   - The converter already attempts this automatically
   - Check if derived content is acceptable
   - If not, manual editing may be needed

3. **Option C: Manual content creation**
   - Write WSN content based on Rating Rationale
   - Add to the source markdown file
   - Re-run converter

---

## Troubleshooting

### "WSN headline is empty"
**Cause:** No bold text on its own line in Summary section
**Fix:** Ensure format is `**Headline text here**` on its own line

### "WSN derived from rationale" warning
**Cause:** Summary section had placeholder content
**Fix:** Review derived content, regenerate if unacceptable

### "Strengths/weaknesses empty"
**Cause:** Bullets don't use `- ` prefix
**Fix:** Use `- Item text` format (dash + space)

### "Score breakdown missing"
**Cause:** Table format incorrect
**Fix:** Use `| Name | Score |` format with proper separators

### "Component file missing"
**Cause:** Markdown file not found in output folder
**Fix:** Ensure all 9 component files exist with correct names

---

## Git & Deployment

### Repository Setup

The gdt-website is connected to GitHub and Vercel for automatic deployment:

- **GitHub**: https://github.com/tomsuharto-git/gdt-website
- **Vercel Project**: `gdt-hub`
- **Production URL**: https://gdt-hub.vercel.app

### Important Git Configuration

**Always push to `tomsuharto-git` remote** (not `origin`):

```bash
# Check remotes
git remote -v

# Push changes
git push tomsuharto-git main
```

### Deployment Workflow

1. **Make changes** (add brand data, images, etc.)
2. **Test locally** with `npm run dev`
3. **Commit changes**:
   ```bash
   git add -A
   git commit -m "Add [brand] analysis to GDT Hub"
   ```
4. **Push to GitHub**:
   ```bash
   git push tomsuharto-git main
   ```
5. **Vercel auto-deploys** within ~30 seconds
6. **Verify** at https://gdt-hub.vercel.app/[brand-id]

### Vercel CLI Commands

```bash
# Check deployment status
npx vercel ls

# Force production deploy (if needed)
npx vercel --prod

# View logs
npx vercel logs gdt-hub
```

---

## Future Automation TODO

To make this 100% turnkey:

1. **Auto-generate cover art**
   - Use DALL-E/Midjourney API with brand name + category
   - Generate at conversion time

2. **Pre-generated growth profile images**
   - Create all 9 profile illustrations upfront
   - Copy from template library

3. ~~**Dynamic routing**~~ ✅ DONE
   - ~~Support `/[brand]` routes without code changes~~
   - Implemented via `[brand]/page.tsx`

4. ~~**CI/CD pipeline**~~ ✅ DONE (Partial)
   - Vercel auto-deploys on GitHub push
   - TODO: GitHub Action for converter automation

5. **GDT agent output validation**
   - Add validation step to GDT agents
   - Ensure complete output before saving

6. **Agent 12 Integration**
   - Website Generator agent runs full pipeline
   - Converter → Images → Registry → Git → Deploy

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2025-12-22 | Initial converter |
| v2.0 | 2025-12-30 | Added validation, WSN derivation, reporting |

---

*Last Updated: 2025-12-30*
