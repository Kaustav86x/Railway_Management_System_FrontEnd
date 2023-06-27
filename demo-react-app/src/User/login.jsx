import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../App.jsx';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Login.css';
import UserLoginAPI from "../Config/UserAPI.jsx";
import { BiLogIn } from "react-icons/bi";



const Login = () => {
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
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [message, setMessage] = useState('');
    const data = {
        email: email,
        password: pass
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios({
                method: 'post',
                url: 'https://localhost:7001/api/User/Login',
                data: data
            });
    
            toast(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

            if (res.status === 200) {
                setLoading(false);
                localStorage.setItem("token", JSON.stringify(res.data.token));
                navigate('/');
            }
        } catch (err) {
            setLoading(false);
        }
    }
    //  const submitButton = () => {
    //     setAlertClass("d-none");
    //  }
  return (
    <Container className="todo-container">
        <div className="row d-flex justify-content-center h-50">
            <div className="col-7">
              <div className="card bg-light mt-5 text-center" id="loginCard" style={{borderradius: "1rem"}}>
                <div className="card-body p-20">
                    <h2 className="fw-bold mt-2 text-uppercase">Login</h2>
                        <p className="text-black-50 mb-5">Please enter your Email and password!</p>
        {/* <Form className="form"> */}
            {/* <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="exampleForm.ControlInput1"> */}
                <div className="form-outline form-white mb-2">
                      <label className="form-label mt-1">Email: </label>
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" name='Email' onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"/>
                </div>
                <div className="form-outline form-white mb-3">
                      <label className="form-label mt-1">Password: </label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" name='Password' onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                </div>
                <button className="btn btn-outline-dark btn-md px-5 login-btn"onClick={handleSubmit}>Login<span><BiLogIn/></span></button>
        </div>
        </div>
        </div>
        </div>
        </Container>
  );
}

export default Login;