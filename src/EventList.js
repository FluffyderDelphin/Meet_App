import React, { Component } from 'react';
import Event from './Event';

function Eventlist({ events, numberOfEvents }) {
  return (
    <ul className="EventList">
      {events.slice(0, numberOfEvents).map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
}
export default Eventlist;
