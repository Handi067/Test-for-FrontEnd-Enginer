# 🚀 Admin Dashboard Project: Material & Project Management

Dashboard ini adalah *proof of concept* (PoC) *frontend* yang dirancang untuk mengelola dan memonitor berbagai aspek operasional dan administratif. Proyek ini mengimplementasikan tata letak dua kolom yang konsisten dengan navigasi berbasis peran (RBAC).

## 🎯 Tujuan Utama

1.  **Layout Konsisten**: Menggunakan tata letak dua kolom dengan **Sidebar Navigasi** (gelap) dan **Header** (kuning/emas).
2.  **Modul Lengkap**: Implementasi kerangka untuk delapan modul inti (Project, Budget, Material Management, dll.).
3.  **Role-Based Access Control (RBAC)**: Pembatasan akses navigasi ke modul tertentu berdasarkan peran pengguna (`admin` atau `user`).
4.  **Tabel Interaktif (Target)**: Persiapan untuk implementasi tabel dengan fitur Sorting, Searching, dan Pagination.

## 🛠️ Stack Teknologi

* **Frontend**: ReactJS, TypeScript
* **Styling**: SCSS (Sass)
* **Routing**: State-Based Routing (dikendalikan oleh *state* di `App.tsx`)
* **Ikon**: Lucide React

---

## 📦 Detail Struktur dan File Project

Berikut adalah detail dari file dan folder utama dalam direktori `src/`:

### 1. File Root Utama (`src/`)

| File | Deskripsi |
| :--- | :--- |
| `App.tsx` | Komponen utama yang mengelola status otentikasi (`isAuthenticated`, `userRole`) dan mengimplementasikan **State-Based Routing** untuk berpindah antar halaman modul. |
| `main.tsx` | *Entry point* aplikasi React yang me-*render* `App.tsx`. |
| `index.scss` | File SCSS global yang mengimpor gaya dasar dan variabel. |

### 2. Folder `layouts/` dan `components/layout/`

Mengatur kerangka visual aplikasi.

| File | Lokasi | Deskripsi |
| :--- | :--- | :--- |
| `DashboardLayout.tsx` | `src/layouts/` | Komponen *wrapper* utama yang menyusun `Sidebar`, `Header`, dan konten halaman. |
| `Sidebar.tsx` | `src/components/layout/` | Komponen navigasi yang menangani **RBAC** dan perubahan *state* halaman (`setCurrentPage`). |
| `Header.tsx` | `src/components/layout/` | Komponen bar atas berwarna kuning/emas yang menampilkan judul halaman. |

### 3. Folder `pages/` (Halaman Modul)

| File | Deskripsi |
| :--- | :--- |
| `LoginPage.tsx` | Halaman *login* yang menangani *input* kredensial dan otentikasi simulasi. |
| `ProjectPage.tsx` | Halaman *dashboard* utama dengan *Summary Cards* dan detail proyek. |
| `MaterialManagementPage.tsx`| Halaman yang menampilkan ringkasan inventaris dan daftar status material. |
| `ServiceRequestPage.tsx` | Halaman yang menampilkan status tiket dan detail permintaan layanan. |
| `MasterDataPage.tsx` | Halaman untuk manajemen data inti (Entitas, Akun & Role). |
| `BudgetRecapPage.tsx` | Sub-modul yang menampilkan rekapan dan alokasi anggaran. |
| **Halaman Lain** | (`OverviewPage.tsx`, `VendorPerformancePage.tsx`, `WorkHistoryPage.tsx`, `SettingsPage.tsx`) | Halaman kerangka untuk modul-modul lainnya. |

### 4. Folder `components/ui/` (Komponen Reusable)

| File | Deskripsi |
| :--- | :--- |
| `SummaryCard.tsx` | Komponen *reusable* untuk menampilkan statistik ringkasan. |
| `Badge.tsx` | Komponen *reusable* untuk menampilkan status berwarna (misalnya, `Active`, `Tertunda`). |
| `ProjectCard.tsx` | Komponen kartu spesifik untuk tampilan proyek. |

---

## ⚙️ Instalasi dan Penggunaan

1.  **Instal dependensi:** `npm install` atau `yarn install`
2.  **Jalankan:** `npm run dev` atau `yarn dev`

### 🔑 Kredensial Simulasi

Gunakan kredensial ini di halaman *login* untuk menguji peran:

| Peran | Email | Password | Akses |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin@example.com` | `admin123` | Akses penuh. |
| **User** | `user@example.com` | `user123` | Akses terbatas. |
