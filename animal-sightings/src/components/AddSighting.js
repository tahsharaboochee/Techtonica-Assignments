import React, {useReducer} from 'react'
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap'

function AddSighting(props){
  //useReducer takes a function (called reducer) that determines how React will update your state given the new state that was passed into this function
  const[sightingInfo, setAddSighting] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      tracked_specie_id: '',
      specie_health: '',
      location_sighted: '',
      date: ''
    }
  )

  const handleSightingInfo = e => {
    const {name, value} = e.target;
    setAddSighting({[name]: value});
  }

  const CreateSighting = e => {
    e.preventDefault()
    fetch('http://localhost:5000/sightedSpecies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        tracked_specie_id: sightingInfo.tracked_specie_id,
        specie_health: sightingInfo.specie_health,
        location_sighted: sightingInfo.location_sighted,
        date: sightingInfo.date
      })
    })
    .then(res =>{
      if(res.ok){
        props.fetchAndDisplaySightedSpecies()
      }
    })
    .catch(err => console.error(err))
  }


  return (
    <Card className='sighting' body inverse color='info'>
    <center><h3>Add Sighting</h3></center>
      <Form onSubmit={CreateSighting}>
        <FormGroup>
          <Label for="name">Tracked Specie ID:</Label> 
          <Input type="text" name='tracked_specie_id' id="tracked_specie_id"  value={sightingInfo.tracked_specie_id} onChange={handleSightingInfo}></Input>
          <Label for="name">Specie_health:</Label> 
          <Input type="text" name='specie_health' id="specie_health"  value={sightingInfo.specie_health} onChange={handleSightingInfo}></Input>
          <Label for="name">Location Sighted:</Label> 
          <Input type="text" name='location_sighted' id="location_sighted"  value={sightingInfo.location_sighted} onChange={handleSightingInfo}></Input>
          <Label for="name">Date:</Label> 
          <Input type='date' name='date' id='date' min="2020-01-01" max="2020-12-31" onChange={handleSightingInfo} value={sightingInfo.date_sighted} ></Input> 
        </FormGroup>
        <Button color='success'>Add Sighting</Button>
      </Form>
    </Card>
  )
}

export default AddSighting