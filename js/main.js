// ── PLANNING GUIDE QUIZ LOGIC ──

function selectAnswer(btn) {
  const block = btn.closest('.question-block');
  block.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const nextBtn = document.getElementById('next-' + block.dataset.q);
  if (nextBtn) nextBtn.disabled = false;
}

function nextQuestion(n) {
  document.querySelectorAll('.question-block').forEach(b => b.classList.remove('active'));
  const next = document.querySelector('[data-q="' + n + '"]');
  if (next) next.classList.add('active');
  const pct = Math.round(((n - 1) / 8) * 100);
  const bar = document.getElementById('quiz-progress');
  if (bar) bar.style.width = pct + '%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevQuestion(n) {
  document.querySelectorAll('.question-block').forEach(b => b.classList.remove('active'));
  const prev = document.querySelector('[data-q="' + n + '"]');
  if (prev) prev.classList.add('active');
  const pct = Math.round(((n - 1) / 8) * 100);
  const bar = document.getElementById('quiz-progress');
  if (bar) bar.style.width = pct + '%';
}

function submitQuiz() {
  const fname = document.getElementById('fname') ? document.getElementById('fname').value.trim() : '';
  const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
  if (!fname || !phone) {
    alert('Please enter your name and phone number so we can reach you.');
    return;
  }
  document.querySelectorAll('.question-block').forEach(b => b.classList.remove('active'));
  const conf = document.querySelector('[data-q="9"]');
  if (conf) conf.classList.add('active');
  const bar = document.getElementById('quiz-progress');
  if (bar) bar.style.width = '100%';
}

// ── CONTACT FORM LOGIC ──

function submitContactForm() {
  const fname = document.getElementById('cfname') ? document.getElementById('cfname').value.trim() : '';
  const phone = document.getElementById('cphone') ? document.getElementById('cphone').value.trim() : '';
  if (!fname || !phone) {
    alert('Please enter your name and phone number so Jim can reach you.');
    return;
  }
  const form = document.getElementById('contact-form');
  const conf = document.getElementById('contact-confirmation');
  if (form) form.style.display = 'none';
  if (conf) { conf.classList.remove('conf-hidden'); conf.classList.add('conf-show'); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── HOME PAGE ──

function scrollToOptions() {
  const el = document.getElementById('options-anchor');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
