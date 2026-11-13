TUGAS 4 - Frontend React & Integrasi Backend

---------------------------------------------------------------------------------------------------------------------------------------------------------------

# Review Kantin

Aplikasi web untuk melihat warung kantin, ulasan, dan pengelolaan data sesuai peran pengguna. Frontend React berkomunikasi dengan REST API backend Express dan database SQL Server.

## Teknologi

- Frontend: React 18, TypeScript, Vite, React Router, dan Axios.
- Backend: Node.js, Express 5, TypeScript, Drizzle ORM, Zod, JWT, dan Swagger UI.
- Database: Microsoft SQL Server.
- Integrasi: REST API melalui Axios. Token JWT dikirim dengan skema `Bearer` pada endpoint yang memerlukan autentikasi.

## Prasyarat

- Node.js dan npm.
- Microsoft SQL Server yang dapat diakses dari komputer pengembangan.
- Database `review_kantin` beserta tabel aplikasi. Project ini tidak menjalankan migrasi atau membuat schema database secara otomatis; siapkan database/schema terlebih dahulu sesuai database praktikum yang digunakan.

## Instalasi

Jalankan dari folder utama `integrasi-frontend-backend`:

```cmd
npm install
npm --prefix backend install
npm --prefix frontend install
```

## Konfigurasi Environment

Buat file environment lokal dari template:

```cmd
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env
```

Atur `backend/.env` sesuai SQL Server lokal:

| Variabel | Keterangan | Default template |
|---|---|---|
| `PORT` | Port backend | `3001` |
| `CORS_ORIGIN` | Origin frontend yang diizinkan | `http://localhost:5173` |
| `DB_SERVER` | Host SQL Server | `localhost` |
| `DB_PORT` | Port SQL Server | `1433` |
| `DB_USER` | Login SQL Server untuk aplikasi | `praktikum_user` |
| `DB_PASSWORD` | Password login SQL Server | Isi sesuai konfigurasi lokal |
| `DB_NAME` | Nama database aplikasi | `review_kantin` |
| `DB_ENCRYPT` | Aktifkan enkripsi koneksi | `false` |
| `DB_TRUST_SERVER_CERTIFICATE` | Percayai sertifikat server lokal | `true` |
| `JWT_SECRET` | Secret untuk menandatangani JWT, minimal 32 karakter | Wajib diisi dengan nilai lokal |
| `JWT_EXPIRES_IN` | Masa berlaku token | `1d` |
| `BCRYPT_SALT_ROUNDS` | Cost factor hash password | `10` |

Pastikan login SQL Server memiliki akses ke database `review_kantin`. Jangan gunakan password atau JWT secret contoh untuk deployment dan jangan commit file `.env`.

Atur `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:3001/api/v1
```

Jika port backend atau frontend diubah, sesuaikan juga `VITE_API_BASE_URL` dan `CORS_ORIGIN`. Frontend dikunci ke port `5173` oleh konfigurasi Vite.

## Menjalankan Aplikasi

Dari folder utama, jalankan backend dan frontend bersamaan:

```cmd
npm run dev
```

- Frontend: <http://localhost:5173>
- Backend: <http://localhost:3001>
- Dokumentasi API Swagger: <http://localhost:3001/docs>
- Pemeriksaan koneksi backend dan database: <http://localhost:3001/health>

Untuk menjalankan secara terpisah, buka dua terminal dari folder utama:

```cmd
npm run dev:backend
```

```cmd
npm run dev:frontend
```

## Build dan Pemeriksaan

```cmd
npm run build
```

Perintah ini menjalankan typecheck backend dan build produksi frontend.

## Autentikasi

- Endpoint login: `POST /api/v1/auth/login`.
- Endpoint daftar akun: `POST /api/v1/auth/register`.
- Akun yang didaftarkan melalui aplikasi memiliki role `customer`. Role `owner` atau `admin` perlu disiapkan pada database untuk pengujian fitur sesuai peran.
- Untuk menguji endpoint terlindungi di Swagger, login terlebih dahulu, salin `data.token`, pilih **Authorize**, lalu masukkan `Bearer <token>`.
