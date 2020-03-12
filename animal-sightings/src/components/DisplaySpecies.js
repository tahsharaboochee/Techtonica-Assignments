import React from 'react'
import {Card} from 'reactstrap'


const DisplaySpecies = ({species}) =>{
  return (
    <Card className='species' body inverse color='info'>
      <center><h3>All Species</h3></center>
      {species.map((species) =>(
        <ul key={species.species_id}>
          <li>{species.name} specie_id:{species.tracked_specie_id} Overall Health:{species.specie_health} Location: {species.location_sighted} Date:{species.date_sighted} </li>
        </ul>
      ))}
    </Card>
  )
}

export default DisplaySpecies