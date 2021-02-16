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

const closeMenu = () => {
  burger.classList.remove('header__burger--active');
  menu.classList.remove('nav--open');
  overlay.classList.remove('overlay--open');
  unlockScroll();
  setTimeout(function () {
      menu.style.height = 'auto';
    },
    300);
};

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
  closeMenu();
});

menu.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);

  if (window.innerWidth < 1025 && e.target.classList.contains('nav__link')) {
    closeMenu();
    setTimeout(function () {
        smoothScroll(document.getElementById(e.target.getAttribute('data-scroll').replace('#', '')));
      },
      150);
  };
});

const menuCloseResolution = window.matchMedia("(min-width: 1025px)");

closeMenu_2(menuCloseResolution);
menuCloseResolution.addListener(closeMenu_2);

function closeMenu_2(menuCloseResolution) {
  if (menuCloseResolution.matches) {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('nav--open');
    overlay.classList.remove('overlay--open');
    unlockScroll();
    menu.style.height = 'auto';
  }
};