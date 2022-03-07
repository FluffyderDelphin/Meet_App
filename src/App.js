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
    currentLocation: 'all',
    maxEventsCount: 32,
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
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={(location, eventCount) => {
            this.updateEvents(location, eventCount);
          }}
        />
        <NumberOfEvents
          currentLocation={this.state.currentLocation}
          numberOfEvents={this.state.numberOfEvents}
          maxEventsCount={this.state.maxEventsCount}
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
