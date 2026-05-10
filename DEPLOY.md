# 🚀 Panduan Deploy ke Vercel

## Metode 1: Via Website Vercel (TERMUDAH)

### Langkah-langkah:

1. **Push ke GitHub dulu:**
   ```bash
   git init
   git add .
   git commit -m "Wedding invitation ready"
   git remote add origin https://github.com/USERNAME/wedding-invitation.git
   git push -u origin main
   ```

2. **Buka [vercel.com](https://vercel.com)**

3. **Sign Up dengan GitHub** (gratis)

4. **Klik "Add New Project"**

5. **Import repository** `wedding-invitation`

6. **Vercel otomatis detect Vite** - Langsung klik **"Deploy"**

7. **Tunggu 1-2 menit** → Selesai! 🎉

8. **Dapatkan URL:** `https://your-project.vercel.app`

---

## Metode 2: Via CLI (Untuk Update Cepat)

### Install Vercel CLI:
```bash
npm install -g vercel
```

### Login:
```bash
vercel login
```
Pilih GitHub dan authorize.

### Deploy:
```bash
# Dari folder wedding-invitation
vercel

# Jawab pertanyaan:
# Set up and deploy? → Y
# Which scope? → Pilih akun Anda
# Link to existing project? → N
# Project name? → wedding-invitation (atau nama lain)
# Directory? → ./ (tekan Enter)
# Override settings? → N

# Tunggu selesai → Dapat URL preview
```

### Deploy Production:
```bash
vercel --prod
```

---

## Update Website (Setelah Edit)

### Via GitHub (Otomatis):
```bash
git add .
git commit -m "Update content"
git push
```
Vercel otomatis deploy ulang!

### Via CLI:
```bash
vercel --prod
```

---

## Custom Domain (Opsional)

1. Beli domain (misal: arjuna-srikandi.com)
2. Di Vercel dashboard → Project Settings → Domains
3. Tambahkan domain Anda
4. Update DNS sesuai instruksi Vercel
5. Selesai! SSL otomatis aktif

---

## Troubleshooting

### Audio tidak muter:
- Pastikan file `gmalena.mpeg` ada di folder `public/`
- Check browser console untuk error
- Beberapa browser block autoplay - user harus klik play

### Animasi patah:
- Clear cache browser (Ctrl+Shift+R)
- Check di browser lain

### Build error:
```bash
# Test build lokal dulu:
npm run build

# Jika error, fix dulu sebelum deploy
```

---

## Tips:

✅ **Gratis selamanya** untuk personal project
✅ **Unlimited deploys**
✅ **Auto SSL/HTTPS**
✅ **CDN global** - cepat di seluruh dunia
✅ **Analytics gratis** - lihat berapa visitor

---

## Support

Jika ada masalah:
1. Check [Vercel Docs](https://vercel.com/docs)
2. Check build logs di Vercel dashboard
3. Test `npm run build` lokal dulu
