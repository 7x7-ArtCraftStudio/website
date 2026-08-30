import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { sitePath } from '@/lib/paths';

export const metadata: Metadata = {
  title: 'ทีมศิลปิน',
  description: 'รู้จักศิลปินทั้ง 7 คนเบื้องหลัง 7x7 Art Craft Studio กลุ่มคนต่างที่มาแต่มีอุดมการณ์เดียวกันในการสร้างงานศิลปะที่เหมาะสมกับทุกพื้นที่',
  alternates: { canonical: '/team' },
};

const members = [
  { name: 'Pannaruewan Chanbuala', nick: 'Komlom', role: 'Manager', image: sitePath('/team/01.jpg') },
  { name: 'Dnalinrat Boontham', nick: 'Nook', role: 'Designer', image: sitePath('/team/02.jpg') },
  { name: 'Anuphong Phongthai', nick: 'Jame', role: 'Designer', image: sitePath('/team/03.jpg') },
  { name: 'Nattha Lompo', nick: 'Thing-Ly', role: 'Artist', image: sitePath('/team/04.jpg') },
  { name: 'Warasawat Boonchuwit', nick: 'Ohm', role: 'Artist', image: sitePath('/team/05.jpg') },
  { name: 'Wasan Somnuak', nick: 'Sunny', role: 'Artist', image: sitePath('/team/06.jpg') },
  { name: 'Satorn Sanaoseng', nick: 'Nui', role: 'Artist', image: sitePath('/team/07.jpg') },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <SiteHeader />

      <section className="relative flex min-h-screen items-end overflow-hidden bg-ink px-5 pb-12 pt-28 text-paper md:px-10 md:pb-16">
        <img src={sitePath('/portfolio/wood-process.jpg')} alt="พื้นผิวไม้และกระบวนการทำงานในสตูดิโอ" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(19,17,14,.98)_0%,rgba(19,17,14,.75)_55%,rgba(19,17,14,.35)_100%)]" />
        <div className="grain absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <p className="mb-10 font-mono text-[10px] uppercase tracking-[.25em] text-rust">Seven minds · One moving studio</p>
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <h1 className="text-[clamp(5.2rem,16vw,15rem)] font-semibold leading-[.7] tracking-[-.09em]">7<span className="text-rust">×</span>7<span className="text-rust">∞</span></h1>
            <div className="max-w-xl border-t border-paper/25 pt-5">
              <p className="text-xl leading-9 text-paper/80 md:text-2xl">สตูดิโอเล็ก ๆ ที่มีสีสัน ที่ซึ่งการถกเถียงค่อย ๆ กลายเป็นการแลกเปลี่ยนความคิด การปรับตัว และการยอมรับในความสามารถของกันและกัน</p>
              <a href="#story" className="mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-rust">Read our equation <ArrowDownRight className="size-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="paper-texture border-b border-ink/30 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">The origin / 01</p>
            <p className="mt-8 max-w-xs font-mono text-xs leading-6 uppercase tracking-[.13em] text-ink/50">จากวันเกิดของผู้ก่อตั้ง 2 คน สู่สมาชิก 7 คน และความเป็นไปได้ที่ไม่สิ้นสุด</p>
          </div>
          <div>
            <h2 className="max-w-5xl text-[clamp(3.1rem,7vw,7.5rem)] font-semibold leading-[1.08] tracking-[-.065em]">เราไม่ได้รวมตัวกัน<br/>เพราะเหมือนกัน<br/><span className="text-rust">แต่เพราะความต่าง<br/>คูณกันได้</span></h2>
            <div className="mt-16 grid gap-8 border-t border-ink/30 pt-8 text-base leading-8 text-ink/65 md:grid-cols-2 md:text-lg">
              <p>7 × 7 ในตอนแรกมีความหมายจากเลขวันเกิดของผู้ก่อตั้ง 2 คน เมื่อเวลาผ่านไป เรามีสมาชิกเพิ่มขึ้นจนกลายเป็นศิลปินทั้งหมด 7 คน ที่มารวมตัวกันสร้างสรรค์ผลงานในสตูดิโอเล็ก ๆ</p>
              <p>แม้วันหนึ่งสมาชิกของเราจะต้องแยกย้ายไปตามความฝัน เราจะยังซัพพอร์ตกันเสมอ คนบางคนอาจหายไป คนใหม่อาจเข้ามาเติมเต็ม และสูตรคูณของความหลากหลายนี้จะเดินหน้าต่อไป</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col gap-6 border-b border-paper/20 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">The collective / 02</p><h2 className="mt-4 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.78] tracking-[-.075em]">SEVEN<br/>VOICES.</h2></div>
            <p className="max-w-md text-base leading-7 text-paper/58">ต่างที่มา ต่างสถาบัน ต่างทักษะ แต่ทำงานภายใต้อุดมการณ์เดียวกัน</p>
          </div>
          <div className="grid gap-x-4 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
            {members.map((member, index) => (
              <article key={member.name} className={`${index < 3 ? 'lg:col-span-4' : 'lg:col-span-3'} group`}>
                <div className={`${index % 2 ? 'aspect-[4/5]' : 'aspect-[3/4]'} relative overflow-hidden bg-paper/10`}>
                  <img src={member.image} alt={`${member.name} (${member.nick}), ${member.role} at 7x7 Art Craft Studio`} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0" loading={index < 3 ? 'eager' : 'lazy'} />
                  <div className="grain absolute inset-0 opacity-25" />
                  <span className="absolute left-3 top-3 bg-rust px-2 py-1 font-mono text-[9px] tracking-[.15em] text-paper">{String(index + 1).padStart(2, '0')} / 07</span>
                </div>
                <div className="mt-4 border-t border-paper/20 pt-4"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-rust">{member.role}</p><h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-.03em]">{member.name}</h3><p className="mt-1 font-mono text-xs uppercase tracking-[.14em] text-paper/45">aka {member.nick}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-rust px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-paper/60">Our common ground / 03</p>
          <blockquote className="text-[clamp(2.2rem,5vw,5.4rem)] font-semibold leading-[1.08] tracking-[-.055em]">“ศิลปะไม่ใช่เพียงการแสดงออกทางความรู้สึก แต่คือวิถีของการสร้างสรรค์ การแก้ปัญหาจากประสบการณ์ และการเปิดรับสิ่งใหม่”</blockquote>
          <div />
          <p className="max-w-3xl border-t border-paper/35 pt-6 text-lg leading-8 text-paper/75">ไม่มีอะไรดีที่สุด — มีเพียงสิ่งที่เหมาะสมที่สุดสำหรับพื้นที่ตรงนั้น นี่คือหลักคิดที่ทำให้คน 7 คนออกแบบ ทดลอง และหาคำตอบร่วมกันได้โดยไม่ต้องมีเสียงใดเสียงหนึ่งดังที่สุด</p>
        </div>
      </section>

      <section className="paper-texture px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-4xl text-[clamp(3.4rem,7vw,7rem)] font-semibold leading-[1.08] tracking-[-.065em]">อยากสร้างอะไร<br/>ไปด้วยกัน?</h2>
          <a href={sitePath('/contact/')} className="inline-flex w-fit items-center gap-3 border-b border-ink pb-2 font-mono text-xs uppercase tracking-[.18em] hover:text-rust">Start a conversation <ArrowDownRight className="size-5" /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
