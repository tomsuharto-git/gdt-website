# GDT Cover Image Standards

## GOLDEN RULE: NO TEXT IN IMAGES

**ABSOLUTE REQUIREMENT**: Never include ANY text, words, letters, numbers, labels, percentages, or typography in generated images. This is inviolable.

- NO text of any kind
- NO numbers (33%, $2.9M, etc.)
- NO labels or captions
- NO words (even stylized)
- NO taglines or slogans

All information must be communicated through VISUAL SYMBOLS ONLY.

---

## Generation Method: Style Transfer via images.edit

**CRITICAL**: All GDT cover images are generated using `images.edit` with **Espolon as the style reference**. This ensures consistent line weight, density, and visual language across all brands.

### Technical Implementation

```python
# Use images.edit, NOT images.generate
response = client.images.edit(
    model="gpt-image-1.5",
    image=open("espolon-cover.png", "rb"),  # STYLE REFERENCE
    prompt=BASE_STYLE + BRAND_SUBJECT_MATTER,
    size="1024x1024"
)
```

---

## BASE_STYLE Prompt (Immutable)

```
Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same dark charcoal background
- Same off-white cream linework

COMPOSITION - CRITICAL:
- KEEP IT SIMPLE - use 8-12 well-spaced large icons, NOT dozens of tiny scattered elements
- Large clear CENTRAL FOCAL POINT with generous space around it
- Elements should be BOLD and CHUNKY, not thin and intricate
- Plenty of BREATHING ROOM between elements - no visual clutter
- Simple corner flourishes only - don't fill edges with many small icons

COLOR PALETTE (match the reference):
- Background: Site background (#0C0C0E for cover, #141418 for growth summary)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: {BRAND_ACCENT} for select highlights (10-15% of elements)

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight and style as the reference. Match the CLEAN, SIMPLE aesthetic of CAVA and Ripple examples.
```

---

## Brand Subject Matter Prompts

### ZYN (Nicotine Pouches)
**Accent Color**: #6B46C1 (Purple)

```
SUBJECT MATTER - Zyn Brand Identity (Category Creator in Nicotine Pouches):

SIMPLE COMPOSITION with only these key elements:

CENTER (large, prominent - ~30% of composition):
- Bold CAN shape with radiating lines - the main focal point
- Clean, modern, geometric

SURROUNDING (well-spaced, 6-8 icons total):
- One CROWN symbol (market leadership)
- One LIGHTNING BOLT (energy/nicotine)
- One LABORATORY BEAKER (tobacco-free innovation)
- One NORDIC/SWEDISH design element
- Simple geometric flourishes in corners

DO NOT INCLUDE:
- Multiple small lifestyle icons (gym, laptop, coffee)
- Factory/production elements
- Network diagrams with user silhouettes
- Podcast/finance/fitness symbols scattered around
- Edge-to-edge social/cultural icons

The feeling should be: clean category pioneer, premium innovation, elevated aesthetic
```

### Espolón (Premium Tequila)
**Accent Color**: #E85D04 (Orange/Red)
**Note**: This is the MASTER style reference. Other images copy its visual style.

```
SUBJECT MATTER - Espolón Tequila:

Central focal point: Day of the Dead skull (calavera) - bold, decorated, celebratory

Upper area: Agave plants radiating outward, Mexican folk art elements

Middle elements: Tequila bottles, shot glasses, lime/citrus slices, Mexican cultural symbols

Lower elements: Agave fields, distillery elements, Mexican heritage imagery

Around the edges: Stars, diamonds, celebration elements, border flourishes

Style notes:
- Mexican folk art meets modern design
- Day of the Dead aesthetic
- Bold, celebratory, cultural
```

### Survodutide (GLP-1 Pharma)
**Accent Color**: #FF69B4 (Pink)

```
SUBJECT MATTER - Survodutide (GLP-1/Glucagon Dual Agonist Pharmaceutical):

SIMPLE COMPOSITION with only these key elements:

CENTER (large, prominent - ~30% of composition):
- Bold MOLECULE or TRANSFORMATION symbol - the main focal point
- Clean, modern, scientific aesthetic

SURROUNDING (well-spaced, 6-8 icons total):
- One DNA HELIX symbol (innovation)
- One SCALE/TRANSFORMATION indicator
- One MEDICAL CROSS or shield
- One BEAKER/LABORATORY element
- Simple geometric flourishes in corners

DO NOT INCLUDE:
- Complex digestive system diagrams
- Multiple pill/capsule shapes
- Many scattered medical icons
- Edge-to-edge wellness indicators
- Patient journey timelines

The feeling should be: clean medical innovation, scientific breakthrough, transformation hope
```

### CAVA (Fast Casual Mediterranean)
**Accent Color**: #FFD700 (Gold)

```
SUBJECT MATTER - CAVA Brand Identity (Fast Casual Mediterranean / USA):

SIMPLE COMPOSITION with only these key elements:

CENTER (large, prominent - ~30% of composition):
- Bold BOWL shape with radiating lines - the main focal point
- Clean, modern, geometric

SURROUNDING (well-spaced, 6-8 icons total):
- One OLIVE BRANCH symbol
- One WHEAT/GRAIN stalk
- One LEMON slice
- One HEART/LEAF health symbol
- Simple Greek key pattern in corners only

DO NOT INCLUDE:
- Dozens of ingredient icons floating everywhere
- Multiple assembly line elements
- Many small location pins
- Greek columns AND amphora AND olive trees (pick one)
- Edge-to-edge decoration

The feeling should be: clean, fresh, healthy - category definer with breathing room
```

---

## Generation Script

Use the existing script: `scripts/generate_brand_assets.py`

```bash
# Generate cover from Agent 10 output
python scripts/generate_brand_assets.py --from-json outputs/brand-usa/agent-10-output.json

# Generate cover manually
python scripts/generate_brand_assets.py \
  --brand cava \
  --name "CAVA" \
  --category "Fast Casual Mediterranean" \
  --market "USA" \
  --profile position \
  --color "#FFD700" \
  --cover-only
```

---

## Quality Checklist

### Visual Style
- [ ] Generated using `images.edit` with Espolon as style reference
- [ ] Uses BASE_STYLE prompt verbatim
- [ ] Brand accent color specified (10-15% of elements)
- [ ] Dark charcoal background (#0C0C0E for cover, #141418 for growth summary)
- [ ] Off-white cream lines (#EDE8DF)
- [ ] Bold confident strokes (matches Espolon weight)

### Composition (Critical)
- [ ] **8-12 total icons maximum** - not dozens of scattered elements
- [ ] **Clear central focal point** taking ~30% of composition
- [ ] **Breathing room** between elements - can see background clearly
- [ ] **Simple corner flourishes** - not edge-to-edge clutter
- [ ] Icons are BOLD and CHUNKY, not thin and intricate
- [ ] Matches clean aesthetic of CAVA and Ripple examples

### Content
- [ ] Category-appropriate subject matter
- [ ] No text, words, numbers, or labels in image
- [ ] Post-processed with `fix_image_background.py` for seamless blend

---

## Common Mistakes to Avoid

### ❌ Too Busy / Cluttered
- Dozens of tiny icons scattered everywhere
- Multiple small vehicles, ingredients, or symbols
- Edge-to-edge decoration with no breathing room
- Intricate, thin linework filling space

### ✅ Clean / Effective
- 8-12 well-spaced, bold icons
- Clear hierarchy with central focal point
- Generous negative space between elements
- Simple corner flourishes only
- Bold, chunky line weight

### Reference Examples
- **Good**: CAVA, Ripple - clean composition, breathing room, clear focal point
- **Bad**: Early Geico attempts - too many elements, no breathing room, cluttered

### "DO NOT INCLUDE" List Pattern
When writing brand prompts, always include explicit exclusions:
```
DO NOT INCLUDE:
- Multiple small versions of same element (cars, bottles, etc.)
- Dozens of scattered icons
- Complex overlapping elements
- Intricate decorative patterns
- Edge-to-edge clutter
```
