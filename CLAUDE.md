# GDT Website - CLAUDE.md

## Overview

This is the Next.js frontend for displaying GDT (Growth Diagnosis Tool) analysis results. It presents strategic brand analyses in a password-protected, branded interface.

## Data Formats

**CRITICAL**: There are two GDT data formats. Use the correct one.

### Standard GDT Format (DEFAULT)
- **Brands**: ZYN, Espolon, CAVA (and all future brands)
- **Source**: Agent 10 output
- **Files**: `src/data/zyn.ts`, `src/data/espolon.ts`, `src/data/cava.ts`

### New Market Entrant Format (EXCEPTION)
- **Brands**: Survodutide only
- **Use case**: Pre-launch brands with no market presence
- **Additional fields**: `growthFactors` section with opportunities/challenges
- **File**: `src/data/survodutide.ts`

**Rule**: Always use Standard GDT Format unless specifically working on a pre-launch pharmaceutical or new market entrant product.

## Brand Data Files

Each brand has a TypeScript file in `src/data/`:

```
src/data/
├── index.ts        # Brand registry and routing
├── zyn.ts          # Standard format
├── espolon.ts      # Standard format
├── cava.ts         # Standard format
└── survodutide.ts  # New Market Entrant format (exception)
```

## Password Protection

All brands require passwords. Format: `{brand}2026`
- CAVA: `cava2026`
- ZYN: `zyn2026`
- Espolon: `espolon2026`
- Survodutide: `survo2026`

## Images

Cover images go in `public/`:
- Format: `{brand-id}-cover.png` (e.g., `cava-cover.png`)
- Size: 1536x1024 (landscape)
- Generated via GPT-Image-1.5

Optional summary images:
- Format: `{brand-id}-summary.png`
- Size: 1024x1024 (square)

## Deployment

- **Host**: Vercel
- **URL**: https://gdt-hub.vercel.app
- **Auto-deploy**: Pushes to GitHub trigger Vercel builds
- **Alias**: After each deployment, update alias:
  ```bash
  npx vercel alias [deployment-url] gdt-hub.vercel.app
  ```

## Adding a New Brand

1. Create `src/data/{brand}.ts` using **Standard GDT Format**
2. Add password field: `password: '{brand}2026'`
3. Register in `src/data/index.ts`
4. Add cover image: `public/{brand}-cover.png`
5. Build, commit, push, update alias

## Type Compatibility

The `src/lib/types.ts` supports both formats with optional fields:
- Standard fields required for all brands
- Optional legacy fields for backward compatibility
- `growthFactors` only for Survodutide

## Tech Stack

- Next.js 16.1.1 with Turbopack
- TypeScript
- Tailwind CSS
- Static generation (SSG)
