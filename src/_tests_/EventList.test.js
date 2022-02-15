import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  let numberOfEvents, EventListWrapper;
  beforeAll(() => {
    numberOfEvents = 1;
    EventListWrapper = shallow(
      <EventList events={mockData} numberOfEvents={numberOfEvents} />
    );
  });
  test('render corrrect number of events', () => {
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

  test('Event List should be either equal or lower to NumberOfEvents', () => {
    expect(EventListWrapper.find(Event).length).toBeLessThanOrEqual(
      numberOfEvents
    );
  });
});
