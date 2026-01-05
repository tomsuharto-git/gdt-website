import { getAllBrandsMeta } from '@/data';
import HomePage from '@/components/HomePage';

export default function GDTHub() {
  const brands = getAllBrandsMeta();

  return <HomePage brands={brands} />;
}
