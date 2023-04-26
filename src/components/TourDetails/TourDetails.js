import React from 'react';
import { useParams } from 'react';
import './TourDetails.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tour from '../tours/tour/Tour';

function TourDetails(props) {

  return (

    <>
      {props.db.map((tour) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tour.image} />
            <Card.Body>
              <Card.Title>City</Card.Title>
              <Card.Text>
              <p>City name is {tour.name}about more information {tour.info}</p>
              </Card.Text>
              <Button variant="primary">go</Button>
            </Card.Body>
          </Card>
         
         )
      })} 
    </>
  )
}


export default TourDetails;