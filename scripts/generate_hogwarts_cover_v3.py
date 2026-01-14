#!/usr/bin/env python3
"""
Generate Hogwarts Legacy cover image - FOLLOWING IMAGE-STANDARDS.md EXACTLY.

Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
"""

import os
import base64
from pathlib import Path
from openai import OpenAI

def get_api_key():
    if os.environ.get('OPENAI_API_KEY'):
        return os.environ['OPENAI_API_KEY']
    key_file = Path.home() / '.openai_key'
    if key_file.exists():
        return key_file.read_text().strip()
    raise ValueError("No OpenAI API key found")

client = OpenAI(api_key=get_api_key())

PUBLIC_DIR = Path(__file__).parent.parent / 'public'
STYLE_REF = PUBLIC_DIR / 'espolon-cover.png'
OUTPUT = PUBLIC_DIR / 'hogwarts-legacy-cover.png'

# Brand accent color
BRAND_ACCENT = "#7C3AED"  # Purple

# BASE_STYLE from IMAGE-STANDARDS.md (IMMUTABLE)
BASE_STYLE = """Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment

COLOR PALETTE (match the reference):
- Background: Site background (#0C0C0E) - MUST MATCH EXACTLY for seamless blend
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: """ + BRAND_ACCENT + """ for select highlights (10-15% of elements)

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference."""

# Brand subject matter for Hogwarts Legacy
SUBJECT_MATTER = """

SUBJECT MATTER - Hogwarts Legacy (AAA Video Game / Harry Potter Wizarding World):

Central focal point: A stylized WAND at center with magical energy radiating outward - clean, modern, geometric. The wand emits spell effects shown as decorative swirls and stars.

Upper area: Hogwarts castle silhouette (iconic towers and turrets) as a geometric outline. Floating candles arranged decoratively. Owl silhouette. Stars and magical sparkles scattered throughout.

Middle elements: Golden snitch with delicate wings. Spell book (open, with decorative pages). Cauldron with potion bubbles. Broomstick. Crystal ball. Magical key with ornate design. Feather quill.

Lower elements: Potion bottles of various shapes. Magical runes and symbols. Lightning bolt motif (subtle). Magical creatures suggested through simple icons.

Around the edges: Stars, diamonds, magical sparkles as border elements. Corner flourishes matching the reference style. Small magical icons (moons, stars, potion drops) scattered throughout.

Style notes:
- Fantasy/magical aesthetic with gaming energy
- Whimsical yet sophisticated
- No realistic rendering - flat graphic illustration only
- Convey: magic, wonder, adventure, gaming excitement, wizarding world immersion

The feeling should be: magical adventure, wizarding world wonder, gaming excitement, nostalgic fantasy"""

FULL_PROMPT = BASE_STYLE + SUBJECT_MATTER

print("Generating Hogwarts Legacy cover - FOLLOWING IMAGE-STANDARDS.md")
print(f"Style reference: {STYLE_REF}")
print(f"Output: {OUTPUT}")
print(f"Accent color: {BRAND_ACCENT}")

# Use images.edit with style reference (per IMAGE-STANDARDS.md)
with open(STYLE_REF, 'rb') as img_file:
    response = client.images.edit(
        model="gpt-image-1.5",
        image=img_file,
        prompt=FULL_PROMPT,
        size="1024x1024"
    )

# Save the image
image_data = response.data[0].b64_json
if image_data:
    with open(OUTPUT, 'wb') as f:
        f.write(base64.b64decode(image_data))
    print(f"\n✓ Image saved to: {OUTPUT}")
else:
    import urllib.request
    url = response.data[0].url
    urllib.request.urlretrieve(url, OUTPUT)
    print(f"\n✓ Image saved from URL to: {OUTPUT}")

print("Done!")
