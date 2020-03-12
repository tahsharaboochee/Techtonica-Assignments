import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Col, Row} from 'reactstrap'


const DisplaySpecies = ({species}) =>{
  return (
    <div>
      <Row>
        <Col>
        <center><h3>All Species</h3></center>
        {species.map((species) =>(
        <Card key={species.specie_id} body inverse color='info'>
          {/* <CardImg top width="100%" src={tracked_specie.image}/> */}
          <CardBody>
            <CardTitle><center><h3>Common Name:{species.common_name}</h3></center></CardTitle>
            <CardText>
              <ul>
                <li>Scientific Name: {species.scientific_name}</li>
                <li> Conservation Status: {species.conservation_status} </li> 
                <li>  Population:{species.num_living} </li>
                <li> specie_id:{species.specie_id}</li>
                <li><h3><a href={species.wiki_page}> More Information check out wikipedia</a></h3></li>
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

export default DisplaySpecies