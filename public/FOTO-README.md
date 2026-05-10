# 📸 Panduan Foto Mempelai

## File Foto yang Dibutuhkan:

Taruh 2 file foto di folder `public/`:

### 1. **groom.jpg** - Foto Mempelai Pria (Cowo Jawa)
- Nama file: `groom.jpg`
- Format: JPG, JPEG, atau PNG
- Ukuran ideal: 500x500px (persegi)
- Posisi: Foto wajah/portrait
- Tips: Pastikan wajah di tengah foto

### 2. **bride.jpg** - Foto Mempelai Wanita (Cewe Jawa)
- Nama file: `bride.jpg`
- Format: JPG, JPEG, atau PNG
- Ukuran ideal: 500x500px (persegi)
- Posisi: Foto wajah/portrait
- Tips: Pastikan wajah di tengah foto

---

## 📁 Lokasi File:

```
wedding-invitation/
└── public/
    ├── groom.jpg    ← Foto cowo di sini
    ├── bride.jpg    ← Foto cewe di sini
    ├── couple.jpg   (foto background yang sudah ada)
    └── gmalena.mpeg (musik yang sudah ada)
```

---

## ✨ Fitur Foto:

- **Frame lingkaran** dengan border emas
- **Animasi hover** - foto membesar saat di-hover
- **Glow effect** - cahaya emas berkedip di sekitar foto
- **Rotating rings** - cincin dekoratif berputar
- **Diamond accents** - berlian emas di 4 titik
- **Gradient overlay** - efek elegan pada foto

---

## 🎨 Tips Foto Terbaik:

1. **Gunakan foto portrait** (fokus wajah)
2. **Background polos** atau blur lebih bagus
3. **Pencahayaan baik** - tidak terlalu gelap/terang
4. **Resolusi tinggi** - minimal 500x500px
5. **Format persegi** - akan di-crop otomatis jadi lingkaran

---

## 🔄 Jika Nama File Berbeda:

Jika foto Anda punya nama lain (misal: `pria.jpg` dan `wanita.jpg`), 
ada 2 cara:

### Cara 1: Rename file foto Anda
```
pria.jpg   → groom.jpg
wanita.jpg → bride.jpg
```

### Cara 2: Edit kode di `Couple.jsx`
Cari baris ini dan ganti nama file:
```jsx
photoUrl="/groom.jpg"  // Ganti dengan nama file Anda
photoUrl="/bride.jpg"  // Ganti dengan nama file Anda
```

---

## ✅ Checklist:

- [ ] Foto cowo sudah ada di `public/groom.jpg`
- [ ] Foto cewe sudah ada di `public/bride.jpg`
- [ ] Foto ukuran minimal 500x500px
- [ ] Foto format JPG/JPEG/PNG
- [ ] Test di browser - foto muncul dengan baik

---

Setelah taruh foto, refresh browser dan foto akan muncul otomatis! 🎉
