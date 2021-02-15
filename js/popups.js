"use strict";

// Pop-Ups

// К любой ссылке можно задать класс .popup-link, и она откроет ссылку в модальном окне:
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('.body');

// 'Прыжок' фиксированных блоков можно убрать с помощью класса '.fix-block':
const lockPadding = document.querySelectorAll('.fix-block');

let unlock = true;

const timeout = 750;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      if (popupLink.classList.contains('paintings__item-link')) {
        const children = popupLink.querySelector('.paintings__item-image img');
        const currentImage = children.getAttribute('src').replace('main', '375');
        document.querySelector('.popup__gallery-image').setAttribute('src', currentImage);
      }
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

// Любой объект внутри поп-апа с классом .popup__close будет закрывать ближайшее к себе (по ветке вверх) модальное окно:

const popupCloseIcon = document.querySelectorAll('.popup__close');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup--open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('popup--open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
    if (menu.classList.contains('nav--open')) {
      burger.classList.remove('header__burger--active');
      menu.classList.remove('nav--open');
      overlay.classList.remove('overlay--open');
      setTimeout(function () {
          menu.style.height = 'auto';
        },
        300);
    };
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('popup--open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

unlock = false;
setTimeout(function () {
  unlock = true;
}, timeout);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    const popupActive = document.querySelector('.popup--open');
    popupClose(popupActive);
  }
});

// Полифил для closest:

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

//Полифил для matches:

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();