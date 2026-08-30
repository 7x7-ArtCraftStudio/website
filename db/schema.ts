import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const portfolioItems = sqliteTable('portfolio_items', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  titleTh: text('title_th').notNull(),
  category: text('category').notNull(),
  materials: text('materials').notNull(),
  description: text('description').notNull(),
  imageUrl: text('image_url').notNull(),
  objectKey: text('object_key'),
  year: text('year').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: text('created_at').notNull(),
});
