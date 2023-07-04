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
import Contact from "./Pages/Contact";
import { useState, useEffect } from "react";
import Dashboard from "./Pages/DashBoard";
import TrainListing from "./Pages/Train/TrainList";
import ReserveTrain from "./Pages/Train/AddReservation";
import TicketForm from "./Pages/Ticket.jsx";
import Reservation from "./Pages/Train/ReservationList";
import { PaymentPage } from "./Pages/Payment";
import AddTrain from "./Pages/Train/AddTrain";
// import GetAllTrains from "./Pages/Train/TrainList";

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a token in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token"); // Clear the token from local storage on logout
  };

  return (
    <>
      <Router>
        {isLoggedIn}
        <div>
        <Routes>
          {!isLoggedIn && (
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          )}
            <Route path="/" element={<Home/>} />
            {/* <Route path="/" element={<HomeBody />} /> */}
            <Route path="/Services" exact element={<Services/>}/>
            <Route path="/About" exact element={<About/>}/>
            <Route path="/Contact" exact element={<Contact/>}/>
            <Route path="/Login" exact element={<Login />}/>
            <Route path="/SignUp" exact element={<Register/>}/>
            <Route path="/Dashboard" exact element={<Dashboard/>}/>
            <Route path="/TrainListing" exact element={<TrainListing/>}/>
            <Route path="/Reservation" exact element={<Reservation/>}/>
            <Route path="/train/ReserveTrain/:trainId" exact element={<ReserveTrain/>}/>
            {/* <Route path="/train/" exact element={<TicketForm/>}/> */}
            <Route path="/PaymentPage" exact element={<PaymentPage/>}/>
            <Route path="/train/AddTrain" exact element={<AddTrain/>}/>
        </Routes>
        </div>
      </Router>
      <Router>
      </Router>
    </>
  );
}

export default App;
