#!/usr/bin/env python3
"""
Generate Hogwarts Legacy cover - BOLD THICK STROKES matching Ripple/CAVA/Survodutide.
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

BRAND_ACCENT = "#7C3AED"  # Purple

# CRITICAL: Emphasize BOLD THICK strokes - the main issue
PROMPT = """Create an illustration in EXACTLY the same artistic style as this reference image.

CRITICAL LINE WEIGHT - THIS IS THE MOST IMPORTANT REQUIREMENT:
- BOLD, THICK strokes - at least 3-4 pixels thick
- NOT fine lines, NOT thin strokes, NOT delicate
- Chunky, confident, graphic line work
- Same weight as the reference image (look at how thick the bowl, columns, wheat stalks are)

ICON SIZE AND DENSITY:
- LARGE icons that fill the space - not small scattered elements
- Icons should be CHUNKY and SUBSTANTIAL
- Fill the entire canvas with bold graphic elements
- Same density as reference - icons touching/overlapping

COLOR PALETTE:
- Background: #0C0C0E (pure dark)
- Primary lines: Off-white cream (#EDE8DF)
- Accent: """ + BRAND_ACCENT + """ purple for 10-15% of elements

NO TEXT - absolutely no words, letters, numbers anywhere.

SUBJECT MATTER - Hogwarts Legacy (Video Game / Wizarding World):

Central focal point: LARGE stylized wand with bold magical swirls radiating outward.

Large bold icons throughout:
- Hogwarts castle silhouette (simplified, bold outline)
- Cauldron with bubbles (chunky, graphic)
- Open spell book (bold pages)
- Owl silhouette (simple, bold)
- Broomstick (thick strokes)
- Golden snitch (bold wings)
- Potion bottles (large, chunky)
- Crystal ball (bold circle)
- Lightning bolt (thick, graphic)
- Keys and candles (substantial)
- Stars and magical sparkles (bold, not tiny dots)

Corner flourishes matching the reference style.
Fill the ENTIRE canvas with these bold graphic elements."""

print("Generating Hogwarts Legacy cover - BOLD THICK STROKES")
print(f"Output: {OUTPUT}")

with open(STYLE_REF, 'rb') as img_file:
    response = client.images.edit(
        model="gpt-image-1.5",
        image=img_file,
        prompt=PROMPT,
        size="1024x1024"
    )

image_data = response.data[0].b64_json
if image_data:
    with open(OUTPUT, 'wb') as f:
        f.write(base64.b64decode(image_data))
    print(f"\n✓ Saved to: {OUTPUT}")
else:
    import urllib.request
    urllib.request.urlretrieve(response.data[0].url, OUTPUT)
    print(f"\n✓ Saved from URL to: {OUTPUT}")

print("Done!")
