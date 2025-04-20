    const carousel = document.getElementById('carousel');
    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        if (index < carousel.children.length - 1) {
            index++;
            updateCarousel();
        } else {
            index = 0; // Loop back to the first slide
            updateCarousel();
        }
    }

    function prevSlide() {
        if (index > 0) {
            index--;
            updateCarousel();
        } else {
            index = carousel.children.length - 1; // Loop back to the last slide
            updateCarousel();
        }
    }