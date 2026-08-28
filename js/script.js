/* ===================================================================
   Sameer Walke — Portfolio interactions
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Year in footer ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Theme toggle (persisted) ---- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('sw-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  };
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('sw-theme', next);
  });

  /* ---- Navbar shadow on scroll ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ---- Mobile menu ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---- Animate proficiency bars when visible ---- */
  const bars = document.querySelectorAll('.track i');
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = (el.dataset.level || 0) + '%';
        barObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(bar => barObserver.observe(bar));

  /* ---- Contact form (opens email client, no backend needed) ---- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  const RECIPIENT = 'sameerwalke9757@gmail.com';

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      // simple validation
      let valid = true;
      [['cf-name', name], ['cf-email', email], ['cf-subject', subject], ['cf-message', message]]
        .forEach(([id, val]) => {
          const el = document.getElementById(id);
          const bad = !val || (id === 'cf-email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
          el.classList.toggle('invalid', bad);
          if (bad) valid = false;
        });

      if (!valid) {
        note.textContent = 'Please fill in all fields with a valid email.';
        note.className = 'form-note err';
        return;
      }

      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
      const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailto;

      note.textContent = 'Opening your email app… if nothing happens, email me directly at ' + RECIPIENT;
      note.className = 'form-note ok';
      form.reset();
    });
  }

  /* ---- Active nav link highlight ---- */
  const sections = document.querySelectorAll('section[id]');
  const navA = document.querySelectorAll('.nav-links a');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navA.forEach(a => a.style.color = a.getAttribute('href') === '#' + id ? 'var(--primary)' : '');
      }
    });
  }, { threshold: 0.55 });
  sections.forEach(sec => spyObserver.observe(sec));

});
