import React from 'react';
import CardList from '../CardList/CardList';
import { shallow } from 'enzyme';
import houseMock from './mockData/houseMock';

describe('CardList Tests', () => {

  it('Should render component and match snapshot', () => {
    const renderedCardList = shallow(
      <CardList allTheHouses={houseMock} />);

    expect(renderedCardList).toMatchSnapshot();
  });
});
