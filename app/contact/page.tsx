import type { Metadata } from 'next';
import { ArrowDownRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { sitePath } from '@/lib/paths';

export const metadata: Metadata = {
  title: 'ติดต่อสตูดิโอ',
  description: 'ติดต่อ 7x7 Art Craft Studio สำหรับงานประติมากรรม งานตกแต่ง งานศิลปะสั่งทำ และงานติดตั้งทั่วประเทศไทย โทร 061-410-9400',
  alternates: { canonical: '/contact' },
};

const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.6015933307654!2d100.63353347509444!3d13.982303986434008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f0070a8570b%3A0x407aed6bbe838852!2sTc%20art%20creative%20Studio!5e0!3m2!1sth!2sth!4v1752224781896!5m2!1sth!2sth';

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <SiteHeader />
      <section className="relative flex min-h-screen items-end overflow-hidden bg-wood px-5 pb-12 pt-28 text-paper md:px-10 md:pb-16">
        <img src={sitePath('/studio.jpg')} alt="7x7 Art Craft Studio ที่ปทุมธานี" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,14,.94),rgba(19,17,14,.35))]" /><div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[.24em] text-rust">Open studio · Pathum Thani, Thailand</p>
          <h1 className="text-[clamp(4.7rem,13vw,13rem)] font-semibold leading-[.73] tracking-[-.085em]">LET’S MAKE<br/><span className="text-rust">IT REAL.</span></h1>
          <p className="mt-10 max-w-2xl border-t border-paper/25 pt-5 text-lg leading-8 text-paper/72">มีพื้นที่ ไอเดีย หรือวัสดุที่อยากพาไปให้ไกลกว่าเดิม? ส่งภาพพื้นที่ ขนาดโดยประมาณ และช่วงเวลาที่ต้องการมาให้เราเริ่มคิดด้วยกัน</p>
        </div>
      </section>

      <section className="paper-texture px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Reach us / 01</p><h2 className="mt-6 text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-[.88] tracking-[-.06em]">เริ่มจาก<br/>บทสนทนา<br/>สั้น ๆ</h2></div>
          <div className="border-t border-ink/35">
            <a href="tel:+66614109400" className="group grid gap-4 border-b border-ink/30 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-center"><Phone className="size-5 text-rust"/><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-ink/45">Phone</p><p className="mt-1 text-2xl font-semibold">061 410 9400</p></div><ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/></a>
            <a href="mailto:7x7art.studio@gmail.com" className="group grid gap-4 border-b border-ink/30 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-center"><Mail className="size-5 text-rust"/><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-ink/45">Email</p><p className="mt-1 break-all text-xl font-semibold sm:text-2xl">7x7art.studio@gmail.com</p></div><ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/></a>
            <a href="https://line.me/ti/p/~komlomkomlom" target="_blank" rel="noreferrer" className="group grid gap-4 border-b border-ink/30 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-center"><MessageCircle className="size-5 text-rust"/><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-ink/45">Line</p><p className="mt-1 text-2xl font-semibold">komlomkomlom</p></div><ArrowDownRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/></a>
            <div className="grid gap-4 py-7 sm:grid-cols-[52px_1fr]"><MapPin className="size-5 text-rust"/><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-ink/45">Studio address</p><address className="mt-2 max-w-xl not-italic text-lg leading-8">7x7 ART CRAFT STUDIO., Ltd.<br/>1178/473 ถนนเลียบคลองรังสิต ตำบลประชาธิปัตย์<br/>อำเภอธัญบุรี จังหวัดปทุมธานี 12130</address></div></div>
          </div>
        </div>
      </section>

      <section className="grid border-y border-ink/30 bg-[#cdbda6] lg:grid-cols-3">
        {[
          ['01', 'SPACE', 'ภาพถ่ายหรือแบบของพื้นที่ พร้อมขนาดคร่าว ๆ'],
          ['02', 'FEELING', 'บรรยากาศ เรื่องราว หรือ reference ที่คุณชอบ'],
          ['03', 'FRAME', 'งบประมาณ ช่วงเวลา และวันที่ต้องการติดตั้ง'],
        ].map(([number, title, detail]) => <div key={number} className="min-h-[260px] border-b border-ink/30 p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-10"><span className="font-mono text-xs text-rust">{number}</span><h3 className="mt-12 text-5xl font-semibold tracking-[-.05em]">{title}</h3><p className="mt-5 max-w-sm leading-7 text-ink/60">{detail}</p></div>)}
      </section>

      <section className="grid min-h-[70vh] bg-ink lg:grid-cols-[.75fr_1.25fr]">
        <div className="flex flex-col justify-between p-5 py-16 text-paper md:p-10 md:py-20"><div><p className="font-mono text-xs uppercase tracking-[.22em] text-rust">Find the studio / 02</p><h2 className="mt-6 text-[clamp(3.2rem,6vw,6.5rem)] font-semibold leading-[.86] tracking-[-.06em]">COME<br/>SEE THE<br/>MESS.</h2></div><p className="mt-16 max-w-md leading-7 text-paper/55">สตูดิโอของเราอยู่ที่ประชาธิปัตย์ ธัญบุรี ปทุมธานี กรุณานัดหมายล่วงหน้าก่อนเข้าชม เพื่อให้ทีมเตรียมเวลาและพื้นที่ต้อนรับคุณได้เต็มที่</p></div>
        <iframe src={mapUrl} title="แผนที่ 7x7 Art Craft Studio" className="min-h-[560px] h-full w-full border-0 grayscale contrast-125" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </section>
      <SiteFooter />
    </main>
  );
}
