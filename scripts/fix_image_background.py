#!/usr/bin/env python3
"""
Fix image background color to match GDT website exactly.
Replaces dark pixels with the exact hex color for seamless blending.

Usage:
  python scripts/fix_image_background.py path/to/image.png
  python scripts/fix_image_background.py path/to/image.png --target-color "#0C0C0E"
"""

import sys
from PIL import Image

# Default target colors
COLORS = {
    "page": "#0C0C0E",      # gdt-bg-primary - main page background
    "secondary": "#141418",  # gdt-bg-secondary - growth summary section
    "card": "#18181C",       # gdt-bg-card - card backgrounds
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def fix_background(image_path, target_color="#141418", threshold=35):
    """
    Replace dark pixels with exact target color for seamless blending.

    Args:
        image_path: Path to the image file
        target_color: Hex color to replace dark pixels with
        threshold: Maximum RGB value to consider as "dark" (default 35)
    """
    print(f"Processing: {image_path}")
    print(f"Target color: {target_color}")
    print(f"Threshold: RGB < {threshold}")

    target_rgb = hex_to_rgb(target_color)
    print(f"Target RGB: {target_rgb}")

    img = Image.open(image_path)
    img = img.convert('RGBA')
    pixels = img.load()

    width, height = img.size
    changed_count = 0

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]

            # If pixel is dark (all channels below threshold), replace with target
            if r < threshold and g < threshold and b < threshold:
                pixels[x, y] = (target_rgb[0], target_rgb[1], target_rgb[2], a)
                changed_count += 1

    # Save back to original path
    img.save(image_path, 'PNG')

    total_pixels = width * height
    percent_changed = (changed_count / total_pixels) * 100

    print(f"Changed {changed_count:,} pixels ({percent_changed:.1f}%)")
    print(f"Saved: {image_path}")
    return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python fix_image_background.py <image_path> [--target-color <hex>]")
        print("\nColors:")
        for name, color in COLORS.items():
            print(f"  {name}: {color}")
        print(f"\nDefault target: {COLORS['secondary']} (for growth summary images)")
        sys.exit(1)

    image_path = sys.argv[1]

    # Parse optional target color
    target_color = COLORS["secondary"]  # Default for growth summary images

    if "--target-color" in sys.argv:
        idx = sys.argv.index("--target-color")
        if idx + 1 < len(sys.argv):
            target_color = sys.argv[idx + 1]

    # Detect if this is likely a page bg vs secondary bg image
    if "cover" in image_path.lower():
        target_color = COLORS["page"]  # Cover images use page background
        print("Detected cover image - using page background color")

    try:
        fix_background(image_path, target_color)
        print("\nDone! Image background now matches GDT website exactly.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
