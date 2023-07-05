import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import TrainListing from "./Train/TrainList";
import ReserveTrain from "./Train/AddReservation";
import { Card } from "react-bootstrap";

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
    <>
      <nav className="navbar sticky-top bg-dark navbar-expand-md py-3" data-bs-theme="dark" style={{ zIndex:"1035" }}>
          <div className="container-fluid">
            <Link to="/dashboard" className="navbar-brand fs-6 initialism">Flash Track</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav Home-nav-list">
                <Link className="nav-link mx-1" to="/TrainListing">Trains</Link>
                <Link className="nav-link mx-1" to="/Reservation">Reservation</Link>
                {userRole === "Admin" && (
                  <Link className="nav-link mx-1" to="/PaymentPage">Payment</Link>
                )}
                {userRole === "Passenger" && (
                  <Link className="nav-link mx-1" to="#">Payment</Link>
                )}
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
      {/* <div>
      <Card className="my-5 shadow-lg">
        <Card.Body>
          <Card.Title>Welcome to Flash Track</Card.Title>
          <Card.Text>
            Your all-in-one solution for managing your train travel needs! Our Railway Management System is designed to simplify the process of train travel by providing an intuitive and user-friendly interface for booking and managing reservations, viewing train schedules, and making payments. With RailBook, you can easily search for trains, book your seats, and make payments all in one place. Whether you're a passenger or an administrator, RailBook has everything you need to make your train travel experience smooth and hassle-free. So why wait? Sign up today and start enjoying the convenience of RailBook!
          </Card.Text>
        </Card.Body>
      </Card>
      </div> */}
      </>
  );
};
export default Dashboard;