import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
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
                <Link className="nav-link mx-1" to="/">Home</Link>
                <Link className="nav-link mx-1" to="/Services">Services</Link>
                <Link className="nav-link mx-1" to="/about">About</Link>
                <Link className="nav-link mx-1" to="/contact">Contact</Link>
                <span className="mx-3"></span>
                <Link className="btn btn-md btn-outline-light mx-2" to="/signup">SignUp</Link>
                <Link className="btn btn-md btn-outline-light mx-2" to="/login">Login</Link>
              </div>
            </div>
          </div>
      </nav>
        <Container>
          <Row className="my-5">
            <Col md={6}>
            <img src={"/Images/3.png"} rounded fluid />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>About Us</h2>
                <p>
                  We are a leading railway management system company that provides safe and efficient transportation services to passengers and cargo alike.
                </p>
                <p>
                  Our team is made up of experienced professionals in the railway industry who are dedicated to ensuring that our services meet and exceed the expectations of our customers.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>Our Vision</h2>
                <p>
                  Our vision is to be the most trusted and reliable railway management system company in the world, providing safe, efficient, and sustainable transportation services to all.
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>Our Mission</h2>
                <p>
                  Our mission is to provide our customers with the highest quality railway transportation services that are safe, efficient, and affordable, while also being socially and environmentally responsible.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        </>
      );
}
export default About;



