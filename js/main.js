// main.js

document.addEventListener('DOMContentLoaded', function () {
  // Initialize all Swiper sliders with options from data attribute
  const sliders = document.querySelectorAll('.thm-swiper__slider');
  sliders.forEach(slider => {
    const options = JSON.parse(slider.getAttribute('data-swiper-options'));
    new Swiper(slider, options);
  });

  // Setup hover effect for cards with inline cursor:pointer style inside sections
  const cards = document.querySelectorAll('section div[style*="cursor: pointer"]');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 20px 30px rgb(166 133 69 / 0.6)';
      const img = card.querySelector('img');
      if (img) img.style.filter = 'brightness(1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 12px 20px rgb(166 133 69 / 0.3)';
      const img = card.querySelector('img');
      if (img) img.style.filter = 'brightness(0.95)';
    });
  });

  // Testimonial slider logic
  const track = document.getElementById('testimonial-track');
  if (track) {
    let index = 0;
    const total = track.children.length;

    setInterval(() => {
      index = (index + 1) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);
  }
});

// Function to show results and smooth scroll
function showResults(e) {
  e.preventDefault();
  const resultSection = document.getElementById("resultSection");
  if (resultSection) {
    resultSection.style.display = "block";
    window.scrollTo({
      top: resultSection.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// Toggle menu visibility for mobile
function toggleMenu() {
  const menu = document.getElementById('menuLinks');
  const mobileBtn = document.querySelector('.mobile-only');

  if (!menu) return;

  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    if (mobileBtn) mobileBtn.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.width = '100%';
    menu.style.paddingTop = '10px';

    const items = menu.querySelectorAll('li');
    items.forEach(item => {
      item.style.border = 'none';
      item.style.margin = '10px 0';
      item.style.paddingLeft = '0';
      item.style.textAlign = 'center';
    });

    if (mobileBtn) mobileBtn.style.display = 'block';
  }
}
