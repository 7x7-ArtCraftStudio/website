import publishedRecords from '@/public/portfolio-admin/data.json';
import { catalogWorks, type CatalogWork } from '@/lib/catalog';
import { sitePath } from '@/lib/paths';

export const publishedWorks = (publishedRecords as CatalogWork[]).map((record) => ({
  ...record,
  imageUrl: sitePath(record.imageUrl),
  fullImageUrl: sitePath(record.fullImageUrl),
}));

export const allCatalogWorks = [...catalogWorks, ...publishedWorks];
export const portfolioWorkCount = allCatalogWorks.length;

