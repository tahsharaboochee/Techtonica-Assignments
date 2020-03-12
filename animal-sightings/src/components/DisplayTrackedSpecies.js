import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Col, Row} from 'reactstrap'


const DisplayTrackedSpecies = ({tracked_species}) =>{
  return (
    <div>
      <Row>
        <Col>
        <center><h3>All Tracked Species</h3></center>
        {tracked_species.map((tracked_specie) =>(
        <Card key={tracked_specie.tracked_specie_id} body inverse color='info'>
          <CardImg top width="100%" src={tracked_specie.image}/>
          <CardBody>
            <CardTitle><center><h3>Nickname: {tracked_specie.nickname}</h3></center></CardTitle>
            <CardText>
              <ul>
                <li>Tracked specie id:{tracked_specie.tracked_specie_id}</li>
                <li>Specie ID: {tracked_specie.specie_id}</li> 
                <li> Date Sighted:{tracked_specie.date_sighted}</li>
              </ul>
            </CardText>
          </CardBody>
        </Card>
        ))}
        </Col>
      </Row>
    </div> 
  )
}

export default DisplayTrackedSpecies