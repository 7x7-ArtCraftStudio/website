'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/7x7art.studio@gmail.com';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

const fieldClassName =
  'mt-2 w-full rounded-none border border-paper/25 bg-paper/[.04] px-4 py-3.5 text-base text-paper outline-none transition placeholder:text-paper/35 focus:border-rust focus:ring-1 focus:ring-rust';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get('_honey') ?? '')) return;

    setSubmitState('sending');

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          _subject: 'New project inquiry — 7x7 Art Craft Studio',
          _template: 'table',
        }),
      });

      if (!response.ok) throw new Error('Unable to deliver form');

      form.reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-paper/20 bg-black/20 p-5 sm:p-8" aria-label="ฟอร์มส่งรายละเอียดโปรเจกต์">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="font-mono text-[10px] uppercase tracking-[.16em] text-paper/60">
          ชื่อ / Name <span className="text-rust">*</span>
          <input name="name" type="text" required autoComplete="name" placeholder="ชื่อของคุณ" className={fieldClassName} />
        </label>

        <label className="font-mono text-[10px] uppercase tracking-[.16em] text-paper/60">
          อีเมล / Email <span className="text-rust">*</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClassName} />
        </label>

        <label className="font-mono text-[10px] uppercase tracking-[.16em] text-paper/60">
          เบอร์โทร / Phone
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="08x xxx xxxx" className={fieldClassName} />
        </label>

        <label className="font-mono text-[10px] uppercase tracking-[.16em] text-paper/60">
          ประเภทงาน / Project type <span className="text-rust">*</span>
          <select name="project_type" required defaultValue="" className={`${fieldClassName} appearance-none`}>
            <option value="" disabled className="text-ink">เลือกประเภทงาน</option>
            <option value="Sculpture" className="text-ink">ประติมากรรม</option>
            <option value="Wall Art" className="text-ink">งานศิลปะบนผนัง</option>
            <option value="Public Installation" className="text-ink">งานศิลปะในพื้นที่สาธารณะ</option>
            <option value="Interior Art" className="text-ink">งานตกแต่งภายใน</option>
            <option value="Custom / Other" className="text-ink">งานสั่งทำ / อื่น ๆ</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block font-mono text-[10px] uppercase tracking-[.16em] text-paper/60">
        รายละเอียดโปรเจกต์ / Project brief <span className="text-rust">*</span>
        <textarea name="message" required rows={6} placeholder="เล่าเรื่องพื้นที่ ขนาดโดยประมาณ งบประมาณ และช่วงเวลาที่ต้องการติดตั้ง" className={`${fieldClassName} resize-y leading-7`} />
      </label>

      <label className="absolute -left-[9999px]" aria-hidden="true">
        Leave this field empty
        <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-6 flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-paper/45">ข้อมูลในฟอร์มจะถูกส่งผ่าน FormSubmit เพื่อจัดส่งเป็นอีเมลถึงสตูดิโอ</p>
        <button type="submit" disabled={submitState === 'sending'} className="inline-flex min-h-12 items-center justify-center gap-3 bg-rust px-6 font-mono text-xs font-bold uppercase tracking-[.14em] text-paper transition hover:bg-[#d25a2d] disabled:cursor-wait disabled:opacity-70">
          {submitState === 'sending' ? <LoaderCircle className="size-4 animate-spin" /> : <Send className="size-4" />}
          {submitState === 'sending' ? 'กำลังส่ง...' : 'ส่งข้อความ'}
        </button>
      </div>

      {submitState === 'success' && (
        <p role="status" className="mt-5 flex items-start gap-2 border border-[#71936b]/60 bg-[#71936b]/15 p-4 text-sm leading-6 text-paper">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#9fca96]" />
          ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่เล่าโปรเจกต์ให้เราฟัง ทีมงานจะติดต่อกลับโดยเร็วที่สุด
        </p>
      )}

      {submitState === 'error' && (
        <p role="alert" className="mt-5 border border-rust/60 bg-rust/10 p-4 text-sm leading-6 text-paper">
          ส่งข้อความไม่สำเร็จ กรุณาลองอีกครั้ง หรือติดต่อโดยตรงที่{' '}
          <a href="mailto:7x7art.studio@gmail.com" className="underline underline-offset-4">7x7art.studio@gmail.com</a>
        </p>
      )}
    </form>
  );
}
