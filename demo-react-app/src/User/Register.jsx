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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://localhost:7001/api/User/SignUp', formData);
  //     if (response.status === 200) {
  //       alert("Explore more with Flash Track")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          alert('User Registration successful !!');
          window.location.href = "http://localhost:5173/dashboard";
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
        {/* <Form.Group controlId="formId">
            <input
                type="text"
                className="form-control"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="ID"
                required
              />
          </Form.Group> */}
          <div className='py-3'/>
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