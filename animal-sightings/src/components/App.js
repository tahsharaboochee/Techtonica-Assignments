import React, {Component} from 'react';
import {Card, CardBody, CardGroup, CardImg} from 'reactstrap'
import './App.css';
import DisplaySpecies from './DisplaySpecies'
import DisplaySightedSpecies from './DisplaySpecies'
import AddSighting from './AddSighting'


class App extends Component {
  state = {
    species: [],
    sightedSpecies: []
  };
  
  fetchAndDisplaySpecies(){
    fetch("http://localhost:5000/species", {
      headers: {Accept: "application/json"}
    })
      .then(res => res.json())
      .then(species => {
        console.log(species)
        this.setState({species: species})
      })
      .catch(err => console.error(err))
  }

  fetchAndDisplaySightedSpecies(){
    fetch("http://localhost:5000/sightedSpecies", {
      headers: {Accept: "application/json"}
    })
      .then(res => res.json())
      .then(sightedSpecies => {
        console.log(sightedSpecies)
        this.setState({sightedSpecies: sightedSpecies})
      })
      .catch(err => console.error(err))
  }

  componentDidMount(){
    this.fetchAndDisplaySpecies()
    this.fetchAndDisplaySightedSpecies()
  }

  render (){
    return (
      <div className="App">
        <DisplaySpecies species={this.state.species} /> 
        <DisplaySightedSpecies species={this.state.sightedSpecies} /> 
        <AddSighting fetchAndDisplaySpecies={this.fetchAndDisplaySpecies.bind(this)}/>
      
      </div>
    );
  }
}

export default App;
