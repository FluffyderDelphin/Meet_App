import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { useState } from 'react';

function App() {
  const [numberOfEvents, setNumberofEvents] = useState(32);
  const [events, setEvents] = useState('');

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents
        setNumberofEvents={() => {
          setNumberofEvents();
        }}
        setEvents={() => {
          setEvents();
        }}
        events={events}
      />
      <EventList
        events={events}
        numberOfEvents={numberOfEvents}
        setEvents={() => {
          setEvents();
        }}
      />
    </div>
  );
}

export default App;
