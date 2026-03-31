const state = {
  currentQuestion: 0,
  answers: {},
  score: 0,
  correct: 0,
  wrong: 0,
  filter: 'all',
  currentLang: 'en',
  showSolutions: false,
  isSpeaking: false,
  currentUtterance: null
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
    
    dot.addEventListener('click', () => goToQuestion(index));
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
  
  elements.questionText.textContent = question.question[state.currentLang] || question.question.en;
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
    elements.solutionText.innerHTML = formatSolution(question.solution[state.currentLang] || question.solution.en);
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
      <span class="option-text">${option}</span>
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

function toggleSolution() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  
  if (state.showSolutions) {
    elements.solutionContainer.style.display = 'none';
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Göster' : 'Show Solution';
    state.showSolutions = false;
  } else {
    elements.solutionContainer.style.display = 'block';
    elements.solutionText.innerHTML = formatSolution(question.solution[state.currentLang] || question.solution.en);
    elements.showSolutionBtn.textContent = state.currentLang === 'tr' ? 'Çözümü Gizle' : 'Hide Solution';
    state.showSolutions = true;
  }
}

function formatSolution(solution) {
  return solution.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function nextQuestion() {
  const filtered = getFilteredQuestions();
  if (state.currentQuestion < filtered.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  }
}

function prevQuestion() {
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
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      state.currentQuestion = 0;
      createDots();
      renderQuestion();
    });
  });
  
  if (elements.hoporlorBtn) {
    elements.hoporlorBtn.addEventListener('click', speakQuestion);
  }
  
  if (elements.audioBtn) {
    elements.audioBtn.addEventListener('click', speakSolution);
  }
}

function speakQuestion() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  if (!question) return;
  
  stopSpeaking();
  
  const narration = question.narration?.tr || question.solution?.tr || question.solution?.en;
  
  speak(narration);
}

function speakSolution() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  if (!question || state.answers[question.id] === undefined) return;
  
  stopSpeaking();
  
  const narration = question.narration?.tr || question.solution?.tr || question.solution?.en;
  
  speak(narration);
}

function generateQuestionNarrative(question, questionText) {
  const lang = state.currentLang;
  
  let narrative = questionText + '. ';
  
  if (question.type === 'multiple') {
    const options = question.options[lang] || question.options.en;
    const labels = lang === 'tr' ? ['Birinci şık', 'İkinci şık', 'Üçüncü şık', 'Dördüncü şık'] : ['Option A', 'Option B', 'Option C', 'Option D'];
    
    narrative += lang === 'tr' ? 'Seçenekler: ' : 'Options: ';
    options.forEach((opt, i) => {
      narrative += labels[i] + ': ' + opt + '. ';
    });
  } else if (question.type === 'numeric') {
    if (question.unit) {
      narrative += lang === 'tr' ? `Cevabınızı ${question.unit} biriminde giriniz.` : `Enter your answer in ${question.unit}.`;
    }
  }
  
  return narrative;
}

function generateSolutionNarrative(question, solutionText) {
  const lang = state.currentLang;
  
  let narrative = '';
  
  if (lang === 'tr') {
    narrative = 'Bu sorunun çözümünü anlatıyorum. ';
  } else {
    narrative = 'I will explain the solution to this question. ';
  }
  
  narrative += solutionText + '. ';
  
  if (question.type === 'multiple') {
    const options = question.options[lang] || question.options.en;
    const correctOption = options[question.correct];
    const labels = lang === 'tr' ? ['birinci şık', 'ikinci şık', 'üçüncü şık', 'dördüncü şık'] : ['option A', 'option B', 'option C', 'option D'];
    
    if (lang === 'tr') {
      narrative += `Doğru cevap ${labels[question.correct]} yani ${correctOption} seçeneğidir.`;
    } else {
      narrative += `The correct answer is ${labels[question.correct]}, which is ${correctOption}.`;
    }
  } else if (question.type === 'numeric') {
    if (lang === 'tr') {
      narrative += `Doğru cevap ${question.answer} ${question.unit || 'birim'}`;
    } else {
      narrative += `The correct answer is ${question.answer} ${question.unit || 'units'}`;
    }
  }
  
  return narrative;
}

function speak(text, lang = 'tr') {
  if (!('speechSynthesis' in window)) {
    alert('Tarayıcınız konuşma özelliklerini desteklemiyor.');
    return;
  }
  
  stopSpeaking();
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  utterance.lang = 'tr-TR';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  utterance.volume = 1;
  
  const voices = window.speechSynthesis.getVoices();
  const turkishVoice = voices.find(v => v.lang.startsWith('tr'));
  
  if (turkishVoice) {
    utterance.voice = turkishVoice;
  }
  
  utterance.onstart = () => {
    state.isSpeaking = true;
    updateAudioButtons();
  };
  
  utterance.onend = () => {
    state.isSpeaking = false;
    updateAudioButtons();
  };
  
  utterance.onerror = () => {
    state.isSpeaking = false;
    updateAudioButtons();
  };
  
  state.currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  state.isSpeaking = false;
  updateAudioButtons();
}

function updateAudioButtons() {
  const btnClass = state.isSpeaking ? 'add' : 'remove';
  
  if (elements.hoporlorBtn) {
    elements.hoporlorBtn.classList[btnClass]('playing');
  }
  if (elements.audioBtn) {
    elements.audioBtn.classList[btnClass]('playing');
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

document.addEventListener('DOMContentLoaded', init);
