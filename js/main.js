"use strict";

// Инициализация Select'a:

const selectOne = document.querySelector('#select__one');
const choices = new Choices(selectOne, {
  searchEnabled: false,
});

// Табы (переключение языка в секции Catalog):

const langBtn = document.querySelectorAll('.language__btn');
const langItems = document.querySelectorAll('.catalog__tab-lang');

langBtn.forEach(selectLang);

function selectLang(item) {
  item.addEventListener('click', function () {
    let currentLang = item;
    let parent = item.parentNode;
    let tabId = currentLang.getAttribute('data-lang');
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

document.querySelector('.language__btn--russian').click();

// Табы (переключение художников в секции Catalog):

document.querySelectorAll('.accordion-artist__link').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.accordion-artist__link').forEach((child) => child.classList.remove('accordion-artist__link--active'));
    document.querySelectorAll('.catalog__tab-artist').forEach((child) => child.classList.remove('catalog__tab-artist--active'));

    item.classList.add('accordion-artist__link--active');
    document.getElementById(id).classList.add('catalog__tab-artist--active');
  });
});

let startTab = document.querySelector('.catalog__tab-lang.active .accordion-artist__list .accordion-artist__item:nth-child(12) .accordion-artist__link');
startTab.click();

langBtn.forEach(selectTab);

function selectTab(item) {
  item.addEventListener('click', function () {
    let activeTab = document.querySelector('.catalog__tab-lang.active .accordion-artist__list .accordion-artist__item:nth-child(2) .accordion-artist__link');
    activeTab.click();
  })
};

// Аккордеон:

document.querySelectorAll('.accordion__header').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion__item--open')) {
      parent.classList.remove('accordion__item--open');
    } else {
      document
        .querySelectorAll('.accordion__item')
        .forEach((child) => child.classList.remove('accordion__item--open'))

      parent.classList.add('accordion__item--open');
    }
  });
});