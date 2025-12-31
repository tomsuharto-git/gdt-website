#!/usr/bin/env python3
"""
GDT Output → Website Data Converter

Converts GDT analysis outputs (JSON + Markdown) into the TypeScript data structure
expected by the gdt-website Next.js application.

Usage:
    python convert-gdt-output.py <gdt-output-folder> [--accent-color "#HEXCOLOR"]

Example:
    python convert-gdt-output.py ../outputs/espolon-tequila-usa-2025-12-22 --accent-color "#E54B7B"
"""

import argparse
import json
import re
import os
from pathlib import Path
from typing import Optional


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


def parse_markdown_tier(md_content: str) -> str:
    """Extract tier name from component markdown file header."""
    # Pattern: **Tier:** Value-Justified
    tier_match = re.search(r'\*\*Tier:\*\*\s*([^\n|*]+)', md_content)
    if tier_match:
        return tier_match.group(1).strip()
    return ''


def parse_markdown_wsn(md_content: str) -> dict:
    """Extract WSN content from component markdown file."""
    wsn = {
        'headline': '',
        'subline': '',
        'what': '',
        'evidence': '',
        'soWhat': '',
        'nowWhat': ''
    }

    # Find Summary section
    summary_match = re.search(r'## Summary\s*\n(.*?)(?=\n---|\n## )', md_content, re.DOTALL)
    if summary_match:
        summary = summary_match.group(1)

        # Headline: First bold line after ## Summary
        headline_match = re.search(r'\*\*([^*]+)\*\*', summary)
        if headline_match:
            wsn['headline'] = headline_match.group(1).strip()

        # Subline: First italic line (not Evidence)
        subline_match = re.search(r'^\*([^*]+)\*\s*$', summary, re.MULTILINE)
        if subline_match and 'Evidence' not in subline_match.group(0):
            wsn['subline'] = subline_match.group(1).strip()

        # What: **What:** content
        what_match = re.search(r'\*\*What:\*\*\s*(.+?)(?=\n\*Evidence:|\n\n\*\*So What|\n\*\*So What)', summary, re.DOTALL)
        if what_match:
            wsn['what'] = what_match.group(1).strip()

        # Evidence: *Evidence: content*
        evidence_match = re.search(r'\*Evidence:\s*([^*]+)\*', summary)
        if evidence_match:
            wsn['evidence'] = evidence_match.group(1).strip()

        # So What: **So What:** content
        so_what_match = re.search(r'\*\*So What:\*\*\s*(.+?)(?=\n\n\*\*Now What|\n\*\*Now What)', summary, re.DOTALL)
        if so_what_match:
            wsn['soWhat'] = so_what_match.group(1).strip()

        # Now What: **Now What:** content
        now_what_match = re.search(r'\*\*Now What:\*\*\s*(.+?)(?=\n\n---|\n---|\n\n\n|\Z)', summary, re.DOTALL)
        if now_what_match:
            wsn['nowWhat'] = now_what_match.group(1).strip()

    return wsn


def parse_markdown_deep_dive(md_content: str) -> dict:
    """Extract deep dive content from component markdown file."""
    deep_dive = {
        'strengths': [],
        'weaknesses': [],
        'competitiveContext': '',
        'rationale': '',
        'scoreBreakdown': {}
    }

    # Find Deep Dive section
    deep_dive_match = re.search(r'## Deep Dive\s*\n(.*?)(?=\n## Score Breakdown|\Z)', md_content, re.DOTALL)
    if deep_dive_match:
        deep_dive_content = deep_dive_match.group(1)

        # Strengths
        strengths_match = re.search(r'### Strengths\s*\n(.*?)(?=\n### |\Z)', deep_dive_content, re.DOTALL)
        if strengths_match:
            bullets = re.findall(r'^- (.+)$', strengths_match.group(1), re.MULTILINE)
            deep_dive['strengths'] = [b.strip() for b in bullets]

        # Weaknesses
        weaknesses_match = re.search(r'### Weaknesses\s*\n(.*?)(?=\n### |\Z)', deep_dive_content, re.DOTALL)
        if weaknesses_match:
            bullets = re.findall(r'^- (.+)$', weaknesses_match.group(1), re.MULTILINE)
            deep_dive['weaknesses'] = [b.strip() for b in bullets]

        # Competitive Context
        context_match = re.search(r'### Competitive Context\s*\n(.*?)(?=\n### |\Z)', deep_dive_content, re.DOTALL)
        if context_match:
            deep_dive['competitiveContext'] = context_match.group(1).strip()

        # Rating Rationale
        rationale_match = re.search(r'### Rating Rationale\s*\n(.*?)(?=\n### |\n---|\Z)', deep_dive_content, re.DOTALL)
        if rationale_match:
            deep_dive['rationale'] = rationale_match.group(1).strip()

    # Score Breakdown
    breakdown_match = re.search(r'## Score Breakdown\s*\n(.*?)(?=\n\*Generated|\Z)', md_content, re.DOTALL)
    if breakdown_match:
        rows = re.findall(r'\|\s*([^|]+)\s*\|\s*([\d.]+)\s*\|', breakdown_match.group(1))
        for name, score in rows:
            if name.strip() and name.strip() != '---':
                key = slugify(name.strip()).replace('-', '_')
                try:
                    deep_dive['scoreBreakdown'][key] = float(score)
                except ValueError:
                    pass

    return deep_dive


def transform_growth_system(gdt_system: dict) -> dict:
    """Transform GDT growth_system to website growthSystem structure."""
    phases = []

    for product in gdt_system.get('products', []):
        phase = {
            'phase': product.get('product_name', ''),
            'description': product.get('strategic_focus', ''),
            'outputs': []
        }

        for output in product.get('outputs', []):
            phase['outputs'].append({
                'name': output.get('output_name', ''),
                'score': output.get('relevance_score', 0),
                'purpose': output.get('purpose', ''),
                'componentsAddressed': output.get('critical_components', []),
                'deliverables': output.get('key_deliverables', [])
            })

        phases.append(phase)

    critical_path = gdt_system.get('critical_path', [])
    if isinstance(critical_path, list):
        critical_path = ' → '.join(critical_path)

    return {
        'headline': gdt_system.get('headline', ''),
        'description': gdt_system.get('system_description', ''),
        'phases': phases,
        'criticalPath': critical_path,
        'implementationNotes': gdt_system.get('implementation_considerations', '')
    }


def transform_growth_solution(gdt_solution: dict) -> dict:
    """Transform GDT growth_solution to website growthSolution structure."""
    actions = []
    for i in range(1, 5):
        unlock = gdt_solution.get(f'unlock_{i}', {})
        if unlock:
            name = unlock.get('unlock_name', '')
            desc = unlock.get('description', '')
            if name and desc:
                actions.append(f"{name}: {desc}")

    return {
        'headline': gdt_solution.get('headline', ''),
        'description': gdt_solution.get('solution_statement', ''),
        'actions': actions[:3]  # Website expects max 3 actions
    }


def transform_growth_barrier(gdt_barrier: dict) -> dict:
    """Transform GDT growth_barrier to website growthBarrier structure."""
    items = []
    for i in range(1, 4):
        constraint = gdt_barrier.get(f'constraint_{i}', {})
        if constraint:
            items.append({
                'constraint': constraint.get('constraint', '').split(' with ')[0].split(' while ')[0],  # Shorten
                'component': constraint.get('component_code', ''),
                'score': constraint.get('score', 0),
                'evidence': constraint.get('evidence', '')
            })

    return {
        'headline': gdt_barrier.get('headline', ''),
        'description': gdt_barrier.get('problem_statement', ''),
        'items': items
    }


def convert_gdt_to_website(gdt_folder: Path, accent_color: str = '#E54B7B') -> dict:
    """Main conversion function."""

    # Load main JSON
    json_path = gdt_folder / 'gdt-summary-output.json'
    if not json_path.exists():
        raise FileNotFoundError(f"GDT summary JSON not found: {json_path}")

    with open(json_path, 'r') as f:
        gdt = json.load(f)

    # Build brand config
    brand_name = gdt.get('brand_name', 'Unknown Brand')
    brand = {
        'id': slugify(brand_name),
        'name': brand_name,
        'market': gdt.get('market', 'USA'),
        'category': gdt.get('category', 'Unknown'),
        'date': gdt.get('analysis_date', ''),
        'accentColor': accent_color
    }

    # Growth Profile
    gdt_profile = gdt.get('growth_profile', {})
    critical_path = gdt.get('growth_system', {}).get('critical_path', [])
    sequence = ' → '.join([p.split(' (')[0] for p in critical_path]) if critical_path else ''

    growth_profile = {
        'id': slugify(gdt_profile.get('name', 'unknown')),
        'name': gdt_profile.get('name', ''),
        'sequence': sequence,
        'definition': gdt_profile.get('definition', ''),
        'implications': gdt_profile.get('implications', '')
    }

    # Sections
    sections = []
    section_map = {'A': 'section_a', 'B': 'section_b', 'C': 'section_c'}

    for section_id, section_key in section_map.items():
        gdt_section = gdt.get(section_key, {})
        components = []

        for comp in gdt_section.get('components', []):
            components.append({
                'id': comp.get('code', '').lower(),
                'name': comp.get('name', ''),
                'score': comp.get('rating', 0),
                'tier': comp.get('descriptor', ''),
                'section': section_id
            })

        sections.append({
            'id': section_id,
            'name': gdt_section.get('name', ''),
            'score': gdt_section.get('total_rating', 0),
            'tier': gdt_section.get('descriptor', ''),
            'components': components
        })

    # Components (with markdown deep dives)
    components = []
    component_files = {
        'a1': 'a1-brand-positioning.md',
        'a2': 'a2-pricing-power.md',
        'a3': 'a3-business-growth.md',
        'b1': 'b1-emotional-connection.md',
        'b2': 'b2-cultural-relevance.md',
        'b3': 'b3-brand-experience.md',
        'c1': 'c1-brand-distinctiveness.md',
        'c2': 'c2-brand-innovation.md',
        'c3': 'c3-disruption-urgency.md'
    }

    for section in sections:
        for comp in section['components']:
            comp_id = comp['id']
            md_file = gdt_folder / component_files.get(comp_id, '')

            wsn = {'headline': '', 'subline': '', 'what': '', 'evidence': '', 'soWhat': '', 'nowWhat': ''}
            deep_dive = {'strengths': [], 'weaknesses': [], 'competitiveContext': '', 'scoreBreakdown': {}}

            tier = comp['tier']  # Default from JSON
            if md_file.exists():
                with open(md_file, 'r') as f:
                    md_content = f.read()
                wsn = parse_markdown_wsn(md_content)
                deep_dive = parse_markdown_deep_dive(md_content)
                # Override tier with markdown version (more descriptive)
                md_tier = parse_markdown_tier(md_content)
                if md_tier:
                    tier = md_tier

            component = {
                'id': comp_id,
                'name': comp['name'],
                'section': comp['section'],
                'score': comp['score'],
                'tier': tier,
                'wsn': wsn
            }

            if deep_dive['strengths']:
                component['strengths'] = deep_dive['strengths']
            if deep_dive['weaknesses']:
                component['weaknesses'] = deep_dive['weaknesses']
            if deep_dive['competitiveContext']:
                component['competitiveContext'] = deep_dive['competitiveContext']
            if deep_dive['scoreBreakdown']:
                component['scoreBreakdown'] = deep_dive['scoreBreakdown']

            components.append(component)

    # Assemble final structure
    return {
        'brand': brand,
        'totalScore': gdt.get('total_score', 0),
        'growthProfile': growth_profile,
        'sections': sections,
        'components': components,
        'growthBarrier': transform_growth_barrier(gdt.get('growth_barrier', {})),
        'growthSolution': transform_growth_solution(gdt.get('growth_solution', {})),
        'growthSystem': transform_growth_system(gdt.get('growth_system', {}))
    }


def to_typescript(data: dict, var_name: str) -> str:
    """Convert Python dict to TypeScript source code."""

    def format_value(v, indent=2):
        spaces = '  ' * indent
        if v is None:
            return 'null'
        elif isinstance(v, bool):
            return 'true' if v else 'false'
        elif isinstance(v, (int, float)):
            return str(v)
        elif isinstance(v, str):
            # Escape quotes and backslashes
            escaped = v.replace('\\', '\\\\').replace("'", "\\'")
            return f"'{escaped}'"
        elif isinstance(v, list):
            if not v:
                return '[]'
            items = [format_value(item, indent + 1) for item in v]
            if all(isinstance(item, str) for item in v) and len(v) <= 3:
                return '[' + ', '.join(items) + ']'
            return '[\n' + ',\n'.join(f'{spaces}  {item}' for item in items) + f'\n{spaces}]'
        elif isinstance(v, dict):
            if not v:
                return '{}'
            lines = []
            for k, val in v.items():
                formatted = format_value(val, indent + 1)
                lines.append(f"{spaces}  {k}: {formatted}")
            return '{\n' + ',\n'.join(lines) + f'\n{spaces}}}'
        else:
            return str(v)

    ts_content = f"""import {{ GDTAnalysis }} from '@/lib/types';

/**
 * {data['brand']['name']} GDT Analysis Data
 * Source: GDT output converted on {data['brand']['date']}
 */
export const {var_name}Analysis: GDTAnalysis = {format_value(data, 0)};
"""
    return ts_content


def main():
    parser = argparse.ArgumentParser(description='Convert GDT outputs to website data')
    parser.add_argument('gdt_folder', type=str, help='Path to GDT output folder')
    parser.add_argument('--accent-color', type=str, default='#E54B7B',
                        help='Brand accent color (hex). Edit in output file after conversion.')
    parser.add_argument('--output', type=str, help='Output TypeScript file path')
    parser.add_argument('--var-name', type=str, help='Variable name for export (default: derived from brand)')

    args = parser.parse_args()

    gdt_folder = Path(args.gdt_folder)
    if not gdt_folder.exists():
        print(f"Error: GDT folder not found: {gdt_folder}")
        return 1

    try:
        data = convert_gdt_to_website(gdt_folder, args.accent_color)

        var_name = args.var_name or slugify(data['brand']['name']).replace('-', '')
        ts_code = to_typescript(data, var_name)

        if args.output:
            output_path = Path(args.output)
        else:
            output_path = Path(f"src/data/{slugify(data['brand']['name'])}.ts")

        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w') as f:
            f.write(ts_code)

        print(f"Converted: {gdt_folder}")
        print(f"Output: {output_path}")
        print(f"Brand: {data['brand']['name']}")
        print(f"Total Score: {data['totalScore']}")
        print(f"Components: {len(data['components'])}")

    except Exception as e:
        print(f"Error: {e}")
        return 1

    return 0


if __name__ == '__main__':
    exit(main())
