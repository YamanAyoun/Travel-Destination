import './Tours.css'
function Tours(props) {
  return (
    <>
      {props.db.map((tour) => {
        return(
            <div key={tour.id}>
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
        )
  
})}
    </>
  )
}
export default Tours;