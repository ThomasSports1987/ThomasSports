// Hero slider logic
window.addEventListener('DOMContentLoaded', function() {
    let heroCurrentIndex = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrevBtn = document.querySelector('.hero-prev');
    const heroNextBtn = document.querySelector('.hero-next');

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
    function changeHeroSlide(direction) {
        heroCurrentIndex += direction;
        if (heroCurrentIndex < 0) {
            heroCurrentIndex = heroSlides.length - 1;
        } else if (heroCurrentIndex >= heroSlides.length) {
            heroCurrentIndex = 0;
        }
        showHeroSlide(heroCurrentIndex);
    }
    if (heroPrevBtn && heroNextBtn) {
        heroPrevBtn.addEventListener('click', () => changeHeroSlide(-1));
        heroNextBtn.addEventListener('click', () => changeHeroSlide(1));
    }
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changeHeroSlide(-1);
        if (e.key === 'ArrowRight') changeHeroSlide(1);
    });
    setInterval(() => {
        changeHeroSlide(1);
    }, 7000);
    showHeroSlide(heroCurrentIndex);
});
