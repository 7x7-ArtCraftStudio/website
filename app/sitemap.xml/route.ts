export async function GET() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thanapornj9.github.io/web/').replace(/\/$/, '');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>`;
  return new Response(xml, { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}
