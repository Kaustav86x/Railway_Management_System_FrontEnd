import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
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
      <h1 className="text-center my-5">Our Services</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Train Schedule Management</Card.Title>
              <Card.Text>
                We manage the schedules of all trains in our system to ensure efficient and timely transportation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Passenger Ticketing</Card.Title>
              <Card.Text>
                We provide easy and convenient options for purchasing train tickets for our passengers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Cargo Management</Card.Title>
              <Card.Text>
                We offer safe and reliable handling of cargo for businesses and individuals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Train Maintenance</Card.Title>
              <Card.Text>
                We ensure that our trains are properly maintained to ensure their safety and reliability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Train Crew Management</Card.Title>
              <Card.Text>
                We manage the crews of all trains to ensure that they are qualified and properly trained.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Security and Safety Management</Card.Title>
              <Card.Text>
                We take the safety and security of our passengers and cargo seriously, and have measures in place to ensure it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Services;