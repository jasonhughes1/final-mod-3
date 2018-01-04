import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ house }) => {

  const seats = house.seats.map( seat => <p>{seat}</p>);
  const titles = house.titles.map( title => <p>{title}</p>);
  const ancestralWeapons = house.ancestralWeapons.map( weapon => <p>{weapon}</p>);

  return (
    <div className='card'>
      <h1>{house.name}</h1>
      <p>{house.founded}</p>
      <h2>Seats</h2>
      <h3>{seats}</h3>
      <h2>Titles</h2>
      <h3>{titles}</h3>
      <h2>Coat Of Arms</h2>
      <p>{house.coatOfArms}</p>
      <h2>Ancestral Weapons</h2>
      <div>{ancestralWeapons}</div>
      <h3>{house.words}</h3>
    </div>
  );
};


export default Card;
