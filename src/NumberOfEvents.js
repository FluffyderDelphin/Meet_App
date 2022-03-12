import react, { Component } from 'react';
import { ErrorAlert } from './Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Button, ListGroup } from 'react-bootstrap';

class NumberOfEvents extends Component {
  state = {
    numberHandle: 32,
    errorText: '',
  };

  numberOfEventsHandler = (event) => {
    if (
      event.target.value < 1 ||
      event.target.value > this.props.maxEventsCount
    ) {
      this.setState({
        numberHandle: event.target.value,
        errorText: `Valid Scope 1-${this.props.maxEventsCount}`,
      });
    } else {
      this.setState({
        numberHandle: event.target.value,
        errorText: '',
      });
    }
  };

  render() {
    return (
      <Form className="numberOfEventsStyle">
        <Form.Group>
          <InputGroup>
            <Form.Control
              className="numberOfEvents"
              type="number"
              value={this.state.numberHandle}
              min="0"
              onChange={this.numberOfEventsHandler}
            />

            <Button
              variant="outline-secondary"
              id="button-addon2"
              className="changeNumbers"
              onClick={() => {
                this.props.updateEvents(
                  this.props.currentLocation,
                  this.state.numberHandle
                );
              }}
            >
              {' '}
              Update Event Count
            </Button>
          </InputGroup>
          <Form.Group className="errorMessage">
            <ErrorAlert text={this.state.errorText}></ErrorAlert>
          </Form.Group>
        </Form.Group>
      </Form>
    );
  }
}

export default NumberOfEvents;
