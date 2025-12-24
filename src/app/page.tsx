import { espolonAnalysis } from '@/data/espolon';
import { getScoreTier, getScoreColor } from '@/lib/types';
import Link from 'next/link';
import {
  Target,
  Tag,
  TrendingUp,
  Heart,
  Globe,
  Hand,
  Fingerprint,
  Lightbulb,
  Zap,
} from 'lucide-react';

// Icon mapping for each component
const componentIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  a1: Target,        // Brand Positioning
  a2: Tag,           // Pricing Power
  a3: TrendingUp,    // Business Growth
  b1: Heart,         // Emotional Connection
  b2: Globe,         // Cultural Relevance
  b3: Hand,          // Brand Experience
  c1: Fingerprint,   // Brand Distinctiveness
  c2: Lightbulb,     // Brand Innovation
  c3: Zap,           // Disruption Urgency
};

export default function GDTPage() {
  const data = espolonAnalysis;

  return (
    <main className="min-h-screen" data-brand={data.brand.id}>
      {/* Hero Section - Two Equal Squares */}
      <section className="px-8 md:px-16 lg:px-24 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Square: Text Content */}
          <div className="aspect-square p-8 lg:p-12 flex flex-col justify-center">
            {/* Title: Brand name + Growth Diagnosis */}
            <h1 className="gdt-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6">
              <span className="gdt-accent-text">{data.brand.name.split(' ')[0]}</span>
              <br />
              <span className="text-[var(--gdt-text-primary)]">Growth Diagnosis</span>
            </h1>

            {/* Metadata pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-block text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[var(--gdt-border-accent)] text-[var(--gdt-accent)]">
                {data.brand.category}
              </span>
              <span className="inline-block text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[var(--gdt-border-accent)] text-[var(--gdt-accent)]">
                {data.brand.market}
              </span>
              <span className="inline-block text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[var(--gdt-border)] text-[var(--gdt-text-muted)]">
                {data.brand.date}
              </span>
            </div>
          </div>

          {/* Right Square: Cover Illustration */}
          <div className="aspect-square overflow-hidden">
            <img
              src={`/${data.brand.id}-cover.png`}
              alt={`${data.brand.name} Growth Diagnosis Cover`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
        </div>
      </div>

      {/* Growth Profile - The Brand Narrative */}
      <section className="px-8 md:px-16 lg:px-24 py-16 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left: Growth Profile Illustration */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={`/growth-systems/${data.growthProfile.id}.png`}
                  alt={`${data.growthProfile.name} Growth Profile`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-2">
              <p className="text-sm uppercase tracking-widest gdt-accent-text mb-2">
                Growth Profile
              </p>
              <h2 className="gdt-display text-3xl md:text-4xl mb-6">
                {data.growthProfile.name}
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-[var(--gdt-text-secondary)] leading-relaxed">
                  {data.growthProfile.definition}
                </p>
                <p className="text-[var(--gdt-text-primary)] leading-relaxed">
                  {data.growthProfile.implications}
                </p>
              </div>

              {/* Footnote */}
              <p className="text-xs text-[var(--gdt-text-muted)] italic mt-8">
                *{data.growthProfile.name}: Brands hitting growth ceilings due to positioning ambiguity and cultural limitations—requiring strategic clarity and cultural engagement to unlock expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
        </div>
      </div>

      {/* Diagnostic Overview - 3x3 Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Headers Row */}
          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <div>
              <p className="text-sm uppercase tracking-widest gdt-accent-text mb-1">
                Section A
              </p>
              <h3 className="gdt-display text-2xl mb-2">
                Brand & Business Alignment
              </h3>
              <p className="text-sm text-[var(--gdt-text-secondary)]">
                Evaluates how effectively your brand positioning creates financial value
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest gdt-accent-text mb-1">
                Section B
              </p>
              <h3 className="gdt-display text-2xl mb-2">
                Audience Connection
              </h3>
              <p className="text-sm text-[var(--gdt-text-secondary)]">
                Evaluates the strength of connection between your brand and audience
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest gdt-accent-text mb-1">
                Section C
              </p>
              <h3 className="gdt-display text-2xl mb-2">
                Degree of Transformation
              </h3>
              <p className="text-sm text-[var(--gdt-text-secondary)]">
                Evaluates how much change is needed and your readiness for transformation
              </p>
            </div>
          </div>

          {/* 3 Column Layout - Each section is a cohesive column */}
          <div className="grid gap-6 md:grid-cols-3" style={{ alignItems: 'stretch' }}>
            {['A', 'B', 'C'].map((sectionId) => {
              const sectionComponents = data.components
                .filter((c) => c.section === sectionId)
                .sort((a, b) => a.id.localeCompare(b.id));

              return (
                <div
                  key={sectionId}
                  className="gdt-card flex flex-col"
                  style={{ minHeight: '100%', alignSelf: 'stretch' }}
                >
                  {sectionComponents.map((component, idx) => (
                    <div
                      key={component.id}
                      className={`grid grid-cols-[4px_1fr] ${idx !== sectionComponents.length - 1 ? 'border-b border-b-[var(--gdt-border)]' : ''}`}
                      style={{ height: '220px' }}
                    >
                      {/* Accent bar - grid child stretches full height */}
                      <div style={{ backgroundColor: getScoreColor(component.score) }} />
                      <Link
                        href={`#${component.id}`}
                        className="flex flex-col p-5 hover:bg-[var(--gdt-bg-tertiary)] transition-colors group"
                      >
                      {/* Header: 2 columns */}
                      <div className="flex justify-between mb-5">
                        {/* Left column: Icon on top, Name at bottom */}
                        <div className="flex flex-col justify-between">
                          {/* Icon */}
                          {(() => {
                            const IconComponent = componentIcons[component.id.toLowerCase()];
                            return IconComponent ? (
                              <IconComponent className="gdt-accent-text" size={36} />
                            ) : null;
                          })()}
                          <h3 className="gdt-display text-xl leading-tight group-hover:text-[var(--gdt-accent)] transition-colors">
                            {component.name}
                          </h3>
                        </div>
                        {/* Right column: Score with /10 on top, Pill at bottom */}
                        <div className="flex flex-col items-end justify-between">
                          <div className="flex items-baseline gap-1">
                            <span className={`gdt-mono score-${getScoreTier(component.score)}`} style={{ fontSize: '2rem', lineHeight: '1' }}>
                              {component.score.toFixed(1)}
                            </span>
                            <span className="text-[var(--gdt-text-muted)]" style={{ fontSize: '1rem' }}>/10</span>
                          </div>
                          <span className={`inline-block text-xs px-2.5 py-1 rounded-full tier-badge-${getScoreTier(component.score)}`}>
                            {component.tier}
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-[var(--gdt-text-primary)] font-medium leading-snug">
                        {component.wsn.headline}
                      </p>
                      <p className="text-sm text-[var(--gdt-text-secondary)] mt-1 leading-snug">
                        {component.wsn.subline}
                      </p>
                      </Link>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
        </div>
      </div>

      {/* Growth Barrier */}
      <section className="px-8 md:px-16 lg:px-24 py-16 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-red-400 mb-2">
            Growth Barrier
          </p>
          <h2 className="gdt-display text-3xl md:text-4xl mb-4">
            {data.growthBarrier.headline}
          </h2>
          <p className="text-lg text-[var(--gdt-text-secondary)] mb-8 max-w-3xl">
            {data.growthBarrier.description}
          </p>

          {/* Supporting cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {data.growthBarrier.items.map((item, index) => (
              <div
                key={index}
                className="gdt-card p-5 border-l-4 border-l-red-500/50"
              >
                <h3 className="font-semibold text-[var(--gdt-text-primary)] mb-2">
                  {item.constraint}
                </h3>
                <p className="text-sm text-[var(--gdt-text-secondary)] leading-relaxed">
                  {item.evidence.charAt(0).toUpperCase() + item.evidence.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
        </div>
      </div>

      {/* Growth Solution */}
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest gdt-accent-text mb-2">
            Growth Solution
          </p>
          <h2 className="gdt-display text-3xl md:text-4xl mb-4">
            {data.growthSolution.headline}
          </h2>
          <p className="text-lg text-[var(--gdt-text-secondary)] mb-8 max-w-3xl">
            {data.growthSolution.description}
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {data.growthSolution.actions.map((action, index) => {
              const [title, ...rest] = action.split(':');
              const description = rest.join(':').trim();
              return (
                <div
                  key={index}
                  className="gdt-card p-5 border-l-4 border-l-[var(--gdt-accent)]"
                >
                  <h3 className="font-semibold text-[var(--gdt-text-primary)] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--gdt-text-secondary)] leading-relaxed">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
        </div>
      </div>

      {/* Growth System */}
      <section className="px-8 md:px-16 lg:px-24 py-16 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest gdt-accent-text mb-2">
            Growth System
          </p>
          <h2 className="gdt-display text-3xl md:text-4xl mb-4">
            {data.growthSystem.headline}
          </h2>
          <p className="text-lg text-[var(--gdt-text-secondary)] mb-8 max-w-3xl">
            {data.growthSystem.description}
          </p>

          {/* Phases - 3 column layout */}
          <div className="grid gap-6 md:grid-cols-3">
            {data.growthSystem.phases.map((phase, index) => (
              <div key={phase.phase} className="flex flex-col">
                {/* Phase header */}
                <div className="mb-4">
                  <span className="gdt-display text-2xl gdt-accent-text">{index + 1}. {phase.phase}</span>
                  <p className="text-sm text-[var(--gdt-text-secondary)] mt-1">{phase.description}</p>
                </div>

                {/* Stacked outputs */}
                <div className="space-y-4 flex-1">
                  {phase.outputs.map((output) => (
                    <div key={output.name} className="gdt-card p-5 border-l-4 border-l-[var(--gdt-accent)]" style={{ minHeight: '120px' }}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-[var(--gdt-text-primary)]">{output.name}</h4>
                        <span className="gdt-mono text-xs gdt-accent-text">{Math.round(output.score * 10)}%</span>
                      </div>
                      <p className="text-sm text-[var(--gdt-text-secondary)]">
                        {output.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Divider before Deep Dives */}
      <div className="px-8 md:px-16 lg:px-24 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
          <p className="text-center text-[var(--gdt-text-muted)] text-sm mt-8">
            Detailed Component Analysis
          </p>
        </div>
      </div>

      {/* Component Deep Dives */}
      {data.sections.map((section) => (
        <section
          key={section.id}
          id={`section-${section.id.toLowerCase()}`}
          className="px-8 md:px-16 lg:px-24 py-16"
        >
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="mb-12">
              <p className="text-sm uppercase tracking-widest gdt-accent-text mb-2">
                Section {section.id}
              </p>
              <h2 className="gdt-display text-3xl md:text-4xl mb-3">
                {section.name}
              </h2>
              <p className="text-[var(--gdt-text-secondary)]">
                {section.id === 'A' && 'Evaluates how effectively your brand positioning creates financial value'}
                {section.id === 'B' && 'Evaluates the strength of connection between your brand and audience'}
                {section.id === 'C' && 'Evaluates how much change is needed and your readiness for transformation'}
              </p>
            </div>

            {/* Components in this section */}
            <div className="space-y-12">
              {data.components
                .filter((c) => c.section === section.id)
                .map((component) => (
                  <article
                    key={component.id}
                    id={component.id}
                    className="gdt-card p-6"
                  >
                    {/* Component header */}
                    <div className="flex items-end justify-between mb-8">
                      <div>
                        <div className="flex items-center gap-3">
                          {(() => {
                            const IconComponent = componentIcons[component.id.toLowerCase()];
                            return IconComponent ? (
                              <IconComponent className="gdt-accent-text" size={28} />
                            ) : null;
                          })()}
                          <h3 className="gdt-display text-4xl leading-none">{component.name}</h3>
                        </div>
                        <p className="text-sm text-[var(--gdt-text-secondary)] mt-1" style={{ marginLeft: '40px' }}>
                          {component.id === 'a1' && "Measures your brand's Meaningful Difference vs. competitors"}
                          {component.id === 'a2' && "Evaluates your ability to command premium prices"}
                          {component.id === 'a3' && "Assesses revenue and market share trajectory"}
                          {component.id === 'b1' && "Measures the depth of emotional bonds with consumers"}
                          {component.id === 'b2' && "Evaluates your brand's role in cultural conversations"}
                          {component.id === 'b3' && "Assesses quality and consistency of brand touchpoints"}
                          {component.id === 'c1' && "Measures recognizability of your brand assets"}
                          {component.id === 'c2' && "Evaluates your track record of meaningful innovation"}
                          {component.id === 'c3' && "Assesses external pressures requiring brand response"}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between items-end">
                        <div className="flex items-baseline gap-1">
                          <span className={`gdt-mono score-${getScoreTier(component.score)}`} style={{ fontSize: '2.5rem' }}>
                            {component.score.toFixed(1)}
                          </span>
                          <span className="text-[var(--gdt-text-muted)]" style={{ fontSize: '1.25rem' }}>/10</span>
                        </div>
                        <span className={`inline-block text-xs px-2.5 py-1 rounded-full tier-badge-${getScoreTier(component.score)}`}>
                          {component.tier}
                        </span>
                      </div>
                    </div>

                    {/* WSN Content */}
                    <div className="space-y-5">
                      {/* Headline */}
                      <div>
                        <h4 className="gdt-display text-2xl md:text-3xl mb-1">
                          {component.wsn.headline}
                        </h4>
                        <p className="text-base text-[var(--gdt-text-secondary)]">
                          {component.wsn.subline}
                        </p>
                      </div>

                      {/* What / So What / Now What - 3 column grid */}
                      <div className="grid gap-4 md:grid-cols-3">
                        {/* What */}
                        <div className="gdt-card p-5">
                          <p className="text-sm uppercase tracking-widest gdt-accent-text mb-3">
                            What
                          </p>
                          <p className="text-[var(--gdt-text-primary)] leading-relaxed">{component.wsn.what}</p>
                          {component.wsn.evidence && (
                            <p className="text-sm text-[var(--gdt-text-secondary)] mt-2 leading-relaxed">{component.wsn.evidence}</p>
                          )}
                        </div>

                        {/* So What */}
                        <div className="gdt-card p-5">
                          <p className="text-sm uppercase tracking-widest gdt-accent-text mb-3">
                            So What
                          </p>
                          <p className="text-[var(--gdt-text-primary)] leading-relaxed">{component.wsn.soWhat}</p>
                        </div>

                        {/* Now What */}
                        <div className="gdt-card p-5">
                          <p className="text-sm uppercase tracking-widest gdt-accent-text mb-3">
                            Now What
                          </p>
                          <p className="text-[var(--gdt-text-primary)] leading-relaxed">{component.wsn.nowWhat}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>

          {/* Section divider */}
          <div className="gdt-section-divider mt-16 mx-8 md:mx-16 lg:mx-24" />
        </section>
      ))}

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-8 border-t border-[var(--gdt-border)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-sm text-[var(--gdt-text-muted)]">
            Growth Diagnosis Tool
          </p>
          <p className="text-sm text-[var(--gdt-text-muted)]">
            Generated {data.brand.date}
          </p>
        </div>
      </footer>
    </main>
  );
}
