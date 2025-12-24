# GDT Website - Growth Diagnosis Tool Presentation Layer

A Next.js website that presents GDT (Growth Diagnosis Tool) analysis results in a magazine-style editorial format. Currently featuring Espolón Tequila USA analysis.

**Repository**: https://github.com/tomsuharto-git/gdt-website

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

---

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.1 with Turbopack
- **Styling**: Tailwind CSS with CSS custom properties
- **Typography**: Space Grotesk (display), IBM Plex Sans (body), JetBrains Mono (code)
- **Icons**: Lucide React

### Data Flow

```
GDT Analysis Outputs (markdown)     Website Data Files         Page Components
─────────────────────────────────   ─────────────────────      ─────────────────
outputs/espolon-tequila-usa-*/      src/data/espolon.ts   →    src/app/page.tsx
  ├── a1-brand-positioning.md           ↑
  ├── a2-pricing-power.md          Manual sync
  ├── a3-business-growth.md        (copy insights)
  └── ...
```

**Important**: The website pulls from TypeScript data files (`src/data/espolon.ts`), not directly from the GDT output markdown files. When updating analysis content, update both the source markdown AND the website data file.

---

## Project Structure

```
gdt-website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page - all sections
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── globals.css       # Design system CSS variables
│   ├── data/
│   │   └── espolon.ts        # Espolón analysis data
│   └── lib/
│       └── types.ts          # TypeScript interfaces
├── public/
│   └── espolon-hero.png      # Hero illustration
└── README.md
```

---

## Design System

### CSS Custom Properties (globals.css)

```css
/* Brand accent - changes per analysis */
--gdt-accent: #E54B7B;           /* Espolón pink */

/* Score tier colors */
--gdt-score-high: #22C55E;       /* ≥7.0 - green */
--gdt-score-mid: #EAB308;        /* 5.0-6.9 - yellow */
--gdt-score-low: #EF4444;        /* <5.0 - red */

/* Background hierarchy */
--gdt-bg-primary: #0C0C0E;       /* Page background */
--gdt-bg-secondary: #141418;     /* Elevated sections */
--gdt-bg-card: #18181C;          /* Card backgrounds */
```

### Score Tier System

| Score Range | Tier Badge | Color |
|-------------|------------|-------|
| ≥ 7.0 | High | Green |
| 5.0 - 6.9 | Mid | Yellow |
| < 5.0 | Low | Red |

Used for accent bars, score displays, and tier badges throughout.

---

## Key Layout Patterns

### Diagnostic Overview - 3-Column Grid

The component cards display in 3 columns (Section A, B, C) with consistent row heights:

```tsx
<div className="grid gap-6 md:grid-cols-3" style={{ alignItems: 'stretch' }}>
  {['A', 'B', 'C'].map((sectionId) => (
    <div className="gdt-card flex flex-col">
      {sectionComponents.map((component) => (
        <div
          className="grid grid-cols-[4px_1fr]"
          style={{ height: '220px' }}  // Fixed height for consistent rows
        >
          {/* Accent bar - full height via grid */}
          <div style={{ backgroundColor: getScoreColor(component.score) }} />

          {/* Card content */}
          <Link href={`#${component.id}`} className="flex flex-col p-5">
            {/* ... */}
          </Link>
        </div>
      ))}
    </div>
  ))}
</div>
```

**Key decisions**:
- **Fixed 220px height**: Ensures consistent row heights across all three columns
- **2-column grid (`grid-cols-[4px_1fr]`)**: Accent bar naturally stretches to full height as a grid child
- **Score-based accent colors**: Left border colored by component score tier

### Component Cards

Each component displays:
- Score badge with tier color
- Tier label (e.g., "At-Category", "Value-Justified")
- Headline and subline from WSN data
- Arrow icon indicating clickable link

---

## Data Types

### GDTAnalysis (main data structure)

```typescript
interface GDTAnalysis {
  brand: BrandInfo;
  totalScore: number;
  growthProfile: GrowthProfile;
  sections: Section[];
  components: ComponentDetail[];
  growthBarrier: GrowthBarrier;
  growthSolution: GrowthSolution;
  growthSystem: GrowthSystem;
}
```

### Component WSN Structure

Each component includes WSN (What/So What/Now What) data:

```typescript
interface WSN {
  headline: string;      // Primary insight
  subline: string;       // Supporting context
  what: string;          // The observation
  evidence: string;      // Supporting data
  soWhat: string;        // Strategic implication
  nowWhat: string;       // Recommended action
}
```

---

## Recent Changes (2025-12-24)

### Component Deep Dives - Major Redesign
- **Header layout**: Icon + Component name on same line, score/pill on right
  - Icon in pink accent color (28px)
  - Component name in display font (text-4xl)
  - Score with tier pill aligned to right
  - Description below component name, indented to align under text (40px margin-left)
- **WSN headline styling**: Removed box/background, now styled like section headlines
  - Display font (text-2xl md:text-3xl)
  - Subline in base text below
- **What/So What/Now What**: Changed from stacked sections to 3-column card grid
  - Each card has pink uppercase label at top
  - Clean card layout matching Growth Solution cards
  - Evidence line conditionally rendered (only if content exists)

### Content Balancing
- **A1 WSN content tightened** (Option 3 - equal length cards):
  - **What**: "When asked what makes Espolón special beyond the bottle, most consumers shrug—there's no compelling story beyond aesthetics."
  - **So What**: "The brand sits uncomfortably between craft authenticity and mass premium, lacking Patron's luxury credibility or Casamigos' celebrity magnetism."
  - **Now What**: "Define what Espolón owns that competitors can't claim—a single compelling statement people can repeat."

### Component Descriptions Added
Each component now has a description explaining what it measures:
- **A1**: "Measures your brand's Meaningful Difference vs. competitors"
- **A2**: "Evaluates your ability to command premium prices"
- **A3**: "Assesses revenue and market share trajectory"
- **B1**: "Measures the depth of emotional bonds with consumers"
- **B2**: "Evaluates your brand's role in cultural conversations"
- **B3**: "Assesses quality and consistency of brand touchpoints"
- **C1**: "Measures recognizability of your brand assets"
- **C2**: "Evaluates your track record of meaningful innovation"
- **C3**: "Assesses external pressures requiring brand response"

### Terminology Update
- **"Customer Connection" → "Audience Connection"** throughout the site
- Updated subline: "Evaluates the strength of connection between your brand and audience"

### Spacing Refinements
- Card padding: p-8 → p-6
- Component header margin: mb-8 (more space between header and content)
- WSN content spacing: space-y-5
- Headline margin: mb-1

---

## Changes (2025-12-22)

### Layout Fixes
- **Consistent row heights**: Changed from flex-grow to fixed 220px height for predictable layout
- **Full-height accent bars**: Switched from border-left to 2-column grid (`grid-cols-[4px_1fr]`) so accent div stretches naturally
- **Growth Barrier cards**: 3-column card layout with red left border accent
  - Cards display bold headline + supporting evidence
  - No scores or GDT component IDs - purely supporting the barrier finding

### Content Updates
- **A3 headline fix**: Changed from "Stuck in a frustrating middle ground" to "Keeping pace with the pack while leaders pull away"
  - Previous headline echoed A1 (Brand Positioning) too closely
  - New headline reflects business performance relative to category average
  - Consistent with "At-Category" tier designation
- **Growth Barrier content rewritten**: Changed from GDT component references to freestanding supporting points
  - "No product evolution" instead of "Brand Innovation (C2)"
  - "Positioning void" instead of "Brand Positioning (A1)"
  - "Cultural invisibility" instead of "Cultural Relevance (B2)"

---

## Adding New Brand Analyses

1. Create new data file: `src/data/[brand].ts`
2. Follow the `GDTAnalysis` interface structure
3. Set brand-specific accent color in globals.css:
   ```css
   [data-brand="newbrand"] {
     --gdt-accent: #HEXCOLOR;
   }
   ```
4. Update page.tsx to import and use the new data

---

## Development Notes

- Dev server: `npm run dev` (runs on port 3000)
- Uses Next.js App Router
- Tailwind CSS v4 with `@import "tailwindcss"` syntax
- CSS variables provide theming flexibility for multi-brand support
