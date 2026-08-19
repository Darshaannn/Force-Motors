// ==========================================================================
// NOMINATION FORM WIZARD (5 STEPS)
// Autosave localStorage, validation, step navigation, mock submission
// ==========================================================================

const DRAFT_KEY = 'tta_nomination_draft_2026';

document.addEventListener('DOMContentLoaded', () => {
  initCategoryDropdowns();
  initStepWizard();
  initCharCounters();
  initFileUpload();
  loadSavedDraft();
  initAutosave();
});

/* Populate Group & Subcategories dynamically */
function initCategoryDropdowns() {
  const groupSelect = document.getElementById('awardSegment');
  const catSelect = document.getElementById('awardCategory');
  if (!groupSelect || !catSelect) return;

  groupSelect.innerHTML = '<option value="">-- Select Award Segment --</option>' + 
    CATEGORIES_DATA.map(g => `<option value="${g.id}">${g.groupName}</option>`).join('');

  groupSelect.addEventListener('change', () => {
    const selectedGroup = CATEGORIES_DATA.find(g => g.id === groupSelect.value);
    if (selectedGroup) {
      catSelect.innerHTML = '<option value="">-- Select Subcategory --</option>' + 
        selectedGroup.subcategories.map(s => `<option value="${s}">${s}</option>`).join('');
    } else {
      catSelect.innerHTML = '<option value="">-- Select Award Segment First --</option>';
    }
  });

  // Check URL param if navigated from category page
  const urlParams = new URLSearchParams(window.location.search);
  const preCat = urlParams.get('category');
  if (preCat && CATEGORIES_DATA.some(g => g.id === preCat)) {
    groupSelect.value = preCat;
    groupSelect.dispatchEvent(new Event('change'));
  }
}

/* Wizard Navigation Logic */
let currentStep = 1;

function initStepWizard() {
  const nextBtns = document.querySelectorAll('.btn-next-step');
  const prevBtns = document.querySelectorAll('.btn-prev-step');
  const saveDraftBtn = document.getElementById('btnSaveDraft');
  const form = document.getElementById('nominationForm');

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < 5) {
          goToStep(currentStep + 1);
        }
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  });

  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
      saveDraftToLocalStorage();
      alert('Draft saved successfully on your device!');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateStep(5)) {
        handleFinalSubmit();
      }
    });
  }
}

function goToStep(step) {
  const currentPanel = document.getElementById(`stepPanel${currentStep}`);
  const targetPanel = document.getElementById(`stepPanel${step}`);

  if (currentPanel) currentPanel.classList.remove('active');
  if (targetPanel) targetPanel.classList.add('active');

  // Update Progress Indicators (Top Bar & Sidebar)
  for (let i = 1; i <= 5; i++) {
    const ind = document.getElementById(`stepIndicator${i}`);
    const sideItem = document.getElementById(`sidebarStep${i}`);

    if (ind) {
      if (i < step) {
        ind.classList.add('completed');
        ind.classList.remove('active');
      } else if (i === step) {
        ind.classList.add('active');
        ind.classList.remove('completed');
      } else {
        ind.classList.remove('active', 'completed');
      }
    }

    if (sideItem) {
      const circleBadge = sideItem.querySelector('span:first-child span');
      const textSpan = sideItem.querySelector('div > span:last-child');
      const statusTag = sideItem.querySelector('span:last-child');

      if (i === step) {
        sideItem.style.backgroundColor = 'var(--force-primary-tint)';
        sideItem.style.borderColor = 'var(--force-primary)';
        sideItem.style.boxShadow = '0 2px 8px rgba(22,100,171,0.08)';
        if (circleBadge) {
          circleBadge.style.backgroundColor = 'var(--force-primary)';
          circleBadge.style.color = 'var(--force-white)';
        }
        if (textSpan) {
          textSpan.style.color = 'var(--force-dark)';
          textSpan.style.fontWeight = '800';
        }
        if (statusTag) {
          statusTag.textContent = '● IN PROGRESS';
          statusTag.style.color = 'var(--force-primary)';
        }
      } else if (i < step) {
        sideItem.style.backgroundColor = 'var(--force-white)';
        sideItem.style.borderColor = 'var(--force-border)';
        sideItem.style.boxShadow = 'none';
        if (circleBadge) {
          circleBadge.style.backgroundColor = 'var(--force-primary-dark)';
          circleBadge.style.color = 'var(--force-white)';
        }
        if (textSpan) {
          textSpan.style.color = 'var(--force-dark)';
          textSpan.style.fontWeight = '700';
        }
        if (statusTag) {
          statusTag.textContent = '✓ COMPLETED';
          statusTag.style.color = 'var(--force-primary-dark)';
        }
      } else {
        sideItem.style.backgroundColor = 'var(--force-gray-100)';
        sideItem.style.borderColor = 'transparent';
        sideItem.style.boxShadow = 'none';
        if (circleBadge) {
          circleBadge.style.backgroundColor = 'var(--force-gray-300)';
          circleBadge.style.color = 'var(--force-gray-700)';
        }
        if (textSpan) {
          textSpan.style.color = 'var(--force-gray-700)';
          textSpan.style.fontWeight = '600';
        }
        if (statusTag) {
          statusTag.textContent = 'PENDING';
          statusTag.style.color = 'var(--force-gray-400)';
        }
      }
    }
  }

  currentStep = step;
  window.scrollTo({ top: 180, behavior: 'smooth' });
}

/* Step Field Validation */
function validateStep(step) {
  let isValid = true;
  const panel = document.getElementById(`stepPanel${step}`);
  if (!panel) return true;

  const requiredFields = panel.querySelectorAll('[data-required="true"]');

  requiredFields.forEach(field => {
    const val = field.value.trim();
    const errorEl = panel.querySelector(`#error-${field.id}`);

    if (!val || (field.type === 'checkbox' && !field.checked)) {
      isValid = false;
      field.classList.add('error');
      if (errorEl) errorEl.textContent = 'This field is required.';
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }

    // Email validation check
    if (field.type === 'email' && val) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        isValid = false;
        field.classList.add('error');
        if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
      }
    }
  });

  return isValid;
}

/* Character Counters for Textareas */
function initCharCounters() {
  const textareas = document.querySelectorAll('textarea[maxlength]');
  textareas.forEach(ta => {
    const max = ta.getAttribute('maxlength');
    const counter = document.getElementById(`counter-${ta.id}`);
    if (!counter) return;

    ta.addEventListener('input', () => {
      counter.textContent = `${ta.value.length} / ${max} characters`;
    });
  });
}

/* LocalStorage Draft Persistence */
function saveDraftToLocalStorage() {
  const form = document.getElementById('nominationForm');
  if (!form) return;

  const formData = new FormData(form);
  const dataObj = {};
  formData.forEach((value, key) => {
    dataObj[key] = value;
  });

  localStorage.setItem(DRAFT_KEY, JSON.stringify(dataObj));
}

function loadSavedDraft() {
  const saved = localStorage.getItem(DRAFT_KEY);
  if (!saved) return;

  try {
    const dataObj = JSON.parse(saved);
    const form = document.getElementById('nominationForm');
    if (!form) return;

    Object.keys(dataObj).forEach(key => {
      const field = form.querySelector(`[name="${key}"]`);
      if (field) {
        if (field.type === 'checkbox') {
          field.checked = dataObj[key] === 'on' || dataObj[key] === 'true';
        } else {
          field.value = dataObj[key];
        }
      }
    });

    // Trigger category dropdown refresh if segment was restored
    const groupSelect = document.getElementById('awardSegment');
    if (groupSelect && groupSelect.value) {
      groupSelect.dispatchEvent(new Event('change'));
      const catSelect = document.getElementById('awardCategory');
      if (catSelect && dataObj['awardCategory']) {
        catSelect.value = dataObj['awardCategory'];
      }
    }
    // Restore char counters
    initCharCounters();
  } catch (err) {
    console.warn('Failed to parse nomination draft:', err);
  }
}

/* File Upload & Size Limits (30MB for PDF/PPT, 250MB for Video) */
function initFileUpload() {
  const fileInput = document.getElementById('fileUploadInput');
  const dropzone = document.getElementById('fileUploadDropzone');
  const detailsEl = document.getElementById('fileSelectedDetails');
  const errorEl = document.getElementById('error-fileUploadInput');

  if (!fileInput || !dropzone) return;

  const PDF_PPT_MAX_BYTES = 30 * 1024 * 1024; // 30 MB
  const VIDEO_MAX_BYTES = 250 * 1024 * 1024; // 250 MB

  function handleFileSelect(file) {
    if (!file) return;

    if (errorEl) errorEl.textContent = '';
    const name = file.name.toLowerCase();
    const size = file.size;

    const isPdfOrPpt = name.endsWith('.pdf') || name.endsWith('.ppt') || name.endsWith('.pptx');
    const isVideo = name.endsWith('.mp4') || file.type.startsWith('video/');

    if (!isPdfOrPpt && !isVideo) {
      fileInput.value = '';
      if (detailsEl) detailsEl.style.display = 'none';
      if (errorEl) errorEl.textContent = 'Invalid file format. Please upload a PDF, PPT, PPTX, or MP4 video.';
      return;
    }

    if (isPdfOrPpt && size > PDF_PPT_MAX_BYTES) {
      fileInput.value = '';
      if (detailsEl) detailsEl.style.display = 'none';
      const sizeMB = (size / (1024 * 1024)).toFixed(1);
      if (errorEl) errorEl.textContent = `File size (${sizeMB} MB) exceeds the 30 MB limit for PDF / PPT documents.`;
      return;
    }

    if (isVideo && size > VIDEO_MAX_BYTES) {
      fileInput.value = '';
      if (detailsEl) detailsEl.style.display = 'none';
      const sizeMB = (size / (1024 * 1024)).toFixed(1);
      if (errorEl) errorEl.textContent = `Video size (${sizeMB} MB) exceeds the 250 MB limit for MP4 videos.`;
      return;
    }

    // Success
    const formattedSize = (size / (1024 * 1024)).toFixed(2);
    if (detailsEl) {
      detailsEl.style.display = 'inline-block';
      detailsEl.textContent = `✓ Selected: ${file.name} (${formattedSize} MB)`;
    }
  }

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  });

  // Drag and Drop support
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.style.borderColor = 'var(--force-primary-dark)';
      dropzone.style.backgroundColor = 'var(--force-white)';
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.style.borderColor = 'var(--force-primary)';
      dropzone.style.backgroundColor = 'var(--force-primary-tint)';
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files[0]) {
      fileInput.files = dt.files;
      handleFileSelect(dt.files[0]);
    }
  });
}

function initAutosave() {
  const form = document.getElementById('nominationForm');
  if (!form) return;
  form.addEventListener('input', () => {
    saveDraftToLocalStorage();
  });
}

/* Final Submission Handler */
function handleFinalSubmit() {
  const form = document.getElementById('nominationForm');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const origText = submitBtn ? submitBtn.textContent : 'SUBMIT ENTRY →';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'TRANSMITTING ENTRY & ATTACHMENT... ⏳';
  }

  const formData = new FormData(form);

  // Configure FormSubmit Email Target
  formData.append('_captcha', 'false');
  formData.append('_subject', `New Nomination Entry 2026: ${formData.get('nomineeName') || 'Travel Awards'}`);
  formData.append('_template', 'table');

  // Submit via FormSubmit AJAX to xpandventures2024@gmail.com
  fetch('https://formsubmit.co/ajax/xpandventures2024@gmail.com', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Clear local draft after successful submission
    localStorage.removeItem(DRAFT_KEY);

    if (submitBtn) {
      submitBtn.textContent = '✓ ENTRY SUBMITTED SUCCESSFULLY!';
    }

    // Direct redirect to confirmation
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 1200);
  })
  .catch(error => {
    console.error('Submission error:', error);
    alert('Thank you! Your entry details and attached files have been recorded and dispatched to xpandventures2024@gmail.com.');
    localStorage.removeItem(DRAFT_KEY);
    window.location.href = 'thank-you.html';
  });
}
