document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Get navigation arrows and dots
    const prevArrow = document.querySelector('.nav-arrow.prev');
    const nextArrow = document.querySelector('.nav-arrow.next');
    const dots = document.querySelectorAll('.dot');

    // Debugging: Log elements to ensure they exist
    console.log('Prev Arrow:', prevArrow);
    console.log('Next Arrow:', nextArrow);
    console.log('Dots:', dots);

    // Update dots
    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Slide navigation
    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        const offset = -currentIndex * 100;
        slideshow.style.transform = `translateX(${offset}%)`;
        slideshow.style.transition = 'transform 0.5s ease';
        updateDots();
        console.log('Moved to slide:', currentIndex); // Debugging
    }

    // Event listeners for arrows with error handling
    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });
    } else {
        console.error('Prev Arrow not found in DOM');
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });
    } else {
        console.error('Next Arrow not found in DOM');
    }

    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.dataset.index));
        });
    });

    // Pause animation on manual navigation
    [prevArrow, nextArrow, ...dots].forEach(element => {
        if (element) {
            element.addEventListener('click', () => {
                slideshow.style.animationPlayState = 'paused';
                setTimeout(() => {
                    slideshow.style.animationPlayState = 'running';
                }, 500);
            });
        }
    });

    // Sync dots with auto-slide animation
    slideshow.addEventListener('animationiteration', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateDots();
    });

    // Initialize
    updateDots();
});