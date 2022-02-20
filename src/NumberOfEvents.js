import react, { Component } from 'react';

class NumberOfEvents extends Component {
  numberOfEvents = this.props.numberOfEvents;
  render() {
    return (
      <div>
        <input
          className="numberOfEvents"
          type="number"
          onChange={(e) => {
            this.props.updateEvents(this.props.events, e.target.value);
          }}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
