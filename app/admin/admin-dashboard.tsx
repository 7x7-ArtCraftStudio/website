'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { PortfolioItem } from '@/lib/portfolio';

type Props = { initialItems: PortfolioItem[]; userName: string; signOutPath: string };

export default function AdminDashboard({ initialItems, userName, signOutPath }: Props) {
  const [items, setItems] = useState(initialItems);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const currentYear = useMemo(() => String(new Date().getFullYear()), []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage('กำลังบันทึกผลงาน…');
    const form = event.currentTarget;
    try {
      const response = await fetch('/api/portfolio', { method: 'POST', body: new FormData(form) });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || 'บันทึกไม่สำเร็จ');
      setItems((current) => [payload as PortfolioItem, ...current]);
      form.reset();
      setPreview(null);
      setMessage('เพิ่มผลงานเรียบร้อยแล้ว');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'เกิดข้อผิดพลาด');
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: string) {
    if (!window.confirm('ลบผลงานชิ้นนี้ออกจากเว็บไซต์?')) return;
    const response = await fetch(`/api/portfolio?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (response.ok) setItems((current) => current.filter((item) => item.id !== id));
    else setMessage('ลบผลงานไม่สำเร็จ');
  }

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="flex flex-col gap-4 border-b border-ink/30 bg-ink px-5 py-5 text-paper md:flex-row md:items-center md:justify-between md:px-10">
        <div><p className="font-mono text-xs uppercase tracking-[.18em] text-rust">7x7 Studio / Admin</p><h1 className="mt-1 text-2xl font-semibold">จัดการผลงาน Portfolio</h1></div>
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[.12em]"><span className="text-paper/55">{userName}</span><a href="/" target="_blank">ดูเว็บไซต์ ↗</a><a href={signOutPath} target="_top">ออกจากระบบ</a></div>
      </header>

      <div className="grid gap-0 lg:grid-cols-[minmax(340px,480px)_1fr]">
        <section className="border-b border-ink/30 bg-[#d7c9b5] p-5 lg:min-h-[calc(100vh-86px)] lg:border-b-0 lg:border-r lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[.2em]">New work / เพิ่มผลงาน</p>
          <form onSubmit={submit} className="mt-8">
            <FieldGroup>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field><FieldLabel htmlFor="titleTh">ชื่อผลงาน (ไทย)</FieldLabel><Input id="titleTh" name="titleTh" required className="h-11 rounded-none border-ink/50 bg-paper/55" /></Field>
                <Field><FieldLabel htmlFor="title">Title (English)</FieldLabel><Input id="title" name="title" required className="h-11 rounded-none border-ink/50 bg-paper/55" /></Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field><FieldLabel htmlFor="category">ประเภทงาน</FieldLabel><Input id="category" name="category" placeholder="Sculpture / Wall Art" required className="h-11 rounded-none border-ink/50 bg-paper/55" /></Field>
                <Field><FieldLabel htmlFor="year">ปี</FieldLabel><Input id="year" name="year" defaultValue={currentYear} required className="h-11 rounded-none border-ink/50 bg-paper/55" /></Field>
              </div>
              <Field><FieldLabel htmlFor="materials">วัสดุ</FieldLabel><Input id="materials" name="materials" placeholder="ไม้สัก, เหล็ก, ไฟเบอร์…" required className="h-11 rounded-none border-ink/50 bg-paper/55" /></Field>
              <Field><FieldLabel htmlFor="description">คำบรรยาย</FieldLabel><Textarea id="description" name="description" rows={4} required className="rounded-none border-ink/50 bg-paper/55" /></Field>
              <Field>
                <FieldLabel htmlFor="image">ภาพผลงาน (ไม่เกิน 12MB)</FieldLabel>
                <Input id="image" name="image" type="file" accept="image/*" required className="h-12 rounded-none border-ink/50 bg-paper/55 file:mt-1" onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (preview) URL.revokeObjectURL(preview);
                  setPreview(file ? URL.createObjectURL(file) : null);
                }} />
              </Field>
              {preview && <img src={preview} alt="ตัวอย่างภาพที่จะอัปโหลด" className="aspect-[16/10] w-full border border-ink/30 object-cover" />}
              <Button type="submit" disabled={busy} className="h-12 rounded-none bg-rust px-6 font-mono text-xs uppercase tracking-[.16em] text-white hover:bg-ink">{busy ? 'Saving…' : 'Publish work'}</Button>
              {message && <p role="status" className="font-mono text-xs">{message}</p>}
            </FieldGroup>
          </form>
        </section>

        <section className="p-5 lg:p-10">
          <div className="flex items-end justify-between border-b border-ink/30 pb-4"><div><p className="font-mono text-xs uppercase tracking-[.2em]">Live collection</p><h2 className="mt-2 text-3xl font-semibold">ผลงานที่เพิ่มผ่านระบบ</h2></div><span className="font-mono text-sm">{String(items.length).padStart(2, '0')}</span></div>
          {items.length === 0 ? <div className="mt-8 border border-dashed border-ink/35 p-10 text-center text-ink/55">ยังไม่มีผลงานที่เพิ่มผ่านระบบหลังบ้าน</div> : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{items.map((item) => (
              <article key={item.id} className="border border-ink/25 bg-[#eee6d7]">
                <img src={item.imageUrl} alt={item.titleTh} className="aspect-[4/3] w-full object-cover" />
                <div className="p-4"><div className="flex justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.15em] text-rust">{item.category} · {item.year}</p><h3 className="mt-2 text-lg font-semibold">{item.titleTh}</h3></div><button type="button" onClick={() => remove(item.id)} className="self-start font-mono text-[10px] uppercase text-red-800 hover:underline">ลบ</button></div><p className="mt-2 text-sm text-ink/55">{item.materials}</p></div>
              </article>
            ))}</div>
          )}
        </section>
      </div>
    </main>
  );
}
