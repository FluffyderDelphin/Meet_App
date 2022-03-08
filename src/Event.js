import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Event extends Component {
  state = {
    ShowDetails: false,
  };
  showDetailsButton = 'Show Details';
  handleDetails = () => {
    const showDetailsCheck = this.state.ShowDetails;
    if (!showDetailsCheck) {
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
      <Card className="event" border="light">
        <Card.Header>
          <Card.Title className="title">{event.summary}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text
            className={`details`}
            style={
              this.state.ShowDetails
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <div className="description">{event.description}</div>
          </Card.Text>
          <Button
            variant="info"
            className="showDetails"
            onClick={() => {
              this.handleDetails();
            }}
          >
            {this.showDetailsButton}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Event;
