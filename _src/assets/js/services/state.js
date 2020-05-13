// list actions

const addList = (data) => {
  data.board.list.push({
    id: 'list-' + getNewId(),
    title: '',
    cards: [],
  });
};

const deleteList = (data, listId) => {
  const listIndex = getListIndex(data, listId);
  data.board.list.splice(listIndex, 1);
};

const moveListToLeft = (data, listId) => {
  const listIndex = getListIndex(data, listId);
  const currentList = data.board.list.splice(listIndex, 1);
  data.board.list.splice(listIndex - 1, 0, currentList[0]);
};

const moveListToRight = (data, listId) => {
  const listIndex = getListIndex(data, listId);
  const currentList = data.board.list.splice(listIndex, 1);
  data.board.list.splice(listIndex + 1, 0, currentList[0]);
};

const setListTitle = (data, listId, text) => {
  const listIndex = getListIndex(data, listId);
  data.board.list[listIndex].title = text;
};

// card actions

const addCard = (data, listId) => {
  const listIndex = getListIndex(data, listId);
  data.board.list[listIndex].cards.push({
    id: 'card-' + getNewId(),
    title: 'Nueva tarjeta',
    description: '',
    tags: [],
  });
};

const deleteCard = (data, cardId) => {
  const listIndex = getListIndexOfCard(data, cardId);
  const cardIndex = getCardIndex(data, cardId);
  data.board.list[listIndex].cards.splice(cardIndex, 1);
};

const moveCardUp = (data, cardId) => {
  const listIndex = getListIndexOfCard(data, cardId);
  const cardIndex = getCardIndex(data, cardId);
  const currentCard = data.board.list[listIndex].cards.splice(cardIndex, 1);
  data.board.list[listIndex].cards.splice(cardIndex - 1, 0, currentCard[0]);
};

const moveCardDown = (data, cardId) => {
  const listIndex = getListIndexOfCard(data, cardId);
  const cardIndex = getCardIndex(data, cardId);
  const currentCard = data.board.list[listIndex].cards.splice(cardIndex, 1);
  data.board.list[listIndex].cards.splice(cardIndex + 1, 0, currentCard[0]);
};

const setCardTitle = (data, cardId, text) => {
  const card = getCard(data, cardId);
  card.title = text;
};

const setCardDescription = (data, cardId, text) => {
  const card = getCard(data, cardId);
  card.description = text;
};

// getters

const getCard = (data, id) => {
  for (const list of data.board.list) {
    for (const card of list.cards) {
      if (card.id === id) {
        return card;
      }
    }
  }
};

const getListOfCard = (data, id) => {
  return data.board.list[getListIndexOfCard(data, id)];
};

const filter = (data, filterText) => {
  filterText = filterText.toLowerCase();
  return data.map((list) => {
    const newList = {...list};
    newList.cards = newList.cards.filter((card) => card.title.toLowerCase().includes(filterText) === true);
    return newList;
  });
};

const groupCardByTags = (data) => {
  return data.reduce((acc, list) => {
    list.cards.forEach((card) => {
      card.tags.forEach((tag) => {
        // if (acc[tag] === undefined) {
        //   acc[tag] = [];
        // }
        acc[tag] = acc[tag] || [];
        acc[tag].push(card);
      });
    });
    return acc;
  }, {});
};

// helpers

const getListIndex = (data, id) => {
  return data.board.list.findIndex((list) => list.id === id);
};

const getListIndexOfCard = (data, id) => {
  for (let index = 0; index < data.board.list.length; index += 1) {
    const list = data.board.list[index];
    const cardFound = list.cards.find((card) => card.id === id);
    if (cardFound) {
      return index;
    }
  }
};

const getCardIndex = (data, id) => {
  for (let index = 0; index < data.board.list.length; index += 1) {
    const list = data.board.list[index];
    const cardIndex = list.cards.findIndex((card) => card.id === id);
    if (cardIndex >= 0) {
      return cardIndex;
    }
  }
};

const getNewId = () => {
  return Date.now();
};

export default {
  // getters
  getCard,
  getListOfCard,
  filter,
  groupCardByTags,
  // list
  addList,
  deleteList,
  moveListToLeft,
  moveListToRight,
  setListTitle,
  // card
  addCard,
  deleteCard,
  moveCardUp,
  moveCardDown,
  setCardTitle,
  setCardDescription,
};
