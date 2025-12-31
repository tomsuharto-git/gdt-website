#!/usr/bin/env python3
"""
GDT Output → Website Data Converter v3.0

CRITICAL: Uses JSON output files as PRIMARY source (not markdown).
Markdown files may have incomplete Summary sections due to generation bugs.
JSON contains the complete, accurate data.

Usage:
    python3 gdt_converter_v3.py <gdt-output-folder> [options]

Options:
    --accent-color "#HEXCOLOR"   Brand accent color
    --output <path>              Output TypeScript file
    --var-name <name>            Export variable name
    --report                     Generate validation report
"""

import argparse
import json
import re
import os
from pathlib import Path
from typing import Optional, Dict, List, Tuple
from dataclasses import dataclass, field
from datetime import datetime


# ============================================================================
# COMPONENT JSON FIELD MAPPINGS
# ============================================================================

# Each component has different JSON structure - map them to standard WSN format
COMPONENT_MAPPINGS = {
    'a1': {
        'headline_field': 'finding.positioning_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'a2': {
        'headline_field': 'finding.pricing_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_positioning',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'a3': {
        'headline_field': 'finding.growth_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'b1': {
        'headline_field': 'finding.overall_connection_strength',
        'strengths_field': 'finding.connection_strengths',
        'weaknesses_field': 'finding.connection_weaknesses',
        'context_field': 'finding.competitive_positioning',
        'rationale_field': 'rating.rationale',
        'recommendations_field': 'rating.recommendations',
        'scores_field': 'rating.component_scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.final_rating'
    },
    'b2': {
        'headline_field': 'finding.cultural_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'b3': {
        'headline_field': 'finding.experience_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'c1': {
        'headline_field': 'finding.distinctiveness_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'c2': {
        'headline_field': 'finding.innovation_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    },
    'c3': {
        'headline_field': 'finding.disruption_summary',
        'strengths_field': 'finding.strengths',
        'weaknesses_field': 'finding.weaknesses',
        'context_field': 'finding.competitive_context',
        'rationale_field': 'rating.rationale',
        'scores_field': 'rating.scores',
        'tier_field': 'rating.rating_tier',
        'rating_field': 'rating.overall_rating'
    }
}

# Component names for display
COMPONENT_NAMES = {
    'a1': 'Brand Positioning',
    'a2': 'Pricing Power',
    'a3': 'Business Growth',
    'b1': 'Emotional Connection',
    'b2': 'Cultural Relevance',
    'b3': 'Brand Experience',
    'c1': 'Brand Distinctiveness',
    'c2': 'Brand Innovation',
    'c3': 'Disruption Urgency'
}


# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


def get_nested(data: dict, path: str, default=None):
    """Get nested dict value using dot notation path."""
    keys = path.split('.')
    value = data
    for key in keys:
        if isinstance(value, dict) and key in value:
            value = value[key]
        else:
            return default
    return value


def extract_first_sentence(text: str) -> str:
    """Extract first sentence from text."""
    if not text:
        return ''
    # Split on sentence endings
    match = re.match(r'^(.+?[.!?])\s', text)
    if match:
        return match.group(1)
    return text.split('.')[0] + '.' if '.' in text else text


def extract_wsn_from_text(full_text: str, context: str = '', recommendations: str = '') -> dict:
    """
    Extract WSN structure from a summary paragraph.

    The headline paragraph typically contains:
    - First sentence = headline
    - Remaining = expansion/context
    """
    wsn = {
        'headline': '',
        'subline': '',
        'what': '',
        'evidence': '',
        'soWhat': '',
        'nowWhat': ''
    }

    if not full_text:
        return wsn

    # Split into sentences
    sentences = re.split(r'(?<=[.!?])\s+', full_text.strip())

    if len(sentences) >= 1:
        # First sentence is the headline
        wsn['headline'] = sentences[0].strip()

    if len(sentences) >= 2:
        # Second sentence is the subline/expansion
        wsn['subline'] = sentences[1].strip()

    if len(sentences) >= 3:
        # Third+ sentences become "what" (the observation)
        wsn['what'] = ' '.join(sentences[2:]).strip()
    elif len(sentences) == 2:
        # If only 2 sentences, use second as both subline and what
        wsn['what'] = sentences[1].strip()

    # Context becomes soWhat
    if context:
        wsn['soWhat'] = context.strip()

    # Recommendations become nowWhat
    if recommendations:
        wsn['nowWhat'] = recommendations.strip()

    return wsn


def format_strengths(strengths_data) -> List[str]:
    """Format strengths from various JSON structures to string list."""
    if not strengths_data:
        return []

    result = []
    for item in strengths_data:
        if isinstance(item, str):
            result.append(item)
        elif isinstance(item, dict):
            # Handle B1-style: {"element": "...", "impact": "high"}
            if 'element' in item:
                result.append(f"{item['element']} ({item.get('impact', '')} impact)")
            elif 'theme' in item:
                result.append(f"{item['theme']} ({item.get('strength', '')})")
            else:
                result.append(str(item))
    return result


def format_weaknesses(weaknesses_data) -> List[str]:
    """Format weaknesses from various JSON structures to string list."""
    if not weaknesses_data:
        return []

    result = []
    for item in weaknesses_data:
        if isinstance(item, str):
            result.append(item)
        elif isinstance(item, dict):
            # Handle B1-style: {"element": "...", "priority": "high"}
            if 'element' in item:
                result.append(f"{item['element']} ({item.get('priority', '')} priority)")
            else:
                result.append(str(item))
    return result


def format_score_breakdown(scores_data: dict) -> dict:
    """Convert scores dict to camelCase keys for website."""
    if not scores_data:
        return {}

    result = {}
    for key, value in scores_data.items():
        # Convert snake_case to camelCase for display
        display_key = key.replace('_', ' ').title().replace(' ', '')
        display_key = display_key[0].lower() + display_key[1:] if display_key else key
        if isinstance(value, (int, float)):
            result[display_key] = value
    return result


# ============================================================================
# COMPONENT CONVERSION
# ============================================================================

@dataclass
class ComponentResult:
    component_id: str
    name: str
    section: str
    score: float
    tier: str
    wsn: dict
    strengths: List[str]
    weaknesses: List[str]
    competitive_context: str
    score_breakdown: dict
    source: str  # 'json' or 'markdown'
    warnings: List[str] = field(default_factory=list)


def convert_component_from_json(comp_id: str, json_path: Path) -> Optional[ComponentResult]:
    """Convert a component from its JSON output file."""

    if not json_path.exists():
        return None

    with open(json_path, 'r') as f:
        data = json.load(f)

    mapping = COMPONENT_MAPPINGS.get(comp_id, {})
    warnings = []

    # Get rating/score
    score = get_nested(data, mapping.get('rating_field', 'rating.overall_rating'), 0)
    tier = get_nested(data, mapping.get('tier_field', 'rating.rating_tier'), '')

    # Get headline text
    headline_text = ''
    for possible_field in [mapping.get('headline_field'),
                           'finding.summary',
                           'finding.overall_summary']:
        if possible_field:
            headline_text = get_nested(data, possible_field, '')
            if headline_text:
                break

    if not headline_text:
        warnings.append(f"No headline field found for {comp_id}")

    # Get context and recommendations
    context = get_nested(data, mapping.get('context_field', ''), '')
    rationale = get_nested(data, mapping.get('rationale_field', ''), '')
    recommendations = get_nested(data, mapping.get('recommendations_field', ''), '')

    # Build WSN from headline text
    wsn = extract_wsn_from_text(headline_text, context, recommendations)

    # If no nowWhat from recommendations, derive from rationale
    if not wsn['nowWhat'] and rationale:
        # Look for action-oriented sentences in rationale
        sentences = re.split(r'(?<=[.!?])\s+', rationale)
        for sentence in sentences:
            if any(kw in sentence.lower() for kw in ['need', 'should', 'must', 'requires']):
                wsn['nowWhat'] = sentence
                break

    # If no evidence, use first metric from rationale
    if not wsn['evidence'] and rationale:
        metric_match = re.search(r'([\d.]+%|[\d.]+/10|score[sd]?\s+[\d.]+)', rationale, re.IGNORECASE)
        if metric_match:
            wsn['evidence'] = f"Score: {metric_match.group(0)}"

    # Get strengths/weaknesses
    strengths_raw = get_nested(data, mapping.get('strengths_field', ''), [])
    weaknesses_raw = get_nested(data, mapping.get('weaknesses_field', ''), [])

    strengths = format_strengths(strengths_raw)
    weaknesses = format_weaknesses(weaknesses_raw)

    # Get score breakdown
    scores_raw = get_nested(data, mapping.get('scores_field', ''), {})
    score_breakdown = format_score_breakdown(scores_raw)

    return ComponentResult(
        component_id=comp_id,
        name=COMPONENT_NAMES.get(comp_id, comp_id.upper()),
        section=comp_id[0].upper(),
        score=score,
        tier=tier,
        wsn=wsn,
        strengths=strengths,
        weaknesses=weaknesses,
        competitive_context=context,
        score_breakdown=score_breakdown,
        source='json',
        warnings=warnings
    )


# ============================================================================
# MAIN CONVERSION
# ============================================================================

def convert_gdt_to_website(gdt_folder: Path, accent_color: str = '#E54B7B') -> Tuple[dict, dict]:
    """Main conversion function - uses JSON as primary source."""

    report = {
        'timestamp': datetime.now().isoformat(),
        'components': [],
        'warnings': [],
        'errors': []
    }

    # Load main summary JSON
    summary_path = gdt_folder / 'gdt-summary-output.json'
    if not summary_path.exists():
        raise FileNotFoundError(f"GDT summary JSON not found: {summary_path}")

    with open(summary_path, 'r') as f:
        gdt = json.load(f)

    brand_name = gdt.get('brand_name', 'Unknown Brand')
    report['brand_name'] = brand_name
    report['total_score'] = gdt.get('total_score', 0)

    # Build brand config
    brand = {
        'id': slugify(brand_name),
        'name': brand_name,
        'market': gdt.get('market', 'USA'),
        'category': gdt.get('category', 'Unknown'),
        'date': gdt.get('analysis_date', datetime.now().strftime('%Y-%m-%d')),
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

    # Sections from summary JSON
    sections = []
    section_map = {'A': 'section_a', 'B': 'section_b', 'C': 'section_c'}

    for section_id, section_key in section_map.items():
        gdt_section = gdt.get(section_key, {})
        section_components = []

        for comp in gdt_section.get('components', []):
            section_components.append({
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
            'components': section_components
        })

    # Convert each component from JSON output files
    component_files = {
        'a1': 'a1-output.json',
        'a2': 'a2-output.json',
        'a3': 'a3-output.json',
        'b1': 'b1-output.json',
        'b2': 'b2-output.json',
        'b3': 'b3-output.json',
        'c1': 'c1-output.json',
        'c2': 'c2-output.json',
        'c3': 'c3-output.json'
    }

    components = []

    for comp_id, filename in component_files.items():
        json_path = gdt_folder / filename

        result = convert_component_from_json(comp_id, json_path)

        if result:
            component = {
                'id': result.component_id,
                'name': result.name,
                'section': result.section,
                'score': result.score,
                'tier': result.tier,
                'wsn': result.wsn
            }

            if result.strengths:
                component['strengths'] = result.strengths
            if result.weaknesses:
                component['weaknesses'] = result.weaknesses
            if result.competitive_context:
                component['competitiveContext'] = result.competitive_context
            if result.score_breakdown:
                component['scoreBreakdown'] = result.score_breakdown

            components.append(component)

            # Add to report
            report['components'].append({
                'id': comp_id,
                'name': result.name,
                'source': result.source,
                'wsn_complete': all([
                    result.wsn.get('headline'),
                    result.wsn.get('what'),
                    result.wsn.get('soWhat'),
                    result.wsn.get('nowWhat')
                ]),
                'has_strengths': len(result.strengths) > 0,
                'has_weaknesses': len(result.weaknesses) > 0,
                'warnings': result.warnings
            })

            if result.warnings:
                for w in result.warnings:
                    report['warnings'].append(f"[{comp_id.upper()}] {w}")
        else:
            report['errors'].append(f"Failed to convert {comp_id} - JSON file not found")
            # Create minimal component from sections data
            for section in sections:
                for sec_comp in section['components']:
                    if sec_comp['id'] == comp_id:
                        components.append({
                            'id': comp_id,
                            'name': sec_comp['name'],
                            'section': sec_comp['section'],
                            'score': sec_comp['score'],
                            'tier': sec_comp['tier'],
                            'wsn': {
                                'headline': '',
                                'subline': '',
                                'what': '',
                                'evidence': '',
                                'soWhat': '',
                                'nowWhat': ''
                            }
                        })
                        break

    # Transform growth sections
    def transform_growth_barrier(gdt_barrier: dict) -> dict:
        items = []
        for i in range(1, 4):
            constraint = gdt_barrier.get(f'constraint_{i}', {})
            if constraint:
                items.append({
                    'constraint': constraint.get('constraint', '').split(' with ')[0].split(' while ')[0],
                    'component': constraint.get('component_code', ''),
                    'score': constraint.get('score', 0),
                    'evidence': constraint.get('evidence', '')
                })
        return {
            'headline': gdt_barrier.get('headline', ''),
            'description': gdt_barrier.get('problem_statement', ''),
            'items': items
        }

    def transform_growth_solution(gdt_solution: dict) -> dict:
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
            'actions': actions[:3]
        }

    def transform_growth_system(gdt_system: dict) -> dict:
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

        cp = gdt_system.get('critical_path', [])
        critical_path = ' → '.join(cp) if isinstance(cp, list) else cp

        return {
            'headline': gdt_system.get('headline', ''),
            'description': gdt_system.get('system_description', ''),
            'phases': phases,
            'criticalPath': critical_path,
            'implementationNotes': gdt_system.get('implementation_considerations', '')
        }

    # Assemble final data
    data = {
        'brand': brand,
        'totalScore': gdt.get('total_score', 0),
        'growthProfile': growth_profile,
        'sections': sections,
        'components': components,
        'growthBarrier': transform_growth_barrier(gdt.get('growth_barrier', {})),
        'growthSolution': transform_growth_solution(gdt.get('growth_solution', {})),
        'growthSystem': transform_growth_system(gdt.get('growth_system', {}))
    }

    return data, report


# ============================================================================
# OUTPUT GENERATION
# ============================================================================

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

    return f"""import {{ GDTAnalysis }} from '@/lib/types';

/**
 * {data['brand']['name']} GDT Analysis Data
 * Generated: {datetime.now().isoformat()}
 * Source: JSON output files (primary), markdown (fallback)
 * Converter: gdt_converter_v3.py
 */
export const {var_name}Analysis: GDTAnalysis = {format_value(data, 0)};
"""


def generate_report_markdown(report: dict) -> str:
    """Generate a markdown validation report."""

    complete = sum(1 for c in report['components'] if c.get('wsn_complete'))
    total = len(report['components'])

    lines = [
        f"# GDT Conversion Report: {report['brand_name']}",
        f"",
        f"**Generated:** {report['timestamp']}",
        f"**Total Score:** {report['total_score']}",
        f"**Source:** JSON output files (v3 converter)",
        f"",
        f"## Summary",
        f"",
        f"| Metric | Value |",
        f"|--------|-------|",
        f"| Complete WSN | {complete}/{total} |",
        f"| Components with Strengths | {sum(1 for c in report['components'] if c.get('has_strengths'))}/{total} |",
        f"| Components with Weaknesses | {sum(1 for c in report['components'] if c.get('has_weaknesses'))}/{total} |",
        f"",
        f"## Component Details",
        f"",
        f"| ID | Name | Source | WSN | Strengths | Weaknesses |",
        f"|----|------|--------|-----|-----------|------------|"
    ]

    for comp in report['components']:
        wsn_icon = "✅" if comp.get('wsn_complete') else "⚠️"
        str_icon = "✅" if comp.get('has_strengths') else "❌"
        weak_icon = "✅" if comp.get('has_weaknesses') else "❌"

        lines.append(
            f"| {comp['id'].upper()} | {comp['name']} | {comp['source']} | "
            f"{wsn_icon} | {str_icon} | {weak_icon} |"
        )

    if report['warnings']:
        lines.extend([
            "",
            "## Warnings",
            ""
        ])
        for w in report['warnings']:
            lines.append(f"- ⚠️ {w}")

    if report['errors']:
        lines.extend([
            "",
            "## Errors",
            ""
        ])
        for e in report['errors']:
            lines.append(f"- ❌ {e}")

    return '\n'.join(lines)


# ============================================================================
# CLI
# ============================================================================

def main():
    parser = argparse.ArgumentParser(
        description='GDT Output → Website Converter v3.0 (JSON-first)',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument('gdt_folder', type=str, help='Path to GDT output folder')
    parser.add_argument('--accent-color', type=str, default='#E54B7B',
                        help='Brand accent color (hex)')
    parser.add_argument('--output', type=str, help='Output TypeScript file path')
    parser.add_argument('--var-name', type=str, help='Export variable name')
    parser.add_argument('--report', action='store_true', help='Generate validation report')

    args = parser.parse_args()

    gdt_folder = Path(args.gdt_folder)
    if not gdt_folder.exists():
        print(f"❌ Error: GDT folder not found: {gdt_folder}")
        return 1

    try:
        print(f"Converting: {gdt_folder}")
        print(f"Source: JSON output files (v3 converter)")

        data, report = convert_gdt_to_website(gdt_folder, args.accent_color)

        # Generate TypeScript output
        var_name = args.var_name or slugify(data['brand']['name']).replace('-', '')
        ts_code = to_typescript(data, var_name)

        if args.output:
            output_path = Path(args.output)
        else:
            output_path = Path(f"src/data/{slugify(data['brand']['name'])}.ts")

        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w') as f:
            f.write(ts_code)

        complete = sum(1 for c in report['components'] if c.get('wsn_complete'))
        total = len(report['components'])

        print(f"\n✅ Converted successfully!")
        print(f"   Output: {output_path}")
        print(f"   Brand: {data['brand']['name']}")
        print(f"   Score: {data['totalScore']}")
        print(f"   WSN Complete: {complete}/{total}")

        if args.report:
            report_md = generate_report_markdown(report)
            report_path = output_path.parent / f"{slugify(data['brand']['name'])}-conversion-report.md"
            with open(report_path, 'w') as f:
                f.write(report_md)
            print(f"   Report: {report_path}")

        if report['warnings']:
            print(f"\n⚠️  Warnings ({len(report['warnings'])}):")
            for w in report['warnings'][:3]:
                print(f"   - {w}")

        return 0

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == '__main__':
    exit(main())
