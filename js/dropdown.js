"use strict";

let artistLink = document.querySelectorAll('.artists__link');
let artistList = document.querySelectorAll('.artists__item');

[...artistLink].forEach(function (list) {
  list.addEventListener('click', function () {
    list.closest('.artists__item').classList.toggle("artists__item--active");
  });
});

[...artistList].forEach(function (list) {
  list.addEventListener('mouseover', function () {
    list.closest('.artists__item').classList.toggle("artists__item--visible");
  });
  list.addEventListener('mouseout', function () {
    artistList.forEach(n => n.classList.remove("artists__item--visible"));
    artistList.forEach(n => n.classList.remove("artists__item--active"));
  });
});