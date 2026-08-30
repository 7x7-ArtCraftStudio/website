import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '@/app/chatgpt-auth';
import { ensurePortfolioTable, isAdminEmail, listPortfolioItems } from '@/lib/portfolio';

export const dynamic = 'force-dynamic';

async function requireAdmin() {
  const user = await getChatGPTUser();
  if (!user) return { error: new Response('Unauthorized', { status: 401 }) };
  if (!isAdminEmail(user.email)) return { error: new Response('Forbidden', { status: 403 }) };
  return { user };
}

export async function GET() {
  return Response.json(await listPortfolioItems());
}

export async function POST(request: Request) {
  const auth = await requireAdmin();
  if ('error' in auth) return auth.error;

  const form = await request.formData();
  const image = form.get('image');
  const title = String(form.get('title') ?? '').trim();
  const titleTh = String(form.get('titleTh') ?? '').trim();
  const category = String(form.get('category') ?? '').trim();
  const materials = String(form.get('materials') ?? '').trim();
  const description = String(form.get('description') ?? '').trim();
  const year = String(form.get('year') ?? new Date().getFullYear()).trim();

  if (!title || !titleTh || !category || !materials || !description || !(image instanceof File)) {
    return Response.json({ message: 'กรอกข้อมูลและเลือกรูปให้ครบ' }, { status: 400 });
  }
  if (!image.type.startsWith('image/') || image.size > 12 * 1024 * 1024) {
    return Response.json({ message: 'รองรับไฟล์ภาพไม่เกิน 12MB' }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const extension = image.name.split('.').pop()?.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'jpg';
  const objectKey = `portfolio-${id}.${extension}`;
  const imageUrl = `/api/files/${objectKey}`;
  await env.FILES.put(objectKey, image.stream(), {
    httpMetadata: { contentType: image.type, cacheControl: 'public, max-age=31536000, immutable' },
  });

  try {
    await ensurePortfolioTable();
    await env.DB.prepare(`INSERT INTO portfolio_items
      (id, title, title_th, category, materials, description, image_url, object_key, year, sort_order, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .bind(id, title, titleTh, category, materials, description, imageUrl, objectKey, year, Date.now(), new Date().toISOString())
      .run();
  } catch (error) {
    await env.FILES.delete(objectKey);
    throw error;
  }

  return Response.json({ id, title, titleTh, category, materials, description, imageUrl, objectKey, year }, { status: 201 });
}

export async function DELETE(request: Request) {
  const auth = await requireAdmin();
  if ('error' in auth) return auth.error;
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return new Response('Missing id', { status: 400 });

  await ensurePortfolioTable();
  const item = await env.DB.prepare('SELECT object_key AS objectKey FROM portfolio_items WHERE id = ?')
    .bind(id)
    .first<{ objectKey: string | null }>();
  if (!item) return new Response('Not found', { status: 404 });
  if (item.objectKey) await env.FILES.delete(item.objectKey);
  await env.DB.prepare('DELETE FROM portfolio_items WHERE id = ?').bind(id).run();
  return new Response(null, { status: 204 });
}
