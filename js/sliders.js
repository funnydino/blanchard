"use strict";

const sliderGallery = document.querySelector('.gallery__swiper-container');
const sliderEvents = document.querySelector('.events__swiper-container');
const sliderPublications = document.querySelector('.publications__swiper-container');

// Swiper initialization:

window.addEventListener('DOMContentLoaded', function () {

  let mySwiper_1;

  function gallerySlider() {
    if (sliderGallery.dataset.loaded == 'false') {
      mySwiper_1 = new Swiper(sliderGallery, {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 1,
        spaceBetween: 10,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination__gallery',
          type: 'fraction',
        },
        breakpoints: {
          376: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
          },
          1025: {
            slidesPerView: 3,
            slidesPerColumn: 2,
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
        speed: 800,
      });
      sliderGallery.dataset.loaded = 'true';
    };
  };

  gallerySlider();

  let mySwiper_2;

  function eventsSlider() {
    if (window.innerWidth <= 669 && sliderEvents.dataset.mobile == 'false') {
      mySwiper_2 = new Swiper(sliderEvents, {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        slideClass: 'events__card',
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination__events',
          type: 'bullets',
          clickable: "true",
        },
        autoplay: {
          delay: 5000,
        },
        speed: 800,
      });
      sliderEvents.dataset.mobile = 'true';
    };

    if (window.innerWidth > 669) {
      sliderEvents.dataset.mobile = 'false';
      if (sliderEvents.classList.contains('swiper-container-initialized')) {
        mySwiper_2.destroy();
      }
    };

  };

  eventsSlider();

  let mySwiper_3;

  function publicationsSlider() {
    if (sliderPublications.dataset.loaded == 'false') {
      mySwiper_3 = new Swiper(sliderPublications, {
        slidesPerView: 2,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 2,
        spaceBetween: 40,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination__publications',
          type: 'fraction',
        },
        breakpoints: {
          1367: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        },
        navigation: {
          prevEl: '.swiper-button-publications__prev',
          nextEl: '.swiper-button-publications__next',
        },
        autoplay: {
          delay: 5000,
        },
        speed: 800,
      });
      sliderPublications.dataset.loaded = 'true';
    };

    if (window.innerWidth < 577) {
      sliderPublications.dataset.mobile = 'false';
      if (sliderPublications.classList.contains('swiper-container-initialized')) {
        mySwiper_3.destroy();
      }
    };

  };

  publicationsSlider();

  window.addEventListener('resize', () => {
    gallerySlider();
    eventsSlider();
    publicationsSlider();
  });
});