#!/usr/bin/env python3
"""
Generate Ripple (XRP) GDT cover illustration in mono-line art style.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public"

# Ripple brand accent - vibrant blue (Ripple's actual brand color)
BRAND_ACCENT = "#0096E4"

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
- Accent color: BRIGHT ELECTRIC BLUE {BRAND_ACCENT} - use this vibrant blue for 10-15% of elements
- DO NOT USE GREEN, ORANGE, OR PINK - the accent MUST be ELECTRIC BLUE
- The blue accents should POP against the dark background

CRITICAL - NO TEXT WHATSOEVER:
- NO words, letters, numbers, percentages, or any typography
- NO labels, captions, taglines, or text of any kind
- NO "XRP" or "Ripple" text
- Communicate ALL information through VISUAL SYMBOLS ONLY

Keep the EXACT same line weight, density, and style as the reference. Square format.
"""

# Ripple Cover - Institutional Crypto Payments / Cross-Border Finance
COVER_PROMPT = """
SUBJECT MATTER - Ripple XRP (Institutional Crypto for Cross-Border Payments):

Central focal point: A stylized RIPPLE WAVE PATTERN or WATER DROPLET at center - clean, modern, geometric. The ripple effect radiates outward in concentric circles showing global reach and transaction flow.

Upper area: GLOBE or WORLD MAP in stylized form with connection points and transaction pathways. Bank/financial institution silhouettes on opposite sides connected by flowing lines. Lightning bolts showing speed of settlement.

Middle elements:
- BRIDGE imagery - an elegant stylized bridge connecting two landmasses (representing cross-border payments)
- Binary/blockchain chain links flowing like water currents
- Institutional symbols: Bank columns, financial towers, corporate shields
- Transaction flow arrows moving between nodes
- Clock/speed symbols showing 3-5 second settlement

Lower elements:
- Network nodes and connection points spreading globally
- Currency symbols (not text - just $ € ¥ icons stylized as geometric shapes)
- Regulatory scales/balance imagery (representing SEC resolution)
- Foundation of institutional credibility - solid geometric base

Around the edges:
- Corner flourishes with blockchain hexagonal patterns
- Small financial symbols: ledgers, contracts, handshakes
- Stars and trust indicators
- Flowing water/wave motifs connecting all elements

Style notes:
- Institutional, sophisticated, global financial aesthetic
- Clean geometric forms with flowing water/ripple motifs
- No skulls, no consumer retail imagery - this is B2B institutional finance
- Convey: institutional trust, global reach, speed, cross-border efficiency, regulatory legitimacy
- The "ripple" wave effect should be prominent throughout

The feeling should be: global institutional finance, cross-border bridge, speed and efficiency, regulatory legitimacy, the future of payments infrastructure
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
    print("Ripple (XRP) GDT Cover Image Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")

    # Generate cover image
    generate_image(
        "Ripple XRP Cover",
        COVER_PROMPT,
        "ripple-cover.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    print("="*60)

if __name__ == "__main__":
    main()
