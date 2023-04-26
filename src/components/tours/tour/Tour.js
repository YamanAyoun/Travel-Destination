import React from 'react';
import './Tour.css'

function Tour(props) {
  const { name, image } = props.tour

  return (
    <div className="tour-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
    
  )
}

export default Tour;