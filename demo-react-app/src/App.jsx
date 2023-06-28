import "./App.css";
import HomePage from "./Home/Navbar";
import Login from "./User/login";
import Register from "./User/Register";
import { HomeBody } from "./Home/HomeBody";
// import HomePage from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reviews from "./Home/Review";
import Navbar from "./Home/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
          <Route path="/" element={<Navbar />} />
            <Route path="/" element={<HomeBody />} />
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<Register/>}></Route>
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
