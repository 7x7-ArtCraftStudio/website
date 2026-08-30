import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { sitePath } from '@/lib/paths';

export const metadata: Metadata = {
  title: 'บรรยากาศการทำงาน — จากสตูดิโอสู่พื้นที่จริง',
  description:
    'เบื้องหลังการสร้างงานของ 7x7 Art Craft Studio ตั้งแต่การทดลองวัสดุ งานฝีมือ การทำงานร่วมกัน ไปจนถึงการติดตั้งในพื้นที่จริง',
  alternates: { canonical: '/studio' },
};

const studioImage = (number: string) => sitePath(`/working/${number}.jpg`);

export default function StudioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <SiteHeader />

      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink px-5 pb-12 pt-28 text-paper md:px-10 md:pb-16">
        <img
          src={studioImage('04')}
          alt="ศิลปินกำลังทำพื้นผิวงานไม้และวาดภาพในสตูดิโอ"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.98)_0%,rgba(19,17,14,.72)_47%,rgba(19,17,14,.2)_100%)]" />
        <div className="grain absolute inset-0 opacity-35" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <p className="mb-12 font-mono text-[10px] uppercase tracking-[.25em] text-rust lg:mb-16">
              Studio atmosphere · Hands at work
            </p>
            <h1 className="max-w-6xl text-[clamp(4rem,11vw,11rem)] font-semibold leading-[1.08] tracking-[-.08em]">
              พื้นที่ที่ไอเดีย<br />
              <span className="text-rust">เปื้อนฝุ่น</span>
            </h1>
          </div>
          <div className="max-w-xl border-t border-paper/25 pt-5">
            <p className="text-xl leading-9 text-paper/80 md:text-2xl">
              งานของเราไม่ได้เริ่มจากคำตอบที่สมบูรณ์ แต่เริ่มจากการจับวัสดุจริง ถกเถียง ทดลอง และช่วยกันทำให้สิ่งที่ยังไม่ชัดค่อย ๆ มีรูปทรง
            </p>
            <a href="#process" className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-rust">
              Enter the workshop <ArrowDownRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="paper-texture border-b border-ink/30 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.48fr_1.52fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">How we work / 00</p>
            <p className="mt-8 max-w-sm font-mono text-xs leading-6 uppercase tracking-[.13em] text-ink/50">
              Think with hands.<br />Question with materials.<br />Build with people.
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6.7vw,7rem)] font-semibold leading-[1.08] tracking-[-.065em]">
              เราเชื่อว่างานที่ดี<br />
              ไม่ได้เกิดจากความเรียบร้อย<br />
              <span className="text-rust">แต่เกิดจากการลองจริง</span>
            </h2>
            <div className="mt-14 grid gap-8 border-t border-ink/30 pt-8 text-base leading-8 text-ink/65 md:grid-cols-2 md:text-lg">
              <p>ในสตูดิโอเดียวกัน ไม้ เหล็ก ไฟเบอร์ เรซิน สี และความเห็นที่แตกต่างวางอยู่บนโต๊ะเดียวกัน เราเรียนรู้จากวัสดุพอ ๆ กับที่เรียนรู้จากกันและกัน</p>
              <p>ทุกขั้นตอนเปิดพื้นที่ให้แก้ใหม่ ตั้งคำถามใหม่ และเลือกวิธีที่เหมาะกับงานตรงหน้า เพราะสำหรับเรา กระบวนการไม่ได้ซ่อนอยู่หลังผลงาน — กระบวนการคือส่วนหนึ่งของผลงาน</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid gap-8 border-b border-paper/20 pb-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Experiment / 01</p>
              <h2 className="mt-4 text-[clamp(3.8rem,8vw,8.5rem)] font-semibold leading-[1.08] tracking-[-.075em]">คิดด้วยมือ</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-paper/58 md:text-lg">เทเรซินทีละชั้น ดัดเส้นทีละเส้น วาดพื้นผิวทีละรอย การทดลองทำให้เราเห็นคำตอบที่ภาพสเก็ตช์เพียงอย่างเดียวบอกไม่ได้</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <figure className="group lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden bg-paper/10">
                <img src={studioImage('01')} alt="การเทเรซินและประกอบชั้นไม้ในเวิร์กช็อป" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex justify-between gap-5 border-t border-paper/20 pt-3 font-mono text-[9px] uppercase tracking-[.16em] text-paper/45">
                <span>Layer by layer</span><span>Wood · Resin</span>
              </figcaption>
            </figure>
            <figure className="group lg:col-span-5 lg:mt-24">
              <div className="aspect-[4/5] overflow-hidden bg-paper/10">
                <img src={studioImage('05')} alt="การดัดและขึ้นโครงประติมากรรมด้วยเส้นโลหะ" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex justify-between gap-5 border-t border-paper/20 pt-3 font-mono text-[9px] uppercase tracking-[.16em] text-paper/45">
                <span>Shape the structure</span><span>Wire · Hand</span>
              </figcaption>
            </figure>
            <figure className="group lg:col-span-8 lg:col-start-3 lg:mt-12">
              <div className="aspect-[16/9] overflow-hidden bg-paper/10">
                <img src={studioImage('03')} alt="ทีมศิลปินกำลังวาดภาพจิตรกรรมฝาผนังในพื้นที่จริง" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex justify-between gap-5 border-t border-paper/20 pt-3 font-mono text-[9px] uppercase tracking-[.16em] text-paper/45">
                <span>From sketch to wall</span><span>Paint · Site</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="relative min-h-[86svh] overflow-hidden bg-wood text-paper">
        <img src={studioImage('06')} alt="ทีมงานร่วมกันติดตั้งผนังไม้แกะขนาดใหญ่" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(19,17,14,.95)_0%,rgba(19,17,14,.15)_65%)]" />
        <div className="grain absolute inset-0 opacity-25" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-[1600px] items-end px-5 py-12 md:px-10 md:py-16">
          <div className="grid w-full gap-8 border-t border-paper/35 pt-6 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <h2 className="text-[clamp(3.4rem,8vw,8rem)] font-semibold leading-[1.08] tracking-[-.07em]">ไม่มีงานใหญ่<br />กว่าแรงของทีม</h2>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-rust">Build together / 02</p>
              <p className="mt-5 max-w-lg text-lg leading-8 text-paper/76">เมื่อชิ้นงานใหญ่เกินกว่าคนคนเดียวจะยกได้ การฟังจังหวะของกันและกันจึงสำคัญพอ ๆ กับฝีมือ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Make it real / 03</p>
              <h2 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[1.08] tracking-[-.07em]">จากโรงงาน<br />สู่พื้นที่จริง</h2>
              <p className="mt-8 max-w-md text-lg leading-8 text-ink/62">ผลิต ประกอบ ตรวจผิว แพ็ก ขนส่ง และติดตั้ง ทุกระยะคือการส่งต่องานจากมือหนึ่งไปสู่อีกมือหนึ่งโดยไม่ทำให้เจตนาของงานหายไป</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <figure className="md:translate-y-16">
                <div className="aspect-[4/5] overflow-hidden bg-ink/10"><img src={studioImage('07')} alt="กระบวนการผลิตพื้นผิวและผลงานไม้ที่ติดตั้งแล้ว" className="h-full w-full object-cover" /></div>
                <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[.16em] text-ink/50">Surface · Assembly · Finish</figcaption>
              </figure>
              <figure>
                <div className="aspect-[4/5] overflow-hidden bg-ink/10"><img src={studioImage('08')} alt="การผลิตกระถาง การแพ็ก และการขนส่งจากสตูดิโอ" className="h-full w-full object-cover" /></div>
                <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[.16em] text-ink/50">Production · Pack · Deliver</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-rust px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-5 lg:grid-cols-12">
            <figure className="lg:col-span-8">
              <div className="aspect-[16/10] overflow-hidden bg-ink/10"><img src={studioImage('09')} alt="ผลงานเทศกาลที่ติดตั้งในพื้นที่สาธารณะ" className="h-full w-full object-cover" /></div>
              <figcaption className="mt-4 font-mono text-[9px] uppercase tracking-[.16em] text-paper/60">The work meets its people</figcaption>
            </figure>
            <div className="flex flex-col justify-between gap-12 lg:col-span-4 lg:pl-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.22em] text-paper/60">Beyond the workshop / 04</p>
                <h2 className="mt-5 text-[clamp(3.4rem,6vw,6.6rem)] font-semibold leading-[1.08] tracking-[-.065em]">ผลงานจบ<br />เมื่อพื้นที่<br />เริ่มมีชีวิต</h2>
              </div>
              <figure>
                <div className="aspect-[4/3] overflow-hidden bg-ink/10"><img src={studioImage('02')} alt="ทีมศิลปินและบรรยากาศการรับรางวัลศิลปะร่วมสมัย" className="h-full w-full object-cover" /></div>
                <figcaption className="mt-3 font-mono text-[9px] uppercase tracking-[.16em] text-paper/60">Recognition is a trace, not the destination</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[.22em] text-rust">Next work in progress</p>
            <h2 className="max-w-4xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[1.08] tracking-[-.065em]">เอาไอเดียของคุณ<br />มาวางบนโต๊ะเรา</h2>
          </div>
          <a href={sitePath('/contact/')} className="inline-flex w-fit items-center gap-3 border-b border-ink pb-2 font-mono text-xs uppercase tracking-[.18em] hover:text-rust">
            Start a conversation <ArrowDownRight className="size-5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
