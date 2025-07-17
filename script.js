// Simple form handler (static demo - does not submit)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you for contacting us! We'll get back to you soon.";
  this.reset();
});

document.getElementById('enrollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('enrollMessage').textContent = "Enrollment successful! We'll contact you with further details.";
  this.reset();
});

// Photo slider logic
const sliderImages = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(idx) {
  sliderImages.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}

document.querySelector('.slider-btn.prev').addEventListener('click', function() {
  let idx = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  showSlide(idx);
});
document.querySelector('.slider-btn.next').addEventListener('click', function() {
  let idx = (currentSlide + 1) % sliderImages.length;
  showSlide(idx);
});
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  let idx = (currentSlide + 1) % sliderImages.length;
  showSlide(idx);
}, 5000);

// Initialize first slide
showSlide(0);