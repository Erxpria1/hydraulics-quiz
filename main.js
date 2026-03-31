const state = {
  currentQuestion: 0,
  answers: {},
  starred: JSON.parse(localStorage.getItem('starredQuestions') || '[]'),
  score: 0,
  correct: 0,
  wrong: 0,
  filter: 'all',
  currentLang: 'en',
  showSolutions: false,
  speakingType: null,
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
  calcBtn: document.getElementById('calcBtn'),
  starBtn: document.getElementById('starBtn')
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
    if (state.answers[q.id]?.correct) dot.classList.add('correct');
    else if (state.answers[q.id]?.correct === false) dot.classList.add('wrong');
    if (index === state.currentQuestion) dot.classList.add('active');
    dot.addEventListener('click', () => { stopSpeaking(); goToQuestion(index); });
    elements.questionDots.appendChild(dot);
  });
}

function triggerKaTeX(element = document.body) {
  if (window.renderMathInElement) {
    renderMathInElement(element, {
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

function renderQuestion() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  if (!question) return;

  const answeredCount = Object.keys(state.answers).length;
  elements.progressBar.style.width = `${(answeredCount / filtered.length) * 100}%`;
  elements.progressText.textContent = `${answeredCount} / ${filtered.length}`;
  
  elements.questionNumber.textContent = `Q${state.currentQuestion + 1}`;
  elements.questionExercise.textContent = getExerciseLabel(question.exercise);
  elements.questionText.innerHTML = formatContent(question.question[state.currentLang] || question.question.en);
  
  elements.optionsContainer.innerHTML = '';
  elements.solutionText.innerHTML = '';
  elements.numericAnswer.style.display = 'none';
  
  if (question.type === 'multiple') renderMultipleChoice(question);
  else if (question.type === 'numeric') renderNumeric(question);
  
  const isAnswered = state.answers[question.id] !== undefined;
  if (isAnswered) {
    elements.solutionContainer.style.display = 'block';
    elements.solutionText.innerHTML = formatContent(question.solution[state.currentLang] || question.solution.en);
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Gizle' : 'Hide';
    state.showSolutions = true;
  } else {
    elements.solutionContainer.style.display = 'none';
    elements.solutionText.innerHTML = '';
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Göster' : 'Show Solution';
    state.showSolutions = false;
  }
  
  elements.prevBtn.disabled = state.currentQuestion === 0;
  elements.nextNavBtn.disabled = state.currentQuestion === filtered.length - 1;
  
  updateStarButton(question.id);
  updateStats();
  createDots();
  triggerKaTeX();
  updateButtonTexts();
  updateFilterTabTexts();
}

function renderMultipleChoice(question) {
  const options = question.options[state.currentLang] || question.options.en;
  const isAnswered = state.answers[question.id] !== undefined;
  
  options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (isAnswered) {
      btn.classList.add('disabled');
      if (index === question.correct) btn.classList.add('correct');
      else if (index === state.answers[question.id].selected) btn.classList.add('wrong');
    }
    btn.innerHTML = `<span class="option-label">${String.fromCharCode(65 + index)}</span><span class="option-text">${formatContent(option)}</span>`;
    if (!isAnswered) btn.addEventListener('click', () => selectAnswer(index));
    elements.optionsContainer.appendChild(btn);
  });
}

function renderNumeric(question) {
  elements.numericAnswer.style.display = 'flex';
  elements.unitDisplay.textContent = question.unit || '';
  elements.numericInput.value = '';
  elements.numericInput.focus();
  
  elements.numericInput.onkeydown = (e) => {
    if (e.key === 'Enter') checkNumericAnswer();
  };
  
  elements.checkNumeric.onclick = checkNumericAnswer;
}

function checkNumericAnswer() {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (state.answers[q.id]) return;
  
  const userAnswer = parseFloat(elements.numericInput.value);
  if (isNaN(userAnswer)) return;
  
  const tolerance = q.tolerance || 0.01;
  const correctAnswer = q.answer;
  const isCorrect = Math.abs(userAnswer - correctAnswer) <= Math.abs(correctAnswer * tolerance);
  
  state.answers[q.id] = { selected: userAnswer, correct: isCorrect };
  if (isCorrect) { state.correct++; state.score += 5; } else state.wrong++;
  
  const label = document.querySelector('label[for="numericInput"]');
  if (label) {
    label.style.color = isCorrect ? 'var(--correct)' : 'var(--wrong)';
    label.textContent = isCorrect 
      ? (state.currentLang === 'tr' ? '✓ Doğru!' : '✓ Correct!')
      : (state.currentLang === 'tr' ? `✗ Doğru cevap: ${correctAnswer}` : `✗ Correct answer: ${correctAnswer}`);
  }
  
  renderQuestion();
}

function formatContent(text) {
  if (!text) return '';
  return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function toggleSolution() {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (state.showSolutions) {
    elements.solutionContainer.style.display = 'none';
    elements.solutionText.innerHTML = '';
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Göster' : 'Show Solution';
    state.showSolutions = false;
  } else {
    elements.solutionContainer.style.display = 'block';
    elements.solutionText.innerHTML = formatContent(q.solution[state.currentLang] || q.solution.en);
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Gizle' : 'Hide';
    state.showSolutions = true;
    triggerKaTeX(elements.solutionContainer);
  }
}

// TTS MANTIĞI - DAİMA TÜRKÇE
let isPaused = false;

function handleSpeak(text, type) {
  const synth = window.speechSynthesis;

  if (synth.speaking && state.speakingType === type) {
    if (isPaused) { synth.resume(); isPaused = false; }
    else { synth.pause(); isPaused = true; }
    updateAudioButtons();
    return;
  }

  stopSpeaking();
  state.speakingType = type;
  isPaused = false;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'tr-TR'; // DAİMA TÜRKÇE
  utterance.rate = 0.95;
  
  const voices = synth.getVoices();
  const turkishVoice = voices.find(v => v.lang.includes('tr-TR') || v.lang.includes('tr_TR'));
  if (turkishVoice) utterance.voice = turkishVoice;

  utterance.onstart = () => updateAudioButtons();
  utterance.onpause = () => updateAudioButtons();
  utterance.onresume = () => updateAudioButtons();
  utterance.onend = () => { state.speakingType = null; isPaused = false; updateAudioButtons(); };

  synth.speak(utterance);
}

function stopSpeaking() {
  window.speechSynthesis.cancel();
  state.speakingType = null;
  isPaused = false;
  updateAudioButtons();
}

function updateAudioButtons() {
  if (elements.hoporlorBtn) {
    if (state.speakingType === 'question') {
      elements.hoporlorBtn.textContent = isPaused ? (state.currentLang === 'tr' ? '▶ Devam' : '▶ Resume') : (state.currentLang === 'tr' ? '⏸ Dur' : '⏸ Pause');
      elements.hoporlorBtn.classList.toggle('playing', !isPaused);
    } else {
      elements.hoporlorBtn.textContent = state.currentLang === 'tr' ? '🎧 Dinle' : '🎧 Listen';
      elements.hoporlorBtn.classList.remove('playing');
    }
  }
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

// Diğer standart fonksiyonlar (next, prev, stats vb.)
function selectAnswer(index) {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (state.answers[q.id]) return;
  const isCorrect = index === q.correct;
  state.answers[q.id] = { selected: index, correct: isCorrect };
  if (isCorrect) { state.correct++; state.score += 5; } else state.wrong++;
  renderQuestion();
}

function nextQuestion() { stopSpeaking(); if (state.currentQuestion < getFilteredQuestions().length - 1) { state.currentQuestion++; renderQuestion(); } }
function prevQuestion() { stopSpeaking(); if (state.currentQuestion > 0) { state.currentQuestion--; renderQuestion(); } }
function goToQuestion(index) { state.currentQuestion = index; renderQuestion(); }
function updateStats() { elements.scoreDisplay.textContent = state.score; elements.correctCount.textContent = state.correct; elements.wrongCount.textContent = state.wrong; }
function getExerciseLabel(ex) { 
  const labels = { 
    ex1: state.currentLang === 'tr' ? 'Boyutsal Analiz' : 'Dimensional Analysis',
    ex2: state.currentLang === 'tr' ? 'Model Teorisi' : 'Model Theory',
    ex3: state.currentLang === 'tr' ? 'Kapalı Borular' : 'Closed Conduit'
  };
  return labels[ex] || ex;
}

function updateButtonTexts() {
  elements.prevBtn.textContent = state.currentLang === 'tr' ? '← Önceki' : '← Previous';
  elements.nextNavBtn.textContent = state.currentLang === 'tr' ? 'Sonraki →' : 'Next →';
}

function updateFilterTabTexts() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    const filter = btn.dataset.filter;
    const lang = state.currentLang;
    if (filter === 'all') btn.textContent = lang === 'tr' ? 'Tümü' : 'All';
    else if (filter === 'ex1') btn.textContent = lang === 'tr' ? 'Soru I: Boyutsal' : 'Ex I: Dimensional';
    else if (filter === 'ex2') btn.textContent = lang === 'tr' ? 'Soru II: Model' : 'Ex II: Model';
    else if (filter === 'ex3') btn.textContent = lang === 'tr' ? 'Soru III: Boru' : 'Ex III: Pipe';
  });
}

function updateStarButton(questionId) {
  if (!elements.starBtn) return;
  const isStarred = state.starred.includes(questionId);
  elements.starBtn.textContent = isStarred ? '★' : '☆';
  elements.starBtn.classList.toggle('starred', isStarred);
}

function toggleStar() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  if (!question) return;
  
  const idx = state.starred.indexOf(question.id);
  if (idx > -1) {
    state.starred.splice(idx, 1);
  } else {
    state.starred.push(question.id);
  }
  
  localStorage.setItem('starredQuestions', JSON.stringify(state.starred));
  updateStarButton(question.id);
  updateStarredCount();
  createDots();
  renderQuestion();
}

function updateStarredCount() {
  const countEl = document.getElementById('starredCount');
  if (countEl) {
    countEl.textContent = state.starred.length;
  }
}

function openStarredModal() {
  const modal = document.getElementById('starredModal');
  const list = document.getElementById('starredList');
  
  if (!modal || !list) return;
  
  if (state.starred.length === 0) {
    list.innerHTML = `<div class="starred-empty">Henüz yıldızlanmış soru yok.<br>☆ butonuna tıklayarak soru ekleyin.</div>`;
  } else {
    const starredQuestions = questions.filter(q => state.starred.includes(q.id));
    list.innerHTML = starredQuestions.map(q => {
      const lang = state.currentLang;
      const text = q.question[lang] || q.question.en;
      const shortText = text.length > 80 ? text.substring(0, 80) + '...' : text;
      return `
        <div class="starred-item" data-id="${q.id}">
          <div class="starred-item-header">
            <span class="starred-item-id">Q${q.id}</span>
            <span class="starred-item-exercise">${getExerciseLabel(q.exercise)}</span>
          </div>
          <div class="starred-item-text">${shortText}</div>
        </div>
      `;
    }).join('');
    
    list.querySelectorAll('.starred-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id);
        const idx = questions.findIndex(q => q.id === id);
        if (idx > -1) {
          state.filter = 'all';
          state.currentQuestion = idx;
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === 'all');
          });
          closeStarredModal();
          renderQuestion();
        }
      });
    });
  }
  
  modal.classList.add('active');
}

function closeStarredModal() {
  const modal = document.getElementById('starredModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function setupEventListeners() {
  elements.prevBtn.addEventListener('click', prevQuestion);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.nextNavBtn.addEventListener('click', nextQuestion);
  elements.showSolutionBtn.addEventListener('click', toggleSolution);
  elements.langToggle.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentLang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderQuestion();
    });
  });
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      state.currentQuestion = 0;
      renderQuestion();
    });
  });
  if (elements.hoporlorBtn) {
    elements.hoporlorBtn.addEventListener('click', () => {
      const q = getFilteredQuestions()[state.currentQuestion];
      const text = q.narration?.tr || q.question.tr;
      handleSpeak(text, 'question');
    });
  }
  if (elements.audioBtn) {
    elements.audioBtn.addEventListener('click', () => {
      const q = getFilteredQuestions()[state.currentQuestion];
      const text = q.solution.tr || q.solution.en;
      handleSpeak(text, 'solution');
    });
  }
  if (elements.starBtn) {
    elements.starBtn.addEventListener('click', toggleStar);
  }
  
  const starredModalBtn = document.getElementById('starredModalBtn');
  const closeStarredModalBtn = document.getElementById('closeStarredModal');
  const starredModal = document.getElementById('starredModal');
  
  if (starredModalBtn) {
    starredModalBtn.addEventListener('click', openStarredModal);
  }
  if (closeStarredModalBtn) {
    closeStarredModalBtn.addEventListener('click', closeStarredModal);
  }
  if (starredModal) {
    starredModal.addEventListener('click', (e) => {
      if (e.target === starredModal) closeStarredModal();
    });
  }
  
  updateStarredCount();
}

document.addEventListener('DOMContentLoaded', init);

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
    if (yaverCalc.classList.contains('active')) calcDisplay.focus();
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

// Sil
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
