export {
  catalogCategoryDetails,
  catalogCategoryOrder,
  type CatalogCategory,
  type CatalogWork,
} from '@/lib/catalog';

import { catalogCategoryOrder } from '@/lib/catalog';

export const catalogCategories = ['All', ...catalogCategoryOrder] as const;
export type CatalogFilter = (typeof catalogCategories)[number];
