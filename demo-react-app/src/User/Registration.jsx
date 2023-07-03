import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
      fname: '',
      lname: '',
      phone: '',
      email: '',
      password: '',
      role: 'Passenger'
    });
  
    const history = useHistory();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://localhost:7001/api/User/SignUp', formData);
        if (response.status === 200) {
          history.push('/login');
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <Container className="registration-container">
          <h1>Registration</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="fname" placeholder="Enter first name" value={formData.fname} onChange={handleChange} required />
            </Form.Group>
    
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lname" placeholder="Enter last name" value={formData.lname} onChange={handleChange} required />
            </Form.Group>
    
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} required />
            </Form.Group>
    
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </Form.Group>
    
            <Form.Group controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" name="role" value={formData.role} onChange={handleChange}>
                <option value="Passenger">Passenger</option>
                <option value="Admin">Admin</option>
              </Form.Control>
            </Form.Group>
    
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      );
    }

    export default Registration; 