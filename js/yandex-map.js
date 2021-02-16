"use strict";

const yandexMap = document.getElementById('mainMap');
const officeTitle = document.querySelector('.contacts-data__office-title');
const officeAddress = document.querySelector('.contacts-data__office-address');

ymaps.ready(init);

function init() {

  const myMap = new ymaps.Map("mainMap", {
    center: [55.75842072026647, 37.60186270503227],
    zoom: 15
  });

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    myMap.behaviors.disable('drag');
  };

  const office4Placemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/pointer.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-5, -10]
  });

  const office2Placemark = new ymaps.Placemark([55.81092711057776, 36.97226749999999], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/pointer.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-5, -10]
  });

  myMap.geoObjects.add(office4Placemark);
  myMap.geoObjects.add(office2Placemark);

  function onResizeMap() {
    if (window.innerWidth > 1024) {
      myMap.setCenter([55.75842072026647, 37.60186270503227]);
      officeTitle.textContent = 'Шоурум №4';
      officeAddress.textContent = 'Леонтьевский переулок, дом\u00A05, строение\u00A01';
    } else {
      myMap.setCenter([55.81085461085774, 36.97511064155579]);
      myMap.setZoom(14);
      officeTitle.textContent = 'Шоурум №2';
      officeAddress.textContent = 'Покровский бульвар, дом\u00A024, строение\u00A03';
    }
  };

  onResizeMap();

  window.onresize = function () {
    onResizeMap();
  };
};