import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { BiPowerOff } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
// import './Login.css';
import './Register.css';

const Register = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    role:''
  });

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Navbar/>
      {/* <div className="row d-flex justify-content-center h-50">
        <div className="col-7">
          <div className="card bg-light mt-5 text-center"
            id="registerCard" style={{ borderradius: "1rem" }}>
          </div>
          <div className="row d-flex justify-content-center"></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userType">
              <Form.Label>Select User Type</Form.Label>
              <Form.Control as="select" onChange={handleUserTypeChange}>
                <option value="">Select</option>
                <option value="Admin">Admin</option>
                <option value="Passsenger">Passenger</option>
              </Form.Control>
            </Form.Group>

      <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">First Name : </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
          </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">Last Name: </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
              <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">Phone: </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
              />
            </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">Email: </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">Password: </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">Role: </label>
              <input
                type="role"
                className="form-control"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="RoleId"
                required
              />
            </div>
            <button
                  className="btn btn-outline-dark btn-md px-5 login-btn"
                  onClick={handleSubmit}
                >
                  Submit
                  <span>
                    <BiPowerOff />
                  </span>
                </button>
    </Form>
    </div>
    </div> */}
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
        <div className='py-3'/>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            {/* <Form.Label>First Name</Form.Label> */}
            <input
                type="text"
                className="form-control"
                name="fname"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formLastName">
            {/* <Form.Label>Last Name</Form.Label> */}
            <input
                type="text"
                className="form-control"
                name="lname"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formPhone">
            {/* <Form.Label>Phone</Form.Label> */}
            <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
          </Form.Group>
          <div className='py-3'/>
          <Form.Group controlId="formRole">
            {/* <Form.Label>Role</Form.Label> */}
            <input
                type="text"
                className="form-control"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
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