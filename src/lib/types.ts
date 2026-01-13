/**
 * GDT Website Type Definitions
 */

// Brand configuration for color theming
export interface BrandConfig {
  id: string;
  name: string;
  market: string;
  category: string;
  date: string;
  accentColor: string;
  password?: string; // Optional password protection
}

// Component score data
export interface ComponentScore {
  id: string;
  name: string;
  score: number;
  tier: string;
  section: 'A' | 'B' | 'C';
}

// Section aggregate (supports multiple formats)
export interface SectionScore {
  id: 'A' | 'B' | 'C';
  name: string;
  // New format (CAVA style)
  score?: number;
  tier?: string;
  components?: ComponentScore[];
  // Legacy format (Espolon/Zyn style)
  totalScore?: number;
  descriptor?: string;
  headline?: string;
  summary?: string;
}

// What/So What/Now What structure
export interface WSNContent {
  headline: string;
  subline: string;
  what: string;
  evidence: string;
  soWhat: string;
  nowWhat: string;
}

// Competitor score for comparison
export interface CompetitorScore {
  name: string;
  score: number;
}

// Component deep dive data (supports multiple formats)
export interface ComponentData {
  name: string;
  // New format (CAVA style)
  id?: string;
  section?: 'A' | 'B' | 'C';
  score?: number;
  tier?: string;
  wsn?: WSNContent;
  strengths?: string[];
  weaknesses?: string[];
  competitiveContext?: string;
  rationale?: string;
  recommendations?: string;
  scoreBreakdown?: Record<string, number>;
  competitorScores?: CompetitorScore[];
  categoryAverage?: number;
  // Legacy format (Espolon/Zyn style)
  code?: string;
  rating?: number;
  descriptor?: string;
  headline?: string;
  summaryBullets?: string[];
}

// Growth Profile (legacy - for backward compatibility)
export interface GrowthProfile {
  id: string; // e.g., "foundation-reinforcement" - matches illustration filename
  name: string; // e.g., "Foundation Reinforcement"
  sequence: string; // e.g., "Position → Unlock → Connect"
  definition: string;
  implications: string;
  shortDefinition: string; // One-line definition for the footnote
}

// Growth Summary (supports multiple formats for backward compatibility)
export interface GrowthSummary {
  headline: string; // e.g., "The Category Creator That Needs to Define Itself"
  sequence: string; // e.g., "Position → Unlock → Connect"
  // New format fields (CAVA style)
  summary?: string; // The situation - what's happening
  paradox?: string; // The tension that must be resolved
  path?: string; // The strategic path forward (human-synthesized)
  image?: string; // Image filename in /growth-systems/
  // Legacy format fields (Espolon/Zyn style)
  strategicNarrative?: string;
  keyInsight?: string;
  strategicImperative?: string;
  timelineContext?: string;
}

// Growth Barrier item (supports multiple formats)
export interface GrowthBarrierItem {
  constraint: string;
  score: number;
  evidence: string;
  // New format
  component?: string;
  // Legacy format
  componentCode?: string;
}

// Growth Barrier section (supports multiple formats)
export interface GrowthBarrier {
  headline: string;
  // New format
  description?: string;
  items?: GrowthBarrierItem[];
  // Legacy format
  problemStatement?: string;
  constraints?: GrowthBarrierItem[];
}

// Growth Solution unlock (legacy format)
export interface GrowthSolutionUnlock {
  name: string;
  description: string;
}

// Growth Solution section (supports multiple formats)
export interface GrowthSolution {
  headline: string;
  // New format
  description?: string;
  actions?: string[];
  // Legacy format
  solutionStatement?: string;
  unlocks?: GrowthSolutionUnlock[];
}

// Growth System output (supports multiple formats)
export interface GrowthSystemOutput {
  name: string;
  purpose: string;
  // New format
  score?: number;
  componentsAddressed?: string[];
  deliverables?: string[];
  // Legacy format
  relevanceScore?: number;
  criticalComponents?: string[];
  keyDeliverables?: string[];
}

// Growth System phase (supports multiple formats)
export interface GrowthSystemPhase {
  phase: string; // Flexible to support various phase names (Position, Unlock, Connect, Stabilize, Differentiate, Defend, etc.)
  // New format
  description?: string;
  outputs?: GrowthSystemOutput[];
  // Legacy format
  focus?: string;
  products?: GrowthSystemOutput[];
}

// Growth System section (supports multiple formats)
export interface GrowthSystem {
  headline: string;
  phases: GrowthSystemPhase[];
  // New format
  description?: string;
  criticalPath?: string;
  implementationNotes?: string;
  // Legacy format
  systemDescription?: string;
}

// Growth Opportunity/Challenge item (supports multiple formats)
export interface GrowthFactorItem {
  // New format (CAVA style)
  component?: string;
  name?: string;
  score?: number;
  headline?: string;
  summary?: string;
  // Legacy format (Espolon/Zyn style)
  factor?: string;
  componentCode?: string;
  evidence?: string;
}

// Growth Opportunities & Challenges section (supports multiple formats)
export interface GrowthFactors {
  opportunities: GrowthFactorItem[];
  challenges: GrowthFactorItem[];
  // Legacy format also has strengths
  strengths?: GrowthFactorItem[];
}

// Complete GDT analysis data
export interface GDTAnalysis {
  brand: BrandConfig;
  totalScore: number;
  growthProfile?: GrowthProfile; // Legacy format
  growthSummary?: GrowthSummary; // New format (preferred)
  sections: SectionScore[];
  components: ComponentData[];
  growthBarrier: GrowthBarrier;
  growthSolution: GrowthSolution;
  growthSystem: GrowthSystem;
  growthFactors?: GrowthFactors;
}

// Score tier helpers
export type ScoreTier = 'high' | 'mid' | 'low';

export function getScoreTier(score: number, max: number = 10): ScoreTier {
  const percentage = score / max;
  if (percentage >= 0.7) return 'high';
  if (percentage >= 0.5) return 'mid';
  return 'low';
}

export function getScoreColor(score: number, max: number = 10): string {
  const tier = getScoreTier(score, max);
  switch (tier) {
    case 'high': return 'var(--gdt-score-high)';
    case 'mid': return 'var(--gdt-score-mid)';
    case 'low': return 'var(--gdt-score-low)';
  }
}
