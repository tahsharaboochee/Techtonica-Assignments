import React from 'react'
import {Card} from 'reactstrap'


const DisplayTrackedSpecies = ({tracked_species}) =>{
  return (
    <Card className='tracked' body inverse color='info'>
      <center><h3>All Tracked Species</h3></center>
        <ul>
          {tracked_species.map((tracked_specie) =>(
              <li key={tracked_specie.tracked_specie_id}>Tracked specie id:{tracked_specie.tracked_specie_id} Nickname:{tracked_specie.nickname} Specie ID: {tracked_specie.specie_id} Date Sighted:{tracked_specie.date_sighted} </li>
          ))}
        </ul>
    </Card>
  )
}

export default DisplayTrackedSpecies