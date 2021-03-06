import { shallow, mount } from 'enzyme';
import React from 'react';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> components', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = mount(<Event event={mockData[0]} />);
  });
  test('Event Compnent renders Event Data', () => {
    const { event } = EventWrapper.props();
    expect(EventWrapper.find('.title').hostNodes().text()).toBe(event.summary);

    expect(EventWrapper.find('.description').hostNodes().text()).toBe(
      event.description
    );
  });

  test('"Show Details"Button will show more Details about Event', () => {
    EventWrapper.setState({
      ShowDetails: false,
    });
    EventWrapper.find('.showDetails').hostNodes().simulate('click');
    expect(EventWrapper.state('ShowDetails')).toBe(true);
  });

  test('"Hide Details"Button will hide Details about the Event', () => {
    EventWrapper.setState({
      ShowDetails: true,
    });
    EventWrapper.find('.showDetails').hostNodes().simulate('click');
    expect(EventWrapper.state('ShowDetails')).toBe(false);
  });

  test('when showdetails is true ".details"   displayed', () => {
    EventWrapper.setState({
      ShowDetails: true,
    });
    expect(
      EventWrapper.find('.details').hostNodes().instance().style.display
    ).toBe('block');
  });

  test('when showdetails is false  ".details" is not displayed', () => {
    EventWrapper.setState({
      ShowDetails: false,
    });
    expect(
      EventWrapper.find('.details').hostNodes().instance().style.display
    ).toBe('none');
  });
});
