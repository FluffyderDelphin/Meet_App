import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberofEvents from '../NumberOfEvents';
import Eventlist from '../EventList';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

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

  test('App has "events" state', () => {
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
  });

  test('App has "locations" state', () => {
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
  });

  test('App has "currentLocation" state', () => {
    const AppLocationsState = AppWrapper.state('currentLocation');
    expect(AppLocationsState).not.toEqual(undefined);
  });
});

describe('<App /> integration', () => {
  let AppWrapper;
  beforeEach(() => {
    AppWrapper = mount(<App />);
  });

  afterEach(() => {
    AppWrapper.unmount();
  });

  test('App passes  "Events" state as a prop to Eventlist', () => {
    const AppEventsState = AppWrapper.state('events');
    AppWrapper.setState({
      events: mockData,
    });
    expect(AppWrapper.find(Eventlist).props().events).toEqual(AppEventsState);
  });

  test('App passes  "currentLocation" state as a prop to NumberOfEvents', () => {
    const AppEventsState = AppWrapper.state('currentLocation');
    AppWrapper.setState({
      currentLocation: 'all',
    });
    expect(AppWrapper.find(NumberofEvents).props().currentLocation).toEqual(
      AppEventsState
    );
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppLocationsState = AppWrapper.state('locations');
    AppWrapper.setState({
      locations: extractLocations(mockData),
    });
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
  });

  test('get list of events matching the city selected by the user', async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const suggestionItems = AppWrapper.find(CitySearch).find(
      '.suggestions .suggestion-item'
    );
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
  });

  // NumberofEvents Intergration Tests
  test('App passes  "NumberofEvents" state as a prop to NumberofEvents and Eventslist', () => {
    const NumberOfEventsState = AppWrapper.state('numberOfEvents');
    expect(NumberOfEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(Eventlist).props().numberOfEvents).toEqual(
      NumberOfEventsState
    );
    expect(AppWrapper.find(NumberofEvents).props().numberOfEvents).toEqual(
      NumberOfEventsState
    );
  });

  // test('onChange handler in NumberofEvents Changes NumberOfEvents State', async () => {
  //   const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
  //   const NumberOfEventsHandler = NumberOfEventsWrapper.find('.numberOfEvents');
  //   AppWrapper.setState({
  //     numberOfEvents: 2,
  //   });
  //   const Number = { target: { value: 1 } };
  //   await NumberOfEventsHandler.simulate('change', Number);
  //   expect(AppWrapper.state('numberOfEvents')).toEqual(1);
  // });

  test('on click changes NumberOfEvents State', async () => {
    const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
    const NumberOfEventsButton =
      NumberOfEventsWrapper.find('.changeNumbers').hostNodes();
    const NumberOfEventsHandler =
      NumberOfEventsWrapper.find('.numberOfEvents').hostNodes();
    AppWrapper.setState({
      numberOfEvents: 2,
    });
    const Number = { target: { value: 1 } };
    await NumberOfEventsHandler.simulate('change', Number);
    await NumberOfEventsButton.simulate('click');
    expect(AppWrapper.state('numberOfEvents')).toEqual(1);
  });

  test('get list of events matching the numberOfEvents selected by the user', async () => {
    AppWrapper.setState({
      numberOfEvents: 1,
    });
    const NumberOfEventsState = AppWrapper.state('numberOfEvents');
    expect(AppWrapper.find(Event).length).toBeLessThanOrEqual(
      NumberOfEventsState
    );
  });
});
