import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> components', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('default maximum Number of Events is 32', () => {
    expect(NumberOfEventsWrapper.find('.event')).toBeLessThanOrEqual(32);
  });
});
