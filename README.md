# 7x7 Art Craft Studio

เว็บไซต์แบบ Static Export สำหรับ GitHub Pages

## พรีวิวในเครื่อง

```bash
npm install
npm run dev
```

เปิด `http://localhost:3000`

## Build แบบเดียวกับ GitHub Pages

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/website'
$env:NEXT_PUBLIC_SITE_URL='https://7x7-artcraftstudio.github.io/website/'
npm run build
```

ไฟล์พร้อมเผยแพร่จะอยู่ในโฟลเดอร์ `out`

## GitHub Pages

Workflow ใน `.github/workflows/deploy-pages.yml` จะ build และเผยแพร่อัตโนมัติเมื่อ push เข้า branch `main` ของ repository `web` ตั้งค่า Pages source เป็น **GitHub Actions** ในหน้า Settings → Pages ของ repository

GitHub Pages เป็น static hosting จึงไม่มีฐานข้อมูล การล็อกอิน หรือ API สำหรับอัปโหลดไฟล์ ระบบ portfolio สาธารณะอ่านข้อมูลจาก `lib/catalog.ts` และรูปจาก `public/portfolio`
