'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Check, Eye, EyeOff, ImagePlus, LockKeyhole, Upload } from 'lucide-react';
import { catalogCategoryDetails, catalogCategoryOrder, type CatalogCategory, type CatalogWork } from '@/lib/catalog-gallery';
import { catalogWorks } from '@/lib/catalog';

const PASSWORD_HASH = 'cce544901c0c5cc9972753462010e28192209e9ecb094fdec77ef377593f85a7';
const REPOSITORY = '7x7-ArtCraftStudio/website';
const BRANCH = 'main';
const MANIFEST_PATH = 'public/portfolio-admin/data.json';
const SESSION_KEY = '7x7-admin-unlocked';

type PublishState = { tone: 'idle' | 'working' | 'success' | 'error'; message: string };

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = '';
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

function textToBase64(value: string) {
  return bytesToBase64(new TextEncoder().encode(value));
}

function decodeBase64(value: string) {
  const binary = atob(value.replace(/\n/g, ''));
  return new TextDecoder().decode(Uint8Array.from(binary, (character) => character.charCodeAt(0)));
}

function extensionFor(file: File) {
  const byType: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
  return byType[file.type] ?? file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
}

async function githubRequest(path: string, token: string, init?: RequestInit) {
  const response = await fetch(`https://api.github.com/repos/${REPOSITORY}/contents/${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });
  if (!response.ok) {
    const detail = await response.json().catch(() => null) as { message?: string } | null;
    throw new Error(detail?.message || `GitHub ตอบกลับด้วยสถานะ ${response.status}`);
  }
  return response.json();
}

async function uploadFile(path: string, file: File, token: string, message: string) {
  const content = bytesToBase64(new Uint8Array(await file.arrayBuffer()));
  await githubRequest(path, token, {
    method: 'PUT',
    body: JSON.stringify({ message, content, branch: BRANCH }),
  });
}

export function AdminPortfolio() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [title, setTitle] = useState('');
  const [materials, setMaterials] = useState('');
  const [categories, setCategories] = useState<CatalogCategory[]>([]);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [mainFile, setMainFile] = useState<File | null>(null);
  const [token, setToken] = useState('');
  const [publishState, setPublishState] = useState<PublishState>({ tone: 'idle', message: '' });

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(SESSION_KEY) === 'yes');
  }, []);

  const previewUrl = useMemo(() => previewFile ? URL.createObjectURL(previewFile) : '', [previewFile]);
  const mainUrl = useMemo(() => mainFile ? URL.createObjectURL(mainFile) : '', [mainFile]);

  useEffect(() => () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (mainUrl) URL.revokeObjectURL(mainUrl);
  }, [previewUrl, mainUrl]);

  async function login(event: FormEvent) {
    event.preventDefault();
    if (await sha256(password) !== PASSWORD_HASH) {
      setLoginError('รหัสผ่านไม่ถูกต้อง');
      return;
    }
    sessionStorage.setItem(SESSION_KEY, 'yes');
    setUnlocked(true);
    setPassword('');
    setLoginError('');
  }

  function toggleCategory(category: CatalogCategory) {
    setCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
  }

  async function publish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!previewFile || !mainFile || categories.length === 0 || !token.trim()) {
      setPublishState({ tone: 'error', message: 'กรุณาใส่รูปทั้ง 2 รูป เลือกหมวดหมู่อย่างน้อย 1 หมวด และใส่ GitHub token' });
      return;
    }
    if (previewFile.size > 15 * 1024 * 1024 || mainFile.size > 15 * 1024 * 1024) {
      setPublishState({ tone: 'error', message: 'รูปแต่ละไฟล์ต้องมีขนาดไม่เกิน 15 MB' });
      return;
    }

    setPublishState({ tone: 'working', message: 'กำลังอัปโหลดรูปและเผยแพร่ผลงาน…' });
    try {
      const manifest = await githubRequest(MANIFEST_PATH, token.trim()) as { content: string; sha: string };
      const current = JSON.parse(decodeBase64(manifest.content)) as CatalogWork[];
      const maxNumber = Math.max(
        ...catalogWorks.map((item) => Number(item.number) || 0),
        ...current.map((item) => Number(item.number) || 0),
      );
      const number = String(maxNumber + 1).padStart(2, '0');
      const id = `studio-${Date.now()}`;
      const previewPath = `public/portfolio-admin/assets/${id}-preview.${extensionFor(previewFile)}`;
      const mainPath = `public/portfolio-admin/assets/${id}-main.${extensionFor(mainFile)}`;

      await uploadFile(previewPath, previewFile, token.trim(), `Add portfolio preview ${number}`);
      await uploadFile(mainPath, mainFile, token.trim(), `Add portfolio main image ${number}`);

      const primary = categories[0];
      const item: CatalogWork = {
        id,
        number,
        title: title.trim() || `Project No. ${number}`,
        titleTh: title.trim() || `ผลงานหมายเลข ${number}`,
        category: catalogCategoryDetails[primary].eyebrow,
        categories,
        materials: materials.trim() || catalogCategoryDetails[primary].materials,
        description: catalogCategoryDetails[primary].description,
        imageUrl: `/${previewPath.replace(/^public\//, '')}`,
        fullImageUrl: `/${mainPath.replace(/^public\//, '')}`,
        catalogPage: 0,
        objectKey: null,
        year: String(new Date().getFullYear()),
        sortOrder: catalogWorks.length + current.length,
        createdAt: new Date().toISOString(),
      };
      const nextManifest = JSON.stringify([...current, item], null, 2) + '\n';
      await githubRequest(MANIFEST_PATH, token.trim(), {
        method: 'PUT',
        body: JSON.stringify({
          message: `Publish portfolio project ${number}`,
          content: textToBase64(nextManifest),
          sha: manifest.sha,
          branch: BRANCH,
        }),
      });

      setTitle('');
      setMaterials('');
      setCategories([]);
      setPreviewFile(null);
      setMainFile(null);
      setPublishState({ tone: 'success', message: `เผยแพร่ผลงานหมายเลข ${number} แล้ว GitHub Pages จะอัปเดตภายในประมาณ 1–3 นาที` });
    } catch (error) {
      setPublishState({ tone: 'error', message: error instanceof Error ? `เผยแพร่ไม่สำเร็จ: ${error.message}` : 'เผยแพร่ไม่สำเร็จ กรุณาลองใหม่' });
    }
  }

  if (!unlocked) {
    return (
      <section className="flex min-h-[calc(100svh-52px)] items-center justify-center px-5 py-24">
        <form onSubmit={login} className="w-full max-w-md border border-paper/20 bg-[#171410] p-6 md:p-10">
          <LockKeyhole className="size-8 text-rust" />
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[.22em] text-rust">Restricted area</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-.055em]">Admin login</h1>
          <p className="mt-4 leading-7 text-paper/55">เข้าสู่ระบบเพื่อเพิ่มผลงานใหม่ในหน้า Portfolio</p>
          <label htmlFor="admin-password" className="mt-10 block font-mono text-[10px] uppercase tracking-[.16em] text-paper/55">Password</label>
          <div className="mt-2 flex border border-paper/25 focus-within:border-rust">
            <input id="admin-password" type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" className="min-w-0 flex-1 bg-transparent px-4 py-3 outline-none" required />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="px-4 text-paper/50 hover:text-paper" aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}>{showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}</button>
          </div>
          {loginError ? <p className="mt-3 text-sm text-rust">{loginError}</p> : null}
          <button type="submit" className="mt-6 flex w-full items-center justify-center gap-3 bg-rust px-5 py-3 font-mono text-xs uppercase tracking-[.16em] hover:bg-[#b74822]">เข้าสู่ระบบ <ArrowUpRight className="size-4" /></button>
        </form>
      </section>
    );
  }

  return (
    <section className="px-5 pb-24 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 border-b border-paper/20 pb-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-rust">Portfolio publisher</p><h1 className="mt-3 text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[1.08] tracking-[-.07em]">เพิ่มผลงาน<br/><span className="text-rust">ชิ้นใหม่</span></h1></div>
          <p className="max-w-xl leading-7 text-paper/55">อัปโหลดภาพพรีวิวสำหรับหน้ารวม และภาพหลักความละเอียดสูงสำหรับหน้ารายละเอียด เลือกหลายหมวดหมู่ได้ตามลักษณะของผลงาน</p>
        </div>

        <form onSubmit={publish} className="mt-12 grid gap-12 lg:grid-cols-[1fr_.7fr]">
          <div className="space-y-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <ImageField id="preview-image" label="รูปพรีวิว" hint="แนะนำ 3:2 · JPG/PNG/WebP · ไม่เกิน 15 MB" file={previewFile} url={previewUrl} onChange={setPreviewFile} />
              <ImageField id="main-image" label="รูปหลัก" hint="ภาพเต็มความละเอียดสูง · ไม่เกิน 15 MB" file={mainFile} url={mainUrl} onChange={setMainFile} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-rust">หมวดหมู่ผลงาน · เลือกได้หลายหมวด</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {catalogCategoryOrder.map((category) => {
                  const checked = categories.includes(category);
                  return <button key={category} type="button" aria-pressed={checked} onClick={() => toggleCategory(category)} className={`flex items-center justify-between border px-4 py-3 text-left transition ${checked ? 'border-rust bg-rust text-paper' : 'border-paper/20 text-paper/65 hover:border-paper/55'}`}><span>{catalogCategoryDetails[category].label}</span>{checked ? <Check className="size-4" /> : <span className="font-mono text-[9px] uppercase">{category}</span>}</button>;
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6 border-paper/20 lg:border-l lg:pl-10">
            <label className="block"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-paper/55">ชื่อผลงาน (ไม่บังคับ)</span><input value={title} onChange={(event) => setTitle(event.target.value)} className="mt-2 w-full border border-paper/25 bg-transparent px-4 py-3 outline-none focus:border-rust" placeholder="ถ้าเว้นว่าง ระบบจะใส่หมายเลขให้" /></label>
            <label className="block"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-paper/55">วัสดุ (ไม่บังคับ)</span><input value={materials} onChange={(event) => setMaterials(event.target.value)} className="mt-2 w-full border border-paper/25 bg-transparent px-4 py-3 outline-none focus:border-rust" placeholder="เช่น ไม้ · เหล็ก · ไฟเบอร์" /></label>
            <div className="border border-rust/35 bg-rust/10 p-5"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-rust">GitHub publishing key</p><p className="mt-3 text-sm leading-6 text-paper/55">ใช้ Fine-grained token ที่ให้สิทธิ์ Contents: Read and write เฉพาะ repository 7x7-ArtCraftStudio/website เท่านั้น ระบบจะใช้ครั้งเดียวและไม่บันทึก token</p><a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 border-b border-rust pb-1 font-mono text-[9px] uppercase tracking-[.14em] text-rust">สร้าง token บน GitHub <ArrowUpRight className="size-3" /></a><input type="password" value={token} onChange={(event) => setToken(event.target.value)} autoComplete="off" className="mt-4 w-full border border-paper/25 bg-ink px-4 py-3 font-mono text-sm outline-none focus:border-rust" placeholder="github_pat_…" /></div>
            {publishState.message ? <div role="status" className={`border p-4 text-sm leading-6 ${publishState.tone === 'success' ? 'border-emerald-500/50 text-emerald-300' : publishState.tone === 'error' ? 'border-rust/60 text-[#ff9d78]' : 'border-paper/20 text-paper/60'}`}>{publishState.message}</div> : null}
            <button type="submit" disabled={publishState.tone === 'working'} className="flex w-full items-center justify-center gap-3 bg-rust px-5 py-4 font-mono text-xs uppercase tracking-[.16em] transition hover:bg-[#b74822] disabled:cursor-wait disabled:opacity-50"><Upload className="size-4" />{publishState.tone === 'working' ? 'กำลังเผยแพร่…' : 'เผยแพร่ผลงาน'}</button>
            <button type="button" onClick={() => { sessionStorage.removeItem(SESSION_KEY); setUnlocked(false); setToken(''); }} className="w-full border border-paper/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[.16em] text-paper/45 hover:text-paper">ออกจากระบบ</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ImageField({ id, label, hint, file, url, onChange }: { id: string; label: string; hint: string; file: File | null; url: string; onChange: (file: File | null) => void }) {
  return (
    <label htmlFor={id} className="group block cursor-pointer">
      <span className="font-mono text-[10px] uppercase tracking-[.18em] text-rust">{label}</span>
      <span className="mt-3 flex aspect-[3/2] items-center justify-center overflow-hidden border border-dashed border-paper/30 bg-paper/5 transition group-hover:border-rust">
        {url ? <img src={url} alt="ตัวอย่างรูปที่เลือก" className="h-full w-full object-cover" /> : <span className="flex flex-col items-center gap-3 text-paper/35"><ImagePlus className="size-8" /><span className="font-mono text-[9px] uppercase tracking-[.14em]">Select image</span></span>}
      </span>
      <span className="mt-3 block text-sm text-paper/45">{file ? file.name : hint}</span>
      <input id={id} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(event) => onChange(event.target.files?.[0] ?? null)} />
    </label>
  );
}
