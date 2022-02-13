import React, { Component } from 'react';

class Event extends Component {
  state = {
    ShowDetails: false,
  };
  showDetailsButton = 'Show Details';
  // showDetailsCss = 'hidden';
  handleDetails = () => {
    const showDetailsCheck = this.state.ShowDetails;
    if (!showDetailsCheck) {
      this.setState({ ShowDetails: true });
      this.showDetailsButton = 'Hide Details';
      // this.showDetailsCss = 'displayed';
    } else {
      this.setState({ ShowDetails: false });
      this.showDetailsButton = 'Show Details';
      // this.showDetailsCss = 'hidden';
    }
  };
  render() {
    const { event } = this.props;
    return (
      <div>
        <button
          className="showDetails"
          onClick={() => {
            this.handleDetails();
          }}
        >
          {this.showDetailsButton}
        </button>
        <div className="title">{event.summary}</div>
        <div className={`details`}>
          <div className="description">{event.description}</div>
        </div>
        {/* {this.showDetailsDescription} */}
      </div>
    );
  }
}

export default Event;
