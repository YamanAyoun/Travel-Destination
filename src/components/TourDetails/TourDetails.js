import React from 'react';
import { useParams } from 'react';
import './TourDetails.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tour from '../tours/tour/Tour';

function TourDetails(props) {
  // const { id } = useParams();
  // const { name, image ,price} = props.tour

  // Find the tour with the matching id
  // const tour = ToursData.map(tour => tour.id === id);



  return (

    <>
      {props.db.map((tour) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tour.image} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}


export default TourDetails;