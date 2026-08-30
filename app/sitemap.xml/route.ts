export async function GET() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://7x7-artcraftstudio.github.io/website/').replace(/\/$/, '');
  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}/</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>${base}/projects</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>${base}/studio</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${base}/team</loc><lastmod>${lastmod}</lastmod><changefreq>yearly</changefreq><priority>0.8</priority></url>
  <url><loc>${base}/contact</loc><lastmod>${lastmod}</lastmod><changefreq>yearly</changefreq><priority>0.8</priority></url>
</urlset>`;
  return new Response(xml, { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}

export const dynamic = 'force-static';
