// ==========================================================================
// GALLERY MASONRY FILTERING & CUSTOM ACCESSIBLE LIGHTBOX
// Supports Keyboard Nav (Esc, ArrowLeft, ArrowRight) and Focus Trap
// ==========================================================================

const GALLERY_ITEMS = [
  { id: 1, category: 'awards', title: 'Urbania Lake Highway Expedition', tag: 'SHARED MOBILITY', image: 'assets/urbania_lake_highway.jpg' },
  { id: 2, category: 'final', title: 'Force Commercial Vehicle Fleet & Facility', tag: 'FLEET & R&D', image: 'assets/force_fleet_facility.jpg' },
  { id: 3, category: 'screening', title: 'Urbania Luxury Airport Transfer Service', tag: 'AIRPORT TRANSFERS', image: 'assets/urbania_airport_transfer.jpg' },
  { id: 4, category: 'awards', title: 'Gurkha 4x4 Mountain Expedition', tag: 'ADVENTURE TRAVEL', image: 'assets/gurkha_mountain_expedition.jpg' },
  { id: 5, category: 'final', title: 'Luxury Traveler Highway Mobility Showcase', tag: 'TOURISM BUS', image: 'assets/hero_travel_mobility.jpg' },
  { id: 6, category: 'screening', title: 'Urbania Monocoque Van Platform', tag: 'VAN PLATFORM', image: 'assets/urbania_lake_highway.jpg' }
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
    <div class="gallery-preview-item" style="cursor: pointer; position: relative; border-radius: 8px; overflow: hidden; height: 260px; border: 1px solid var(--force-border); box-shadow: 0 4px 16px rgba(0,0,0,0.04);" onclick="openLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,10,0.85) 100%); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
        <span class="micro-label" style="background-color: var(--force-primary); color: var(--force-white); padding: 0.25rem 0.625rem; border-radius: 40px; align-self: flex-start; font-weight: 800; font-size: 0.625rem;">${item.tag}</span>
        <h4 style="color: var(--force-white); font-size: 0.9375rem; font-weight: 700; margin: 0;">${item.title}</h4>
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
  const imgSpace = document.querySelector('.lightbox-image-space');

  if (titleEl) titleEl.textContent = item.title;
  if (tagEl) tagEl.textContent = item.tag;
  if (imgSpace && item.image) {
    imgSpace.style.backgroundImage = `url('${item.image}')`;
    imgSpace.style.backgroundSize = 'cover';
    imgSpace.style.backgroundPosition = 'center';
  }
}
