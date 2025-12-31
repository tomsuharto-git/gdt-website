#!/usr/bin/env python3
"""
GDT Output → Website Data Converter v2.0

Enhanced converter with:
- Validation and completeness checking
- WSN derivation from Rating Rationale when Summary is incomplete
- Detailed conversion report
- Placeholder detection

Usage:
    python gdt_converter_v2.py <gdt-output-folder> [options]

Options:
    --accent-color "#HEXCOLOR"   Brand accent color
    --output <path>              Output TypeScript file
    --var-name <name>            Export variable name
    --report                     Generate validation report
    --strict                     Fail on incomplete content
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
# DATA CLASSES FOR VALIDATION
# ============================================================================

@dataclass
class WSNContent:
    headline: str = ''
    subline: str = ''
    what: str = ''
    evidence: str = ''
    soWhat: str = ''
    nowWhat: str = ''

    def is_complete(self) -> bool:
        """Check if all required WSN fields have meaningful content."""
        required = [self.headline, self.what, self.soWhat, self.nowWhat]
        return all(
            field and
            len(field) > 10 and  # Minimum meaningful length
            not self._is_placeholder(field)
            for field in required
        )

    def _is_placeholder(self, text: str) -> bool:
        """Detect placeholder/incomplete content."""
        placeholders = [
            'assessment pending',
            'assessment in progress',
            'in progress',
            'pending',
            'tbd',
            'to be determined',
            'placeholder',
            '[insert',
            'coming soon'
        ]
        text_lower = text.lower().strip()
        return any(p in text_lower for p in placeholders)

    def get_missing_fields(self) -> List[str]:
        """Return list of missing or placeholder fields."""
        missing = []
        fields = {
            'headline': self.headline,
            'subline': self.subline,
            'what': self.what,
            'evidence': self.evidence,
            'soWhat': self.soWhat,
            'nowWhat': self.nowWhat
        }
        for name, value in fields.items():
            if not value or len(value) < 10 or self._is_placeholder(value):
                missing.append(name)
        return missing


@dataclass
class ComponentValidation:
    component_id: str
    component_name: str
    wsn_complete: bool = False
    wsn_missing_fields: List[str] = field(default_factory=list)
    has_strengths: bool = False
    has_weaknesses: bool = False
    has_competitive_context: bool = False
    has_score_breakdown: bool = False
    has_rationale: bool = False
    wsn_derived_from_rationale: bool = False
    warnings: List[str] = field(default_factory=list)

    def overall_status(self) -> str:
        if self.wsn_complete and self.has_strengths and self.has_weaknesses:
            return "COMPLETE"
        elif self.wsn_derived_from_rationale:
            return "DERIVED"
        elif self.wsn_missing_fields:
            return "INCOMPLETE"
        else:
            return "PARTIAL"


@dataclass
class ConversionReport:
    brand_name: str
    timestamp: str
    total_score: float
    components: List[ComponentValidation] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    errors: List[str] = field(default_factory=list)

    def summary(self) -> dict:
        complete = sum(1 for c in self.components if c.overall_status() == "COMPLETE")
        derived = sum(1 for c in self.components if c.overall_status() == "DERIVED")
        incomplete = sum(1 for c in self.components if c.overall_status() == "INCOMPLETE")
        return {
            'complete': complete,
            'derived': derived,
            'incomplete': incomplete,
            'total': len(self.components)
        }


# ============================================================================
# PARSING FUNCTIONS
# ============================================================================

def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


def parse_markdown_header(md_content: str) -> dict:
    """Extract header metadata from component markdown."""
    header = {
        'component_id': '',
        'component_name': '',
        'score': 0.0,
        'tier': '',
        'section': '',
        'brand': '',
        'market': ''
    }

    # Title line: # A1: Brand Positioning
    title_match = re.search(r'^#\s*([A-C][1-3]):\s*(.+)$', md_content, re.MULTILINE)
    if title_match:
        header['component_id'] = title_match.group(1).lower()
        header['component_name'] = title_match.group(2).strip()

    # Score: **Score:** 5.4/10
    score_match = re.search(r'\*\*Score:\*\*\s*([\d.]+)/10', md_content)
    if score_match:
        header['score'] = float(score_match.group(1))

    # Tier: **Tier:** Established
    tier_match = re.search(r'\*\*Tier:\*\*\s*([^\n|*]+)', md_content)
    if tier_match:
        header['tier'] = tier_match.group(1).strip()

    # Section: **Section:** Brand & Business Alignment
    section_match = re.search(r'\*\*Section:\*\*\s*([^|*]+)', md_content)
    if section_match:
        header['section'] = section_match.group(1).strip()

    return header


def parse_markdown_wsn(md_content: str) -> WSNContent:
    """Extract WSN content from Summary section."""
    wsn = WSNContent()

    # Find Summary section
    summary_match = re.search(r'## Summary\s*\n(.*?)(?=\n---|\n## )', md_content, re.DOTALL)
    if not summary_match:
        return wsn

    summary = summary_match.group(1)

    # Headline: First bold text on its own line
    headline_match = re.search(r'^\*\*([^*]+)\*\*\s*$', summary, re.MULTILINE)
    if headline_match:
        wsn.headline = headline_match.group(1).strip()

    # Subline: First italic line (not containing "Evidence")
    for match in re.finditer(r'^\*([^*]+)\*\s*$', summary, re.MULTILINE):
        if 'Evidence' not in match.group(0) and 'evidence' not in match.group(0):
            wsn.subline = match.group(1).strip()
            break

    # What: **What:** content (up to Evidence or So What)
    what_match = re.search(
        r'\*\*What:\*\*\s*(.+?)(?=\n\*Evidence:|\n\n\*\*So What|\n\*\*So What|\n\n---)',
        summary, re.DOTALL
    )
    if what_match:
        wsn.what = what_match.group(1).strip()

    # Evidence: *Evidence: content*
    evidence_match = re.search(r'\*Evidence:\s*([^*]+)\*', summary)
    if evidence_match:
        wsn.evidence = evidence_match.group(1).strip()

    # So What: **So What:** content
    so_what_match = re.search(
        r'\*\*So What:\*\*\s*(.+?)(?=\n\n\*\*Now What|\n\*\*Now What|\n\n---|\n---)',
        summary, re.DOTALL
    )
    if so_what_match:
        wsn.soWhat = so_what_match.group(1).strip()

    # Now What: **Now What:** content
    now_what_match = re.search(
        r'\*\*Now What:\*\*\s*(.+?)(?=\n\n---|\n---|\n\n\n|\Z)',
        summary, re.DOTALL
    )
    if now_what_match:
        wsn.nowWhat = now_what_match.group(1).strip()

    return wsn


def parse_markdown_deep_dive(md_content: str) -> dict:
    """Extract deep dive content from markdown."""
    deep_dive = {
        'strengths': [],
        'weaknesses': [],
        'competitiveContext': '',
        'rationale': '',
        'recommendations': '',
        'scoreBreakdown': {}
    }

    # Find Deep Dive section
    deep_dive_match = re.search(
        r'## Deep Dive\s*\n(.*?)(?=\n## Score Breakdown|\Z)',
        md_content, re.DOTALL
    )

    if deep_dive_match:
        content = deep_dive_match.group(1)

        # Strengths
        strengths_match = re.search(r'### Strengths\s*\n(.*?)(?=\n### |\Z)', content, re.DOTALL)
        if strengths_match:
            bullets = re.findall(r'^- (.+)$', strengths_match.group(1), re.MULTILINE)
            deep_dive['strengths'] = [b.strip() for b in bullets]

        # Weaknesses
        weaknesses_match = re.search(r'### Weaknesses\s*\n(.*?)(?=\n### |\Z)', content, re.DOTALL)
        if weaknesses_match:
            bullets = re.findall(r'^- (.+)$', weaknesses_match.group(1), re.MULTILINE)
            deep_dive['weaknesses'] = [b.strip() for b in bullets]

        # Competitive Context
        context_match = re.search(r'### Competitive Context\s*\n(.*?)(?=\n### |\Z)', content, re.DOTALL)
        if context_match:
            deep_dive['competitiveContext'] = context_match.group(1).strip()

        # Rating Rationale
        rationale_match = re.search(
            r'### Rating Rationale\s*\n(.*?)(?=\n### |\n---|\Z)',
            content, re.DOTALL
        )
        if rationale_match:
            deep_dive['rationale'] = rationale_match.group(1).strip()

        # Recommendations
        rec_match = re.search(r'### Recommendations\s*\n(.*?)(?=\n### |\n---|\Z)', content, re.DOTALL)
        if rec_match:
            deep_dive['recommendations'] = rec_match.group(1).strip()

    # Score Breakdown table
    breakdown_match = re.search(r'## Score Breakdown\s*\n(.*?)(?=\n\*Generated|\Z)', md_content, re.DOTALL)
    if breakdown_match:
        rows = re.findall(r'\|\s*([^|]+)\s*\|\s*([\d.]+)\s*\|', breakdown_match.group(1))
        for name, score in rows:
            if name.strip() and name.strip() not in ['---', 'Dimension', 'Score']:
                key = slugify(name.strip()).replace('-', '_')
                try:
                    deep_dive['scoreBreakdown'][key] = float(score)
                except ValueError:
                    pass

    return deep_dive


# ============================================================================
# WSN DERIVATION FROM RATIONALE
# ============================================================================

def derive_wsn_from_rationale(rationale: str, competitive_context: str,
                             component_name: str, tier: str) -> WSNContent:
    """
    Derive WSN content from Rating Rationale when Summary is incomplete.

    This extracts key insights from the more detailed rationale text.
    """
    wsn = WSNContent()

    if not rationale:
        return wsn

    sentences = re.split(r'(?<=[.!?])\s+', rationale)

    # Headline: Usually the first sentence contains the key finding
    if sentences:
        first_sentence = sentences[0].strip()
        # Remove "Brand earns a X rating because" prefix
        headline = re.sub(
            r'^[A-Za-z]+\s+earns\s+a[n]?\s+\w+\s+rating\s+because\s+',
            '',
            first_sentence,
            flags=re.IGNORECASE
        )
        # Capitalize first letter
        if headline:
            wsn.headline = headline[0].upper() + headline[1:] if len(headline) > 1 else headline.upper()

    # What: Look for observation/finding sentences
    observation_keywords = ['when', 'people', 'consumers', 'buyers', 'most', 'the brand']
    for sentence in sentences[1:4]:  # Check first few sentences
        if any(kw in sentence.lower() for kw in observation_keywords):
            wsn.what = sentence.strip()
            break

    # So What: Use competitive context or implication sentence
    if competitive_context:
        wsn.soWhat = competitive_context.split('.')[0] + '.' if '.' in competitive_context else competitive_context
    else:
        implication_keywords = ['means', 'creates', 'results', 'leaves', 'puts']
        for sentence in sentences:
            if any(kw in sentence.lower() for kw in implication_keywords):
                wsn.soWhat = sentence.strip()
                break

    # Now What: Look for recommendation or action-oriented sentence
    action_keywords = ['need', 'should', 'must', 'requires', 'demands', 'calls for']
    for sentence in sentences:
        if any(kw in sentence.lower() for kw in action_keywords):
            wsn.nowWhat = sentence.strip()
            break

    # Subline: Create from tier description
    if tier:
        wsn.subline = f"{tier} positioning in the category."

    # Evidence: Extract evidence marker if present
    evidence_match = re.search(r'([\d.]+%|[\d.]+/10|score[sd]?\s+[\d.]+)', rationale, re.IGNORECASE)
    if evidence_match:
        wsn.evidence = f"Rating reflects {evidence_match.group(0)}."

    return wsn


def merge_wsn(original: WSNContent, derived: WSNContent) -> Tuple[WSNContent, List[str]]:
    """
    Merge original WSN with derived content, filling gaps.
    Returns merged WSN and list of fields that were filled from derivation.
    """
    merged = WSNContent()
    derived_fields = []

    fields = ['headline', 'subline', 'what', 'evidence', 'soWhat', 'nowWhat']

    for field in fields:
        original_value = getattr(original, field)
        derived_value = getattr(derived, field)

        # Check if original is valid
        is_placeholder = original._is_placeholder(original_value) if original_value else True
        is_too_short = len(original_value) < 10 if original_value else True

        if original_value and not is_placeholder and not is_too_short:
            setattr(merged, field, original_value)
        elif derived_value:
            setattr(merged, field, derived_value)
            derived_fields.append(field)
        else:
            setattr(merged, field, original_value or '')

    return merged, derived_fields


# ============================================================================
# MAIN CONVERSION
# ============================================================================

def convert_component(md_path: Path) -> Tuple[dict, ComponentValidation]:
    """Convert a single component markdown file to website data."""

    with open(md_path, 'r') as f:
        md_content = f.read()

    header = parse_markdown_header(md_content)
    wsn_original = parse_markdown_wsn(md_content)
    deep_dive = parse_markdown_deep_dive(md_content)

    # Create validation record
    validation = ComponentValidation(
        component_id=header['component_id'],
        component_name=header['component_name']
    )

    # Check WSN completeness
    validation.wsn_missing_fields = wsn_original.get_missing_fields()
    validation.wsn_complete = wsn_original.is_complete()

    # Check deep dive content
    validation.has_strengths = len(deep_dive['strengths']) >= 2
    validation.has_weaknesses = len(deep_dive['weaknesses']) >= 2
    validation.has_competitive_context = len(deep_dive['competitiveContext']) > 20
    validation.has_score_breakdown = len(deep_dive['scoreBreakdown']) >= 2
    validation.has_rationale = len(deep_dive['rationale']) > 50

    # Derive WSN from rationale if needed
    wsn_final = wsn_original
    if not validation.wsn_complete and validation.has_rationale:
        wsn_derived = derive_wsn_from_rationale(
            deep_dive['rationale'],
            deep_dive['competitiveContext'],
            header['component_name'],
            header['tier']
        )
        wsn_final, derived_fields = merge_wsn(wsn_original, wsn_derived)

        if derived_fields:
            validation.wsn_derived_from_rationale = True
            validation.warnings.append(
                f"WSN fields derived from rationale: {', '.join(derived_fields)}"
            )

    # Build component data
    component = {
        'id': header['component_id'],
        'name': header['component_name'],
        'section': header['component_id'][0].upper(),
        'score': header['score'],
        'tier': header['tier'],
        'wsn': {
            'headline': wsn_final.headline,
            'subline': wsn_final.subline,
            'what': wsn_final.what,
            'evidence': wsn_final.evidence,
            'soWhat': wsn_final.soWhat,
            'nowWhat': wsn_final.nowWhat
        }
    }

    # Add optional fields if present
    if deep_dive['strengths']:
        component['strengths'] = deep_dive['strengths']
    if deep_dive['weaknesses']:
        component['weaknesses'] = deep_dive['weaknesses']
    if deep_dive['competitiveContext']:
        component['competitiveContext'] = deep_dive['competitiveContext']
    if deep_dive['scoreBreakdown']:
        component['scoreBreakdown'] = deep_dive['scoreBreakdown']

    return component, validation


def convert_gdt_to_website(gdt_folder: Path, accent_color: str = '#E54B7B') -> Tuple[dict, ConversionReport]:
    """Main conversion function with validation."""

    # Initialize report
    report = ConversionReport(
        brand_name='',
        timestamp=datetime.now().isoformat(),
        total_score=0.0
    )

    # Load main JSON
    json_path = gdt_folder / 'gdt-summary-output.json'
    if not json_path.exists():
        report.errors.append(f"GDT summary JSON not found: {json_path}")
        raise FileNotFoundError(f"GDT summary JSON not found: {json_path}")

    with open(json_path, 'r') as f:
        gdt = json.load(f)

    report.brand_name = gdt.get('brand_name', 'Unknown Brand')
    report.total_score = gdt.get('total_score', 0)

    # Build brand config
    brand = {
        'id': slugify(report.brand_name),
        'name': report.brand_name,
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

    # Sections from JSON
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

    # Process component markdown files
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

    components = []

    for comp_id, filename in component_files.items():
        md_path = gdt_folder / filename

        if not md_path.exists():
            report.errors.append(f"Missing component file: {filename}")
            report.warnings.append(f"Component {comp_id} will have empty content")
            # Create minimal component from JSON
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
            continue

        try:
            component, validation = convert_component(md_path)
            components.append(component)
            report.components.append(validation)

            if validation.warnings:
                for warning in validation.warnings:
                    report.warnings.append(f"[{comp_id.upper()}] {warning}")

        except Exception as e:
            report.errors.append(f"Error processing {filename}: {str(e)}")

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
 * Source: GDT output folder
 */
export const {var_name}Analysis: GDTAnalysis = {format_value(data, 0)};
"""


def generate_report_markdown(report: ConversionReport) -> str:
    """Generate a markdown validation report."""

    summary = report.summary()

    lines = [
        f"# GDT Conversion Report: {report.brand_name}",
        f"",
        f"**Generated:** {report.timestamp}",
        f"**Total Score:** {report.total_score}",
        f"",
        f"## Summary",
        f"",
        f"| Status | Count |",
        f"|--------|-------|",
        f"| Complete | {summary['complete']}/9 |",
        f"| Derived from Rationale | {summary['derived']}/9 |",
        f"| Incomplete | {summary['incomplete']}/9 |",
        f"",
    ]

    # Component details
    lines.extend([
        "## Component Status",
        "",
        "| ID | Name | WSN | Strengths | Weaknesses | Status |",
        "|----|------|-----|-----------|------------|--------|"
    ])

    for comp in report.components:
        wsn_status = "✅" if comp.wsn_complete else ("⚠️" if comp.wsn_derived_from_rationale else "❌")
        str_status = "✅" if comp.has_strengths else "❌"
        weak_status = "✅" if comp.has_weaknesses else "❌"
        overall = comp.overall_status()

        lines.append(
            f"| {comp.component_id.upper()} | {comp.component_name} | "
            f"{wsn_status} | {str_status} | {weak_status} | {overall} |"
        )

    # Missing fields detail
    incomplete = [c for c in report.components if c.wsn_missing_fields]
    if incomplete:
        lines.extend([
            "",
            "## Missing WSN Fields",
            ""
        ])
        for comp in incomplete:
            lines.append(f"### {comp.component_id.upper()}: {comp.component_name}")
            lines.append(f"Missing: {', '.join(comp.wsn_missing_fields)}")
            lines.append("")

    # Warnings
    if report.warnings:
        lines.extend([
            "## Warnings",
            ""
        ])
        for warning in report.warnings:
            lines.append(f"- {warning}")
        lines.append("")

    # Errors
    if report.errors:
        lines.extend([
            "## Errors",
            ""
        ])
        for error in report.errors:
            lines.append(f"- ❌ {error}")
        lines.append("")

    return '\n'.join(lines)


# ============================================================================
# CLI
# ============================================================================

def main():
    parser = argparse.ArgumentParser(
        description='GDT Output → Website Converter v2.0',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    python gdt_converter_v2.py ../outputs/espolon-tequila-usa-2025-12-22
    python gdt_converter_v2.py ../outputs/brand-folder --accent-color "#FF5733" --report
    python gdt_converter_v2.py ../outputs/brand-folder --strict  # Fail on incomplete
        """
    )

    parser.add_argument('gdt_folder', type=str, help='Path to GDT output folder')
    parser.add_argument('--accent-color', type=str, default='#E54B7B',
                        help='Brand accent color (hex)')
    parser.add_argument('--output', type=str, help='Output TypeScript file path')
    parser.add_argument('--var-name', type=str, help='Export variable name')
    parser.add_argument('--report', action='store_true', help='Generate validation report')
    parser.add_argument('--strict', action='store_true',
                        help='Fail if any component is incomplete')

    args = parser.parse_args()

    gdt_folder = Path(args.gdt_folder)
    if not gdt_folder.exists():
        print(f"❌ Error: GDT folder not found: {gdt_folder}")
        return 1

    try:
        print(f"Converting: {gdt_folder}")
        data, report = convert_gdt_to_website(gdt_folder, args.accent_color)

        # Check for strict mode failures
        summary = report.summary()
        if args.strict and summary['incomplete'] > 0:
            print(f"\n❌ STRICT MODE: {summary['incomplete']} incomplete components")
            print("Run with --report for details")
            return 1

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

        print(f"\n✅ Converted successfully!")
        print(f"   Output: {output_path}")
        print(f"   Brand: {data['brand']['name']}")
        print(f"   Score: {data['totalScore']}")
        print(f"   Components: {summary['complete']} complete, {summary['derived']} derived, {summary['incomplete']} incomplete")

        # Generate report if requested
        if args.report:
            report_md = generate_report_markdown(report)
            report_path = output_path.parent / f"{slugify(data['brand']['name'])}-conversion-report.md"
            with open(report_path, 'w') as f:
                f.write(report_md)
            print(f"   Report: {report_path}")

        # Print warnings
        if report.warnings:
            print(f"\n⚠️  Warnings ({len(report.warnings)}):")
            for w in report.warnings[:5]:
                print(f"   - {w}")
            if len(report.warnings) > 5:
                print(f"   ... and {len(report.warnings) - 5} more (see report)")

        return 0

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return 1


if __name__ == '__main__':
    exit(main())
