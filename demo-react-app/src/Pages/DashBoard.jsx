import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import TrainListing from "./Train/TrainList";
import ReserveTrain from "./Train/AddReservation";

const Dashboard = () => {

  // fetching the userRole from the local storage
  const userRole = localStorage.getItem("userRole"); 

  return (
    <div>
      <nav className="navbar sticky-top bg-dark navbar-expand-md py-3" data-bs-theme="dark" style={{ zIndex:"1035" }}>
          <div className="container-fluid">
            <Link to="/dashboard" className="navbar-brand fs-6 initialism">RailBook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav Home-nav-list">
                <Link className="nav-link mx-1" to="/TrainListing">Trains</Link>
                {/* <Link className="nav-link mx-1" to="/trainDetails">Train Details</Link> */}
                <Link className="nav-link mx-1" to="/Reservation">Reservation</Link>
                <Link className="nav-link mx-1" to="/ticket">Ticket</Link>
                <Link className="nav-link mx-1" to="/paymentDetails">Payment</Link>
                <span className="mx-3"></span>
              </div>
            </div>
          </div>
      </nav>
      <div className="container my-4">
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;