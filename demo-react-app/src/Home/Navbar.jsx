import React from 'react';
import { Link } from 'react-router-dom';
// navbar navbar-dark bg-dark
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.jsx';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarTop">
      <a className="navbar-brand" href="#">RailBook</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
    </ul>
  </div>
    <div className="navbar-text col-2">
        <button className="signup-button">Signup</button>
        <button className="login-button">Login</button>
    </div>
</nav>
</>
  );
}

export default Navbar;
