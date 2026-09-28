// ==========================================================================
// GALLERY MASONRY FILTERING & CUSTOM ACCESSIBLE LIGHTBOX
// Updated with new approved event and award ceremony images
// ==========================================================================

const GALLERY_ITEMS = [
  { id: 1, category: 'awards', title: 'Travel and Tourism Awards Ceremony 2026', tag: 'AWARDS NIGHT', image: 'assets/gallery_photo_8.png' },
  { id: 2, category: 'final', title: 'Jury Roundtable & Deliberation Panel', tag: 'JURY EVALUATION', image: 'assets/gallery_photo_7.png' },
  { id: 3, category: 'awards', title: 'Winner Announcement & Trophy Presentation', tag: 'CEREMONY', image: 'assets/gallery_photo_1.png' },
  { id: 4, category: 'screening', title: 'Delegates & Industry Leaders Networking', tag: 'DELEGATES GALA', image: 'assets/gallery_photo_2.png' },
  { id: 5, category: 'final', title: 'Keynote Address & Travel Leadership Roundtable', tag: 'PANEL SESSION', image: 'assets/gallery_photo_3.png' },
  { id: 6, category: 'screening', title: 'Force Motors Executive Address & Stage Showcase', tag: 'PRESENTING BRAND', image: 'assets/gallery_photo_4.png' },
  { id: 7, category: 'awards', title: 'Excellence in Travel Innovation Award Presentation', tag: 'WINNERS GALA', image: 'assets/gallery_photo_5.png' },
  { id: 8, category: 'final', title: 'National Travel & Mobility Leadership Forum', tag: 'LEADERSHIP FORUM', image: 'assets/gallery_photo_6.png' }
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
    <div class="gallery-preview-item" style="cursor: pointer; position: relative; border-radius: 8px; overflow: hidden; height: 280px; border: 1px solid var(--border-light); box-shadow: 0 4px 16px rgba(0,0,0,0.04); transition: transform 0.3s ease, border-color 0.3s ease;" onclick="openLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,10,0.85) 100%); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
        <span class="micro-label" style="background-color: var(--gold); color: var(--black); padding: 0.25rem 0.625rem; border-radius: 40px; align-self: flex-start; font-weight: 800; font-size: 0.625rem; letter-spacing: 0.08em;">${item.tag}</span>
        <h4 style="color: var(--white); font-size: 0.9375rem; font-weight: 700; margin: 0;">${item.title}</h4>
      </div>
    </div>
  `).join('');
}

/* Accessible Custom Lightbox */
function initLightboxControls() {
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightboxImage);
  if (nextBtn) nextBtn.addEventListener('click', nextLightboxImage);

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightboxImage();
    if (e.key === 'ArrowRight') nextLightboxImage();
  });
}

function openLightbox(index) {
  activeIndex = index;
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  
  updateLightboxContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function prevLightboxImage() {
  activeIndex = (activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  updateLightboxContent();
}

function nextLightboxImage() {
  activeIndex = (activeIndex + 1) % GALLERY_ITEMS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = GALLERY_ITEMS[activeIndex];
  if (!item) return;

  const tagEl = document.getElementById('lightboxTag');
  const titleEl = document.getElementById('lightboxTitle');
  const box = document.querySelector('.lightbox-image-space');

  if (tagEl) tagEl.textContent = item.tag;
  if (titleEl) titleEl.textContent = item.title;
  if (box) {
    box.style.backgroundImage = `url('${item.image}')`;
    box.style.backgroundSize = 'cover';
    box.style.backgroundPosition = 'center';
  }
}
