let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Function to change slide manually
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Auto-slide every 7 seconds
setInterval(() => {
    changeSlide(1);
}, 7000);

// Show the first slide initially
showSlide(currentIndex);
