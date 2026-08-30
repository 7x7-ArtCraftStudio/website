import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { catalogWorks } from '@/lib/catalog';
import { listPortfolioItems } from '@/lib/portfolio';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'ผลงานและโปรเจกต์',
  description: 'รวมผลงานประติมากรรม งานศิลปะตกแต่ง งานไฟเบอร์ งานไม้ งานเหล็ก และงานติดตั้งเฉพาะพื้นที่ โดย 7x7 Art Craft Studio',
  alternates: { canonical: '/projects' },
};

export default async function ProjectsPage() {
  const uploaded = await listPortfolioItems();
  const works = [...uploaded, ...catalogWorks];
  const categories = [...new Set(works.map((work) => work.category))];

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper">
      <SiteHeader />
      <section className="relative min-h-[78vh] overflow-hidden border-b border-paper/20 px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <img src="/portfolio/central-rayong.jpg" alt="ประติมากรรมแขวนในพื้นที่สาธารณะโดย 7x7 Art Craft Studio" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.98),rgba(19,17,14,.45))]" /><div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1600px] flex-col justify-end">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[.24em] text-rust">Project archive · 2025—2026</p>
          <h1 className="text-[clamp(5rem,14vw,14rem)] font-semibold leading-[.72] tracking-[-.085em]">WORK<br/><span className="text-rust">IN PLACE.</span></h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-paper/25 pt-5 md:flex-row md:items-end md:justify-between"><p className="max-w-2xl text-lg leading-8 text-paper/68">งานทุกชิ้นเริ่มจากคำถามของพื้นที่ แล้วผ่านการวาด ทดลองวัสดุ ผลิต และติดตั้งโดยทีมเดียวกัน</p><p className="font-mono text-xs uppercase tracking-[.16em] text-paper/45">{works.length} selected projects</p></div>
        </div>
      </section>

      <section className="border-b border-paper/20 px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[.15em] text-paper/45"><span className="text-rust">Fields /</span>{categories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-x-5 gap-y-20 md:grid-cols-12">
          {works.map((work, index) => {
            const span = index % 6 === 0 || index % 6 === 3 ? 'md:col-span-7' : 'md:col-span-5';
            const offset = index % 6 === 1 || index % 6 === 4 ? 'md:mt-32' : '';
            return (
              <article key={work.id} className={`${span} ${offset} group`}>
                <div className={`${index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[16/11]'} relative overflow-hidden bg-paper/10`}>
                  <img src={work.imageUrl} alt={`${work.titleTh} — ${work.materials}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110" loading={index < 2 ? 'eager' : 'lazy'} />
                  <div className="grain absolute inset-0 opacity-25" /><span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[9px] uppercase tracking-[.16em] text-ink">P.{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="mt-4 grid gap-4 border-t border-paper/25 pt-4 sm:grid-cols-[1fr_auto]">
                  <div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-rust">{work.category} · {work.year}</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.035em] md:text-4xl">{work.titleTh}</h2><p className="font-mono text-[10px] uppercase tracking-[.13em] text-paper/42">{work.title}</p></div>
                  <p className="max-w-[210px] text-sm leading-6 text-paper/48 sm:text-right">{work.materials}</p>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-paper/58">{work.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="paper-texture px-5 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Your space / Next</p><h2 className="mt-5 text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[.84] tracking-[-.07em]">พื้นที่ต่อไป<br/>อาจเป็นของคุณ</h2></div>
          <a href="/contact" className="inline-flex w-fit items-center gap-3 border-b border-ink pb-2 font-mono text-xs uppercase tracking-[.18em] hover:text-rust">Brief us your project <ArrowDownRight className="size-5" /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
