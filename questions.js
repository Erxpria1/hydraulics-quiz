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
      en: ["MLT⁻²", "MLT⁻¹", "MLT²", "ML²T⁻²"],
      tr: ["MLT⁻²", "MLT⁻¹", "MLT²", "ML²T⁻²"]
    },
    correct: 0,
    solution: {
      en: "Force F = ma, so dimension is [M][L][T]⁻² = MLT⁻²",
      tr: "Kuvvet F = ma, boyut [M][L][T]⁻² = MLT⁻²"
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
      en: "Dynamic viscosity μ = τ/γ, where τ is shear stress and γ is shear rate. Dimensional formula is ML⁻¹T⁻¹",
      tr: "Dinamik viskozite μ = τ/γ, burada τ kayma gerilmesi ve γ kayma hızıdır. Boyutsal formül ML⁻¹T⁻¹"
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
      en: "Number of Pi terms = n - k, where n is number of variables and k is number of fundamental dimensions",
      tr: "Pi terimlerinin sayısı = n - k, burada n değişken sayısı ve k temel boyut sayısıdır"
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
      en: "Reynolds Number (Re) = ρVL/μ = Inertial force/Viscous force",
      tr: "Reynolds Sayısı (Re) = ρVL/μ = Atalet kuvveti/Viskoz kuvvet"
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
      en: "Re = V × L / ν = 2 × 0.5 / 0.001 = 1000",
      tr: "Re = V × L / ν = 2 × 0.5 / 0.001 = 1000"
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
      en: ["Lr^(1/2)", "Lr^(3/2)", "Lr", "Lr²"],
      tr: ["Lr^(1/2)", "Lr^(3/2)", "Lr", "Lr²"]
    },
    correct: 0,
    solution: {
      en: "For Froude similarity: Vp/Vm = (Lr)^(1/2)",
      tr: "Froude benzerliği için: Vp/Vm = (Lr)^(1/2)"
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
      en: "Time scale = (Length scale)^(1/2) = (20)^(1/2) = 4.47, so 1:4.47",
      tr: "Zaman ölçeği = (Uzunluk ölçeği)^(1/2) = (20)^(1/2) = 4.47, yani 1:4.47"
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
      en: "Qm = Qp × (Lr)^(5/2) = 100 × (1/10)^(5/2) = 100 × 0.001 = 0.1 m³/s",
      tr: "Qm = Qp × (Lr)^(5/2) = 100 × (1/10)^(5/2) = 100 × 0.001 = 0.1 m³/s"
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
      en: "Froude similarity is used for free surface flows where gravitational forces dominate",
      tr: "Yerçekimi kuvvetlerinin baskın olduğu serbest yüzeyli akımlarda Froude benzerliği kullanılır"
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
      en: "For Reynolds similarity: Vr = (Lr)^(-1) = 1/50 = 0.02, but for practical flow similarity often Froude is used: Vr = (Lr)^(1/2) = 1/√50 = 0.141. Wait - for pipe flow with viscous effects: Vr = 1/Lr = 3/50 = 0.06 m/s",
      tr: "Reynolds benzerliği için: Vr = (Lr)^(-1) = 1/50 = 0.02, ancak pratik akım benzerliği için genellikle Froude kullanılır: Vr = (Lr)^(1/2) = 1/√50 = 0.141. Boru akımı için viskoz etkilerle: Vr = 1/Lr = 3/50 = 0.06 m/s"
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
      en: "hf = f × (L/D) × (V²/2g) - Darcy-Weisbach equation",
      tr: "hf = f × (L/D) × (V²/2g) - Darcy-Weisbach denklemi"
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
      en: "For turbulent flow, f depends on both Re and ε/D (relative roughness) - Moody diagram",
      tr: "Türbülanslı akım için f, hem Re hem de ε/D'ye (bağıl pürüzlülük) bağlıdır - Moody diagramı"
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
      en: "hf = f × (L/D) × (V²/2g) = 0.02 × (100/0.5) × (4/(2×9.81)) = 0.02 × 200 × 0.204 = 1.63 m",
      tr: "hf = f × (L/D) × (V²/2g) = 0.02 × (100/0.5) × (4/(2×9.81)) = 0.02 × 200 × 0.204 = 1.63 m"
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
      en: "Minor losses are due to local disturbances like fittings, valves, bends, and sudden expansions/contructions",
      tr: "Küçük kayıplar, fittingler, vanalar, dirsekler ve ani genişleme/daralmalar gibi yerel bozulmalardan kaynaklanır"
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
      en: "Standard form: hf = f × (L/D) × (V²/2g)",
      tr: "Standart form: hf = f × (L/D) × (V²/2g)"
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
      en: ["L²T⁻¹", "LT⁻¹", "MLT⁻²", "ML²T⁻¹"],
      tr: ["L²T⁻¹", "LT⁻¹", "MLT⁻²", "ML²T⁻¹"]
    },
    correct: 0,
    solution: {
      en: "ν = μ/ρ, so dimensions are L²T⁻¹ (kinematic viscosity)",
      tr: "ν = μ/ρ, boyutlar L²T⁻¹ (kinematik viskozite)"
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
      en: "Geometric similarity requires all corresponding dimensions to have the same scale ratio",
      tr: "Geometrik benzerlik, tüm karşılık gelen boyutların aynı ölçek oranına sahip olmasını gerektirir"
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
      en: "Q = A × V = 0.1 × 5 = 0.5 m³/s",
      tr: "Q = A × V = 0.1 × 5 = 0.5 m³/s"
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
      en: "Laminar flow has parabolic velocity distribution: u = umax(1 - r²/R²)",
      tr: "Laminar akımda parabolik hız dağılımı: u = umax(1 - r²/R²)"
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
      en: "Hagen-Poiseuille equation is for steady, laminar, incompressible flow in circular pipes",
      tr: "Hagen-Poiseuille denklemi dairesel borularda sabit, laminar, sıkıştırılamaz akım için geçerlidir"
    }
  }
];
