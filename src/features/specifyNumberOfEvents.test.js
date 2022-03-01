import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { shallow, mount } from 'enzyme';
import NumberofEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppWrapper;
  test('When the user hasnt set a Number of Events the default Number displayed is 32', ({
    given,
    when,
    then,
  }) => {
    given('the user hasnt specified a Number and looks for Events.', () => {
      AppWrapper = mount(<App />);
    });

    when('the User looks for the Events. Then', () => {});

    then('number of Events displayed is maxiumum 32 by default', () => {
      expect(AppWrapper.find(Event).length).toBeLessThanOrEqual(32);
    });
  });
  test('When the User specifies a Number of Events. The Number of Events displayed change acording to that Number.', ({
    given,
    when,
    then,
  }) => {
    given('User Changed the Number of Events Count', async () => {
      AppWrapper = await mount(<App />);
      const NumberOfEventsWrapper = AppWrapper.find(NumberofEvents);
      const NumberOfEventsButton = NumberOfEventsWrapper.find('.changeNumbers');
      const NumberOfEventsHandler =
        NumberOfEventsWrapper.find('.numberOfEvents');
      AppWrapper.setState({
        numberOfEvents: 2,
      });
    });

    when('the user clicks on the Update Events Button.', () => {
      const Number = { target: { value: 1 } };
      NumberOfEventsHandler.simulate('change', Number);
      NumberOfEventsButton.simulate('click');
    });

    then('the Number of displayed Events changes.', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(1);
    });
  });
});
