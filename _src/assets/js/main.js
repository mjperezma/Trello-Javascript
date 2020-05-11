'use strict';

import './edit.js';
import './menu.js';
import './searchInput.js';

let card = [];
const getApiData = () => {
  fetch('./api/board.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      card = data.board.list;
    });
  createNewList();
};

const main = document.querySelector('.js-main');

function createNewList() {
  let div = document.createElement('div');
  let form = document.createElement('form');
  let input = document.createElement('input');
  let button = document.createElement('div');
  let span = document.createElement('span');
  let button1 = document.createElement('div');
  let buttonErase = document.createElement('button');
  let spanErase = document.createElement('span');
  let buttonLeft = document.createElement('button');
  let spanLeft = document.createElement('span');
  let buttonRight = document.createElement('button');
  let spanRight = document.createElement('span');
  let buttonAddTask = document.createElement('button');
  let spanAddTask = document.createElement('span');
  let textSpanTask = document.createTextNode(' Añadir otra tarjeta');
  let box = document.createElement('div');
  let divCard = document.createElement('div');

  box.setAttribute('class', 'app-list');
  div.setAttribute('class', 'p-1 rounded-sm bg-primary shadow');
  form.setAttribute('class', 'app-list-form align-middle p-1 position-relative ');
  input.setAttribute('class', 'app-list-input form-control form-control-sm');
  input.setAttribute('placeholder', 'Tareas importantes');
  input.setAttribute('value', 'Doing');
  input.setAttribute('type', 'text');
  input.setAttribute('title', 'Editar titulo de la lista');
  button.setAttribute('class', 'app-list-options');
  span.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');
  button1.setAttribute('class', 'app-list-btns btn-group btn-group-sm');
  buttonErase.setAttribute('class', 'btn btn-light text-muted border shadow-sm');
  buttonErase.setAttribute('type', 'button');
  buttonErase.setAttribute('title', 'Borrar esta tarjeta');
  spanErase.setAttribute('class', 'fas fa-trash-alt');
  buttonLeft.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-left');
  buttonLeft.setAttribute('type', 'button');
  buttonLeft.setAttribute('title', 'Mover esta lista hacia la derecha');
  spanLeft.setAttribute('class', 'fas fa-arrow-left');
  buttonRight.setAttribute('class', 'btn btn-light text-muted border shadow-sm app-list-move-right');
  buttonRight.setAttribute('type', 'button');
  buttonRight.setAttribute('title', 'Mover esta lista hacia la izquierda');
  spanRight.setAttribute('class', 'fas fa-arrow-right');
  buttonAddTask.setAttribute('type', 'button');
  buttonAddTask.setAttribute('class', 'ml-1 btn btn-primary btn-sm text-white-50 js-add');
  buttonAddTask.setAttribute('title', ' Añadir otra tarjeta');
  spanAddTask.setAttribute('class', 'fas fa-plus');
  divCard.setAttribute('class', 'js-card');

  main.appendChild(box);
  box.appendChild(div);
  div.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);
  button.appendChild(span);
  button.appendChild(button1);
  button1.appendChild(buttonErase);
  buttonErase.appendChild(spanErase);
  button1.appendChild(buttonLeft);
  buttonLeft.appendChild(spanLeft);
  button1.appendChild(buttonRight);
  buttonRight.appendChild(spanRight);
  div.appendChild(divCard);
  div.appendChild(buttonAddTask);
  div.appendChild(spanAddTask);

  createNewCard();
  buttonAddTask.appendChild(spanAddTask);
  buttonAddTask.appendChild(textSpanTask);
}

function createNewCard() {
  const card = document.querySelector('.js-card');
  let articleCard = document.createElement('article');
  let divOneArticle = document.createElement('div');
  let spanFirst = document.createElement('span');
  let spanSecond = document.createElement('span');
  let spanThird = document.createElement('span');
  let divTitle = document.createElement('div');
  let titleDiv = document.createElement('h3');
  let textTitleTask = document.createTextNode(' Publicar en Github Pages');
  let titleJs = document.createTextNode('JS');
  let titleCss = document.createTextNode('Css');
  let titleHtml = document.createTextNode('Html');
  let divTaskDone = document.createElement('div');
  let smallFist = document.createElement('small');
  let smallSecond = document.createElement('small');
  let smallThird = document.createElement('small');
  let textTaskDone = document.createTextNode(' 3/5');

  articleCard.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
  articleCard.setAttribute('title', 'Abrir la tarjeta');
  spanFirst.setAttribute('class', 'badge badge-secondary bg-success');
  spanSecond.setAttribute('class', 'badge badge-secondary bg-success');
  spanThird.setAttribute('class', 'badge badge-secondary bg-success');
  titleDiv.setAttribute('class', 'h6');
  divTaskDone.setAttribute('class', 'text-black-50');
  smallFist.setAttribute('class', 'pr-2 fas fa-align-left');
  smallSecond.setAttribute('class', 'far fa-check-square');
  smallThird.setAttribute('title', 'Subtareas completadas: 3 de 5');

  card.appendChild(articleCard);
  articleCard.appendChild(divOneArticle);
  divOneArticle.appendChild(spanFirst);
  divOneArticle.appendChild(spanSecond);
  divOneArticle.appendChild(spanThird);
  divTitle.appendChild(titleDiv);
  articleCard.appendChild(divTitle);
  titleDiv.appendChild(textTitleTask);
  spanFirst.appendChild(titleJs);
  spanSecond.appendChild(titleCss);
  spanThird.appendChild(titleHtml);
  articleCard.appendChild(divTaskDone);
  divTaskDone.appendChild(smallFist);
  divTaskDone.appendChild(smallSecond);
  divTaskDone.appendChild(smallThird);
  smallThird.appendChild(textTaskDone);
}

getApiData();
