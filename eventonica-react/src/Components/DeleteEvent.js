import React, {useState} from 'react'
import {Card, Button, Form, FormGroup, Label, Input} from 'reactstrap'


function DeleteEvent(props){
  const[deleteEventById, setDeleteEventById] = useState(0)

  const handleId = e => {
    setDeleteEventById(e.target.value)  
  }
  const deleteById = e => {
    e.preventDefault() 
    fetch(`http://localhost:8080/api/events/${deleteEventById}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        event_id: deleteEventById
      })
    })
    .then(id =>{
      if(id.status){
        props.fetchAndDisplayEvents()
        setDeleteEventById('')  
      }
    })
    .catch(err => console.error(err))
  }

  return (
    <Card className='events' body inverse color='info'>
      <center><h3>Delete Event</h3></center>
      <Form onSubmit={deleteById}>
        <FormGroup>
          <Label for='name'>Event Id:</Label>
          <Input type='text' name='name' id='event-id' onChange={handleId} />
        </FormGroup>
        <Button color='danger'>Delete Event</Button>
      </Form>
    </Card>
  )
}

export default DeleteEvent