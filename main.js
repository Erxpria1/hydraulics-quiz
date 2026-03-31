const state = {
  currentQuestion: 0,
  answers: {},
  score: 0,
  correct: 0,
  wrong: 0,
  filter: 'all',
  currentLang: 'en',
  showSolutions: false,
  speakingType: null, // 'question' veya 'solution'
};

const elements = {
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  scoreDisplay: document.getElementById('scoreDisplay'),
  totalDisplay: document.getElementById('totalDisplay'),
  correctCount: document.getElementById('correctCount'),
  wrongCount: document.getElementById('wrongCount'),
  questionNumber: document.getElementById('questionNumber'),
  questionExercise: document.getElementById('questionExercise'),
  questionText: document.getElementById('questionText'),
  questionImage: document.getElementById('questionImage'),
  optionsContainer: document.getElementById('optionsContainer'),
  numericAnswer: document.getElementById('numericAnswer'),
  numericInput: document.getElementById('numericInput'),
  unitDisplay: document.getElementById('unitDisplay'),
  checkNumeric: document.getElementById('checkNumeric'),
  solutionContainer: document.getElementById('solutionContainer'),
  solutionText: document.getElementById('solutionText'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  showSolutionBtn: document.getElementById('showSolutionBtn'),
  nextNavBtn: document.getElementById('nextNavBtn'),
  questionDots: document.getElementById('questionDots'),
  langToggle: document.getElementById('langToggle'),
  hoporlorBtn: document.getElementById('hoporlorBtn'),
  audioBtn: document.getElementById('audioBtn'),
  calcBtn: document.getElementById('calcBtn')
};

function getFilteredQuestions() {
  if (state.filter === 'all') return questions;
  return questions.filter(q => q.exercise === state.filter);
}

function init() {
  createDots();
  renderQuestion();
  setupEventListeners();
}

function createDots() {
  const filtered = getFilteredQuestions();
  elements.questionDots.innerHTML = '';
  
  filtered.forEach((q, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.textContent = q.id;
    dot.dataset.index = index;
    
    if (state.answers[q.id] !== undefined) {
      if (state.answers[q.id].correct) {
        dot.classList.add('correct');
      } else {
        dot.classList.add('wrong');
      }
    }
    
    if (index === state.currentQuestion) {
      dot.classList.add('active');
    }
    
    dot.addEventListener('click', () => {
      stopSpeaking();
      goToQuestion(index);
    });
    elements.questionDots.appendChild(dot);
  });
}

function renderQuestion() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (!question) return;
  
  const answeredCount = Object.keys(state.answers).length;
  const progress = (answeredCount / filtered.length) * 100;
  elements.progressBar.style.width = `${progress}%`;
  elements.progressText.textContent = `${answeredCount} / ${filtered.length}`;
  
  elements.questionNumber.textContent = `Question ${question.id}`;
  elements.questionExercise.textContent = getExerciseLabel(question.exercise);
  
  elements.questionText.innerHTML = formatContent(question.question[state.currentLang] || question.question.en);
  elements.questionImage.innerHTML = '';
  
  elements.optionsContainer.innerHTML = '';
  elements.numericAnswer.style.display = 'none';
  
  if (question.type === 'multiple') {
    renderMultipleChoice(question);
  } else if (question.type === 'numeric') {
    renderNumeric(question);
  }
  
  const isAnswered = state.answers[question.id] !== undefined;
  
  if (isAnswered) {
    elements.solutionContainer.style.display = 'block';
    elements.solutionText.innerHTML = formatContent(question.solution[state.currentLang] || question.solution.en);
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Gizle' : 'Hide Solution';
    state.showSolutions = true;
  } else {
    elements.solutionContainer.style.display = 'none';
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Göster' : 'Show Solution';
    state.showSolutions = false;
  }
  
  elements.prevBtn.disabled = state.currentQuestion === 0;
  elements.nextNavBtn.disabled = state.currentQuestion === filtered.length - 1;
  
  updateStats();
  createDots();

  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false},
        {left: "\\[", right: "\\]", display: true}
      ],
      throwOnError : false
    });
  }
}

function renderMultipleChoice(question) {
  const labels = ['A', 'B', 'C', 'D'];
  const options = question.options[state.currentLang] || question.options.en;
  const isAnswered = state.answers[question.id] !== undefined;
  
  options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = index;
    
    if (isAnswered) {
      btn.classList.add('disabled');
      if (index === question.correct) {
        btn.classList.add('correct');
      } else if (index === state.answers[question.id].selected && state.answers[question.id].selected !== question.correct) {
        btn.classList.add('wrong');
      }
    }
    
    btn.innerHTML = `
      <span class="option-label">${labels[index]}</span>
      <span class="option-text">${formatContent(option)}</span>
    `;
    
    if (!isAnswered) {
      btn.addEventListener('click', () => selectAnswer(index));
    }
    
    elements.optionsContainer.appendChild(btn);
  });
}

function renderNumeric(question) {
  elements.numericAnswer.style.display = 'flex';
  elements.unitDisplay.textContent = question.unit || '';
  elements.numericInput.value = '';
  elements.numericInput.placeholder = state.currentLang === 'tr' ? 'Sayı giriniz...' : 'Enter number...';
  
  const isAnswered = state.answers[question.id] !== undefined;
  
  elements.checkNumeric.disabled = isAnswered;
  
  if (isAnswered) {
    elements.numericInput.value = state.answers[question.id].selected;
    const tolerance = question.tolerance || 0.01;
    const userAnswer = parseFloat(state.answers[question.id].selected);
    const correctAnswer = question.answer;
    const isCorrect = Math.abs((userAnswer - correctAnswer) / correctAnswer) <= tolerance;
    
    if (isCorrect) {
      elements.numericInput.style.borderColor = 'var(--correct)';
    } else {
      elements.numericInput.style.borderColor = 'var(--wrong)';
    }
  } else {
    elements.numericInput.style.borderColor = '';
    elements.checkNumeric.onclick = () => checkNumericAnswer(question);
  }
}

function selectAnswer(index) {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (state.answers[question.id] !== undefined) return;
  
  const isCorrect = index === question.correct;
  
  state.answers[question.id] = {
    selected: index,
    correct: isCorrect
  };
  
  if (isCorrect) {
    state.correct++;
    state.score += 5;
  } else {
    state.wrong++;
  }
  
  renderQuestion();
}

function checkNumericAnswer(question) {
  const userAnswer = parseFloat(elements.numericInput.value);
  
  if (isNaN(userAnswer)) return;
  
  const tolerance = question.tolerance || 0.01;
  const correctAnswer = question.answer;
  const isCorrect = Math.abs((userAnswer - correctAnswer) / correctAnswer) <= tolerance;
  
  state.answers[question.id] = {
    selected: userAnswer,
    correct: isCorrect
  };
  
  if (isCorrect) {
    state.correct++;
    state.score += 5;
  } else {
    state.wrong++;
  }
  
  renderQuestion();
}

function formatContent(text) {
  if (!text) return '';
  return text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[GIVEN\](.*?)\[\/GIVEN\]/g, '<span class="given-value">$1</span>');
}

function toggleSolution() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (state.showSolutions) {
    elements.solutionContainer.style.display = 'none';
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Göster' : 'Show Solution';
    state.showSolutions = false;
  } else {
    elements.solutionContainer.style.display = 'block';
    elements.solutionText.innerHTML = formatContent(question.solution[state.currentLang] || question.solution.en);
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Gizle' : 'Hide Solution';
    state.showSolutions = true;
    
    if (window.renderMathInElement) {
      renderMathInElement(elements.solutionContainer, {
        delimiters: [
          {left: "$$", right: "$$", display: true},
          {left: "$", right: "$", display: false}
        ],
        throwOnError : false
      });
    }
  }
}

function nextQuestion() {
  stopSpeaking();
  const filtered = getFilteredQuestions();
  if (state.currentQuestion < filtered.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  }
}

function prevQuestion() {
  stopSpeaking();
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
}

function goToQuestion(index) {
  state.currentQuestion = index;
  renderQuestion();
}

function updateStats() {
  elements.scoreDisplay.textContent = state.score;
  elements.totalDisplay.textContent = getFilteredQuestions().length;
  elements.correctCount.textContent = state.correct;
  elements.wrongCount.textContent = state.wrong;
}

function getExerciseLabel(exercise) {
  const labels = {
    ex1: { en: 'Ex I: Dimensional Analysis', tr: 'Sorun I: Boyutsal Analiz' },
    ex2: { en: 'Ex II: Model Theory', tr: 'Sorun II: Model Teorisi' },
    ex3: { en: 'Ex III: Closed Conduit', tr: 'Sorun III: Kapalı Boru' }
  };
  return labels[exercise]?.[state.currentLang] || exercise;
}

function switchLanguage(lang) {
  stopSpeaking();
  state.currentLang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.dataset[lang] || el.dataset.en;
    if (el.tagName === 'INPUT') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
  
  renderQuestion();
}

function setupEventListeners() {
  elements.prevBtn.addEventListener('click', prevQuestion);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.nextNavBtn.addEventListener('click', nextQuestion);
  elements.showSolutionBtn.addEventListener('click', toggleSolution);
  
  elements.langToggle.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      stopSpeaking();
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      state.currentQuestion = 0;
      createDots();
      renderQuestion();
    });
  });
  
  if (elements.hoporlorBtn) {
    elements.hoporlorBtn.addEventListener('click', () => {
      const q = getFilteredQuestions()[state.currentQuestion];
      const text = q.narration?.tr || q.question[state.currentLang] || q.question.en;
      handleSpeak(text, 'question');
    });
  }
  
  if (elements.audioBtn) {
    elements.audioBtn.addEventListener('click', () => {
      const q = getFilteredQuestions()[state.currentQuestion];
      const text = q.solution[state.currentLang] || q.solution.en;
      handleSpeak(text, 'solution');
    });
  }
}

// TTS MANTIĞI - YENİLENMİŞ
let isPaused = false;

function handleSpeak(text, type) {
  const synth = window.speechSynthesis;

  // Eğer zaten konuşuyorsa ve aynı tipse (örn: soru okurken tekrar soruya basıldıysa)
  if (synth.speaking && state.speakingType === type) {
    if (isPaused) {
      synth.resume();
      isPaused = false;
    } else {
      synth.pause();
      isPaused = true;
    }
    updateAudioButtons();
    return;
  }

  // Eğer başka bir şey konuşuyorsa veya yeni bir şey başlatılıyorsa
  stopSpeaking();
  
  state.speakingType = type;
  isPaused = false;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.currentLang === 'tr' ? 'tr-TR' : 'en-US';
  utterance.rate = 0.9;
  
  // Ses seçimi
  const voices = synth.getVoices();
  const targetVoice = voices.find(v => v.lang.startsWith(state.currentLang));
  if (targetVoice) utterance.voice = targetVoice;

  utterance.onstart = () => updateAudioButtons();
  utterance.onpause = () => updateAudioButtons();
  utterance.onresume = () => updateAudioButtons();
  utterance.onend = () => {
    state.speakingType = null;
    isPaused = false;
    updateAudioButtons();
  };

  synth.speak(utterance);
}

function stopSpeaking() {
  window.speechSynthesis.cancel();
  state.speakingType = null;
  isPaused = false;
  updateAudioButtons();
}

function updateAudioButtons() {
  const synth = window.speechSynthesis;
  
  // Soru butonu güncelleme
  if (elements.hoporlorBtn) {
    if (state.speakingType === 'question') {
      elements.hoporlorBtn.innerHTML = isPaused ? '▶ DEVAM' : '⏸ DURAKLAT';
      elements.hoporlorBtn.classList.toggle('playing', !isPaused);
    } else {
      elements.hoporlorBtn.innerHTML = '🎧 HOPORLOR';
      elements.hoporlorBtn.classList.remove('playing');
    }
  }

  // Çözüm butonu güncelleme
  if (elements.audioBtn) {
    if (state.speakingType === 'solution') {
      elements.audioBtn.innerHTML = isPaused ? '▶' : '⏸';
      elements.audioBtn.classList.toggle('playing', !isPaused);
    } else {
      elements.audioBtn.innerHTML = '🔊';
      elements.audioBtn.classList.remove('playing');
    }
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// Yaver Hesap Aygıtı
const yaverCalc = document.getElementById('yaverCalc');
const yaverCalcToggle = document.getElementById('yaverCalcToggle');
const calcDragHandle = document.getElementById('calcDragHandle');
const calcBody = document.getElementById('calcBody');
const calcDisplay = document.getElementById('calcDisplay');
const calcHistory = document.getElementById('calcHistory');
const calcMinimize = document.getElementById('calcMinimize');
const calcCloseFloat = document.getElementById('calcCloseFloat');

let calcValue = '';
let calcLastWasResult = false;
let calcMinimized = false;

if (yaverCalcToggle) {
  yaverCalcToggle.addEventListener('click', () => {
    yaverCalc.classList.toggle('active');
    yaverCalcToggle.classList.toggle('show');
    if (yaverCalc.classList.contains('active')) {
      calcDisplay.focus();
    }
  });
}

if (yaverCalc && elements.calcBtn) {
  elements.calcBtn.addEventListener('click', () => {
    yaverCalc.classList.add('active');
    yaverCalcToggle.classList.add('show');
    calcDisplay.focus();
  });
}

if (calcMinimize) {
  calcMinimize.addEventListener('click', () => {
    calcMinimized = !calcMinimized;
    if (calcBody) calcBody.style.display = calcMinimized ? 'none' : 'block';
    calcMinimize.textContent = calcMinimized ? '☰' : '─';
  });
}

if (calcCloseFloat) {
  calcCloseFloat.addEventListener('click', () => {
    yaverCalc.classList.remove('active');
    yaverCalcToggle.classList.add('show');
  });
}

// Sürükleme
let isDragging = false, dragOffsetX, dragOffsetY;

if (calcDragHandle && yaverCalc) {
  calcDragHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragOffsetX = e.clientX - yaverCalc.getBoundingClientRect().left;
    dragOffsetY = e.clientY - yaverCalc.getBoundingClientRect().top;
    yaverCalc.style.transition = 'none';
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      yaverCalc.style.right = 'auto';
      yaverCalc.style.left = (e.clientX - dragOffsetX) + 'px';
      yaverCalc.style.top = (e.clientY - dragOffsetY) + 'px';
    }
  });
  
  document.addEventListener('mouseup', () => { isDragging = false; yaverCalc.style.transition = ''; });
  
  calcDragHandle.addEventListener('touchstart', (e) => {
    isDragging = true;
    dragOffsetX = e.touches[0].clientX - yaverCalc.getBoundingClientRect().left;
    dragOffsetY = e.touches[0].clientY - yaverCalc.getBoundingClientRect().top;
  });
  
  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      yaverCalc.style.right = 'auto';
      yaverCalc.style.left = (e.touches[0].clientX - dragOffsetX) + 'px';
      yaverCalc.style.top = (e.touches[0].clientY - dragOffsetY) + 'px';
    }
  });
  
  document.addEventListener('touchend', () => isDragging = false);
}

// Sayı tuşları
document.querySelectorAll('.yaver-btn-num').forEach(btn => {
  btn.addEventListener('click', () => {
    if (calcLastWasResult && !isNaN(btn.dataset.val)) { calcValue = ''; calcLastWasResult = false; }
    calcValue += btn.dataset.val;
    calcDisplay.value = calcValue;
    calcHistory.textContent = '';
  });
});

// Fonksiyon tuşları
document.querySelectorAll('.yaver-btn-fn').forEach(btn => {
  btn.addEventListener('click', () => {
    const fn = btn.dataset.val;
    const val = parseFloat(calcValue) || 0;
    let result = 0;
    
    switch(fn) {
      case 'sin': result = Math.sin(val * Math.PI / 180); break;
      case 'cos': result = Math.cos(val * Math.PI / 180); break;
      case 'tan': result = Math.tan(val * Math.PI / 180); break;
      case 'log': result = Math.log10(val); break;
      case 'ln': result = Math.log(val); break;
      case 'sqrt': result = Math.sqrt(val); break;
      case 'pow': result = Math.pow(val, 2); break;
      case 'pi': calcValue = val ? (val * Math.PI).toString() : Math.PI.toString(); calcDisplay.value = calcValue; return;
      case 'e': calcValue = val ? (val * Math.E).toString() : Math.E.toString(); calcDisplay.value = calcValue; return;
      case '(': case ')': calcValue += fn; calcDisplay.value = calcValue; return;
    }
    
    calcDisplay.value = result;
    calcValue = result.toString();
    calcLastWasResult = true;
  });
});

// Operatör tuşları
document.querySelectorAll('.yaver-btn-op').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!calcValue && calcDisplay.value) calcValue = calcDisplay.value;
    calcValue += btn.dataset.val;
    calcDisplay.value = calcValue;
    calcLastWasResult = false;
    calcHistory.textContent = '';
  });
});

// Temizle
const yaverCalcClear = document.getElementById('calcClear');
if (yaverCalcClear) yaverCalcClear.addEventListener('click', () => {
  calcValue = ''; calcDisplay.value = ''; calcLastWasResult = false; calcHistory.textContent = '';
});

// Sil (backspace)
const calcDel = document.getElementById('calcDel');
if (calcDel) calcDel.addEventListener('click', () => {
  calcValue = calcValue.slice(0, -1);
  calcDisplay.value = calcValue;
});

// Eşittir
const yaverCalcEquals = document.getElementById('calcEquals');
if (yaverCalcEquals) yaverCalcEquals.addEventListener('click', () => {
  try {
    let expr = calcValue;
    calcHistory.textContent = calcValue + ' =';
    expr = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    const result = eval(expr);
    calcDisplay.value = result;
    calcValue = result.toString();
    calcLastWasResult = true;
  } catch { calcDisplay.value = 'Hata'; calcValue = ''; }
});

// Yüzde
document.querySelectorAll('.yaver-btn-percent').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = parseFloat(calcValue) || 0;
    calcDisplay.value = val / 100;
    calcValue = (val / 100).toString();
    calcLastWasResult = true;
  });
});

// Klavye
document.addEventListener('keydown', (e) => {
  if (!yaverCalc?.classList.contains('active')) return;
  if (e.key === 'Enter') yaverCalcEquals?.click();
  else if (e.key === 'Escape') { yaverCalc.classList.remove('active'); yaverCalcToggle?.classList.add('show'); }
  else if (e.key === 'Backspace') { calcValue = calcValue.slice(0, -1); calcDisplay.value = calcValue; }
});

document.addEventListener('DOMContentLoaded', init);
