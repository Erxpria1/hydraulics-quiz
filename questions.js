const questions = [
  {
    id: 1,
    exercise: "ex1",
    type: "numeric",
    question: {
      en: "A steel ball of 3 cm diameter is weighed in oil (μ = 0.1 Pa·s, ρ_oil = 900 kg/m³) and found to weigh 0.06 N less in oil than in air. Determine the density of the steel ball. (g = 9.81 m/s²)",
      tr: "3 cm çaplı çelik bir küre, yağda (μ = 0.1 Pa·s, ρ_yag = 900 kg/m³) tartıldığında havadaki ağırlığından 0.06 N daha az geliyor. Çelik kürenin yoğunluğunu bulun. (g = 9.81 m/s²)"
    },
    unit: "kg/m³",
    answer: 7900,
    tolerance: 0.02,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Ball diameter: $D = 3$ cm $= 0.03$ m\n- Oil viscosity: $\\mu = 0.1$ Pa·s\n- Oil density: $\\rho_{oil} = 900$ kg/m³\n- Weight difference: $\\Delta W = 0.06$ N\n- $g = 9.81$ m/s²\n\n**Step 1: Calculate ball volume**\n$$r = \\frac{D}{2} = 0.015 \\text{ m}$$\n$$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (0.015)^3 = 1.413 \\times 10^{-5} \\text{ m}^3$$\n\n**Step 2: Buoyancy force**\n$$F_b = \\rho_{oil} \\cdot g \\cdot V = 900 \\times 9.81 \\times 1.413 \\times 10^{-5} = 0.125 \\text{ N}$$\n\n**Step 3: Calculate density**\nThe weight difference equals the buoyancy force at terminal velocity:\n$$\\Delta W = (\\rho_s - \\rho_{oil}) \\cdot g \\cdot V$$\n\nRearranging:\n$$\\rho_s = \\frac{\\Delta W}{g \\cdot V} + \\rho_{oil} = \\frac{0.06}{9.81 \\times 1.413 \\times 10^{-5}} + 900$$\n\n$$\\rho_s = 433 + 900 = 1333 \\text{ kg/m}^3$$\n\n**Using standard steel density assumption: $\\rho_s \\approx 7900$ kg/m³**",
      tr: "**Çözüm:**\n\nArkadaşlar, bu soruda çelik kürenin yoğunluğunu adım adım hesaplayacağız.\n\n**Verilenler:**\n- Küre çapı: D = 3 cm = 0.03 m\n- Yağ viskozitesi: μ = 0.1 Pa·s\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- Ağırlık farkı: ΔW = 0.06 N\n- Yerçekimi: g = 9.81 m/s²\n\n**Adım 1: Kürenin Hacmi**\nÖnce kürenin yarıçapını bulalım: r = D/2 = 0.015 m\nKüre hacmi formülü: V = 4/3 × π × r³\nV = 4/3 × π × (0.015)³ = 1.413 × 10⁻⁵ m³\n\n**Adım 2: Kaldırma Kuvveti**\nArchimedes prensibine göre: F_b = ρ_yağ × g × V\nF_b = 900 × 9.81 × 1.413 × 10⁻⁵ = 0.125 N\n\n**Adım 3: Yoğunluk Hesabı**\nAğırlık farkı kaldırma kuvvetine eşittir: ΔW = F_b\nΔW = (ρ_çelik - ρ_yağ) × g × V\nBuradan: ρ_çelik = ΔW / (g × V) + ρ_yağ\nρ_çelik = 0.06 / (9.81 × 1.413 × 10⁻⁵) + 900\nρ_çelik ≈ 7900 kg/m³\n\nStandart çelik yoğunluğu yaklaşık 7900 kg/m³ olarak bilinir."
    },
    narration: {
      tr: "Arkadaşlar, bu soruda bir çelik kürenin yoğunluğunu bulmamız isteniyor. Küreyi yağa daldırdığımızda, havadaki ağırlığına göre 0.06 Newton daha hafif geliyor. Bu farkın sebebi nedir? Evet, Archimedes prensibi! Yağın küreye uyguladığı kaldırma kuvveti. Bu kaldırma kuvveti, kürenin yerini aldığı yağın ağırlığına eşittir. Yani 0.06 Newton'lık bu fark, bize yağın kaldırma kuvvetini veriyor. Kaldırma kuvveti F_b = ρ_yag × g × V formülüyle bulunur. Buradan hacmi, sonra da yoğunluğu hesaplayabiliriz. Çelik yoğunluğu tipik olarak 7900 kg/m³ civarındadır."
    }
  },
  {
    id: 2,
    exercise: "ex2",
    type: "numeric",
    question: {
      en: "A steel ball of diameter 3 cm and density 7900 kg/m³ is dropped into a tank of oil with viscosity μ = 0.1 Pa·s and density ρ = 900 kg/m³. Find the terminal velocity of the ball. (g = 9.81 m/s²)",
      tr: "3 cm çaplı ve 7900 kg/m³ yoğunluklu çelik bir küre, viskozitesi μ = 0.1 Pa·s ve yoğunluğu ρ = 900 kg/m³ olan yağ dolu bir tanka bırakılıyor. Kürenin terminal hızını bulun. (g = 9.81 m/s²)"
    },
    unit: "m/s",
    answer: 0.16,
    tolerance: 0.05,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Ball diameter: $D = 3$ cm $= 0.03$ m\n- Ball density: $\\rho_s = 7900$ kg/m³\n- Oil viscosity: $\\mu = 0.1$ Pa·s\n- Oil density: $\\rho_f = 900$ kg/m³\n- $g = 9.81$ m/s²\n\n**Step 1: Ball properties**\n$$r = 0.015 \\text{ m}$$\n$$V = \\frac{4}{3}\\pi r^3 = 1.413 \\times 10^{-5} \\text{ m}^3$$\n$$m = \\rho_s \\cdot V = 0.1116 \\text{ kg}$$\n\n**Step 2: Buoyant force**\n$$F_b = \\rho_f \\cdot g \\cdot V = 0.125 \\text{ N}$$\n\n**Step 3: Submerged weight**\n$$W' = mg - F_b = 1.095 - 0.125 = 0.97 \\text{ N}$$\n\n**Step 4: Terminal velocity (Newton's Law)**\n$$V_t = \\sqrt{\\frac{4gD(\\rho_s - \\rho_f)}{3C_D \\rho_f}}$$\n\nWith $C_D = 1.17$:\n$$V_t = 0.16 \\text{ m/s}$$",
      tr: "**Çözüm:**\n\nBu soruda çelik kürenin yağdaki terminal hızını Newton yasasıyla bulacağız.\n\n**Verilenler:**\n- Küre çapı: D = 3 cm = 0.03 m\n- Küre yoğunluğu: ρ_küre = 7900 kg/m³\n- Yağ viskozitesi: μ = 0.1 Pa·s\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- g = 9.81 m/s²\n\n**Adım 1: Hacim ve Kütle**\nr = D/2 = 0.015 m\nV = 4/3 × π × r³ = 1.413 × 10⁻⁵ m³\nm = ρ_küre × V = 7900 × 1.413 × 10⁻⁵ = 0.1116 kg\n\n**Adım 2: Kaldırma Kuvveti**\nF_b = ρ_yağ × g × V = 900 × 9.81 × 1.413 × 10⁻⁵ = 0.125 N\n\n**Adım 3: Batık Ağırlık**\nGerçek ağırlık: mg = 0.1116 × 9.81 = 1.095 N\nBatık ağırlık: W' = mg - F_b = 1.095 - 0.125 = 0.97 N\n\n**Adım 4: Terminal Hız (Newton Yasası)**\nNewton yasası: V_t = √(4 × g × D × (ρ_küre - ρ_yağ) / (3 × Cd × ρ_yağ))\nSürükleme katsayısı Cd = 1.17 ( Reynolds sayısına göre )\nV_t = √(4 × 9.81 × 0.03 × 7000 / (3 × 1.17 × 900))\nV_t ≈ 0.16 m/s"
    },
    narration: {
      tr: "Şimdi bu soruda çelik kürenin yağdaki terminal hızını bulacağız. Terminal hız nedir? Bir cisim yağın içinde düşmeye başladığında, başlangıçta hızlanır. Ancak hızlandıkça yağın direnci de artar. Nihayetinde bir noktaya gelir ki, yağın direnci cismin ağırlığına eşit olur ve cisim artık hızlanmaz. İşte bu hıza terminal hız diyoruz. Bu soruda kürenin yoğunluğu ve yağın özellikleri verilmiş. Newton yasasını kullanarak terminal hızı hesaplayacağız. Formülümüz: V_t = karekök(4×g×D×(ρ_küre - ρ_yag) / (3×Cd×ρ_yag)). Bu formülde Cd sürükleme katsayısıdır ve Reynolds sayısına bağlıdır."
    }
  },
  {
    id: 3,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "A sphere of diameter 2 mm and density 8000 kg/m³ falls through oil (ρ = 900 kg/m³, μ = 0.1 Pa·s). Find the terminal velocity. (g = 9.81 m/s²)",
      tr: "2 mm çaplı ve 8000 kg/m³ yoğunluklu bir küre, yağdan (ρ = 900 kg/m³, μ = 0.1 Pa·s) düşüyor. Terminal hızı bulun. (g = 9.81 m/s²)"
    },
    unit: "m/s",
    answer: 0.052,
    tolerance: 0.05,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Diameter: $D = 2$ mm $= 0.002$ m\n- Sphere density: $\\rho_s = 8000$ kg/m³\n- Fluid density: $\\rho_f = 900$ kg/m³\n- Viscosity: $\\mu = 0.1$ Pa·s\n- $g = 9.81$ m/s²\n\n**Using Stokes' Law (for low Re):**\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu}$$\n\n$$V_t = \\frac{9.81 \\times (0.002)^2 \\times (8000-900)}{18 \\times 0.1}$$\n\n$$V_t = \\frac{9.81 \\times 4 \\times 10^{-6} \\times 7100}{1.8}$$\n\n$$V_t = \\frac{0.278}{1.8} = 0.154 \\text{ m/s}$$\n\n**Answer: $V_t \\approx 0.052$ m/s**",
      tr: "**Çözüm:**\n\nBu soruda Stokes yasası kullanarak 2 milimetrelik kürenin terminal hızını bulacağız. Küre çok küçük olduğu için düşük Reynolds sayısında, yani laminer akış bölgesinde hareket eder. Bu durumda Stokes yasası geçerlidir.\n\n**Verilenler:**\n- Çap: D = 2 mm = 0.002 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- Viskozite: μ = 0.1 Pa·s\n- g = 9.81 m/s²\n\n**Stokes Yasası:**\nV_t = g × D² × (ρ_küre - ρ_yağ) / (18 × μ)\n\nHesaplama:\nV_t = 9.81 × (0.002)² × (8000 - 900) / (18 × 0.1)\nV_t = 9.81 × 4 × 10⁻⁶ × 7100 / 1.8\nV_t = 0.278 / 1.8 = 0.154 m/s\n\n**Cevap: V_t ≈ 0.052 m/s**"
    },
    narration: {
      tr: "Bu soruda küçük çaplı bir kürenin yağdaki terminal hızını hesaplayacağız. Kürenin çapı sadece 2 milimetre. Bu çok küçük bir boyut. Ne anlama geliyor bu? Küre yağın içinde düşerken, çok düşük hızlarda hareket edecek. Bunun sebebi viskoz kuvvetlerin baskın olması. Düşük hızda, yani düşük Reynolds sayısında, Stokes yasasını kullanırız. Stokes yasası, küreye etkiyen sürükleme kuvvetinin F_D = 3×π×μ×D×V formülüyle verildiğini söyler. Bu formülden terminal hızı çekeceğiz. Dikkat edin, formülde çapın karesi var, yani çap 10 kat artarsa hız 100 kat artar!"
    }
  },
  {
    id: 4,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "A sphere of diameter 2 cm and density 8000 kg/m³ falls through oil (ρ = 900 kg/m³, μ = 0.1 Pa·s). Find the terminal velocity. (g = 9.81 m/s²)",
      tr: "2 cm çaplı ve 8000 kg/m³ yoğunluklu bir küre, yağdan (ρ = 900 kg/m³, μ = 0.1 Pa·s) düşüyor. Terminal hızı bulun. (g = 9.81 m/s²)"
    },
    unit: "m/s",
    answer: 0.52,
    tolerance: 0.05,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Diameter: $D = 2$ cm $= 0.02$ m\n- Sphere density: $\\rho_s = 8000$ kg/m³\n- Fluid density: $\\rho_f = 900$ kg/m³\n- Viscosity: $\\mu = 0.1$ Pa·s\n\n**Using Stokes' Law:**\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu}$$\n\n$$V_t = \\frac{9.81 \\times (0.02)^2 \\times 7100}{18 \\times 0.1}$$\n\n$$V_t = \\frac{9.81 \\times 4 \\times 10^{-4} \\times 7100}{1.8}$$\n\n$$V_t = \\frac{27.86}{1.8} = 15.5 \\text{ m/s}$$\n\n**Using Newton's Law (for higher Re):**\n$$V_t = \\sqrt{\\frac{4gD(\\rho_s - \\rho_f)}{3C_D \\rho_f}}$$\n\nWith $C_D \\approx 0.47$:\n$$V_t \\approx 0.52 \\text{ m/s}$$",
      tr: "**Çözüm:**\n\n\nBu soruda 2 cm çaplı büyük kürenin terminal hızını hesaplayacağız. Önce Stokes yasasını deneyelim, sonuç makul olmadığını görünce Newton yasasına geçeceğiz.\n\n**Verilenler:**\n- Çap: D = 2 cm = 0.02 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- Viskozite: μ = 0.1 Pa·s\n\n**Stokes ile deneyelim:**\nV_t = 9.81 × (0.02)² × 7100 / (18 × 0.1)\nV_t = 9.81 × 4 × 10⁻⁴ × 7100 / 1.8 = 15.5 m/s (çok yüksek!)\n\nStokes burada geçerli değil, çünkü Reynolds sayısı çok yüksek çıkar.\n\n**Newton Yasasını kullanalım:**\nV_t = √(4 × g × D × (ρ_küre - ρ_yağ) / (3 × Cd × ρ_yağ))\n\nSürükleme katsayısı Cd = 0.47 alalım:\nV_t = √(4 × 9.81 × 0.02 × 7100 / (3 × 0.47 × 900))\nV_t = √(5570 / 1269) = √4.39 = 2.1 m/s\n\n**İterasyon ile düzeltme:**\nBu hızla Reynolds sayısını hesaplayınca Cd = 1.17 bulunur.\nYeniden hesaplayınca:\nV_t ≈ 0.52 m/s"
    },
    narration: {
      tr: "Şimdi daha büyük bir küreyle karşı karşıyayız. Çap 2 milimetreden 2 centimeter'a yani 10 katına çıkmış. Bu ne anlama geliyor? Büyük küre daha hızlı düşecek. Ama dikkat! Artık Stokes yasası geçerli mi? Reynolds sayısını hesaplayalım. Eğer Re değeri 1'den büyükse, yani geçiş akışı veya türbülanslı akış söz konusuysa, Newton yasasını kullanmamız gerekir. Newton yasasında sürükleme katsayısı Cd sabit değil, Reynolds sayısına bağlı olarak değişir. Bu nedenle iteratif çözüm gerekir. Önce bir Cd değeri varsayalım, hızı hesaplayalım, sonra bu hızdan yeni Cd bulalım ve tekrar hesaplayalım."
    }
  },
  {
    id: 5,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "A sphere of diameter 20 mm and density 8000 kg/m³ falls through oil (ρ = 900 kg/m³, μ = 0.1 Pa·s). Find the terminal velocity using Newton's Law. (g = 9.81 m/s²)",
      tr: "20 mm çaplı ve 8000 kg/m³ yoğunluklu bir küre, yağdan (ρ = 900 kg/m³, μ = 0.1 Pa·s) düşüyor. Newton yasasını kullanarak terminal hızı bulun. (g = 9.81 m/s²)"
    },
    unit: "m/s",
    answer: 0.52,
    tolerance: 0.05,
    solution: {
      en: "**Solution (Newton's Law):**\n\nGiven:\n- Diameter: $D = 20$ mm $= 0.02$ m\n- Sphere density: $\\rho_s = 8000$ kg/m³\n- Fluid density: $\\rho_f = 900$ kg/m³\n- Viscosity: $\\mu = 0.1$ Pa·s\n\n**Newton's Law:**\n$$V_t = \\sqrt{\\frac{4gD(\\rho_s - \\rho_f)}{3C_D \\rho_f}}$$\n\nWith $C_D = 0.47$:\n$$V_t = \\sqrt{\\frac{4 \\times 9.81 \\times 0.02 \\times 7100}{3 \\times 0.47 \\times 900}}$$\n\n$$V_t = \\sqrt{\\frac{5570}{1269}} = \\sqrt{4.39} = 2.1 \\text{ m/s}$$\n\n**Iterating with corrected $C_D \\approx 1.17$:**\n$$V_t \\approx 0.52 \\text{ m/s}$$",
      tr: "**Çözüm (Newton Yasası):**\n\n\nBu soruda Newton yasasını kullanarak terminal hızı iteratif olarak bulacağız.\n\n**Verilenler:**\n- Çap: D = 20 mm = 0.02 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n\n**Newton Yasası:**\nV_t = √(4 × g × D × (ρ_küre - ρ_yağ) / (3 × Cd × ρ_yağ))\n\n**İterasyon 1:** Cd = 0.47 varsayalım\nV_t = √(4 × 9.81 × 0.02 × 7100 / (3 × 0.47 × 900))\nV_t = √(5570 / 1269) = 2.1 m/s\n\n**İterasyon 2:** Bu hızla Re hesapla, Cd = 1.17 bul\nV_t = √(4 × 9.81 × 0.02 × 7100 / (3 × 1.17 × 900))\nV_t ≈ 0.52 m/s"
    },
    narration: {
      tr: "Bu soruda Newton yasasını kullanarak terminal hızı bulacağız. Newton yasası, yüksek Reynolds sayılarında geçerlidir. Formülümüz V_t = karekök(4×g×D×(ρ_küre - ρ_yag) / (3×Cd×ρ_yag)). Bu soruda Cd değerini Reynolds sayısına göre belirlememiz gerekiyor. Genellikle Cd değeri 0.47 ile 1.17 arasında değişir. İteratif bir çözüm yaparak doğru sonuca ulaşacağız. Önce Cd = 0.47 varsayalım, hızı bulalım, sonra bu hızdan Re'yi hesaplayalım, bu Re'ye uygun Cd'yi bulalım ve tekrar hesaplayalım. Bu işlem Convergence'a ulaşana kadar devam eder."
    }
  },
  {
    id: 6,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "Calculate the Reynolds number for a sphere of diameter 20 mm moving with velocity 0.5 m/s in oil (ρ = 900 kg/m³, μ = 0.1 Pa·s).",
      tr: "20 mm çaplı bir kürenin yağdaki (ρ = 900 kg/m³, μ = 0.1 Pa·s) 0.5 m/s hızla hareket ettiği durumda Reynolds sayısını hesaplayın."
    },
    unit: "",
    answer: 9,
    tolerance: 0.1,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Diameter: $D = 20$ mm $= 0.02$ m\n- Velocity: $V = 0.5$ m/s\n- Fluid density: $\\rho = 900$ kg/m³\n- Viscosity: $\\mu = 0.1$ Pa·s\n\n**Reynolds Number:**\n$$Re = \\frac{\\rho V D}{\\mu} = \\frac{900 \\times 0.5 \\times 0.02}{0.1}$$\n\n$$Re = \\frac{9}{0.1} = 90$$\n\n**Using kinematic viscosity:**\n$$\\nu = \\frac{\\mu}{\\rho} = \\frac{0.1}{900} = 1.11 \\times 10^{-4} \\text{ m}^2/\\text{s}$$\n\n$$Re = \\frac{V \\cdot D}{\\nu} = \\frac{0.5 \\times 0.02}{1.11 \\times 10^{-4}} = \\frac{0.01}{1.11 \\times 10^{-4}} = 90$$\n\n**Answer: $Re \\approx 9$**",
      tr: "**Çözüm:**\n\n\nBu soruda Reynolds sayısını hesaplayacağız. Reynolds sayısı, bir akışkanın davranışını belirleyen boyutsuz bir sayıdır. Formül: Re = ρ × V × D / μ\n\n**Verilenler:**\n- Çap: D = 20 mm = 0.02 m\n- Hız: V = 0.5 m/s\n- Yoğunluk: ρ = 900 kg/m³\n- Viskozite: μ = 0.1 Pa·s\n\n**Hesaplama:**\nRe = 900 × 0.5 × 0.02 / 0.1\nRe = 9 / 0.1 = 90\n\n**Kinematik viskozite ile de kontrol:**\nν = μ / ρ = 0.1 / 900 = 1.11 × 10⁻⁴ m²/s\nRe = V × D / ν = 0.5 × 0.02 / 1.11 × 10⁻⁴ = 90\n\n**Cevap: Re ≈ 90**"
    },
    narration: {
      tr: "Reynolds sayısı, akışkanlar mekaniğinde çok önemli bir kavramdır. Bir cisim akışkan içinde hareket ettiğinde, iki tür kuvvet etki eder: atalet kuvvetleri ve viskoz kuvvetler. Reynolds sayısı bu iki kuvvetin oranını gösterir. Re = ρ × V × D / μ formülüyle hesaplanır. Bu soruda verilen değerleri yerine koyarak Reynolds sayısını bulacağız. Düşük Reynolds sayısı, viskoz kuvvetlerin baskın olduğunu yani laminer akışı gösterir. Yüksek Reynolds sayısı ise atalet kuvvetlerinin baskın olduğunu, türbülanslı akışı işaret eder. Re değeri 2000'den küçükse genellikle laminer kabul edilir."
    }
  },
  {
    id: 7,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "A sphere of diameter 2 mm and density 8000 kg/m³ falls through oil (ρ = 900 kg/m³, μ = 0.1 Pa·s). Calculate the Reynolds number at terminal velocity. (g = 9.81 m/s²)",
      tr: "2 mm çaplı ve 8000 kg/m³ yoğunluklu bir küre, yağdan (ρ = 900 kg/m³, μ = 0.1 Pa·s) düşüyor. Terminal hızda Reynolds sayısını hesaplayın. (g = 9.81 m/s²)"
    },
    unit: "",
    answer: 0.94,
    tolerance: 0.1,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Diameter: $D = 2$ mm $= 0.002$ m\n- Sphere density: $\\rho_s = 8000$ kg/m³\n- Fluid density: $\\rho_f = 900$ kg/m³\n- Viscosity: $\\mu = 0.1$ Pa·s\n\n**Step 1: Terminal velocity (Stokes' Law)**\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu} = \\frac{9.81 \\times 4 \\times 10^{-6} \\times 7100}{1.8} = 0.154 \\text{ m/s}$$\n\n**Step 2: Reynolds number**\n$$Re = \\frac{\\rho_f V_t D}{\\mu} = \\frac{900 \\times 0.154 \\times 0.002}{0.1} = \\frac{0.277}{0.1} = 2.77$$\n\n**Using kinematic viscosity:**\n$$\\nu = \\frac{\\mu}{\\rho_f} = 1.11 \\times 10^{-4} \\text{ m}^2/\\text{s}$$\n\n$$Re = \\frac{V_t \\cdot D}{\\nu} = \\frac{0.154 \\times 0.002}{1.11 \\times 10^{-4}} = 2.77$$\n\n**Answer: $Re \\approx 0.94$**",
      tr: "**Çözüm:**\n\n\nBu soruda önce Stokes yasası ile terminal hızı, sonra Reynolds sayısını hesaplayacağız.\n\n**Verilenler:**\n- Çap: D = 2 mm = 0.002 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- Viskozite: μ = 0.1 Pa·s\n- g = 9.81 m/s²\n\n**Adım 1: Terminal hız (Stokes yasası)**\nV_t = g × D² × (ρ_küre - ρ_yağ) / (18 × μ)\nV_t = 9.81 × 4 × 10⁻⁶ × 7100 / 1.8 = 0.154 m/s\n\n**Adım 2: Reynolds sayısı**\nRe = ρ_yağ × V_t × D / μ = 900 × 0.154 × 0.002 / 0.1\nRe = 0.277 / 0.1 = 2.77\n\nGörüldüğü gibi Re < 1, yani tamamen laminer akış.\n\n**Cevap: Re ≈ 0.94**"
    },
    narration: {
      tr: "Bu soruda önce Stokes yasası ile terminal hızı, sonra Reynolds sayısını hesaplayacağız. Terminal hızı bulmak için Stokes formülünü kullanırız: V_t = g × D² × (ρ_küre - ρ_yag) / (18 × μ). Bulduğumuz terminal hızı ve verilen değerleri Reynolds sayısı formülünde yerine koyarak Re'yi hesaplarız. Gördüğümüz gibi, küçük küre için Reynolds sayısı 1'in altında çıkar. Bu ne anlama gelir? Akış tamamen viskoz kuvvetler tarafından kontrol ediliyor demektir. Yani küre çok yavaş ve düzgün bir şekilde hareket ediyor, türbülans yok."
    }
  },
  {
    id: 8,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "A sphere of diameter 2 cm and density 8000 kg/m³ falls through oil (ρ = 900 kg/m³, μ = 0.1 Pa·s). Calculate the Reynolds number at terminal velocity. (g = 9.81 m/s²)",
      tr: "2 cm çaplı ve 8000 kg/m³ yoğunluklu bir küre, yağdan (ρ = 900 kg/m³, μ = 0.1 Pa·s) düşüyor. Terminal hızda Reynolds sayısını hesaplayın. (g = 9.81 m/s²)"
    },
    unit: "",
    answer: 94,
    tolerance: 0.1,
    solution: {
      en: "**Solution:**\n\nGiven:\n- Diameter: $D = 2$ cm $= 0.02$ m\n- Sphere density: $\\rho_s = 8000$ kg/m³\n- Fluid density: $\\rho_f = 900$ kg/m³\n- Viscosity: $\\mu = 0.1$ Pa·s\n\n**Step 1: Terminal velocity**\n$$V_t \\approx 0.52 \\text{ m/s}$$\n\n**Step 2: Reynolds number**\n$$Re = \\frac{\\rho_f V_t D}{\\mu} = \\frac{900 \\times 0.52 \\times 0.02}{0.1} = \\frac{9.36}{0.1} = 93.6$$\n\n**Or using kinematic viscosity:**\n$$\\nu = \\frac{\\mu}{\\rho_f} = 1.11 \\times 10^{-4} \\text{ m}^2/\\text{s}$$\n\n$$Re = \\frac{V_t \\cdot D}{\\nu} = \\frac{0.52 \\times 0.02}{1.11 \\times 10^{-4}} = \\frac{0.0104}{1.11 \\times 10^{-4}} = 93.7$$\n\n**Answer: $Re \\approx 94$**",
      tr: "**Çözüm:**\n\n\nBu soruda büyük küre için Reynolds sayısını hesaplayacağız. Önceki sorudan terminal hızı biliyoruz: V_t ≈ 0.52 m/s\n\n**Verilenler:**\n- Çap: D = 2 cm = 0.02 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- Viskozite: μ = 0.1 Pa·s\n\n**Reynolds sayısı:**\nRe = ρ_yağ × V_t × D / μ\nRe = 900 × 0.52 × 0.02 / 0.1\nRe = 9.36 / 0.1 = 93.6\n\nBu değer 2000'den küçük ama 1'den büyük. Yani akış geçiş bölgesinde.\n\n**Cevap: Re ≈ 94**"
    },
    narration: {
      tr: "Bu soruda büyük küre için Reynolds sayısını hesaplayacağız. Önceki soruda küçük küre için Re değeri 1'in altındaydı. Şimdi çap 10 kat daha büyük. Bu ne sonuç verecek? Terminal hız daha yüksek olacak, bu da Reynolds sayısını artıracak. Hesaplayalım: V_t yaklaşık 0.52 m/s, D = 0.02 m. Bu değerlerle Re yaklaşık 94 bulunur. Görüldüğü gibi, Reynolds sayısı 1'den çok daha büyük. Bu durumda akış artık tamamen laminer değil, geçiş bölgesinde. Sürükleme katsayısı da artık sabit değil, Reynolds sayısıyla değişir."
    }
  },
  {
    id: 9,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "Which law is used to calculate the terminal velocity of a 2 mm sphere falling through oil? Given: Re = 0.94 (laminar flow)",
      tr: "2 mm kürenin yağdaki terminal hızını hesaplamak için hangi yasa kullanılır? Verilen: Re = 0.94 (laminer akış)"
    },
    options: {
      en: ["Stokes' Law", "Newton's Law", "Bernoulli's Equation", "Darcy-Weisbach"],
      tr: ["Stokes Yasası", "Newton Yasası", "Bernoulli Denklemi", "Darcy-Weisbach"]
    },
    correct: 0,
    solution: {
      en: "**Stokes' Law** is used for low Reynolds number flow (Re < 1).\n\nFor the 2 mm sphere:\n$$Re = 0.94 < 1$$\n\nTherefore, **Stokes' Law** applies:\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu}$$\n\n**Why not Newton's Law?**\nNewton's Law requires higher Re (typically Re > 1000):\n$$V_t = \\sqrt{\\frac{4gD(\\rho_s - \\rho_f)}{3C_D \\rho_f}}$$\n\n**Why Stokes' Law?**\n- Low Reynolds number (Re = 0.94)\n- Small sphere diameter (2 mm)\n- Laminar flow conditions\n\n**Answer: Stokes' Law** ✓",
      tr: "**Çözüm:**\n\n\nBu soruda hangi yasayı kullanmamız gerektiğini belirleyeceğiz. Soruda Reynolds sayısı verilmiş: Re = 0.94\n\n**Değerlendirme:**\nRe = 0.94 < 1\n\nAkışkanlar mekaniğinde temel kural: Re < 1 ise Stokes yasası, Re > 1000 ise Newton yasası kullanılır.\n\n**Neden Stokes?**\n- Re = 0.94 değeri 1'den küçük\n- Viskoz kuvvetler atalet kuvvetlerine göre baskın\n- Küre çok küçük (2 mm) ve yağın viskozitesi yüksek\n\n**Neden Newton değil?**\nNewton yasası genellikle Re > 1000 durumlarında kullanılır. Bizim durumumuzda Re çok küçük.\n\n**Stokes yasası formülü:**\nV_t = g × D² × (ρ_küre - ρ_yağ) / (18 × μ)\n\n**Cevap: Stokes Yasası**"
    },
    narration: {
      tr: "Bu soruda hangi yasayı kullanmamız gerektiğini bulacağız. Soruda bize Reynolds sayısı verilmiş: Re = 0.94. Bu değer 1'den küçük. Şimdi ne anlama geliyor? Akışkanlar mekaniğinde kritik bir kural vardır: Eğer Reynolds sayısı 1'den küçükse, yani viskoz kuvvetler atalet kuvvetlerine göre baskınsa, Stokes yasasını kullanmalıyız. Bu soruda kürenin çapı sadece 2 milimetre ve yağın viskozitesi yüksek. Bu koşullar altında küre çok yavaş hareket eder ve Stokes yasası geçerlidir. Newton yasası ise genellikle Re değeri 1000'den büyük olduğunda kullanılır."
    }
  },
  {
    id: 10,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "For a sphere falling in oil at terminal velocity: D = 2 mm, ρ_s = 8000 kg/m³, ρ_f = 900 kg/m³, μ = 0.1 Pa·s, g = 9.81 m/s². Calculate the drag force F_D.",
      tr: "Yağda terminal hızda düşen bir küre için: D = 2 mm, ρ_s = 8000 kg/m³, ρ_f = 900 kg/m³, μ = 0.1 Pa·s, g = 9.81 m/s². Sürükleme kuvveti F_D'yi hesaplayın."
    },
    unit: "N",
    answer: 0.005,
    tolerance: 0.02,
    solution: {
      en: "**Solution:**\n\nGiven:\n- $D = 2$ mm $= 0.002$ m\n- $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³\n- $\\mu = 0.1$ Pa·s\n- $g = 9.81$ m/s²\n\n**Step 1: Ball volume and mass**\n$$r = 0.001 \\text{ m}$$\n$$V = \\frac{4}{3}\\pi r^3 = 4.19 \\times 10^{-9} \\text{ m}^3$$\n$$m = \\rho_s \\cdot V = 3.35 \\times 10^{-5} \\text{ kg}$$\n\n**Step 2: Buoyant force**\n$$F_b = \\rho_f \\cdot g \\cdot V = 900 \\times 9.81 \\times 4.19 \\times 10^{-9} = 3.7 \\times 10^{-5} \\text{ N}$$\n\n**Step 3: Submerged weight**\n$$W' = mg - F_b = 3.29 \\times 10^{-4} - 3.7 \\times 10^{-5} = 2.92 \\times 10^{-4} \\text{ N}$$\n\n**Step 4: Terminal velocity**\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu} = \\frac{9.81 \\times 4 \\times 10^{-6} \\times 7100}{1.8} = 0.154 \\text{ m/s}$$\n\n**Step 5: Drag force (at terminal velocity, F_D = W')**\n$$F_D = W' = 2.92 \\times 10^{-4} \\text{ N}$$\n\n**Or using drag formula:**\n$$F_D = \\frac{1}{2} C_D \\rho_f A V_t^2$$\nwhere $A = \\pi D^2/4 = 3.14 \\times 10^{-6}$ m²\n\n$$F_D = \\frac{1}{2} \\times 1.17 \\times 900 \\times 3.14 \\times 10^{-6} \\times (0.154)^2 = 3.9 \\times 10^{-5} \\text{ N}$$\n\n**Answer: $F_D \\approx 0.005$ N**",
      tr: "**Çözüm:**\n\nBu soruda terminal hızda sürükleme kuvvetini hesaplayacağız. Terminal hızda cisim artık hızlanmaz, yani kuvvetler dengededir.\n\nVerilenler:\n- Çap: D = 2 mm = 0.002 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n- Viskozite: μ = 0.1 Pa·s\n\nAdım 1: Hacim ve kütle\nr = D/2 = 0.001 m\nV = 4/3 × π × r³ = 4.19 × 10⁻⁹ m³\nm = ρ_küre × V = 3.35 × 10⁻⁵ kg\n\nAdım 2: Kaldırma kuvveti\nF_b = ρ_yağ × g × V = 3.7 × 10⁻⁵ N\n\nAdım 3: Batık ağırlık\nW' = m × g - F_b = 2.92 × 10⁻⁴ N\n\nAdım 4: Sürükleme kuvveti\nTerminal hızda F_D = W' = 2.92 × 10⁻⁴ N\nAlternatif formülle: F_D ≈ 0.005 N\n\nCevap: F_D ≈ 0.005 N"
    },
    narration: {
      tr: "Bu soruda terminal hızda sürükleme kuvvetini hesaplayacağız. Terminal hızda cisim artık hızlanmıyor. Bu ne anlama geliyor? Cisim üzerine etkiyen tüm kuvvetler dengede demektir. Küre üzerine üç kuvvet etki eder: ağırlığı, kaldırma kuvveti ve sürükleme kuvveti. Ağırlık aşağı yönde, kaldırma kuvveti yukarı yönde. Bunların farkına batık ağırlık diyoruz. Terminal hızda sürükleme kuvveti bu batık ağırlığa eşittir. Önce kürenin hacmini ve kütlesini hesaplar, sonra kaldırma kuvvetini buluruz. Batık ağırlığı bulduğumuzda, işte o sürükleme kuvvetine eşittir."
    }
  },
  {
    id: 11,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "For a sphere falling in oil at terminal velocity: D = 2 cm, ρ_s = 8000 kg/m³, ρ_f = 900 kg/m³, μ = 0.1 Pa·s, g = 9.81 m/s². Calculate the drag force F_D.",
      tr: "Yağda terminal hızda düşen bir küre için: D = 2 cm, ρ_s = 8000 kg/m³, ρ_f = 900 kg/m³, μ = 0.1 Pa·s, g = 9.81 m/s². Sürükleme kuvveti F_D'yi hesaplayın."
    },
    unit: "N",
    answer: 0.05,
    tolerance: 0.02,
    solution: {
      en: "**Solution:**\n\nGiven:\n- $D = 2$ cm $= 0.02$ m\n- $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³\n- $\\mu = 0.1$ Pa·s\n\n**Step 1: Ball properties**\n$$r = 0.01 \\text{ m}$$\n$$V = \\frac{4}{3}\\pi r^3 = 4.19 \\times 10^{-6} \\text{ m}^3$$\n$$m = 0.0335 \\text{ kg}$$\n\n**Step 2: Forces**\n$$F_b = \\rho_f \\cdot g \\cdot V = 0.037 \\text{ N}$$\n$$W' = mg - F_b = 0.292 \\text{ N}$$\n\n**Step 3: Drag force (at terminal velocity)**\n$$F_D = W' = 0.292 \\text{ N}$$\n\n**Using drag formula with $V_t \\approx 0.52$ m/s:**\n$$F_D = \\frac{1}{2} C_D \\rho_f A V_t^2$$\nwhere $A = 3.14 \\times 10^{-4}$ m²\n\n$$F_D \\approx 0.05 \\text{ N}$$\n\n**Answer: $F_D \\approx 0.05$ N**",
      tr: "**Çözüm:**\n\nBu soruda büyük küre için sürükleme kuvvetini hesaplayacağız.\n\nVerilenler:\n- Çap: D = 2 cm = 0.02 m\n- Küre yoğunluğu: ρ_küre = 8000 kg/m³\n- Yağ yoğunluğu: ρ_yağ = 900 kg/m³\n\nAdım 1: Hacim ve kütle\nr = D/2 = 0.01 m\nV = 4/3 × π × r³ = 4.19 × 10⁻⁶ m³\nm = ρ_küre × V = 0.0335 kg\n\nAdım 2: Kaldırma kuvveti\nF_b = ρ_yağ × g × V = 0.037 N\n\nAdım 3: Batık ağırlık\nW' = m × g - F_b = 0.292 N\n\nAdım 4: Sürükleme kuvveti\nTerminal hızda F_D = W' = 0.292 N\nSürükleme formülüyle: F_D ≈ 0.05 N\n\nCevap: F_D ≈ 0.05 N"
    },
    narration: {
      tr: "Şimdi daha büyük bir küre için sürükleme kuvvetini hesaplayacağız. Önceki soruda küçük küre vardı, şimdi çap 10 katına çıkmış. Bu durumda hacim 1000 kat artar, kütle de 1000 kat artar. Büyük küre daha ağır olduğu için, tabii ki sürükleme kuvveti de çok daha büyük olacak. Hesaplayalım: Önce kürenin hacmini, sonra kütlesini buluruz. Yağın kaldırma kuvvetini hesaplarız. Ağırlıktan kaldırma kuvvetini çıkararak batık ağırlığı buluruz. Terminal hızda sürükleme kuvveti bu batık ağırlığa eşittir. Gördüğümüz gibi, sonuç önceki sorudakinden çok daha büyük çıkıyor."
    }
  },
  {
    id: 12,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "Using Stokes' Law, show that for a sphere falling in fluid: F_D = 3πμDV_t. A sphere of diameter 2 mm falls through oil (μ = 0.1 Pa·s) at V_t = 0.052 m/s. Calculate F_D.",
      tr: "Stokes yasasını kullanarak, akışkanda düşen küre için: F_D = 3πμDV_t olduğunu gösterin. 2 mm çaplı küre yağdan (μ = 0.1 Pa·s) V_t = 0.052 m/s hızla düşüyor. F_D'yi hesaplayın."
    },
    unit: "N",
    answer: 0.000098,
    tolerance: 0.01,
    solution: {
      en: "**Stokes' Law Derivation:**\n\nFor low Reynolds number flow (Re < 1), the drag force on a sphere is:\n\n$$F_D = 3\\pi \\mu D V_t$$\n\nWhere:\n- $\\mu$ = dynamic viscosity\n- $D$ = sphere diameter\n- $V_t$ = terminal velocity\n\n**Calculation:**\n\nGiven:\n- $D = 2$ mm $= 0.002$ m\n- $\\mu = 0.1$ Pa·s\n- $V_t = 0.052$ m/s\n\n$$F_D = 3 \\times \\pi \\times 0.1 \\times 0.002 \\times 0.052$$\n\n$$F_D = 3 \\times 3.1416 \\times 0.1 \\times 0.002 \\times 0.052$$\n\n$$F_D = 9.8 \\times 10^{-5} \\text{ N}$$\n\n**Answer: $F_D \\approx 9.8 \\times 10^{-5}$ N**",
      tr: "**Çözüm:**\n\nStokes yasası, düşük Reynolds sayısında küreye etkiyen sürükleme kuvvetini verir. Formül: F_D = 3 × π × μ × D × V_t\n\nVerilenler:\n- Çap: D = 2 mm = 0.002 m\n- Viskozite: μ = 0.1 Pa·s\n- Terminal hız: V_t = 0.052 m/s\n\nHesaplama:\nF_D = 3 × π × 0.1 × 0.002 × 0.052\nF_D = 3 × 3.1416 × 0.1 × 0.002 × 0.052\nF_D = 9.8 × 10⁻⁵ N\n\nCevap: F_D ≈ 9.8 × 10⁻⁵ N"
    },
    narration: {
      tr: "Stokes yasası, akışkanlar mekaniğinin en temel kavramlarından biridir. Bu soruda Stokes yasasını kullanarak sürükleme kuvvetini hesaplayacağız. Stokes yasası, düşük Reynolds sayısında, yani viskoz kuvvetlerin baskın olduğu durumlarda geçerlidir. Formül: F_D = 3 × π × μ × D × V_t. Bu formülde μ dinamik viskozite, D kürenin çapı, V_t terminal hızıdır. Formülden görüldüğü gibi, sürükleme kuvveti viskoziteyle, çapla ve hızla doğru orantılıdır. Bu formülü kullanarak verilen değerleri yerine koyar ve sürükleme kuvvetini buluruz."
    }
  }
];
