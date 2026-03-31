# Hydraulics Quiz - CE6301

PDF kaynaklı, interaktif hidrolik mühendisliği quiz uygulaması.

## Kaynaklar

**Exercise 1:** Steel ball density calculation (1 soru)
**Exercise 2:** Terminal velocity in oil (1 soru)
**Exercise 3:** Stokes & Newton Laws (10 soru)

## Özellikler

- **12 Soru** - PDF'lerden eksiksiz
- **Çift Dil** - İngilizce / Türkçe
- **TTS Ses** - Soru ve çözümlerin Türkçe sesli okunması (Google TTS)
- **KaTeX** - Matematik formüllerin güzel renderlanması
- **Hesap Makinesi** - Sürüklenebilir, bilimsel hesap makinesi
- **Yıldızlama** - Önemli soruları kaydet
- **Glass Effect** - Modern cam efektli tasarım
- **Responsive** - Mobil uyumlu tasarım

## Sorular

### Exercise I: Çelik Küre Yoğunluğu
3 cm çaplı çelik kürenin yağda ve havadaki ağırlık farkından yoğunluk hesabı.

### Exercise II: Terminal Hız
Çelik kürenin yağdaki terminal (düşme) hızının hesabı.

### Exercise III: Stokes & Newton
- Stokes Yasası (küçük küreler)
- Newton Yasası (büyük küreler)
- Reynolds sayısı hesabı
- Sürükleme kuvveti hesabı

## Teknolojiler

- Vanilla JavaScript
- KaTeX (LaTeX math rendering)
- HTML5 Audio API + gTTS
- CSS Glass Morphism

## Ses Dosyaları Oluşturma

```bash
uv venv .venv
source .venv/bin/activate
uv pip install gtts requests
python generate_audio.py
```

## Lisans

MIT
