import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import user from "../assets/icons/dolar.png";
import { Link } from "react-router-dom";
import "./StepFour.css";
import check from "../assets/icons/Check icon.png"

function StepFour() {
  return (
    <div>
      <Row className="text-center ">
        <div className="m-5 p-5"></div>
        <Col md={{ span: 3, offset: 4 }} className="w-50">
          <Row className="text-center">
            <Col md={1} className="">
              <div className="">
                <img src={user} className="" alt="icon" />
              </div>
            </Col>
            <Col md={7} className="text-start ms-4">
              <h className="title-login">Choose packages</h>
              <p className="login-content  pt-3">Choose the sutable package</p>
            </Col>
          </Row>
        </Col>
        <Container className="">
          <Row className="m-5">
            <Col md={1}></Col>
            <Col md={3}>
              <Container className="payment-section p-5 ">
                <Row>
                  <div className="">
                    <span className="pay-header text-start me5 pe-5 ">Basic plan</span>
                    <span className="popular text-end ms-5 ">Popular</span>
                  </div>
                </Row>
                <Row className="mt-3">
                  <Col md={2}>
                    <p className="payment">$10</p>
                  </Col>
                  <Col md={8}>
                    <p className="pay-header ms-5 ps-2 pt-3">per month</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                    <p className="pay-header">Basic features for up to 10 users.</p>
                </Row>
                <Row>
                <Link to={"/choose"}>
                <Button className="contact-button w-100 p-2" type="submit">
                  <span className="contact-btn-text"> Get Started</span>
                </Button>
                </Link>
                </Row>
                <Row className="text-start mt-5">
                    <Col md={12}>
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Access to basic features</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Basic reporting and analytics</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Up to 10 individual users</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">20GB individual data each user</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Basic chat and email support</span>
                    </Col>
                    
                </Row>
              </Container>
            </Col>
            <Col md={3}>
              <Container className="payment-section p-5">
                <Row>
                  <div className="text-start">
                    <span className="pay-header text-start">Business plan</span>
                 
                  </div>
                </Row>
                <Row className="mt-3">
                  <Col md={2}>
                    <p className="payment">$20</p>
                  </Col>
                  <Col md={8}>
                    <p className="pay-header ms-5 ps-2 pt-3">per month</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                    <p className="pay-header">Growing teams up to 20 users.</p>
                </Row>
                <Row>
                <Link to={"/choose"}>
                <Button className="contact-button w-100 p-2" type="submit">
                  <span className="contact-btn-text"> Get Started</span>
                </Button>
                </Link>
                </Row>
                <Row className="text-start mt-5">
                    <Col md={12}>
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Access to basic features</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Basic reporting and analytics</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Up to 10 individual users</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">20GB individual data each user</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Basic chat and email support</span>
                    </Col>
                    
                </Row>
              </Container>
            </Col>
            <Col md={3}>
              <Container className="payment-section p-5">
                <Row>
                  <div className="text-start">
                    <span className="pay-header text-start">Enterprise plan</span>
                  
                  </div>
                </Row>
                <Row className="mt-3">
                  <Col md={2}>
                    <p className="payment">$40</p>
                  </Col>
                  <Col md={8}>
                    <p className="pay-header ms-5 ps-2 pt-3">per month</p>
                  </Col>
                </Row>
                <Row className="mt-3">
                    <p className="pay-header">Advanced features + unlimited users.</p>
                </Row>
                <Row>
                <Link to={"/choose"}>
                <Button className="contact-button w-100 p-2" type="submit">
                  <span className="contact-btn-text"> Get Started</span>
                </Button>
                </Link>
                </Row>
                <Row className="text-start mt-5">
                    <Col md={12}>
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Access to basic features</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Basic reporting and analytics</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Up to 10 individual users</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">20GB individual data each user</span>
                    </Col>
                    <Col md={12} className="mt-2">
                    <img src={check} className="" alt="icon" />
                        <span className="check-pay ms-3">Basic chat and email support</span>
                    </Col>
                    
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
}

export default StepFour;
