

import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import './index.css'
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route exact path="/home" element={<Home/>}/>
       </Routes>
         
      
     </Router>
    </div>
  );
}

export default App;
