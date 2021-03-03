function responsiveCarousel(){

    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselContent = document.querySelectorAll('.full-bleed');

    // Buttons
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    // Counter
    let counter = 0;
    let width = carouselContent[0].clientWidth;

    window.addEventListener('resize', () => {
        width = carouselContent[counter].clientWidth;
        // carouselContent.forEach((item)=>{
        //     item.style.width = width;
        // })
        carouselSlide.style.transform = 'translateX(' + (-width * counter) + 'px)';
    });



    carouselSlide.style.transform = 'translateX(' + (-width * counter) + 'px)';

    // Button listeners

    function counterInRange(){
        return (counter <= 0 || counter >= carouselContent.length - 1);
    };

    function checkBtnDisplay(){
        if(counter <= 0){
            prevBtn.classList.add('hide');
            nextBtn.classList.remove('hide');
        } else if(counter >= carouselContent.length - 1){
            prevBtn.classList.remove('hide');
            nextBtn.classList.add('hide');
        } else {
            nextBtn.classList.remove('hide');
            prevBtn.classList.remove('hide');
        };
    };        
  

    nextBtn.addEventListener('click', () => {
        if(counter >= carouselContent.length - 1) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-width * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if(counter <= 0) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-width * counter) + 'px)';
    });

    window.addEventListener('DOMContentLoaded', () => {
        checkBtnDisplay();
    });

    carouselSlide.addEventListener('transitionend', () => {
        checkBtnDisplay();
    });
};

responsiveCarousel();