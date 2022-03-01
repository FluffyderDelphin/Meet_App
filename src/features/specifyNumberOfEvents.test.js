import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { shallow, mount } from 'enzyme';
import NumberofEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppWrapper, NumberOfEventsWrapper;

  test('When the user hasnt set a Number of Events the default Number displayed is 32', ({
    given,
    when,
    then,
  }) => {
    given('the user hasnt specified a Number and looks for Events.', () => {
      AppWrapper = shallow(<App />);
    });

    when('the User looks for the Events. Then', () => {});

    then(/^number of Events displayed is (\d+) by default.$/, (arg0) => {
      expect(AppWrapper.find(Event).length).toBeLessThanOrEqual(32);
    });
  });

  test('When the User specifies a Number of Events. The Number of Events displayed change acording to that Number.', ({
    given,
    and,
    when,
    then,
  }) => {
    given('the User looking for Events.', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
      AppWrapper.setState({
        numberOfEvents: 32,
      });
    });

    and('wants to change the number of displayed events', () => {});

    when('the user specifies a number of Events.', () => {
      const Number = { target: { value: 1 } };
      const NumberOfEventsHandler =
        NumberOfEventsWrapper.find('.numberOfEvents');
      NumberOfEventsHandler.simulate('change', Number);
    });

    and('clicks a Button to Confirm this Change', () => {
      const NumberOfEventsButton = NumberOfEventsWrapper.find('.changeNumbers');
      NumberOfEventsButton.simulate('click');
    });

    then('the Number of displayed Events changes.', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(1);
      expect(AppWrapper.find(Event).length).toBeLessThanOrEqual(1);
    });
  });
});
