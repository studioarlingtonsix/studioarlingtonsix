// ===== Header background change on scroll =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Smooth scroll for internal anchors =====
document.querySelectorAll('header nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href.startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// ===== Hero parallax effect =====
const hero = document.querySelector('#hero');
window.addEventListener('scroll', () => {
  if (hero) {
    hero.style.backgroundPosition = `center ${-window.scrollY * 0.3}px`;
  }
});