import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import user from "../assets/icons/user.png";
import { Link } from "react-router-dom";

import { ProgressBar } from "react-step-progress-bar";

function StepOne() {
  return (
    <div>
      <Row>
        <div className="m-5 p-5"></div>
        <Row>

        </Row>
        <Row className=" text-center">
          <Container className="mt-5">
            <Row>
              <Col md={{ span: 3, offset: 4 }} className="w-50">
                <Row>
                  <Col md={1} className="">
                    <div className="">
                      <img src={user} className="icon-style p-3" alt="icon" />
                    </div>
                  </Col>
                  <Col md={4} className="text-start">
                    <h className="title-login">Sign up</h>
                    <p className="login-content  pt-3">
                      Start your 30-day free trial.
                    </p>
                  </Col>
                </Row>
                <Form className="text-start">
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Name</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="text"
                          placeholder="Name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">Email</Form.Label>
                        <Form.Control
                          className="login-input"
                          type="email"
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
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Reinter Password
                        </Form.Label>
                        <Form.Control
                          className="login-input"
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Business Type
                        </Form.Label>
                        <Form.Select
                          aria-label="Business Type"
                          className="login-input"
                        >
                          <option>Business Type</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Form.Group>
                        <Form.Label className="login-label">
                          Location
                        </Form.Label>
                        <Row>
                          <Col md={6}>
                            <Form.Control
                              className="login-input"
                              type="text"
                              placeholder="Country"
                              defaultValue={"AEU"}
                            />
                          </Col>
                          <Col md={6}>
                            <Form.Control
                              className="login-input"
                              type="text"
                              placeholder="Country"
                              defaultValue={"AEU"}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={8}>
                      <Link to={'/StepTwo'}>
                      <Button
                        className="contact-button w-100 p-2"
                        type="submit"
                      >
                        <span className="contact-btn-text"> Sign in</span>
                      </Button>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="text-center mt-4">
                    <Col md={8}>
                      <span className="login-content">
                        Already have an account?
                      </span>
                      <span className="forget">Login</span>
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

export default StepOne;
