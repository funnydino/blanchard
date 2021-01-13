"use strict";

let artistLink = document.querySelectorAll('.artists__link');
let artistList = document.querySelectorAll('.artists__item');

[...artistLink].forEach(function (artList) {
  artList.addEventListener('click', function () {
    artList.closest('.artists__item').classList.toggle("active");
  });
});

[...artistList].forEach(function (list) {
  list.addEventListener('mouseover', function () {
    list.closest('.artists__item').classList.toggle("visible");
  });
  list.addEventListener('mouseout', function () {
    artistList.forEach(n => n.classList.remove("visible"));
    artistList.forEach(n => n.classList.remove("active"));
  });
});