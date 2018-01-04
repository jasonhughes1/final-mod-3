import { fetchHouseData } from '../actions';

export const fetchData = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/houses')
      .then(response => response.json())
      .then(response => swornMembersFetch(response))
      .then(response => dispatch(fetchHouseData(response)));
  };
};


const swornMembersFetch = (incomingData) => {
  const houseWithMember = incomingData.map( (house) => {
    let houseWithoutMember = {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons,
      words: house.words
    };

    const characters = house.swornMembers.map( character => {
      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        body: JSON.stringify( {url: character } ),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(person => console.log(person.name));
    });
    console.log(characters);
  });
};
