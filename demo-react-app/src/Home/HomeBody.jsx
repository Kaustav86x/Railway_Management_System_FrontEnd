import React from 'react'
import { Link } from 'react-router-dom'
import './HomeBody.css';
import Navbar from './Navbar';

export const HomeBody = () => {
  return (
    <>
    <div className="home-page">
      {/* <img className="background-image" src="src/Images/1.png" alt="Train" /> */}
      <div className="background-image"/>
        <div className="d-flex justify-content-center home-page">
          <div className="content">
            <h1 className='display-4 text-center mt-5'>Welcome to <strong>Flash Track</strong></h1>
            <Link className="btn btn-lg btn-outline-light" to ="/login">Explore more !</Link>
          </div>
      </div>
    </div>
    </>
  )
}
