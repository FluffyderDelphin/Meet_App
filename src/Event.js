import React, { Component } from 'react';

class Event extends Component {
  state = {
    ShowDetails: false,
  };
  showDetailsButton = 'Show Details';
  // showDetailsDescription = null;
  handleDetails = () => {
    const showDetailsCheck = this.state.ShowDetails;
    if (!showDetailsCheck) {
      this.setState({ ShowDetails: true });
      this.showDetailsButton = 'Hide Details';
      // return (this.showDetailsDescription = (
      //   <div className="description"></div>
      // ));
    } else {
      this.setState({ ShowDetails: false });
      this.showDetailsButton = 'Show Details';
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
        <div className="details">
          <div className="description">{event.description}</div>
        </div>
        {/* {this.showDetailsDescription} */}
      </div>
    );
  }
}

export default Event;
