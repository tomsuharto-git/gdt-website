#!/usr/bin/env python3
"""
Generate Survodutide GDT illustrations in mono-line art style.
Uses gpt-image-1 images.edit with Espolon cover as style reference.
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

# Cultural Entry Growth Profile - for pre-launch brands entering contested categories
CULTURAL_ENTRY_PROMPT = """
SUBJECT MATTER - Cultural Entry (Pre-launch brand entering contested cultural space):

Central focal point: A GATEWAY or GRAND ENTRANCE ARCH at center - ornate but closed/partially open, representing the threshold into a new cultural territory. The door should be cracking open with light (in accent color) emerging.

Upper area: Cultural symbols floating above - speech bubbles, media screens, social icons, crowd silhouettes, but shown as somewhat chaotic/contested. Lightning bolts or tension lines between competing forces.

Middle elements: The pathway TO the gateway - showing preparation elements like blueprints, strategy maps, credential badges, medical/legitimacy symbols (stethoscope, diploma scrolls, official seals). A figure approaching the gate with these credentials.

Lower elements: Foundation building - cornerstone blocks being laid, roots growing, defensive walls being constructed, stakeholder figures (doctors, patients, advocates) forming an alliance.

Throughout: Tension lines between old narratives and new positioning, barrier elements being overcome, legitimacy symbols (certificates, handshakes, official stamps), cultural conversation bubbles, strategic arrows pointing toward the gateway

The feeling should be: strategic entry into contested territory, building legitimacy before the door opens, preparation and positioning, navigating cultural complexity
"""

def generate_image(prompt_name, subject_prompt, output_filename):
    """Generate an image using gpt-image-1 images.edit with style reference."""

    full_prompt = BASE_STYLE + "\n\n" + subject_prompt

    print(f"\n{'='*60}")
    print(f"Generating: {prompt_name}")
    print(f"Output: {output_filename}")
    print(f"{'='*60}")

    try:
        with open(STYLE_REF, "rb") as f:
            response = client.images.edit(
                model="gpt-image-1",
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

    # Generate cover
    generate_image(
        "Survodutide Cover",
        COVER_PROMPT,
        "survodutide-cover-new.png"
    )

    # Generate Cultural Entry growth profile
    generate_image(
        "Cultural Entry Growth Profile",
        CULTURAL_ENTRY_PROMPT,
        "growth-systems/cultural-entry-new.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("Review the *-new.png files, then rename to replace originals.")
    print("="*60)

if __name__ == "__main__":
    main()
