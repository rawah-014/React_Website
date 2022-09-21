import React, { Fragment, useState, useEffect } from 'react'

import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../component/NavBar.css";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import loginlogo from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Login.css";
import { Link } from "react-router-dom";

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../redux/actions/userActions'


function Login({ history, location }) {

   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(state => state.auth);

  //const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {

      if (isAuthenticated) {
          history.push('/StepOne')
          alert.success('Product created successfully');
      }

      if (error) {
          alert.error(error);
          dispatch(clearErrors());
      }

  }, [dispatch, isAuthenticated, error, history])

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password))
  } /* 
 */

  return (
    <div>
      <Row>
        <Row>
          <Navbar expand="lg" className="navbar w-100">
            <Container>
              <Navbar.Brand className="" href="#home">
                <img src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="navlink me-4" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navlink me-4" href="#">
                    Features
                  </Nav.Link>
                  <Nav.Link className="navlink me-4" href="#">
                    Services
                  </Nav.Link>
                  <Nav.Link className="navlink me-4" href="#">
                    How it work
                  </Nav.Link>
                </Nav>
                <Button variant="" size="lg" className="loginbutton me-2">
                  Log in
                </Button>
                <Button variant="" className="joinus shadow-lg" size="lg">
                  Sign up
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        <div className="m-5 p-5"></div>
        <Row className=" text-center">
          <Container>
            <div className="logo-login">
              <img src={loginlogo} />
            </div>
            <h className="title-login">Log in to your account</h>
            <p className="login-content w-100 pt-3">
              Welcome back! Please enter your details.
            </p>
          </Container>
          <Container className="mt-5">
            <Row>
              <Col md={{ span: 3, offset: 4 }} className="w-50">
                <Form className="text-start"  onSubmit={submitHandler} >
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Email</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="email"
                           id="email_field"
                        
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder="Email"
                          defaultValue={"you@company.com"}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Password
                        </Form.Label>
                        <Form.Control
                          className="login-input"
                          type="password"
                           id="password_field"
                           placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <p className="forget">Forget Password ?</p>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      
                        <Button
                          className="contact-button w-100 p-2"
                          type="submit"
                          id="login_button"
                        >
                          <span className="contact-btn-text"> Login</span>
                        </Button>
                    
                    </Col>
                  </Row>
                  <Row className="text-center mt-4">
                    <Col md={8}>
                      <span className="login-content">
                        Don’t have an account?
                      </span>
                      <span className="forget">Sign up</span>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </Row>
      </Row>
    </div>
  );
}

export default Login;
