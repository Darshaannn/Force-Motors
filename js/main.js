// ==========================================================================
// MAIN GLOBAL JAVASCRIPT
// Header scroll shrink, Mobile nav drawer focus-trap, SVG route lines
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initRouteLineAnimation();
  setActiveNavLink();
});

/* Header Scroll Behavior */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Mobile Navigation Toggle & Drawer Focus Trap */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = toggleBtn.classList.contains('open');
    if (isOpen) {
      closeMobileDrawer(toggleBtn, drawer);
    } else {
      openMobileDrawer(toggleBtn, drawer);
    }
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMobileDrawer(toggleBtn, drawer);
    }
  });
}

function openMobileDrawer(toggleBtn, drawer) {
  toggleBtn.classList.add('open');
  toggleBtn.setAttribute('aria-expanded', 'true');
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileDrawer(toggleBtn, drawer) {
  toggleBtn.classList.remove('open');
  toggleBtn.setAttribute('aria-expanded', 'false');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

/* Route Line Scroll Dash Offset Animation */
function initRouteLineAnimation() {
  const routePaths = document.querySelectorAll('.route-line-path');
  if (routePaths.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.2 });

  routePaths.forEach(path => observer.observe(path));
}

/* Active Nav Link Highlighter */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
