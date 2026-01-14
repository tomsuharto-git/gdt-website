import { GDTAnalysis } from '@/lib/types';
import { zynAnalysis } from './zyn';
import { espolonAnalysis } from './espolon';
import { survodutideAnalysis } from './survodutide';
import { cavaAnalysis } from './cava';
import { rippleAnalysis } from './ripple';
import { hogwartsLegacyAnalysis } from './hogwarts-legacy';
import { adobeCreativeCloudAnalysis } from './adobe-creative-cloud';

export const brandAnalyses: Record<string, GDTAnalysis> = {
  zyn: zynAnalysis,
  espolon: espolonAnalysis,
  survodutide: survodutideAnalysis,
  cava: cavaAnalysis,
  ripple: rippleAnalysis,
  'hogwarts-legacy': hogwartsLegacyAnalysis,
  'adobe-creative-cloud': adobeCreativeCloudAnalysis,
};

export const getBrandAnalysis = (brandId: string): GDTAnalysis | undefined => {
  return brandAnalyses[brandId];
};

export const getAllBrands = (): GDTAnalysis[] => {
  return Object.values(brandAnalyses);
};

export const getBrandIds = (): string[] => {
  return Object.keys(brandAnalyses);
};

export const getAllBrandIds = getBrandIds;

export interface BrandMeta {
  id: string;
  name: string;
  market: string;
  category: string;
  date: string;
  accentColor: string;
  totalScore: number;
  growthProfile: string;
  coverImage: string;
}

export const getAllBrandsMeta = (): BrandMeta[] => {
  return Object.values(brandAnalyses).map(analysis => ({
    id: analysis.brand.id,
    name: analysis.brand.name,
    market: analysis.brand.market,
    category: analysis.brand.category,
    date: analysis.brand.date,
    accentColor: analysis.brand.accentColor,
    totalScore: analysis.totalScore,
    growthProfile: analysis.growthProfile?.name || analysis.growthSummary?.sequence?.split(' → ')[0] || 'Analysis',
    coverImage: `/${analysis.brand.id}-cover.png`,
  }));
};
