import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  let numberOfEvents, EventListWrapper;
  beforeAll(() => {
    EventListWrapper = shallow(
      <EventList events={mockData} numberOfEvents={mockData.length} />
    );
  });
  test('render corrrect number of events', () => {
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

  test('Event List should be  equal to NumberOfEvents if its less then the Events Array', () => {
    <EventList events={mockData} numberOfEvents={1} />;
    expect(EventListWrapper.find(Event).length).toBe(1);
  });
});
