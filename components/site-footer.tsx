export function SiteFooter() {
  return (
    <footer className="border-t border-paper/15 bg-ink px-5 py-8 text-paper md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 font-mono text-[10px] uppercase tracking-[.15em] text-paper/48 md:flex-row md:items-center md:justify-between">
        <p>© 2026 7×7 Art Craft Studio · Tax ID 01355670333111</p>
        <div className="flex flex-wrap gap-5">
          <a href="/projects" className="hover:text-rust">Projects</a>
          <a href="/team" className="hover:text-rust">Team</a>
          <a href="/contact" className="hover:text-rust">Contact</a>
          <a href="https://www.facebook.com/profile.php?id=61574732772816" target="_blank" rel="noreferrer" className="hover:text-rust">Facebook ↗</a>
          <a href="https://www.instagram.com/tc_art_creative_studio" target="_blank" rel="noreferrer" className="hover:text-rust">Instagram ↗</a>
          <a href="/admin" className="hover:text-rust">Admin</a>
        </div>
      </div>
    </footer>
  );
}
