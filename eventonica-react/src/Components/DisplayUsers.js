import React from 'react'
import {Card} from 'reactstrap';
const DisplayUsers = ({users}) => {
  return(
      <Card className='user' body inverse color="info" >
        <center><h3>All Users</h3></center>
          {users.map((user) =>(
            <ul key={user.user_id}>
              <li>{user.name} id:{user.user_id}</li>
            </ul>
          ))}
      </Card>
  )
}

export default DisplayUsers