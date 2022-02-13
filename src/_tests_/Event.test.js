import { shallow } from 'enzyme';
import React from 'react';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> components', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });
  test('"Show Details"Button will show more Details about Event', () => {
    EventWrapper.setState({
      ShowDetails: false,
    });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('ShowDetails')).toBe(true);
  });

  test('"Hide Details"Button will hide Details about the Event', () => {
    EventWrapper.setState({
      ShowDetails: true,
    });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('ShowDetails')).toBe(false);
  });

  test('when showdetails is true, the desription is also renderd', () => {
    EventWrapper.setState({
      ShowDetails: true,
    });
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });
});
