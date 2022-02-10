import React, { Component } from 'react';
import Event from './Event';

function Eventlist({ events }) {
  return (
    <ul className="EventList">
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  );
}
export default Eventlist;
