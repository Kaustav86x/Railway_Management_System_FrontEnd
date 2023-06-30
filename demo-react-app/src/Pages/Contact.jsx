import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Home/Navbar';
import './Contact.css';

function Contact() {
  return (
    <>
    <Navbar/>
    <Container>
      <Row>
        <Col lg={8}>
          <div className='py-2'/>
          <h2>Contact Us</h2>
          <hr/>
          <div className='py-2'/>
          <p>Fill out the form below to send us a message:</p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <div className='py-1'/>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <div className='py-1'/>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <div className='py-1'/>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <div className='py-2'/>
            <button
                  className="btn btn-outline-dark btn-md px-5 login-btn">
                  Submit
            </button>
          </Form>
        </Col>
        <Col lg={4}>
          <div className='py-2'/>
          <h2>Contact Information</h2>
          <hr/>
          <p>Feel free to contact us with any questions or concerns:</p>
          <ul>
            <li>Phone: 555-555-5555</li>
            <li>Email: deyk@railway.com</li>
            <li>Address: 123 Main St, Delhi, India</li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Contact;
