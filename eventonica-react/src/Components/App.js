import React, { Component } from "react";
import DisplayUsers from "./DisplayUsers";
import DeleteUser from "./DeleteUser";
import DisplayEvents from "./DisplayEvents";
import AddUser from './AddUser'
import AddEvent from './AddEvent'
import DeleteEvent from './DeleteEvent'
import EventonicaBar from './EventonicaBar'


class App extends Component {
  state = {
    users: [],
    events: []
  };
  
  fetchAndDisplayEvents(){
    fetch("http://localhost:8080/api/events", {
      headers: {Accept: "application/json"}
    })
      .then(res => res.json())
      .then(events => {
        this.setState({events: events})
      })
      .catch(err => console.log('error'))
  }
  fetchAndDisplayUsers() {
    fetch("http://localhost:8080/api/users", {
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(users => {
        this.setState({ users: users });
      })
      .catch(err => console.log(err));
  }
  componentDidMount(){
    this.fetchAndDisplayUsers()
    this.fetchAndDisplayEvents()
  }
  render() {
    return (
      <div className='users'>
        <EventonicaBar />
        <div className='user'>
          <DisplayUsers users={this.state.users} />
          <AddUser fetchAndDisplayUsers={this.fetchAndDisplayUsers.bind(this)}/>
          <DeleteUser fetchAndDisplayUsers={this.fetchAndDisplayUsers.bind(this)}/>
        </div>
        <div className='user'>
          <DisplayEvents events={this.state.events} />
          <AddEvent fetchAndDisplayEvents={this.fetchAndDisplayEvents.bind(this)}/>
          <DeleteEvent fetchAndDisplayEvents={this.fetchAndDisplayEvents.bind(this)}/>
        </div>
      </div>

    );
  }
}
export default App;
