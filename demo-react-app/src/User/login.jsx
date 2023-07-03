import React, { useState } from "react";
import { Link, Navigate, Outlet, Router, useNavigate } from 'react-router-dom';
import '../App.jsx';
import { Form, Button, Row, Col, Container, NavLink} from 'react-bootstrap';
import './Login.css';
import UserLoginAPI from "../Config/UserAPI.jsx";
import { BiLogIn } from "react-icons/bi";
import Navbar from "../Home/Navbar.jsx";
// import { DashBoard } from '../Pages/DashBoard';
import Dashboard from "../Pages/DashBoard.jsx";


    const Login = () => {
        const [credentials, setCredentials] = useState({ email: "", password: "" });
        const [message, setMessage] = useState("");
       
      
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Replace with your API endpoint for user authentication
          fetch("https://localhost:7001/api/User/Login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          })
            .then((res) => {
              console.log(res);
              if (res.ok) {
                return res.json();
              } else {
                throw new Error("User Login failed");
              }
            })
            .then((data) => {
              console.log(data.token);
              console.log(data.userRole);
              // Save the token in local storage
              localStorage.setItem("token",data.token);
              // Saving the role in local storage
              localStorage.setItem("userRole",data.userRole);
              localStorage.setItem("userName",data.userName);
              window.alert("Login successful!");
              // Redirect to /units
            window.location.href = "http://localhost:5173/dashboard";
            })
            .catch((error) => {
              console.log(error);
              window.alert("Login failed. Please try again.");
            //   setMessage("alert-danger show");
              //window.location.reload();
              // Reload the page
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
              <div className="card-body p-20">
                <h2 className="fw-bold mt-2 text-uppercase">Login</h2>
                <p className="text-black-50 mb-5">
                  Please enter your Email and password!
                </p>
                <div className='py-3'/>
                <div className="form-outline form-white mb-2">
                  {/* <label className="form-label mt-1">Email: </label> */}
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className='py-3'/>
                <div className="form-outline form-white mb-3">
                  {/* <label className="form-label mt-1">Password: </label> */}
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    placeholder="password"
                    required
                  />
                </div>
                <button
                  className="btn btn-outline-dark btn-md px-5 login-btn"
                  onClick={handleSubmit}
                >
                  Login
                  <span>
                    <BiLogIn />
                  </span>
                </button>
                <div className="py-2"/>
                <p className="mt-2 checker-acc">
            Don't have an account? <Link to="/Signup">Register</Link></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
}

export default Login;