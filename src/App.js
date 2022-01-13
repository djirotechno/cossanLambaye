

import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Detail from "./components/Detail";
import './index.css'
import Indexw from "./components/indexw";
import Propos from "./components/Propos";
import Lambaye from "./components/Lambaye";
import Partenaire from "./components/Partenaire";

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route exact path="/" element={<Indexw/>}/>
         <Route exact path="/home" element={<Home/>}/>
         <Route exact path="/propos" element={<Propos/>}/>
         <Route exact path="/lambaye" element={<Lambaye/>}/>
         <Route exact path="/partenaire" element={<Partenaire/>}/>
         <Route exact path="/detail/:id" element={<Detail/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
