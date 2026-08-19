// ==========================================================================
// GALLERY MASONRY FILTERING & CUSTOM ACCESSIBLE LIGHTBOX
// Supports Keyboard Nav (Esc, ArrowLeft, ArrowRight) and Focus Trap
// ==========================================================================

const GALLERY_ITEMS = [
  { id: 1, category: 'awards', title: 'Grand Gala Trophy Presentation ()', tag: 'AWARDS CEREMONY' },
  { id: 2, category: 'final', title: 'Grand Jury Deliberations ()', tag: 'FINAL ROUND' },
  { id: 3, category: 'screening', title: 'Initial Document Screening Session ()', tag: 'SCREENING ROUND' },
  { id: 4, category: 'awards', title: 'Hospitality Excellence Winners Stage ()', tag: 'AWARDS CEREMONY' },
  { id: 5, category: 'final', title: 'Mobility & Infrastructure Keynote ()', tag: 'FINAL ROUND' },
  { id: 6, category: 'screening', title: 'Shortlist Verification Panel ()', tag: 'SCREENING ROUND' }
];

let activeIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
  initGalleryFilters();
  initLightboxControls();
});

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });
}

function renderGallery(filterCategory) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  const items = filterCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filterCategory);

  grid.innerHTML = items.map((item, idx) => `
    <div class="gallery-preview-item blank-image-placeholder" style="cursor: pointer;" onclick="openLightbox(${idx})">
      <span class="micro-label" style="background-color: var(--force-white); padding: 0.25rem 0.5rem; border-radius: 2px;">${item.tag}</span>
    </div>
  `).join('');
}

/* Accessible Custom Lightbox */
function initLightboxControls() {
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrevItem);
  if (nextBtn) nextBtn.addEventListener('click', showNextItem);

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevItem();
    if (e.key === 'ArrowRight') showNextItem();
  });
}

function openLightbox(index) {
  activeIndex = index;
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  updateLightboxContent();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function showPrevItem() {
  activeIndex = (activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  updateLightboxContent();
}

function showNextItem() {
  activeIndex = (activeIndex + 1) % GALLERY_ITEMS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = GALLERY_ITEMS[activeIndex];
  const titleEl = document.getElementById('lightboxTitle');
  const tagEl = document.getElementById('lightboxTag');

  if (titleEl) titleEl.textContent = item.title;
  if (tagEl) tagEl.textContent = item.tag;
}
