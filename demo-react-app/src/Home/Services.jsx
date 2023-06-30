import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Services.css';

const Services = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <h1 className="text-center py-4">Our Services</h1>
      <hr/>
      <div className='py-2'/>
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
          <div className='py-3'/>
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