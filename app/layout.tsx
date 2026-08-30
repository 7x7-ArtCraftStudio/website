import type { Metadata } from 'next';
import { IBM_Plex_Mono, Noto_Sans_Thai } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_Thai({ variable: '--font-sans', subsets: ['thai', 'latin'], weight: ['300', '400', '500', '600', '700'] });
const mono = IBM_Plex_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seven-seven-art-craft.devagentic676767.chatgpt.site/'),
  title: {
    default: '7x7 Art Craft Studio | งานประติมากรรมและศิลปะตกแต่ง',
    template: '%s | 7x7 Art Craft Studio',
  },
  description: 'สตูดิโอออกแบบและผลิตงานศิลปะ ประติมากรรม งานตกแต่งภายใน และงานคราฟต์จากไม้ เหล็ก ไฟเบอร์ และวัสดุผสม ในกรุงเทพฯ และทั่วประเทศไทย',
  keywords: ['สตูดิโอศิลปะ', 'ประติมากรรม', 'งานตกแต่งภายใน', 'wall art', 'sculpture Thailand', 'custom art Bangkok', 'งานไม้แกะ', 'งานไฟเบอร์', 'งานเหล็ก', 'public installation'],
  authors: [{ name: '7x7 Art Craft Studio' }],
  creator: '7x7 Art Craft Studio',
  publisher: '7x7 Art Craft Studio Co., Ltd.',
  category: 'Art & Design',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website', locale: 'th_TH', siteName: '7x7 Art Craft Studio', url: '/',
    title: '7x7 Art Craft Studio — Objects With a Soul',
    description: 'ออกแบบและผลิตประติมากรรม งานศิลปะตกแต่ง และงานติดตั้งเฉพาะพื้นที่ จากไม้ เหล็ก ไฟเบอร์ และวัสดุผสม',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '7x7 Art Craft Studio — Objects With a Soul' }],
  },
  twitter: {
    card: 'summary_large_image', title: '7x7 Art Craft Studio — Objects With a Soul',
    description: 'สตูดิโอศิลปะและงานคราฟต์ที่เปลี่ยนไม้ เหล็ก ไฟเบอร์ และวัสดุผสมให้เป็นงานเฉพาะตัว', images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
