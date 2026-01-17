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
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment
- Same dark charcoal background
- Same off-white cream linework

COLOR PALETTE (match the reference):
- Background: Dark charcoal (#0C0C0E for cover, #141418 for growth summary)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: {BRAND_ACCENT} for select highlights (10-15% of elements)

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference. Square format.
```

---

## Brand Subject Matter Prompt Structure

**CRITICAL**: Follow this layered structure for rich, cohesive compositions like CAVA and Ripple:

```
SUBJECT MATTER - [Brand] ([Category]):

Central focal point: [Main visual element] - bold, decorated, prominent

Upper area: [2-4 elements related to brand theme]

Middle elements:
- [Element 1 with description]
- [Element 2 with description]
- [Element 3 with description]
- [Connection/flow elements between icons]

Lower elements:
- [Foundation/heritage elements]
- [Supporting symbols]

Around the edges:
- Corner flourishes with [pattern type]
- Small [category] symbols
- Stars and [quality] indicators
- [Connecting motifs]

Style notes:
- [Aesthetic description]
- [Cultural/category references]
- [What NOT to include]
- Convey: [key brand attributes]

The feeling should be: [emotional summary]
```

---

## Reference Examples (Gold Standard)

### Ripple Cover Prompt (Example of correct density)
```
Central focal point: A stylized RIPPLE WAVE PATTERN or WATER DROPLET at center

Upper area: GLOBE or WORLD MAP with connection points. Bank silhouettes connected by flowing lines. Lightning bolts showing speed.

Middle elements:
- BRIDGE imagery connecting two landmasses
- Binary/blockchain chain links flowing like water
- Institutional symbols: Bank columns, financial towers, corporate shields
- Transaction flow arrows moving between nodes
- Clock/speed symbols showing settlement

Lower elements:
- Network nodes and connection points spreading globally
- Currency symbols ($ € ¥ icons stylized as geometric shapes)
- Regulatory scales/balance imagery
- Foundation of institutional credibility

Around the edges:
- Corner flourishes with blockchain hexagonal patterns
- Small financial symbols: ledgers, contracts, handshakes
- Stars and trust indicators
- Flowing water/wave motifs connecting all elements

Style notes:
- Institutional, sophisticated, global financial aesthetic
- Clean geometric forms with flowing water/ripple motifs
- Convey: institutional trust, global reach, speed, cross-border efficiency
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

### Composition
- [ ] **Dense decorative elements** filling the space (like CAVA/Ripple)
- [ ] **Clear central focal point** that anchors the composition
- [ ] **Layered structure**: Upper, Middle, Lower, Edges all populated
- [ ] Corner flourishes present
- [ ] Elements connected by flowing motifs/patterns
- [ ] Rich visual tapestry, NOT sparse/empty

### Content
- [ ] Category-appropriate subject matter
- [ ] No text, words, numbers, or labels in image
- [ ] Post-processed with `fix_image_background.py` for seamless blend

---

## Common Mistakes

### ❌ Too Sparse / Empty
- Only 6-8 icons floating in space
- Large empty areas with no decoration
- Missing corner flourishes
- No connecting elements between icons
- Looks unfinished

### ✅ Rich / Cohesive (CAVA/Ripple style)
- Dense decorative elements filling the composition
- Clear focal point with supporting layers
- Upper/Middle/Lower/Edge zones all populated
- Flowing motifs connecting elements
- Corner flourishes and border treatment
- Visual tapestry effect

### Reference
- **Gold Standard**: CAVA cover, Ripple cover - rich, layered, cohesive
- **Too Sparse**: Minimalist compositions with few elements
