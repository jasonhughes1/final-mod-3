import { fetchHouseData } from '../actions';

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/houses')
      .then(response => response.json())
      .then(response => dispatch(fetchHouseData(response)));
  };
};
