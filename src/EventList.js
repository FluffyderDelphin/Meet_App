import React, { Component } from 'react';
import Event from './Event';

function Eventlist({ events, numberOfEvents }) {
  return (
    <ul className="EventList">
      {events.map((event, index) =>
        index < numberOfEvents ? (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ) : null
      )}
    </ul>
  );
}
export default Eventlist;
