'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getScoreTier } from '@/lib/types';

interface BrandMeta {
  id: string;
  name: string;
  category: string;
  market: string;
  date: string;
  accentColor: string;
  totalScore: number;
  growthProfile: string;
  coverImage: string;
}

interface HomePageProps {
  brands: BrandMeta[];
}

const HUB_PASSWORD = 'gdt2026';
const STORAGE_KEY = 'gdt-hub-auth';

export default function HomePage({ brands }: HomePageProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === HUB_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setInputPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--gdt-bg-primary)] flex items-center justify-center">
        <div className="text-[var(--gdt-text-muted)]">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--gdt-bg-primary)] flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="gdt-card p-8">
            <h1 className="gdt-display text-2xl md:text-3xl text-center mb-2">
              Growth Diagnosis Tool
            </h1>
            <p className="text-[var(--gdt-text-secondary)] text-center mb-8">
              Enter password to access brand analyses.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-[var(--gdt-bg-secondary)] border border-[var(--gdt-border)] rounded-lg text-[var(--gdt-text-primary)] placeholder-[var(--gdt-text-muted)] focus:outline-none focus:border-[var(--gdt-accent)] transition-colors"
                  autoFocus
                />
                {error && (
                  <p className="text-red-400 text-sm mt-2">
                    Incorrect password. Please try again.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-[var(--gdt-text-primary)] text-[var(--gdt-bg-primary)] font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Access Hub
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--gdt-bg-primary)]">
      {/* Hero */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="gdt-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Growth Diagnosis Tool
          </h1>
          <p className="text-lg md:text-xl text-[var(--gdt-text-secondary)] max-w-2xl mx-auto">
            Strategic brand analysis powered by AI. Uncover growth barriers,
            identify opportunities, and build actionable growth systems.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24 bg-[var(--gdt-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <div className="gdt-section-divider" />
        </div>
      </div>

      {/* Brand Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[var(--gdt-text-muted)] mb-8">
            {brands.length} Brand {brands.length === 1 ? 'Analysis' : 'Analyses'}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/${brand.id}`}
                className="group block"
              >
                <article
                  className="gdt-card overflow-hidden transition-all duration-300 hover:border-[var(--gdt-border-hover)] hover:shadow-lg"
                  style={{
                    '--card-accent': brand.accentColor,
                  } as React.CSSProperties}
                >
                  {/* Cover Image */}
                  <div className="aspect-[2/1] overflow-hidden bg-[var(--gdt-bg-tertiary)]">
                    <img
                      src={brand.coverImage}
                      alt={`${brand.name} cover`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2
                          className="gdt-display text-2xl md:text-3xl mb-1 transition-colors group-hover:text-[var(--card-accent)]"
                          style={{ color: 'var(--gdt-text-primary)' }}
                        >
                          {brand.name}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-[var(--gdt-text-muted)]">
                          <span>{brand.category}</span>
                          <span>•</span>
                          <span>{brand.market}</span>
                        </div>
                      </div>

                      {/* Score */}
                      <div className="text-right">
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`gdt-mono text-2xl score-${getScoreTier(brand.totalScore / 9)}`}
                          >
                            {(brand.totalScore / 9).toFixed(1)}
                          </span>
                          <span className="text-[var(--gdt-text-muted)] text-sm">/10</span>
                        </div>
                        <span className="text-xs text-[var(--gdt-text-muted)]">avg score</span>
                      </div>
                    </div>

                    {/* Growth Profile pill */}
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{
                          borderColor: brand.accentColor,
                          color: brand.accentColor,
                        }}
                      >
                        {brand.growthProfile}
                      </span>
                      <span className="text-xs text-[var(--gdt-text-muted)]">
                        {brand.date}
                      </span>
                    </div>
                  </div>

                  {/* Accent bar at bottom */}
                  <div
                    className="h-1 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: brand.accentColor }}
                  />
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-8 border-t border-[var(--gdt-border)]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-[var(--gdt-text-muted)]">
            Growth Diagnosis Tool • Powered by AI
          </p>
        </div>
      </footer>
    </main>
  );
}
