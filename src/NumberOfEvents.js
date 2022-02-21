import react, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div>
        <input
          className="numberOfEvents"
          type="number"
          onChange={(e) => {
            this.props.updateEvents(this.props.events, e.target.value);
          }}
        >
          {this.props.numberOfEvents}
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;
