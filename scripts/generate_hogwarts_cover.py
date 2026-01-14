#!/usr/bin/env python3
"""Generate Hogwarts Legacy cover image using style transfer from Espolon."""

import os
import base64
from pathlib import Path
from openai import OpenAI

# Get API key
def get_api_key():
    if os.environ.get('OPENAI_API_KEY'):
        return os.environ['OPENAI_API_KEY']
    key_file = Path.home() / '.openai_key'
    if key_file.exists():
        return key_file.read_text().strip()
    raise ValueError("No OpenAI API key found")

client = OpenAI(api_key=get_api_key())

# Paths
PUBLIC_DIR = Path(__file__).parent.parent / 'public'
STYLE_REF = PUBLIC_DIR / 'espolon-cover.png'
OUTPUT = PUBLIC_DIR / 'hogwarts-legacy-cover.png'

# Base style from Espolon (dramatic, brand-focused, no text)
BASE_STYLE = """Dramatic brand visualization in the style of premium strategic consulting imagery.
Dark atmospheric background transitioning to deep purple-black (#141418).
NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS anywhere in the image.
Professional, sophisticated, evocative mood."""

# Hogwarts Legacy subject matter
SUBJECT = """Hogwarts castle silhouette against a magical night sky with aurora-like purple and gold
magical energy streams. Floating candles creating warm amber points of light. Wand casting ethereal
spell effects in deep purple and gold. Mystical atmosphere with magical particles and subtle fog.
Gaming aesthetic - dramatic, fantastical, immersive. Color palette: deep purple (#7C3AED), gold
highlights, dark atmospheric tones. Magical, mysterious, wonder-inducing composition."""

FULL_PROMPT = f"{BASE_STYLE}\n\nSubject: {SUBJECT}"

print("Generating Hogwarts Legacy cover image...")
print(f"Style reference: {STYLE_REF}")
print(f"Output: {OUTPUT}")
print(f"\nPrompt:\n{FULL_PROMPT[:200]}...")

# Use images.edit with style reference
with open(STYLE_REF, 'rb') as img_file:
    response = client.images.edit(
        model="gpt-image-1",
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
    # If b64_json not available, try URL
    import urllib.request
    url = response.data[0].url
    urllib.request.urlretrieve(url, OUTPUT)
    print(f"\n✓ Image saved from URL to: {OUTPUT}")

print("Done!")
