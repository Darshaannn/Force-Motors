// ==========================================================================
// MAIN GLOBAL JAVASCRIPT
// Header scroll shrink, Mobile nav drawer focus-trap, SVG route lines
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initRouteLineAnimation();
  setActiveNavLink();
  initJuryMobileSlider();
  initPartnersMobileSlider();
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

/* Jury Mobile Section Slider with Auto-slide & Drag */
function initJuryMobileSlider() {
  const juryGrid = document.querySelector('.home-jury-grid');
  if (!juryGrid) return;

  let isUserInteracting = false;
  let resumeTimeout = null;

  function autoStep() {
    if (window.innerWidth > 768) return;
    if (!isUserInteracting) {
      if (juryGrid.scrollLeft + juryGrid.clientWidth >= juryGrid.scrollWidth - 4) {
        juryGrid.scrollLeft = 0;
      } else {
        juryGrid.scrollLeft += 1;
      }
    }
  }

  setInterval(autoStep, 30);

  function handleInteraction() {
    isUserInteracting = true;
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 3000);
  }

  juryGrid.addEventListener('touchstart', handleInteraction, { passive: true });
  juryGrid.addEventListener('touchmove', handleInteraction, { passive: true });
  juryGrid.addEventListener('mousedown', handleInteraction);
  juryGrid.addEventListener('scroll', handleInteraction, { passive: true });

  const prevBtn = document.querySelector('.jury-slider-controls .prev-btn');
  const nextBtn = document.querySelector('.jury-slider-controls .next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      handleInteraction();
      juryGrid.scrollBy({ left: -260, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      handleInteraction();
      juryGrid.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }
}

/* Partners Mobile Section Slider with Auto-slide & Drag */
function initPartnersMobileSlider() {
  const partnersGrid = document.querySelector('.partners-grid');
  if (!partnersGrid) return;

  let isUserInteracting = false;
  let resumeTimeout = null;

  function autoStep() {
    if (window.innerWidth > 768) return;
    if (!isUserInteracting) {
      if (partnersGrid.scrollLeft + partnersGrid.clientWidth >= partnersGrid.scrollWidth - 4) {
        partnersGrid.scrollLeft = 0;
      } else {
        partnersGrid.scrollLeft += 1;
      }
    }
  }

  setInterval(autoStep, 30);

  function handleInteraction() {
    isUserInteracting = true;
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      isUserInteracting = false;
    }, 3000);
  }

  partnersGrid.addEventListener('touchstart', handleInteraction, { passive: true });
  partnersGrid.addEventListener('touchmove', handleInteraction, { passive: true });
  partnersGrid.addEventListener('mousedown', handleInteraction);
  partnersGrid.addEventListener('scroll', handleInteraction, { passive: true });

  const prevBtn = document.querySelector('.partners-slider-controls .prev-btn');
  const nextBtn = document.querySelector('.partners-slider-controls .next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      handleInteraction();
      partnersGrid.scrollBy({ left: -240, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      handleInteraction();
      partnersGrid.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }
}
