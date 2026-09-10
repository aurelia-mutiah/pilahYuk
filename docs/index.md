```md
# PilahYuk

## Trashformers

### Senior Project TI

---

## Anggota Kelompok

| No. | Nama | NIM |
|---|---|---|
| 1 | Aurelia Mutiah Raudyatuzzahra | 24/534903/TK/59310 |
| 2 | Shafiyah Nuril Hayya | 24/540586/TK/60019 |
| 3 | Alya Luqyana Nasywa | 24/545645/TK/60716 |
| 4 | Bagas Adjie Pamungkas | 24/544718/TK/60547 |

---

## Nama Produk

### PilahYuk — Klasifikasi Sampah Otomatis via Foto

PilahYuk adalah aplikasi web yang membantu pengguna mengenali kategori sampah hanya dengan memotret atau mengunggah foto sampah. Sistem menggunakan teknologi AI untuk mengklasifikasikan sampah menjadi tiga kategori utama:

- **Organik**
- **Anorganik**
- **B3 (Bahan Berbahaya dan Beracun)**

Selain memberikan hasil klasifikasi, PilahYuk juga memberikan panduan mengenai bagaimana sampah tersebut sebaiknya dibuang atau didaur ulang.

---

## Jenis Produk

PilahYuk merupakan **aplikasi web berbasis Artificial Intelligence (AI)** yang berfokus pada klasifikasi sampah melalui gambar.

Produk ini dibuat dalam bentuk **web app responsif**, sehingga pengguna dapat langsung mengaksesnya melalui browser, terutama dari HP, tanpa perlu menginstal aplikasi tambahan.

Teknologi utama yang digunakan meliputi:

- **Artificial Intelligence** untuk klasifikasi gambar sampah
- **Azure Custom Vision** untuk model klasifikasi
- **Azure Cloud** sebagai infrastruktur utama
- **Web Technology** untuk antarmuka pengguna

PilahYuk tidak hanya berfungsi sebagai alat klasifikasi, tetapi juga sebagai media edukasi dan pencatat kebiasaan memilah sampah.

---

## Latar Belakang & Permasalahan

Sampah masih menjadi salah satu permasalahan lingkungan yang cukup besar di Indonesia. Berdasarkan data yang digunakan dalam perancangan produk, Indonesia menghasilkan sekitar **34,2 juta ton sampah pada tahun 2024**. Dari jumlah tersebut, sekitar **20,4 juta ton atau 59,7% berhasil dikelola**, sedangkan sekitar **13,8 juta ton atau 40,3% masih belum terkelola**.

Salah satu masalah yang terjadi bukan hanya banyaknya sampah, tetapi juga **kesulitan masyarakat dalam membedakan dan memilah jenis sampah**.

Dalam kehidupan sehari-hari, masih banyak orang yang bingung ketika harus menentukan apakah suatu benda termasuk sampah organik, anorganik, atau B3. Akibatnya, berbagai jenis sampah sering langsung dicampur tanpa mengetahui cara penanganan yang tepat.

Contohnya, sampah seperti botol plastik, kertas, sisa makanan, baterai, elektronik bekas, dan obat-obatan memiliki cara penanganan yang berbeda. Sampah B3, misalnya, tidak seharusnya dicampur begitu saja dengan sampah rumah tangga biasa karena dapat menimbulkan risiko terhadap lingkungan.

### Permasalahan Utama

Dari kondisi tersebut, permasalahan yang ingin kami jawab adalah:

> Bagaimana membantu masyarakat mengenali kategori sampah dengan cepat dan mudah, sehingga mereka dapat menentukan cara membuang atau mengelolanya dengan lebih tepat?

Permasalahan ini menjadi dasar dari pengembangan PilahYuk.

---

## Ide Solusi

### "Foto sampahnya, PilahYuk yang bantu!"

PilahYuk hadir sebagai solusi sederhana untuk membantu pengguna ketika mereka bingung menentukan jenis sampah.

Alur penggunaannya dibuat sesederhana mungkin:

**Foto sampah → AI mengenali → Kategori muncul → Ikuti panduan pembuangan**

Pengguna cukup memotret atau mengunggah foto sampah. Selanjutnya, sistem akan menganalisis gambar menggunakan **Azure Custom Vision** dan memberikan hasil klasifikasi.

Setelah kategori diketahui, pengguna juga mendapatkan panduan mengenai tindakan yang sebaiknya dilakukan terhadap sampah tersebut.

### Fitur Utama PilahYuk

| Fitur | Deskripsi |
|---|---|
| **Deteksi Sampah** | Mengklasifikasikan sampah dari foto menjadi Organik, Anorganik, atau B3. |
| **Panduan Pembuangan** | Memberikan informasi mengenai cara membuang atau mendaur ulang sampah. |
| **Riwayat & Statistik** | Menyimpan riwayat pemilahan dan menampilkan statistik pengguna. |
| **Squad** | Memungkinkan pengguna membentuk kelompok untuk memilah sampah bersama. |
| **Leaderboard** | Menampilkan peringkat antar-Squad atau komunitas untuk meningkatkan motivasi. |
| **Multi-Item Detection** | Pengembangan lanjutan untuk mendeteksi beberapa jenis sampah dalam satu foto. |

Fitur multi-item merupakan fitur tambahan yang akan dikerjakan jika fitur utama sudah stabil.

### Keunggulan PilahYuk

PilahYuk tidak hanya ingin memberi tahu **"ini sampah apa?"**, tetapi juga membantu menjawab pertanyaan berikutnya:

> **"Terus, sampah ini harus diapakan?"**

Dengan begitu, pengguna tidak berhenti hanya pada informasi klasifikasi, tetapi bisa langsung mengambil tindakan yang lebih tepat.

---

## Analisis Kompetitor

PilahYuk dibandingkan dengan beberapa platform pengelolaan sampah yang sudah ada untuk melihat kelebihan dan celah yang dapat diisi.

| Kompetitor | Jenis Produk | Kelebihan | Kekurangan | Celah yang Diisi PilahYuk |
|---|---|---|---|---|
| **Rekosistem** | Pengelolaan, drop-point, dan penjemputan sampah | Jaringan layanan luas dan layanan penjemputan | Tidak fokus pada klasifikasi sampah melalui foto | Membantu pengguna mengenali jenis sampah sebelum dibuang |
| **Waste4Change** | Pengumpulan, pengelolaan, dan konsultasi sampah | Solusi pengelolaan dari hulu hingga hilir | Lebih berorientasi pada B2B dan institusi | Memberikan solusi praktis untuk individu dan rumah tangga |
| **Octopus** | Setor sampah daur ulang berbasis reward | Memiliki sistem reward dan jaringan drop-point | Pengguna perlu mengetahui jenis sampah terlebih dahulu | Membantu mengidentifikasi sampah sebelum menentukan tindakan |

### Positioning PilahYuk

PilahYuk berfokus pada tahap yang sering terlewat, yaitu **saat pengguna belum tahu sampah yang mereka miliki termasuk kategori apa**.

Jika kompetitor lebih banyak berfokus pada pengangkutan, pengelolaan, atau reward, PilahYuk hadir sebagai alat bantu untuk menjawab:

> **"Ini sampah apa, dan harus dibuang ke mana?"**

Dengan konsep **foto → AI → kategori → panduan**, PilahYuk ingin membuat proses memilah sampah menjadi lebih mudah, cepat, dan tidak membingungkan.

---

## Institusi

**Departemen Teknologi Elektro dan Teknologi Informasi**  
**Fakultas Teknik**  
**Universitas Gadjah Mada**

**Project Senior Project Teknologi Informasi**  
**Kelompok Trashformers**
```
