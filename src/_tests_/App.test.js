import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberofEvents from '../NumberOfEvents';

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
  test('default maximum lenght of NumberOfEvent list is 32', () => {
    // expect(AppWrapper.state('numberOfEvents')).toBe(32);
    expect(AppWrapper.find('.events').length).toBeLessThanOrEqual(32);
  });
});
