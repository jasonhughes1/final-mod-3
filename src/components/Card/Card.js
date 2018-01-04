import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Card extends Component {
  constructor() {
    super();
    this.state = {
      displayMembers: false
    };
  }

  toggleMembers() {
    this.setState({
      displayMembers: !this.state.displayMembers
    });
  }

  render() {
    const { house } = this.props;
    const seats = house.seats.map( seat =>
      <p>{seat}</p>);
    const titles = house.titles.map( title =>
      <p className='display-me'>{title}</p>);
    const ancestralWeapons = house.ancestralWeapons.map( weapon =>
      <p>{weapon}</p>);
    const members = house.swornMembers.map( (member, index) =>
      <p className='display-me'>{member}</p>)


    return (
      <div className='card'
        onClick={() => this.toggleMembers()}>
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
        {this.state.displayMembers &&
          <div>
          <h2>Sworm Members</h2>
        <div className='display-data members'>{members}</div>
      </div>
      }
      </div>
    );
  }
}



export default Card;
