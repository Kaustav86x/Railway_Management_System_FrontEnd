import React from 'react';
import { Link } from 'react-router-dom';
// navbar navbar-dark bg-dark
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
  return (
    <div className="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarTop">
      <a class="navbar-brand" href="#">RailBook</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
    </ul>
  </div>
    <div class="navbar-text col-2">
        <button class="signup-button">Signup</button>
        <button class="login-button">Login</button>
    </div>
</nav>
</div>
  );
}
