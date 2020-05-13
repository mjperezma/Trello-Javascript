const getApiData = () => {
  return fetch('./api/board.json').then((response) => response.json());
};

export default {
  getApiData: getApiData,
};
