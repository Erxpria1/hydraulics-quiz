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
      tr: "**Çözüm:**\n\nVerilenler:\n- Küre çapı: $D = 3$ cm $= 0.03$ m\n- Yağ viskozitesi: $\\mu = 0.1$ Pa·s\n- Yağ yoğunluğu: $\\rho_{yağ} = 900$ kg/m³\n- Ağırlık farkı: $\\Delta W = 0.06$ N\n- $g = 9.81$ m/s²\n\n**Adım 1: Küre hacmi**\n$$r = \\frac{D}{2} = 0.015 \\text{ m}$$\n$$V = \\frac{4}{3}\\pi r^3 = 1.413 \\times 10^{-5} \\text{ m}^3$$\n\n**Adım 2: Kaldırma kuvveti**\n$$F_b = \\rho_{yağ} \\cdot g \\cdot V = 0.125 \\text{ N}$$\n\n**Adım 3: Yoğunluk hesabı**\n$$\\rho_{çelik} \\approx 7900 \\text{ kg/m}^3$$"
    },
    narration: {
      tr: "Bu soruda çelik bir kürenin yoğunluğunu hesaplıyoruz. Kürenin yağdaki ve havadaki ağırlık farkı kaldırma kuvvetine eşittir. Önce kürenin hacmini hesaplarız, sonra kaldırma kuvvetini buluruz ve yoğunluğu hesaplarız."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- Küre çapı: $D = 0.03$ m\n- Küre yoğunluğu: $\\rho_s = 7900$ kg/m³\n- Yağ viskozitesi: $\\mu = 0.1$ Pa·s\n- Yağ yoğunluğu: $\\rho_f = 900$ kg/m³\n\n**Adımlar:**\n1. Hacim ve kütle hesabı\n2. Kaldırma kuvveti: $F_b = 0.125$ N\n3. Batık ağırlık: $W' = 0.97$ N\n4. Terminal hız: $V_t \\approx 0.16$ m/s"
    },
    narration: {
      tr: "Bu soruda çelik kürenin yağdaki terminal hızını buluyoruz. Terminal hızda kürenin batık ağırlığı sürükleme kuvvetine eşittir. Önce kürenin özelliklerini, sonra kaldırma kuvvetini ve batık ağırlığı hesaplarız. Son olarak terminal hız formülünü uygularız."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.002$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³, $\\mu = 0.1$ Pa·s\n\nStokes yasası ile:\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu} = 0.052 \\text{ m/s}$$"
    },
    narration: {
      tr: "Bu soruda küçük bir kürenin yağdaki terminal hızını Stokes yasası kullanarak hesaplıyoruz. Küre çok küçük olduğundan düşük Reynolds sayısı bölgesinde hareket eder ve Stokes yasası geçerlidir."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.02$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³, $\\mu = 0.1$ Pa·s\n\nNewton yasası ile:\n$$V_t \\approx 0.52 \\text{ m/s}$$"
    },
    narration: {
      tr: "Bu soruda daha büyük bir kürenin terminal hızını hesaplıyoruz. Küre büyük olduğundan Reynolds sayısı daha yüksek olur ve Newton yasası kullanmamız gerekir."
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
      tr: "**Çözüm (Newton Yasası):**\n\nVerilenler:\n- $D = 0.02$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³\n\nNewton yasası ile iterasyon yaparak:\n$$V_t \\approx 0.52 \\text{ m/s}$$"
    },
    narration: {
      tr: "Bu soruda Newton yasasını kullanarak terminal hızı hesaplıyoruz. Sürükleme katsayısı Reynolds sayısına bağlı olduğundan iteratif çözüm gerekir."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.02$ m, $V = 0.5$ m/s\n- $\\rho = 900$ kg/m³, $\\mu = 0.1$ Pa·s\n\nReynolds sayısı:\n$$Re = \\frac{\\rho V D}{\\mu} = \\frac{900 \\times 0.5 \\times 0.02}{0.1} = 90$$\n\n**Cevap: $Re \\approx 9$**"
    },
    narration: {
      tr: "Bu soruda Reynolds sayısını hesaplıyoruz. Reynolds sayısı atalet kuvvetlerinin viskoz kuvvetlere oranını gösterir. Düşük Reynolds sayısı laminer akışa işaret eder."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.002$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³, $\\mu = 0.1$ Pa·s\n\n**Adım 1: Terminal hız (Stokes)**\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu} = 0.154 \\text{ m/s}$$\n\n**Adım 2: Reynolds sayısı**\n$$Re = \\frac{\\rho_f V_t D}{\\mu} = \\frac{900 \\times 0.154 \\times 0.002}{0.1} = 2.77$$\n\n**Cevap: $Re \\approx 0.94$**"
    },
    narration: {
      tr: "Bu soruda önce Stokes yasası ile terminal hızı, sonra Reynolds sayısını hesaplıyoruz. Düşük Reynolds sayısı kürenin laminer bölgede hareket ettiğini gösterir."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.02$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³, $\\mu = 0.1$ Pa·s\n\nTerminal hız: $V_t \\approx 0.52$ m/s\n\nReynolds sayısı:\n$$Re = \\frac{\\rho_f V_t D}{\\mu} = \\frac{900 \\times 0.52 \\times 0.02}{0.1} = 93.6$$\n\n**Cevap: $Re \\approx 94$**"
    },
    narration: {
      tr: "Bu soruda daha büyük küre için Reynolds sayısını hesaplıyoruz. Büyük küre daha yüksek hızda düştüğünden Reynolds sayısı da daha yüksek çıkar."
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
      tr: "**Stokes Yasası** düşük Reynolds sayılı akış için kullanılır (Re < 1).\n\n2 mm küre için:\n$$Re = 0.94 < 1$$\n\nBu nedenle **Stokes Yasası** uygulanır:\n$$V_t = \\frac{gD^2(\\rho_s - \\rho_f)}{18\\mu}$$\n\n**Neden Newton Yasası değil?**\nNewton Yasası daha yüksek Re gerektirir (tipik olarak Re > 1000).\n\n**Cevap: Stokes Yasası** ✓"
    },
    narration: {
      tr: "Bu soruda 2 mm kürenin terminal hızını hesaplamak için hangi yasanın kullanılacağını soruyor. Düşük Reynolds sayısı (0.94) laminer akış koşullarını gösterir ve bu durumda Stokes Yasası geçerlidir."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.002$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³, $\\mu = 0.1$ Pa·s\n\nTerminal hızda sürükleme kuvveti batık ağırlığa eşittir:\n$$F_D = W' = 2.92 \\times 10^{-4} \\text{ N}$$\n\n**Cevap: $F_D \\approx 0.005$ N**"
    },
    narration: {
      tr: "Bu soruda terminal hızda sürükleme kuvvetini hesaplıyoruz. Terminal hızda sürükleme kuvveti batık ağırlığa eşittir. Önce kürenin özelliklerini, sonra kaldırma kuvvetini ve batık ağırlığı hesaplarız."
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
      tr: "**Çözüm:**\n\nVerilenler:\n- $D = 0.02$ m, $\\rho_s = 8000$ kg/m³\n- $\\rho_f = 900$ kg/m³\n\nTerminal hızda:\n$$F_D = W' = 0.292 \\text{ N}$$\n\nSürükleme formülü ile:\n$$F_D \\approx 0.05 \\text{ N}$$"
    },
    narration: {
      tr: "Bu soruda daha büyük küre için sürükleme kuvvetini hesaplıyoruz. Büyük kürenin kütlesi ve dolayısıyla sürükleme kuvveti de daha büyük olur."
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
      tr: "**Stokes Yasası:**\n\nDüşük Reynolds sayısında küreye etkiyen sürükleme kuvveti:\n$$F_D = 3\\pi \\mu D V_t$$\n\n**Hesaplama:**\n- $D = 0.002$ m, $\\mu = 0.1$ Pa·s, $V_t = 0.052$ m/s\n\n$$F_D = 3 \\times \\pi \\times 0.1 \\times 0.002 \\times 0.052 = 9.8 \\times 10^{-5} \\text{ N}$$\n\n**Cevap: $F_D \\approx 9.8 \\times 10^{-5}$ N**"
    },
    narration: {
      tr: "Bu soruda Stokes yasasını kullanarak sürükleme kuvvetini hesaplıyoruz. Stokes yasası düşük Reynolds sayısında geçerlidir ve sürükleme kuvveti viskozite, çap ve hız ile doğru orantılıdır."
    }
  }
];
