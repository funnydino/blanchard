"use strict";

// Плавная прокрутка страницы:

function smoothScroll(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  });
};

const scrollTo = document.querySelectorAll('[data-scroll]');

[...scrollTo].forEach(function (elemScroll) {
  elemScroll.addEventListener('click', (e) => {
    e.preventDefault();
    const id = elemScroll.getAttribute('data-scroll').replace('#', '');
    smoothScroll(document.getElementById(id));
  });
});

// Кнопка скролла в начало страницы:

const body = document.body;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;
const toTopBtn = document.querySelector('.to-top__btn');

function myFunction() {
  if (window.pageYOffset >= headerHeight && window.pageYOffset < heroHeight) {
    header.classList.add("header--hidden");
  } else if (window.pageYOffset >= heroHeight) {
    header.classList.remove("header--hidden");
    header.classList.add("header--fixed");
    toTopBtn.classList.add('to-top__btn--active');
    // header.style.marginTop = -header.offsetHeight + 'px';
    // body.style.paddingTop = header.offsetHeight + 'px';
  } else {
    header.classList.remove("header--hidden");
    header.classList.remove("header--fixed");
    toTopBtn.classList.remove('to-top__btn--active');
  }
}

window.addEventListener('scroll', function () {
  myFunction();
});

// Поле поиска по сайту на мобильных устройствах:

const searchTop = document.querySelector('.search-top');
const searchBtn = document.querySelector('.search-top__btn');
const searchClose = document.querySelector('.search-top__btn-close');

function openSearch() {
  document.querySelector('.search-top').classList.add('search-top--active');
  document.querySelector('.search-top__searchbar').classList.add('search-top__searchbar--active');
  document.querySelector('.search-top__searchbar').focus();
  if (window.innerWidth < 769) {
    document.querySelector('.search-top__btn-close').classList.add('search-top__btn-close--active');
    document.querySelector('.header__logo').style.animation = 'fadeOut .25s ease-in-out forwards';
    document.querySelector('.header__burger').classList.add('header__burger--hidden');
  };
  if (window.innerWidth < 376) {
    document.querySelector('.header__top').classList.add('header__top--mobile-search');
  };
  setTimeout(function () {
      searchBtn.removeAttribute('disabled');
    },
    250);
};

function closeSearch() {
  if (!searchTop.contains(event.target) || searchClose.contains(event.target)) {
    searchTop.classList.remove('search-top--active'),
      document.querySelector('.search-top__searchbar').classList.remove('search-top__searchbar--active'),
      searchBtn.setAttribute('disabled', 'disabled'),
      document.querySelector('.search-top__searchbar').blur();
    if (window.innerWidth < 769) {
      document.querySelector('.search-top__btn-close').classList.remove('search-top__btn-close--active');
      document.querySelector('.header__logo').style.animation = 'fadeIn .25s ease-in-out .2s backwards';
      document.querySelector('.header__burger').classList.remove('header__burger--hidden');
    };
    if (window.innerWidth < 376) {
      setTimeout(function () {
          document.querySelector('.header__top').classList.remove('header__top--mobile-search');
        },
        300);
    };
  };
};

searchTop.addEventListener('click', () => {
  if (!searchClose.contains(event.target)) {
    openSearch();
  };
});

searchClose.addEventListener('click', () => {
  closeSearch();
});

document.addEventListener('click', function (event) {
  closeSearch();
});

// Инициализация Select'a:

const selectOne = document.querySelector('#select__one');
const choices = new Choices(selectOne, {
  searchEnabled: false,
});

// Табы (переключение языка в секции Catalog):

const langBtn = document.querySelectorAll('.country__btn');
const langItems = document.querySelectorAll('.catalog-tabs__country');

langBtn.forEach(selectLang);

function selectLang(item) {
  item.addEventListener('click', function () {
    let currentLang = item;
    let parent = item.parentNode;
    let tabId = currentLang.getAttribute('data-country');
    let currentTab = document.querySelector(tabId);

    if (!parent.classList.contains('selected')) {
      langBtn.forEach(function (item) {
        let parent = item.parentNode;
        parent.classList.remove('selected');
      });

      langItems.forEach(function (item) {
        item.classList.remove('active');
      });

      parent.classList.add('selected');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.country__btn--italian').click();

// Табы (переключение художников в секции Catalog):

document.querySelectorAll('.accordion-artists__link').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.accordion-artists__link').forEach((child) => child.classList.remove('accordion-artists__link--active'));
    document.querySelectorAll('.catalog__tab-artist').forEach((child) => child.classList.remove('catalog__tab-artist--active'));

    item.classList.add('accordion-artists__link--active');
    document.getElementById(id).classList.add('catalog__tab-artist--active');
  });
});

let startTab = document.querySelector('.catalog-tabs__country.active .accordion-artists__list .accordion-artists__item:nth-child(12) .accordion-artists__link');
startTab.click();

langBtn.forEach(selectTab);

function selectTab(item) {
  item.addEventListener('click', function () {
    let activeTab = document.querySelector('.catalog-tabs__country.active .accordion-artists__list .accordion-artists__item:nth-child(1) .accordion-artists__link');
    activeTab.click();
  })
};

// Аккордеон:

document.querySelectorAll('.catalog-accordion__header').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('catalog-accordion__item--open')) {
      parent.classList.remove('catalog-accordion__item--open');
    } else {
      document
        .querySelectorAll('.catalog-accordion__item')
        .forEach((child) => child.classList.remove('catalog-accordion__item--open'))

      parent.classList.add('catalog-accordion__item--open');
    }
  });
});