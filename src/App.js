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
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);
      const reduceCount = locationEvents.lenght - numberOfEvents;
      const splicedEvents = locationEvents.splice(0, reduceCount);
      this.setState({
        events: splicedEvents,
      });
    });
  };
  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}
export default App;
