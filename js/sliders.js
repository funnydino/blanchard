"use strict";

const slider = document.querySelector('.hero__swiper-container');
const sliderTwo = document.querySelector('.gallery__swiper-container');

// Swiper initialization:

window.addEventListener('DOMContentLoaded', function () {
  let mySwiper = new Swiper(slider, {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 10000,
    },
    speed: 1000,
  });

  let mySwiper_2 = new Swiper(sliderTwo, {
    slidesPerView: 2,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 2,
    spaceBetween: 30,
    direction: 'horizontal',
    // loop: true,
    pagination: {
      el: '.swiper-pagination__gallery',
      type: 'fraction',
    },
    breakpoints: {
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },
    navigation: {
      prevEl: '.swiper-button-gallery__prev',
      nextEl: '.swiper-button-gallery__next',
    },
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
  });
});