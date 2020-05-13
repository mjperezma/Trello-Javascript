'use strict';

import helpers from './helpers.js';

// buttons

const toggleMenu = () => {
  document.querySelector('.js-menu').classList.toggle('show');
};

document.querySelectorAll('.js-menu-btn').forEach((btn) => {
  btn.addEventListener('click', toggleMenu);
});

// render

const render = (data) => {
  const tagsEl = document.querySelector('.js-menu-tags');
  tagsEl.innerHTML = '';
  for (const tag in data) {
    const containerEl = helpers.appendElement(tagsEl, {
      tag: 'h6',
      class: 'h5',
    });
    helpers.appendElement(containerEl, {
      tag: 'span',
      class: 'badge badge-secondary bg-success',
      text: tag,
    });
    renderTags(tagsEl, data[tag]);
  }
};

const renderTags = (parent, cards) => {
  const ulEl = helpers.appendElement(parent, {
    tag: 'ul',
  });
  cards.forEach((card) => {
    const liEl = helpers.appendElement(ulEl, {
      tag: 'li',
    });
    helpers.appendElement(liEl, {
      tag: 'small',
      text: card.title,
    });
  });
};

export default {
  render,
};
