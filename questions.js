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
      en: "Force F = ma, so dimension is [M][L][T]⁻² = $MLT^{-2}$",
      tr: "Kuvvet F = ma, boyut [M][L][T]⁻² = $MLT^{-2}$"
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
      en: "Dynamic viscosity μ = τ/γ, where τ is shear stress and γ is shear rate. Dimensional formula is ML⁻¹T⁻¹",
      tr: "Dinamik viskozite μ = τ/γ, burada τ kayma gerilmesi ve γ kayma hızıdır. Boyutsal formül ML⁻¹T⁻¹"
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
      en: "Number of Pi terms = n - k, where n is number of variables and k is number of fundamental dimensions",
      tr: "Pi terimlerinin sayısı = n - k, burada n değişken sayısı ve k temel boyut sayısıdır"
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
      en: "Reynolds Number (Re) = ρVL/μ = Inertial force/Viscous force",
      tr: "Reynolds Sayısı (Re) = ρVL/μ = Atalet kuvveti/Viskoz kuvvet"
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
      en: "Re = V × L / ν = 2 × 0.5 / 0.001 = 1000",
      tr: "Re = V × L / ν = 2 × 0.5 / 0.001 = 1000"
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
      en: ["Lr^(1/2)", "Lr^(3/2)", "Lr", "Lr²"],
      tr: ["Lr^(1/2)", "Lr^(3/2)", "Lr", "Lr²"]
    },
    correct: 0,
    solution: {
      en: "For Froude similarity: Vp/Vm = (Lr)^(1/2)",
      tr: "Froude benzerliği için: Vp/Vm = (Lr)^(1/2)"
    },
    narration: {
      tr: "Bu soru hidrolik model çalışmalarında hız ölçek oranı ile ilgili. Model ve prototip arasındaki benzerlik kurulurken genellikle Froude benzerliği kullanılır. Froude benzerliğinde hız ölçek oranı, uzunluk ölçek oranının karekökü olarak bulunur. Yani model hızı bölü prototip hızı eşittir uzunluk ölçek oranının karekökü. Bu önemli bir kavramdır çünkü serbest yüzeyli akımlarda yerçekimi kuvvetleri baskındır ve Froude sayısı eşitlenmelidir. Dolayısıyla doğru cevap birinci şık, L r parantez bir bölü ikinci üssüdür yani karekökü."
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
      en: "Froude similarity is used for free surface flows where gravitational forces dominate",
      tr: "Yerçekimi kuvvetlerinin baskın olduğu serbest yüzeyli akımlarda Froude benzerliği kullanılır"
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
      en: "Vr = (Lr)^(1/2) = (1/50)^(1/2) = 0.141, then 3 × 0.141 = 0.424 m/s",
      tr: "Vr = (Lr)^(1/2) = (1/50)^(1/2) = 0.141, sonra 3 × 0.141 = 0.424 m/s"
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
      en: "hf = f × (L/D) × (V²/2g) - Darcy-Weisbach equation",
      tr: "hf = f × (L/D) × (V²/2g) - Darcy-Weisbach denklemi"
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
      en: "For turbulent flow, f depends on both Re and ε/D (relative roughness) - Moody diagram",
      tr: "Türbülanslı akım için f, hem Re hem de ε/D'ye (bağıl pürüzlülük) bağlıdır - Moody diagramı"
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
      en: "hf = f × (L/D) × (V²/2g) = 0.02 × (100/0.5) × (4/(2×9.81)) = 0.02 × 200 × 0.204 = 1.63 m",
      tr: "hf = f × (L/D) × (V²/2g) = 0.02 × (100/0.5) × (4/(2×9.81)) = 0.02 × 200 × 0.204 = 1.63 m"
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
      en: "Minor losses are due to local disturbances like fittings, valves, bends, and sudden expansions/contructions",
      tr: "Küçük kayıplar, fittingler, vanalar, dirsekler ve ani genişleme/daralmalar gibi yerel bozulmalardan kaynaklanır"
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
      en: "Standard form: hf = f × (L/D) × (V²/2g)",
      tr: "Standart form: hf = f × (L/D) × (V²/2g)"
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
      en: "ν = μ/ρ, so dimensions are L²T⁻¹ (kinematic viscosity)",
      tr: "ν = μ/ρ, boyutlar L²T⁻¹ (kinematik viskozite)"
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
      en: "Geometric similarity requires all corresponding dimensions to have the same scale ratio",
      tr: "Geometrik benzerlik, tüm karşılık gelen boyutların aynı ölçek oranına sahip olmasını gerektirir"
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
      en: "Q = A × V = 0.1 × 5 = 0.5 m³/s",
      tr: "Q = A × V = 0.1 × 5 = 0.5 m³/s"
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
      en: "Laminar flow has parabolic velocity distribution: u = umax(1 - r²/R²)",
      tr: "Laminar akımda parabolik hız dağılımı: u = umax(1 - r²/R²)"
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
      en: "Hagen-Poiseuille equation is for steady, laminar, incompressible flow in circular pipes",
      tr: "Hagen-Poiseuille denklemi dairesel borularda sabit, laminar, sıkıştırılamaz akım için geçerlidir"
    },
    narration: {
      tr: "Bu soruda Hagen-Poiseuille denkleminin hangi durumlar için geçerli olduğu soruluyor. Hagen-Poiseuille denklemi, dairesel borularda sabit, laminar ve sıkıştırılamaz akım için geçerlidir. Bu denklem borulardaki laminer akışta debiyi ve hız dağılımını hesaplamak için kullanılır. Önemli bir koşul olarak, akış laminar olmalıdır yani Reynolds sayısı iki binin altında olmalıdır. Türbülanslı akımlarda bu denklem geçerli değildir. Açık kanal akımları ve savaklar için farklı denklemler kullanılır. Dolayısıyla doğru cevap birinci şık, boru içi laminar akımdır."
    }
  }
];
