import * as reducers from '../../reducers/AppReducer';
import houseMock from './mockData/houseMock';

describe('Reducer Tests', () => {

  it('Should return the default store', () => {
    const expected = [];
    expect(reducers.allTheHouses(undefined, {})).toEqual(expected);
  });


  it('Should pass data into array', () => {
    const mockAction = {
      type: 'FETCH_DATA',
      houses: houseMock
    };

    const expectation = mockAction.houses;
    expect(reducers.allTheHouses([], mockAction)).toEqual(expectation);
  });
});
