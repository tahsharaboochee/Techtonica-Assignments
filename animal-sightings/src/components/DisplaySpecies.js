import React from 'react'
import {Card} from 'reactstrap'


const DisplaySpecies = ({species}) =>{
  return (
    <Card className='species' body inverse color='info'>
      <center><h3>All Species</h3></center>
      {species.map((species) =>(
        <ul key={species.tracked_species_id}>
          <li>Common Name:{species.common_name} Scientific Name: {species.scientific_name} Conservation Status: {species.conservation_status} Population:{species.num_living} specie_id:{species.specie_id}</li>
        </ul>
      ))}
    </Card>
  )
}

export default DisplaySpecies