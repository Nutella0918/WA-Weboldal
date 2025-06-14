// Show/hide back to top button and center SVG arrow
window.addEventListener('scroll', function() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  if (window.scrollY > 200) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});

// Smooth scroll to top
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Enhance all anchor links with smooth scroll (except external)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Keyboard accessibility for back to top
  if (btn) {
    btn.tabIndex = 0;
    btn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});
