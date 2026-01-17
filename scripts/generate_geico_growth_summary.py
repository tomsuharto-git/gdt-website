#!/usr/bin/env python3
"""
Generate Geico GDT growth summary illustration in mono-line art style.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
Theme: "Gecko Genius Meets Innovation Desert" - Connect → Create → Reinvent
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/growth-systems"

# Geico brand accent - Geico Blue
BRAND_ACCENT = "#0066CC"

BASE_STYLE = f"""
Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same dark charcoal background (#141418 specifically for growth summary)
- Same off-white cream linework

COMPOSITION - CRITICAL:
- KEEP IT SIMPLE - use 8-12 well-spaced large icons, NOT dozens of tiny scattered elements
- Large clear CENTRAL FOCAL POINT with generous space around it
- Elements should be BOLD and CHUNKY, not thin and intricate
- Plenty of BREATHING ROOM between elements - no visual clutter
- Simple corner flourishes only

COLOR PALETTE - CRITICAL:
- Background: Dark charcoal (#141418)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: GEICO BLUE {BRAND_ACCENT} - use this vibrant blue for 10-15% of elements
- DO NOT USE RED, GREEN, ORANGE, OR PINK - the accent MUST be GEICO BLUE

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO "Connect", "Create", "Reinvent" text
- NO gecko mascot character
- Communicate ALL information through VISUAL SYMBOLS ONLY

Square format.
"""

# Growth Summary: "Gecko Genius Meets Innovation Desert"
# Theme: Marketing marvel must transform into experience excellence
# Sequence: Connect → Create → Reinvent
GROWTH_PROMPT = """
SUBJECT MATTER - Growth System: Experience Transformation (Connect → Create → Reinvent):

SIMPLE COMPOSITION showing transformation journey with only these key elements:

LEFT SIDE (2-3 icons):
- One bold MEGAPHONE symbol (marketing/awareness)
- Below it: cracked/parched earth pattern (desert/stagnation)

CENTER (main focal point):
- A prominent BRIDGE or ASCENDING STAIRCASE spanning the composition
- Simple three-step progression going upward from left to right
- This is the HERO element - make it large and prominent

RIGHT SIDE (2-3 icons):
- One GEAR or LIGHTBULB symbol (innovation)
- Below it: flowing water/wave pattern (oasis/flourishing)
- One futuristic CAR silhouette (autonomous future)

SIMPLE CORNER FLOURISHES:
- Minimal decorative elements in corners
- Do NOT fill the space with dozens of small scattered icons

DO NOT INCLUDE:
- Theater masks, spotlights, butterflies
- Complex irrigation channels
- Multiple small transformation symbols
- Densely packed elements
- Eye symbols, sensor graphics everywhere

The feeling should be: simple transformation journey, clean visual narrative, breathing room between elements - like the CAVA or Ripple style
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

        # Ensure output directory exists
        os.makedirs(OUTPUT_DIR, exist_ok=True)

        with open(output_path, 'wb') as f:
            f.write(img_data)

        print(f"SUCCESS: Saved to {output_path}")
        print(f"\nNext step: Run post-processing to fix background color:")
        print(f"  python scripts/fix_image_background.py {output_path} --target-color \"#141418\"")
        return True

    except Exception as e:
        print(f"ERROR: {e}")
        return False

def main():
    print("Geico GDT Growth Summary Image Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")

    # Generate growth summary image
    generate_image(
        "Geico Growth Summary",
        GROWTH_PROMPT,
        "geico-growth-summary.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("="*60)

if __name__ == "__main__":
    main()
