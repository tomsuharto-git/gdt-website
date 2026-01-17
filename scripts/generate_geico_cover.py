#!/usr/bin/env python3
"""
Generate Geico GDT cover illustration in mono-line art style.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public"

# Geico brand accent - Geico Blue
BRAND_ACCENT = "#0066CC"

BASE_STYLE = f"""
Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment
- Same dark charcoal background
- Same off-white cream linework

COLOR PALETTE - CRITICAL:
- Background: Dark charcoal (#0C0C0E)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: GEICO BLUE {BRAND_ACCENT} - use this vibrant blue for 10-15% of elements
- DO NOT USE RED, GREEN, ORANGE, OR PINK - the accent MUST be GEICO BLUE
- The blue accents should POP against the dark background

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- NO "Geico" or "15 minutes" text
- NO gecko mascot character - this is abstract/symbolic
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference. Square format.
"""

# Geico Cover - Auto Insurance Industry Leader
COVER_PROMPT = """
SUBJECT MATTER - Geico (US Auto Insurance Leader):

Central focal point: A stylized UMBRELLA or SHIELD at center - clean, protective, geometric. This represents insurance protection without showing the gecko mascot. Around it, radiating lines suggesting coverage and security.

Upper area: A CLOCK or TIMER symbol representing speed and efficiency (the "15 minutes" promise without text). Small icons representing different coverage types floating around: car silhouettes, house shapes, motorcycle outlines.

Middle elements:
- The shield/umbrella prominently displayed with vehicles underneath
- Stylized cars, trucks, motorcycles as simple geometric shapes
- Highway or road ribbons flowing through the composition
- Dollar signs or coins (geometric, not text) representing savings
- Digital device silhouettes showing online/app purchasing
- Speed lines and efficiency symbols (lightning bolts, arrows)

Lower elements:
- A FOUNDATION or PLATFORM base representing financial strength
- Stacked coins or bars representing savings and value
- Network/connection lines showing digital infrastructure
- Small house and vehicle icons showing coverage breadth

Around the edges:
- Corner flourishes with automotive and protection motifs
- Small icons: steering wheels, keys, road signs, safety symbols
- Stars and excellence indicators
- Connecting lines showing speed and efficiency
- Timer/clock elements

Style notes:
- Modern, approachable, digital-first aesthetic
- Clean geometric forms with insurance/automotive motifs
- No gecko, no mascot characters - purely symbolic
- Convey: speed, savings, protection, digital convenience, trust
- The protective shield and vehicles should be prominent

The feeling should be: fast, affordable, protective, trustworthy, digital-native, efficient savings
"""

def generate_image(prompt_name, subject_prompt, output_filename):
    """Generate an image using gpt-image-1.5 images.edit with style reference."""

    full_prompt = BASE_STYLE + "\n\n" + subject_prompt

    print(f"\n{'='*60}")
    print(f"Generating: {prompt_name}")
    print(f"Output: {output_filename}")
    print(f"Brand Accent: {BRAND_ACCENT}")
    print(f"{'='*60}")

    try:
        with open(STYLE_REF, "rb") as f:
            response = client.images.edit(
                model="gpt-image-1.5",
                image=f,
                prompt=full_prompt,
                size="1024x1024"
            )

        img_data = base64.b64decode(response.data[0].b64_json)
        output_path = os.path.join(OUTPUT_DIR, output_filename)

        with open(output_path, 'wb') as f:
            f.write(img_data)

        print(f"SUCCESS: Saved to {output_path}")
        print(f"\nNext step: Run post-processing to fix background color:")
        print(f"  python scripts/fix_image_background.py {output_path}")
        return True

    except Exception as e:
        print(f"ERROR: {e}")
        return False

def main():
    print("Geico GDT Cover Image Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")

    # Generate cover image
    generate_image(
        "Geico Cover",
        COVER_PROMPT,
        "geico-cover.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("="*60)

if __name__ == "__main__":
    main()
