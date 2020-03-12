import React, {Component} from 'react';
import {Card, CardBody, CardGroup, CardImg} from 'reactstrap'
import './App.css';
import DisplaySpecies from './DisplaySpecies'
import DisplayTrackedSpecies from './DisplayTrackedSpecies'
import DisplaySightedSpecies from './DisplaySightedSpecies'
import AddSighting from './AddSighting'


class App extends Component {
  state = {
    species: [],
    trackedSpecies: [],
    sightedSpecies: []
  };
  
  fetchAndDisplaySpecies(){
    fetch("http://localhost:5000/species", {
      headers: {Accept: "application/json"}
    })
      .then(res => res.json())
      .then(species => {
        this.setState({species: species})
      })
      .catch(err => console.error(err))
  }

  fetchAndDisplayTrackedSpecies(){
    fetch("http://localhost:5000/trackedSpecies", {
      headers: {Accept: "application/json"}
    })
      .then(res => res.json())
      .then(trackedSpecies => {
        this.setState({trackedSpecies: trackedSpecies})
      })
      .catch(err => console.error(err))
  }

  fetchAndDisplaySightedSpecies(){
    fetch("http://localhost:5000/sightedSpecies", {
      headers: {Accept: "application/json"}
    })
      .then(res => res.json())
      .then(sightedSpecies => {
        this.setState({sightedSpecies: sightedSpecies})
      })
      .catch(err => console.error(err))
  }

  componentDidMount(){
    this.fetchAndDisplaySpecies()
    this.fetchAndDisplayTrackedSpecies()
    this.fetchAndDisplaySightedSpecies()
  }

  render (){
    return (
      <div className="App">
        <DisplaySpecies species={this.state.species} /> 
        <DisplayTrackedSpecies tracked_species={this.state.trackedSpecies} /> 
        <DisplaySightedSpecies sighted={this.state.sightedSpecies} /> 
        <AddSighting fetchAndDisplaySightedSpecies={this.fetchAndDisplaySightedSpecies.bind(this)}/>
      
      </div>
    );
  }
}

export default App;
