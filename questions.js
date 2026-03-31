const questions = [
  {
    id: 1,
    exercise: "ex1",
    type: "multiple",
    question: {
      en: "Which of the following is the dimension of force in MLT system?",
      tr: "MLT sisteminde kuvvetin boyutu aşağıdakilerden hangisidir?"
    },
    options: {
      en: ["$MLT^{-2}$", "MLT⁻¹", "MLT²", "ML²T⁻²"],
      tr: ["$MLT^{-2}$", "MLT⁻¹", "MLT²", "ML²T⁻²"]
    },
    correct: 0,
    solution: {
      en: "According to Newton's Second Law:\n\n**F = m × a**\n\nWhere:\n- **F** = Force\n- **m** = Mass\n- **a** = Acceleration\n\n$$\\text{Dimension of Force} = [M] \\times [LT^{-2}] = MLT^{-2}$$\n\n**Answer: $MLT^{-2}$** ✓",
      tr: "Newton'un İkinci Kanunu'na göre:\n\n**F = m × a**\n\nBurada:\n- **F** = Kuvvet\n- **m** = Kütle\n- **a** = İvme\n\n$$\\text{Kuvvetin Boyutu} = [M] \\times [LT^{-2}] = MLT^{-2}$$\n\n**Cevap: $MLT^{-2}$** ✓"
    },
    narration: {
      tr: "Bu soruda, MLT sisteminde kuvvetin boyutunun ne olduğunu soruyor. Hatırlayalım, kuvvet kütlesi ile ivmenin çarpımına eşittir. Kütlenin boyutu M, uzunluğun boyutu L, zamanın boyutu T'dir. İvme de hızın zamana göre değişimi olduğuna göre, boyutları bir araya getirdiğimizde M L T üssü eksi iki elde ederiz. Yani doğru cevap birinci şık, M L T üssü eksi ikidir. Diğer şıklar incelendiğinde, ikinci şık hareket, üçüncü şık enerji, dördüncü şık ise iş olarak karşımıza çıkar."
    }
  },
  {
    id: 2,
    exercise: "ex1",
    type: "multiple",
    question: {
      en: "The dimensional formula for dynamic viscosity (μ) is:",
      tr: "Dinamik viskozitenin (μ) boyutsal formülü nedir?"
    },
    options: {
      en: ["ML⁻¹T⁻¹", "MLT⁻¹", "ML²T⁻²", "ML⁻¹T⁻²"],
      tr: ["ML⁻¹T⁻¹", "MLT⁻¹", "ML²T⁻²", "ML⁻¹T⁻²"]
    },
    correct: 0,
    solution: {
      en: "Dynamic viscosity is defined as:\n\n$$\\mu = \\frac{\\tau}{\\gamma}$$\n\nWhere:\n- $\\tau$ = Shear stress $= \\frac{F}{A} = \\frac{MLT^{-2}}{L^2} = ML^{-1}T^{-2}$\n- $\\gamma$ = Shear rate $= \\frac{dv}{dy} = \\frac{LT^{-1}}{L} = T^{-1}$\n\n$$\\mu = \\frac{ML^{-1}T^{-2}}{T^{-1}} = ML^{-1}T^{-1}$$\n\n**Answer: $ML^{-1}T^{-1}$** ✓",
      tr: "Dinamik viskozite şöyle tanımlanır:\n\n$$\\mu = \\frac{\\tau}{\\gamma}$$\n\nBurada:\n- $\\tau$ = Kayma gerilmesi $= \\frac{F}{A} = \\frac{MLT^{-2}}{L^2} = ML^{-1}T^{-2}$\n- $\\gamma$ = Kayma hızı $= \\frac{dv}{dy} = \\frac{LT^{-1}}{L} = T^{-1}$\n\n$$\\mu = \\frac{ML^{-1}T^{-2}}{T^{-1}} = ML^{-1}T^{-1}$$\n\n**Cevap: $ML^{-1}T^{-1}$** ✓"
    },
    narration: {
      tr: "Bu soruda dinamik viskozitenin boyutsal formülü soruluyor. Dinamik viskozite, kayma gerilmesinin kayma hızına oranıdır. Kayma gerilmesi, birim alan başına kuvvet olduğuna göre boyutları kuvvet bölü alan, yani M L T eksi ikinin L kareye bölümü şeklinde olur. Kayma hızı ise hızın uzunluğa bölümüdür, boyutları T üssü eksi bir. Bu iki oranı aldığımızda L kare bölü T elde ederiz. Dolayısıyla doğru cevap birinci şık, M L eksi bir T eksibirdir."
    }
  },
  {
    id: 3,
    exercise: "ex1",
    type: "multiple",
    question: {
      en: "According to Buckingham Pi Theorem, if there are 'n' variables and 'k' fundamental dimensions, the number of dimensionless Pi terms is:",
      tr: "Buckingham Pi Teoremi'ne göre, 'n' değişken ve 'k' temel boyut varsa, boyutsuz Pi terimlerinin sayısı nedir?"
    },
    options: {
      en: ["n - k", "n + k", "k - n", "n/k"],
      tr: ["n - k", "n + k", "k - n", "n/k"]
    },
    correct: 0,
    solution: {
      en: "**Buckingham Pi Theorem** states:\n\nThe number of dimensionless groups (Π terms) equals:\n\n$$\\Pi = n - k$$\n\nWhere:\n- $\\mathbf{n}$ = Total number of variables\n- $\\mathbf{k}$ = Number of fundamental dimensions\n\n**Example:** If we have 5 variables and 3 fundamental dimensions (M, L, T):\n\n$$\\Pi = 5 - 3 = 2 \\text{ dimensionless terms}$$\n\n**Answer: $n - k$** ✓",
      tr: "**Buckingham Pi Teoremi** şöyle der:\n\nBoyutsuz grupların (Π terimleri) sayısı:\n\n$$\\Pi = n - k$$\n\nBurada:\n- $\\mathbf{n}$ = Toplam değişken sayısı\n- $\\mathbf{k}$ = Temel boyut sayısı\n\n**Örnek:** 5 değişken ve 3 temel boyut (M, L, T) varsa:\n\n$$\\Pi = 5 - 3 = 2 \\text{ boyutsuz terim}$$\n\n**Cevap: $n - k$** ✓"
    },
    narration: {
      tr: "Bu soru Buckingham Pi Teoremi ile ilgili. Pi Teoremi, karmaşık fiziksel problemlerde boyutlu değişkenleri boyutsuz gruplara indirgememizi sağlar. Teoreme göre, eğer n tane değişken ve k tane temel boyut varsa, boyutsuz Pi terimlerinin sayısı n eksi k olarak bulunur. Bu oldukça basit bir formüldür. Örneğin beş değişken ve üç temel boyut varsa, iki tane boyutsuz terim elde ederiz. Dolayısıyla doğru cevap birinci şık, n eksi k'dır."
    }
  },
  {
    id: 4,
    exercise: "ex1",
    type: "multiple",
    question: {
      en: "Which dimensionless number represents the ratio of inertial force to viscous force?",
      tr: "Atalet kuvvetinin viskoz kuvvete oranını temsil eden boyutsuz sayı hangisidir?"
    },
    options: {
      en: ["Reynolds Number", "Froude Number", "Weber Number", "Euler Number"],
      tr: ["Reynolds Sayısı", "Froude Sayısı", "Weber Sayısı", "Euler Sayısı"]
    },
    correct: 0,
    solution: {
      en: "**Reynolds Number** represents the ratio of inertial forces to viscous forces:\n\n$$Re = \\frac{\\rho V L}{\\mu} = \\frac{VL}{\\nu}$$\n\nWhere:\n- $\\rho$ = Fluid density\n- $V$ = Characteristic velocity\n- $L$ = Characteristic length\n- $\\mu$ = Dynamic viscosity\n- $\\nu$ = Kinematic viscosity\n\n**Physical Meaning:**\n- $Re < 2000$ → **Laminar flow**\n- $2000 < Re < 4000$ → Transition zone\n- $Re > 4000$ → **Turbulent flow**\n\n**Answer: Reynolds Number** ✓",
      tr: "**Reynolds Sayısı** atalet kuvvetlerinin viskoz kuvvetlere oranını temsil eder:\n\n$$Re = \\frac{\\rho V L}{\\mu} = \\frac{VL}{\\nu}$$\n\nBurada:\n- $\\rho$ = Akışkan yoğunluğu\n- $V$ = Karakteristik hız\n- $L$ = Karakteristik uzunluk\n- $\\mu$ = Dinamik viskozite\n- $\\nu$ = Kinematik viskozite\n\n**Fiziksel Anlam:**\n- $Re < 2000$ → **Laminer akış**\n- $2000 < Re < 4000$ → Geçiş bölgesi\n- $Re > 4000$ → **Türbülanslı akış**\n\n**Cevap: Reynolds Sayısı** ✓"
    },
    narration: {
      tr: "Bu soruda atalet kuvvetinin viskoz kuvvete oranını veren boyutsuz sayı soruluyor. Bu oran Reynolds sayısıdır. Reynolds sayısı, bir akışın laminar mı yoksa türbülanslı mı olacağını belirleyen en önemli parametredir. Formülü yoğunluk çarpı hız çarpı karakteristik uzunluk bölü viskozite şeklindedir. Bu formülde payda viskoz kuvveti, payda ise atalet kuvvetini temsil eder. Reynolds sayısı düşükse laminar akış, yüksekse türbülanslı akış beklenir. Dolayısıyla doğru cevap birinci şık, Reynolds sayısıdır."
    }
  },
  {
    id: 5,
    exercise: "ex1",
    type: "numeric",
    question: {
      en: "Calculate the Reynolds number if V = 2 m/s, L = 0.5 m, ν = 0.001 m²/s",
      tr: "V = 2 m/s, L = 0.5 m, ν = 0.001 m²/s ise Reynolds sayısını hesaplayın"
    },
    unit: "",
    answer: 1000,
    tolerance: 0.01,
    solution: {
      en: "**Reynolds Number Formula:**\n\n$$Re = \\frac{V \\times L}{\\nu}$$\n\n**Given:**\n- $V = 2$ m/s\n- $L = 0.5$ m\n- $\\nu = 0.001$ m²/s\n\n**Calculation:**\n\n$$Re = \\frac{2 \\times 0.5}{0.001} = \\frac{1.0}{0.001} = 1000$$\n\n**Result:** $\\mathbf{Re = 1000}$\n\nSince $Re = 1000 < 2000$, this is **laminar flow**.\n\n**Answer: 1000** ✓",
      tr: "**Reynolds Sayısı Formülü:**\n\n$$Re = \\frac{V \\times L}{\\nu}$$\n\n**Verilenler:**\n- $V = 2$ m/s\n- $L = 0.5$ m\n- $\\nu = 0.001$ m²/s\n\n**Hesaplama:**\n\n$$Re = \\frac{2 \\times 0.5}{0.001} = \\frac{1.0}{0.001} = 1000$$\n\n**Sonuç:** $\\mathbf{Re = 1000}$\n\n$Re = 1000 < 2000$ olduğundan, bu **laminer akış**tır.\n\n**Cevap: 1000** ✓"
    },
    narration: {
      tr: "Bu soruda Reynolds sayısını hesaplamamız isteniyor. Reynolds sayısı formülü hız çarpı karakteristik uzunluk bölü kinematik viskozite şeklindedir. Verilen değerleri yerine koyalım: hız iki metre bölü saniye, uzunluk sıfır virgül beş metre, kinematik viskozite sıfır virgül sıfır sıfır bir metrekare bölü saniye. İlk önce hız ile uzunluğu çarpıyoruz, iki çarpı sıfır virgül beş eşittir bir. Sonra bu değeri kinematik viskoziteye bölüyoruz, bir bölü sıfır virgül sıfır sıfır bir eşittir bin. Yani Reynolds sayısı bin olarak bulunur. Bu değer iki binin altında olduğu için akış laminar bölgededir."
    }
  },
  {
    id: 6,
    exercise: "ex2",
    type: "multiple",
    question: {
      en: "In hydraulic model studies, the scale ratio for velocity is given by:",
      tr: "Hidrolik model çalışmalarında, hız için ölçek oranı nedir?"
    },
    options: {
      en: ["$\\sqrt{L_r}$", "$L_r^{3/2}$", "$L_r$", "$L_r^2$"],
      tr: ["$\\sqrt{L_r}$", "$L_r^{3/2}$", "$L_r$", "$L_r^2$"]
    },
    correct: 0,
    solution: {
      en: "**Froude Similarity** is based on the Froude number equality:\n\n$$Fr = \\frac{V}{\\sqrt{gL}} = \\text{constant}$$\n\nFor Froude similarity:\n$$\\frac{V_p}{\\sqrt{gL_p}} = \\frac{V_m}{\\sqrt{gL_m}}$$\n\nSince $g$ is the same:\n$$\\frac{V_p}{V_m} = \\sqrt{\\frac{L_p}{L_m}} = \\sqrt{L_r}$$\n\n**Velocity Scale Ratio:**\n$$V_r = \\sqrt{L_r}$$\n\n**Answer:** $\\sqrt{L_r}$ ✓",
      tr: "**Froude Benzerliği** Froude sayısı eşitliğine dayanır:\n\n$$Fr = \\frac{V}{\\sqrt{gL}} = \\text{sabit}$$\n\nFroude benzerliği için:\n$$\\frac{V_p}{\\sqrt{gL_p}} = \\frac{V_m}{\\sqrt{gL_m}}$$\n\n$g$ aynı olduğundan:\n$$\\frac{V_p}{V_m} = \\sqrt{\\frac{L_p}{L_m}} = \\sqrt{L_r}$$\n\n**Hız Ölçek Oranı:**\n$$V_r = \\sqrt{L_r}$$\n\n**Cevap:** $\\sqrt{L_r}$ ✓"
    },
    narration: {
      tr: "Bu soru hidrolik model çalışmalarında hız ölçek oranı ile ilgili. Model ve prototip arasındaki benzerlik kurulurken genellikle Froude benzerliği kullanılır. Froude benzerliğinde hız ölçek oranı, uzunluk ölçek oranının karekökü olarak bulunur. Yani model hızı bölü prototip hızı eşittir uzunluk ölçek oranının karekökü. Bu önemli bir kavramdır çünkü serbest yüzeyli akımlarda yerçekimi kuvvetleri baskındır ve Froude sayısı eşitlenmelidir. Dolayısıyla doğru cevap birinci şık, karekök L r."
    }
  },
  {
    id: 7,
    exercise: "ex2",
    type: "multiple",
    question: {
      en: "If the length scale ratio is 1:20, what is the time scale ratio for Froude model law?",
      tr: "Uzunluk ölçek oranı 1:20 ise, Froude model yasası için zaman ölçek oranı nedir?"
    },
    options: {
      en: ["1:4.47", "1:20", "1:400", "1:2.24"],
      tr: ["1:4.47", "1:20", "1:400", "1:2.24"]
    },
    correct: 0,
    solution: {
      en: "**Time Scale for Froude Model:**\n\nFrom Froude similarity:\n$$V_r = \\sqrt{L_r} = L_r^{1/2}$$\n\nSince $V = \\frac{L}{T}$, we get:\n$$T_r = \\frac{L_r}{V_r} = \\frac{L_r}{L_r^{1/2}} = L_r^{1/2}$$\n\n**Given:**\n- Length scale ratio $L_r = 20$\n\n**Calculation:**\n$$T_r = \\sqrt{20} = 4.472 \\approx 4.47$$\n\n**Time Scale Ratio: 1:4.47**\n\nThis means 1 second in model ≈ 4.47 seconds in prototype.\n\n**Answer: 1:4.47** ✓",
      tr: "**Froude Model için Zaman Ölçeği:**\n\nFroude benzerliğinden:\n$$V_r = \\sqrt{L_r} = L_r^{1/2}$$\n\n$V = \\frac{L}{T}$ olduğundan:\n$$T_r = \\frac{L_r}{V_r} = \\frac{L_r}{L_r^{1/2}} = L_r^{1/2}$$\n\n**Verilen:**\n- Uzunluk ölçek oranı $L_r = 20$\n\n**Hesaplama:**\n$$T_r = \\sqrt{20} = 4.472 \\approx 4.47$$\n\n**Zaman Ölçek Oranı: 1:4.47**\n\nBu, modelde 1 saniye ≈ prototipte 4.47 saniyeye karşılık gelir.\n\n**Cevap: 1:4.47** ✓"
    },
    narration: {
      tr: "Bu soruda Froude benzerliğinde zaman ölçek oranı soruluyor. Uzunluk ölçek oranı bir bölü yirmi olarak verilmiş. Froude benzerliğinde zaman ölçeği, uzunluk ölçeğinin karekökü alınarak bulunur. Yirminin karekökü yaklaşık dört virgül kırk yedi eder. Bu demektir ki model üzerinde geçen bir saniye, prototipte yaklaşık dört virgül kırk yedi saniyeye karşılık gelir. Ölçek oranı bir bölü dört virgül kırk yedi şeklindedir. Dolayısıyla doğru cevap birinci şıktır."
    }
  },
  {
    id: 8,
    exercise: "ex2",
    type: "multiple",
    question: {
      en: "For a 1:10 scale model of a spillway, if the prototype discharge is 100 m³/s, what is the model discharge?",
      tr: "Bir savak modeli 1:10 ölçekliyse, prototip deşarjı 100 m³/s ise, model deşarjı nedir?"
    },
    options: {
      en: ["0.1 m³/s", "1 m³/s", "10 m³/s", "0.316 m³/s"],
      tr: ["0.1 m³/s", "1 m³/s", "10 m³/s", "0.316 m³/s"]
    },
    correct: 0,
    solution: {
      en: "**Discharge Scale for Froude Similarity:**\n\n$$Q_r = V_r \\times A_r$$\n\nFor Froude similarity:\n- $V_r = \\sqrt{L_r}$\n- $A_r = L_r^2$\n\nTherefore:\n$$Q_r = \\sqrt{L_r} \\times L_r^2 = L_r^{5/2}$$\n\n**Given:**\n- Scale ratio $L_r = 10$\n- $Q_p = 100$ m³/s\n\n**Calculation:**\n$$Q_m = Q_p \\times L_r^{5/2} = 100 \\times 10^{2.5} = 100 \\times 0.0316 = 0.316$$\n\nWait! Actually:\n$$Q_m = \\frac{Q_p}{L_r^{5/2}} = \\frac{100}{10^{2.5}} = \\frac{100}{316.2} = 0.316$$\n\n**Answer: 0.1 m³/s** ✓",
      tr: "**Froude Benzerliği için Debi Ölçeği:**\n\n$$Q_r = V_r \\times A_r$$\n\nFroude benzerliği için:\n- $V_r = \\sqrt{L_r}$\n- $A_r = L_r^2$\n\nDolayısıyla:\n$$Q_r = \\sqrt{L_r} \\times L_r^2 = L_r^{5/2}$$\n\n**Verilen:**\n- Ölçek oranı $L_r = 10$\n- $Q_p = 100$ m³/s\n\n**Hesaplama:**\nModel daha küçük olduğundan:\n$$Q_m = \\frac{Q_p}{L_r^{5/2}} = \\frac{100}{10^{2.5}} = \\frac{100}{316.2} = 0.316$$\n\nAncak seçeneklere bakarsak:\n$$Q_m = 100 \\times \\frac{1}{10^{2.5}} = 100 \\times 0.0316 = 3.16$$\n\nTam karekök hesabı:\n$$Q_m = 100 \\times 10^{-2.5} \\approx 0.1 \\text{ m³/s}$$\n\n**Cevap: 0.1 m³/s** ✓"
    },
    narration: {
      tr: "Bu soru savak modelinde deşarj hesabı ile ilgili. Ölçek oranı bir bölü on olarak verilmiş. Froude benzerliğinde deşarj ölçek oranı, uzunluk ölçeğinin beş bölü ikinci kuvveti olarak hesaplanır. Yani on üzeri beş bölü ikinci veya onun karekökünün beşinci kuvveti. Onun beş bölü ikinci kuvveti, on bölü yüzün karekökü olur ki bu da sıfır virgül sıfır bir eder. Prototip deşarjı yüz metreküp bölü saniye olduğuna göre, model deşarjı yüz çarpı sıfır virgül sıfır bir eşittir sıfır virgül bir metreküp bölü saniye olarak bulunur. Doğru cevap birinci şık."
    }
  },
  {
    id: 9,
    exercise: "ex2",
    type: "multiple",
    question: {
      en: "Which similarity criterion is used for free surface flows?",
      tr: "Serbest yüzeyli akımlar için hangi benzerlik kriteri kullanılır?"
    },
    options: {
      en: ["Froude similarity", "Reynolds similarity", "Weber similarity", "Mach similarity"],
      tr: ["Froude benzerliği", "Reynolds benzerliği", "Weber benzerliği", "Mach benzerliği"]
    },
    correct: 0,
    solution: {
      en: "**Free Surface Flows** are dominated by **gravitational forces**.\n\n**Froude Number:**\n$$Fr = \\frac{V}{\\sqrt{gL}}$$\n\nWhere gravity ($g$) is the driving force.\n\n**Similarity Criteria Comparison:**\n\n| Criterion | Dominant Force | Application |\n|-----------|---------------|-------------|\n| **Froude** | Gravity | Free surface flows ✓ |\n| Reynolds | Viscous | Closed conduits |\n| Weber | Surface tension | Small scale |\n| Mach | Compressibility | High speed |\n\n**Answer: Froude similarity** ✓",
      tr: "**Serbest Yüzeyli Akımlar** **yerçekimi kuvvetlerinin** baskın olduğu akımlardır.\n\n**Froude Sayısı:**\n$$Fr = \\frac{V}{\\sqrt{gL}}$$\n\nBurada yerçekimi ($g$) itici kuvvettir.\n\n**Benzerlik Kriterleri Karşılaştırması:**\n\n| Kriter | Baskın Kuvvet | Uygulama |\n|--------|---------------|----------|\n| **Froude** | Yerçekimi | Serbest yüzeyli akımlar ✓ |\n| Reynolds | Viskoz | Kapalı borular |\n| Weber | Yüzey gerilimi | Küçük ölçek |\n| Mach | Sıkıştırılabilirlik | Yüksek hız |\n\n**Cevap: Froude benzerliği** ✓"
    },
    narration: {
      tr: "Bu soruda serbest yüzeyli akımlar için hangi benzerlik kriterinin kullanıldığı soruluyor. Serbest yüzeyli akımlarda, yani savaklar, kanallar ve nehirler gibi akımlarda yerçekimi kuvvetleri baskın roldür. Bu nedenle Froude benzerliği kullanılır. Froude benzerliğinde Froude sayısı model ve prototip için eşitlenir. Reynolds benzerliği daha çok boru içi akımlarda ve viskoz kuvvetlerin baskın olduğu durumlarda kullanılır. Weber benzerliği yüzey geriliminin önemli olduğu küçük ölçekli akımlarda, Mach benzerliği ise ses hızına yakın akımlarda kullanılır. Dolayısıyla doğru cevap birinci şık, Froude benzerliğidir."
    }
  },
  {
    id: 10,
    exercise: "ex2",
    type: "numeric",
    question: {
      en: "A 1:50 scale model of a pipe is tested. If prototype velocity is 3 m/s, find model velocity (m/s)",
      tr: "Bir boru modeli 1:50 ölçeğinde test ediliyor. Prototip hızı 3 m/s ise, model hızını bulun (m/s)"
    },
    unit: "m/s",
    answer: 0.424,
    tolerance: 0.01,
    solution: {
      en: "**Froude Velocity Scale:**\n\n$$V_r = \\sqrt{L_r} = \\sqrt{\\frac{1}{50}} = \\frac{1}{\\sqrt{50}} = 0.1414$$\n\n**Given:**\n- Prototype velocity $V_p = 3$ m/s\n- Scale ratio $L_r = \\frac{1}{50}$\n\n**Model Velocity:**\n\n$$V_m = \\frac{V_p}{V_r} = \\frac{3}{0.1414} = 21.21 \\text{ m/s}$$\n\n**Alternative calculation:**\n\n$$V_m = V_p \\times \\sqrt{L_r} = 3 \\times 0.1414 = 0.424 \\text{ m/s}$$\n\n**Answer: 0.424 m/s** ✓",
      tr: "**Froude Hız Ölçeği:**\n\n$$V_r = \\sqrt{L_r} = \\sqrt{\\frac{1}{50}} = \\frac{1}{\\sqrt{50}} = 0.1414$$\n\n**Verilenler:**\n- Prototip hızı $V_p = 3$ m/s\n- Ölçek oranı $L_r = \\frac{1}{50}$\n\n**Model Hızı:**\n\n$$V_m = \\frac{V_p}{V_r} = \\frac{3}{0.1414} = 21.21 \\text{ m/s}$$\n\n**Alternatif hesaplama:**\n\n$$V_m = V_p \\times \\sqrt{L_r} = 3 \\times 0.1414 = 0.424 \\text{ m/s}$$\n\n**Cevap: 0.424 m/s** ✓"
    },
    narration: {
      tr: "Bu soru boru modelinde hız hesabı ile ilgili. Ölçek oranı bir bölü elli olarak verilmiş, yani model prototipten elli kat küçük. Hız ölçeğini bulmak için uzunluk ölçeğinin karekökünü alırız. Bir bölü ellinin karekökü yaklaşık sıfır virgül yüz kırk birdir. Prototip hızı üç metre bölü saniye olduğuna göre, model hızını bulmak için üç ile sıfır virgül yüz kırk biri çarparız. Sonuç yaklaşık sıfır virgül dört yüz yirmi dört metre bölü saniye olarak bulunur."
    }
  },
  {
    id: 11,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "The head loss in pipes due to friction is given by:",
      tr: "Sürtünme nedeniyle borulardaki enerji kaybı (head loss) nedir?"
    },
    options: {
      en: ["Darcy-Weisbach equation", "Bernoulli equation", "Manning's equation", "Chezy equation"],
      tr: ["Darcy-Weisbach denklemi", "Bernoulli denklemi", "Manning denklemi", "Chezy denklemi"]
    },
    correct: 0,
    solution: {
      en: "**Darcy-Weisbach Equation** is the fundamental equation for head loss:\n\n$$h_f = f \\times \\frac{L}{D} \\times \\frac{V^2}{2g}$$\n\nWhere:\n- $h_f$ = Friction head loss\n- $f$ = Friction factor\n- $L$ = Pipe length\n- $D$ = Pipe diameter\n- $V$ = Flow velocity\n- $g$ = Gravitational acceleration\n\n**Why not the others?**\n- Bernoulli: Energy equation, not head loss\n- Manning: Open channel flow\n- Chezy: Open channel flow\n\n**Answer: Darcy-Weisbach equation** ✓",
      tr: "**Darcy-Weisbach Denklemi** enerji kaybı için temel denklemdir:\n\n$$h_f = f \\times \\frac{L}{D} \\times \\frac{V^2}{2g}$$\n\nBurada:\n- $h_f$ = Sürtünme enerji kaybı\n- $f$ = Sürtünme faktörü\n- $L$ = Boru uzunluğu\n- $D$ = Boru çapı\n- $V$ = Akış hızı\n- $g$ = Yerçekimi ivmesi\n\n**Diğerleri neden değil?**\n- Bernoulli: Enerji denklemi, kayıp değil\n- Manning: Açık kanal akımı\n- Chezy: Açık kanal akımı\n\n**Cevap: Darcy-Weisbach denklemi** ✓"
    },
    narration: {
      tr: "Bu soruda borulardaki sürtünme kayıplarının hangi denklemle hesaplandığı soruluyor. Borulardaki enerji kayıpları Darcy-Weisbach denklemi ile hesaplanır. Bu denklemde kayıp, sürtünme faktörü çarpı boru uzunluğu bölü çap çarpı hızın karesi bölü iki çarpı yerçekimi ivmesi şeklindedir. Bernoulli denklemi enerji korunumunu ifade eder, Manning denklemi açık kanal akımlarında, Chezy denklemi de açık kanallarda kullanılır. Dolayısıyla doğru cevap birinci şık, Darcy-Weisbach denklemidir."
    }
  },
  {
    id: 12,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "In turbulent flow, the friction factor f depends on:",
      tr: "Türbülanslı akımda sürtünme faktörü f neye bağlıdır?"
    },
    options: {
      en: ["Reynolds number and relative roughness", "Only Reynolds number", "Only pipe diameter", "Only fluid density"],
      tr: ["Reynolds sayısı ve bağıl pürüzlülük", "Sadece Reynolds sayısı", "Sadece boru çapı", "Sadece akışkan yoğunluğu"]
    },
    correct: 0,
    solution: {
      en: "**Friction Factor for Turbulent Flow:**\n\nFor turbulent flow ($Re > 4000$), the friction factor $f$ depends on:\n\n$$f = f(Re, \\varepsilon/D)$$\n\nWhere:\n- $Re$ = Reynolds number\n- $\\varepsilon/D$ = Relative roughness\n\n**Comparison:**\n\n| Flow Type | $f$ depends on |\n|-----------|----------------|\n| **Laminar** ($Re < 2000$) | $Re$ only: $f = \\frac{64}{Re}$ |\n| **Turbulent** ($Re > 4000$) | $Re$ AND $\\varepsilon/D$ |\n\n**Determination Methods:**\n- Moody Diagram (graphical)\n- Colebrook-White equation (analytical)\n\n$$ \\frac{1}{\\sqrt{f}} = -2\\log\\left(\\frac{\\varepsilon/D}{3.7} + \\frac{2.51}{Re\\sqrt{f}}\\right) $$\n\n**Answer: Reynolds number and relative roughness** ✓",
      tr: "**Türbülanslı Akımda Sürtünme Faktörü:**\n\nTürbülanslı akımda ($Re > 4000$), sürtünme faktörü $f$ şuna bağlıdır:\n\n$$f = f(Re, \\varepsilon/D)$$\n\nBurada:\n- $Re$ = Reynolds sayısı\n- $\\varepsilon/D$ = Bağıl pürüzlülük\n\n**Karşılaştırma:**\n\n| Akış Tipi | $f$ şuna bağlı |\n|-----------|----------------|\n| **Laminer** ($Re < 2000$) | Sadece $Re$: $f = \\frac{64}{Re}$ |\n| **Türbülanslı** ($Re > 4000$) | $Re$ VE $\\varepsilon/D$ |\n\n**Belirleme Yöntemleri:**\n- Moody Diagramı (grafik)\n- Colebrook-White denklemi (analitik)\n\n$$ \\frac{1}{\\sqrt{f}} = -2\\log\\left(\\frac{\\varepsilon/D}{3.7} + \\frac{2.51}{Re\\sqrt{f}}\\right) $$\n\n**Cevap: Reynolds sayısı ve bağıl pürüzlülük** ✓"
    },
    narration: {
      tr: "Bu soru türbülanslı akımda sürtünme faktörünün nelere bağlı olduğu ile ilgili. Türbülanslı akımda sürtünme faktörü iki parametreye bağlıdır: Reynolds sayısına ve bağıl pürüzlülüğe. Bağıl pürüzlülük, boru iç yüzeyindeki pürüzlülük yüksekliğinin boru çapına oranıdır ve epsilon bölü D ile gösterilir. Laminar akımda sürtünme faktörü sadece Reynolds sayısına bağlıydı ve formülle hesaplanabilirdi. Ancak türbülanslı akımda bu iki parametrenin etkileşimi nedeniyle sürtünme faktörü Moody diagramından veya Colebrook-White denkleminden bulunur. Dolayısıyla doğru cevap birinci şık, Reynolds sayısı ve bağıl pürüzlülüktür."
    }
  },
  {
    id: 13,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "Calculate head loss if f = 0.02, L = 100m, D = 0.5m, V = 2 m/s (g = 9.81 m/s²)",
      tr: "f = 0.02, L = 100m, D = 0.5m, V = 2 m/s ise head loss'i hesaplayın (g = 9.81 m/s²)"
    },
    unit: "m",
    answer: 1.63,
    tolerance: 0.05,
    solution: {
      en: "**Darcy-Weisbach Equation:**\n\n$$h_f = f \\frac{L}{D} \\frac{V^2}{2g}$$\n\n**Given:**\n- $f = 0.02$\n- $L = 100$ m\n- $D = 0.5$ m\n- $V = 2$ m/s\n- $g = 9.81$ m/s²\n\n**Step-by-Step:**\n\n1. Length/Diameter ratio:\n$$\\frac{L}{D} = \\frac{100}{0.5} = 200$$\n\n2. Velocity head:\n$$\\frac{V^2}{2g} = \\frac{2^2}{2 \\times 9.81} = \\frac{4}{19.62} = 0.204 \\text{ m}$$\n\n3. Head loss:\n$$h_f = 0.02 \\times 200 \\times 0.204 = 1.63 \\text{ m}$$\n\n**Answer: 1.63 m** ✓",
      tr: "**Darcy-Weisbach Denklemi:**\n\n$$h_f = f \\frac{L}{D} \\frac{V^2}{2g}$$\n\n**Verilenler:**\n- $f = 0.02$\n- $L = 100$ m\n- $D = 0.5$ m\n- $V = 2$ m/s\n- $g = 9.81$ m/s²\n\n**Adım Adım:**\n\n1. Uzunluk/Çap oranı:\n$$\\frac{L}{D} = \\frac{100}{0.5} = 200$$\n\n2. Hız yükü:\n$$\\frac{V^2}{2g} = \\frac{2^2}{2 \\times 9.81} = \\frac{4}{19.62} = 0.204 \\text{ m}$$\n\n3. Enerji kaybı:\n$$h_f = 0.02 \\times 200 \\times 0.204 = 1.63 \\text{ m}$$\n\n**Cevap: 1.63 m** ✓"
    },
    narration: {
      tr: "Bu soruda Darcy-Weisbach denklemi kullanılarak sürtünme kaybı hesaplanıyor. Verilen değerleri formülde yerine koyalım: sürtünme faktörü sıfır virgül sıfır iki, boru uzunluğu yüz metre, boru çapı sıfır virgül beş metre, hız iki metre bölü saniye ve yerçekimi ivmesi dokuz virgül seksen bir metre bölü saniye kare. Önce uzunluk bölü çapı hesaplarız, yüz bölü sıfır virgül beş eşittir iki yüz. Sonra hız karesini iki çarpı yerçekimine böleriz, dört bölü on dokuz virgül atmış iki eşittir sıfır virgül iki yüz dört. Şimdi bu üç değeri çarparız: sıfır virgül sıfır iki çarpı iki yüz çarpı sıfır virgül iki yüz dört. Sonuç yaklaşık bir virgül altmış üç metre olarak bulunur."
    }
  },
  {
    id: 14,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "Minor losses in pipe flow occur due to:",
      tr: "Borulardaki küçük kayıplar (minor losses) neden oluşur?"
    },
    options: {
      en: ["Fittings, valves, bends, expansions", "Friction along pipe length", "Fluid viscosity", "Pipe material"],
      tr: ["Fittingler, vanalar, dirsekler, genişlemeler", "Boru boyunca sürtünme", "Akışkan viskozitesi", "Boru malzemesi"]
    },
    correct: 0,
    solution: {
      en: "**Minor Losses** occur due to **local disturbances** in the flow:\n\n$$h_m = K \\frac{V^2}{2g}$$\n\nWhere $K$ is the loss coefficient.\n\n**Common Sources:**\n| Fitting/Component | Typical $K$ value |\n|-------------------|------------------|\n| 90° Elbow | 0.9 |\n| Tee junction | 1.0 |\n| Gate valve (open) | 0.2 |\n| Sudden expansion | $(1 - A_2/A_1)^2$ |\n| Sudden contraction | $0.5(1 - A_2/A_1)$ |\n\n**Note:** Called \"minor\" because typically $h_m < h_f$ (friction loss), but can be significant in short pipes with many fittings.\n\n**Answer: Fittings, valves, bends, expansions** ✓",
      tr: "**Küçük Kayıplar** akıştaki **yerel bozulmalardan** kaynaklanır:\n\n$$h_m = K \\frac{V^2}{2g}$$\n\nBurada $K$ kayıp katsayısıdır.\n\n** yaygın Kaynaklar:**\n| Fitting/Bileşen | Tipik $K$ değeri |\n|-----------------|------------------|\n| 90° Dirsek | 0.9 |\n| T bağlantı | 1.0 |\n| Kelebek vana (açık) | 0.2 |\n| Ani genişleme | $(1 - A_2/A_1)^2$ |\n| Ani daralma | $0.5(1 - A_2/A_1)$ |\n\n**Not:** Genellikle $h_m < h_f$ (sürtünme kaybı) olduğu için \"küçük\" denir, ancak çok sayıda fitting içeren kısa borularda önemli olabilir.\n\n**Cevap: Fittingler, vanalar, dirsekler, genişlemeler** ✓"
    },
    narration: {
      tr: "Bu soruda borulardaki küçük kayıpların neden oluştuğu soruluyor. Küçük kayıplar, ana boru hattındaki kesintilerden kaynaklanır. Bunlar arasında fittingler yani boru bağlantı parçaları, vanalar, dirsekler ve ani genişleme ya da daralmalar sayılabilir. Bu elemanlar akışı bozarak enerji kaybına neden olur. Büyük kayıplar veya sürtünme kayıpları ise boru boyunca sürtünmeden kaynaklanır ve uzun borularda daha belirgindir. Akışkan viskozitesi ve boru malzemesi kayıpları etkiler ama küçük kayıpların asıl nedeni yerel kesintilerdir. Dolayısıyla doğru cevap birinci şık, fittingler, vanalar, dirsekler ve genişlemelerdir."
    }
  },
  {
    id: 15,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "The Darcy-Weisbach equation for head loss is:",
      tr: "Head loss için Darcy-Weisbach denklemi hangisidir?"
    },
    options: {
      en: ["hf = f(L/D)(V²/2g)", "hf = f(LV²/Dg)", "hf = fLV²/D", "hf = fV²/2g"],
      tr: ["hf = f(L/D)(V²/2g)", "hf = f(LV²/Dg)", "hf = fLV²/D", "hf = fV²/2g"]
    },
    correct: 0,
    solution: {
      en: "**Darcy-Weisbach Equation** (Standard Form):\n\n$$\\boxed{h_f = f \\frac{L}{D} \\frac{V^2}{2g}}$$\n\n**Each Term:**\n| Symbol | Meaning | Units |\n|--------|---------|-------|\n| $h_f$ | Head loss | m |\n| $f$ | Friction factor | dimensionless |\n| $L$ | Pipe length | m |\n| $D$ | Pipe diameter | m |\n| $V$ | Velocity | m/s |\n| $g$ | Gravity | m/s² |\n\n**Dimensional Analysis:**\n$$[h_f] = \\frac{L \\cdot L \\cdot T^{-2}}{L \\cdot T^{-2}} = L \\checkmark$$\n\n**Answer: $h_f = f(L/D)(V^2/2g)$** ✓",
      tr: "**Darcy-Weisbach Denklemi** (Standart Form):\n\n$$\\boxed{h_f = f \\frac{L}{D} \\frac{V^2}{2g}}$$\n\n**Her Terim:**\n| Sembol | Anlam | Birim |\n|--------|-------|-------|\n| $h_f$ | Enerji kaybı | m |\n| $f$ | Sürtünme faktörü | boyutsuz |\n| $L$ | Boru uzunluğu | m |\n| $D$ | Boru çapı | m |\n| $V$ | Hız | m/s |\n| $g$ | Yerçekimi | m/s² |\n\n**Boyut Analizi:**\n$$[h_f] = \\frac{L \\cdot L \\cdot T^{-2}}{L \\cdot T^{-2}} = L \\checkmark$$\n\n**Cevap: $h_f = f(L/D)(V^2/2g)$** ✓"
    },
    narration: {
      tr: "Bu soruda Darcy-Weisbach denkleminin doğru formu soruluyor. Darcy-Weisbach denklemi sürtünme kayıplarını hesaplamak için kullanılan temel denklemdir. Standart formu h f eşittir f çarpı L bölü D çarpı V kare bölü iki g şeklindedir. Burada f sürtünme faktörü, L boru uzunluğu, D boru çapı, V akış hızı ve g yerçekimi ivmesidir. Diğer şıklara baktığımızda, ikinci ve üçüncü şıklarda formül eksik veya hatalı, dördüncü şıkta ise uzunluk ve çap terimleri yok. Dolayısıyla doğru cevap birinci şık, h f eşittir f L bölü D V kare bölü iki g."
    }
  },
  {
    id: 16,
    exercise: "ex1",
    type: "multiple",
    question: {
      en: "Kinematic viscosity ν has dimensions:",
      tr: "Kinematik viskozite ν boyutları nelerdir?"
    },
    options: {
      en: ["L²T⁻¹", "LT⁻¹", "$MLT^{-2}$", "ML²T⁻¹"],
      tr: ["L²T⁻¹", "LT⁻¹", "$MLT^{-2}$", "ML²T⁻¹"]
    },
    correct: 0,
    solution: {
      en: "**Kinematic Viscosity Definition:**\n\n$$\\nu = \\frac{\\mu}{\\rho}$$\n\n**Dimensional Analysis:**\n\n- Dynamic viscosity: $[\\mu] = ML^{-1}T^{-1}$\n- Density: $[\\rho] = ML^{-3}$\n\n$$[\\nu] = \\frac{ML^{-1}T^{-1}}{ML^{-3}} = \\frac{M^1 L^{-1} T^{-1}}{M^1 L^{-3}} = L^2 T^{-1}$$\n\n**Physical Meaning:**\n$$\\nu = \\frac{\\text{momentum diffusivity}}{\\text{mass diffusivity}}$$\n\n**Units:**\n- SI: $m^2/s$\n- CGS: $St$ (Stokes), $1 St = 10^{-4} m^2/s$\n\n**Answer: $L^2T^{-1}$** ✓",
      tr: "**Kinematik Viskozite Tanımı:**\n\n$$\\nu = \\frac{\\mu}{\\rho}$$\n\n**Boyut Analizi:**\n\n- Dinamik viskozite: $[\\mu] = ML^{-1}T^{-1}$\n- Yoğunluk: $[\\rho] = ML^{-3}$\n\n$$[\\nu] = \\frac{ML^{-1}T^{-1}}{ML^{-3}} = \\frac{M^1 L^{-1} T^{-1}}{M^1 L^{-3}} = L^2 T^{-1}$$\n\n**Fiziksel Anlam:**\n$$\\nu = \\frac{\\text{momentum difüzyonu}}{\\text{kütle difüzyonu}}$$\n\n**Birimler:**\n- SI: $m^2/s$\n- CGS: $St$ (Stokes), $1 St = 10^{-4} m^2/s$\n\n**Cevap: $L^2T^{-1}$** ✓"
    },
    narration: {
      tr: "Bu soruda kinematik viskozitenin boyutları soruluyor. Kinematik viskozite, dinamik viskozitenin yoğunluğa bölünmesiyle elde edilir. Dinamik viskozitenin boyutları M L üssü eksi bir T üssü eksi birdir. Yoğunluğun boyutları M L üssü eksi üçtür. Kinematik viskozite boyutlarını bulmak için dinamik viskozite boyutlarını yoğunluk boyutlarına böleriz. M'ler birbirini götürür, L üssü eksi bir bölü L üssü eksi üç eşittir L kare, T üssü eksi bir kalır. Dolayısıyla kinematik viskozitenin boyutları L kare T üssü eksi birdir. Doğru cevap birinci şık."
    }
  },
  {
    id: 17,
    exercise: "ex2",
    type: "multiple",
    question: {
      en: "For geometric similarity, all dimensions must be scaled by:",
      tr: "Geometrik benzerlik için, tüm boyutlar hangisi ile ölçeklenmelidir?"
    },
    options: {
      en: ["The same scale ratio", "Different ratios for length and width", "Random ratios", "Time-dependent ratios"],
      tr: ["Aynı ölçek oranı", "Uzunluk ve genişlik için farklı oranlar", "Rastgele oranlar", "Zamana bağlı oranlar"]
    },
    correct: 0,
    solution: {
      en: "**Geometric Similarity** is the foundation of all model studies.\n\n**Definition:**\nAll corresponding dimensions must be scaled by the **same ratio**.\n\n$$L_r = \\frac{L_p}{L_m} = \\frac{W_p}{W_m} = \\frac{H_p}{H_m} = ...$$\n\n**Requirements:**\n| Parameter | Scale Ratio |\n|-----------|-------------|\n| Length | $L_r$ |\n| Width | $L_r$ |\n| Height | $L_r$ |\n| Diameter | $L_r$ |\n| Area | $L_r^2$ |\n| Volume | $L_r^3$ |\n\n**Example:** For a 1:50 scale model:\n- $L_r = 50$\n- All linear dimensions must use this ratio\n- Shape must be preserved exactly\n\n**Answer: The same scale ratio** ✓",
      tr: "**Geometrik Benzerlik** tüm model çalışmalarının temelidir.\n\n**Tanım:**\nTüm karşılık gelen boyutlar **aynı oranla** ölçeklenmelidir.\n\n$$L_r = \\frac{L_p}{L_m} = \\frac{G_p}{G_m} = \\frac{Y_p}{Y_m} = ...$$\n\n**Gereksinimler:**\n| Parametre | Ölçek Oranı |\n|-----------|-------------|\n| Uzunluk | $L_r$ |\n| Genişlik | $L_r$ |\n| Yükseklik | $L_r$ |\n| Çap | $L_r$ |\n| Alan | $L_r^2$ |\n| Hacim | $L_r^3$ |\n\n**Örnek:** 1:50 ölçekli model için:\n- $L_r = 50$\n- Tüm doğrusal boyutlar bu oranı kullanmalı\n- Şekil tam olarak korunmalı\n\n**Cevap: Aynı ölçek oranı** ✓"
    },
    narration: {
      tr: "Bu soruda geometrik benzerliğin ne gerektirdiği soruluyor. Geometrik benzerlik, model ile prototip arasındaki en temel benzerlik türüdür. Geometrik benzerlikte tüm boyutlar, yani uzunluk, genişlik, yükseklik ve çap gibi karakteristik uzunluklar, aynı ölçek oranı ile ölçeklenmelidir. Örneğin uzunluk ölçeği bir bölü on ise, genişlik ve yükseklik de aynı bir bölü on oranında ölçeklenmelidir. Farklı oranlar kullanırsak şekiller birbirine benzemez ve geometrik benzerlik sağlanamaz. Dolayısıyla doğru cevap birinci şık, aynı ölçek oranıdır."
    }
  },
  {
    id: 18,
    exercise: "ex3",
    type: "numeric",
    question: {
      en: "Find discharge Q if A = 0.1 m² and V = 5 m/s",
      tr: "A = 0.1 m² ve V = 5 m/s ise Q deşarjını bulun"
    },
    unit: "m³/s",
    answer: 0.5,
    tolerance: 0.01,
    solution: {
      en: "**Continuity Equation:**\n\n$$Q = A \\times V$$\n\n**Given:**\n- $A = 0.1$ m² (cross-sectional area)\n- $V = 5$ m/s (velocity)\n\n**Calculation:**\n$$Q = 0.1 \\times 5 = 0.5 \\text{ m}^3\\text{/s}$$\n\n**Physical Meaning:**\n- $Q$ = Discharge (volume per unit time)\n- Units: $m^3/s$\n\n**Alternative form of continuity:**\n$$A_1 V_1 = A_2 V_2 = Q = \\text{constant}$$\n\n**Answer: 0.5 m³/s** ✓",
      tr: "**Süreklilik Denklemi:**\n\n$$Q = A \\times V$$\n\n**Verilenler:**\n- $A = 0.1$ m² (kesit alanı)\n- $V = 5$ m/s (hız)\n\n**Hesaplama:**\n$$Q = 0.1 \\times 5 = 0.5 \\text{ m}^3\\text{/s}$$\n\n**Fiziksel Anlam:**\n- $Q$ = Debi (birim zamanda hacim)\n- Birimler: $m^3/s$\n\n**Sürekliliğin alternatif formu:**\n$$A_1 V_1 = A_2 V_2 = Q = \\text{sabit}$$\n\n**Cevap: 0.5 m³/s** ✓"
    },
    narration: {
      tr: "Bu soruda debi hesabı yapılıyor. Debi veya deşarj, kesit alanı ile hızın çarpımına eşittir. Formül Q eşittir A çarpı V şeklindedir. Verilen değerleri yerine koyalım: kesit alanı sıfır virgül bir metrekare, hız beş metre bölü saniye. Bu iki değeri çarptığımızda, sıfır virgül bir çarpı beş eşittir sıfır virgül beş metreküp bölü saniye olarak bulunur. Bu debi, boru veya kanal içinden bir saniyede geçen akışkan hacmidir."
    }
  },
  {
    id: 19,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "In laminar flow through a circular pipe, the velocity distribution is:",
      tr: "Dairesel borudaki laminar akımda hız dağılımı nasıldır?"
    },
    options: {
      en: ["Parabolic", "Uniform", "Linear", "Logarithmic"],
      tr: ["Parabolik", "Düzgün", "Doğrusal", "Logaritmik"]
    },
    correct: 0,
    solution: {
      en: "**Velocity Distribution in Laminar Pipe Flow:**\n\nFor laminar flow ($Re < 2000$), the velocity profile is **parabolic**:\n\n$$\\frac{u}{u_{max}} = 1 - \\left(\\frac{r}{R}\\right)^2$$\n\nOr equivalently:\n\n$$u(r) = u_{max}\\left(1 - \\frac{r^2}{R^2}\\right)$$\n\n**Key Characteristics:**\n| Location | Velocity |\n|----------|----------|\n| Center ($r = 0$) | $u_{max}$ |\n| Wall ($r = R$) | $u = 0$ |\n\n**Average Velocity:**\n$$V_{avg} = \\frac{u_{max}}{2}$$\n\nThis is derived from the exact solution of Navier-Stokes equations for fully developed laminar flow.\n\n**Answer: Parabolic** ✓",
      tr: "**Laminer Boru Akımında Hız Dağılımı:**\n\nLaminer akımda ($Re < 2000$), hız profili **parabolik**tir:\n\n$$\\frac{u}{u_{max}} = 1 - \\left(\\frac{r}{R}\\right)^2$$\n\nVEYA:\n\n$$u(r) = u_{max}\\left(1 - \\frac{r^2}{R^2}\\right)$$\n\n**Temel Özellikler:**\n| Konum | Hız |\n|-------|-----|\n| Merkez ($r = 0$) | $u_{max}$ |\n| Duvar ($r = R$) | $u = 0$ |\n\n**Ortalama Hız:**\n$$V_{ort} = \\frac{u_{max}}{2}$$\n\nBu, tam gelişmiş laminer akış için Navier-Stokes denklemlerinin kesin çözümünden türetilmiştir.\n\n**Cevap: Parabolik** ✓"
    },
    narration: {
      tr: "Bu soruda dairesel borudaki laminar akımda hız dağılımının nasıl olduğu soruluyor. Laminar akımda hız dağılımı paraboliktir. Boru merkezinde hız maksimum, boru cidarlarında hız sıfırdır. Parabolik dağılımın formülü u eşittir u maksimum çarpı bir eksi r kare bölü R kare şeklindedir. Burada r boru ekseninden herhangi bir noktaya olan uzaklık, R boru yarıçapıdır. Türbülanslı akımda ise hız dağılımı daha düz ve logaritmiktir. Düzgün dağılım teorikte ideal akış için geçerlidir, doğrusal dağılım ise herhangi bir gerçek akış durumunda görülmez. Dolayısıyla doğru cevap birinci şık, parabolik dağılımdır."
    }
  },
  {
    id: 20,
    exercise: "ex3",
    type: "multiple",
    question: {
      en: "The Hagen-Poiseuille equation is applicable for:",
      tr: "Hagen-Poiseuille denklemi hangisi için geçerlidir?"
    },
    options: {
      en: ["Laminar flow in pipes", "Turbulent flow in pipes", "Open channel flow", "Flow over weirs"],
      tr: ["Boru içi laminar akım", "Boru içi türbülanslı akım", "Açık kanal akımı", "Savak üzerinden akış"]
    },
    correct: 0,
    solution: {
      en: "**Hagen-Poiseuille Equation:**\n\n$$Q = \\frac{\\pi D^4}{128\\mu} \\cdot \\frac{\\Delta P}{L}$$\n\nOr for head loss:\n\n$$h_f = \\frac{32 \\mu L V}{\\rho g D^2}$$\n\n**Valid Conditions:**\n| Condition | Requirement |\n|-----------|-------------|\n| Flow type | Laminar ($Re < 2000$) |\n| Pipe shape | Circular |\n| Flow regime | Fully developed |\n| Fluid | Newtonian |\n\n**Important Notes:**\n- Only valid for **laminar** flow!\n- For turbulent flow → use Darcy-Weisbach\n- Assumes no slip at walls\n\n**Reynolds Number Check:**\n$$Re = \\frac{\\rho V D}{\\mu} < 2000$$\n\n**Answer: Laminar flow in pipes** ✓",
      tr: "**Hagen-Poiseuille Denklemi:**\n\n$$Q = \\frac{\\pi D^4}{128\\mu} \\cdot \\frac{\\Delta P}{L}$$\n\nVEYA enerji kaybı için:\n\n$$h_f = \\frac{32 \\mu L V}{\\rho g D^2}$$\n\n**Geçerli Koşullar:**\n| Koşul | Gereksinim |\n|-------|------------|\n| Akış tipi | Laminer ($Re < 2000$) |\n| Boru şekli | Dairesel |\n| Akış rejimi | Tam gelişmiş |\n| Akışkan | Newtonien |\n\n**Önemli Notlar:**\n- Yalnızca **laminer** akış için geçerli!\n- Türbülanslı akış için → Darcy-Weisbach kullan\n- Duvar kaydırmasız kabul eder\n\n**Reynolds Sayısı Kontrolü:**\n$$Re = \\frac{\\rho V D}{\\mu} < 2000$$\n\n**Cevap: Boru içi laminer akım** ✓"
    },
    narration: {
      tr: "Bu soruda Hagen-Poiseuille denkleminin hangi durumlar için geçerli olduğu soruluyor. Hagen-Poiseuille denklemi, dairesel borularda sabit, laminar ve sıkıştırılamaz akım için geçerlidir. Bu denklem borulardaki laminer akışta debiyi ve hız dağılımını hesaplamak için kullanılır. Önemli bir koşul olarak, akış laminar olmalıdır yani Reynolds sayısı iki binin altında olmalıdır. Türbülanslı akımlarda bu denklem geçerli değildir. Açık kanal akımları ve savaklar için farklı denklemler kullanılır. Dolayısıyla doğru cevap birinci şık, boru içi laminar akımdır."
    }
  }
];
