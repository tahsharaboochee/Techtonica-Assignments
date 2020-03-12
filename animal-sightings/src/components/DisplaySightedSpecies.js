import React from 'react'
import {Card} from 'reactstrap'


const DisplaySightedSpecies = ({sighted}) =>{
  return (
    <Card className='sighted' body inverse color='info'>
      <center><h3>All Sighted Species</h3></center>
      {sighted.map((sighted) =>(
        <ul key={sighted.tracked_species_id}>
          <li>{sighted.name} specie_id:{sighted.tracked_specie_id} Overall Health:{sighted.specie_health} Location: {sighted.location_sighted} Date:{sighted.date_sighted} </li>
        </ul>
      ))}
    </Card>
  )
}

export default DisplaySightedSpecies