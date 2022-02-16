import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import React, { Component } from 'react';

class App extends Component {
  state = {
    numberOfEvents: 32,
    events: '',
  };
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}
export default App;
