import React, {useState} from 'react'
import {Card, Button, Form, FormGroup, Label, Input} from 'reactstrap'

function DeleteUser(props){
  const[deleteUserById, setDeleteUserById] = useState(0)

  const handleId = e => {
    setDeleteUserById(e.target.value)
    // console.log('deleteUser id', deleteUserById)
  }
  const deleteById = e => {
    e.preventDefault()
    fetch(`http://localhost:8080/api/users/${deleteUserById}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_id: deleteUserById
      })
    })
    .then(id => {
      if(id.status){
        props.fetchAndDisplayUsers()
        setDeleteUserById('')
      }
    })
    .catch(err => console.error(err))
  }

    return (
        <Card className='user' body inverse color="info" >
          <center><h3>Delete User</h3></center>
            <Form onSubmit={deleteById}>
              <FormGroup>
                <Label for="name">User Id:</Label>
                <Input type="text" name="name" id="user-id" onChange={handleId} />
              </FormGroup>
              <Button color="danger">Delete User</Button>
            </Form>
        </Card>
    )
}
export default DeleteUser