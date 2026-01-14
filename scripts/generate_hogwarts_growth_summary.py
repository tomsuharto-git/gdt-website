#!/usr/bin/env python3
"""
Generate Hogwarts Legacy Growth Summary image - FOLLOWING IMAGE-STANDARDS.md EXACTLY.

Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
Output goes to growth-systems/ folder with #141418 background.
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

# Ensure output directory exists
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

# Brand accent color
BRAND_ACCENT = "#7C3AED"  # Purple

# BASE_STYLE from IMAGE-STANDARDS.md (IMMUTABLE)
BASE_STYLE = """Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment

COLOR PALETTE (match the reference):
- Background: Growth systems background (#141418) - MUST MATCH EXACTLY for seamless blend
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: """ + BRAND_ACCENT + """ for select highlights (10-15% of elements)

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference."""

# Growth Summary subject matter - visualizing the strategic transformation
SUBJECT_MATTER = """

SUBJECT MATTER - Growth Summary: "From Finite Experience to Living Platform"

This image represents the strategic transformation from single-player game to ongoing magical platform.

Central focal point: A TRANSFORMATION symbol - showing evolution from single static element to dynamic connected system. Could be: single wand transforming into multiple connected wands, or castle with radiating connection lines, or book opening to reveal expanding world.

Upper area: The "before" state - single wand, single player silhouette, finished book (closed), hourglass suggesting time-limited experience. Solitary elements floating alone.

Middle elements (transition zone): Bridge/pathway connecting single experience to multiplayer. Network lines and connection nodes. Community gathering symbols. Seasonal/calendar icons suggesting ongoing content. Multiple player silhouettes joining together.

Lower elements: The "after" state - interconnected community. Multiple wands crossing/connecting. Guild/house shields linked together. Recurring event calendar symbols. Trophy/achievement icons suggesting ongoing progression. Social gathering spaces (common room aesthetic).

Around the edges: Growth indicators - upward arrows, expansion symbols, timeline flowing from left to right showing evolution. Stars and sparkles suggesting magic throughout.

Style notes:
- Show TRANSFORMATION journey from isolated to connected
- Single-player → multiplayer community visual metaphor
- Finite → ongoing engagement
- Convey: evolution, community building, sustained magic, platform growth

The feeling should be: transformation from beautiful memory to living world, single experience becoming ongoing community, nostalgia evolving into sustained engagement"""

FULL_PROMPT = BASE_STYLE + SUBJECT_MATTER

print("Generating Hogwarts Legacy Growth Summary - FOLLOWING IMAGE-STANDARDS.md")
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

print("Done! Now run: python scripts/fix_image_background.py public/growth-systems/hogwarts-legacy-growth-summary.png --target-color '#141418'")
