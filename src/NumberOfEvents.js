import react, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div>
        <input
          className="numberOfEvents"
          type="number"
          value={this.props.numberOfEvents}
          min="0"
          onChange={(e) => {
            this.props.updateEvents(this.props.currentLocation, e.target.value);
          }}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
