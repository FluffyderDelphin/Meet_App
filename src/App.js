import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
  };
  componentDidMount() {
    const { numberOfEvents } = this.state;
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, numberOfEvents),
        locations: extractLocations(events),
      });
    });
  }
  componentWillUnmount() {
    this.mounted = false;
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
      });
    });
  };
  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={(location, eventCount) => {
            this.updateEvents(location, eventCount);
          }}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          events={this.state.events}
          updateEvents={(location, eventCount) => {
            this.updateEvents(location, eventCount);
          }}
        />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}
export default App;
