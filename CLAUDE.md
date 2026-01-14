# GDT Website - CLAUDE.md

## Hecho Ecosystem

This project is part of the **Hecho Strategy Hub** ecosystem.
- **Master documentation**: `/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/hecho-hub/CLAUDE.md`
- **Central Hub**: https://hecho-hub.vercel.app
- **This site**: https://gdt-hub.vercel.app (purple accent `#6B46C1`)

See master documentation for design system, colors, and cross-project patterns.

---

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

### GOLDEN RULES
1. **NO TEXT** - Never include words, numbers, labels, or typography in images
2. **PERFECT BLEND** - Background must match website exactly (#141418 for growth-systems)

### Image Locations
- **Cover images**: `public/{brand}-cover.png` (1024x1024)
- **Growth Summary images**: `public/growth-systems/{image-name}.png` (1024x1024)

### Generation Method: Style Transfer
All images use `images.edit` with **Espolon as the style reference**:
```python
response = client.images.edit(
    model="gpt-image-1.5",
    image=open("espolon-cover.png", "rb"),  # STYLE REFERENCE
    prompt=BASE_STYLE + BRAND_SUBJECT_MATTER,
    size="1024x1024"
)
```

### Post-Processing for Perfect Blend
AI-generated images never hit exact hex codes. **Always post-process**:
```bash
python scripts/fix_image_background.py
```

This replaces all dark pixels (<35 RGB) with exact **#141418** to match `gdt-bg-secondary`.

### Background Colors
| Location | CSS Class | Hex Color |
|----------|-----------|-----------|
| Page background | `gdt-bg-primary` | #0C0C0E |
| Growth Summary section | `gdt-bg-secondary` | #141418 |
| Cards | `gdt-bg-card` | #18181C |

Growth Summary images display in `gdt-bg-secondary` sections, so they need #141418 backgrounds.

### Adding a Growth Summary Image
1. Generate with `images.edit` using Espolon style reference
2. Run `python scripts/fix_image_background.py {path}` to fix background
3. Add `image: '{filename}.png'` to brand's `growthSummary` in data file
4. Deploy

See `IMAGE-STANDARDS.md` for full prompt templates.

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

## Growth Summary Format (Standard)

**All new brands must use `growthSummary`** - not `growthProfile` (legacy).

```typescript
growthSummary: {
  headline: 'Strategic headline - the core insight',
  summary: 'What the brand has built and where it stands',
  paradox: 'The core tension or challenge',
  path: 'What needs to happen next',
  sequence: 'Position → Unlock → Connect',
  image: '{brand}-growth-summary.png'  // Optional - uses fallback if omitted
}
```

**Legacy**: Espolon uses `growthProfile` - do not change. New brands use `growthSummary`.

## Type Compatibility

The `src/lib/types.ts` supports both formats with optional fields:
- Standard fields required for all brands
- `growthSummary` for new brands (ZYN, CAVA, future)
- `growthProfile` for legacy brands (Espolon only)
- `growthFactors` only for Survodutide

## Tech Stack

- Next.js 16.1.1 with Turbopack
- TypeScript
- Tailwind CSS
- Static generation (SSG)
