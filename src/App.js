import Home from './components/home/Home';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';

const Data = require("./data/db.json")
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home data={Data} />}></Route>
      <Route path={"/:city/:id"} element={<TourDetails data={Data} />}></Route>    
    </Routes>
    </>
  );
}

export default App;
