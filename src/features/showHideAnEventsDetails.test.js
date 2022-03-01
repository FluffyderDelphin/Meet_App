import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let EventWrapper;
  test('Events are collapsed by default.', ({ given, then }) => {
    given('the user has not clicked on any Event', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    then('they are collapsed by default.', () => {
      expect(EventWrapper.state('ShowDetails')).toBe(false);
      expect(EventWrapper.find('.details').instance().style.display).toBe(
        'none'
      );
    });
  });

  test('Clicking on a ShowDetails Button expand the Details of the Event.', ({
    given,
    when,
    then,
  }) => {
    given('the Event is collapsed', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.setState({
        ShowDetails: false,
      });
    });

    when('the User clicks on a ShowDetails Button', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });

    then('the Event expands showing Details.', () => {
      expect(EventWrapper.state('ShowDetails')).toBe(true);
      expect(EventWrapper.find('.details').instance().style.display).toBe(
        'block'
      );
    });
  });

  test('When the Details of an Event are expanded, User can Hide the Details by clicking "HideDetails".', ({
    given,
    when,
    then,
  }) => {
    given('the Event is expanded.', () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.setState({
        ShowDetails: true,
      });
    });

    when('the user clicks on a HideDetails Button', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });

    then('the Details get hidden', () => {
      expect(EventWrapper.state('ShowDetails')).toBe(false);
      expect(EventWrapper.find('.details').instance().style.display).toBe(
        'none'
      );
    });
  });
});
