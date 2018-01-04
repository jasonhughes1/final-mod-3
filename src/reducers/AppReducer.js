export const allTheHouses = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_DATA':
    return action.houses;

  default:
    return state;
  }
};
