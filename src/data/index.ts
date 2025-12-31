import { GDTAnalysis } from '@/lib/types';
import { zynAnalysis } from './zyn';
import { espolonAnalysis } from './espolon';

// All available brand analyses
export const brandAnalyses: Record<string, GDTAnalysis> = {
  zyn: zynAnalysis,
  espolon: espolonAnalysis,
};

// Brand metadata for hub page
export interface BrandMeta {
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

export function getBrandMeta(analysis: GDTAnalysis): BrandMeta {
  return {
    id: analysis.brand.id,
    name: analysis.brand.name,
    category: analysis.brand.category,
    market: analysis.brand.market,
    date: analysis.brand.date,
    accentColor: analysis.brand.accentColor,
    totalScore: analysis.totalScore,
    growthProfile: analysis.growthProfile.name,
    coverImage: `/${analysis.brand.id}-cover.png`,
  };
}

export function getAllBrandsMeta(): BrandMeta[] {
  return Object.values(brandAnalyses).map(getBrandMeta);
}

export function getBrandAnalysis(brandId: string): GDTAnalysis | undefined {
  return brandAnalyses[brandId];
}

export function getAllBrandIds(): string[] {
  return Object.keys(brandAnalyses);
}
