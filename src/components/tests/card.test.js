import React from 'react';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
import houseMock from './mockData/houseMock';

describe('Card Tests', () => {


  it('should be defined', () => {
    const renderedCard = shallow(
      <Card house={houseMock[0]} />);

    expect(renderedCard).toBeDefined();  
  });

  it('should render component and match snapshot', () => {
    const renderedCard = shallow(
      <Card house={houseMock[0]} />);

    expect(renderedCard).toMatchSnapshot();
  });
});
