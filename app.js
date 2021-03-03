function responsiveCarousel(){

    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselContent = document.querySelectorAll('.full-bleed');

    // Buttons
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    // Counter
    let counter = 0;
    const size = carouselContent[0].clientWidth;
    console.log(counter);

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Button listeners

    function counterInRange(){
        return (counter <= 0 || counter >= carouselContent.length);
    };

    function checkBtnDisplay(){
        if(counterInRange()) {
            prevBtn.classList.add('hide');
        } else {
            prevBtn.classList.remove('hide');
        };
    };

    nextBtn.addEventListener('click', () => {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        checkBtnDisplay();
    });

    prevBtn.addEventListener('click', () => {
        if(counter <= 0) {
            return;
        } else {
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        checkBtnDisplay();
    }});

    window.addEventListener('DOMContentLoaded', () => {
        checkBtnDisplay();
    });

    carouselSlide.addEventListener('transitionend', () => {
        console.log('fired')
    });
};

responsiveCarousel();