import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


// import Buttons from './Components/Buttons';
import Home from './screens/Home';
import Pool from './screens/Pool';
import Stake from './screens/Stake';
import Bridge from './screens/Bridge';
import LendPage from './screens/Lend_page';


function App() {
  return (

    <Router>
      <div  >
        <Routes>

          <Route   exact path="/" element={< Home />} />
          <Route exact path="/pool" element={<Pool/>} />
          <Route exact path="/stake" element={<Stake/>} />
          <Route exact path="/bridge" element={<Bridge/>} /> 
          <Route exact path="/lend" element={<LendPage/>} />




        </Routes>
      </div>
    </Router>
  );
}

export default App;
