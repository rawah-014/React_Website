import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./GlopalStyle.css";
import "./HowSection.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import user from "../assets/icons/user.png";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN

import CountrySelect from "react-bootstrap-country-select";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import { BsPersonCircle } from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

function HowSection() {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Row className="features">
        <Row>
          <Col md={9}>
            <div className="">
              <span className="small-header">How it works</span>
              <p className="big-header">Steps to getting started</p>
              <p className="content ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sed
                diam arcu ipsum nisi ac, tortor scelerisque non. Amet, donec
                iaculis aliquam mi mattis placerat.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <div className="box-container-active mt-2">
              <p className="active-h m-0">
                Register on the site and enter your data
              </p>
              <p className="active-p ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                dui faucibus tellus diam nulla. Ut ornare dui, bland.
              </p>
            </div>
            <div className="box-container mt-2">
              <p className="h m-0">Design your identity card</p>
              <p className="p ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                dui faucibus tellus diam nulla. Ut ornare dui, bland.
              </p>
            </div>
            <div className="box-container mt-2">
              <p className="h m-0">Choose the package</p>
              <p className="p ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                dui faucibus tellus diam nulla. Ut ornare dui, bland.
              </p>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <div className="form-container">
              <p className="form-header  pt-5">Create Account</p>

              {/* <div className="p-5 pt-0 pb-0">
                <ProgressBar now={60} className="progress" variant="custom" />;
              </div> */}
              <div className="m-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group controlId="validationCustom01">
                      <Form.Label className="label">Name</Form.Label>
                      <Form.Control
                        className="input-style"
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      controlId="validationCustomUsername"
                      className="mt-4"
                    >
                      <Form.Label className="label">Brand Name</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          className="input-style"
                          type="email"
                          placeholder="Enter Brand Name"
                          defaultValue="you@company.com"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a Brand Name.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mt-4">
                    <Form.Group controlId="validationCustom03">
                      <Form.Label className="label">Location</Form.Label>
                      <Row>
                        <Col md={6}>
                          <Form.Control
                            type="text"
                            placeholder="Country"
                            className="input-style"
                            defaultValue="AEU"
                            required
                          />

                          <Form.Control.Feedback type="invalid">
                            Please provide a valid country.
                          </Form.Control.Feedback>
                        </Col>
                        <Col md={6}>
                        <Form.Control
                            type="text"
                            placeholder="Country"
                            className="input-style"
                            defaultValue="AEU"
                            required
                          />
                          {/* <CountrySelect
                            className="input-style"
                            value={value}
                            onChange={setValue}
                          /> */}
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="3"
                      controlId="validationCustom04"
                    ></Form.Group>
                  </Row>
                  <Row className="mt-4 mb-4">
                  <Link to={'/login'} >
                    <Button type="submit" className="submit-button w-100 mb-5">
                      <span className="submit-text">Create Account</span> 
                    </Button>
                    </Link>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default HowSection;
