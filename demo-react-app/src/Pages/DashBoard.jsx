import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import TrainListing from "./Train/TrainList";
import ReserveTrain from "./Train/AddReservation";

const Dashboard = () => {

  const handleLogout = () => {
    const userRole = localStorage.getItem("userRole");
    localStorage.removeItem("token");
    
    window.location.href = "/login";
  };

    // fetching the userRole from the local storage
  // this is the current logged in user
  const userRole = localStorage.getItem("userRole");
  const userName = localStorage.getItem("userName");
  console.log(userName);
  console.log(userRole);

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
                <div className="mx-4"/>
                <div className="py-2"/>
                <div className="UserRoleName">
                  <a href="#" class="btn btn-secondary btn-md active" role="button" aria-pressed="true">{userRole}</a>
                  <a href="#" class="btn btn-secondary btn-md active" role="button" aria-pressed="true">{userName}</a>
                </div>
                <div className="navbar-nav ml-auto">
                  <button className="btn btn-md btn-outline-light mx-2" onClick={handleLogout}>
                    LogOut
                  </button>
                </div>
                <span className="mx-3"></span>
              </div>
            </div>
          </div>
      </nav>
      <div className="container my-4">
      </div>
    </div>
  );
};
export default Dashboard;