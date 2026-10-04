# pilahYuk
Aplikasi klasifikasi sampah otomatis via foto.

## Anggota Kelompok 
Ketua Kelompok: Aurelia Mutiah Raudyatuzzahra - 24/534903/TK/59310   
Anggota 1: Shafiyah Nuril Hayya - 24/540586/TK/60019  
Anggota 2: Bagas Adjie Pamungkas - 24/544718/TK/60547  
Anggota 3: Alya Luqyana Nasywa - 24/545645/TK/60716

## Prasyarat
- Node.js >= 20 LTS (Vite terbaru membutuhkan Node >= 20.19)
- npm
- Git

## Struktur Folder
```
pilahYuk/
├── backend/    # Node.js + Express (CommonJS)
├── frontend/   # React + Vite (JavaScript)
├── docs/       # GitHub Pages kelompok
└── .github/    # Workflow GitHub
```

## Cara Menjalankan Lokal

### Backend (http://localhost:5000)
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
PowerShell: ganti `cp .env.example .env` dengan `Copy-Item .env.example .env`.

Cek server: `GET http://localhost:5000/health`

### Frontend (http://localhost:5173)
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
PowerShell: ganti `cp .env.example .env` dengan `Copy-Item .env.example .env`.
