import React from 'react';
import './Tours.css'
import Tour from './tour/Tour'
function Tours(props) {
  return (
    <div className="tours">
      {props.db.map((tour) => {
        return(
        //     <div key={tour.id}>
        //   <h2>{tour.name}</h2>
        //   <img src={tour.image} alt={tour.name} />
        // </div>
        <Tour key={tour.id} tour={tour} />
        )
  
})}
    </div>
  )
}
export default Tours;