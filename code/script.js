// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close the menu when clicking outside (optional)
window.addEventListener('click', (e) => {
  if (!header.contains(e.target) && navMenu.style.display === 'flex') {
    hamburger.classList.remove('active');
    navMenu.style.display = 'none';
  }
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Optional: Auto-slide functionality
setInterval(nextSlide, 5000); // Change slide every 5 seconds
