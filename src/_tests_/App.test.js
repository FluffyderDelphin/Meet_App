import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberofEvents from '../NumberOfEvents';
import Eventlist from '../EventList';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test('render NumberofEvents', () => {
    expect(AppWrapper.find(NumberofEvents)).toHaveLength(1);
  });

  test('App has Global State for NumberOfEvents', () => {
    expect(AppWrapper.state('numberOfEvents')).toBeDefined();
  });
});

describe('<App /> integration', () => {
  test('App passes  "Events" state as a prop to Eventlist', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('event');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(Eventlist).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });
});
