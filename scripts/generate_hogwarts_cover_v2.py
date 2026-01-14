#!/usr/bin/env python3
"""Generate Hogwarts Legacy cover image - LINE ART ICON STYLE."""

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
OUTPUT = PUBLIC_DIR / 'hogwarts-legacy-cover.png'

# THE CORRECT STYLE: Flat line art icons scattered in pattern
PROMPT = """Flat geometric line art icon pattern on solid black background.

STYLE: Thin monoline icons (2px stroke), cream/gold color (#D4AF37), scattered in organized pattern.
NO gradients, NO shading, NO 3D effects, NO realistic rendering.
Pure flat vector-style line drawings like a modern icon set.

ICONS TO INCLUDE (magic/fantasy gaming theme):
- Wand with small stars
- Cauldron/potion bottle
- Castle turret silhouette
- Open spell book
- Owl silhouette
- Broom
- Golden snitch (small winged ball)
- Magic key
- Floating candle
- Lightning bolt symbol
- Crystal ball
- Feather quill
- Magical runes/symbols
- Stars and sparkles scattered throughout

COMPOSITION: Icons scattered across entire canvas in balanced pattern, varying sizes (large focal icons, smaller supporting icons), some icons overlap slightly. Similar to: financial icon patterns, food icon patterns, medical icon patterns.

CRITICAL:
- Pure black background (#0C0C0E)
- Single color for all line work (cream/gold)
- NO text, NO words, NO letters
- Flat 2D only, no perspective
- Clean geometric shapes"""

print("Generating Hogwarts Legacy cover - LINE ART STYLE...")
print(f"Output: {OUTPUT}")

response = client.images.generate(
    model="gpt-image-1",
    prompt=PROMPT,
    size="1024x1024",
    quality="high",
    n=1
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
