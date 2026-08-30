import { env } from 'cloudflare:workers';

export type PortfolioItem = {
  id: string;
  title: string;
  titleTh: string;
  category: string;
  materials: string;
  description: string;
  imageUrl: string;
  objectKey: string | null;
  year: string;
  sortOrder: number;
  createdAt: string;
};

const createTableSql = `CREATE TABLE IF NOT EXISTS portfolio_items (
  id TEXT PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  title_th TEXT NOT NULL,
  category TEXT NOT NULL,
  materials TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  object_key TEXT,
  year TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
)`;

const createIndexSql = `CREATE INDEX IF NOT EXISTS idx_portfolio_sort_created
  ON portfolio_items(sort_order DESC, created_at DESC)`;

export async function ensurePortfolioTable() {
  const db = env.DB;
  await db.batch([db.prepare(createTableSql), db.prepare(createIndexSql)]);
}

export async function listPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    await ensurePortfolioTable();
    const result = await env.DB.prepare(`SELECT
      id, title, title_th AS titleTh, category, materials, description,
      image_url AS imageUrl, object_key AS objectKey, year,
      sort_order AS sortOrder, created_at AS createdAt
      FROM portfolio_items
      ORDER BY sort_order DESC, created_at DESC`).all<PortfolioItem>();
    return result.results;
  } catch {
    return [];
  }
}

export function isAdminEmail(email: string) {
  const configured = (process.env.ADMIN_EMAILS ?? '7x7art.studio@gmail.com')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  return configured.includes(email.trim().toLowerCase());
}
