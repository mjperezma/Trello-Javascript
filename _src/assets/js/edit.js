'use strict';

// edit

const toggleEdit = (ev) => {
  ev.stopPropagation();
  document.querySelector('.js-edit').classList.toggle('show');
  document.querySelector('.js-edit').classList.remove('d-none');
};

document.querySelectorAll('.js-card, .js-edit-close').forEach((card) => {
  card.addEventListener('click', toggleEdit);
});

const preventEditClosing = (ev) => {
  ev.stopPropagation();
};

document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);

// const newList = document.querySelector('.js-listnew');
// const main = document.querySelector('.js-main');
// const columnIndex = document.querySelector('.column-template');
// const newCard = document.querySelector('.js-add');
// const cardIndex = document.querySelector('.card-template');
// // crear columna azul
// function createList() {
//   const column = columnIndex.cloneNode(true);
//   column.classList.remove('column-template');
//   column.classList.remove('hidden');
//   main.appendChild(column);
//   // crear cachitos blancos
// }
// function createCard() {
//   const card = cardIndex.cloneNode(true);
//   card.classList.remove('card-template');
//   card.classList.remove('hidden');
// }
// newList.addEventListener('click', createList);
// newCard.addEventListener('click', createCard);
