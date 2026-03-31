const state = {
  currentQuestion: 0,
  answers: {},
  starred: JSON.parse(localStorage.getItem('starredQuestions') || '[]'),
  filter: 'all',
  currentLang: 'en',
  showSolutions: false,
  speakingType: null,
  currentAudio: null,
  isPlaying: false,
  useLocalAudio: true,
  isAnimating: false,
  swipeStartX: 0,
  swipeStartY: 0,
  isSwiping: false,
  keyboardHintVisible: false,
  keyboardHintTimeout: null,
};

const elements = {
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
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
  starBtn: document.getElementById('starBtn'),
  questionCard: document.getElementById('questionCard'),
};

function getFilteredQuestions() {
  if (state.filter === 'all') return questions;
  return questions.filter(q => q.exercise === state.filter);
}

function init() {
  addSkipLink();
  addToastContainer();
  addKeyboardHint();
  addSwipeIndicators();
  createDots();
  renderQuestion(true);
  setupEventListeners();
  setupSwipeGestures();
  setupKeyboardShortcuts();
  showKeyboardHint();
}

function addSkipLink() {
  const skipLink = document.createElement('a');
  skipLink.href = '#questionCard';
  skipLink.className = 'skip-link';
  skipLink.textContent = state.currentLang === 'tr' ? 'Ana içeriğe atla' : 'Skip to main content';
  skipLink.setAttribute('aria-label', state.currentLang === 'tr' ? 'Ana içeriğe atla' : 'Skip to main content');
  document.body.prepend(skipLink);
}

function addToastContainer() {
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }
}

function addKeyboardHint() {
  if (!document.getElementById('keyboardHint')) {
    const hint = document.createElement('div');
    hint.id = 'keyboardHint';
    hint.className = 'keyboard-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML = `
      <kbd><span>←</span> ${state.currentLang === 'tr' ? 'Önceki' : 'Previous'}</kbd>
      <kbd><span>→</span> ${state.currentLang === 'tr' ? 'Sonraki' : 'Next'}</kbd>
      <kbd><span>S</span> ${state.currentLang === 'tr' ? 'Çözüm' : 'Solution'}</kbd>
      <kbd><span>?</span> ${state.currentLang === 'tr' ? 'Yardım' : 'Help'}</kbd>
    `;
    document.body.appendChild(hint);
  }
}

function addSwipeIndicators() {
  const card = elements.questionCard;
  if (!card) return;
  ['left', 'right'].forEach(dir => {
    if (!card.querySelector(`.swipe-indicator.${dir}`)) {
      const indicator = document.createElement('div');
      indicator.className = `swipe-indicator ${dir}`;
      indicator.textContent = dir === 'left' ? '←' : '→';
      indicator.setAttribute('aria-hidden', 'true');
      card.appendChild(indicator);
    }
  });
}

function showKeyboardHint() {
  const hint = document.getElementById('keyboardHint');
  if (!hint) return;
  state.keyboardHintVisible = true;
  hint.classList.add('visible');
  clearTimeout(state.keyboardHintTimeout);
  state.keyboardHintTimeout = setTimeout(() => {
    hint.classList.remove('visible');
    state.keyboardHintVisible = false;
  }, 5000);
}

function toggleKeyboardHint() {
  const hint = document.getElementById('keyboardHint');
  if (!hint) return;
  if (state.keyboardHintVisible) {
    hint.classList.remove('visible');
    state.keyboardHintVisible = false;
  } else {
    hint.classList.add('visible');
    state.keyboardHintVisible = true;
    clearTimeout(state.keyboardHintTimeout);
    state.keyboardHintTimeout = setTimeout(() => {
      hint.classList.remove('visible');
      state.keyboardHintVisible = false;
    }, 5000);
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');

  const icons = { correct: '✓', wrong: '✗', info: 'ℹ' };
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

function showConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#8b5cf6', '#10b981', '#f43f5e', '#fbbf24', '#06b6d4', '#f97316'];
  const shapes = ['circle', 'square', 'triangle'];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = color;
    confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    confetti.style.width = `${6 + Math.random() * 8}px`;
    confetti.style.height = confetti.style.width;

    if (shape === 'circle') confetti.style.borderRadius = '50%';
    else if (shape === 'triangle') {
      confetti.style.backgroundColor = 'transparent';
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = '6px solid transparent';
      confetti.style.borderRight = '6px solid transparent';
      confetti.style.borderBottom = `12px solid ${color}`;
    }

    container.appendChild(confetti);
  }

  setTimeout(() => container.remove(), 6000);
}

function createDots() {
  const filtered = getFilteredQuestions();
  elements.questionDots.innerHTML = '';
  filtered.forEach((q, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `${state.currentLang === 'tr' ? 'Soru' : 'Question'} ${index + 1}`);
    dot.setAttribute('tabindex', '0');
    if (state.answers[q.id]?.correct) dot.classList.add('correct');
    else if (state.answers[q.id]?.correct === false) dot.classList.add('wrong');
    if (index === state.currentQuestion) dot.classList.add('active');
    dot.addEventListener('click', () => { stopSpeaking(); goToQuestion(index); });
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        stopSpeaking();
        goToQuestion(index);
      }
    });
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

function renderQuestion(skipAnimation = false) {
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
  createDots();
  triggerKaTeX();
  updateButtonTexts();
  updateFilterTabTexts();

  elements.questionCard.setAttribute('aria-label', `${state.currentLang === 'tr' ? 'Soru' : 'Question'} ${state.currentQuestion + 1}`);

  const allAnswered = filtered.length > 0 && filtered.every(q => state.answers[q.id]?.correct);
  if (allAnswered && filtered.length > 1) {
    showConfetti();
    showToast(
      state.currentLang === 'tr' ? 'Tüm soruları doğru bildiniz! 🎉' : 'All questions correct! 🎉',
      'correct'
    );
  }
}

function animateQuestion(direction, callback) {
  if (state.isAnimating) return;
  state.isAnimating = true;
  const card = elements.questionCard;
  const exitClass = direction === 'next' ? 'slide-left-exit' : 'slide-right-exit';
  const enterClass = direction === 'next' ? 'slide-left-enter' : 'slide-right-enter';

  card.classList.add(exitClass);

  setTimeout(() => {
    card.classList.remove(exitClass);
    callback();
    card.classList.add(enterClass);

    card.addEventListener('animationend', () => {
      card.classList.remove(enterClass);
      state.isAnimating = false;
    }, { once: true });
  }, 250);
}

function renderMultipleChoice(question) {
  const options = question.options[state.currentLang] || question.options.en;
  const isAnswered = state.answers[question.id] !== undefined;
  
  options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    if (isAnswered) {
      btn.classList.add('disabled');
      btn.setAttribute('aria-disabled', 'true');
      if (index === question.correct) {
        btn.classList.add('correct');
        btn.setAttribute('aria-checked', 'true');
      }
      else if (index === state.answers[question.id].selected) {
        btn.classList.add('wrong');
        btn.setAttribute('aria-checked', 'true');
      }
    }
    btn.innerHTML = `<span class="option-label">${String.fromCharCode(65 + index)}</span><span class="option-text">${formatContent(option)}</span>`;
    if (!isAnswered) {
      btn.addEventListener('click', () => selectAnswer(index));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectAnswer(index);
        }
      });
    }
    elements.optionsContainer.appendChild(btn);
  });
}

function renderNumeric(question) {
  elements.numericAnswer.style.display = 'flex';
  elements.unitDisplay.textContent = question.unit || '';
  elements.numericInput.value = '';
  elements.numericInput.focus();
  elements.numericInput.setAttribute('aria-label', state.currentLang === 'tr' ? 'Cevabınızı girin' : 'Enter your answer');
  
  elements.numericInput.onkeydown = (e) => {
    if (e.key === 'Enter') checkNumericAnswer();
  };
  
  elements.checkNumeric.onclick = checkNumericAnswer;
}

function checkNumericAnswer() {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (state.answers[q.id]) return;
  
  const userAnswer = parseFloat(elements.numericInput.value);
  if (isNaN(userAnswer)) {
    showToast(state.currentLang === 'tr' ? 'Lütfen geçerli bir sayı girin' : 'Please enter a valid number', 'info');
    return;
  }
  
  const tolerance = q.tolerance || 0.01;
  const correctAnswer = q.answer;
  const isCorrect = Math.abs(userAnswer - correctAnswer) <= Math.abs(correctAnswer * tolerance);
  
  state.answers[q.id] = { selected: userAnswer, correct: isCorrect };
  
  if (isCorrect) {
    showToast(state.currentLang === 'tr' ? 'Doğru! Harika iş!' : 'Correct! Great job!', 'correct');
  } else {
    showToast(
      state.currentLang === 'tr' ? `Yanlış! Doğru cevap: ${correctAnswer}` : `Wrong! Correct answer: ${correctAnswer}`,
      'wrong'
    );
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

let isPaused = false;

function playLocalAudio(audioPath, type) {
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio = null;
  }
  
  state.currentAudio = new Audio(audioPath);
  state.speakingType = type;
  state.isPlaying = true;
  
  state.currentAudio.onplay = () => updateAudioButtons();
  state.currentAudio.onpause = () => { isPaused = true; updateAudioButtons(); };
  state.currentAudio.onended = () => { 
    state.speakingType = null; 
    state.isPlaying = false; 
    isPaused = false; 
    state.currentAudio = null;
    updateAudioButtons(); 
  };
  
  state.currentAudio.play().catch(err => {
    console.warn('Audio playback failed:', err);
    state.useLocalAudio = false;
    handleSpeak(getCurrentText(type), type);
  });
}

function handleSpeak(text, type) {
  if (state.useLocalAudio) {
    const q = getFilteredQuestions()[state.currentQuestion];
    const audioType = type === 'question' ? 'narration' : 'solution';
    const audioPath = `audio/q${q.id}_${audioType}.mp3`;
    
    playLocalAudio(audioPath, type);
    return;
  }
  
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
  utterance.lang = 'tr-TR';
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

function getCurrentText(type) {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (type === 'question') {
    return q.narration?.tr || q.question.tr;
  } else {
    return q.solution.tr || q.solution.en;
  }
}

function stopSpeaking() {
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio = null;
  }
  window.speechSynthesis.cancel();
  state.speakingType = null;
  state.isPlaying = false;
  isPaused = false;
  updateAudioButtons();
}

function updateAudioButtons() {
  if (elements.hoporlorBtn) {
    if (state.speakingType === 'question') {
      if (state.useLocalAudio) {
        elements.hoporlorBtn.textContent = state.isPlaying ? (state.currentLang === 'tr' ? '⏸ Dur' : '⏸ Pause') : (state.currentLang === 'tr' ? '▶ Devam' : '▶ Resume');
      } else {
        elements.hoporlorBtn.textContent = isPaused ? (state.currentLang === 'tr' ? '▶ Devam' : '▶ Resume') : (state.currentLang === 'tr' ? '⏸ Dur' : '⏸ Pause');
      }
      elements.hoporlorBtn.classList.toggle('playing', state.isPlaying);
    } else {
      elements.hoporlorBtn.textContent = state.currentLang === 'tr' ? '🎧 Dinle' : '🎧 Listen';
      elements.hoporlorBtn.classList.remove('playing');
    }
  }
  if (elements.audioBtn) {
    if (state.speakingType === 'solution' && state.useLocalAudio) {
      elements.audioBtn.innerHTML = state.isPlaying ? '⏸' : '▶';
      elements.audioBtn.classList.toggle('playing', state.isPlaying);
    } else if (state.speakingType === 'solution') {
      elements.audioBtn.innerHTML = isPaused ? '▶' : '⏸';
      elements.audioBtn.classList.toggle('playing', !isPaused);
    } else {
      elements.audioBtn.innerHTML = '🔊';
      elements.audioBtn.classList.remove('playing');
    }
  }
}

function selectAnswer(index) {
  const q = getFilteredQuestions()[state.currentQuestion];
  if (state.answers[q.id]) return;
  const isCorrect = index === q.correct;
  state.answers[q.id] = { selected: index, correct: isCorrect };
  
  if (isCorrect) {
    showToast(state.currentLang === 'tr' ? 'Doğru! Harika iş!' : 'Correct! Great job!', 'correct');
  } else {
    showToast(
      state.currentLang === 'tr' ? `Yanlış! Doğru cevap: ${q.options[state.currentLang][q.correct]}` : `Wrong! Correct: ${q.options.en[q.correct]}`,
      'wrong'
    );
  }
  
  renderQuestion();
}

function nextQuestion() {
  stopSpeaking();
  const filtered = getFilteredQuestions();
  if (state.currentQuestion < filtered.length - 1) {
    animateQuestion('next', () => {
      state.currentQuestion++;
      renderQuestion();
    });
  }
}

function prevQuestion() {
  stopSpeaking();
  if (state.currentQuestion > 0) {
    animateQuestion('prev', () => {
      state.currentQuestion--;
      renderQuestion();
    });
  }
}

function goToQuestion(index) {
  const direction = index > state.currentQuestion ? 'next' : 'prev';
  animateQuestion(direction, () => {
    state.currentQuestion = index;
    renderQuestion();
  });
}

function getExerciseLabel(ex) { 
  const labels = { 
    ex1: 'Exercise 1',
    ex2: 'Exercise 2',
    ex3: 'Exercise 3'
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
    else if (filter === 'ex1') btn.textContent = lang === 'tr' ? 'Egzersiz 1' : 'Exercise 1';
    else if (filter === 'ex2') btn.textContent = lang === 'tr' ? 'Egzersiz 2' : 'Exercise 2';
    else if (filter === 'ex3') btn.textContent = lang === 'tr' ? 'Egzersiz 3' : 'Exercise 3';
  });
}

function updateStarButton(questionId) {
  if (!elements.starBtn) return;
  const isStarred = state.starred.includes(questionId);
  elements.starBtn.textContent = isStarred ? '★' : '☆';
  elements.starBtn.classList.toggle('starred', isStarred);
  elements.starBtn.setAttribute('aria-label', isStarred 
    ? (state.currentLang === 'tr' ? 'Yıldızı kaldır' : 'Remove star')
    : (state.currentLang === 'tr' ? 'Yıldızla' : 'Star question')
  );
}

function toggleStar() {
  const filtered = getFilteredQuestions();
  const question = filtered[state.currentQuestion];
  if (!question) return;
  
  const idx = state.starred.indexOf(question.id);
  if (idx > -1) {
    state.starred.splice(idx, 1);
    showToast(state.currentLang === 'tr' ? 'Yıldız kaldırıldı' : 'Star removed', 'info');
  } else {
    state.starred.push(question.id);
    showToast(state.currentLang === 'tr' ? 'Yıldız eklendi ★' : 'Star added ★', 'info');
  }
  
  localStorage.setItem('starredQuestions', JSON.stringify(state.starred));
  updateStarButton(question.id);
  updateStarredCount();
  createDots();
  renderQuestion();
}

function updateStarredCount() {
  const badge = document.getElementById('headerStarBadge');
  if (badge) {
    badge.textContent = state.starred.length;
    badge.style.display = state.starred.length > 0 ? 'flex' : 'none';
  }
}

function openStarredModal() {
  const modal = document.getElementById('starredModal');
  const list = document.getElementById('starredList');
  
  if (!modal || !list) return;
  
  if (state.starred.length === 0) {
    list.innerHTML = `<div class="starred-empty">${state.currentLang === 'tr' ? 'Henüz yıldızlanmış soru yok.<br>☆ butonuna tıklayarak soru ekleyin.' : 'No starred questions yet.<br>Click the ☆ button to add questions.'}</div>`;
  } else {
    const starredQuestions = questions.filter(q => state.starred.includes(q.id));
    list.innerHTML = starredQuestions.map(q => {
      const lang = state.currentLang;
      const text = q.question[lang] || q.question.en;
      const shortText = text.length > 80 ? text.substring(0, 80) + '...' : text;
      return `
        <div class="starred-item" data-id="${q.id}" role="button" tabindex="0" aria-label="${state.currentLang === 'tr' ? 'Soru' : 'Question'} ${q.id}">
          <div class="starred-item-header">
            <span class="starred-item-id">Q${q.id}</span>
            <span class="starred-item-exercise">${getExerciseLabel(q.exercise)}</span>
          </div>
          <div class="starred-item-text">${shortText}</div>
        </div>
      `;
    }).join('');
    
    list.querySelectorAll('.starred-item').forEach(item => {
      const handler = () => {
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
      };
      item.addEventListener('click', handler);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler();
        }
      });
    });
  }
  
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  const closeBtn = document.getElementById('closeStarredModal');
  if (closeBtn) closeBtn.focus();
}

function closeStarredModal() {
  const modal = document.getElementById('starredModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function setupSwipeGestures() {
  const card = elements.questionCard;
  if (!card) return;

  card.addEventListener('touchstart', (e) => {
    state.swipeStartX = e.touches[0].clientX;
    state.swipeStartY = e.touches[0].clientY;
    state.isSwiping = true;
  }, { passive: true });

  card.addEventListener('touchmove', (e) => {
    if (!state.isSwiping) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - state.swipeStartX;
    const leftIndicator = card.querySelector('.swipe-indicator.left');
    const rightIndicator = card.querySelector('.swipe-indicator.right');

    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        rightIndicator?.classList.add('visible');
        leftIndicator?.classList.remove('visible');
      } else {
        leftIndicator?.classList.add('visible');
        rightIndicator?.classList.remove('visible');
      }
    }
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    if (!state.isSwiping) return;
    state.isSwiping = false;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - state.swipeStartX;
    const threshold = 60;

    card.querySelectorAll('.swipe-indicator').forEach(el => el.classList.remove('visible'));

    if (Math.abs(diff) > threshold) {
      if (diff > 0) prevQuestion();
      else nextQuestion();
    }
  }, { passive: true });
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (yaverCalc?.classList.contains('active')) {
      if (e.key === 'Enter') yaverCalcEquals?.click();
      else if (e.key === 'Escape') { yaverCalc.classList.remove('active'); yaverCalcToggle?.classList.add('show'); }
      else if (e.key === 'Backspace') { calcValue = calcValue.slice(0, -1); calcDisplay.value = calcValue; }
      return;
    }

    const modal = document.getElementById('starredModal');
    if (modal?.classList.contains('active')) {
      if (e.key === 'Escape') closeStarredModal();
      return;
    }

    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prevQuestion();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextQuestion();
        break;
      case 's':
      case 'S':
        e.preventDefault();
        toggleSolution();
        break;
      case 'h':
      case 'H':
      case '?':
        e.preventDefault();
        toggleKeyboardHint();
        break;
      case 'Escape':
        stopSpeaking();
        break;
    }
  });
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
      updateKeyboardHint();
    });
  });
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--ripple-x', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--ripple-y', `${e.clientY - rect.top}px`);
      btn.classList.add('ripple');
      setTimeout(() => btn.classList.remove('ripple'), 500);
      state.filter = btn.dataset.filter;
      state.currentQuestion = 0;
      renderQuestion();
    });
  });
  if (elements.hoporlorBtn) {
    elements.hoporlorBtn.addEventListener('click', () => {
      if (state.currentAudio) {
        if (state.isPlaying) {
          state.currentAudio.pause();
          state.isPlaying = false;
          isPaused = true;
        } else {
          state.currentAudio.play();
          state.isPlaying = true;
          isPaused = false;
        }
        updateAudioButtons();
      } else {
        const q = getFilteredQuestions()[state.currentQuestion];
        const text = q.narration?.tr || q.question.tr;
        handleSpeak(text, 'question');
      }
    });
  }
  if (elements.audioBtn) {
    elements.audioBtn.addEventListener('click', () => {
      if (state.currentAudio) {
        if (state.isPlaying) {
          state.currentAudio.pause();
          state.isPlaying = false;
          isPaused = true;
        } else {
          state.currentAudio.play();
          state.isPlaying = true;
          isPaused = false;
        }
        updateAudioButtons();
      } else {
        const q = getFilteredQuestions()[state.currentQuestion];
        const text = q.solution.tr || q.solution.en;
        handleSpeak(text, 'solution');
      }
    });
  }
  if (elements.starBtn) {
    elements.starBtn.addEventListener('click', toggleStar);
  }
  
  const headerStarBtn = document.getElementById('headerStarBtn');
  const closeStarredModalBtn = document.getElementById('closeStarredModal');
  const starredModal = document.getElementById('starredModal');
  
  if (headerStarBtn) {
    headerStarBtn.addEventListener('click', openStarredModal);
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

function updateKeyboardHint() {
  const hint = document.getElementById('keyboardHint');
  if (!hint) return;
  hint.innerHTML = `
    <kbd><span>←</span> ${state.currentLang === 'tr' ? 'Önceki' : 'Previous'}</kbd>
    <kbd><span>→</span> ${state.currentLang === 'tr' ? 'Sonraki' : 'Next'}</kbd>
    <kbd><span>S</span> ${state.currentLang === 'tr' ? 'Çözüm' : 'Solution'}</kbd>
    <kbd><span>?</span> ${state.currentLang === 'tr' ? 'Yardım' : 'Help'}</kbd>
  `;
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

document.querySelectorAll('.yaver-btn-num').forEach(btn => {
  btn.addEventListener('click', () => {
    if (calcLastWasResult && !isNaN(btn.dataset.val)) { calcValue = ''; calcLastWasResult = false; }
    calcValue += btn.dataset.val;
    calcDisplay.value = calcValue;
    calcHistory.textContent = '';
  });
});

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

document.querySelectorAll('.yaver-btn-op').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!calcValue && calcDisplay.value) calcValue = calcDisplay.value;
    calcValue += btn.dataset.val;
    calcDisplay.value = calcValue;
    calcLastWasResult = false;
    calcHistory.textContent = '';
  });
});

const yaverCalcClear = document.getElementById('calcClear');
if (yaverCalcClear) yaverCalcClear.addEventListener('click', () => {
  calcValue = ''; calcDisplay.value = ''; calcLastWasResult = false; calcHistory.textContent = '';
});

const calcDel = document.getElementById('calcDel');
if (calcDel) calcDel.addEventListener('click', () => {
  calcValue = calcValue.slice(0, -1);
  calcDisplay.value = calcValue;
});

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

document.querySelectorAll('.yaver-btn-percent').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = parseFloat(calcValue) || 0;
    calcDisplay.value = val / 100;
    calcValue = (val / 100).toString();
    calcLastWasResult = true;
  });
});
