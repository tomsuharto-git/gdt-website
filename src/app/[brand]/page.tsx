import { notFound } from 'next/navigation';
import { getBrandAnalysis, getAllBrandIds } from '@/data';
import BrandPage from '@/components/BrandPage';

interface BrandPageParams {
  params: Promise<{ brand: string }>;
}

// Generate static params for all brands
export async function generateStaticParams() {
  return getAllBrandIds().map((brand) => ({ brand }));
}

// Generate metadata for each brand
export async function generateMetadata({ params }: BrandPageParams) {
  const { brand } = await params;
  const analysis = getBrandAnalysis(brand);

  if (!analysis) {
    return { title: 'Brand Not Found' };
  }

  return {
    title: `${analysis.brand.name} Growth Diagnosis`,
    description: `Strategic growth analysis for ${analysis.brand.name} - ${analysis.growthProfile.name}`,
  };
}

export default async function BrandDiagnosisPage({ params }: BrandPageParams) {
  const { brand } = await params;
  const analysis = getBrandAnalysis(brand);

  if (!analysis) {
    notFound();
  }

  return <BrandPage data={analysis} />;
}
