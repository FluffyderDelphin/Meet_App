import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> components', () => {
  let NumberOfEventsWrapper, numberOfEvents;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents numberOfEvents={numberOfEvents} />
    );
  });

  test('render textbox  for setting the number', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('.numberOfEvents').props().type).toBe(
      'number'
    );
  });
  test('nummberOf Events props must always be positve', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents').props().min).toBe('0');
  });

  test('NumberOfEvents has "numberHandle" state defiened', () => {
    const NumberHandle = NumberOfEventsWrapper.state('numberHandle');
    expect(NumberHandle).not.toEqual(undefined);
  });
});
