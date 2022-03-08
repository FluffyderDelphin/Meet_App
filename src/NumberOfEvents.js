import react, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberHandle: 32,
    errorText: '',
  };

  numberOfEventsHandler = (event) => {
    if (
      event.target.value < 1 ||
      event.target.value > this.props.maxEventsCount
    ) {
      this.setState({
        numberHandle: event.target.value,
        errorText: `Valid Scope 1-${this.props.maxEventsCount}`,
      });
    } else {
      this.setState({
        numberHandle: event.target.value,
        errorText: '',
      });
    }
  };

  render() {
    return (
      <div className="numberOfEventsStyle">
        <div className="errorMessage">
          <ErrorAlert text={this.state.errorText}></ErrorAlert>
        </div>
        <input
          className="numberOfEvents"
          type="number"
          value={this.state.numberHandle}
          min="0"
          onChange={this.numberOfEventsHandler}
        />
        <button
          className="changeNumbers"
          onClick={() => {
            this.props.updateEvents(
              this.props.currentLocation,
              this.state.numberHandle
            );
          }}
        >
          Update Event Count
        </button>
      </div>
    );
  }
}

export default NumberOfEvents;
