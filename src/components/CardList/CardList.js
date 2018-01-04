import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardList = ({ allTheHouses }) => {
  const houseData = allTheHouses.map( (house, index) =>
    <Card house={house}
            key={`house - ${index}`} />);


  return (
    <div>
      <h4>{houseData}</h4>
    </div>

  );
};

CardList.propTypes = {
  allTheHouses: PropTypes.arrayOf(PropTypes.object)
};

export default CardList;
