import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// navbar navbar-dark bg-dark
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.jsx';
import { NavLink, Button } from 'react-bootstrap';
import Reviews from './Review';
import { HomeBody } from './HomeBody';

const Navbar = () => {
  return (
      <>
      <nav className="navbar sticky-top bg-dark navbar-expand-md py-3" data-bs-theme="dark" style={{ zIndex:"1035" }}>
          <div className="container-fluid">
            <Link to="/" className="navbar-brand fs-6 initialism">RailBook</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav Home-nav-list">
                <NavLink className="nav-link mx-1" to="/">Home</NavLink>
                <NavLink className="nav-link mx-1" to="/service">Services</NavLink>
                <NavLink className="nav-link mx-1" to="/about">About</NavLink>
                <NavLink className="nav-link mx-1" to="/contact">Contact</NavLink>
                <span className="mx-3"></span>
                <Link className="btn btn-md btn-outline-light mx-2" to="/signup">SignUp</Link>
                <Link className="btn btn-md btn-outline-light mx-2" to="/login">Login</Link>
              </div>
            </div>
          </div>
      </nav>
      <HomeBody/>
      <Outlet/>
  </>
  )
}

export default Navbar;