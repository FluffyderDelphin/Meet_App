import react, { Component } from 'react';

class NumberOfEvents extends Component {
  numberOfEvents = this.props.numberOfEvents;
  render() {
    return (
      <div>
        <input className="numberOfEvents" type="number"></input>
      </div>
    );
  }
}

export default NumberOfEvents;
