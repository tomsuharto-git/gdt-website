#!/usr/bin/env python3
"""
Generate Hogwarts Legacy Growth Summary - BOLD THICK STROKES matching other brands.
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
OUTPUT = PUBLIC_DIR / 'growth-systems' / 'hogwarts-legacy-growth-summary.png'
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

BRAND_ACCENT = "#7C3AED"  # Purple

PROMPT = """Create an illustration in EXACTLY the same artistic style as this reference image.

CRITICAL LINE WEIGHT - MOST IMPORTANT:
- BOLD, THICK strokes - at least 3-4 pixels thick
- NOT fine lines, NOT thin, NOT delicate
- Chunky, confident, graphic line work
- Match the reference image's bold weight

ICON SIZE AND DENSITY:
- LARGE icons filling the space
- CHUNKY and SUBSTANTIAL shapes
- Dense - icons touching/overlapping
- Fill entire canvas

COLOR PALETTE:
- Background: #141418 (growth systems dark)
- Primary lines: Off-white cream (#EDE8DF)
- Accent: """ + BRAND_ACCENT + """ purple for 10-15%

NO TEXT anywhere.

SUBJECT - Transformation from Single Experience to Living Platform:

TOP SECTION (finite/before):
- Single large wand (alone)
- Closed book (finished)
- Hourglass (time limited)
- Single player silhouette

MIDDLE SECTION (bridge/transformation):
- Large bold bridge or pathway
- Connection lines radiating out
- Upward arrows (growth)
- Multiple cards/content pieces expanding

BOTTOM SECTION (community/after):
- Multiple crossed wands (together)
- Group silhouettes (community)
- Connected shields/houses
- Trophy and achievement icons
- Calendar/recurring event symbols

Corner flourishes. Fill the entire canvas with bold graphic elements."""

print("Generating Hogwarts Growth Summary - BOLD STROKES")
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
