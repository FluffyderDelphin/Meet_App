import React, { Component } from 'react';
import Event from './Event';

function Eventlist({ events, numberOfEvents }) {
  let renderEventList = (list,number) =>{
    return {for(let i= 0;i < number ;i++){
      <li>
      <Event event={list[1]} />
      </li>
    

    }}

  }
  return (
    <ul className="EventList">
      {/* {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))} */}
      {renderEventList(events,numberOfEvents);}
    </ul>
  );
}
export default Eventlist;
