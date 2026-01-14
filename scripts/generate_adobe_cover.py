#!/usr/bin/env python3
"""
Generate Adobe Creative Cloud GDT cover illustration in mono-line art style.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public"

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
- Background: Dark charcoal (#0C0C0E)
- Primary lines: Off-white cream (#EDE8DF)
- Accent color: ADOBE RED {BRAND_ACCENT} - use this vibrant red for 10-15% of elements
- DO NOT USE BLUE, GREEN, ORANGE, OR PINK - the accent MUST be ADOBE RED
- The red accents should POP against the dark background

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- NO "Adobe" or "CC" text or product names
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference. Square format.
"""

# Adobe Creative Cloud Cover - Creative Software Industry Leader
COVER_PROMPT = """
SUBJECT MATTER - Adobe Creative Cloud (Global Creative Software Leader):

Central focal point: A stylized CREATIVE CLOUD icon or INTERCONNECTED SQUARES at center - clean, modern, geometric. The famous two-letter application icons (Ps, Ai, Pr, etc.) as stylized squares radiating outward in an orbital pattern, all connected by flowing lines.

Upper area: A CROWN or LEADERSHIP symbol above the central icon representing 40+ years of creative industry dominance. Small icons representing different creative disciplines floating around: a camera lens (photography), a pen nib (illustration), a film strip (video), a music note (audio), a wireframe cube (3D).

Middle elements:
- The CLOUD shape prominently displayed with creative tools emerging from it
- Paintbrushes, pen tools, and bezier curves flowing outward
- The infinity symbol representing Creative Cloud subscription continuity
- AI/sparkle symbols representing Firefly generative AI
- Professional workstation silhouettes connected to the cloud
- Enterprise building silhouettes showing B2B dominance

Lower elements:
- A FORTRESS or CASTLE foundation representing the professional moat
- Subscription/recurring revenue symbols (dollar signs as geometric shapes, not text)
- Document and file icons showing cross-app workflow
- Professional credentials/certification badges
- 40 years of heritage represented by timeline marks

Around the edges:
- Corner flourishes with creative tool motifs
- Small icons: tablets, styluses, monitors, cameras, microphones
- Stars and excellence indicators
- Connecting lines showing ecosystem integration
- Sparkle effects representing AI innovation

Style notes:
- Professional, sophisticated, industry-standard aesthetic
- Clean geometric forms with creative tool motifs
- No skulls, no food - this is enterprise creative software
- Convey: industry leadership, creative ecosystem, professional standard, AI innovation, subscription fortress
- The interconnected cloud and tool ecosystem should be prominent

The feeling should be: creative industry standard, professional dominance, 40-year legacy, AI transformation, enterprise fortress under siege from nimble competitors
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
    print("Adobe Creative Cloud GDT Cover Image Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")

    # Generate cover image
    generate_image(
        "Adobe Creative Cloud Cover",
        COVER_PROMPT,
        "adobe-creative-cloud-cover.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("="*60)

if __name__ == "__main__":
    main()
