import React from 'react';
import './Tours.css'
import Tour from './tour/Tour'
import { Link } from 'react-router-dom';
function Tours(props) {
  return (
    <div>
      {props.db.map((tour) => {
        return(
        <div key={tour.id}>
        <Link to={`/city/${tour.id}`}>
        <Tour name={tour.name} image={tour.image} />
        </Link>
        </div>
        )
  
})}
    </div>
  )
}
export default Tours;