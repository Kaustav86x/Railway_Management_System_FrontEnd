import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { BiPowerOff } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    firstName: " ",
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
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
  // }

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
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" name="fname" value={formData.firstName} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" name="lname" value={formData.lastName} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="passsword" value={formData.password} onChange={handleInputChange} required />
          </Form.Group>
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