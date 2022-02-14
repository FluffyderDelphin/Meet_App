import react, { Component } from 'react';

class NumberOfEvents extends Component {
  handleNumberChange = (event) => {
    this.props.setNumberofEvents(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          className="numberOfEvents"
          type="number"
          onChange={this.handleNumberChange}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;
