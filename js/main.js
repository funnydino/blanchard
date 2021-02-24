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

// Fixed Header:

window.addEventListener('scroll', function () {
  myFunction();
  myFunction_2();
});

// Кнопка скролла возврата в начало страницы:

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;
const toTopBtn = document.querySelector('.page__to-top');
let prevScrollpos = window.pageYOffset;

toTopBtn.addEventListener('click', () => {
  if (toTopBtn.getAttribute('data-scroll') != '#top') {
    toTopBtn.setAttribute('data-scroll', '#top');
  };
});

function myFunction() {
  if (window.pageYOffset >= headerHeight && window.pageYOffset < heroHeight) {
    header.classList.add("header--hidden");
  } else if (window.pageYOffset >= heroHeight) {
    header.classList.remove("header--hidden");
    header.classList.add("header--fixed");
    toTopBtn.classList.add('page__to-top--active');
    // header.style.marginTop = -header.offsetHeight + 'px';
    // body.style.paddingTop = header.offsetHeight + 'px';
  } else {
    header.classList.remove("header--hidden");
    header.classList.remove("header--fixed");
    toTopBtn.classList.remove('page__to-top--active');
  }
};

// Hidden Header depending on Scroll:

function myFunction_2() {
  if (window.innerWidth <= 1024) {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      document.querySelector('.header').style.transform = "";
      // body.classList.remove("lock");
    } else if (prevScrollpos < currentScrollPos) {
      document.querySelector('.header').style.transform = "scaleY(0)";
      // body.classList.remove("lock");
    } else {
      document.querySelector('.header').style.transform = "scaleY(1)";
    };
    prevScrollpos = currentScrollPos;
  };
};

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

// Табы (переключение страны в секции Catalog):

const countryBtn = document.querySelectorAll('.country__btn');
const countryItems = document.querySelectorAll('.catalog-tabs__country');

countryBtn.forEach(selectLang);

function selectLang(item) {
  item.addEventListener('click', function () {
    let currentLang = item;
    let parent = item.parentNode;
    let tabId = currentLang.getAttribute('data-country');
    let currentTab = document.querySelector(tabId);

    if (!parent.classList.contains('country__item--selected')) {
      countryBtn.forEach(function (item) {
        let parent = item.parentNode;
        parent.classList.remove('country__item--selected');
      });

      countryItems.forEach(function (item) {
        item.classList.remove('catalog-tabs__country--active');
      });

      parent.classList.add('country__item--selected');
      currentTab.classList.add('catalog-tabs__country--active');
    }
  });
};

document.querySelector('.country__btn--italian').click();

// Табы (переключение художников в секции Catalog):

let startTab = document.querySelector('.catalog-tabs__country--active .accordion-artists__list .accordion-artists__item:nth-child(12) .accordion-artists__link');

document.querySelectorAll('.accordion-artists__link').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.accordion-artists__link').forEach((child) => child.removeAttribute('data-scroll'));
    document.querySelectorAll('.accordion-artists__link').forEach((child) => child.classList.remove('accordion-artists__link--active'));
    document.querySelectorAll('.catalog__tab-artist').forEach((child) => child.classList.remove('catalog__tab-artist--active'));

    item.classList.add('accordion-artists__link--active');
    document.getElementById(id).classList.add('catalog__tab-artist--active');

    if (window.innerWidth < 769 && item != startTab) {
      item.setAttribute('data-scroll', e.target.getAttribute('href'));
      smoothScroll(document.getElementById(id));
      startTab = null;
      toTopBtn.setAttribute('data-scroll', '#catalog');
    }
  });
});

countryBtn.forEach(selectTab);

function selectTab(item) {
  item.addEventListener('click', function () {
    let activeTab = document.querySelector('.catalog-tabs__country--active .accordion-artists__list .accordion-artists__item:nth-child(1) .accordion-artists__link');
    // activeTab.click();
    document.querySelectorAll('.accordion-artists__link').forEach((child) => child.classList.remove('accordion-artists__link--active'));
    document.querySelectorAll('.catalog__tab-artist').forEach((child) => child.classList.remove('catalog__tab-artist--active'));
    activeTab.classList.add('accordion-artists__link--active');
    document.getElementById(activeTab.getAttribute('href').replace('#', '')).classList.add('catalog__tab-artist--active');
  })
};

startTab.click();

// Аккордеон в секции Catalog:

document.querySelectorAll('.catalog-accordion__header').forEach((item) => {
  function accordionClick() {
    const parent = item.parentNode;

    if (parent.classList.contains('catalog-accordion__item--open')) {
      parent.classList.remove('catalog-accordion__item--open');
    } else {
      document
        .querySelectorAll('.catalog-accordion__item')
        .forEach((child) => child.classList.remove('catalog-accordion__item--open'))

      parent.classList.add('catalog-accordion__item--open');
    }
  };
  item.addEventListener('click', () => {
    accordionClick();
  });
  item.addEventListener("keydown", function () {
    if (event.code == 'Enter') {
      accordionClick();
    };
  });
});

// Секция Events:

const showAllBtn = document.querySelector('.events__all-btn');
const eventsCard = document.querySelectorAll('.events__card');
const eventsCardList = document.querySelector('.events__swiper-container');

window.addEventListener('DOMContentLoaded', function () {
  showAllBtn.addEventListener('click', () => {
    showAllCards();
    eventsCardList.setAttribute('opened', true);
  });

  function showAllCards() {
    eventsCard.forEach(function (card) {
      if (card.classList.contains('events__card--hidden')) {
        card.classList.remove('events__card--hidden');
      }
    });
    showAllBtn.classList.add('events__all-btn--hidden');
  };

  function hiddenCards() {
    if (window.matchMedia("(min-width: 956px)").matches) {
      showAllCards();
      document.querySelectorAll('.events__card:nth-child(n + 4)').forEach(function (card) {
        card.classList.add('events__card--hidden');
      });
      showAllBtn.classList.remove('events__all-btn--hidden');
    } else if (window.matchMedia("(min-width: 670px) and (max-width: 955px)").matches) {
      showAllCards();
      document.querySelectorAll('.events__card:nth-child(n + 3)').forEach(function (card) {
        card.classList.add('events__card--hidden');
      });
      showAllBtn.classList.remove('events__all-btn--hidden');
    } else {
      showAllCards();
    };
  };

  hiddenCards();

  window.addEventListener('resize', () => {
    if (!showAllBtn.classList.contains('events__all-btn--hidden')) {
      hiddenCards();
    };
    if (window.matchMedia("(max-width: 669px)").matches) {
      showAllCards();
    } else if (!eventsCardList.hasAttribute('opened')) {
      hiddenCards();
      showAllBtn.classList.remove('events__all-btn--hidden');
    }
  });
});

// Секция Publications (прячем и отображаем чекбоксы):

const showAllCheckboxes = document.querySelector('.publications__subtitle-mobile');
const checkboxItems = document.querySelectorAll('.publications__checkbox-item');
const checkboxes = document.querySelectorAll('.publications__checkbox-custom');
const checkboxUnmark = document.querySelectorAll('.publications__checkbox-unmark');

window.addEventListener('DOMContentLoaded', function () {

  if (window.innerWidth >= 577) {
    showAllCheckboxes.classList.add('publications__subtitle-mobile--open');
  };

});

window.addEventListener('resize', () => {

  if (window.innerWidth >= 577) {
    showAllCheckboxes.classList.add('publications__subtitle-mobile--open');
    checkboxItems.forEach((el) => {
      el.classList.add('publications__checkbox-item--visible');
    });
    checkboxUnmark.forEach((el) => {
      el.classList.remove('publications__checkbox-unmark--active');
    });
  } else if (!showAllCheckboxes.hasAttribute('opened')) {
    showAllCheckboxes.classList.remove('publications__subtitle-mobile--open');
    checkboxItems.forEach((el) => {
      if (!el.querySelector('.publications__checkbox-input').hasAttribute('checked')) {
        el.classList.remove('publications__checkbox-item--visible');
      }
    });
    checkboxUnmark.forEach((el) => {
      if (el.parentNode.querySelector('.publications__checkbox-input').hasAttribute('checked')) {
        el.classList.add('publications__checkbox-unmark--active');
      }
    });
  };

});

showAllCheckboxes.addEventListener('click', () => {

  if (window.innerWidth < 577 && !showAllCheckboxes.classList.contains('publications__subtitle-mobile--open')) {
    showAllCheckboxes.classList.add('publications__subtitle-mobile--open');
    showAllCheckboxes.setAttribute('opened', true);
  } else if (window.innerWidth < 577 && showAllCheckboxes.classList.contains('publications__subtitle-mobile--open')) {
    showAllCheckboxes.classList.remove('publications__subtitle-mobile--open');
    showAllCheckboxes.removeAttribute('opened');
  };

  if (showAllCheckboxes.classList.contains('publications__subtitle-mobile--open')) {
    checkboxItems.forEach((el) => {
      el.classList.add('publications__checkbox-item--visible');
    });
    checkboxUnmark.forEach((el) => {
      el.classList.remove('publications__checkbox-unmark--active');
    });
  } else {
    checkboxItems.forEach((el) => {
      if (!el.querySelector('.publications__checkbox-input').hasAttribute('checked')) {
        el.classList.remove('publications__checkbox-item--visible');
      }
    });
    checkboxUnmark.forEach((el) => {
      if (el.parentNode.querySelector('.publications__checkbox-input').hasAttribute('checked')) {
        el.classList.add('publications__checkbox-unmark--active');
      }
    });
  };

});

checkboxes.forEach((item) => {
  const parent = item.parentNode;
  const children = item.querySelector('.publications__checkbox-input');

  function checkboxClick() {
    if (children.hasAttribute('checked') && showAllCheckboxes.classList.contains('publications__subtitle-mobile--open')) {
      children.removeAttribute('checked');
    } else if (!children.hasAttribute('checked')) {
      children.setAttribute('checked', true);
      parent.classList.add('publications__checkbox-item--visible');
    };
  };
  item.addEventListener('click', (e) => {
    e.preventDefault();
    checkboxClick();
  });
  item.addEventListener("keydown", function (e) {
    if (event.code == 'Enter' || event.code == 'Space') {
      e.preventDefault();
      checkboxClick();
    };
  });
});

let startCheckbox = document.querySelector('.publications__checkbox-list .publications__checkbox-item:nth-child(4) .publications__checkbox-custom');
startCheckbox.click();

checkboxUnmark.forEach((item) => {
  const parent = item.parentNode;
  item.addEventListener('click', (e) => {
    e.preventDefault();
    parent.querySelector('.publications__checkbox-input').removeAttribute('checked');
    parent.closest('.publications__checkbox-item').classList.remove('publications__checkbox-item--visible');
  });
});

// Секция Projects (тултипы):

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((item) => {

  function tooltipOpen() {
    item.setAttribute('focused', true);
    item.classList.add('tooltip--focused');
  };

  function tooltipClose() {
    item.removeAttribute('focused');
    item.classList.remove('tooltip--focused');
    if (item.querySelector('.tooltip__text').classList.contains('tooltip__text--right')) {
      item.querySelector('.tooltip__text').classList.remove('tooltip__text--right');
    };
    if (item.querySelector('.tooltip__text').classList.contains('tooltip__text--left')) {
      item.querySelector('.tooltip__text').classList.remove('tooltip__text--left');
    };
  };

  function closeAllTooltips() {
    tooltips.forEach(function (item) {
      item.removeAttribute('focused');
      item.classList.remove('tooltip--focused');
      if (item.querySelector('.tooltip__text').classList.contains('tooltip__text--right')) {
        item.querySelector('.tooltip__text').classList.remove('tooltip__text--right');
      };
      if (item.querySelector('.tooltip__text').classList.contains('tooltip__text--left')) {
        item.querySelector('.tooltip__text').classList.remove('tooltip__text--left');
      };
    });
  };

  item.addEventListener('click', (e) => {
    let distance = item.getBoundingClientRect();
    let tooltipText = item.querySelector('.tooltip__text');
    e.preventDefault();
    if (window.innerWidth < 1367 && !item.hasAttribute('focused')) {
      closeAllTooltips();
      tooltipOpen();
    } else if (window.innerWidth < 1367 && item.hasAttribute('focused')) {
      tooltipClose();
    };
    if (distance.left < 120 && !tooltipText.classList.contains('tooltip__text--right')) {
      tooltipText.classList.add('tooltip__text--right');
    } else if ((window.innerWidth - distance.right) < 120 && !tooltipText.classList.contains('tooltip__text--left')) {
      tooltipText.classList.add('tooltip__text--left');
    }
  });
});

// Секция Contacts (отступы для блока обратной связи):

const feedbackBlock = document.querySelector('.contacts-data__feedback');
const contactsTitle = document.querySelector('.contacts__section-title');
const officeBlock = document.querySelector('.contacts-data__office');
const officeMap = document.querySelector('.contacts-data__map');

function feedbackPadding() {
  let padding = contactsTitle.offsetLeft;
  feedbackBlock.style.paddingLeft = padding + 'px';
  if (window.innerWidth < 769) {
    feedbackBlock.style.paddingRight = padding + 'px';
  }
  if (window.innerWidth < 577) {
    officeMap.style.marginTop = officeBlock.offsetHeight + 20 + 'px';
    officeBlock.style.paddingLeft = padding + 'px';
  } else {
    officeMap.style.marginTop = 0;
    officeBlock.style.paddingLeft = 0;
  }
}

feedbackPadding();

window.addEventListener('resize', () => {
  feedbackPadding();
});

// Форма обратной связи (Feedback Form) - валидация, маскирование:

// Inputmask:

let inputs = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// Валидация:

function validateForms(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: {
      name: {
        required: 'Введите Ваше имя',
        minLength: 'Минимум два символа',
        maxLength: 'Максимум 30 символов'
      },
      login: {
        required: 'Введите Ваш логин',
        minLength: 'Минимум четыре символа',
        maxLength: 'Максимум 15 символов'
      },
      password: {
        required: 'Введите Ваш пароль',
        minLength: 'Минимум четыре символа',
        maxLength: 'Максимум восемь символов'
      },
      phone: 'Корректно заполните это поле'
    },
    colorWrong: '#9D5CD0',
    focusWrongField: true
    // submitHandler: function (form, values, ajax) {
    //   console.log(form);

    //   let formData = new FormData(form);

    //   fetch("mail.php", {
    //       method: "POST",
    //       body: formData
    //     })
    //     .then(function (data) {
    //       console.log(data);
    //       console.log('Отправлено');
    //       form.reset();
    //     });
    // }
  });
}

validateForms('.feedback__form', {
  name: {
    required: true,
    minLength: 2,
    maxLength: 30
  },
  phone: {
    required: true,
    function: (name, value) => {
      const phone = inputs.inputmask.unmaskedvalue()
      console.log(phone);
      return Number(phone) && phone.length === 10
    }
  }
});

validateForms('.popup__login-form', {
  login: {
    required: true,
    minLength: 4,
    maxLength: 15
  },
  password: {
    required: true,
    minLength: 4,
    maxLength: 8
  }
});