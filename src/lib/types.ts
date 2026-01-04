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
}

// Component score data
export interface ComponentScore {
  id: string;
  name: string;
  score: number;
  tier: string;
  section: 'A' | 'B' | 'C';
}

// Section aggregate
export interface SectionScore {
  id: 'A' | 'B' | 'C';
  name: string;
  score: number;
  tier: string;
  components: ComponentScore[];
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

// Component deep dive data
export interface ComponentData {
  id: string;
  name: string;
  section: 'A' | 'B' | 'C';
  score: number;
  tier: string;
  wsn: WSNContent;
  strengths?: string[];
  weaknesses?: string[];
  competitiveContext?: string;
  rationale?: string;
  recommendations?: string;
  scoreBreakdown?: Record<string, number>;
  competitorScores?: CompetitorScore[];
  categoryAverage?: number;
}

// Growth Profile (top of page - the brand narrative)
export interface GrowthProfile {
  id: string; // e.g., "foundation-reinforcement" - matches illustration filename
  name: string; // e.g., "Foundation Reinforcement"
  sequence: string; // e.g., "Position → Unlock → Connect"
  definition: string;
  implications: string;
  shortDefinition: string; // One-line definition for the footnote
}

// Growth Barrier item
export interface GrowthBarrierItem {
  constraint: string;
  component: string;
  score: number;
  evidence: string;
}

// Growth Barrier section
export interface GrowthBarrier {
  headline: string;
  description: string;
  items: GrowthBarrierItem[];
}

// Growth Solution section
export interface GrowthSolution {
  headline: string;
  description: string;
  actions: string[];
}

// Growth System output
export interface GrowthSystemOutput {
  name: string;
  score: number;
  purpose: string;
  componentsAddressed: string[];
  deliverables: string[];
}

// Growth System phase
export interface GrowthSystemPhase {
  phase: 'Position' | 'Unlock' | 'Connect';
  description: string;
  outputs: GrowthSystemOutput[];
}

// Growth System section
export interface GrowthSystem {
  headline: string;
  description: string;
  phases: GrowthSystemPhase[];
  criticalPath: string;
  implementationNotes: string;
}

// Growth Opportunity/Challenge item
export interface GrowthFactorItem {
  component: string;
  name: string;
  score: number;
  headline: string;
  summary: string;
}

// Growth Opportunities & Challenges section
export interface GrowthFactors {
  opportunities: GrowthFactorItem[];
  challenges: GrowthFactorItem[];
}

// Complete GDT analysis data
export interface GDTAnalysis {
  brand: BrandConfig;
  totalScore: number;
  growthProfile: GrowthProfile;
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
