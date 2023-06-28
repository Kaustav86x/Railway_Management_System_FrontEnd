import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="userType">
        <Form.Label>Select User Type</Form.Label>
        <Form.Control as="select" onChange={handleUserTypeChange}>
          <option value="">Select</option>
          <option value="Admin">Admin</option>
          <option value="Passsenger">User</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="firstName" className="">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      {/* follow this below form format */}
      <div className="row d-flex justify-content-center h-50">
        <div className="col-7">
          <div
            className="card bg-light mt-5 text-center"
            id="loginCard"
            style={{ borderradius: "1rem" }}>
          </div>
          <div className="row d-flex justify-content-center h-50">
            <div className="form-outline form-white mb-2">
              <label className="form-label mt-1">Email: </label>
              <input
                type="email"
                className="form-control"
                name="email"
                // value={credentials.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;