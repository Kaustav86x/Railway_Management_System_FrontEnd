import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';

const About = () => {
    return (
        <>
        <Navbar/>
        <Container>
          <Row className="my-5">
            <Col md={6}>
            <img src={"src/Images/3.png"} rounded fluid />
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>About Us</h2>
                <hr/>
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
                <hr/>
                <p>
                  Our vision is to be the most trusted and reliable railway management system company in the world, providing safe, efficient, and sustainable transportation services to all.
                </p>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h2>Our Mission</h2>
                <hr/>
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



