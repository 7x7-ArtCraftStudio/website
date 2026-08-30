import { chatGPTSignOutPath, requireChatGPTUser } from '@/app/chatgpt-auth';
import { isAdminEmail, listPortfolioItems } from '@/lib/portfolio';
import AdminDashboard from './admin-dashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const user = await requireChatGPTUser('/admin');
  if (!isAdminEmail(user.email)) {
    return (
      <main className="grid min-h-screen place-items-center bg-ink px-6 text-paper">
        <div className="max-w-lg border border-paper/25 p-8">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-rust">Access denied</p>
          <h1 className="mt-4 text-4xl font-semibold">บัญชีนี้ไม่มีสิทธิ์แก้ไขเว็บไซต์</h1>
          <p className="mt-4 text-paper/65">ลงชื่อเข้าใช้ด้วยบัญชีผู้ดูแลของ 7x7 Art Craft Studio แล้วลองใหม่อีกครั้ง</p>
          <a href={chatGPTSignOutPath('/admin')} target="_top" className="mt-8 inline-block border-b border-rust pb-1 font-mono text-xs uppercase tracking-[.15em]">เปลี่ยนบัญชี</a>
        </div>
      </main>
    );
  }

  return <AdminDashboard initialItems={await listPortfolioItems()} userName={user.displayName} signOutPath={chatGPTSignOutPath('/')} />;
}
