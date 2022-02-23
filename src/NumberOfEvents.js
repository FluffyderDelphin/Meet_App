import react, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div>
        <input
          className="numberOfEvents"
          type="number"
          value={this.props.numberOfEvents}
          onChange={(e) => {
            this.props.updateEvents(this.props.events, e.target.value);
          }}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
