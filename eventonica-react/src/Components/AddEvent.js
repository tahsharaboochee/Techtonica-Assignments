import React, {useReducer} from 'react'
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap'

function AddEvent(props){
  //useReducer takes a function (called reducer) that determines how React will update your state given the new state that was passed into this function
  const[eventInfo, setAddEvent] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      name: '',
      id: null,
      category: '',
      date: ''
    }
  )

  const handleEventInfo = e => {
    const {name, value} = e.target;
    setAddEvent({[name]: value});
  }

  const CreateEvent = e => {
    e.preventDefault()
    fetch('http://localhost:8080/api/events', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: eventInfo.name,
        category: eventInfo.category,
        date: eventInfo.date
      })
    })
    .then(res =>{
      if(res.ok){
        props.fetchAndDisplayEvents()
      }
    })
    .catch(err => console.error(err))
  }

  return (
    <Card className='event' body inverse color='info'>
    <center><h3>Add Event</h3></center>
      <Form onSubmit={CreateEvent}>
        <FormGroup>
          <Label for="name">Name:</Label> 
          <Input type='text' name='name' id='name' onChange={handleEventInfo} value={eventInfo.name} ></Input>
          <Label for="name">Category:</Label> 
          <Input type="select" name='category' id="category"  value={eventInfo.category} onChange={handleEventInfo}>
            <option value="Concerts">Concerts</option>
            <option value="Sports">Sports</option>
            <option value="Arts & Theater">Arts & Theater</option>
            <option value="Family">Family</option>
          </Input>
          <Label for="name">Date:</Label> 
          <Input type='date' name='date' id='date' min="2020-01-01" max="2020-12-31" onChange={handleEventInfo} value={eventInfo.date} ></Input> 
        </FormGroup>
        <Button color='success'>Add Event</Button>
      </Form>
    </Card>
  )
}

export default AddEvent
