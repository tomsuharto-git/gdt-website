#!/usr/bin/env python3
"""
Generate Adobe Creative Cloud Growth Summary illustration in mono-line art style.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
Background must be #141418 to match gdt-bg-secondary.
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/growth-systems"

# Adobe brand accent - Adobe Red
BRAND_ACCENT = "#FF0000"

BASE_STYLE = f"""
Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment
- Same dark charcoal background
- Same off-white cream linework

COLOR PALETTE - CRITICAL:
- Background: Dark charcoal (#141418) - THIS IS CRITICAL FOR SEAMLESS BLEND
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: ADOBE RED {BRAND_ACCENT} - use this vibrant red for 10-15% of elements
- DO NOT USE BLUE, GREEN, ORANGE, OR PINK - the accent MUST be ADOBE RED
- The red accents should POP against the dark background

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- NO "Adobe" or "Position" or "Unlock" or "Connect" text
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference. Square format.
"""

# Adobe Creative Cloud Growth Summary - Position → Unlock → Connect
GROWTH_SUMMARY_PROMPT = """
SUBJECT MATTER - Adobe Creative Cloud Growth System (Position → Unlock → Connect):

This image represents the strategic transformation from "Subscription Gatekeeper" to "Creative Partner":

LEFT SECTION (Position - Trust Repair):
- A BROKEN LOCK being repaired/opened, symbolizing subscription trust repair
- Transparent pricing symbols (simple geometric coins/currency shapes, not text)
- A shield with a heart, representing customer-first approach
- Regulatory symbols (scales of justice) in harmony, not conflict
- Transition from fortress walls becoming open gates

CENTER SECTION (Unlock - Accessibility):
- A DOOR or GATEWAY opening wide
- Adobe Express symbol (simplified) reaching toward Canva-like accessibility
- Mobile devices with creative tools emerging
- Educational/student symbols (graduation caps, books) with connecting paths
- Cloud expanding outward to reach more users
- The Firefly sparkle/AI symbol integrated into accessible tools

RIGHT SECTION (Connect - Pipeline Capture):
- HUMAN SILHOUETTES of diverse creators (students, professionals) connected
- Community gathering/circle imagery
- Heart symbols representing emotional connection
- Bridge imagery connecting Adobe to next-generation creators
- Seeds/growth symbols representing pipeline cultivation
- Adobe MAX stage/community gathering symbol

CONNECTING ELEMENTS (throughout):
- Flowing lines connecting Position → Unlock → Connect
- Arrows showing transformation journey left to right
- Stars and sparkles indicating progress/success
- The cloud motif weaving through all three sections
- Red accent highlights on key transformation moments

OVERALL COMPOSITION:
- Three distinct but connected zones
- Flowing left-to-right narrative
- Bold corner flourishes consistent with Espolon style
- Dense decorative elements filling space
- The journey from closed fortress to open community

The feeling should be: strategic transformation, from gatekeeping to partnership, trust repair to community building, subscription fortress becoming creative ecosystem
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
        # Ensure output directory exists
        os.makedirs(OUTPUT_DIR, exist_ok=True)

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
        print(f"  python scripts/fix_image_background.py {output_path} --target-color '#141418'")
        return True

    except Exception as e:
        print(f"ERROR: {e}")
        return False

def main():
    print("Adobe Creative Cloud Growth Summary Image Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")

    # Generate growth summary image
    generate_image(
        "Adobe Creative Cloud Growth Summary",
        GROWTH_SUMMARY_PROMPT,
        "adobe-creative-cloud-growth-summary.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("="*60)

if __name__ == "__main__":
    main()
