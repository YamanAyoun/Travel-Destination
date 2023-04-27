import { useParams } from "react-router-dom";
import { useState } from 'react';
import './TourDetails.css';

const Data = require("../../data/db.json")

function TourDetails() {

  const {id} = useParams();
  const [view, setView] = useState(false);
  return (

    <>
     {
      Data.map(element=>{
        if(element.id == id){
          return(
            <div>
              <h2>{element.name}</h2>
              <img class="img" src={element.image} alt={element.name}/>
              <h3>{element.price} $</h3>
            <div>
            {
              view? <>
              <p>{element.info}</p>
              <button onClick={()=>setView(false)}>Show less</button>
              </>
              :
              <>
              <p>{(element.info).substring(0,200)}</p>
              <button onClick={()=>setView(true)}>Show more</button>
              </>
            }
            </div>
            </div>
          )
        }
      })
     }
    </>
  )
}


export default TourDetails;