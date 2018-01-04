import React from 'react';
import Card from '../Card/Card';
import { shallow, mount, jest } from 'enzyme';
import houseMock from './mockData/houseMock';

describe('Card Tests', () => {

  it('should render component and match snapshot', () => {
    let mockFunc = jest.fn();
    const renderedCard = shallow(
      <Card house={houseMock[0]}
        mockFunc={mockFunc}
      />);

    expect(renderedCard).toMatchSnapshot();
  });

  it('should render component', () => {
    const mockFunc = jest.fn();
    const renderedCard = mount(
      <Card house={houseMock[0]}
        mockFunc={mockFunc}
      />);

    const div = renderedCard.find('.card');

    expect(renderedCard.state().displayMembers).toEqual(false);
    div.simulate('click');
    expect(renderedCard.state().displayMembers).toEqual(true);
  });
});
