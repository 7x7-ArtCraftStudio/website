import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { AdminPortfolio } from './admin-portfolio';

export const metadata: Metadata = {
  title: 'Portfolio Admin',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <SiteHeader />
      <AdminPortfolio />
    </main>
  );
}
