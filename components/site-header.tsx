import { sitePath } from '@/lib/paths';

export function SiteHeader({ tone = 'dark' }: { tone?: 'dark' | 'paper' }) {
  const palette = tone === 'dark'
    ? 'border-paper/20 bg-ink/85 text-paper'
    : 'border-ink/25 bg-paper/90 text-ink';

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b px-4 py-3 backdrop-blur-md md:px-10 md:py-4 ${palette}`}>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <a href={sitePath('/')} className="shrink-0 font-mono text-xs uppercase tracking-[0.22em] md:text-sm">
          7×7 <span className="hidden opacity-55 sm:inline">Art Craft Studio</span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-3 overflow-x-auto font-mono text-[9px] uppercase tracking-[0.13em] sm:gap-5 sm:text-[10px] md:text-[11px]">
          <a href={sitePath('/projects/')} className="whitespace-nowrap transition-colors hover:text-rust">Projects</a>
          <a href={sitePath('/team/')} className="whitespace-nowrap transition-colors hover:text-rust">Team</a>
          <a href={sitePath('/contact/')} className="whitespace-nowrap transition-colors hover:text-rust">Contact</a>
          <a href="https://www.instagram.com/tc_art_creative_studio" aria-label="Instagram" target="_blank" rel="noreferrer" className="hidden whitespace-nowrap transition-colors hover:text-rust sm:inline">IG ↗</a>
        </nav>
      </div>
    </header>
  );
}
