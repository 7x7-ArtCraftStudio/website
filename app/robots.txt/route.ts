export async function GET() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thanapornj9.github.io/web/').replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nSitemap: ${base}/sitemap.xml\n`, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
