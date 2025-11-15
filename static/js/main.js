document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener('scroll', () => {
  document
    .querySelector('.navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

// Reveal animations for project rows using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.project-row');
  if (!('IntersectionObserver' in window) || rows.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  rows.forEach(row => observer.observe(row));
});

// Generic reveal-on-scroll for elements with [data-reveal]
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length === 0 || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-inview', '');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  revealEls.forEach(el => io.observe(el));
});

// Flip cards on click (not hover) with a visual cue
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.flip-card');
  cards.forEach(card => {
    // Accessibility: toggle with Enter/Space
    card.setAttribute('tabindex', '0');
    const toggle = () => card.classList.toggle('is-flipped');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});