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
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment
- Same dark charcoal background (#141418 specifically for growth summary)
- Same off-white cream linework

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

Keep the EXACT same line weight, density, and style as the reference. Square format.
"""

# Growth Summary: "Gecko Genius Meets Innovation Desert"
# Theme: Marketing marvel must transform into experience excellence
# Sequence: Connect → Create → Reinvent
GROWTH_PROMPT = """
SUBJECT MATTER - Growth System: Experience Transformation (Connect → Create → Reinvent):

Central focal point: A prominent ASCENDING BRIDGE or STAIRCASE spanning the composition - representing the transformation journey from marketing excellence to experience excellence. The bridge connects two worlds.

Upper area:
- MEGAPHONE and broadcasting tower on the left (marketing dominance)
- LIGHTBULB and gear cluster on the right (innovation future)
- Stars and achievement symbols scattered between
- Ascending arrows showing upward trajectory
- Clouds and sky elements suggesting aspiration

Middle elements:
- The BRIDGE/STAIRCASE as the hero element connecting left to right
- Left side: Television/screens, audience silhouettes, broadcast waves (advertising empire)
- Right side: Smartphone screens, digital interfaces, data streams (digital transformation)
- CLOCK symbols showing the "15 minutes" speed promise
- SPEEDOMETER gauges representing efficiency
- Connection nodes and network lines flowing across
- Lightning bolts for speed and energy

Lower elements:
- Left: Cracked/dry earth patterns (innovation desert, stagnation)
- Right: Flowing water waves, flourishing patterns (oasis, renewal)
- VEHICLE silhouettes (traditional business) transforming into futuristic car shapes (autonomous future)
- Foundation elements showing business stability
- Road patterns weaving through

Around the edges:
- Corner flourishes with geometric insurance patterns
- Small technology icons: sensors, chips, data points
- Stars and progress indicators throughout
- Decorative wave motifs connecting all sections
- Border treatment with speed lines

Style notes:
- Transformation journey aesthetic - from old to new
- Left side slightly more static, right side more dynamic
- The bridge is the HERO connecting two worlds
- Convey: marketing genius, innovation gap, transformation path, digital future
- Bold, cohesive, filled composition like CAVA and Ripple examples

The feeling should be: transformation from advertising excellence to experience excellence, crossing the innovation desert, the bridge to digital future
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
