"use strict";

const hero = document.querySelector('.hero');

const menu = document.querySelector('.nav'),
  burger = document.querySelector('.header__burger'),
  overlay = document.querySelector('.overlay');

// Убираем 'прыжок' фиксированных блоков (для них можно будет задать класс '.fix-block'):

let fixBlocks = document.querySelectorAll('.fix-block');

const lockScroll = () => {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.classList.add('lock');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  })
  document.body.style.paddingRight = paddingOffset;
}

const unlockScroll = () => {
  document.body.classList.remove('lock');
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  })
  document.body.style.paddingRight = '0px';
}

burger.addEventListener('click', () => {
  if (document.body.classList.contains('lock')) {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('nav--open');
    overlay.classList.remove('overlay--open');
    unlockScroll();
  } else {
    burger.classList.add('header__burger--active');
    menu.classList.add('nav--open');
    overlay.classList.add('overlay--open');
    lockScroll();
  }
  if (menu.classList.contains('nav--open')) {
    menu.style.height = hero.offsetHeight + 'px';
  } else {
    setTimeout(function () {
        menu.style.height = 'auto';
      },
      300);
  }
});

overlay.addEventListener('click', () => {
  burger.classList.remove('header__burger--active');
  menu.classList.remove('nav--open');
  overlay.classList.remove('overlay--open');
  unlockScroll();
  setTimeout(function () {
      menu.style.height = 'auto';
    },
    300);
});

menu.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);

  if (window.innerWidth < 1025 && e.target.classList.contains('nav__link') || e.target.classList.contains('personal-account__link')) {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('nav--open');
    overlay.classList.remove('overlay--open');
    unlockScroll();
    setTimeout(function () {
        menu.style.height = 'auto';
      },
      300);
  };

  if (window.innerWidth < 1025 && e.target.classList.contains('nav__link')) {
    smoothScroll(document.getElementById(e.target.getAttribute('data-scroll').replace('#', '')));
  };
});