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
    model="gpt-image-1",
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
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment

COLOR PALETTE (match the reference):
- Background: Site background (#0C0C0E) - MUST MATCH EXACTLY for seamless blend
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: {BRAND_ACCENT} for select highlights (10-15% of elements)

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference.
```

---

## Brand Subject Matter Prompts

### ZYN (Nicotine Pouches)
**Accent Color**: #6B46C1 (Purple)

```
SUBJECT MATTER - Zyn Brand Identity (Category Creator in Nicotine Pouches):

Central focal point: A stylized POUCH or CAN shape at center - clean, modern, geometric. The can radiates energy lines outward showing category dominance.

Upper area: Crown or leadership symbol above the can representing market leadership. Small icons of lifestyle elements (gym weights, laptop, coffee cup) floating around representing usage occasions.

Middle elements: Network connections radiating outward from the can to reach different user silhouettes. Manufacturing/production elements (factory, conveyor belts) integrated into the background. Lightning bolt energy symbols showing nicotine delivery.

Lower elements: Laboratory/science symbols representing tobacco-free innovation. Swedish flag or Nordic design elements (Swedish heritage). Clean, premium aesthetic throughout.

Around the edges: Small social/cultural icons (podcasts, finance graphs, fitness symbols) representing the "Zynfluencer" culture. Subtle regulatory warning symbol partially visible (nod to controversy). Stars and success indicators.

Style notes:
- Modern, tech-forward aesthetic (like a premium tech product)
- Clean geometric forms
- No skulls, no tequila imagery - this is a health-conscious nicotine product
- Convey: innovation, premium, category leadership, cultural phenomenon

The feeling should be: modern category pioneer, premium innovation, dominant market leader, cultural phenomenon, clean and elevated
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

Central focal point: Medical/pharmaceutical innovation symbol - could be stylized molecule, medical cross, or transformation symbol

Upper area: Scientific/laboratory elements (beakers, molecules, DNA helix), innovation symbols

Middle elements: Human digestive system (stylized), weight/scale transformation, medical breakthrough indicators. Pill/capsule shapes.

Lower elements: Clinical/research foundation elements, pharmaceutical precision symbols, Boehringer Ingelheim heritage nods

Around the edges: Medical icons, patient transformation journey, wellness indicators

Style notes:
- Medical innovation aesthetic
- Scientific precision meets hopeful transformation
- No food imagery - this is pharmaceutical
- Convey: breakthrough science, transformation potential, clinical rigor

The feeling should be: medical innovation, transformation hope, scientific breakthrough, patient-centered design
```

### CAVA (Fast Casual Mediterranean)
**Accent Color**: #FFD700 (Gold)

```
SUBJECT MATTER - CAVA Brand Identity (Fast Casual Mediterranean / USA):

Central focal point: A stylized Mediterranean BOWL or PITA at center - clean, modern, geometric. The bowl radiates energy lines outward showing category ownership.

Upper area: Crown or leadership symbol above the bowl representing category leadership. Small icons of Mediterranean ingredients (olives, herbs, chickpeas, tomatoes) floating around representing the cuisine. Health/wellness symbols (heart, leaf).

Middle elements: Greek key pattern borders integrated throughout. Fresh ingredients visualized: feta cubes, cucumber slices, olive branches, herb sprigs (rosemary, parsley). Grain/wheat stalks. Lemon/citrus slices. The customization concept shown through flowing assembly lines.

Lower elements: Mediterranean heritage symbols - Greek columns, amphora shapes, olive trees. The Mediterranean sea waves. Authentic craftsmanship symbols.

Around the edges: Lifestyle icons (gym, health, vitality) representing the wellness positioning. Small location pins suggesting expansion. Stars and freshness indicators. Bowl assembly stations.

Style notes:
- Fresh, modern, health-conscious aesthetic
- Clean geometric forms balanced with organic food elements
- No skulls, no tequila imagery - this is Mediterranean fast-casual
- Convey: category ownership, Mediterranean authenticity, fresh customization, wellness

The feeling should be: Mediterranean category definer, fresh and healthy, customizable experience, Greek heritage with modern execution
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

- [ ] Generated using `images.edit` with Espolon as style reference
- [ ] Uses BASE_STYLE prompt verbatim
- [ ] Brand accent color specified (10-15% of elements)
- [ ] Dark charcoal background (#141418)
- [ ] Off-white cream lines (#EDE8DF)
- [ ] Bold confident strokes (matches Espolon weight)
- [ ] Dense decorative elements filling space
- [ ] Corner flourishes present
- [ ] Category-appropriate subject matter
- [ ] No text in image
