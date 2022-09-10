import { Container, Row, Col } from "react-bootstrap";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import login from "../assets/icons/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../component/GetInTouchSection.css";
import "./Step1.css";
import "./Login.css";
import "./Choose.css";
import user from "../assets/icons/dolar.png";
import { Link } from "react-router-dom";
import "./StepFour.css";
import fullCup from "../assets/icons/Group 26.png";
import EmptyCup from "../assets/icons/Group 26(1).png";
import check from "../assets/icons/Frame 13.png";
import Breakfast from "../assets/icons/Text.png";
import gel from"../assets/icons/dd.png"

function Choose() {
  return (
    <div>
      <Row className="text-center ">
        <Container className="text-center ">
          <div className="logo-login mb-5">
            <img src={logo} />
          </div>
          <h className="title-login">Choose your product </h>
          <p className="login-content w-100 pt-3">Lorem ipsum dolor sit amet</p>
        </Container>

        <Container className="">
          <Row className="m-5">
            <Col md={1}></Col>
            <Col md={3}>
              <Container className="choose-section p-5 ">
                <Row className="text-start">
                  <p className="choose-header">Loyalty Card</p>
                </Row>
                <Row>
                  <div className="cup-section">
                    <Row>
                      <Container className="">
                        <Row className="">
                          <div className=" ">
                            <img src={check} className="mt-4" />
                            <span className="step-header me-5">
                              Evaro Coffee
                            </span>
                            <span className="step-content ms-5 ">2\4</span>
                          </div>
                        </Row>
                        <Row>
                          <div className=" step-content text-start ps-5">
                            <p className="step-content">Jesse Prehodick</p>
                          </div>
                        </Row>
                        <Row className="m-3">
                          <Col md={3}>
                            <img src={fullCup} />
                          </Col>
                          <Col md={3}>
                            <img src={fullCup} />
                          </Col>
                          <Col md={3}>
                            <img src={EmptyCup} />
                          </Col>
                          <Col md={3}>
                            <img src={EmptyCup} />
                          </Col>
                        </Row>
                      </Container>
                    </Row>
                  </div>
                </Row>
              </Container>
            </Col>
            <Col md={3}>
              <Container className="choose-section p-5 ">
                <Row className="text-start">
                  <p className="choose-header">Electronic Menu</p>
                </Row>
                <Row>
                <div className="cup-section">
                    <Row>
                      <Container className="">
                        <Row className="">
                          <div className=" ">
                            <span className="step-header ">
                              Evaro Resturant
                            </span>
                            <img
                              src={check}
                              className="mt-4 ms-5 ps-4 text-end"
                            />
                          </div>
                        </Row>
                        <Row>
                          <div className=" step-content">
                            <p className="step3-header text-start ms-4">Hot Meals</p>
                          </div>
                        </Row>
                        <Row className="text-start mt-0 pt-0">
                          <Col md={1}>
                            <img src={gel} className="" />
                          </Col>
                          <Col md={6} className=" pt-2 ms-5">
                            <p className="res-food-choose ">Burger</p>
                            <p className="res-food-des">
                              Et massa non est amet phasellus.
                            </p>
                          </Col>
                          <Col md={1}>
                            <p className="res-food">$30</p>
                          </Col>
                        </Row>
                        <Row className="text-start mt-0 pt-0">
                          <Col md={1}>
                            <img src={gel} className="" />
                          </Col>
                          <Col md={6} className=" pt-2 ms-5">
                            <p className="res-food-choose ">Burger</p>
                            <p className="res-food-des">
                              Et massa non est amet phasellus.
                            </p>
                          </Col>
                          <Col md={1}>
                            <p className="res-food">$30</p>
                          </Col>
                        </Row>
                        <Row className="text-start mt-0 pt-0">
                          <Col md={1}>
                            <img src={gel} className="" />
                          </Col>
                          <Col md={6} className=" pt-2 ms-5">
                            <p className="res-food-choose ">Burger</p>
                            <p className="res-food-des">
                              Et massa non est amet phasellus.
                            </p>
                          </Col>
                          <Col md={1}>
                            <p className="res-food">$30</p>
                          </Col>
                        </Row>
                       
                        
                      </Container>
                    </Row>
                  </div>
                </Row>
              </Container>
            </Col>
            <Col md={3}>
              <Container className="choose-section p-5 ">
                <Row className="text-start">
                  <p className="choose-header">Both</p>
                </Row>
                <Row>
                  <div className="cup-section">
                    <Row>
                      <Container className="">
                        <Row className="">
                          <div className=" ">
                            <img src={check} className="mt-4" />
                            <span className="step-header me-5">
                              Evaro Coffee
                            </span>
                            <span className="step-content ms-5 ">2\4</span>
                          </div>
                        </Row>
                        <Row>
                          <div className=" step-content text-start ps-5">
                            <p className="step-content">Jesse Prehodick</p>
                          </div>
                        </Row>
                        <Row className="m-3">
                          <Col md={3}>
                            <img src={fullCup} />
                          </Col>
                          <Col md={3}>
                            <img src={fullCup} />
                          </Col>
                          <Col md={3}>
                            <img src={EmptyCup} />
                          </Col>
                          <Col md={3}>
                            <img src={EmptyCup} />
                          </Col>
                        </Row>
                      </Container>
                    </Row>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
}

export default Choose;
