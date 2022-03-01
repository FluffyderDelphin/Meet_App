import { shallow, mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let EventWrapper;
  test('Events are collapsed by default.', ({ given, then }) => {
    given('the user has not clicked on any Event', () => {
      EventWrapper = shallow(<Event />);
    });

    then('they are collapsed by default.', () => {
      expect(EventWrapper.state('ShowDetails')).toBe(false);
    });
  });

  test('Clicking on a ShowDetails Button expand the Details of the Event.', ({
    given,
    when,
    then,
  }) => {
    given('the Event is collapsed', () => {
      EventWrapper = shallow(<Event />);
      EventWrapper.setState({
        ShowDetails: false,
      });
    });

    when('the User clicks on a ShowDetails Button', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });

    then('the Event expands showing Details.', () => {
      expect(EventWrapper.state('ShowDetails')).toBe(true);
    });
  });

  test('When the Details of an Event are expanded, User can Hide the Details by clicking "HideDetails".', ({
    given,
    when,
    then,
  }) => {
    given('the Event is expanded.', () => {
      EventWrapper = shallow(<Event />);
      EventWrapper.setState({
        ShowDetails: true,
      });
    });

    when('the user clicks on a HideDetails Button', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });

    then('the Even gets collapsed again.', () => {
      expect(EventWrapper.state('ShowDetails')).toBe(false);
    });
  });
});
