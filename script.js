const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `rotateY(${(index - currentSlide) * 36}deg) translateZ(500px)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 4000);

// Initialize slides
updateSlides();