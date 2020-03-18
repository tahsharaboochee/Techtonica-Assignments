import React from 'react'
import {Card} from 'reactstrap'

const DisplayEvents = ({events}) =>{
  return (
    <Card className='event' body inverse color='info'>
      <center><h3>All Events</h3></center>
      {events.map((event) =>(
        <ul key={event.event_id}>
          <li>{event.name} Event_id:{event.event_id} Category:{event.category} Date:{event.date} </li>
        </ul>
      ))}
    </Card>
  )
}

export default DisplayEvents