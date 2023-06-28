import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import '../App.jsx';
import { Form, Button, Row, Col, Container, Navbar } from 'react-bootstrap';
import './Login.css';
import UserLoginAPI from "../Config/UserAPI.jsx";
import { BiLogIn } from "react-icons/bi";



// const Login = () => {
    // const navigate =  useNavigate();
    // const [message, setMessage] = useState("");
    // const [alret, setAlertClass] = useState(" ");
    // const [loading, setLoading] = useState(" ");
    // const [loginDetail, setLoginDetail] = useState({
    //     Email: "abcd@gmail.com",
    //     Password: "hello123"
    // });
    
    // const handleInput = (event) => {
    //     const { name, value } = event.target;
    //     setLoginDetail((prev) => {
    //       return { ...prev, [name]: value };
    //     });
    //   }

    //   // fetch api
    //  const loginAPI = UserLoginAPI();

    //  const handleSubmit = async (e) => {
    //     // prevents from reloading the page
    //     e.preventDefault();
    //     setLoading(true);
    //     const response = await loginAPI(loginDetail);
    //     setMessage(response.Massage);
    //     if(response.StatusCode === 200) {
    //         setLoading(false);
    //         setAlertClass("alert-success show");
    //         navigate('/Navbar');
    //     }
    //     else
    //     {
    //         setAlertClass("alert-danger show");
    //     }
    //  }; 
    // const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [pass, setPassword] = useState('');
    // const [loading, setLoading] = useState('');
    // const [message, setMessage] = useState('');

    // const data = {
    //     email: "example@gmail.com",
    //     password: "admin123"
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const res = await axios({
    //             method: "POST",
    //             url: "https://localhost:7001/api/User/Login",
    //             data: JSON.stringify(data)
    //         });
    
    //         toast(res.data.message, {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             });

    //         if (res.status === 200) {
    //             setLoading(false);
    //             localStorage.setItem("token", JSON.stringify(res.data.token));
    //             setMessage()
    //             navigate('/');
    //         }
    //     } catch (err) {
    //         setLoading(false);
    //     }
    // }
    //  const submitButton = () => {
    //     setAlertClass("d-none");
    //  }
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
                throw new Error("Login failed");
              }
            })
            .then((data) => {
              console.log(data.token);
              // Save the token in local storage
              localStorage.setItem("token",data.token);
              window.alert("Login successful!");
              //window.location.reload();
              // Redirect to /units
            window.location.href = "http://localhost:5173";
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
              style={{ borderradius: "1rem" }}
            >
              <div className="card-body p-20">
                <h2 className="fw-bold mt-2 text-uppercase">Login</h2>
                <p className="text-black-50 mb-5">
                  Please enter your Email and password!
                </p>
                <div className="form-outline form-white mb-2">
                  <label className="form-label mt-1">Email: </label>
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
                <div className="form-outline form-white mb-3">
                  <label className="form-label mt-1">Password: </label>
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