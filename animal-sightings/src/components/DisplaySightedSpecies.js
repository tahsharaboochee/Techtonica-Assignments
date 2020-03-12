import React from 'react'
import {Card} from 'reactstrap'


const DisplaySightedSpecies = ({sighted}) =>{
  return (
    <Card className='sighted' body inverse color='info'>
      <center><h3>All Sighted Species</h3></center>
        <ul>
          {sighted.map((sighting, i) =>(
              <li key={sighting[i]}>Tracked specie id:{sighting.tracked_specie_id} Overall Health:{sighting.specie_health} Location: {sighting.location_sighted} Date:{sighting.date_sighted} </li>
          ))}
        </ul>
    </Card>
  )
}

export default DisplaySightedSpecies