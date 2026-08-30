import { ArrowDownRight } from 'lucide-react';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { catalogWorks } from '@/lib/catalog';
import { listPortfolioItems } from '@/lib/portfolio';

export const dynamic = 'force-dynamic';

const services = [
  ['01', 'Art Direction', 'พัฒนาแนวคิด ภาษาภาพ และเรื่องราวของงานให้เชื่อมกับพื้นที่และแบรนด์'],
  ['02', 'Sculpture & Objects', 'ออกแบบและผลิตประติมากรรม เฟอร์นิเจอร์ศิลป์ และวัตถุพิเศษแบบชิ้นเดียว'],
  ['03', 'Interior Art', 'งานศิลป์ติดผนัง ฉากตกแต่ง และองค์ประกอบเฉพาะสำหรับโรงแรม ร้านอาหาร บ้าน และสำนักงาน'],
  ['04', 'Public Installation', 'งานจัดวางขนาดใหญ่ งานเทศกาล และประติมากรรมสาธารณะ ตั้งแต่แบบจนถึงติดตั้งจริง'],
];

export default async function Home() {
  const uploaded = await listPortfolioItems();
  const works = [...uploaded, ...catalogWorks];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seven-seven-art-craft.devagentic676767.chatgpt.site/';
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: '7x7 Art Craft Studio', url: siteUrl,
    image: `${siteUrl.replace(/\/$/, '')}/portfolio/hero-sculpture.jpg`, telephone: '+66-61-410-9400', email: '7x7art.studio@gmail.com',
    address: { '@type': 'PostalAddress', streetAddress: '1178/473 Liab Khlong Rangsit Road, Prachathipat', addressLocality: 'Thanyaburi', addressRegion: 'Pathum Thani', postalCode: '12130', addressCountry: 'TH' },
    sameAs: ['https://www.facebook.com/profile.php?id=61574732772816', 'https://www.instagram.com/tc_art_creative_studio'],
    areaServed: 'Thailand', priceRange: '$$-$$$', description: 'สตูดิโอออกแบบและผลิตงานศิลปะ ประติมากรรม งานตกแต่ง และงานคราฟต์แบบสั่งทำ',
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <SiteHeader />

      <section id="top" className="relative min-h-screen overflow-hidden bg-ink text-paper">
        <img src="/portfolio/hero-sculpture.jpg" alt="ประติมากรรมโลหะทำมือโดย 7x7 Art Craft Studio" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.9)_0%,rgba(19,17,14,.3)_62%,rgba(19,17,14,.1)_100%)]" />
        <div className="grain absolute inset-0 opacity-35" />
        <div className="relative z-10 flex min-h-screen max-w-[1500px] flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/65"><span>Bangkok · Thailand</span><span className="h-px w-12 bg-rust"/><span>Made by hand</span></div>
          <h1 className="max-w-[1120px] font-display text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[.78] tracking-[-.075em]">OBJECTS<br/><span className="text-rust">WITH A SOUL.</span></h1>
          <div className="mt-8 flex flex-col gap-6 border-t border-paper/25 pt-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-7 text-paper/72 md:text-lg">เราสร้างงานศิลป์ งานตกแต่ง และประติมากรรมจากไม้ เหล็ก และวัสดุผสม — ให้พื้นผิวทุกชั้นเล่าเรื่องแทนคำพูด</p>
            <a href="#work" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">Enter the studio <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
          </div>
        </div>
      </section>

      <section id="studio" className="paper-texture relative grid min-h-[85vh] border-b border-ink/30 lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-between border-b border-ink/30 p-5 py-16 lg:border-b-0 lg:border-r lg:p-10 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Our statement / 01</p>
          <h2 className="mt-16 max-w-4xl text-[clamp(3.4rem,7vw,7.8rem)] font-semibold leading-[.86] tracking-[-.065em]">เราไม่ได้ซ่อน<br/>ร่องรอยของมือ<br/><span className="text-wood">เราเฉลิมฉลองมัน</span></h2>
          <p className="mt-16 max-w-2xl text-lg leading-8 text-ink/65">7x7 Art Craft Studio เชื่อว่าวัสดุทุกชนิดมีบุคลิกของตัวเอง ไม้มีเวลา เหล็กมีแรง ไฟเบอร์มีความเป็นไปได้ งานของเราจึงเริ่มจากการฟังวัสดุ ก่อนใช้ความรู้ด้านศิลปะ วิศวกรรม และการผลิต พามันไปสู่รูปทรงใหม่</p>
        </div>
        <div className="relative min-h-[560px] overflow-hidden bg-wood text-paper">
          <img src="/portfolio/wood-process.jpg" alt="รายละเอียดพื้นผิวไม้แกะด้วยมือในเวิร์กช็อป" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/35 mix-blend-multiply"/><div className="grain absolute inset-0"/>
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-paper/30 bg-ink/70 backdrop-blur-sm">
            <div className="border-r border-paper/30 p-5"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-paper/50">Material library</p><p className="mt-2 text-xl">Wood · Iron · Fiber</p></div>
            <div className="p-5"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-paper/50">Process</p><p className="mt-2 text-xl">Sketch · Make · Install</p></div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-ink px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="mb-12 flex flex-col gap-6 border-b border-paper/25 pb-8 md:flex-row md:items-end md:justify-between">
          <div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Selected work / 02</p><h2 className="mt-4 text-[clamp(3.8rem,8vw,8rem)] font-semibold leading-[.82] tracking-[-.07em]">BUILT TO<br/>BE FELT.</h2></div>
          <p className="max-w-md text-base leading-7 text-paper/60">ตั้งแต่งานชิ้นเดียวสำหรับบ้าน ไปจนถึงงานติดตั้งขนาดใหญ่ในพื้นที่สาธารณะ เราดูแลทุกขั้นตอนในสตูดิโอเดียว</p>
        </div>

        <div className="grid gap-x-5 gap-y-16 md:grid-cols-12">
          {works.map((work, index) => (
            <article key={work.id} className={`${index % 4 === 0 ? 'md:col-span-7' : index % 4 === 1 ? 'md:col-span-5 md:mt-28' : index % 4 === 2 ? 'md:col-span-5' : 'md:col-span-7 md:mt-20'} group`}>
              <div className={`relative overflow-hidden bg-paper/10 ${index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[16/11]'}`}>
                <img src={work.imageUrl} alt={`${work.titleTh} — ${work.materials}`} loading={index < 2 ? 'eager' : 'lazy'} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110" />
                <div className="grain absolute inset-0 opacity-30"/><span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[9px] uppercase tracking-[.16em] text-ink">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-5 border-t border-paper/25 pt-4"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-rust">{work.category} · {work.year}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.03em] md:text-3xl">{work.titleTh}</h3><p className="font-mono text-xs uppercase tracking-[.12em] text-paper/45">{work.title}</p></div><p className="max-w-[180px] text-right text-xs leading-5 text-paper/48">{work.materials}</p></div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-paper/58">{work.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 flex justify-end border-t border-paper/20 pt-7"><Link href="/projects" className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[.18em] text-rust">View all projects <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link></div>
      </section>

      <section className="paper-texture px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">What we make / 03</p><h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[.86] tracking-[-.06em]">FROM ONE<br/>OBJECT TO<br/>A WHOLE<br/><span className="text-rust">WORLD.</span></h2></div>
          <div className="border-t border-ink/40">{services.map(([number, title, detail]) => (
            <div key={number} className="grid gap-4 border-b border-ink/30 py-6 sm:grid-cols-[60px_1fr_1.3fr] sm:items-start"><span className="font-mono text-xs text-rust">{number}</span><h3 className="text-2xl font-semibold">{title}</h3><p className="leading-7 text-ink/60">{detail}</p></div>
          ))}</div>
        </div>
      </section>

      <section className="grid border-y border-ink/30 bg-[#cdbda6] lg:grid-cols-3">
        {[['01', 'LISTEN', 'คุยกับคุณ ดูพื้นที่ และเข้าใจว่าอะไรคือหัวใจของโปรเจกต์'], ['02', 'MAKE', 'สเก็ตช์ ทดลองวัสดุ ขึ้นแบบ และผลิตด้วยทีมช่างของเรา'], ['03', 'PLACE', 'ขนส่ง ติดตั้ง และเก็บรายละเอียดให้ชิ้นงานอยู่กับพื้นที่อย่างสมบูรณ์']].map(([number, title, detail]) => (
          <div key={number} className="min-h-[280px] border-b border-ink/30 p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-10"><span className="font-mono text-xs text-rust">{number}</span><h3 className="mt-14 text-5xl font-semibold tracking-[-.05em]">{title}</h3><p className="mt-6 max-w-sm leading-7 text-ink/60">{detail}</p></div>
        ))}
      </section>

      <section id="contact" className="relative min-h-[88vh] overflow-hidden bg-wood px-5 py-20 text-paper md:px-10 md:py-28">
        <img src="/portfolio/wood-relief.jpg" alt="พื้นผิวงานไม้แกะของสตูดิโอ" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"/><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.96),rgba(19,17,14,.65))]"/><div className="grain absolute inset-0"/>
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-[1450px] flex-col justify-between">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Start something / 04</p>
          <div className="my-16"><h2 className="text-[clamp(4rem,11vw,11rem)] font-semibold leading-[.76] tracking-[-.075em]">มีพื้นที่<br/>รอเรื่องราว<br/><span className="text-rust">อยู่ไหม?</span></h2></div>
          <div className="grid gap-8 border-t border-paper/25 pt-7 md:grid-cols-[1.3fr_1fr_1fr]">
            <div><p className="max-w-lg text-lg leading-8 text-paper/65">เล่าให้เราฟังว่าคุณกำลังทำอะไร เราจะช่วยเปลี่ยนแนวคิดนั้นให้กลายเป็นงานที่จับต้องได้</p></div>
            <div className="font-mono text-sm leading-7"><a href="tel:+66614109400" className="block hover:text-rust">+66 61 410 9400</a><a href="mailto:7x7art.studio@gmail.com" className="block hover:text-rust">7x7art.studio@gmail.com</a><a href="https://line.me/ti/p/~komlomkomlom" target="_blank" rel="noreferrer" className="block hover:text-rust">LINE · komlomkomlom ↗</a></div>
            <div className="text-sm leading-6 text-paper/55">1178/473 ถ.เลียบคลองรังสิต<br/>ต.ประชาธิปัตย์ อ.ธัญบุรี<br/>ปทุมธานี 12130</div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
