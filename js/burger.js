"use strict";

let hero = document.querySelector('.hero');

const menu = document.querySelector('.nav'),
  burger = document.querySelector('.burger'),
  overlay = document.querySelector('.overlay');

const lockScroll = () => {
  document.body.classList.toggle('lock');
}

const unlockScroll = () => {
  document.body.classList.remove('lock');
}

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  lockScroll();
  if (menu.classList.contains('open')) {
    menu.style.height = hero.offsetHeight + 'px';
  } else {
    setTimeout(function () {
        menu.style.height = 'auto';
      },
      300);
  }
});

overlay.addEventListener('click', () => {
  burger.classList.remove('active');
  menu.classList.remove('open');
  overlay.classList.remove('open');
  unlockScroll();
  setTimeout(function () {
      menu.style.height = 'auto';
    },
    300);
});

menu.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);

  if (window.innerWidth < 1025 && e.target.classList.contains('nav__link') || e.target.classList.contains('account__link')) {
    burger.classList.remove('active');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
    setTimeout(function () {
        menu.style.height = 'auto';
      },
      300);
  }
});