'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  catalogCategories,
  catalogCategoryDetails,
  type CatalogFilter,
  type CatalogWork,
} from '@/lib/catalog-gallery';

type PortfolioGalleryProps = { works: CatalogWork[] };

export function PortfolioGallery({ works }: PortfolioGalleryProps) {
  const [active, setActive] = useState<CatalogFilter>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const visibleWorks = useMemo(
    () =>
      active === 'All'
        ? works
        : works.filter((work) => work.categories.includes(active)),
    [active, works],
  );
  const selectedIndex = selectedId
    ? visibleWorks.findIndex((work) => work.id === selectedId)
    : -1;
  const selected = selectedIndex >= 0 ? visibleWorks[selectedIndex] : null;
  const selectedPhotos = selected?.galleryImageUrls ?? (selected ? [selected.fullImageUrl] : []);

  useEffect(() => {
    setActivePhotoIndex(0);
  }, [selectedId]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedId(null);
      if (event.key === 'ArrowLeft') {
        setSelectedId(
          visibleWorks[
            (selectedIndex - 1 + visibleWorks.length) % visibleWorks.length
          ].id,
        );
      }
      if (event.key === 'ArrowRight') {
        setSelectedId(
          visibleWorks[(selectedIndex + 1) % visibleWorks.length].id,
        );
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected, selectedIndex, visibleWorks]);

  function selectFilter(filter: CatalogFilter) {
    setActive(filter);
    setSelectedId(null);
  }

  function move(step: number) {
    if (!visibleWorks.length) return;
    const nextIndex =
      (selectedIndex + step + visibleWorks.length) % visibleWorks.length;
    setSelectedId(visibleWorks[nextIndex].id);
  }

  return (
    <>
      <div className="sticky top-[41px] z-30 border-y border-paper/20 bg-ink/95 px-5 py-3 backdrop-blur-xl md:top-[57px] md:px-10 md:py-4">
        <div className="mx-auto max-w-[1600px]">
          <label htmlFor="catalog-filter" className="sr-only">เลือกหมวดหมู่ผลงาน</label>
          <select
            id="catalog-filter"
            value={active}
            onChange={(event) => selectFilter(event.target.value as CatalogFilter)}
            className="w-full border border-paper/25 bg-ink px-4 py-3 font-mono text-[11px] uppercase tracking-[.14em] text-paper sm:hidden"
          >
            {catalogCategories.map((filter) => {
              const count = filter === 'All'
                ? works.length
                : works.filter((work) => work.categories.includes(filter)).length;
              const label = filter === 'All' ? 'ทั้งหมด' : catalogCategoryDetails[filter].label;
              return <option key={filter} value={filter}>{label} · {String(count).padStart(2, '0')} ผลงาน</option>;
            })}
          </select>

          <div className="hidden gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex">
          {catalogCategories.map((filter) => {
            const count =
              filter === 'All'
                ? works.length
                : works.filter((work) => work.categories.includes(filter))
                    .length;
            const label =
              filter === 'All' ? 'ทั้งหมด' : catalogCategoryDetails[filter].label;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => selectFilter(filter)}
                aria-pressed={active === filter}
                className={`shrink-0 border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[.14em] transition ${
                  active === filter
                    ? 'border-rust bg-rust text-paper'
                    : 'border-paper/20 text-paper/55 hover:border-paper/55 hover:text-paper'
                }`}
              >
                {label}{' '}
                <span className="ml-1 opacity-55">
                  {String(count).padStart(2, '0')}
                </span>
              </button>
            );
          })}
          </div>
        </div>
      </div>

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-end justify-between gap-5 border-b border-paper/20 pb-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-rust">
                Current selection
              </p>
              <h2 className="mt-2 text-4xl font-semibold leading-[1.15] tracking-[-.045em] md:text-6xl">
                {active === 'All'
                  ? 'ผลงานทั้งหมด'
                  : catalogCategoryDetails[active].label}
              </h2>
            </div>
            <p className="font-mono text-xs text-paper/40">
              {visibleWorks.length} / {works.length}
            </p>
          </div>

          <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {visibleWorks.map((work, index) => (
              <article key={work.id} className="group min-w-0">
                <button
                  type="button"
                  onClick={() => setSelectedId(work.id)}
                  className="relative block aspect-[3/2] w-full overflow-hidden bg-[#ded5c7] text-left"
                  aria-label={`เปิดดู ${work.titleTh}`}
                >
                  <img
                    src={work.imageUrl}
                    alt={`${work.titleTh} โดย 7x7 Art Craft Studio`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110"
                    loading={index < 6 ? 'eager' : 'lazy'}
                  />
                  <div className="grain absolute inset-0 opacity-20" />
                  <span className="absolute left-3 top-3 bg-ink px-2.5 py-1.5 font-mono text-[9px] tracking-[.16em] text-paper">
                    P.{work.number}
                  </span>
                  <span className="absolute bottom-3 right-3 translate-y-2 bg-paper px-3 py-2 font-mono text-[9px] uppercase tracking-[.14em] text-ink opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    View detail ↗
                  </span>
                </button>
                <div className="mt-4 border-t border-paper/20 pt-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-.025em]">
                        {work.titleTh}
                      </h3>
                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[.13em] text-paper/40">
                        2026 Collection
                      </p>
                    </div>
                    <p className="max-w-[48%] text-right font-mono text-[9px] uppercase leading-5 tracking-[.11em] text-rust">
                      {work.categories
                        .map(
                          (category) =>
                            catalogCategoryDetails[category].eyebrow,
                        )
                        .join(' · ')}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected ? (
        <dialog
          open
          className="fixed inset-0 z-[100] m-0 grid h-full max-h-none w-full max-w-none border-0 bg-ink/98 p-3 text-paper md:p-7"
          aria-modal="true"
          aria-label={selected.titleTh}
        >
          <div className="grid min-h-0 grid-cols-[minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)_auto_auto] border border-paper/20">
            <div className="flex items-center justify-between border-b border-paper/20 px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-rust">
                <span className="sm:hidden">{selected.catalogPage > 0 ? `Catalog 2026 · P.${selected.number}` : `Studio archive · P.${selected.number}`}</span>
                <span className="hidden sm:inline">{selected.catalogPage > 0 ? `Catalog 2026 · Project ${selected.number}` : `Studio archive · Project ${selected.number}`}</span>
              </p>
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="p-2 text-paper/65 hover:text-paper"
                aria-label="ปิด"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="relative min-h-0 bg-black/25 p-2 md:p-5">
              <img
                src={selectedPhotos[activePhotoIndex] ?? selected.fullImageUrl}
                alt={`${selected.titleTh} · ภาพที่ ${activePhotoIndex + 1}`}
                className="h-full w-full object-contain"
              />
              <span className="pointer-events-none absolute bottom-4 left-4 bg-ink/85 px-3 py-2 font-mono text-[8px] uppercase tracking-[.16em] text-paper/70 md:bottom-7 md:left-7">
                {selected.catalogPage > 0
                  ? 'Full catalog page · ภาพเต็มจาก PDF'
                  : selectedPhotos.length > 1
                    ? `Project photos · ${activePhotoIndex + 1}/${selectedPhotos.length}`
                    : 'Full project image · ภาพหลักของผลงาน'}
              </span>
              <button
                type="button"
                onClick={() => move(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-ink/80 p-3 hover:bg-rust"
                aria-label="ผลงานก่อนหน้า"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-ink/80 p-3 hover:bg-rust"
                aria-label="ผลงานถัดไป"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
            {selectedPhotos.length > 1 ? (
              <div
                role="group"
                aria-label="เลือกภาพผลงาน"
                className="flex w-fit max-w-full justify-self-center gap-2 overflow-x-auto bg-ink/85 p-2"
              >
                {selectedPhotos.map((photo, index) => (
                  <button
                    key={photo}
                    type="button"
                    onClick={() => setActivePhotoIndex(index)}
                    aria-label={`ดูภาพที่ ${index + 1} จาก ${selectedPhotos.length}`}
                    aria-pressed={activePhotoIndex === index}
                    className={`h-12 w-16 shrink-0 overflow-hidden border transition md:h-14 md:w-20 ${activePhotoIndex === index ? 'border-rust' : 'border-paper/30 opacity-65 hover:opacity-100'}`}
                  >
                    <img src={photo} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
            <div className="grid gap-3 border-t border-paper/20 px-4 py-4 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h3 className="text-2xl font-semibold">{selected.titleTh}</h3>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.15em] text-paper/40">
                  {selected.title}
                </p>
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[.13em] text-rust md:text-right">
                {selected.materials}
              </p>
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
