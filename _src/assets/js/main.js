'use strict';

import api from './services/api.js';
import ls from './services/local-storage.js';
import state from './services/state.js';
import board from './dom/board.js';
import edit from './dom/edit.js';

let data = {};
let cardId = '';
let filterText = '';

// start

const startApp = () => {
  if (ls.isValid()) {
    data = ls.get();
    render();
  } else {
    api.getApiData().then((apiData) => {
      data = apiData;
      ls.set(data);
      render();
    });
  }
};

const handleBoardEvent = (ev) => {
  const dataset = ev.currentTarget.dataset;
  if (dataset.action === 'add-list') {
    state.addList(data);
  } else if (dataset.action === 'delete-list') {
    state.deleteList(data, dataset.listId);
  } else if (dataset.action === 'move-list-left') {
    state.moveListToLeft(data, dataset.listId);
  } else if (dataset.action === 'move-list-right') {
    state.moveListToRight(data, dataset.listId);
  } else if (dataset.action === 'set-list-title') {
    state.setListTitle(data, dataset.listId, ev.currentTarget.value);
  } else if (dataset.action === 'add-card') {
    state.addCard(data, dataset.listId);
  } else if (dataset.action === 'move-card-up') {
    state.moveCardUp(data, dataset.cardId);
  } else if (dataset.action === 'move-card-down') {
    state.moveCardDown(data, dataset.cardId);
  }
  ls.set(data);
  render();
};
const openCard = (ev) => {
  cardId = ev.currentTarget.dataset.cardId;
  const card = state.getCard(data, cardId);
  const list = state.getListOfCard(data, cardId);
  edit.open(card, list);
};
const handleDeleteCard = () => {
  state.deleteCard(data, cardId);
  edit.close();
  ls.set(data);
  render();
};
const handleCardTitle = (ev) => {
  state.setCardTitle(data, cardId, ev.currentTarget.value);
  ls.set(data);
  render();
};

const handleCardDescription = (ev) => {
  state.setCardDescription(data, cardId, ev.currentTarget.value);
  ls.set(data);
};

const handleFilter = (ev) => {
  filterText = ev.currentTarget.value;
  render();
};
const render = () => {
  // board
  const filteredList = state.filter(data.board.list, filterText);
  board.render(filteredList);
  listenBoardEvents();
  // menu
  const groupedCardByTags = state.groupCardByTags(data.board.list);
  menu.render(groupedCardByTags);
};

// events

const listenBoardEvents = () => {
  listenEvents('.js-change', 'change', handleBoardEvent);
  listenEvents('.js-click', 'click', handleBoardEvent);
  listenEvents('.js-open-card', 'click', openCard);
  listenEvents('.js-submit', 'submit', preventSubmitForm);
};

const listenInitialEvents = () => {
  listenEvents('.js-edit-title', 'keyup', handleCardTitle);
  listenEvents('.js-edit-description', 'blur', handleCardDescription);
  listenEvents('.js-edit-delete', 'click', handleDeleteCard);
  listenEvents('.js-filter', 'keyup', handleFilter);
};

const listenEvents = (selector, evenType, evenHandler) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener(evenType, evenHandler);
  });
};

const preventSubmitForm = (ev) => {
  ev.preventDefault();
};
// start

listenInitialEvents();
startApp();
