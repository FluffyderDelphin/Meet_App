import React from 'react';
import Event from './Event';
import ListGroup from 'react-bootstrap/ListGroup';

function Eventlist({ events, numberOfEvents }) {
  return (
    <ListGroup className="EventList">
      {events.slice(0, numberOfEvents).map((event) => (
        <ListGroup.Item key={event.id}>
          <Event event={event} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
export default Eventlist;
