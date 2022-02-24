import react, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberHandle: 32,
  };

  numberOfEventsHandler = (event) => {
    this.setState({
      numberHandle: event.target.value,
    });
  };

  render() {
    return (
      <div>
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
