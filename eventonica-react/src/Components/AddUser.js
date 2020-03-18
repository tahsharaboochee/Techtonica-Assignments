import React, { useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';

function AddUser(props) {
  const[addUser, setAddUser] = useState({
    id: 0,
    name: ''
  })

  const onChange = e => {
    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value
    })
  }

  const CreateUser = e => {
    e.preventDefault()
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: addUser.name})
    })
      .then(response => {
        // response.json()
        if(response.ok){
          props.fetchAndDisplayUsers()
        }
        // console.log('CreateUser', response)
      })
      .catch(err => console.error(err))
  }

 

  return (
    // <div className="users">     
      <Card className='user' body inverse color="info">
       <center><h3>Add User</h3></center>
        <Form onSubmit={CreateUser}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" onChange={onChange} value={addUser.name} />
          </FormGroup>
          <Button color="success">Add User</Button>
        </Form>
      </Card>
    // </div>
  )
}

export default AddUser