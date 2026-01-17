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
- Same dark charcoal background
- Same off-white cream linework

COMPOSITION - CRITICAL:
- KEEP IT SIMPLE - use 8-12 well-spaced large icons, NOT dozens of tiny scattered elements
- Large clear CENTRAL FOCAL POINT with generous space around it
- Elements should be BOLD and CHUNKY, not thin and intricate
- Plenty of BREATHING ROOM between elements - no visual clutter
- Simple corner flourishes only - don't fill edges with many small icons

COLOR PALETTE - CRITICAL:
- Background: Dark charcoal (#0C0C0E)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: GEICO BLUE {BRAND_ACCENT} - use this vibrant blue for 10-15% of elements
- DO NOT USE RED, GREEN, ORANGE, OR PINK - the accent MUST be GEICO BLUE

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO "Geico" or "15 minutes" text
- NO gecko mascot character
- Communicate ALL information through VISUAL SYMBOLS ONLY

Square format.
"""

# Geico Cover - Auto Insurance Industry Leader
COVER_PROMPT = """
SUBJECT MATTER - Geico (US Auto Insurance Leader):

SIMPLE COMPOSITION with only these key elements:

CENTER (large, prominent):
- Bold SHIELD shape with radiating lines - the main focal point
- Takes up approximately 30% of the composition

SURROUNDING (well-spaced, 6-8 icons total):
- One stylized CAR silhouette (simple, geometric)
- One CLOCK symbol representing speed
- One stack of COINS representing savings
- One HOUSE icon for coverage
- One SMARTPHONE silhouette for digital convenience
- Simple corner flourishes with Greek key or simple geometric pattern

DO NOT INCLUDE:
- Multiple vehicles scattered everywhere
- Lightning bolts everywhere
- Dozens of small scattered icons
- Intricate road/highway ribbons
- Complex overlapping elements

The feeling should be: clean, protective, trustworthy - like the CAVA or Ripple examples with simple bold icons and breathing room
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
