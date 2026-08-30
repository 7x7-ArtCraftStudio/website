import { ArrowDownRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { featuredWorks } from '@/lib/catalog';
import { sitePath } from '@/lib/paths';
import { HomeScrapbook } from './home-scrapbook';

const services = [
  [
    '01',
    'Art Direction',
    'พัฒนาแนวคิด ภาษาภาพ และเรื่องราวของงานให้เชื่อมกับพื้นที่และแบรนด์',
  ],
  [
    '02',
    'Sculpture & Objects',
    'ออกแบบและผลิตประติมากรรม เฟอร์นิเจอร์ศิลป์ และวัตถุพิเศษแบบชิ้นเดียว',
  ],
  [
    '03',
    'Interior Art',
    'งานศิลป์ติดผนัง ฉากตกแต่ง และองค์ประกอบเฉพาะสำหรับโรงแรม ร้านอาหาร บ้าน และสำนักงาน',
  ],
  [
    '04',
    'Public Installation',
    'งานจัดวางขนาดใหญ่ งานเทศกาล และประติมากรรมสาธารณะ ตั้งแต่แบบจนถึงติดตั้งจริง',
  ],
];

const homeFeaturedWorkIds = new Set([
  'featured-01',
  'featured-05',
  'featured-07',
  'featured-08',
]);

export default async function Home() {
  const works = featuredWorks.filter((work) => homeFeaturedWorkIds.has(work.id));
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://7x7-artcraftstudio.github.io/website/';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '7x7 Art Craft Studio',
    url: siteUrl,
    image: `${siteUrl.replace(/\/$/, '')}/portfolio/hero-sculpture.jpg`,
    telephone: '+66-61-410-9400',
    email: '7x7art.studio@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1178/473 Liab Khlong Rangsit Road, Prachathipat',
      addressLocality: 'Thanyaburi',
      addressRegion: 'Pathum Thani',
      postalCode: '12130',
      addressCountry: 'TH',
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61574732772816',
      'https://www.instagram.com/tc_art_creative_studio',
    ],
    areaServed: 'Thailand',
    priceRange: '$$-$$$',
    description:
      'สตูดิโอออกแบบและผลิตงานศิลปะ ประติมากรรม งานตกแต่ง และงานคราฟต์แบบสั่งทำ',
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />

      <section id="top" className="relative min-h-screen overflow-hidden bg-ink text-paper">
        <img src={sitePath('/portfolio/hero-sculpture.jpg')} alt="ประติมากรรมโลหะทำมือโดย 7x7 Art Craft Studio" className="absolute inset-0 h-full w-full object-cover object-center"/>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.9)_0%,rgba(19,17,14,.3)_62%,rgba(19,17,14,.1)_100%)]"/>
        <div className="grain absolute inset-0 opacity-35"/>
        <div className="relative z-10 flex min-h-screen max-w-[1500px] flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/65"><span>Bangkok · Thailand</span><span className="h-px w-12 bg-rust"/><span>Made by hand</span></div>
          <h1 className="max-w-[1120px] font-display text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[.78] tracking-[-.075em]">OBJECTS<br/><span className="text-rust">WITH A SOUL.</span></h1>
          <div className="mt-8 flex flex-col gap-6 border-t border-paper/25 pt-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-7 text-paper/72 md:text-lg">เราสร้างงานศิลป์ งานตกแต่ง และประติมากรรมจากไม้ เหล็ก และวัสดุผสม — ให้พื้นผิวทุกชั้นเล่าเรื่องแทนคำพูด</p>
            <a href="#work" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">Enter the studio <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/></a>
          </div>
        </div>
      </section>

      <div className="home-marquee border-y border-ink bg-rust py-3 text-paper" aria-label="ประเภทงานของสตูดิโอ">
        <div className="home-marquee-track font-mono text-xs font-bold uppercase tracking-[.2em]">
          <span>SCULPTURE · PUBLIC ART · CRAFT · WALL ART · INSTALLATION · OBJECT · MATERIAL EXPERIMENT · </span>
          <span aria-hidden="true">SCULPTURE · PUBLIC ART · CRAFT · WALL ART · INSTALLATION · OBJECT · MATERIAL EXPERIMENT · </span>
        </div>
      </div>

      <section
        id="studio"
        className="paper-texture relative grid min-h-[85vh] border-b border-ink/30 lg:grid-cols-[1.15fr_.85fr]"
      >
        <div className="flex flex-col justify-between border-b border-ink/30 p-5 py-16 lg:border-b-0 lg:border-r lg:p-10 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">
            Our statement / 01
          </p>
          <h2 className="mt-16 max-w-4xl text-[clamp(3.4rem,7vw,7.8rem)] font-semibold leading-[1.08] tracking-[-.065em]">
            เราไม่ได้ซ่อน
            <br />
            ร่องรอยของมือ
            <br />
            <span className="text-wood">เราเฉลิมฉลองมัน</span>
          </h2>
          <p className="mt-16 max-w-2xl text-lg leading-8 text-ink/65">
            7x7 Art Craft Studio เชื่อว่าวัสดุทุกชนิดมีบุคลิกของตัวเอง ไม้มีเวลา เหล็กมีแรง
            ไฟเบอร์มีความเป็นไปได้ งานของเราจึงเริ่มจากการฟังวัสดุ ก่อนใช้ความรู้ด้านศิลปะ
            วิศวกรรม และการผลิต พามันไปสู่รูปทรงใหม่
          </p>
        </div>
        <div className="relative min-h-[560px] overflow-hidden bg-wood text-paper">
          <img
            src={sitePath('/portfolio/wood-process.jpg')}
            alt="รายละเอียดพื้นผิวไม้แกะด้วยมือในเวิร์กช็อป"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/35 mix-blend-multiply" />
          <div className="grain absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-paper/30 bg-ink/70 backdrop-blur-sm">
            <div className="border-r border-paper/30 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-paper/50">
                Material library
              </p>
              <p className="mt-2 text-xl">Wood · Iron · Fiber</p>
            </div>
            <div className="p-5">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-paper/50">
                Process
              </p>
              <p className="mt-2 text-xl">Sketch · Make · Install</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="relative overflow-hidden bg-ink px-5 py-16 text-paper md:px-10 md:py-24"
      >
        <div className="relative mx-auto mb-12 grid max-w-[1400px] gap-8 border-b border-paper/25 pb-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">
              Selected work / 02
            </p>
            <h2 className="mt-4 text-[clamp(3.3rem,6vw,6.5rem)] font-semibold leading-[.8] tracking-[-.065em]">
              DON&apos;T JUST
              <br />
              LOOK. <span className="text-rust">FEEL IT.</span>
            </h2>
          </div>
          <div className="lg:pb-2"><p className="max-w-lg text-base leading-7 text-paper/60">ผลงานเด่น 4 ชิ้นที่แสดงความหลากหลายของวัสดุ ตั้งแต่งานประติมากรรม งานติดตั้งในพื้นที่สาธารณะ ไปจนถึงงานศิลป์เฉพาะพื้นที่</p></div>
        </div>

        <div className="relative mx-auto grid max-w-[1400px] gap-8 md:grid-cols-2 md:gap-10">
          {works.map((work, index) => (
            <article
              key={work.id}
              className="home-work-card group relative"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden bg-paper/10"
              >
                <img
                  src={work.imageUrl}
                  alt={`${work.titleTh} — ${work.materials}`}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045] group-hover:brightness-110"
                />
                <div className="grain absolute inset-0 opacity-30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-rust/95 p-5 text-paper transition-transform duration-500 group-hover:translate-y-0"><p className="max-w-xl text-sm leading-6">{work.description}</p></div>
                <span className="absolute bottom-3 right-4 font-display text-5xl font-black leading-none text-paper/90 mix-blend-difference md:text-6xl">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="relative z-10 -mt-1 ml-[6%] flex items-start justify-between gap-5 border-l-4 border-rust bg-paper p-4 text-ink shadow-xl transition-transform duration-500 group-hover:-translate-y-2 md:mr-[4%]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[.16em] text-rust">
                    {work.category} · {work.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-.03em] md:text-3xl">
                    {work.titleTh}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[.12em] text-ink/45">
                    {work.title}
                  </p>
                </div>
                <p className="hidden max-w-[180px] text-right text-xs leading-5 text-ink/50 sm:block">
                  {work.materials}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-14 flex max-w-[1400px] justify-end border-t border-paper/20 pt-7">
          <a
            href={sitePath('/projects/')}
            className="group inline-flex items-center gap-3 bg-rust px-6 py-4 font-mono text-xs uppercase tracking-[.18em] text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Enter full archive{' '}
            <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </section>

      <HomeScrapbook />

      <section className="paper-texture overflow-hidden border-b border-ink/30 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1550px]">
          <div className="mb-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">
              What we make / 05
            </p>
            <h2 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.8] tracking-[-.065em]">ONE STUDIO.<br/><span className="text-rust">NO BOXES.</span></h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink/60 lg:justify-self-end">เราไม่เริ่มจากการเลือกหมวดงาน แต่เริ่มจากคำถามว่า พื้นที่นี้ควรรู้สึกอย่างไร แล้วค่อยเลือกคน วัสดุ และวิธีผลิตให้เหมาะที่สุด</p>
          </div>
          <div className="border-t border-ink/40">
            {services.map(([number, title, detail]) => (
              <div
                key={number}
                className="group grid gap-4 border-b border-ink/30 px-3 py-7 transition-colors duration-300 hover:bg-rust hover:text-paper sm:grid-cols-[90px_1fr_1.2fr_auto] sm:items-center md:px-6"
              >
                <span className="font-display text-5xl font-black leading-none text-rust transition-colors group-hover:text-paper">{number}</span>
                <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
                <p className="leading-7 text-ink/60 transition-colors group-hover:text-paper/75">{detail}</p>
                <ArrowDownRight className="hidden size-6 -rotate-45 transition-transform group-hover:rotate-0 sm:block"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-wood px-5 py-20 text-paper md:px-10 md:py-28">
        <div className="grain absolute inset-0"/>
        <div className="relative mx-auto max-w-[1550px]">
          <div className="mb-12 flex flex-col gap-5 border-b border-paper/25 pb-8 md:flex-row md:items-end md:justify-between">
            <div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">How it becomes real / 06</p><h2 className="mt-4 text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[.8] tracking-[-.065em]">TALK → TOUCH</h2></div>
            <p className="max-w-md leading-7 text-paper/60">จากบทสนทนาบนโต๊ะ สู่ฝุ่นไม้ สะเก็ดไฟ และชิ้นงานจริงในพื้นที่</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ['01', 'LISTEN', 'คุยกับคุณ ดูพื้นที่ และเข้าใจว่าอะไรคือหัวใจของโปรเจกต์', '/working/01.jpg'],
              ['02', 'MAKE', 'สเก็ตช์ ทดลองวัสดุ ขึ้นแบบ และผลิตด้วยทีมช่างของเรา', '/working/04.jpg'],
              ['03', 'PLACE', 'ขนส่ง ติดตั้ง และเก็บรายละเอียดให้ชิ้นงานอยู่กับพื้นที่อย่างสมบูรณ์', '/working/08.jpg'],
            ].map(([number, title, detail, image]) => (
              <article key={number} className="group relative min-h-[460px] overflow-hidden border border-paper/25">
                <img src={sitePath(image)} alt={`ขั้นตอน ${title} ของ 7x7 Art Craft Studio`} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"/>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8"><span className="font-mono text-xs text-rust">{number}</span><h3 className="mt-3 text-5xl font-semibold tracking-[-.05em]">{title}</h3><p className="mt-5 max-w-sm leading-7 text-paper/65">{detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative min-h-[88vh] overflow-hidden bg-wood px-5 py-20 text-paper md:px-10 md:py-28"
      >
        <img
          src={sitePath('/portfolio/wood-relief.jpg')}
          alt="พื้นผิวงานไม้แกะของสตูดิโอ"
          className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.96),rgba(19,17,14,.65))]" />
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-[1450px] flex-col justify-between">
          <p className="font-mono text-xs uppercase tracking-[.22em] text-rust">
            Start something / 07
          </p>
          <div className="my-16">
            <h2 className="text-[clamp(4rem,11vw,11rem)] font-semibold leading-[1.08] tracking-[-.075em]">
              มีพื้นที่
              <br />
              รอเรื่องราว
              <br />
              <span className="text-rust">อยู่ไหม?</span>
            </h2>
          </div>
          <div className="grid gap-8 border-t border-paper/25 pt-7 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <p className="max-w-lg text-lg leading-8 text-paper/65">
                เล่าให้เราฟังว่าคุณกำลังทำอะไร
                เราจะช่วยเปลี่ยนแนวคิดนั้นให้กลายเป็นงานที่จับต้องได้
              </p>
            </div>
            <div className="font-mono text-sm leading-7">
              <a href="tel:+66614109400" className="block hover:text-rust">
                +66 61 410 9400
              </a>
              <a
                href="mailto:7x7art.studio@gmail.com"
                className="block hover:text-rust"
              >
                7x7art.studio@gmail.com
              </a>
              <a
                href="https://line.me/ti/p/~komlomkomlom"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-rust"
              >
                LINE · komlomkomlom ↗
              </a>
            </div>
            <div className="text-sm leading-6 text-paper/55">
              1178/473 ถ.เลียบคลองรังสิต
              <br />
              ต.ประชาธิปัตย์ อ.ธัญบุรี
              <br />
              ปทุมธานี 12130
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
