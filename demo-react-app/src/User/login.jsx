import React, { useState } from "react";
import '../App.jsx';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Login.css';
// import { FiArrowDownCircle, FiPlus } from 'react-icons/fi';
// import { BiLogIn } from "react-icons/bi";


const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState(" ");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userCred = {
            email: email,
            password: pass
        }

        fetch(" ", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify({userCred})
        }).then((res)=> {
            alert("Login Successful")
            Navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })
    }
  return (
    <Container className="todo-container">
        <div className="row d-flex justify-content-center h-50">
            <div className="col-7">
              <div className="card bg-light mt-5 text-center" id="loginCard" style={{borderradius: "1rem"}}>
                <div className="card-body p-20">
                    <h2 className="fw-bold mt-2 text-uppercase">Login</h2>
                        <p className="text-black-50 mb-5">Please enter your Email and password!</p>
        <Form className="form">
            <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="exampleForm.ControlInput1">
                <div className="form-outline form-white mb-2">
                    <Form.Label>Email Address :  </Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com"/>
                </div>
                </Form.Group>
                <Form.Group onSubmit={handleSubmit} className="mb-3" controlId="exampleForm.ControlInput2">
                <div className="form-outline form-white mb-3">
                    <Form.Label>Password : </Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="password" placeholder="password"/>
                </div>
                <button type="button" class="loginButton btn-md">Login</button>
            </Form.Group>
        </Form>
        </div>
        </div>
        </div>
        </div>
        </Container>
  );
}

export default Login;