'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CompetitorScore } from '@/lib/types';

interface ExpandableAnalysisProps {
  brandName: string;
  brandScore: number;
  strengths?: string[];
  weaknesses?: string[];
  competitiveContext?: string;
  scoreBreakdown?: Record<string, number>;
  competitorScores?: CompetitorScore[];
  categoryAverage?: number;
}

export function ExpandableAnalysis({
  brandName,
  brandScore,
  strengths,
  weaknesses,
  competitiveContext,
  scoreBreakdown,
  competitorScores,
  categoryAverage,
}: ExpandableAnalysisProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Don't render if no content
  const hasContent = (strengths && strengths.length > 0) ||
                     (weaknesses && weaknesses.length > 0) ||
                     competitiveContext ||
                     (scoreBreakdown && Object.keys(scoreBreakdown).length > 0) ||
                     (competitorScores && competitorScores.length > 0);

  if (!hasContent) return null;

  return (
    <div className="mt-6 pt-6 border-t border-[var(--gdt-border)]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm uppercase tracking-widest gdt-accent-text hover:opacity-80 transition-opacity"
      >
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        {isExpanded ? 'Hide Analysis' : 'Expand Analysis'}
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-6 animate-in fade-in duration-200">
          {/* Strengths & Weaknesses Grid */}
          {((strengths && strengths.length > 0) || (weaknesses && weaknesses.length > 0)) && (
            <div className="grid gap-6 md:grid-cols-2">
              {/* Strengths */}
              {strengths && strengths.length > 0 && (
                <div>
                  <h5 className="text-sm uppercase tracking-widest text-green-400 mb-3">
                    Strengths
                  </h5>
                  <ul className="space-y-2">
                    {strengths.map((strength, idx) => (
                      <li key={idx} className="text-sm text-[var(--gdt-text-secondary)] leading-relaxed pl-4 border-l-2 border-green-500/30">
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Weaknesses */}
              {weaknesses && weaknesses.length > 0 && (
                <div>
                  <h5 className="text-sm uppercase tracking-widest text-red-400 mb-3">
                    Weaknesses
                  </h5>
                  <ul className="space-y-2">
                    {weaknesses.map((weakness, idx) => (
                      <li key={idx} className="text-sm text-[var(--gdt-text-secondary)] leading-relaxed pl-4 border-l-2 border-red-500/30">
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Competitive Context */}
          {competitiveContext && (
            <div>
              <h5 className="text-sm uppercase tracking-widest gdt-accent-text mb-3">
                Competitive Context
              </h5>
              <p className="text-sm text-[var(--gdt-text-secondary)] leading-relaxed">
                {competitiveContext}
              </p>
            </div>
          )}

          {/* Competitive Comparison */}
          {competitorScores && competitorScores.length > 0 && (
            <div>
              <h5 className="text-sm uppercase tracking-widest gdt-accent-text mb-3">
                Competitive Comparison
              </h5>
              <div className="space-y-2">
                {/* Brand score (highlighted) */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[var(--gdt-text-primary)]">
                        {brandName}
                      </span>
                      <span className="gdt-mono text-sm gdt-accent-text font-bold">
                        {brandScore.toFixed(1)}
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--gdt-bg-tertiary)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(brandScore / 10) * 100}%`,
                          backgroundColor: 'var(--gdt-accent)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Competitor scores */}
                {competitorScores.map((competitor) => (
                  <div key={competitor.name} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--gdt-text-secondary)]">
                          {competitor.name}
                        </span>
                        <span className="gdt-mono text-sm text-[var(--gdt-text-muted)]">
                          {competitor.score.toFixed(1)}
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--gdt-bg-tertiary)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--gdt-text-muted)] rounded-full opacity-50"
                          style={{ width: `${(competitor.score / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Category average */}
                {categoryAverage && (
                  <div className="flex items-center gap-3 pt-2 border-t border-[var(--gdt-border)]">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-[var(--gdt-text-muted)] italic">
                          Category Average
                        </span>
                        <span className="gdt-mono text-sm text-[var(--gdt-text-muted)]">
                          {categoryAverage.toFixed(1)}
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--gdt-bg-tertiary)] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full border-2 border-dashed border-[var(--gdt-text-muted)]"
                          style={{ width: `${(categoryAverage / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Score Breakdown */}
          {scoreBreakdown && Object.keys(scoreBreakdown).length > 0 && (
            <div>
              <h5 className="text-sm uppercase tracking-widest gdt-accent-text mb-3">
                Score Breakdown
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(scoreBreakdown).map(([key, value]) => (
                  <div key={key} className="gdt-card p-3 text-center">
                    <p className="text-xs text-[var(--gdt-text-muted)] uppercase mb-1">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="gdt-mono text-lg gdt-accent-text">
                      {typeof value === 'number' ? value.toFixed(1) : value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
