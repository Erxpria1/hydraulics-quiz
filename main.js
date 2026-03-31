const state = {
  currentQuestion: 0,
  answers: {},
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
  audioBtn: document.getElementById('audioBtn')
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
  
  elements.questionNumber.textContent = `Q${question.id}`;
  elements.questionExercise.textContent = getExerciseLabel(question.exercise);
  elements.questionText.innerHTML = formatContent(question.question[state.currentLang] || question.question.en);
  
  elements.optionsContainer.innerHTML = '';
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
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözüm' : 'Solution';
    state.showSolutions = false;
  }
  
  elements.prevBtn.disabled = state.currentQuestion === 0;
  elements.nextNavBtn.disabled = state.currentQuestion === filtered.length - 1;
  
  updateStats();
  createDots();
  triggerKaTeX();
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

function formatContent(text) {
  if (!text) return '';
  return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function toggleSolution() {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (state.showSolutions) {
    elements.solutionContainer.style.display = 'none';
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözüm' : 'Solution';
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
      elements.hoporlorBtn.innerHTML = isPaused ? '▶ DEVAM' : '⏸ DUR';
      elements.hoporlorBtn.classList.toggle('playing', !isPaused);
    } else {
      elements.hoporlorBtn.innerHTML = '🎧 DİNLE';
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
  const labels = { ex1: 'Boyutsal Analiz', ex2: 'Model Teorisi', ex3: 'Kapalı Borular' };
  return labels[ex] || ex;
}

function setupEventListeners() {
  elements.prevBtn.addEventListener('click', prevQuestion);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.showSolutionBtn.addEventListener('click', toggleSolution);
  elements.langToggle.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { state.currentLang = btn.dataset.lang; renderQuestion(); });
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
}

document.addEventListener('DOMContentLoaded', init);
