'use client';

import { useEffect, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { sitePath } from '@/lib/paths';

const scraps = [
  {
    src: '/scraps/welding.webp',
    title: 'Fire draws the line',
    caption: 'เชื่อมเส้นเหล็กทีละจุด จนโครงสร้างเริ่มมีชีวิต',
    className: 'md:col-span-7 md:row-span-2',
    imageClassName: 'object-[52%_50%]',
  },
  {
    src: '/scraps/hands-01.webp',
    title: 'Two hands, two languages',
    caption: 'เหล็กและพื้นผิวถูกพัฒนาควบคู่กันในพื้นที่ทำงานเดียว',
    className: 'md:col-span-5',
    imageClassName: 'object-center scale-[1.08]',
  },
  {
    src: '/scraps/hands-02.webp',
    title: 'Every mark stays',
    caption: 'รอยเจียร รอยแปรง และรอยมือคือส่วนหนึ่งของชิ้นงาน',
    className: 'md:col-span-5',
    imageClassName: 'object-center scale-[1.08]',
  },
  {
    src: '/scraps/obj-project.webp',
    title: 'Object meets people',
    caption: 'วันส่งมอบไม่ใช่จุดจบ แต่คือวันที่งานเริ่มมีความสัมพันธ์กับคน',
    className: 'md:col-span-5',
    imageClassName: 'object-center scale-[1.08]',
  },
  {
    src: '/scraps/exhibition.webp',
    title: 'Out of the workshop',
    caption: 'งานของเราเดินทางจากสตูดิโอไปสู่นิทรรศการและบทสนทนาใหม่ ๆ',
    className: 'md:col-span-7 md:row-span-2',
    imageClassName: 'object-center scale-[1.06]',
  },
  {
    src: '/scraps/identity.webp',
    title: 'The shape behind 7×7',
    caption: 'เส้นไม้และเส้นเหล็กหลอมรวมเป็นภาษาภาพของสตูดิโอ',
    className: 'md:col-span-5',
    imageClassName: 'object-center scale-[1.08]',
  },
  {
    src: '/scraps/wood-process.webp',
    title: 'From dust to depth',
    caption: 'งานไม้เติบโตผ่านการทดลอง แกะ ขัด และกลับไปแก้อีกครั้ง',
    className: 'md:col-span-12',
    imageClassName: 'object-center scale-[1.05]',
  },
];

export function HomeScrapbook() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : scraps[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-[#cdbda6] px-5 py-20 text-ink md:px-10 md:py-28">
      <div className="paper-texture absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-[1550px]">
        <div className="mb-12 grid gap-8 border-b border-ink/30 pb-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Studio scraps / 04</p>
            <h2 className="mt-5 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.8] tracking-[-.065em]">THE MESS<br/><span className="text-rust">IS THE METHOD.</span></h2>
          </div>
          <div className="flex items-end gap-6 lg:justify-end">
            <p className="max-w-md text-base leading-7 text-ink/60">ภาพบางส่วนจากโต๊ะทำงาน หน้างาน และวันที่ผลงานได้พบผู้คน กดที่ภาพเพื่อเปิดดูใกล้ขึ้น</p>
            <img src={sitePath('/scraps/logo.webp')} alt="ตราสัญลักษณ์ 7x7 Art Craft Studio" className="hidden w-36 rotate-3 mix-blend-multiply md:block"/>
          </div>
        </div>

        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-12 md:auto-rows-[300px]">
          {scraps.map((scrap, index) => (
            <button
              key={scrap.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`${scrap.className} home-scrap-card group relative overflow-hidden border-[7px] border-paper bg-paper text-left shadow-xl`}
              aria-label={`เปิดภาพ ${scrap.title}`}
            >
              <img src={sitePath(scrap.src)} alt="" className={`absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.12] group-hover:grayscale-0 ${scrap.imageClassName}`}/>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"/>
              <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-rust text-paper transition-transform group-hover:rotate-90"><Plus className="size-4"/></span>
              <div className="absolute inset-x-0 bottom-0 p-4 text-paper">
                <p className="font-mono text-[9px] uppercase tracking-[.16em] text-rust">Scrap {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-.03em]">{scrap.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActiveIndex(null)}>
          <div className="relative w-full max-w-6xl border border-paper/25 bg-ink p-3 shadow-2xl md:p-5" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setActiveIndex(null)} className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full bg-rust text-paper" aria-label="ปิดภาพ"><X className="size-5"/></button>
            <div className="relative h-[62vh] min-h-[360px] overflow-hidden bg-paper">
              <img src={sitePath(active.src)} alt={active.title} className={`h-full w-full object-cover ${active.imageClassName}`}/>
              <div className="grain absolute inset-0 opacity-20"/>
            </div>
            <div className="grid gap-4 border-t border-paper/20 px-1 pb-1 pt-5 text-paper md:grid-cols-[.8fr_1.2fr] md:items-start">
              <h3 className="text-3xl font-semibold tracking-[-.04em] md:text-4xl">{active.title}</h3>
              <p className="max-w-2xl leading-7 text-paper/60">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
