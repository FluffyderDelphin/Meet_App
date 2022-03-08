import './App.scss';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class App extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all',
    maxEventsCount: 32,
  };
  componentDidMount() {
    const { numberOfEvents } = this.state;
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, numberOfEvents),
        locations: extractLocations(events),
        maxEventsCount: events.length,
      });
    });
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      const sliceEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: sliceEvents,
        numberOfEvents: eventCount ? eventCount : this.state.numberOfEvents,
        currentLocation: location,
        maxEventsCount: events.length,
      });
    });
  };
  render() {
    return (
      <Container className="App">
        <Row className="justify-content-md-center">
          <Col>
            <CitySearch
              locations={this.state.locations}
              updateEvents={(location, eventCount) => {
                this.updateEvents(location, eventCount);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberOfEvents
              currentLocation={this.state.currentLocation}
              numberOfEvents={this.state.numberOfEvents}
              maxEventsCount={this.state.maxEventsCount}
              updateEvents={(location, eventCount) => {
                this.updateEvents(location, eventCount);
              }}
            />
          </Col>
        </Row>
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </Container>
    );
  }
}
export default App;
