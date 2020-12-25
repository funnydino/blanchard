"use strict";

// Инициализация Select'a:

const selectOne = document.querySelector('#select__one');
const choices = new Choices(selectOne, {
  searchEnabled: false,
});