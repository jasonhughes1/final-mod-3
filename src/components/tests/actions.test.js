import * as actions from '../../actions/';
import houseMock from './mockData/houseMock';

describe('actions', () => {

  it('Should return array of objects', () => {
    const data = {
      type: 'FETCH_DATA',
      houses: houseMock
    };

    const expectation = actions.fetchHouseData(houseMock);

    expect(expectation).toEqual(data);

  });
});
