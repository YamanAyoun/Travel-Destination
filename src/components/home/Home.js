import React from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ToursData from '../../data/db.json';
import Tours from "../tours/Tours";
import TourDetails from '../TourDetails/TourDetails';
function Home() {
  return (
    <div>
      <Header/>
      <Tours db={ToursData}/> 
      <Footer/>
      <TourDetails db={ToursData}/>
    </div>
  );
}

export default Home;
