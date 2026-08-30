import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';
import { PortfolioGallery } from '@/app/projects/portfolio-gallery';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { catalogCategoryOrder } from '@/lib/catalog';
import { sitePath } from '@/lib/paths';
import { allCatalogWorks, portfolioWorkCount } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: 'Portfolio 2026 — ผลงานศิลปะ งานไม้ งานไฟเบอร์ และประติมากรรม',
  description:
    `ชมผลงานครบ ${portfolioWorkCount} โปรเจกต์ของ 7x7 Art Craft Studio แบ่งตามหมวดไฟเบอร์ งานไม้ วัสดุผสม เหล็ก งานออกแบบ และงานทดลอง`,
  keywords: [
    '7x7 Art Craft Studio portfolio',
    'งานประติมากรรม',
    'งานไฟเบอร์',
    'งานไม้ตกแต่ง',
    'งานศิลปะสั่งทำ',
    'art installation Thailand',
  ],
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />

      <section className="relative min-h-[78vh] overflow-hidden border-b border-paper/20 px-5 pb-12 pt-32 md:px-10 md:pb-16">
        <img
          src={sitePath('/portfolio/central-rayong.jpg')}
          alt="ประติมากรรมแขวนในพื้นที่สาธารณะโดย 7x7 Art Craft Studio"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.98),rgba(19,17,14,.45))]" />
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-[1600px] flex-col justify-end">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[.24em] text-rust">
            Complete archive · March 2026
          </p>
          <h1 className="text-[clamp(4.6rem,13vw,13rem)] font-semibold leading-[.72] tracking-[-.085em]">
            ALL
            <br />
            <span className="text-rust">{portfolioWorkCount} WORKS.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-6 border-t border-paper/25 pt-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-lg leading-8 text-paper/68">
              คลังผลงานจาก ART Catalog 2026 ครบทุกชิ้น ตั้งแต่งานไฟเบอร์ งานไม้ วัสดุผสม
              และประติมากรรม ไปจนถึงงานออกแบบเฉพาะพื้นที่
            </p>
            <p className="font-mono text-xs uppercase tracking-[.16em] text-paper/45">
              {catalogCategoryOrder.length} categories · {portfolioWorkCount} projects
            </p>
          </div>
        </div>
      </section>

      <PortfolioGallery works={allCatalogWorks} />

      <section className="paper-texture px-5 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">
              Your space / Next
            </p>
            <h2 className="mt-5 text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[1.08] tracking-[-.07em]">
              พื้นที่ต่อไป
              <br />
              อาจเป็นของคุณ
            </h2>
          </div>
          <a
            href={sitePath('/contact/')}
            className="inline-flex w-fit items-center gap-3 border-b border-ink pb-2 font-mono text-xs uppercase tracking-[.18em] hover:text-rust"
          >
            Brief us your project <ArrowDownRight className="size-5" />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
