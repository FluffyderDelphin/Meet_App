import { shallow } from 'enzyme';
import React, { Component } from 'react';

class Event extends Component {
  state = {
    ShowDetails: false,
  };
  showDetailsButton = 'Show Details';
  handleDetails = () => {
    const showDetails = this.state.ShowDetails;
    if (!showDetails) {
      this.setState({ ShowDetails: true });
      this.showDetailsButton = 'Hide Details';
    } else {
      this.setState({ ShowDetails: false });
      this.showDetailsButton = 'Show Details';
    }
  };
  render() {
    const { event } = this.props;
    return (
      <div>
        <button className="showDetails">{this.showDetailsButton}</button>
      </div>
    );
  }
}

export default Event;
