import React from 'react';
import App from '../../containers/App/App';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import houseMock from './mockData/houseMock';
import personMock from './mockData/personMock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('App Tests', () => {
  const initialStore = {
    housesInTheGame: []
  };
  const store = mockStore(initialStore);

  beforeEach( () => {
    fetchMock.get(`http://localhost:3001/api/v1/houses`, {
      status: 200,
      body: houseMock
    });
  });

  fetchMock.get(`http://localhost:3001/api/v1/character`, {
    status: 200,
    body: personMock
  });

  it('Should successfully render component', () => {
    const wrapper = shallow( <App store={store} />);

    expect(wrapper.length).toEqual(1);
  });
});
