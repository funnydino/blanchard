"use strict";

let artistLink = document.querySelectorAll('.artists__nav-link');
let artistList = document.querySelectorAll('.artists__nav-item');
let artistClosest = document.querySelector('.artists__nav-link').closest('.artists__nav-item');

[...artistLink].forEach(function (artList) {
  artList.addEventListener('click', function () {
    artList.closest('.artists__nav-item').classList.toggle("active");
  });
});

[...artistList].forEach(function (list) {
  list.addEventListener('mouseover', function () {
    list.closest('.artists__nav-item').classList.toggle("visible");
  });
  list.addEventListener('mouseout', function () {
    artistList.forEach(n => n.classList.remove("visible"));
    artistList.forEach(n => n.classList.remove("active"));
  });
});

// let artistLink = document.querySelectorAll('.artists__nav-item');

// [...artistLink].forEach(function (list) {
//   list.addEventListener('mouseover', function () {
//     artistLink.forEach(n => n.classList.remove("visible"));
//     list.classList.toggle("visible");
//   });
//   list.addEventListener('mouseout', function () {
//     artistLink.forEach(n => n.classList.remove("visible"));
//   });
//   list.addEventListener('click', function () {
//     artistLink.forEach(n => n.classList.remove("visible"));
//     list.classList.toggle("active");
//   });
// });

// let artistLink = document.querySelectorAll('.artists__nav-link');
// let artistList = document.querySelectorAll('.artists__nav-item');
// let artistClosest = document.querySelector('.artists__nav-link').closest('.artists__nav-item');

// [...artistLink].forEach(function (list) {
//   list.addEventListener('mouseover', function () {
//     artistList.forEach(n => n.classList.remove("active"));
//     // list.closest('.artists__nav-item').classList.toggle("visible");
//     list.closest('.artists__nav-item').classList.toggle("active");
//   });
//   list.addEventListener('mouseout', function () {
//     artistList.forEach(n => n.classList.remove("visible"));
//     list.closest('.artists__nav-item').classList.toggle("active");
//   });
//   list.addEventListener('click', function () {
//     artistList.forEach(n => n.classList.remove("visible"));
//     list.closest('.artists__nav-item').classList.toggle("active");
//   });
// });