#!/usr/bin/env python3
"""
Generate Ripple (XRP) Growth Summary illustration - Institutional-Retail Identity Crisis.
Uses gpt-image-1.5 images.edit with Espolon cover as style reference.
Theme: Half boardroom, half crypto speculation - the identity split.
"""

from openai import OpenAI
import base64
import os

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Style reference - ensures consistent bold line weight
STYLE_REF = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/espolon-cover.png"
OUTPUT_DIR = "/Users/tomsuharto/Documents/Obsidian Vault/Claude Code/Growth Diagnosis/gdt-website/public/growth-systems"

# Ripple brand accent - vibrant blue (Ripple's actual brand color)
BRAND_ACCENT = "#0096E4"

BASE_STYLE = f"""
Create an illustration in EXACTLY the same artistic style as this reference image:
- Same LINE WEIGHT - bold, confident strokes (not ultra-thin)
- Same flat, graphic illustration approach
- Same density of decorative elements filling the space
- Same corner flourishes and border treatment
- Same dark charcoal background

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

# Growth Summary Image - The Institutional-Retail Identity Crisis (Half-and-Half)
GROWTH_SUMMARY_PROMPT = """
SUBJECT MATTER - The Institutional-Retail Identity Crisis (Split Composition):

This image should be SPLIT DOWN THE MIDDLE - two distinct worlds in one frame:

LEFT HALF - THE BOARDROOM / INSTITUTIONAL WORLD:
- Stylized corporate boardroom table with executive chairs
- Bank columns, financial institution silhouettes
- Suit-wearing figures (faceless, geometric) with briefcases
- Stability symbols: scales of justice, clock showing steady time
- Clean architectural lines, order, structure
- Handshake symbols representing partnerships
- Building facades with Greek columns (institutional credibility)
- Everything orderly, grid-aligned, corporate precision

RIGHT HALF - THE CRYPTO SPECULATION WORLD:
- Wild price chart lines going up and down chaotically
- Diamond hands symbol, rocket ships, moon
- Hodler figures with arms raised in excitement/despair
- Volatile zigzag patterns everywhere
- Mobile phones with trading apps
- Emotional faces (happy/sad masks showing volatility)
- Coins, tokens, blockchain hexagons scattered chaotically
- Everything dynamic, energetic, unpredictable

THE DIVIDE IN THE CENTER:
- A clear vertical divide/crack running down the middle
- The XRP water droplet/ripple symbol SPLIT in the center, half in each world
- Tension lines radiating from the split
- The two worlds unable to connect
- Perhaps a broken bridge between them

Corner flourishes and border treatment matching the Espolon style.

Style notes:
- Clear visual contrast between the two halves
- Left side: orderly, structured, corporate, stable
- Right side: chaotic, dynamic, speculative, volatile
- The split should feel like tension, not harmony
- Convey: identity crisis, two incompatible audiences, trapped between worlds

The feeling should be: institutional stability vs. speculative chaos, corporate credibility vs. crypto culture, order vs. volatility, the impossible middle ground
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
        return output_path

    except Exception as e:
        print(f"ERROR: {e}")
        return None

def main():
    print("Ripple (XRP) Growth Summary Image Generator")
    print(f"Style reference: {STYLE_REF}")
    print(f"Brand accent: {BRAND_ACCENT}")
    print(f"Theme: Institutional-Retail Identity Crisis (Half-and-Half)")

    # Generate growth summary image
    output_path = generate_image(
        "Ripple Growth Summary - Identity Crisis",
        GROWTH_SUMMARY_PROMPT,
        "ripple-growth-summary.png"
    )

    print("\n" + "="*60)
    print("Generation complete!")
    if output_path:
        print(f"\nDon't forget to post-process:")
        print(f"  python scripts/fix_image_background.py {output_path}")
    print("="*60)

if __name__ == "__main__":
    main()
