// ==========================================================================
// FAQ ACCORDION INTERACTIVITY
// Accessible single-open show/hide accordion tabs
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-toggle');
    if (!button) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items smoothly
      faqItems.forEach(i => {
        const btn = i.querySelector('.faq-question');
        const ico = i.querySelector('.faq-toggle');
        i.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (ico) ico.textContent = '+';
      });

      // If clicked item was not open, open it smoothly
      if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '−';
      }
    });
  });
});

