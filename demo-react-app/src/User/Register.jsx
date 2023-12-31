import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { BiPowerOff } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import axios from 'axios';
// import './Login.css';
import './Register.css';
import Dashboard from '../Pages/DashBoard';

const Register = () => {
  const [formData, setFormData] = useState({
    // id:'',
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: '',
    role: 'P'
  });

  // const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem("userRole");
    fetch(`https://localhost:7001/api/User/SignUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          // alert('User Registration successful !!');
          window.location.href = "http://localhost:5173/login";
        } else {
          throw new Error('Error creating registration !');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar/>
    <Container className="todo-container">
        <div className="row d-flex justify-content-center h-50">
          <div className="col-7">
            <div
              className="card bg-light mt-5 text-center"
              id="loginCard"
              style={{ borderradius: "1rem" }}>
              <div className="card-body p-20"></div>
    <Card>
      <Card.Body>
        <h3><strong>Registration Form</strong></h3>
        <p className="text-black-50 mb-5">
          Please enter your details!
        </p>
        <p className="mt-2 checker-acc">
            Already have an account? <Link to="/login">Login</Link></p>
        <div className='py-1'/>
        <Form onSubmit={handleSubmit}>
          <div className='py-1'/>
          <Form.Group controlId="formFirstName">
            <input
                type="text"
                className="form-control"
                name="fname"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formLastName">
            <input
                type="text"
                className="form-control"
                name="lname"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formPhone">
            <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formEmail">
            <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formPassword">
            <input type="password" 
            className="form-control" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Password" 
            required 
            />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formRole">
            <input
                type="text"
                className="form-control"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Role"
                required
              />
          </Form.Group>
          <div className='py-2'/>
          <button className="btn btn-outline-dark btn-md px-5 login-btn" onClick={handleSubmit}> Submit 
          <span>
          <BiPowerOff />
          </span>
          </button>
        </Form>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </Container>
    </>
  );
};

export default Register;