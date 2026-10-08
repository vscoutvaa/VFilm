/* ====================================================
   VFilm: Prototype JS
   Login modal, carousels, vote system, waitlist, toast
   ==================================================== */

/* ---------- TOAST ---------- */
function showNotice(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.transform = 'translateX(-50%) translateY(0)';
  t.style.opacity = '1';
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    t.style.transform = 'translateX(-50%) translateY(100px)';
    t.style.opacity = '0';
  }, 3000);
}

/* ---------- LOGIN MODAL ---------- */
function openLogin() {
  const m = document.getElementById('loginModal');
  if (m) m.classList.add('open');
}
function closeLogin() {
  const m = document.getElementById('loginModal');
  if (m) m.classList.remove('open');
}
function handleLogin(e) {
  e.preventDefault();
  closeLogin();
  showNotice("Prototype: real auth lives in Phase 2 (Supabase). No backend wired yet.");
}

/* ---------- FEEDBACK MODAL ---------- */
function openFeedback(e) {
  if (e) e.preventDefault();
  const m = document.getElementById('feedbackModal');
  if (m) m.classList.add('open');
}
function closeFeedback() {
  const m = document.getElementById('feedbackModal');
  if (m) m.classList.remove('open');
}
function handleFeedback(e) {
  e.preventDefault();
  closeFeedback();
  showNotice("Thanks. Feedback noted (front-end only for now).");
}

/* ---------- AI MATCH BUTTON GATE ---------- */
function handleAiMatch() {
  showNotice("You'll need a verified athlete account to unlock Mentor Match.");
}

/* ---------- WAITLIST ---------- */
function handleWaitlist(e) {
  e.preventDefault();
  const msg = document.getElementById('waitlistMsg');
  if (msg) msg.textContent = "You're on the list. We'll be in touch when verification opens.";
  e.target.reset();
}

/* ---------- SCROLL HELPERS ---------- */
function scrollToWaitlist(e) {
  if (e) e.preventDefault();
  const el = document.getElementById('subscribe');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ---------- CAROUSEL ---------- */
function initCarousel(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return null;
  const cards = track.children;
  let idx = 0;

  function goTo(i) {
    idx = (i + cards.length) % cards.length;
    track.scrollTo({ left: cards[idx].offsetLeft - track.offsetLeft, behavior: 'smooth' });
    document
      .querySelectorAll('[data-track="' + trackId + '"]')
      .forEach((d) => d.classList.toggle('active', parseInt(d.dataset.idx) === idx));
  }

  // Wire dots
  document
    .querySelectorAll('[data-track="' + trackId + '"]')
    .forEach((d) => d.addEventListener('click', () => goTo(parseInt(d.dataset.idx))));

  // Auto-rotate every 7s
  const auto = setInterval(() => goTo(idx + 1), 7000);

  return { goTo, stop: () => clearInterval(auto) };
}

/* ---------- VOTE SYSTEM ---------- */
function initVoting() {
  const buttons = document.querySelectorAll('.vote-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const dir = btn.dataset.dir;
      const countEl = btn.querySelector('.count');
      const pair = document.querySelectorAll(`.vote-btn[data-id="${id}"]`);

      // Toggle
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        countEl.textContent = parseInt(countEl.textContent) - 1;
      } else {
        // Clear other direction
        pair.forEach((p) => {
          if (p.classList.contains('active') && p !== btn) {
            p.classList.remove('active');
            const c = p.querySelector('.count');
            c.textContent = parseInt(c.textContent) - 1;
          }
        });
        btn.classList.add('active');
        countEl.textContent = parseInt(countEl.textContent) + 1;
      }
    });
  });
}

/* ---------- ESC TO CLOSE MODALS ---------- */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLogin();
    closeFeedback();
  }
});

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initCarousel('youngTrack');
  initCarousel('proTrack');
  initVoting();
});
