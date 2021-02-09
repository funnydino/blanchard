"use strict";

const sliderGallery = document.querySelector('.gallery__swiper-container');
const sliderEvents = document.querySelector('.events__swiper-container');
const sliderPublications = document.querySelector('.publications__swiper-container');
const sliderProjects = document.querySelector('.projects__swiper-container');

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
          clickable: 'true',
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

  let mySwiper_4;

  function projectsSlider() {
    mySwiper_4 = new Swiper(sliderProjects, {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 1,
      spaceBetween: 15,
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        577: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 50,
        }
      },
      navigation: {
        prevEl: '.swiper-button-projects__prev',
        nextEl: '.swiper-button-projects__next',
      },
      autoplay: {
        delay: 5000,
      },
      speed: 800,
    });
  };

  projectsSlider();

  window.addEventListener('resize', () => {
    gallerySlider();
    eventsSlider();
    publicationsSlider();
  });

  /* Перезагрузка слайдеров на определённых брейкпоинтах: */

  function gallerySliderReload(resolution_2) {
    if (resolution_2.matches) {
      mySwiper_1.destroy();
      sliderGallery.dataset.loaded = 'false';
      gallerySlider();
      console.log('Gallery slider reloaded!');
    } else {
      mySwiper_1.destroy();
      sliderGallery.dataset.loaded = 'false';
      gallerySlider();
      console.log('Gallery slider reloaded!');
    }
  };

  function publicationsSliderReload(resolution_1) {
    if (resolution_1.matches) {
      mySwiper_3.destroy();
      sliderPublications.dataset.loaded = 'false';
      publicationsSlider();
      console.log('Publications slider reloaded!');
    } else {
      mySwiper_3.destroy();
      sliderPublications.dataset.loaded = 'false';
      publicationsSlider();
      console.log('Publications slider reloaded!');
    }
  }

  const resolution_1 = window.matchMedia("(max-width: 1367px) and (min-width: 577px)");
  const resolution_2 = window.matchMedia("(max-width: 1024px) and (min-width: 376px)");
  gallerySliderReload(resolution_2);
  resolution_2.addListener(gallerySliderReload);
  publicationsSliderReload(resolution_1);
  resolution_1.addListener(publicationsSliderReload);

  /* Добавляем возможность листать слайды свайпами на мобильных устройствах: */

  const allSliders = document.querySelectorAll('.swiper-container');

  function slidersSwiping() {
    if (window.innerWidth > 1024) {
      [...allSliders].forEach(function (item) {
        item.classList.add('swiper-no-swiping');
      });
    } else {
      [...allSliders].forEach(function (item) {
        item.classList.remove('swiper-no-swiping');
      });
    }
  };

  slidersSwiping();

  window.addEventListener('resize', slidersSwiping);

});