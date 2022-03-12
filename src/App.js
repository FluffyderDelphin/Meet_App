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
import { InfoAlert } from './Alert';

class App extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all',
    maxEventsCount: 32,
    isOnline: '',
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
    if (navigator.onLine) {
      this.setState({
        isOnline: '',
      });
    } else if (!navigator.onLine) {
      this.setState({
        isOnline: 'App is in Offline Mode',
      });
    }
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
        <InfoAlert text={this.state.errorText}></InfoAlert>
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
        <Row className="justify-content-md-center">
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
        <Row className="justify-content-md-center">
          <Col>
            <EventList
              events={this.state.events}
              numberOfEvents={this.state.numberOfEvents}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
