import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thanapornj9.github.io/web/';
const socialImageUrl = new URL('og.png', siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: '7x7 Art Craft Studio — Objects With a Soul' }],
  },
  twitter: {
    card: 'summary_large_image', title: '7x7 Art Craft Studio — Objects With a Soul',
    description: 'สตูดิโอศิลปะและงานคราฟต์ที่เปลี่ยนไม้ เหล็ก ไฟเบอร์ และวัสดุผสมให้เป็นงานเฉพาะตัว', images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
