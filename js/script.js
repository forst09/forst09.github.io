new Swiper('.main-slider-container', {
    navigation: {
        nextEl: '.main-button-next',
        prevEl: '.main-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    simulateTouch: false,
    loop: true,

    autoplay: {
        delay: 6000,
    },
speed:2000,
});

new Swiper('.reviews-slider-container', {
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },

    simulateTouch: false,
    loop: true,
    speed:2000,
    slidesPerView: 3,
    breakpoints: {
1200: {
    slidesPerView: 3,
},
768: {
    slidesPerView: 2,
},
320: {
    slidesPerView: 1,
},
    }
});

