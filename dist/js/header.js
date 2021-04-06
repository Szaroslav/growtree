const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 500,
    effect: 'fade',

    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },

    navigation: {
        previousEl: '.slider__button--prev',
        nextEl: '.slider__button--next'
    },
});