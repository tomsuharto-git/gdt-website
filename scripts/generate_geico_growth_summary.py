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
- Background: Dark charcoal (#141418) - slightly lighter than cover
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: GEICO BLUE {BRAND_ACCENT} - use this vibrant blue for 10-15% of elements
- DO NOT USE RED, GREEN, ORANGE, OR PINK - the accent MUST be GEICO BLUE
- The blue accents should POP against the dark background

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
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

This illustration represents the strategic journey from marketing brilliance to operational excellence.

LEFT SIDE - CURRENT STATE (Marketing Marvel):
- A brilliant MEGAPHONE or BROADCAST tower with radiating signal waves
- Entertainment/comedy symbols (theater masks, spotlight)
- Strong awareness indicators (eye symbols, spotlight beams)
- But beneath: CRACKS in a foundation, a platform showing gaps
- Customer frustration symbols (disconnected lines, broken paths)
- A DESERT landscape at the bottom - parched, cracked earth

CENTER - THE TRANSFORMATION BRIDGE:
- A bridge or pathway spanning from left to right
- Three ascending LEVELS or STEPS representing the phases:
  - First step: Connection/network symbols (linked nodes)
  - Second step: Innovation/creation symbols (lightbulb, gears, tools)
  - Third step: Transformation/reinvention symbols (butterfly, phoenix rising)
- The journey upward from desert to oasis

RIGHT SIDE - FUTURE STATE (Experience Excellence):
- A SEAMLESS FLOW of connected elements
- Satisfied customer journey (smooth pathways, completed circuits)
- Digital innovation symbols (data streams, telematics waves, sensors)
- Autonomous vehicle silhouettes (futuristic cars)
- An OASIS or flourishing garden - lush, growing
- Clock/timer symbols showing speed and efficiency delivered

VISUAL METAPHORS:
- The DESERT represents current innovation stagnation
- The OASIS represents the experience excellence destination
- The BRIDGE shows the strategic pathway
- Water/irrigation channels represent the new customer experience flows

Around the edges:
- Corner flourishes connecting old and new
- Small transformation symbols: caterpillar to butterfly, seed to tree
- Speed and efficiency indicators
- Connection lines showing integrated experience

Style notes:
- Journey/transformation narrative from left to right
- Clear visual distinction between current struggles and future success
- The bridge/pathway should be prominent
- No gecko or mascot characters
- Convey: transformation journey, experience innovation, technology adoption, customer-centric future

The feeling should be: urgent transformation, from advertising to operations, from awareness to experience, from desert to oasis
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
