import Home from './components/home/Home';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/tourdetail" element={<TourDetails/>}></Route>
    </Routes>
    </>
  );
}

export default App;
