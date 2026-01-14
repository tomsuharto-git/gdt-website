#!/usr/bin/env python3
"""
Generate Survodutide GDT illustrations in mono-line art style.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public"

# Survodutide brand accent - hot pink
BRAND_ACCENT = "#FF5A8A"

BASE_STYLE = f"""
Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment
- Same dark charcoal background
- Same off-white cream linework

COLOR PALETTE - CRITICAL:
- Background: Dark charcoal (#141418)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: BRIGHT HOT PINK {BRAND_ACCENT} - use this vibrant pink for 10-15% of elements
- DO NOT USE GREEN OR TEAL - the accent MUST be HOT PINK/MAGENTA
- The pink accents should POP against the dark background

Keep the EXACT same line weight, density, and style as the reference. Square format.
"""

# Survodutide Cover - Metabolic Health / Pharmaceutical theme
COVER_PROMPT = """
SUBJECT MATTER - Survodutide (Metabolic Health Transformation):

Replace all tequila/Mexican imagery with pharmaceutical/metabolic health imagery:

Central focal point: A stylized HUMAN FIGURE or BODY SILHOUETTE at center, with internal metabolic pathways visible - liver, digestive system, heart connections shown as elegant circuit-like patterns

Upper area: Scientific symbols - molecular structures, DNA helix elements, brain/neural connections, radiating energy lines suggesting transformation and health

Middle elements: Dual pathway representation (the dual agonist mechanism) - TWO intertwining streams or ribbons flowing through the body, medical caduceus elements, metabolic cycle symbols, elegant pill or injection device silhouettes

Lower elements: Foundation of health - cellular patterns, baseline measurements, scientific grid elements, growth indicators

Throughout: Medical/scientific decorative elements - molecular bonds, cell structures, measurement scales, pulse/heartbeat lines, transformation arrows, small stars and geometric accents

The feeling should be: scientific elegance, metabolic transformation, medical legitimacy, sophisticated health technology
"""

# Cultural Entry Growth Profile - Build → Legitimize → Scale (pre-launch from zero)
CULTURAL_ENTRY_PROMPT = """
SUBJECT MATTER - Build → Legitimize → Scale (Pre-launch brand building everything from scratch):

Central focal point: A CONSTRUCTION CRANE or SCAFFOLD STRUCTURE at center - actively building/assembling something that doesn't exist yet. The structure is mid-construction, clearly incomplete but rising.

Upper area: The GOAL/VISION - a completed brand symbol or trophy at the top, but shown as blueprint/outline (not yet real). Clock or hourglass showing time pressure. Stars representing the destination.

LEFT SIDE (Build phase): Foundation work - blueprint rolls, drafting tools, building blocks being stacked, identity elements being designed (logo sketches, color swatches), zero becoming one.

MIDDLE (Legitimize phase): Medical/credibility symbols - stethoscope, diploma/certificate, handshake between figures, podium/speaking platform, trust symbols (shield, seal of approval), doctor figure endorsing.

RIGHT SIDE (Scale phase): Growth/launch elements - rocket preparing for launch, arrows pointing upward, megaphone/amplification, network nodes expanding, market chart rising.

Lower elements: Starting line or ground level marked "ZERO" - emphasizing the starting point is nothing. Competitors shown in distance (already built structures) creating urgency.

Throughout: Construction lines, assembly arrows, progress indicators (0% to 100% bar), time pressure symbols (clocks, hourglasses), the pink accent color highlighting the path from zero to built.

The feeling should be: building from nothing, racing against time, construction in progress, the long road from zero to competitive, urgency and determination
"""

def generate_image(prompt_name, subject_prompt, output_filename):
    """Generate an image using gpt-image-1.5 images.edit with style reference."""

    full_prompt = BASE_STYLE + "\n\n" + subject_prompt

    print(f"\n{'='*60}")
    print(f"Generating: {prompt_name}")
    print(f"Output: {output_filename}")
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
        return True

    except Exception as e:
        print(f"ERROR: {e}")
        return False

def main():
    print("Survodutide GDT Illustration Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")

    # Generate cover image
    generate_image(
        "Survodutide Cover",
        COVER_PROMPT,
        "survodutide-cover.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("="*60)

if __name__ == "__main__":
    main()
