import "./App.css";
import HomePage from "./Home/Navbar";
import Login from "./User/login";
import Register from "./User/Register";
import { HomeBody } from "./Home/HomeBody";
// import HomePage from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reviews from "./Home/Review";
import Navbar from "./Home/Navbar";
import { Home } from "./Pages/Home";
import Services from "./Home/Services";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Navbar />} />
            <Route path="/" element={<HomeBody />} />
            <Route path="/Services" element={<Services/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<About/>}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/SignUp" element={<Register/>}/>
            {/* <Route path="/Home" element={<Home/>}/> */}
          </Route>
          {/* <Route path='/' element={ <HomePage/>}/> */}
        </Routes>
      </Router>
      <Router>
      </Router>
    </>
  );
}

export default App;
